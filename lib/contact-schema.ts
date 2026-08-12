/* ─── Contact form validation schema ─────────────────────────────────────── */
/* Shared between the API route (server) and the form component (client).    */
/* Separate from lib/offer-schema.ts — this is the general inquiry form,     */
/* not the Private Offer form.                                               */

export const INQUIRY_TYPES = [
  "Project consultation",
  "Architecture and design",
  "Build and services",
  "Partnership or press",
  "General inquiry",
] as const;

export type InquiryType = (typeof INQUIRY_TYPES)[number];

export type ContactFormData = {
  name:          string;
  email:         string;
  country:       string;
  inquiryType:   string;
  message:       string;
  phone?:        string;
  location?:     string;
  intendedUse?:  string;
  projectStage?: string;
  timeline?:     string;
};

export type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export type ValidationResult =
  | { ok: true;  data: ContactFormData }
  | { ok: false; errors: FieldErrors; spam?: true };

const MAX = {
  name:         120,
  email:        180,
  country:      80,
  phone:        40,
  message:      3000,
  location:     160,
  intendedUse:  160,
  projectStage: 160,
  timeline:     160,
};

function str(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

export function validateContact(raw: unknown): ValidationResult {
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, errors: { name: "Invalid submission." } };
  }

  const d = raw as Record<string, unknown>;

  // Honeypot — a hidden field real visitors never fill in. Any non-empty
  // value here means the submission is automated; reject silently.
  if (str(d.website)) {
    return { ok: false, errors: {}, spam: true };
  }

  const errors: FieldErrors = {};

  // name
  const name = str(d.name).slice(0, MAX.name);
  if (!name)               errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";

  // email
  const email = str(d.email).slice(0, MAX.email);
  if (!email)
    errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address.";

  // country
  const country = str(d.country).slice(0, MAX.country);
  if (!country) errors.country = "Please enter your country.";

  // inquiryType
  const inquiryType = str(d.inquiryType);
  if (!inquiryType || !(INQUIRY_TYPES as readonly string[]).includes(inquiryType))
    errors.inquiryType = "Please select an inquiry type.";

  // message
  const message = str(d.message).slice(0, MAX.message);
  if (!message)
    errors.message = "Please tell us how we can help.";
  else if (message.length < 10)
    errors.message = "Please provide a bit more detail (at least 10 characters).";

  // phone — optional, no format constraint
  const phone = str(d.phone).slice(0, MAX.phone) || undefined;

  // optional extras
  const location     = str(d.location).slice(0, MAX.location) || undefined;
  const intendedUse  = str(d.intendedUse).slice(0, MAX.intendedUse) || undefined;
  const projectStage = str(d.projectStage).slice(0, MAX.projectStage) || undefined;
  const timeline     = str(d.timeline).slice(0, MAX.timeline) || undefined;

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok:   true,
    data: { name, email, country, inquiryType, message, phone, location, intendedUse, projectStage, timeline },
  };
}
