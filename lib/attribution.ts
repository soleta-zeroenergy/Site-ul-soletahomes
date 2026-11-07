/* ─── First-touch attribution capture ────────────────────────────────────── */
/* Captures utm_* / gclid / fbclid / ref plus the landing URL and cross-origin */
/* referrer on the very first page of a session, and reads it back for the   */
/* contact/offer form payloads. Browser-only; every storage access is        */
/* wrapped so this stays safe if evaluated during prerender.                 */

import type { Attribution } from "./tikka-webhook";

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

export function captureAttribution(): void {
  if (typeof window === "undefined") return;

  try {
    if (window.sessionStorage.getItem(STORAGE_KEY) !== null) return;
  } catch {
    return;
  }

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
    /* fall through and still store what we have, even if empty */
  }

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    /* storage unavailable: nothing to persist */
  }
}

export function readAttribution(): Attribution | undefined {
  if (typeof window === "undefined") return undefined;

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;

    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null) return undefined;

    const result: Attribution = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value !== "string") continue;
      const trimmed = value.trim();
      if (!trimmed) continue;
      (result as Record<string, string>)[key] = trimmed;
    }

    return Object.keys(result).length > 0 ? result : undefined;
  } catch {
    return undefined;
  }
}
