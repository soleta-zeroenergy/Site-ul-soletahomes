"use client";

import { useState } from "react";
import type { CSSProperties, FormEvent, ChangeEvent } from "react";
import { cn } from "@/lib/cn";
import {
  OFFER_PROJECT_PATHS,
  OFFER_INTENDED_USES,
  OFFER_SIZE_OPTIONS,
  OFFER_BUDGET_OPTIONS,
  OFFER_LAND_STATUS,
  OFFER_SITE_TYPES,
  OFFER_TIMELINE_OPTIONS,
  OFFER_DOCUMENT_OPTIONS,
  OFFER_REFERRAL_OPTIONS,
} from "@/lib/offer-schema";
import type { OfferFieldErrors } from "@/lib/offer-schema";

/* ── Types ───────────────────────────────────────────────────────────────── */
type Status = "idle" | "loading" | "success" | "error";
type ServerError = { error?: string };

/* ── Style constants ─────────────────────────────────────────────────────── */
const labelStyle: CSSProperties = {
  fontSize:      "0.625rem",
  fontFamily:    "var(--font-body)",
  fontWeight:    600,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color:         "#9a8e87",
  marginBottom:  "0.5rem",
  display:       "block",
};

const groupHeadingStyle: CSSProperties = {
  fontSize:      "0.625rem",
  fontFamily:    "var(--font-body)",
  fontWeight:    600,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color:         "var(--color-brand)",
};

const fieldBase = cn(
  "w-full bg-transparent border-b border-[var(--color-border-light)] py-3 px-0",
  "text-[#1a1714] placeholder:text-[#b8b4ae]",
  "focus:outline-none focus:border-[var(--color-brand)]",
  "transition-colors duration-200 text-[0.9375rem]"
);

/* ── Sub-components ──────────────────────────────────────────────────────── */

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p
      id={`${id}-error`}
      role="alert"
      className="mt-1.5 text-[0.75rem] leading-snug"
      style={{ color: "#b85c4a", fontFamily: "var(--font-body)" }}
    >
      {message}
    </p>
  );
}

function TextField({
  id, label, type = "text", placeholder, autoComplete, required, error,
}: {
  id: string; label: string; type?: string; placeholder?: string;
  autoComplete?: string; required?: boolean; error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-[var(--color-brand)]">*</span>}
      </label>
      <input
        id={id} name={id} type={type} placeholder={placeholder}
        required={required} autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldBase}
        style={{ fontFamily: "var(--font-body)" }}
      />
      <FieldError id={id} message={error} />
    </div>
  );
}

function SelectField({
  id, label, options, required, error,
}: {
  id: string; label: string; options: readonly string[]; required?: boolean; error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-[var(--color-brand)]">*</span>}
      </label>
      <select
        id={id} name={id} defaultValue="" required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full bg-transparent border-b border-[var(--color-border-light)] py-3 px-0",
          "text-[#b8b4ae] focus:outline-none focus:border-[var(--color-brand)] focus:text-[#1a1714]",
          "transition-colors duration-200 cursor-pointer appearance-none text-[0.9375rem]"
        )}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <option value="" disabled>Select…</option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ color: "#1a1714" }}>{opt}</option>
        ))}
      </select>
      <FieldError id={id} message={error} />
    </div>
  );
}

function RadioGroup({
  name, label, options, required, error,
}: {
  name: string; label: string; options: readonly string[]; required?: boolean; error?: string;
}) {
  return (
    <fieldset>
      <legend style={labelStyle}>
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-[var(--color-brand)]">*</span>}
      </legend>
      <div className="flex flex-col gap-2 mt-1">
        {options.map((opt) => (
          <label
            key={opt}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="radio"
              name={name}
              value={opt}
              className="sr-only peer"
            />
            <span
              className={cn(
                "w-4 h-4 shrink-0 rounded-full border border-[var(--color-border-light)]",
                "peer-checked:border-[var(--color-brand)] peer-checked:bg-[var(--color-brand)]",
                "transition-colors duration-200"
              )}
              aria-hidden="true"
            />
            <span
              className="text-[0.875rem] text-[#4a4440] group-has-[input:checked]:text-[#1a1714] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {opt}
            </span>
          </label>
        ))}
      </div>
      <FieldError id={name} message={error} />
    </fieldset>
  );
}

