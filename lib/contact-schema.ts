/* ─── Contact form validation schema ─────────────────────────────────────── */
/* Shared between the API route (server) and the form component (client).    */

export const PROJECT_TYPES = [
  "New build — Signature",
  "New build — Classic",
  "New build — Large Family",
  "New build — Holiday & Retreat",
  "Custom Architecture",
  "Professional / Developer inquiry",
  "General question",
] as const;

export type ProjectType = (typeof PROJECT_TYPES)[number];

export type ContactFormData = {
  name:        string;
  email:       string;
  phone?:      string;
  projectType: string;
  message:     string;
};

export type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export type ValidationResult =
  | { ok: true;  data: ContactFormData }
  | { ok: false; errors: FieldErrors };

export function validateContact(raw: unknown): ValidationResult {
  if (typeof raw !== "object" || raw === null) {
    return { ok: false, errors: { name: "Invalid submission." } };
  }

  const d       = raw as Record<string, unknown>;
  const errors: FieldErrors = {};

  // name
  const name = typeof d.name === "string" ? d.name.trim() : "";
  if (!name)               errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";

  // email
  const email = typeof d.email === "string" ? d.email.trim() : "";
  if (!email)
    errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address.";

  // phone — optional, no format constraint
  const phone = typeof d.phone === "string" ? d.phone.trim() : undefined;

  // projectType
  const projectType = typeof d.projectType === "string" ? d.projectType : "";
  if (!projectType || !(PROJECT_TYPES as readonly string[]).includes(projectType))
    errors.projectType = "Please select a project type.";

  // message
  const message = typeof d.message === "string" ? d.message.trim() : "";
  if (!message)
    errors.message = "Please tell us about your project.";
  else if (message.length < 10)
    errors.message = "Please provide a bit more detail (at least 10 characters).";

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok:   true,
    data: { name, email, phone: phone || undefined, projectType, message },
  };
}
