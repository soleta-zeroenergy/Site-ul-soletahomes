"use client";

import { useState }                      from "react";
import type { CSSProperties, FormEvent } from "react";
import { cn }                            from "@/lib/cn";
import { PROJECT_TYPES }                 from "@/lib/contact-schema";
import type { FieldErrors }              from "@/lib/contact-schema";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

export type LocationItem = {
  region: string;
  note?:  string;
};

export type ContactPanelProps = {
  eyebrow?:    string;
  heading:     string;
  body:        string;
  details?:    ContactDetail[];
  locations?:  LocationItem[];
  trustNote?:  string;
  theme?:      "light" | "warm" | string;
};

type Status = "idle" | "loading" | "success" | "error";

/* ── Component ─────────────────────────────────────────────────────────────── */
export function ContactPanel({
  eyebrow,
  heading,
  body,
  details,
  locations,
  trustNote,
  theme = "warm",
}: ContactPanelProps) {
  const [status, setStatus]           = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const bgSection = theme === "warm" ? "bg-[#faf8f6]" : "bg-white";
  const bgForm    = theme === "warm" ? "bg-white"      : "bg-[#faf8f6]";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFieldErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = {
      name:        fd.get("name"),
      email:       fd.get("email"),
      phone:       fd.get("phone"),
      projectType: fd.get("projectType"),
      message:     fd.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
      } else if (res.status === 422) {
        const data: { errors?: FieldErrors } = await res.json();
        setFieldErrors(data.errors ?? {});
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={cn("section", bgSection)}>
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── Left info column ────────────────────────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            <div className="flex flex-col gap-4">
              {eyebrow && (
                <p className="eyebrow text-brand-500">{eyebrow}</p>
              )}
              <h2
                className="text-[#1a1714]"
                style={{
                  fontSize:      "clamp(1.75rem, 2.8vw, 2.5rem)",
                  lineHeight:    1.1,
                  letterSpacing: "0.02em",
                  fontFamily:    "var(--font-heading)",
                }}
              >
                {heading}
              </h2>
              <p
                className="text-[#4a4440] leading-[1.75]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                }}
              >
                {body}
              </p>
            </div>

            {details && details.length > 0 && (
              <div className="flex flex-col gap-0 border-t border-sand-400">
                {details.map((d, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-0.5 py-4 border-b border-sand-400"
                  >
                    <p
                      className="text-[#9a8e87]"
                      style={{
                        fontSize:      "0.625rem",
                        fontFamily:    "var(--font-body)",
                        fontWeight:    600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                      }}
                    >
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-[#1a1714] hover:text-brand-500 transition-colors duration-200"
                        style={{
                          fontSize:   "clamp(0.9375rem, 1.1vw, 1rem)",
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                        }}
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p
                        className="text-[#1a1714]"
                        style={{
                          fontSize:   "clamp(0.9375rem, 1.1vw, 1rem)",
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                        }}
                      >
                        {d.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {locations && locations.length > 0 && (
              <div className="flex flex-col gap-3">
                <p
                  className="text-[#9a8e87]"
                  style={{
                    fontSize:      "0.625rem",
                    fontFamily:    "var(--font-body)",
                    fontWeight:    600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  Service Areas
                </p>
                <div className="flex flex-col gap-2">
                  {locations.map((loc, i) => (
                    <div key={i} className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="w-1 h-1 rounded-full bg-brand-500/50 flex-none mt-[0.45em]"
                      />
                      <div>
                        <span
                          className="text-[#1a1714]"
                          style={{
                            fontSize:   "0.9375rem",
                            fontFamily: "var(--font-body)",
                            fontWeight: 500,
                          }}
                        >
                          {loc.region}
                        </span>
                        {loc.note && (
                          <span
                            className="text-[#6b5d56] ml-2"
                            style={{
                              fontSize:   "0.8125rem",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {loc.note}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* ── Right form column ────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <div
              className={cn("p-8 md:p-12", bgForm)}
              style={{ boxShadow: "0 1px 3px 0 rgb(128 103 84 / 0.08), 0 4px 16px 0 rgb(128 103 84 / 0.06)" }}
            >
              {status === "success" ? (

                /* ── Success state ──────────────────────────────────────── */
                <div className="flex flex-col gap-5" role="status" aria-live="polite">
                  <p className="eyebrow text-brand-500">Message sent</p>
                  <h3
                    className="text-[#1a1714]"
                    style={{
                      fontSize:      "clamp(1.375rem, 2vw, 1.75rem)",
                      lineHeight:    1.15,
                      letterSpacing: "0.02em",
                      fontFamily:    "var(--font-heading)",
                    }}
                  >
                    We&rsquo;ll be in touch
                  </h3>
                  <p
                    className="text-[#4a4440] leading-[1.75]"
                    style={{ fontFamily: "var(--font-body)", fontSize: "1rem" }}
                  >
                    Your inquiry has been received. A senior architect will read it and
                    reply personally — usually within two business days.
                  </p>
                </div>

              ) : (

                /* ── Form ───────────────────────────────────────────────── */
                <form aria-label="Inquiry form" noValidate onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-7">

                    {/* General server error */}
                    {status === "error" && (
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
                        Something went wrong. Please try again, or email us directly at{" "}
                        <a
                          href="mailto:studio@soletahomes.com"
                          className="underline underline-offset-2"
                        >
                          studio@soletahomes.com
                        </a>
                        .
                      </p>
                    )}

                    {/* Row: Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        id="name"
                        label="Full name"
                        type="text"
                        placeholder="Your name"
                        autoComplete="name"
                        required
                        error={fieldErrors.name}
                      />
                      <FormField
                        id="email"
                        label="Email address"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        error={fieldErrors.email}
                      />
                    </div>

                    {/* Row: Phone + Project type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        id="phone"
                        label="Phone"
                        type="tel"
                        placeholder="+40 — optional"
                        autoComplete="tel"
                        error={fieldErrors.phone}
                      />
                      <FormSelect
                        id="projectType"
                        label="Project type"
                        options={PROJECT_TYPES}
                        required
                        error={fieldErrors.projectType}
                      />
                    </div>

                    {/* Message */}
                    <FormTextarea
                      id="message"
                      label="Tell us about your project"
                      placeholder="Site location, programme, timescale — anything that helps us understand what you have in mind."
                      rows={5}
                      required
                      error={fieldErrors.message}
                    />

                    {/* Submit */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="btn-primary py-4 px-10 self-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 disabled:opacity-60"
                      >
                        {status === "loading" ? "Sending…" : "Send inquiry"}
                      </button>
                      {trustNote && (
                        <p
                          className="text-[#9a8e87] leading-snug"
                          style={{ fontSize: "0.8125rem", fontFamily: "var(--font-body)" }}
                        >
                          {trustNote}
                        </p>
                      )}
                    </div>

                  </div>
                </form>

              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Field sub-components ───────────────────────────────────────────────────── */

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

const fieldClass = cn(
  "w-full bg-transparent border-b border-sand-400 py-3 px-0 text-[#1a1714] placeholder:text-[#b8b4ae]",
  "focus:outline-none focus:border-brand-500",
  "transition-colors duration-200",
  "text-[0.9375rem]"
);

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

function FormField({
  id,
  label,
  type,
  placeholder,
  autoComplete,
  required,
  error,
}: {
  id:            string;
  label:         string;
  type:          string;
  placeholder?:  string;
  autoComplete?: string;
  required?:     boolean;
  error?:        string;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-brand-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={fieldClass}
        style={{ fontFamily: "var(--font-body)" }}
      />
      <FieldError id={id} message={error} />
    </div>
  );
}

function FormSelect({
  id,
  label,
  options,
  required,
  error,
}: {
  id:        string;
  label:     string;
  options:   readonly string[];
  required?: boolean;
  error?:    string;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-brand-500">*</span>}
      </label>
      <select
        id={id}
        name={id}
        defaultValue=""
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full bg-transparent border-b border-sand-400 py-3 px-0",
          "text-[#b8b4ae] focus:outline-none focus:border-brand-500 focus:text-[#1a1714]",
          "transition-colors duration-200 cursor-pointer appearance-none",
          "text-[0.9375rem]"
        )}
        style={{ fontFamily: "var(--font-body)" }}
      >
        <option value="" disabled>Select type…</option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ color: "#1a1714" }}>{opt}</option>
        ))}
      </select>
      <FieldError id={id} message={error} />
    </div>
  );
}

function FormTextarea({
  id,
  label,
  placeholder,
  rows,
  required,
  error,
}: {
  id:           string;
  label:        string;
  placeholder?: string;
  rows?:        number;
  required?:    boolean;
  error?:       string;
}) {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
        {required && <span aria-hidden="true" className="ml-0.5 text-brand-500">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        rows={rows ?? 4}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full bg-transparent border-b border-sand-400 py-3 px-0 resize-none",
          "text-[#1a1714] placeholder:text-[#b8b4ae]",
          "focus:outline-none focus:border-brand-500",
          "transition-colors duration-200",
          "text-[0.9375rem] leading-[1.7]"
        )}
        style={{ fontFamily: "var(--font-body)" }}
      />
      <FieldError id={id} message={error} />
    </div>
  );
}
