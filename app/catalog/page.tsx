"use client";

import { useState, useRef, useEffect } from "react";
import type { FormEvent }              from "react";
import Image                           from "next/image";
import Link                            from "next/link";
import { cn }                          from "@/lib/cn";
import { CtaBand }                     from "@/components/sections/CtaBand";

/* ── Metadata cannot be exported from client components in Next.js App Router.
      SEO is handled via the parent layout's default metadata.              ── */

/* ── Style constants ─────────────────────────────────────────────────────── */
const labelStyle = {
  fontSize:      "0.625rem" as const,
  fontFamily:    "var(--font-ui)",
  fontWeight:    600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color:         "#6b6259",
  marginBottom:  "0.5rem",
  display:       "block" as const,
};

const fieldClass = cn(
  "w-full rounded-none border border-[#ddd8d2] bg-white py-3 px-4",
  "text-[#1a1714] placeholder:text-[#c4bfba]",
  "focus:outline-none focus:border-[var(--color-brand)] focus:ring-0",
  "transition-colors duration-200 text-[0.9375rem]"
);

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function CatalogPage() {
  const [status,    setStatus]    = useState<"idle" | "loading" | "success">("idle");
  const [email,     setEmail]     = useState("");
  const successRef                = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [status]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const fd = new FormData(e.currentTarget);
    setEmail(fd.get("email") as string);
    /* Frontend-only for now — backend route /api/catalog can be wired
       when the catalog PDF and email delivery are ready.                    */
    await new Promise((r) => setTimeout(r, 600));
    setStatus("success");
  }

  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative border-b border-[var(--color-border-light)]"
        style={{ minHeight: "clamp(400px, 44vw, 580px)" }}
      >
        <Image
          src="/images/Signature800x533.webp"
          alt="Soleta Homes catalog — current edition"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(24,20,16,0.70) 0%, rgba(24,20,16,0.35) 55%, rgba(24,20,16,0.08) 100%)",
          }}
        />
        <div className="relative z-10 flex h-full items-end">
          <div className="container-narrow pb-14 pt-20 lg:pb-20">
            <span
              className="eyebrow mb-5 block"
              style={{ color: "rgba(247,244,238,0.65)" }}
            >
              Catalog
            </span>
            <h1
              className="mb-5 text-[#faf8f6]"
              style={{
                fontSize:      "clamp(2.25rem, 5vw, 3.75rem)",
                lineHeight:    1.06,
                letterSpacing: "-0.02em",
                maxWidth:      "18ch",
              }}
            >
              Request the current edition
            </h1>
            <p
              style={{
                color:      "rgba(247,244,238,0.80)",
                fontSize:   "1.0625rem",
                maxWidth:   "46ch",
                fontFamily: "var(--font-body)",
                lineHeight: 1.65,
              }}
            >
              Our catalog is designed as an early planning tool. It offers a clearer
              view of the Soleta collection, our design language, the overall process,
              and the kind of direction that helps a project move from interest to
              clarity.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. What the catalog includes ────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.7fr]">
            <div>
              <span className="eyebrow mb-4 block">What the catalog includes</span>
              <p
                className="leading-relaxed"
                style={{
                  color:      "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.9375rem",
                }}
              >
                It is not a technical manual or a sales brochure in the usual sense. It
                is a concise overview intended to help you understand the architectural
                direction, the range of possibilities, and the questions that matter
                early.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
              {[
                {
                  title: "Collection overview",
                  body:  "A structured introduction to the current home families and the different directions they represent.",
                },
                {
                  title: "Design language",
                  body:  "The principles behind proportion, atmosphere, materiality, and the kind of spatial calm Soleta aims to create.",
                },
                {
                  title: "Process overview",
                  body:  "A clear view of how a project moves from first conversation to design, technical development, and implementation.",
                },
                {
                  title: "Early planning guidance",
                  body:  "The practical framing that helps clients evaluate readiness, site questions, and project fit.",
                },
              ].map(({ title, body }, i) => (
                <div
                  key={title}
                  className={cn(
                    "flex flex-col gap-3 border-t border-[var(--color-border-light)] py-8 pr-8",
                    i % 2 === 1 && "sm:border-l sm:border-[var(--color-border-light)] sm:pl-8 sm:pr-0"
                  )}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily:    "var(--font-ui)",
                      fontSize:      "0.625rem",
                      fontWeight:    600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color:         "var(--color-brand)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      fontFamily:    "var(--font-heading)",
                      fontSize:      "1.125rem",
                      fontWeight:    400,
                      letterSpacing: "0.01em",
                      color:         "#1a1714",
                      lineHeight:    1.2,
                    }}
                  >
                    {title}
                  </p>
                  <p
                    className="leading-relaxed"
                    style={{
                      color:      "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      fontSize:   "0.875rem",
                    }}
                  >
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Who it is for ────────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-16 lg:py-24"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.7fr]">
            <div>
              <span className="eyebrow mb-4 block">Who it is for</span>
              <p
                className="leading-relaxed"
                style={{
                  color:      "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.9375rem",
                }}
              >
                The catalog is most useful when you are still orienting yourself and
                want a better basis for a serious conversation.
              </p>
            </div>
            <div className="flex flex-col gap-0">
              {[
                "You are exploring a first direction",
                "You are comparing model-based and custom routes",
                "You want to prepare before requesting a private offer",
              ].map((item, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[48px_1fr] gap-4 border-t border-[var(--color-border-light)] py-7 last:border-b last:border-[var(--color-border-light)] items-start"
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily:    "var(--font-ui)",
                      fontSize:      "0.625rem",
                      fontWeight:    600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color:         "var(--color-brand)",
                      paddingTop:    "0.15rem",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      fontFamily:    "var(--font-heading)",
                      fontSize:      "1.1875rem",
                      fontWeight:    400,
                      letterSpacing: "0.01em",
                      color:         "#1a1714",
                      lineHeight:    1.3,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Catalog request form ─────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] py-16 lg:py-24"
        style={{ backgroundColor: "var(--color-bg)" }}
        id="request"
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">

            {/* Trust panel */}
            <div className="flex flex-col gap-6">
              <span className="eyebrow block">Request the catalog</span>
              <p
                className="leading-relaxed"
                style={{
                  color:      "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  fontSize:   "0.9375rem",
                }}
              >
                We send the current edition as a digital reference. If your enquiry
                suggests that a more direct conversation would be useful, we may also
                point you toward the next appropriate step.
              </p>
              <div
                className="flex flex-col gap-4 pt-4 border-t border-[var(--color-border-light)]"
              >
                {[
                  { label: "Format",   value: "Digital PDF" },
                  { label: "Edition",  value: "Current — 2025" },
                  { label: "Cost",     value: "No charge" },
                  { label: "Privacy",  value: "Your details are not shared" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-baseline gap-3">
                    <span
                      style={{
                        fontFamily:    "var(--font-ui)",
                        fontSize:      "0.625rem",
                        fontWeight:    600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color:         "var(--color-text-muted)",
                        minWidth:      "5rem",
                        flexShrink:    0,
                      }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize:   "0.875rem",
                        color:      "var(--color-text-secondary)",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div
              className="border border-[var(--color-border-light)]"
              style={{ backgroundColor: "var(--soleta-cream)" }}
            >
              {status === "success" ? (
                <div
                  ref={successRef}
                  role="status"
                  aria-live="polite"
                  className="flex flex-col gap-6 px-10 py-14"
                >
                  <div className="w-10 h-[2px]" style={{ backgroundColor: "var(--color-brand)" }} />
                  <span className="eyebrow block" style={{ color: "var(--color-brand)" }}>
                    Request received
                  </span>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize:   "1.375rem",
                      fontWeight: 400,
                      color:      "#1a1714",
                      lineHeight: 1.25,
                    }}
                  >
                    We will send the current edition to {email}.
                  </p>
                  <p
                    className="leading-relaxed text-sm"
                    style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
                  >
                    If you do not receive it within a few minutes, check your spam
                    folder or contact us at{" "}
                    <a
                      href="mailto:office@soletahomes.com"
                      className="underline underline-offset-2 hover:opacity-70 transition-opacity"
                    >
                      office@soletahomes.com
                    </a>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-0"
                  noValidate
                >
                  <div className="flex flex-col gap-7 px-10 py-10">
                    {/* Name */}
                    <div>
                      <label htmlFor="cat-name" style={labelStyle}>
                        Full name
                        <span aria-hidden="true" className="ml-0.5" style={{ color: "var(--color-brand)" }}>*</span>
                      </label>
                      <input
                        id="cat-name" name="name" type="text" required
                        placeholder="Your name"
                        autoComplete="name"
                        className={fieldClass}
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label htmlFor="cat-email" style={labelStyle}>
                        Email address
                        <span aria-hidden="true" className="ml-0.5" style={{ color: "var(--color-brand)" }}>*</span>
                      </label>
                      <input
                        id="cat-email" name="email" type="email" required
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={fieldClass}
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>
                    {/* Country */}
                    <div>
                      <label htmlFor="cat-country" style={labelStyle}>
                        Country
                      </label>
                      <input
                        id="cat-country" name="country" type="text"
                        placeholder="e.g. Germany, France, UK"
                        autoComplete="country-name"
                        className={fieldClass}
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>
                    {/* Project stage */}
                    <div>
                      <label htmlFor="cat-stage" style={labelStyle}>
                        Project stage (optional)
                      </label>
                      <div className="relative">
                        <select
                          id="cat-stage" name="stage" defaultValue=""
                          className={cn(fieldClass, "appearance-none cursor-pointer")}
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <option value="" disabled style={{ color: "#c4bfba" }}>Select…</option>
                          <option value="exploring">Just starting to explore</option>
                          <option value="comparing">Comparing possible directions</option>
                          <option value="evaluating">Evaluating land or site conditions</option>
                          <option value="preparing">Preparing for a serious project discussion</option>
                        </select>
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#9a8e87]"
                          style={{ fontSize: "0.625rem" }}
                        >
                          ▾
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Submit strip */}
                  <div
                    className="flex flex-col gap-4 px-10 py-8 border-t border-[var(--color-border-light)]"
                    style={{ backgroundColor: "var(--color-bg-soft)" }}
                  >
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary py-3.5 px-9 self-start text-[0.875rem] disabled:opacity-60"
                    >
                      {status === "loading" ? "Sending…" : "Request the catalog"}
                    </button>
                    <p
                      style={{
                        fontSize:   "0.75rem",
                        color:      "var(--color-text-muted)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Your details are not shared with third parties and are not used
                      for marketing.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 + 6. Secondary CTA ────────────────────────────────────────── */}
      <CtaBand
        heading="Need more than a catalog?"
        body="If your project is already taking shape, the Private Offer route gives us the context needed to respond with more precision."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "View the Collection", href: "/collection" }}
        theme="dark"
      />
    </>
  );
}
