import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { healthyMaterialsContent } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/architecture/healthy-materials"),
  title: "Healthy Materials | Architecture & Design | Soleta",
  description:
    "Natural wood fibre insulation, formaldehyde-free adhesives, vapour-permeable construction. Materials selected for durability, indoor quality and honest behaviour over time.",
};

const schema = breadcrumbSchema([
  { name: "Home",                href: "/" },
  { name: "Architecture & Design", href: "/architecture" },
  { name: "Healthy Materials",   href: "/architecture/healthy-materials" },
]);

export default function HealthyMaterialsPage() {
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
          <Link
            href="/architecture"
            className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Architecture & Design
          </Link>
          <span className="eyebrow mb-4 block">{healthyMaterialsContent.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{healthyMaterialsContent.heading}</h1>
          <p className="subtitle max-w-xl">{healthyMaterialsContent.intro}</p>
        </div>
      </section>

      {/* ── 2. Stats strip ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-10 lg:py-12"
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

      {/* ── 3. Material principles ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-10 block">Material principles</span>
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2">
            {healthyMaterialsContent.principles.map((principle, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 bg-[var(--soleta-cream)] p-10"
              >
                <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  0{i + 1}
                </span>
                <h2 style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>{principle.heading}</h2>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Material honesty block ── */}
      {healthyMaterialsContent.honesty && (
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-narrow">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span
                className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1"
                aria-hidden="true"
              >
                ⌁
              </span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                  {healthyMaterialsContent.honesty.heading}
                </h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  {healthyMaterialsContent.honesty.body}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 5. CTA ── */}
      <CtaBand
        eyebrow="Next"
        heading="Energy &amp; ZeroEnergy"
        body="Design-led energy performance — from the envelope to the renewable systems."
        primaryCta={{ label: "Explore ZeroEnergy",  href: "/architecture/energy-zeroenergy" }}
        secondaryCta={{ label: "View the Collection", href: "/collection" }}
        theme="dark"
      />
    </>
  );
}
