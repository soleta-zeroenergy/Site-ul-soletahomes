"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { HomeModel } from "@/lib/content/collection-models";

export function ModelDetail({ model }: { model: HomeModel }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article>
      {/* ── 1. Page header ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link
            href="/collection"
            className="eyebrow mb-6 inline-flex items-center gap-2 no-underline hover:opacity-70 transition-opacity"
          >
            ← {model.relatedLabel}
          </Link>
          <span className="eyebrow mb-4 block">{model.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{model.heading}</h1>
          <p className="subtitle max-w-xl">{model.subheading}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Request a Private Offer
            </Link>
            <Link href="/catalog" className="btn-outline">
              Download Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. Image placeholder ── */}
      <div
        className="aspect-[21/9] w-full bg-[var(--color-surface)]"
        aria-hidden="true"
      />

      {/* ── 3. Description + specs ── */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_380px]">
            {/* Description */}
            <div className="flex flex-col gap-6">
              <span className="eyebrow block">About this collection</span>
              {model.description.map((para, i) => (
                <p key={i} className="leading-relaxed text-[var(--color-text-secondary)]">
                  {para}
                </p>
              ))}
            </div>

            {/* Specs sidebar */}
            <aside>
              <div
                className="border border-[var(--color-border-light)] p-8"
                style={{ backgroundColor: "var(--soleta-cream)" }}
              >
                <span className="eyebrow mb-6 block">Specifications</span>
                <dl className="flex flex-col gap-4">
                  {model.specs.map((spec) => (
                    <div key={spec.label} className="flex flex-col gap-1 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0">
                      <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                        {spec.label}
                      </dt>
                      <dd className="font-ui text-sm text-[var(--color-text)]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── 4. Variants ── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-4 block">Available sizes</span>
          <h2 className="mb-10 max-w-lg text-[2rem]">Choose your configuration</h2>
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] sm:grid-cols-2 lg:grid-cols-4">
            {model.variants.map((variant) => (
              <div
                key={variant.name}
                className="flex flex-col gap-2 bg-[var(--soleta-cream)] p-8"
              >
                <span className="font-heading text-[1.5rem]">{variant.name}</span>
                <span className="font-ui text-[0.75rem] text-[var(--color-text-secondary)]">
                  {variant.area}
                </span>
                <span className="font-ui text-[0.75rem] text-[var(--color-text-muted)]">
                  {variant.bedrooms}
                </span>
                <span className="mt-4 font-ui text-[0.875rem] font-medium text-[var(--color-text)]">
                  {variant.price}
                </span>
                <Link
                  href="/contact"
                  className="mt-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] hover:opacity-70 transition-opacity"
                >
                  Request offer →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. What's included ── */}
      <section className="section border-t border-[var(--color-border-light)]" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <span className="eyebrow mb-6 block">What's included</span>
              <ul className="flex flex-col gap-3">
                {model.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow mb-6 block">Not included</span>
              <ul className="flex flex-col gap-3">
                {model.excludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-sand-dark)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">Frequently asked</span>
          <h2 className="mb-10 text-[2rem]">Questions about this collection</h2>
          <div className="flex flex-col divide-y divide-[var(--color-border-light)]">
            {model.faq.map((item, i) => (
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
                      "shrink-0 text-[var(--color-brand)] transition-transform duration-200",
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

      {/* ── 7. Final CTA ── */}
      <section
        className="section"
        style={{ backgroundColor: "var(--soleta-forest)", color: "var(--soleta-cream)" }}
      >
        <div className="container-narrow text-center">
          <span
            className="eyebrow mb-4 block"
            style={{ color: "var(--soleta-gold)" }}
          >
            Next step
          </span>
          <h2
            className="mb-4 text-[2.25rem]"
            style={{ color: "var(--soleta-cream)" }}
          >
            Begin your {model.eyebrow} project
          </h2>
          <p
            className="subtitle mb-10"
            style={{ color: "var(--soleta-cream)", opacity: 0.7 }}
          >
            Tell us about your site, your vision and your timeline.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-inverse">
              Request a Private Offer
            </Link>
            <Link
              href="/collection"
              className="btn-ghost"
              style={{ color: "var(--soleta-cream)", opacity: 0.7 }}
            >
              ← Back to The Collection
            </Link>
          </div>
        </div>
      </section>
      {/* ── Sticky mobile CTA ── */}
      <div className="sticky-cta-mobile">
        <Link href="/contact" className="btn-primary flex-1 justify-center">
          Request Offer
        </Link>
        <Link href="/catalog" className="btn-outline flex-1 justify-center">
          Catalogue
        </Link>
      </div>
    </article>
  );
}
