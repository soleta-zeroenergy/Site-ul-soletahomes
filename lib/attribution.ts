/* ─── First-touch attribution capture ────────────────────────────────────── */
/* Captures utm_* / gclid / fbclid / ref plus the landing URL and cross-origin */
/* referrer on the very first page of a session, and reads it back for the   */
/* contact/offer form payloads. Browser-only; every storage access is        */
/* wrapped so this stays safe if evaluated during prerender. What is kept in */
/* sessionStorage (and handed back to callers) is gated by the current       */
/* cookie consent choice, re-applied live as consent changes.                */

import type { Attribution } from "./tikka-webhook";
import { readConsent } from "./consent";

const STORAGE_KEY = "soleta_attribution";

const PARAM_KEYS: Record<string, keyof Attribution> = {
  utm_source:   "utmSource",
  utm_medium:   "utmMedium",
  utm_campaign: "utmCampaign",
  utm_term:     "utmTerm",
  utm_content:  "utmContent",
  gclid:        "gclid",
  fbclid:       "fbclid",
  ref:          "ref",
};

const ANALYTICS_KEYS: (keyof Attribution)[] = [
  "utmSource", "utmMedium", "utmCampaign", "utmTerm", "utmContent", "ref", "landingUrl", "referrer",
];

const MARKETING_KEYS: (keyof Attribution)[] = ["gclid", "fbclid"];

/* ── Module-level first-touch snapshot ───────────────────────────────────── */

let snapshotTaken = false;
let snapshot: Attribution = {};

function takeSnapshot(): Attribution {
  if (snapshotTaken) return snapshot;
  snapshotTaken = true;

  const attribution: Attribution = {};

  try {
    const params = new URLSearchParams(window.location.search);
    for (const [param, key] of Object.entries(PARAM_KEYS)) {
      const value = params.get(param);
      if (value === null) continue;
      const trimmed = value.trim();
      if (!trimmed) continue;
      attribution[key] = trimmed;
    }

    attribution.landingUrl =
      window.location.origin + window.location.pathname + window.location.search;

    if (document.referrer) {
      try {
        if (new URL(document.referrer).origin !== window.location.origin) {
          attribution.referrer = document.referrer;
        }
      } catch {
        /* malformed referrer: skip it */
      }
    }
  } catch {
    /* fall through and still use what we have, even if empty */
  }

  snapshot = attribution;
  return snapshot;
}

/* ── Consent gating ──────────────────────────────────────────────────────── */

function allowedKeys(): Set<keyof Attribution> {
  const allowed = new Set<keyof Attribution>();

  let consent;
  try {
    consent = readConsent();
  } catch {
    return allowed;
  }
  if (!consent) return allowed;

  if (consent.analytics) for (const key of ANALYTICS_KEYS) allowed.add(key);
  if (consent.marketing) for (const key of MARKETING_KEYS) allowed.add(key);

  return allowed;
}

function sanitizeLandingUrl(url: string, allowMarketing: boolean): string | undefined {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return undefined;
  }

  if (!allowMarketing) {
    parsed.searchParams.delete("gclid");
    parsed.searchParams.delete("fbclid");
  }

  const search = parsed.searchParams.toString();
  return parsed.origin + parsed.pathname + (search ? `?${search}` : "") + parsed.hash;
}

function filterToAllowed(raw: unknown, allowed: Set<keyof Attribution>): Attribution {
  if (typeof raw !== "object" || raw === null) return {};

  const allowMarketing = allowed.has("gclid");

  const result: Attribution = {};
  for (const [key, value] of Object.entries(raw as Record<string, unknown>)) {
    if (!allowed.has(key as keyof Attribution)) continue;
    if (typeof value !== "string") continue;
    const trimmed = value.trim();
    if (!trimmed) continue;

    if (key === "landingUrl") {
      const sanitized = sanitizeLandingUrl(trimmed, allowMarketing);
      if (!sanitized) continue;
      (result as Record<string, string>)[key] = sanitized;
      continue;
    }

    (result as Record<string, string>)[key] = trimmed;
  }
  return result;
}

/* ── Capture ──────────────────────────────────────────────────────────────── */

export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  if (!snapshotTaken) takeSnapshot();

  syncAttributionWithConsent();
}

export function syncAttributionWithConsent(): void {
  if (typeof window === "undefined") return;

  const allowed = allowedKeys();

  if (allowed.size === 0) {
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* storage unavailable: nothing to remove */
    }
    return;
  }

  let existingRaw: string | null | undefined;
  try {
    existingRaw = window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return;
  }

  if (existingRaw !== null && existingRaw !== undefined) {
    let parsed: unknown = null;
    try {
      parsed = JSON.parse(existingRaw);
    } catch {
      parsed = null;
    }

    const filtered = filterToAllowed(parsed, allowed);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    } catch {
      /* storage unavailable: nothing to persist */
    }
    return;
  }

  const filteredSnapshot = filterToAllowed(takeSnapshot(), allowed);
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(filteredSnapshot));
  } catch {
    /* storage unavailable: nothing to persist */
  }
}

/* ── Read ─────────────────────────────────────────────────────────────────── */

export function readAttribution(): Attribution | undefined {
  if (typeof window === "undefined") return undefined;

  const allowed = allowedKeys();
  if (allowed.size === 0) return undefined;

  let raw: string | null;
  try {
    raw = window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return undefined;
  }
  if (!raw) return undefined;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return undefined;
  }

  const result = filterToAllowed(parsed, allowed);
  return Object.keys(result).length > 0 ? result : undefined;
}
