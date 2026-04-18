import type { Metadata }  from "next";
import Link               from "next/link";
import { withCanonical }  from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/privacy"),
  title:       "Privacy Policy | Soleta Homes",
  description:
    "How Soleta Homes collects, uses, and handles personal information submitted through the website, enquiry forms, and project discussions.",
};

/* ── Structured data ─────────────────────────────────────────────────────── */
const schema = breadcrumbSchema([
  { name: "Home",           href: "/" },
  { name: "Privacy Policy", href: "/privacy" },
]);

/* ── Section nav — anchors for in-page navigation ───────────────────────── */
const sections = [
  { id: "who-we-are",          label: "Who we are" },
  { id: "information-we-collect", label: "Information we collect" },
  { id: "how-we-collect",      label: "How we collect it" },
  { id: "why-we-use",          label: "Why we use it" },
  { id: "legal-bases",         label: "Legal bases" },
  { id: "sharing",             label: "Sharing & processors" },
  { id: "retention",           label: "Retention" },
  { id: "cookies",             label: "Cookies & analytics" },
  { id: "your-rights",         label: "Your rights" },
  { id: "contact",             label: "Contact" },
];

/* ── Shared prose styles ─────────────────────────────────────────────────── */
const prose = {
  h2: {
    fontFamily:    "var(--font-heading)",
    fontSize:      "1.1875rem",
    fontWeight:    400,
    letterSpacing: "0.01em",
    color:         "#1a1714",
    lineHeight:    1.3,
    marginBottom:  "0.875rem",
    marginTop:     0,
  } as React.CSSProperties,
  p: {
    fontFamily: "var(--font-body)",
    fontSize:   "0.9375rem",
    color:      "var(--color-text-secondary)",
    lineHeight: 1.75,
    marginBottom: "0.75rem",
  } as React.CSSProperties,
  li: {
    fontFamily:   "var(--font-body)",
    fontSize:     "0.9375rem",
    color:        "var(--color-text-secondary)",
    lineHeight:   1.75,
    paddingLeft:  0,
    marginBottom: "0.375rem",
  } as React.CSSProperties,
};

