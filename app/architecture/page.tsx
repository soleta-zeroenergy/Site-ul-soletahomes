import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { architectureHero, architecturePillars, architectureFraming } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/architecture"),
  title: "Architecture & Design | Soleta",
  description:
    "Design language, structural system, healthy materials and energy performance — shaped as one integrated approach. How every Soleta home is conceived and built.",
};

const schema = breadcrumbSchema([
  { name: "Home",                href: "/" },
  { name: "Architecture & Design", href: "/architecture" },
]);

export default function ArchitecturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── 1. Page header ── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">{architectureHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{architectureHero.heading}</h1>
          <p className="subtitle max-w-xl">{architectureHero.body}</p>
        </div>
      </section>

      {/* ── 2. System framing block ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-start">
            <div>
              <span className="eyebrow mb-4 block">One integrated system</span>
              <h2 className="mb-6" style={{ fontSize: "clamp(1.375rem, 2vw, 1.75rem)", lineHeight: 1.2 }}>
                {architectureFraming.heading}
              </h2>
            </div>
            <p className="leading-relaxed text-[var(--color-text-secondary)] lg:pt-14">
              {architectureFraming.body}
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Four pillar navigator ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-10 block">Four disciplines</span>
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2">
            {architecturePillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group flex flex-col bg-[var(--soleta-cream)] p-10 transition-colors duration-200 hover:bg-[var(--color-bg)]"
              >
                <span className="eyebrow mb-4 block">{pillar.eyebrow}</span>
                <h2 className="mb-4 text-[1.375rem] leading-snug">{pillar.heading}</h2>
                <p className="mb-8 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {pillar.body}
                </p>
                <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1 inline-block">
                  {pillar.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <CtaBand
        eyebrow="Next step"
        heading="See how we build in practice"
        body="Browse our completed projects or start a conversation about your site."
        primaryCta={{ label: "View Built Projects",      href: "/built-projects" }}
        secondaryCta={{ label: "Request a Private Offer", href: "/contact" }}
        theme="dark"
      />
    </>
  );
}
