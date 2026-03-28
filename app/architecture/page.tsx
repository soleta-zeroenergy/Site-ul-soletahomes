import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { architectureHero, architecturePillars } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/architecture"),
  title: "Architecture & Design | How We Build | Soleta",
  description:
    "Post and beam glulam timber construction, natural insulation, healthy materials and ZeroEnergy systems. How every Soleta home is designed and built.",
};

const architectureCta = {
  eyebrow: "Next step",
  heading: "See how we build in practice",
  body: "Browse our completed projects or start a conversation about your site.",
  primaryCta: { label: "View Built Projects", href: "/built-projects" },
  secondaryCta: { label: "Request a Private Offer", href: "/contact" },
  theme: "dark",
};

export default function ArchitecturePage() {
  return (
    <>
      {/* ── 1. Page header ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">{architectureHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{architectureHero.heading}</h1>
          <p className="subtitle max-w-xl">{architectureHero.body}</p>
        </div>
      </section>

      {/* ── 2. Four pillars ── */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2">
            {architecturePillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group flex flex-col bg-[var(--color-bg)] p-10 transition-colors duration-200 hover:bg-[var(--soleta-cream)]"
              >
                <span className="eyebrow mb-4 block">{pillar.eyebrow}</span>
                <h2 className="mb-4 text-[1.5rem] leading-snug">{pillar.heading}</h2>
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

      {/* ── 3. CTA ── */}
      <CtaBand {...architectureCta} />
    </>
  );
}