import type React from "react";

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Page header ─────────────────────────────────────────────────── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-3 block">Legal</span>
          <h1
            className="mb-5"
            style={{
              fontSize:      "clamp(1.875rem, 4vw, 3rem)",
              lineHeight:    1.08,
              letterSpacing: "-0.02em",
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="max-w-2xl leading-relaxed"
            style={{
              color:      "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
              fontSize:   "1rem",
            }}
          >
            This policy explains what information we collect through the Soleta Homes
            website, how we use it, and how we handle it in connection with enquiries,
            project discussions, and website operation.
          </p>
          <p
            className="mt-4"
            style={{
              fontFamily:    "var(--font-ui)",
              fontSize:      "0.75rem",
              color:         "var(--color-text-muted)",
              letterSpacing: "0.04em",
            }}
          >
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <section
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[200px_1fr] lg:gap-20">

            {/* ── Sticky section nav (desktop only) ── */}
            <nav
              aria-label="Privacy policy sections"
              className="hidden lg:block"
            >
              <div className="sticky top-28 flex flex-col gap-0">
                {sections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      "0.8125rem",
                      color:         "var(--color-text-muted)",
                      textDecoration: "none",
                      padding:       "0.5rem 0",
                      borderBottom:  "1px solid var(--color-border-light)",
                      display:       "block",
                      transition:    "color 150ms",
                    }}
                    className="hover:text-[var(--color-text)]"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>

            {/* ── Content ── */}
            <div className="flex flex-col gap-12">

              {/* 1. Who we are */}
              <div
                id="who-we-are"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>Who we are</h2>
                <p style={prose.p}>
                  This website is operated by Soleta Homes. For the purposes of this
                  policy, references to "we", "us", or "Soleta Homes" mean the Soleta
                  Homes website and its operator.
                </p>
                <p style={prose.p}>
                  For privacy-related enquiries, contact us at{" "}
                  <a
                    href="mailto:office@soletahomes.com"
                    style={{ color: "var(--color-brand)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    office@soletahomes.com
                  </a>.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 2. Information we collect */}
              <div
                id="information-we-collect"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>Information we collect</h2>
                <p style={prose.p}>
                  We collect personal information in the following contexts:
                </p>
                <ul className="flex flex-col gap-2 ml-0 pl-0" style={{ listStyle: "none" }}>
                  {[
                    "Information submitted through the contact form, including name, email address, and any project or enquiry details provided.",
                    "Information submitted through the Private Offer request form, including name, email address, phone number, country of residence, project location, and relevant project details such as land status, intended use, size, budget range, and project description.",
                    "Information submitted through the catalog request form, including name, email address, country, and project stage.",
                    "Basic technical and usage data that may be collected through standard website operation, including server logs, browser type, referring URLs, and similar technical information associated with website visits.",
                    "Information you provide when contacting us directly by email.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-[4px] w-[4px] shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-brand)" }}
                      />
                      <span style={prose.li}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 3. How we collect */}
              <div
                id="how-we-collect"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>How we collect information</h2>
                <p style={prose.p}>
                  Information is collected when a visitor completes and submits a form
                  on the website, when a visitor contacts us directly by email, and
                  through the normal technical operation of the website including
                  hosting logs and, where applicable, analytics tools.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 4. Why we use it */}
              <div
                id="why-we-use"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>Why we use information</h2>
                <p style={prose.p}>We use the information we collect for the following purposes:</p>
                <ul className="flex flex-col gap-2 pl-0" style={{ listStyle: "none" }}>
                  {[
                    "To respond to enquiries and project briefs submitted through the website.",
                    "To send requested materials such as the Soleta catalog, where a request has been submitted.",
                    "To review and assess project enquiries and determine the most appropriate next step.",
                    "To maintain communication related to an active enquiry or project discussion.",
                    "To operate, secure, and improve the website and its technical infrastructure.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-[4px] w-[4px] shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-brand)" }}
                      />
                      <span style={prose.li}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 5. Legal bases */}
              <div
                id="legal-bases"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>Legal bases for processing</h2>
                <p style={prose.p}>
                  Where applicable, we rely on the following legal bases for
                  processing personal information:
                </p>
                <ul className="flex flex-col gap-2 pl-0" style={{ listStyle: "none" }}>
                  {[
                    "Legitimate interests — to respond to project and general enquiries, to operate and improve the website, and to manage communications related to an active enquiry.",
                    "Steps taken at the request of the individual prior to entering into a contract — where a visitor has submitted a project brief or enquiry with a view to a potential project engagement.",
                    "Consent — where consent is given, for example in relation to certain cookies or analytics tools.",
                    "Legal obligation — where processing is required to comply with a legal requirement.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-[4px] w-[4px] shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-brand)" }}
                      />
                      <span style={prose.li}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 6. Sharing */}
              <div
                id="sharing"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>Sharing and processors</h2>
                <p style={prose.p}>
                  We do not sell personal information. We do not share personal
                  information with third parties for their own marketing purposes.
                </p>
                <p style={prose.p}>
                  Personal information may be processed by service providers involved
                  in website hosting, email delivery, form handling, analytics, or
                  technical website operation, acting as data processors on our behalf
                  and only to the extent necessary for those purposes.
                </p>
                <p style={prose.p}>
                  Where processors are located outside the European Economic Area, we
                  take reasonable steps to ensure appropriate safeguards are in place
                  in accordance with applicable data protection requirements.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 7. Retention */}
              <div
                id="retention"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>Retention</h2>
                <p style={prose.p}>
                  We retain personal information only for as long as reasonably
                  necessary for the purpose for which it was collected, or as required
                  for legal, administrative, or operational reasons. Project-related
                  information may be retained for the duration of a project discussion
                  and for a reasonable period thereafter. Where information is no
                  longer needed, we take reasonable steps to delete or anonymise it.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 8. Cookies */}
              <div
                id="cookies"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>Cookies and analytics</h2>
                <p style={prose.p}>
                  The website may use cookies or similar technologies for technical
                  operation and, where applicable, for analytics purposes to understand
                  how visitors use the site. Where analytics tools are in use, data is
                  collected in aggregated or anonymised form to the extent possible.
                </p>
                <p style={prose.p}>
                  We do not use tracking cookies for advertising or behavioural
                  profiling purposes. You can manage cookie preferences through your
                  browser settings. Disabling cookies may affect certain aspects of
                  website functionality.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 9. Your rights */}
              <div
                id="your-rights"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>Your rights</h2>
                <p style={prose.p}>
                  Depending on your location and applicable law, you may have rights in
                  relation to your personal information, including:
                </p>
                <ul className="flex flex-col gap-2 pl-0" style={{ listStyle: "none" }}>
                  {[
                    "The right to access the personal information we hold about you.",
                    "The right to correct inaccurate or incomplete information.",
                    "The right to request deletion of your personal information, subject to applicable legal or operational requirements.",
                    "The right to restrict processing in certain circumstances.",
                    "The right to object to processing based on legitimate interests.",
                    "The right to withdraw consent where processing is based on consent.",
                    "The right to lodge a complaint with a competent data protection supervisory authority.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-[4px] w-[4px] shrink-0 rounded-full"
                        style={{ backgroundColor: "var(--color-brand)" }}
                      />
                      <span style={prose.li}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ ...prose.p, marginTop: "0.75rem" }}>
                  To exercise any of these rights, contact us at{" "}
                  <a
                    href="mailto:office@soletahomes.com"
                    style={{ color: "var(--color-brand)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    office@soletahomes.com
                  </a>.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 10. Contact */}
              <div
                id="contact"
                style={{ scrollMarginTop: "6rem" }}
              >
                <h2 style={prose.h2}>Contact</h2>
                <p style={prose.p}>
                  For any privacy-related questions or requests, contact Soleta Homes
                  at{" "}
                  <a
                    href="mailto:office@soletahomes.com"
                    style={{ color: "var(--color-brand)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    office@soletahomes.com
                  </a>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Footer nav ──────────────────────────────────────────────────── */}
      <section
        className="border-t border-[var(--color-border-light)] py-10"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/terms"
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "0.875rem",
                color:         "var(--color-text-muted)",
                textDecoration: "none",
              }}
              className="hover:text-[var(--color-text)] transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "0.875rem",
                color:         "var(--color-text-muted)",
                textDecoration: "none",
              }}
              className="hover:text-[var(--color-text)] transition-colors"
            >
              Contact
            </Link>
          </div>
          <p
            style={{
              fontFamily:    "var(--font-ui)",
              fontSize:      "0.75rem",
              color:         "var(--color-text-muted)",
              letterSpacing: "0.04em",
            }}
          >
            Last updated: April 2026
          </p>
        </div>
      </section>
    </>
  );
}
