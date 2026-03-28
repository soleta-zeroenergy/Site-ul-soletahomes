"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { zeroEnergyContent } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";
import { faqSchema, breadcrumbSchema } from "@/lib/structured-data-helpers";

const cta = {
  eyebrow: "Next step",
  heading: "Begin your ZeroEnergy project",
  body: "Tell us about your site and we will calculate the ZeroEnergy system for your specific location and consumption.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View the Collection", href: "/collection" },
  theme: "dark",
};

export default function ZeroEnergyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqSchema(zeroEnergyContent.faq)
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Architecture & Design", href: "/architecture" },
              { name: "ZeroEnergy", href: "/architecture/energy-zeroenergy" },
            ])
          ),
        }}
      />
      {/* ── 1. Header ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link href="/architecture" className="eyebrow mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            ← Architecture & Design
          </Link>
          <span className="eyebrow mb-4 block">{zeroEnergyContent.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{zeroEnergyContent.heading}</h1>
          <p className="subtitle max-w-xl">{zeroEnergyContent.intro}</p>
        </div>
      </section>

      {/* ── 2. What ZeroEnergy means ── */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-narrow">
          <h2 className="mb-6 text-[1.75rem]">{zeroEnergyContent.what.heading}</h2>
          <p className="leading-relaxed text-[var(--color-text-secondary)]">
            {zeroEnergyContent.what.body}
          </p>
        </div>
      </section>

      {/* ── 3. Three levels ── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-4 block">Energy levels</span>
          <h2 className="mb-10 text-[2rem]">Choose your level of independence</h2>
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
                    color: i === 1 ? "var(--soleta-cream)" : "var(--color-text-secondary)",
                    opacity: i === 1 ? 0.8 : 1,
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

      {/* ── 4. Systems ── */}
      <section className="section border-t border-[var(--color-border-light)]" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <span className="eyebrow mb-4 block">The systems</span>
          <h2 className="mb-10 text-[2rem]">How ZeroEnergy works</h2>
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

      {/* ── 5. FAQ ── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">Frequently asked</span>
          <h2 className="mb-10 text-[2rem]">Questions about ZeroEnergy</h2>
          <div className="flex flex-col divide-y divide-[var(--color-border-light)]">
            {zeroEnergyContent.faq.map((item, i) => (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-heading text-[1.125rem] text-[var(--color-text)]">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      "shrink-0 text-[var(--color-brand)] transition-transform duration-200 text-xl",
                      openFaq === i && "rotate-45"
                    )}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="pb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
