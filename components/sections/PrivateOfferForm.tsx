"use client";

import { useState, useRef, useEffect } from "react";
import type { CSSProperties, FormEvent } from "react";
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
  fontWeight:    700,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color:         "#6b6259",
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

/* Contained field — visible background + full border */
const fieldClass = cn(
  "w-full rounded-none border border-[#ddd8d2] bg-white py-3 px-4",
  "text-[#1a1714] placeholder:text-[#c4bfba]",
  "focus:outline-none focus:border-[var(--color-brand)] focus:ring-0",
  "transition-colors duration-200 text-[0.9375rem]"
);

const selectClass = cn(
  "w-full rounded-none border border-[#ddd8d2] bg-white py-3 px-4",
  "text-[#1a1714]",
  "focus:outline-none focus:border-[var(--color-brand)] focus:ring-0",
  "transition-colors duration-200 cursor-pointer appearance-none text-[0.9375rem]"
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
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClass, error && "border-[#b85c4a]")}
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
      <div className="relative">
        <select
          id={id} name={id} defaultValue=""
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(selectClass, error && "border-[#b85c4a]")}
          style={{ fontFamily: "var(--font-body)" }}
        >
          <option value="" disabled style={{ color: "#c4bfba" }}>Select…</option>
          {options.map((opt) => (
            <option key={opt} value={opt} style={{ color: "#1a1714" }}>{opt}</option>
          ))}
        </select>
        {/* Custom chevron */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9a8e87]"
          style={{ fontSize: "0.625rem" }}
        >
          ▾
        </span>
      </div>
      <FieldError id={id} message={error} />
    </div>
  );
}