function CheckboxGroup({
  name, label, options, checked, onChange,
}: {
  name: string; label: string; options: readonly string[];
  checked: string[]; onChange: (value: string, isChecked: boolean) => void;
}) {
  return (
    <fieldset>
      <legend style={labelStyle}>{label}</legend>
      <div className="flex flex-col gap-2 mt-1">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name={name}
              value={opt}
              checked={checked.includes(opt)}
              onChange={(e) => onChange(opt, e.target.checked)}
              className="sr-only peer"
            />
            <span
              className={cn(
                "w-4 h-4 shrink-0 border border-[var(--color-border-light)]",
                "peer-checked:border-[var(--color-brand)] peer-checked:bg-[var(--color-brand)]",
                "transition-colors duration-200 flex items-center justify-center"
              )}
              aria-hidden="true"
            >
              {checked.includes(opt) && (
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </span>
            <span
              className="text-[0.875rem] text-[#4a4440] group-has-[input:checked]:text-[#1a1714] transition-colors duration-200"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {opt}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function GroupDivider({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 pt-2 pb-6 border-t border-[var(--color-border-light)]">
      <span style={{ ...groupHeadingStyle }}>{number}</span>
      <span style={{ ...groupHeadingStyle, color: "var(--color-text-muted)" }}>{label}</span>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────────────── */

export function PrivateOfferForm() {
  const [status, setStatus]           = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<OfferFieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [documents, setDocuments]     = useState<string[]>([]);

  function handleDocumentChange(value: string, isChecked: boolean) {
    setDocuments((prev) =>
      isChecked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFieldErrors({});
    setServerError(null);

    const fd = new FormData(e.currentTarget);

    const payload = {
      /* Group 1 */
      name:          fd.get("name"),
      email:         fd.get("email"),
      phone:         fd.get("phone"),
      country:       fd.get("country"),
      /* Group 2 */
      location:      fd.get("location"),
      landStatus:    fd.get("landStatus"),
      intendedUse:   fd.get("intendedUse"),
      projectPath:   fd.get("projectPath"),
      estimatedSize: fd.get("estimatedSize"),
      budget:        fd.get("budget"),
      /* Group 3 */
      siteType:      fd.get("siteType"),
      timeline:      fd.get("timeline"),
      documents:     documents,
      description:   fd.get("description"),
      /* Group 4 */
      referral:      fd.get("referral"),
    };

    try {
      const res = await fetch("/api/offer", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
      } else if (res.status === 422) {
        const data: { errors?: OfferFieldErrors } = await res.json();
        setFieldErrors(data.errors ?? {});
        setStatus("idle");
      } else {
        const data: ServerError = await res.json().catch(() => ({}));
        setServerError(data.error ?? null);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex flex-col gap-6 py-16 px-10 lg:px-14"
        role="status"
        aria-live="polite"
      >
        <span className="eyebrow block text-[var(--color-brand)]">Brief received</span>
        <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}>
          We will be in touch
        </h2>
        <p className="leading-relaxed text-[var(--color-text-secondary)] max-w-md">
          Your project brief has been received. We aim to respond within three business days with a written summary — feasibility, cost orientation, and suggested next steps.
        </p>
        <p className="leading-relaxed text-[var(--color-text-secondary)] max-w-md">
          If you have additional documents or site photos to share, send them to{" "}
          <a
            href="mailto:studio@soletahomes.com"
            className="text-[var(--color-brand)] hover:opacity-70 transition-opacity"
          >
            studio@soletahomes.com
          </a>
          {" "}referencing your name.
        </p>
      </div>
    );
  }

  return (
    <form
      aria-label="Private Offer request form"
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-0"
    >
      {/* General server error */}
      {status === "error" && (
        <div className="px-10 py-6 lg:px-14 border-b border-[var(--color-border-light)]">
          <p
            role="alert"
            className="text-sm leading-snug"
            style={{
              color:       "#b85c4a",
              fontFamily:  "var(--font-body)",
              borderLeft:  "2px solid #b85c4a",
              paddingLeft: "0.75rem",
            }}
          >
            {serverError ?? "Something went wrong. Please try again, or email us directly at"}{" "}
            {!serverError && (
              <a href="mailto:studio@soletahomes.com" className="underline underline-offset-2">
                studio@soletahomes.com
              </a>
            )}
            {!serverError && "."}
          </p>
        </div>
      )}

      {/* ── GROUP 1 — About you ─────────────────────────────────────────── */}
      <div className="px-10 py-10 lg:px-14 border-b border-[var(--color-border-light)] flex flex-col gap-7">
        <GroupDivider number="01" label="About you" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TextField
            id="name" label="Full name" required
            placeholder="Your name" autoComplete="name"
            error={fieldErrors.name}
          />
          <TextField
            id="email" label="Email address" type="email" required
            placeholder="you@example.com" autoComplete="email"
            error={fieldErrors.email}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <TextField
            id="phone" label="Phone" type="tel"
            placeholder="+1 / +44 / +40 — optional" autoComplete="tel"
            error={fieldErrors.phone}
          />
          <TextField
            id="country" label="Country of residence" required
            placeholder="e.g. Germany, France, UK" autoComplete="country-name"
            error={fieldErrors.country}
          />
        </div>
      </div>

      {/* ── GROUP 2 — Your project ──────────────────────────────────────── */}
      <div className="px-10 py-10 lg:px-14 border-b border-[var(--color-border-light)] flex flex-col gap-8">
        <GroupDivider number="02" label="Your project" />
        <TextField
          id="location" label="Location of future home" required
          placeholder="Country, region or general area — e.g. Bavaria, Provence, Tyrol"
          error={fieldErrors.location}
        />
        <RadioGroup
          name="landStatus" label="Do you already own land?" required
          options={OFFER_LAND_STATUS}
          error={fieldErrors.landStatus}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RadioGroup
            name="intendedUse" label="Intended use" required
            options={OFFER_INTENDED_USES}
            error={fieldErrors.intendedUse}
          />
          <RadioGroup
            name="projectPath" label="Project direction" required
            options={OFFER_PROJECT_PATHS}
            error={fieldErrors.projectPath}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RadioGroup
            name="estimatedSize" label="Estimated size" required
            options={OFFER_SIZE_OPTIONS}
            error={fieldErrors.estimatedSize}
          />
          <RadioGroup
            name="budget" label="Estimated construction budget" required
            options={OFFER_BUDGET_OPTIONS}
            error={fieldErrors.budget}
          />
        </div>
      </div>

      {/* ── GROUP 3 — Site and readiness ────────────────────────────────── */}
      <div className="px-10 py-10 lg:px-14 border-b border-[var(--color-border-light)] flex flex-col gap-8">
        <GroupDivider number="03" label="Site and readiness" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SelectField
            id="siteType" label="Site type (optional)"
            options={OFFER_SITE_TYPES}
            error={fieldErrors.siteType}
          />
          <SelectField
            id="timeline" label="Desired timeline" required
            options={OFFER_TIMELINE_OPTIONS}
            error={fieldErrors.timeline}
          />
        </div>
        <CheckboxGroup
          name="documents" label="What do you already have? (select all that apply)"
          options={OFFER_DOCUMENT_OPTIONS}
          checked={documents}
          onChange={handleDocumentChange}
        />
        <div>
          <label htmlFor="description" style={labelStyle}>
            Short project description<span aria-hidden="true" className="ml-0.5 text-[var(--color-brand)]">*</span>
          </label>
          <textarea
            id="description" name="description" rows={5}
            placeholder="Tell us what you want this home to do — how you will live in it, what the land is like, what matters most to you. The more specific you are, the more useful our response will be."
            required
            aria-invalid={fieldErrors.description ? true : undefined}
            aria-describedby={fieldErrors.description ? "description-error" : undefined}
            className={cn(
              "w-full bg-transparent border-b border-[var(--color-border-light)] py-3 px-0 resize-none",
              "text-[#1a1714] placeholder:text-[#b8b4ae]",
              "focus:outline-none focus:border-[var(--color-brand)]",
              "transition-colors duration-200 text-[0.9375rem] leading-[1.7]"
            )}
            style={{ fontFamily: "var(--font-body)" }}
          />
          <FieldError id="description" message={fieldErrors.description} />
        </div>
      </div>

      {/* ── GROUP 4 — Optional context ──────────────────────────────────── */}
      <div className="px-10 py-10 lg:px-14 border-b border-[var(--color-border-light)] flex flex-col gap-7">
        <GroupDivider number="04" label="Optional context" />
        <SelectField
          id="referral" label="How did you hear about Soleta?"
          options={OFFER_REFERRAL_OPTIONS}
          error={fieldErrors.referral}
        />
      </div>

      {/* ── Submit ──────────────────────────────────────────────────────── */}
      <div className="px-10 py-10 lg:px-14 flex flex-col sm:flex-row sm:items-center gap-5">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary py-4 px-10 self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)] disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send my project brief"}
        </button>
        <p
          className="text-[#9a8e87] leading-snug"
          style={{ fontSize: "0.8125rem", fontFamily: "var(--font-body)" }}
        >
          Your details are private. No marketing, no third-party sharing.
        </p>
      </div>
    </form>
  );
}
