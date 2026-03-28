import type { Metadata } from "next";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  sustainabilityHero,
  sustainabilityPrinciples,
  sustainabilityStats,
  sustainabilityCta,
} from "@/lib/content/sustainability";

export const metadata: Metadata = {
  ...withCanonical("/sustainability"),
  title: "Sustainability | Carbon Storage, Natural Materials | Soleta",
  description:
    "30–40 tonnes of CO₂ stored per home. 97% organic materials. Zero excavation foundations. How Soleta builds light and builds to last.",
};

export default function SustainabilityPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">{sustainabilityHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{sustainabilityHero.heading}</h1>
          <p className="subtitle max-w-xl">{sustainabilityHero.body}</p>
        </div>
      </section>

      {/* ── 2. Stats ── */}
      <section
        className="section-sm border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {sustainabilityStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-heading text-[2.5rem] font-normal leading-none text-[var(--soleta-ink)]">
                  {stat.value}
                </dt>
                <dd className="mt-2 font-ui text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 3. Principles ── */}
      <section className="section" style={{ backgroundColor: "var(--soleta-cream)" }}>
        <div className="container-site">
          <span className="eyebrow mb-4 block">Our approach</span>
          <h2 className="mb-12 text-[2rem]">Six principles</h2>
          <div className="flex flex-col gap-px bg-[var(--color-border-light)]">
            {sustainabilityPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-1 gap-6 bg-[var(--soleta-cream)] p-10 md:grid-cols-[80px_1fr_1fr]"
              >
                <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  {principle.number}
                </span>
                <h3 className="text-[1.125rem] md:pr-8">{principle.heading}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...sustainabilityCta} />
    </>
  );
}