function RadioGroup({
  name, label, options, required, error, value, onChange,
}: {
  name: string; label: string; options: readonly string[];
  required?: boolean; error?: string;
  value: string; onChange: (val: string) => void;
}) {
  return (
    <fieldset>
      <legend style={labelStyle}>
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-[var(--color-brand)]">*</span>}
      </legend>
      <div className="flex flex-col gap-1.5 mt-1">
        {options.map((opt) => {
          const selected = value === opt;
          return (
            <label
              key={opt}
              className={cn(
                "flex items-center gap-3 cursor-pointer px-4 py-2.5 border transition-colors duration-150",
                selected
                  ? "border-[var(--color-brand)] bg-[var(--color-brand)]/5"
                  : "border-[#ddd8d2] bg-white hover:border-[#c8c2bb] hover:bg-[#faf8f6]"
              )}
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={selected}
                onChange={() => onChange(opt)}
                className="sr-only"
              />
              {/* Dot indicator */}
              <span
                className={cn(
                  "w-[14px] h-[14px] shrink-0 rounded-full border-2 flex items-center justify-center transition-colors duration-150",
                  selected ? "border-[var(--color-brand)]" : "border-[#c8c2bb]"
                )}
                aria-hidden="true"
              >
                {selected && (
                  <span className="w-[6px] h-[6px] rounded-full bg-[var(--color-brand)]" />
                )}
              </span>
              <span
                className="text-[0.875rem] leading-snug"
                style={{
                  fontFamily: "var(--font-body)",
                  color: selected ? "#1a1714" : "#4a4440",
                  fontWeight: selected ? 500 : 400,
                }}
              >
                {opt}
              </span>
            </label>
          );
        })}
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
      <div className="flex flex-col gap-1.5 mt-1">
        {options.map((opt) => {
          const selected = checked.includes(opt);
          return (
            <label
              key={opt}
              className={cn(
                "flex items-center gap-3 cursor-pointer px-4 py-2.5 border transition-colors duration-150",
                selected
                  ? "border-[var(--color-brand)] bg-[var(--color-brand)]/5"
                  : "border-[#ddd8d2] bg-white hover:border-[#c8c2bb] hover:bg-[#faf8f6]"
              )}
            >
              <input
                type="checkbox"
                name={name}
                value={opt}
                checked={selected}
                onChange={(e) => onChange(opt, e.target.checked)}
                className="sr-only"
              />
              <span
                className={cn(
                  "w-[14px] h-[14px] shrink-0 border-2 flex items-center justify-center transition-colors duration-150",
                  selected ? "border-[var(--color-brand)] bg-[var(--color-brand)]" : "border-[#c8c2bb] bg-white"
                )}
                aria-hidden="true"
              >
                {selected && (
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span
                className="text-[0.875rem] leading-snug"
                style={{
                  fontFamily: "var(--font-body)",
                  color: selected ? "#1a1714" : "#4a4440",
                  fontWeight: selected ? 500 : 400,
                }}
              >
                {opt}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

function GroupDivider({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-[var(--color-border-light)] pt-8 pb-2">
      <span style={{ ...groupHeadingStyle, color: "var(--color-brand)", lineHeight: 1 }}>{number}</span>
      <span
        style={{
          fontFamily:    "var(--font-serif)",
          fontSize:      "1.0625rem",
          fontWeight:    400,
          letterSpacing: "0.01em",
          color:         "#1a1714",
          lineHeight:    1.2,
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────────────── */

export function PrivateOfferForm() {
  const [status,      setStatus]      = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<OfferFieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [formKey,     setFormKey]     = useState(0);   // incrementing resets the form DOM

  /* Controlled values for radio groups (needed for reset + selected styling) */
  const [landStatus,    setLandStatus]    = useState("");
  const [intendedUse,   setIntendedUse]   = useState("");
  const [projectPath,   setProjectPath]   = useState("");
  const [estimatedSize, setEstimatedSize] = useState("");
  const [budget,        setBudget]        = useState("");
  const [documents,     setDocuments]     = useState<string[]>([]);

  const successRef = useRef<HTMLDivElement>(null);

  /* Scroll success message into view */
  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  function resetForm() {
    setFormKey((k) => k + 1);    // remounts the <form>, clearing all uncontrolled inputs
    setLandStatus("");
    setIntendedUse("");
    setProjectPath("");
    setEstimatedSize("");
    setBudget("");
    setDocuments([]);
    setFieldErrors({});
    setServerError(null);
  }

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
      name:          fd.get("name"),
      email:         fd.get("email"),
      phone:         fd.get("phone"),
      country:       fd.get("country"),
      location:      fd.get("location"),
      landStatus,
      intendedUse,
      projectPath,
      estimatedSize,
      budget,
      siteType:      fd.get("siteType"),
      timeline:      fd.get("timeline"),
      documents,
      description:   fd.get("description"),
      referral:      fd.get("referral"),
    };

    try {
      const res = await fetch("/api/offer", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });

      if (res.ok) {
        resetForm();
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

  /* ── Success state ───────────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div
        ref={successRef}
        role="status"
        aria-live="polite"
        className="flex flex-col gap-8 px-10 py-16 lg:px-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        {/* Accent line */}
        <div className="w-12 h-[3px]" style={{ backgroundColor: "var(--color-brand)" }} />

        <div className="flex flex-col gap-4">
          <span
            className="eyebrow block"
            style={{ color: "var(--color-brand)" }}
          >
            Brief received
          </span>
          <h2
            style={{
              fontSize:   "clamp(1.625rem, 2.5vw, 2.125rem)",
              lineHeight: 1.15,
              color:      "#1a1714",
            }}
          >
            Your project brief has been received.
          </h2>
        </div>

        <div className="flex flex-col gap-4 max-w-lg">
          <p className="leading-relaxed" style={{ color: "#4a4440", fontFamily: "var(--font-body)" }}>
            We will review it and come back with the most useful next step — typically a written assessment of feasibility, a cost orientation, and a recommendation on how to proceed.
          </p>
          <p className="leading-relaxed" style={{ color: "#4a4440", fontFamily: "var(--font-body)" }}>
            If the brief suggests it would be useful, we may also reach out by email or phone to clarify a detail before preparing our response.
          </p>
        </div>

        <div
          className="flex flex-col gap-2 border-l-2 pl-5"
          style={{ borderColor: "var(--color-border-light)" }}
        >
          <p
            className="text-[0.8125rem]"
            style={{ color: "#9a8e87", fontFamily: "var(--font-body)" }}
          >
            If you have site documents or photos to share, email them to{" "}
            <a
              href="mailto:office@soletahomes.com"
              className="underline underline-offset-2 hover:opacity-70 transition-opacity"
              style={{ color: "#4a4440" }}
            >
              office@soletahomes.com
            </a>
            {" "}with your name in the subject line.
          </p>
        </div>
      </div>
    );
  }

  /* ── Form ────────────────────────────────────────────────────────────── */
  return (
    <form
      key={formKey}
      aria-label="Private Offer request form"
      noValidate
      onSubmit={handleSubmit}
      className="flex flex-col gap-0"
    >
      {/* Server / network error banner */}
      {status === "error" && (
        <div className="px-10 py-5 lg:px-14 border-b border-[var(--color-border-light)] bg-[#fdf6f4]">
          <p
            role="alert"
            className="text-sm leading-snug"
            style={{
              color:       "#b85c4a",
              fontFamily:  "var(--font-body)",
              borderLeft:  "2px solid #b85c4a",
              paddingLeft: "0.875rem",
            }}
          >
            {serverError
              ? serverError
              : <>Something went wrong. Please try again, or email us at{" "}
                  <a href="mailto:office@soletahomes.com" className="underline underline-offset-2">
                    office@soletahomes.com
                  </a>.
                </>
            }
          </p>
        </div>
      )}

      {/* ── GROUP 1 — About you ─────────────────────────────────────────── */}
      <div className="px-10 pt-6 pb-10 lg:px-14 border-b border-[var(--color-border-light)] bg-[#faf8f6] flex flex-col gap-7">
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
      <div className="px-10 py-10 lg:px-14 border-b border-[var(--color-border-light)] bg-white flex flex-col gap-8">
        <GroupDivider number="02" label="Your project" />
        <TextField
          id="location" label="Location of future home" required
          placeholder="Country, region or general area — e.g. Bavaria, Provence, Tyrol"
          error={fieldErrors.location}
        />
        <RadioGroup
          name="landStatus" label="Do you already own land?" required
          options={OFFER_LAND_STATUS}
          value={landStatus} onChange={setLandStatus}
          error={fieldErrors.landStatus}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RadioGroup
            name="intendedUse" label="Intended use" required
            options={OFFER_INTENDED_USES}
            value={intendedUse} onChange={setIntendedUse}
            error={fieldErrors.intendedUse}
          />
          <RadioGroup
            name="projectPath" label="Project direction" required
            options={OFFER_PROJECT_PATHS}
            value={projectPath} onChange={setProjectPath}
            error={fieldErrors.projectPath}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RadioGroup
            name="estimatedSize" label="Estimated size" required
            options={OFFER_SIZE_OPTIONS}
            value={estimatedSize} onChange={setEstimatedSize}
            error={fieldErrors.estimatedSize}
          />
          <RadioGroup
            name="budget" label="Estimated construction budget" required
            options={OFFER_BUDGET_OPTIONS}
            value={budget} onChange={setBudget}
            error={fieldErrors.budget}
          />
        </div>
      </div>

      {/* ── GROUP 3 — Site and readiness ────────────────────────────────── */}
      <div className="px-10 py-10 lg:px-14 border-b border-[var(--color-border-light)] bg-[#faf8f6] flex flex-col gap-8">
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
            Short project description
            <span aria-hidden="true" className="ml-0.5 text-[var(--color-brand)]">*</span>
          </label>
          <textarea
            id="description" name="description" rows={5}
            placeholder="Tell us what you want this home to do — how you will live in it, what the land is like, what matters most to you. The more specific you are, the more useful our response will be."
            aria-invalid={fieldErrors.description ? true : undefined}
            aria-describedby={fieldErrors.description ? "description-error" : undefined}
            className={cn(
              "w-full border border-[#ddd8d2] bg-white py-3 px-4 resize-none",
              "text-[#1a1714] placeholder:text-[#c4bfba]",
              "focus:outline-none focus:border-[var(--color-brand)]",
              "transition-colors duration-200 text-[0.9375rem] leading-[1.7]",
              fieldErrors.description && "border-[#b85c4a]"
            )}
            style={{ fontFamily: "var(--font-body)" }}
          />
          <FieldError id="description" message={fieldErrors.description} />
        </div>
      </div>

      {/* ── GROUP 4 — Optional context ──────────────────────────────────── */}
      <div className="px-10 py-10 lg:px-14 border-b border-[var(--color-border-light)] bg-white flex flex-col gap-7">
        <GroupDivider number="04" label="Optional context" />
        <SelectField
          id="referral" label="How did you hear about Soleta?"
          options={OFFER_REFERRAL_OPTIONS}
          error={fieldErrors.referral}
        />
      </div>

      {/* ── Submit ──────────────────────────────────────────────────────── */}
      <div className="px-10 py-10 lg:px-14 bg-[#faf8f6] flex flex-col sm:flex-row sm:items-center gap-5">
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
