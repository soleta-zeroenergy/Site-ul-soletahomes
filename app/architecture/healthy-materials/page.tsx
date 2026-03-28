import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { healthyMaterialsContent } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/architecture/healthy-materials"),
  title: "Healthy Materials | Natural Timber Construction | Soleta",
  description:
    "97% organic materials, no synthetic insulation, formaldehyde-free adhesives. Why the materials in a Soleta home are better for the people inside.",
};

const cta = {
  eyebrow: "Next",
  heading: "Energy & ZeroEnergy",
  body: "A home that produces what it consumes — and what that means in practice.",
  primaryCta: { label: "Explore ZeroEnergy", href: "/architecture/energy-zeroenergy" },
  secondaryCta: { label: "View the Collection", href: "/collection" },
  theme: "dark",
};

export default function HealthyMaterialsPage() {
  return (
    <>
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link href="/architecture" className="eyebrow mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            ← Architecture & Design
          </Link>
          <span className="eyebrow mb-4 block">{healthyMaterialsContent.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{healthyMaterialsContent.heading}</h1>
          <p className="subtitle max-w-xl">{healthyMaterialsContent.intro}</p>
        </div>
      </section>

      {/* Stats */}
      <section
        className="section-sm border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {healthyMaterialsContent.stats.map((stat) => (
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

      {/* Principles */}
      <section className="section" style={{ backgroundColor: "var(--soleta-cream)" }}>
        <div className="container-site">
          <span className="eyebrow mb-6 block">Our principles</span>
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2">
            {healthyMaterialsContent.principles.map((principle, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 bg-[var(--soleta-cream)] p-10"
              >
                <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  0{i + 1}
                </span>
                <h2 className="text-[1.375rem]">{principle.heading}</h2>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
