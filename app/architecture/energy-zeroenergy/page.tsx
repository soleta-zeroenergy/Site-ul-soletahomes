import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { zeroEnergyContent } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { faqSchema, breadcrumbSchema } from "@/lib/structured-data-helpers";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  ...withCanonical("/architecture/energy-zeroenergy"),
  title:       "ZeroEnergy | Architecture & Design | Soleta",
  description: "Soleta ZeroEnergy — design-led energy performance for timber homes. Envelope-first approach, passive solar, MVHR, and renewable systems sized to site.",
};

export default function ZeroEnergyPage() {
  const faqItems = zeroEnergyContent.faq;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home",                href: "/" },
              { name: "Architecture & Design", href: "/architecture" },
              { name: "ZeroEnergy",          href: "/architecture/energy-zeroenergy" },
            ])
          ),
        }}
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
          <span className="eyebrow mb-4 block">{zeroEnergyContent.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{zeroEnergyContent.heading}</h1>
          <p className="subtitle max-w-xl">{zeroEnergyContent.intro}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="/images/Classic800x533.webp"
          alt="Soleta Classic — energy performance and glazing design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* ── 3. Design-led energy sections (envelope → glazing → ventilation) ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-10 block">Design first</span>
          <div className="flex flex-col gap-14">
            {zeroEnergyContent.designSections.map((section, i) => (
              <div
                key={i}
                className="grid grid-cols-1 gap-4 md:grid-cols-[120px_1fr]"
              >
                <span
                  className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] md:pt-1"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <div className="flex flex-col gap-3">
                  <h2 style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                    {section.heading}
                  </h2>
                  <p className="leading-relaxed text-[var(--color-text-secondary)]">
                    {section.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Visual support block — envelope / glazing / performance ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          {/* Text side */}
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16 border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r">
            <span className="eyebrow block">Envelope before systems</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              A Soleta home reduces its energy demand through the quality of its envelope — insulation, airtightness, glazing orientation — before any renewable system is sized. This sequence produces homes that perform consistently, regardless of how the energy landscape changes over the building&apos;s lifetime.
            </p>
          </div>
          {/* Image side */}
          <div
            className="relative w-full"
            style={{ minHeight: "clamp(260px, 30vw, 440px)" }}
          >
            <Image
              src="/images/Life800x600.webp"
              alt="Soleta — passive solar glazing and envelope performance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 5. What ZeroEnergy means ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <h2 className="mb-6" style={{ fontSize: "1.75rem" }}>
            {zeroEnergyContent.what.heading}
          </h2>
          <p className="leading-relaxed text-[var(--color-text-secondary)]">
            {zeroEnergyContent.what.body}
          </p>
        </div>
      </section>

      {/* ── 6. Three energy levels ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-4 block">Energy levels</span>
          <h2 className="mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Choose your level of independence
          </h2>
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-3">
            {zeroEnergyContent.levels.map((level, i) => (
              <div
                key={i}
                className={cn(
                  "flex flex-col gap-4 p-10",
                  i === 1
                    ? "bg-[var(--soleta-forest)] text-[var(--soleta-cream)]"
                    : "bg-[var(--soleta-cream)]"
                )}
              >
                {i === 1 && (
                  <span className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.18em] text-[var(--soleta-gold)]">
                    Most popular
                  </span>
                )}
                <h3
                  className="text-[1.375rem]"
                  style={{ color: i === 1 ? "var(--soleta-cream)" : undefined }}
                >
                  {level.name}
                </h3>
                <span
                  className="font-ui text-[0.6875rem] uppercase tracking-[0.1em]"
                  style={{ color: i === 1 ? "var(--soleta-gold)" : "var(--color-brand)" }}
                >
                  {level.label}
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color:   i === 1 ? "var(--soleta-cream)" : "var(--color-text-secondary)",
                    opacity: i === 1 ? 0.85 : 1,
                  }}
                >
                  {level.description}
                </p>
                {i === 0 && (
                  <span className="mt-2 font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-brand)]">
                    Included as standard
                  </span>
                )}
                {i > 0 && (
                  <Link
                    href="/contact"
                    className="mt-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] hover:opacity-70 transition-opacity"
                    style={{ color: i === 1 ? "var(--soleta-cream)" : "var(--color-brand)" }}
                  >
                    Get a quote →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Systems ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-4 block">The systems</span>
          <h2 className="mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            How ZeroEnergy works
          </h2>
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2 lg:grid-cols-3">
            {zeroEnergyContent.systems.map((system, i) => (
              <div key={i} className="flex flex-col gap-3 bg-[var(--color-bg)] p-8">
                <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  0{i + 1}
                </span>
                <h3 className="text-[1.125rem]">{system.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {system.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Site note (what performance depends on) ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <h2 className="mb-4" style={{ fontSize: "1.375rem" }}>
            {zeroEnergyContent.siteNote.heading}
          </h2>
          <p className="leading-relaxed text-[var(--color-text-secondary)]">
            {zeroEnergyContent.siteNote.body}
          </p>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">Frequently asked</span>
          <h2 className="mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Questions about ZeroEnergy
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* ── 10. CTA ── */}
      <CtaBand
        eyebrow="Next step"
        heading="Begin your ZeroEnergy project"
        body="Tell us about your site and we will calculate the ZeroEnergy system for your specific location and consumption."
        primaryCta={{ label: "Request a Private Offer", href: "/contact" }}
        secondaryCta={{ label: "View the Collection",   href: "/collection" }}
        theme="dark"
      />
    </>
  );
}
