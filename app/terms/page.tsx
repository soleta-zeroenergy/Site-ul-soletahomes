import type { Metadata }  from "next";
import Link               from "next/link";
import { withCanonical }  from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

/* ── Metadata ────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/terms"),
  title:       "Terms of Use | Soleta Homes",
  description:
    "The terms governing use of the Soleta Homes website and the information made available through it.",
};

/* ── Structured data ─────────────────────────────────────────────────────── */
const schema = breadcrumbSchema([
  { name: "Home",         href: "/" },
  { name: "Terms of Use", href: "/terms" },
]);

/* ── Section nav ─────────────────────────────────────────────────────────── */
const sections = [
  { id: "scope",              label: "Scope" },
  { id: "informational",      label: "Informational content" },
  { id: "no-binding-offer",   label: "No binding offer" },
  { id: "intellectual-property", label: "Intellectual property" },
  { id: "acceptable-use",     label: "Acceptable use" },
  { id: "external-links",     label: "External links" },
  { id: "liability",          label: "Liability" },
  { id: "changes",            label: "Changes" },
  { id: "governing-law",      label: "Governing law" },
  { id: "contact",            label: "Contact" },
];

/* ── Shared prose styles ─────────────────────────────────────────────────── */
import type React from "react";

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
    fontFamily:   "var(--font-body)",
    fontSize:     "0.9375rem",
    color:        "var(--color-text-secondary)",
    lineHeight:   1.75,
    marginBottom: "0.75rem",
  } as React.CSSProperties,
  li: {
    fontFamily:   "var(--font-body)",
    fontSize:     "0.9375rem",
    color:        "var(--color-text-secondary)",
    lineHeight:   1.75,
    marginBottom: "0.375rem",
  } as React.CSSProperties,
};

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p
            className="max-w-2xl leading-relaxed"
            style={{
              color:      "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
              fontSize:   "1rem",
            }}
          >
            These terms govern the use of the Soleta Homes website and the information
            made available through it.
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
              aria-label="Terms of use sections"
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

              {/* 1. Scope */}
              <div id="scope" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>Scope</h2>
                <p style={prose.p}>
                  This website is operated by Soleta Homes. By accessing or using the
                  website, visitors agree to these terms. These terms apply to website
                  use only and do not constitute or replace any terms applicable to a
                  formal project engagement, service agreement, or contract.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 2. Informational nature */}
              <div id="informational" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>Informational nature of content</h2>
                <p style={prose.p}>
                  The content published on this website is provided for general
                  information and project orientation purposes. It describes our
                  approach, design language, collections, processes, and related
                  information as a reference for visitors.
                </p>
                <p style={prose.p}>
                  Website content does not by itself constitute a binding offer,
                  technical guarantee, regulatory approval, or contractual commitment of
                  any kind.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 3. No binding offer */}
              <div id="no-binding-offer" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>No binding offer</h2>
                <p style={prose.p}>
                  Project scope, pricing, timelines, technical specification, and
                  delivery structure are determined only through direct discussion and,
                  where applicable, formal agreement between Soleta Homes and the client.
                  Nothing on the website constitutes a fixed price, a guaranteed
                  delivery schedule, or a commitment to undertake a specific project.
                </p>
                <p style={prose.p}>
                  Indicative figures, estimates, and process descriptions published on
                  the website are provided as general orientation only and are subject to
                  change without notice.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 4. Intellectual property */}
              <div id="intellectual-property" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>Intellectual property</h2>
                <p style={prose.p}>
                  All text, images, graphics, drawings, layout, branding, and other
                  content published on this website belong to Soleta Homes or are used
                  with appropriate permission.
                </p>
                <p style={prose.p}>
                  Copying, reproducing, distributing, publishing, or otherwise reusing
                  any website content without prior written permission from Soleta Homes
                  is not permitted, except where expressly allowed by applicable law
                  (for example, limited quotation for non-commercial purposes with clear
                  attribution).
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 5. Acceptable use */}
              <div id="acceptable-use" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>Acceptable use</h2>
                <p style={prose.p}>Users must not:</p>
                <ul className="flex flex-col gap-2 pl-0" style={{ listStyle: "none" }}>
                  {[
                    "Use the website in any way that is unlawful, harmful, or fraudulent.",
                    "Attempt to gain unauthorized access to any part of the website, its systems, or related infrastructure.",
                    "Interfere with or disrupt the availability or functionality of the website.",
                    "Submit false, misleading, or abusive information through any website form.",
                    "Use automated means to scrape, harvest, or extract data from the website without prior permission.",
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

              {/* 6. External links */}
              <div id="external-links" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>External links</h2>
                <p style={prose.p}>
                  The website may include links to external websites for convenience or
                  reference. Soleta Homes is not responsible for the content, accuracy,
                  or privacy practices of third-party websites. The inclusion of a link
                  does not imply endorsement.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 7. Liability */}
              <div id="liability" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>Liability</h2>
                <p style={prose.p}>
                  We make reasonable efforts to ensure that the information published on
                  this website is accurate and current. However, the website is provided
                  on an as-available basis without warranty of any kind, express or
                  implied.
                </p>
                <p style={prose.p}>
                  Soleta Homes is not liable for any indirect, incidental, or
                  consequential loss or damage arising solely from use of or reliance on
                  this website or its content, to the extent permitted by applicable
                  law. Nothing in these terms limits liability for matters that cannot
                  be excluded by law.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 8. Changes */}
              <div id="changes" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>Changes</h2>
                <p style={prose.p}>
                  The Soleta Homes website and these terms may be updated from time to
                  time. The date at the top of this page reflects the most recent
                  revision. Continued use of the website following an update constitutes
                  acceptance of the revised terms.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 9. Governing law */}
              <div id="governing-law" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>Governing law</h2>
                <p style={prose.p}>
                  These terms are governed by the law of Romania. Any dispute relating
                  to the use of this website that cannot be resolved through direct
                  correspondence will be subject to the jurisdiction of the competent
                  courts of Romania, without prejudice to rights under mandatory local
                  consumer protection law where applicable.
                </p>
              </div>

              <div className="h-px bg-[var(--color-border-light)]" aria-hidden="true" />

              {/* 10. Contact */}
              <div id="contact" style={{ scrollMarginTop: "6rem" }}>
                <h2 style={prose.h2}>Contact</h2>
                <p style={prose.p}>
                  For questions related to this website or these terms, contact Soleta
                  Homes at{" "}
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
              href="/privacy"
              style={{
                fontFamily:    "var(--font-body)",
                fontSize:      "0.875rem",
                color:         "var(--color-text-muted)",
                textDecoration: "none",
              }}
              className="hover:text-[var(--color-text)] transition-colors"
            >
              Privacy Policy
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
