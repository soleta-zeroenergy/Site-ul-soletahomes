/* ─────────────────────────────────────────────────────────────────────────────
   Private Offer — form validation schema
   Separate from lib/contact-schema.ts which serves the general /contact form.
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Constants ───────────────────────────────────────────────────────────── */

export const OFFER_PROJECT_PATHS = [
  "Collection model",
  "Adapted model",
  "Custom design",
  "Not sure yet",
] as const;

export const OFFER_INTENDED_USES = [
  "Primary residence",
  "Holiday home",
  "Investment / rental",
  "Hospitality",
  "Other",
] as const;

export const OFFER_SIZE_OPTIONS = [
  "Under 100 m²",
  "100–150 m²",
  "150–200 m²",
  "200–300 m²",
  "Over 300 m²",
  "Not sure yet",
] as const;

export const OFFER_BUDGET_OPTIONS = [
  "Under €100k",
  "€100k–€200k",
  "€200k–€350k",
  "€350k–€500k",
  "€500k–€750k",
  "€750k+",
  "Prefer not to say",
] as const;

export const OFFER_LAND_STATUS = [
  "Yes, I own land",
  "No, still looking",
  "I have a site in mind but not purchased",
] as const;

export const OFFER_SITE_TYPES = [
  "Flat",
  "Sloped",
  "Forested",
  "Coastal / waterfront",
  "Alpine / mountain",
  "Urban",
  "Rural",
  "Other",
  "Not sure yet",
] as const;

export const OFFER_TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 1 year",
  "1–2 years",
  "2–3 years",
  "Planning only for now",
] as const;

export const OFFER_DOCUMENT_OPTIONS = [
  "Site survey",
  "Planning permission",
  "Architectural drawings",
  "Budget approval",
  "Photos of the land",
  "None yet",
] as const;

export const OFFER_REFERRAL_OPTIONS = [
  "Online search",
  "Architecture publication",
  "Friend or referral",
  "Social media",
  "Press",
  "Event or exhibition",
  "Other",
] as const;

/* ── Types ───────────────────────────────────────────────────────────────── */

export type OfferFormData = {
  /* Group 1 — About you */
  name:          string;
  email:         string;
  phone?:        string;
  country:       string;

  /* Group 2 — Your project */
  location:      string;
  landStatus:    string;
  intendedUse:   string;
  projectPath:   string;
  estimatedSize: string;
  budget:        string;

  /* Group 3 — Site and readiness */
  siteType?:     string;
  timeline:      string;
  documents?:    string[];
  description:   string;

  /* Group 4 — Optional context */
  referral?:     string;
};

export type OfferFieldErrors = Partial<Record<keyof OfferFormData, string>>;

export type OfferValidationResult =
  | { ok: true;  data: OfferFormData }
  | { ok: false; errors: OfferFieldErrors };

/* ── Validation ──────────────────────────────────────────────────────────── */

function str(raw: unknown): string {
  return typeof raw === "string" ? raw.trim() : "";
}

function inList(value: string, list: readonly string[]): boolean {
  return (list as readonly string[]).includes(value);
}

export function validateOffer(raw: unknown): OfferValidationResult {
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, errors: { name: "Invalid submission." } };
  }

  const d = raw as Record<string, unknown>;
  const errors: OfferFieldErrors = {};

  /* Group 1 */
  const name = str(d.name);
  if (!name || name.length < 2)
    errors.name = name ? "Name must be at least 2 characters." : "Please enter your name.";

  const email = str(d.email);
  if (!email)
    errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address.";

  const phone = str(d.phone) || undefined;

  const country = str(d.country);
  if (!country)
    errors.country = "Please enter your country or region.";

  /* Group 2 */
  const location = str(d.location);
  if (!location)
    errors.location = "Please describe where you plan to build.";

  const landStatus = str(d.landStatus);
  if (!inList(landStatus, OFFER_LAND_STATUS))
    errors.landStatus = "Please select your land status.";

  const intendedUse = str(d.intendedUse);
  if (!inList(intendedUse, OFFER_INTENDED_USES))
    errors.intendedUse = "Please select the intended use.";

  const projectPath = str(d.projectPath);
  if (!inList(projectPath, OFFER_PROJECT_PATHS))
    errors.projectPath = "Please select a project direction.";

  const estimatedSize = str(d.estimatedSize);
  if (!inList(estimatedSize, OFFER_SIZE_OPTIONS))
    errors.estimatedSize = "Please select an estimated size.";

  const budget = str(d.budget);
  if (!inList(budget, OFFER_BUDGET_OPTIONS))
    errors.budget = "Please select a budget range.";

  /* Group 3 */
  const siteType = str(d.siteType) || undefined;

  const timeline = str(d.timeline);
  if (!inList(timeline, OFFER_TIMELINE_OPTIONS))
    errors.timeline = "Please select a timeline.";

  const documents: string[] = Array.isArray(d.documents)
    ? (d.documents as unknown[]).filter((v) => typeof v === "string").map((v) => (v as string).trim())
    : [];

  const description = str(d.description);
  if (!description || description.length < 10)
    errors.description = description
      ? "Please provide a bit more detail (at least 10 characters)."
      : "Please describe your project.";

  /* Group 4 */
  const referral = str(d.referral) || undefined;

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok:   true,
    data: {
      name, email, phone, country,
      location, landStatus, intendedUse, projectPath, estimatedSize, budget,
      siteType, timeline,
      documents: documents.length > 0 ? documents : undefined,
      description,
      referral,
    },
  };
}
