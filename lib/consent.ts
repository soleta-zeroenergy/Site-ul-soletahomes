/* ─── Cookie consent store ───────────────────────────────────────────────── */
/* Browser-only. Every storage access is wrapped so this stays safe if       */
/* evaluated during prerender. Persists to localStorage, mirrors in memory   */
/* for this load, and broadcasts changes via a window event.                */

export const CONSENT_STORAGE_KEY = "soleta_consent";
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_DAYS = 180;

export type ConsentState = {
  v: 1;
  analytics: boolean;
  marketing: boolean;
  ts: string;
};

export const CONSENT_EVENT = "soleta:consent";
export const CONSENT_OPEN_EVENT = "soleta:consent-open";

let memoryConsent: ConsentState | null = null;

function isValidState(value: unknown, now: Date): ConsentState | null {
  if (typeof value !== "object" || value === null) return null;
  const candidate = value as Record<string, unknown>;

  if (candidate.v !== CONSENT_VERSION) return null;
  if (typeof candidate.analytics !== "boolean") return null;
  if (typeof candidate.marketing !== "boolean") return null;
  if (typeof candidate.ts !== "string") return null;

  const ts = new Date(candidate.ts);
  if (Number.isNaN(ts.getTime())) return null;
  if (ts.getTime() > now.getTime()) return null;

  const ageMs = now.getTime() - ts.getTime();
  const maxAgeMs = CONSENT_MAX_AGE_DAYS * 24 * 60 * 60 * 1000;
  if (ageMs > maxAgeMs) return null;

  return {
    v: CONSENT_VERSION,
    analytics: candidate.analytics,
    marketing: candidate.marketing,
    ts: candidate.ts,
  };
}

export function readConsent(now: Date = new Date()): ConsentState | null {
  if (typeof window === "undefined") return null;

  let raw: string | null = null;

  try {
    raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    /* storage unavailable: fall back to this load's in-memory value */
    return isValidState(memoryConsent, now);
  }

  if (!raw) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    /* malformed value is not a storage failure: treat it as no choice */
    return null;
  }

  return isValidState(parsed, now);
}

export function writeConsent(choice: { analytics: boolean; marketing: boolean }): ConsentState {
  const state: ConsentState = {
    v: CONSENT_VERSION,
    analytics: choice.analytics,
    marketing: choice.marketing,
    ts: new Date().toISOString(),
  };

  memoryConsent = state;

  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
    }
  } catch {
    /* storage unavailable: still broadcast the in-memory value below */
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
  }

  return state;
}

export function subscribeConsent(cb: (state: ConsentState | null) => void): () => void {
  if (typeof window === "undefined") return () => {};

  const handleConsentEvent = (event: Event) => {
    const detail = (event as CustomEvent<ConsentState>).detail;
    cb(detail ?? readConsent());
  };

  const handleStorageEvent = (event: StorageEvent) => {
    if (event.key !== null && event.key !== CONSENT_STORAGE_KEY) return;
    cb(readConsent());
  };

  window.addEventListener(CONSENT_EVENT, handleConsentEvent);
  window.addEventListener("storage", handleStorageEvent);

  return () => {
    window.removeEventListener(CONSENT_EVENT, handleConsentEvent);
    window.removeEventListener("storage", handleStorageEvent);
  };
}

export function openConsentPreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
