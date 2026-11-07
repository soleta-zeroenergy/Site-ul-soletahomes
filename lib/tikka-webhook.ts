/* ─── Tikka webhook forwarding ───────────────────────────────────────────── */
/* Builds, signs and sends the O5 lead payload for every real contact/offer  */
/* submission, in parallel with the existing email delivery. The email and   */
/* the HTTP response never depend on how the webhook behaves.               */
/* Runtime import is node:crypto only — form types are imported with        */
/* `import type` so they are fully erased (this file is also executed       */
/* directly by Node's type-stripping from the .mts test scripts).           */

import { createHmac } from "node:crypto";
import type { ContactFormData } from "./contact-schema";
import type { OfferFormData } from "./offer-schema";

/* ── Shared types ────────────────────────────────────────────────────────── */

export type Attribution = Partial<Record<
  | "utmSource" | "utmMedium" | "utmCampaign" | "utmTerm" | "utmContent"
  | "gclid" | "fbclid" | "ref" | "landingUrl" | "referrer",
  string
>>;

export type QualificationValue = string | number | boolean;
export type Qualification = Record<string, QualificationValue>;

export interface TikkaLeadPayload {
  deliveryId:      string;
  name:            string;
  email?:          string;
  phone?:          string;
  locale:          string;
  country:         string;
  site:            string;
  message?:        string;
  attribution?:    Attribution;
  qualification?:  Qualification;
}

export type ForwardResult =
  | { status: "skipped"; reason: "not_configured" | "invalid_url" | "invalid_secret" | "no_identifier" }
  | { status: "sent"; httpStatus: number }
  | { status: "failed"; reason: "timeout" | "network" | "http"; httpStatus?: number };

export interface ForwardOptions {
  url:         string;
  secret:      string;
  now:         () => Date;
  fetchImpl?:  typeof fetch;
  timeoutMs?:  number;
}

export type ForwardLike = ForwardResult | Promise<ForwardResult> | (() => ForwardResult | Promise<ForwardResult>);

export interface DeliverOptions {
  sendEmail: () => unknown | Promise<unknown>;
  forward:   ForwardLike;
}

export interface DeliverResult {
  emailOk:     boolean;
  emailError?: unknown;
  forward:     ForwardResult;
}

/* ── Constants ───────────────────────────────────────────────────────────── */

export const TIKKA_TIMEOUT_MS = 3000;

/* ── Country code resolution ─────────────────────────────────────────────── */

const COUNTRY_LOCALES = ["en", "ro", "de", "fr", "it", "es", "nl", "pt"];
const EXCLUDED_REGION_CODES = new Set(["EU", "EZ", "UN", "QO", "ZZ"]);

const COUNTRY_ALIASES: Record<string, string> = {
  "uk":               "GB",
  "england":          "GB",
  "scotland":         "GB",
  "wales":            "GB",
  "northern ireland": "GB",
  "usa":              "US",
  "us":               "US",
  "america":          "US",
  "holland":          "NL",
};

let countryTable: Map<string, string> | null = null;

// Strips Unicode combining diacritical marks (code points 0x0300–0x036F) left
// behind by NFD normalization, without embedding literal combining
// characters in the source.
function stripCombiningMarks(input: string): string {
  let out = "";
  for (const ch of input) {
    const code = ch.codePointAt(0) ?? 0;
    if (code >= 0x0300 && code <= 0x036f) continue;
    out += ch;
  }
  return out;
}

function normalizeCountryInput(raw: string): string {
  return stripCombiningMarks(raw.normalize("NFD"))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/^the\s+/, "");
}

function isCanonicalRegion(code: string): boolean {
  try {
    return Intl.getCanonicalLocales(`und-${code}`)[0] === `und-${code}`;
  } catch {
    return false;
  }
}

function buildCountryTable(): Map<string, string> {
  const table = new Map<string, string>();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (const locale of COUNTRY_LOCALES) {
    let displayNames: Intl.DisplayNames;
    try {
      displayNames = new Intl.DisplayNames([locale], { type: "region" });
    } catch {
      continue;
    }

    for (const a of letters) {
      for (const b of letters) {
        const code = a + b;
        if (EXCLUDED_REGION_CODES.has(code)) continue;
        // Deprecated codes (DD, BU, AN, ...) also have display names and sort
        // before their replacements; keep only codes that are canonical.
        if (!isCanonicalRegion(code)) continue;

        let name: string | undefined;
        try {
          name = displayNames.of(code);
        } catch {
          continue;
        }
        if (!name) continue;

        const normalized = normalizeCountryInput(name);
        if (!normalized || normalized === code.toLowerCase()) continue;
        if (!table.has(normalized)) table.set(normalized, code);
      }
    }
  }

  return table;
}

export function toCountryCode(raw: string): string {
  const normalized = normalizeCountryInput(typeof raw === "string" ? raw : "");
  if (!normalized) return "ZZ";

  if (!countryTable) countryTable = buildCountryTable();

  const fromTable = countryTable.get(normalized);
  if (fromTable) return fromTable;

  // Own-property lookup only: a plain index would also return inherited
  // Object.prototype members (e.g. "constructor") as if they were codes.
  if (Object.prototype.hasOwnProperty.call(COUNTRY_ALIASES, normalized)) {
    return COUNTRY_ALIASES[normalized];
  }

  if (/^[a-z]{2}$/.test(normalized)) return normalized.toUpperCase();

  return "ZZ";
}

/* ── Attribution ─────────────────────────────────────────────────────────── */

const ATTRIBUTION_LIMITS: Record<keyof Attribution, number> = {
  utmSource:   200,
  utmMedium:   200,
  utmCampaign: 200,
  utmTerm:     200,
  utmContent:  200,
  gclid:       500,
  fbclid:      500,
  ref:         200,
  landingUrl:  2000,
  referrer:    2000,
};

export function pickAttribution(raw: unknown): Attribution | undefined {
  if (typeof raw !== "object" || raw === null) return undefined;

  const source = raw as Record<string, unknown>;
  const result: Attribution = {};

  for (const key of Object.keys(ATTRIBUTION_LIMITS) as (keyof Attribution)[]) {
    const value = source[key];
    if (typeof value !== "string") continue;
    const trimmed = value.trim();
    if (!trimmed) continue;
    result[key] = trimmed.slice(0, ATTRIBUTION_LIMITS[key]);
  }

  return Object.keys(result).length > 0 ? result : undefined;
}

/* ── Lead payload builders ───────────────────────────────────────────────── */

function truncate(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, max) : undefined;
}

function truncateKeep(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function identifierEmail(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > 254) return undefined;
  return trimmed;
}

function identifierPhone(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > 40) return undefined;
  return trimmed;
}

function setQual(qualification: Qualification, key: string, value: unknown): void {
  const v = truncate(value, 500);
  if (v !== undefined) qualification[key] = v;
}

export function buildContactLead(
  d: ContactFormData,
  attribution: Attribution | undefined,
  deliveryId: string
): TikkaLeadPayload | null {
  const email = identifierEmail(d.email);
  const phone = identifierPhone(d.phone);
  if (!email && !phone) return null;

  const qualification: Qualification = { form: "contact" };
  setQual(qualification, "segment", d.segment);
  setQual(qualification, "inquiry_type", d.inquiryType);
  setQual(qualification, "location", d.location);
  setQual(qualification, "intended_use", d.intendedUse);
  setQual(qualification, "project_stage", d.projectStage);
  setQual(qualification, "timeline", d.timeline);
  setQual(qualification, "country_text", d.country);

  const payload: TikkaLeadPayload = {
    deliveryId,
    name:    truncateKeep(d.name, 200),
    locale:  "en",
    country: toCountryCode(typeof d.country === "string" ? d.country : ""),
    site:    "soletahomes.com",
    qualification,
  };

  if (email) payload.email = email;
  if (phone) payload.phone = phone;

  const message = truncate(d.message, 5000);
  if (message) payload.message = message;

  if (attribution) payload.attribution = attribution;

  return payload;
}

export function buildOfferLead(
  d: OfferFormData,
  attribution: Attribution | undefined,
  deliveryId: string
): TikkaLeadPayload | null {
  const email = identifierEmail(d.email);
  const phone = identifierPhone(d.phone);
  if (!email && !phone) return null;

  const qualification: Qualification = { form: "private_offer" };
  setQual(qualification, "segment", d.segment);
  setQual(qualification, "location", d.location);
  setQual(qualification, "land_status", d.landStatus);
  setQual(qualification, "intended_use", d.intendedUse);
  setQual(qualification, "project_path", d.projectPath);
  setQual(qualification, "estimated_size", d.estimatedSize);
  setQual(qualification, "budget", d.budget);
  setQual(qualification, "site_type", d.siteType);
  setQual(qualification, "timeline", d.timeline);
  if (Array.isArray(d.documents) && d.documents.length > 0) {
    setQual(qualification, "documents", d.documents.filter((v) => typeof v === "string").join("; "));
  }
  setQual(qualification, "referral", d.referral);
  setQual(qualification, "country_text", d.country);

  const payload: TikkaLeadPayload = {
    deliveryId,
    name:    truncateKeep(d.name, 200),
    locale:  "en",
    country: toCountryCode(typeof d.country === "string" ? d.country : ""),
    site:    "soletahomes.com",
    qualification,
  };

  if (email) payload.email = email;
  if (phone) payload.phone = phone;

  const message = truncate(d.description, 5000);
  if (message) payload.message = message;

  if (attribution) payload.attribution = attribution;

  return payload;
}

/* ── Signing ──────────────────────────────────────────────────────────────── */

export function decodeSecret(b64url: string): Uint8Array | null {
  if (typeof b64url !== "string" || !b64url) return null;
  if (!/^[A-Za-z0-9_-]+$/.test(b64url)) return null;

  let buf: Buffer;
  try {
    buf = Buffer.from(b64url, "base64url");
  } catch {
    return null;
  }

  if (buf.length !== 32) return null;
  return new Uint8Array(buf);
}

export function signatureHeader(secret: Uint8Array, t: number, body: string): string {
  const v1 = createHmac("sha256", secret).update(`${t}.${body}`, "utf8").digest("hex");
  return `t=${t},v1=${v1}`;
}

/* ── Forwarding ───────────────────────────────────────────────────────────── */

function isAllowedHost(hostname: string): boolean {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]" || hostname === "::1";
}

export async function forwardToTikka(
  payload: TikkaLeadPayload | null,
  options: ForwardOptions
): Promise<ForwardResult> {
  // The whole body is guarded: everything below can throw (option access,
  // now(), JSON.stringify, signing, fetch) and forwardToTikka must still
  // resolve — it never rejects.
  try {
    if (payload === null) return { status: "skipped", reason: "no_identifier" };

    const { url, secret, now, fetchImpl = fetch, timeoutMs = TIKKA_TIMEOUT_MS } = options;

    if (!url || !secret) return { status: "skipped", reason: "not_configured" };

    let parsedUrl: URL;
    try {
      parsedUrl = new URL(url);
    } catch {
      return { status: "skipped", reason: "invalid_url" };
    }

    const isHttps = parsedUrl.protocol === "https:";
    const isLocalHttp = parsedUrl.protocol === "http:" && isAllowedHost(parsedUrl.hostname);
    if (!isHttps && !isLocalHttp) return { status: "skipped", reason: "invalid_url" };

    const secretBytes = decodeSecret(secret);
    if (!secretBytes) return { status: "skipped", reason: "invalid_secret" };

    const body = JSON.stringify(payload);
    const t = Math.floor(now().getTime() / 1000);
    const signature = signatureHeader(secretBytes, t, body);

    const response = await fetchImpl(parsedUrl.toString(), {
      method:  "POST",
      headers: {
        "content-type":         "application/json",
        "x-webhook-signature":  signature,
      },
      body,
      redirect: "error",
      signal:   AbortSignal.timeout(timeoutMs),
    });

    if (response.status >= 200 && response.status < 300) {
      return { status: "sent", httpStatus: response.status };
    }
    return { status: "failed", reason: "http", httpStatus: response.status };
  } catch (err) {
    const name = (err as { name?: string } | null)?.name;
    if (name === "TimeoutError" || name === "AbortError") {
      return { status: "failed", reason: "timeout" };
    }
    return { status: "failed", reason: "network" };
  }
}

/* ── Delivery (email + forward in parallel) ──────────────────────────────── */

export async function deliver(options: DeliverOptions): Promise<DeliverResult> {
  const { sendEmail, forward } = options;

  const forwardPromise: Promise<ForwardResult> = (async () => {
    try {
      const outcome = typeof forward === "function" ? forward() : forward;
      return await outcome;
    } catch {
      return { status: "failed", reason: "network" };
    }
  })();

  const emailPromise: Promise<{ ok: boolean; error?: unknown }> = (async () => {
    try {
      await sendEmail();
      return { ok: true };
    } catch (error) {
      return { ok: false, error };
    }
  })();

  const [forwardResult, emailResult] = await Promise.all([forwardPromise, emailPromise]);

  return {
    emailOk: emailResult.ok,
    ...(emailResult.ok ? {} : { emailError: emailResult.error }),
    forward: forwardResult,
  };
}

/* ── Logging ──────────────────────────────────────────────────────────────── */

export function logForward(tag: string, deliveryId: string, result: ForwardResult): void {
  console.log(`[${tag}] TIKKA_FORWARD`, {
    deliveryId,
    status:     result.status,
    reason:     "reason" in result ? result.reason : undefined,
    httpStatus: "httpStatus" in result ? result.httpStatus : undefined,
  });
}
