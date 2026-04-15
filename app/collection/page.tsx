import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/sections/CtaBand";
import { withCanonical } from "@/lib/seo";
import {
  collectionApproach,
  collectionFamilies,
  collectionGuidance,
  collectionWhySoleta,
  collectionExplore,
  collectionCta,
} from "@/lib/content/collection";

export const metadata: Metadata = {
  ...withCanonical("/collection"),
  title: "The Collection | Soleta Homes",
  description:
    "Explore four distinct paths — Signature, Classic, Holiday & Retreat and Custom Architecture. Timber homes shaped around the way you want to live.",
};

export default function CollectionPage() {
  return (
    <>
      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">The Collection</span>
          <h1 className="mb-6 max-w-2xl">
            Architecture shaped around<br />the way you want to live
          </h1>
          <p className="subtitle max-w-xl">
            Explore four distinct paths — from timeless everyday homes to private retreats,
            expressive signature residences and fully bespoke architecture.
          </p>
          <div className="mt-10">
            <a
              href="#collection-paths"
              className="btn-primary"
            >
              Explore the Collection
            </a>
          </div>
        </div>
      </section>

      {/* ── 2. Our Approach ──────────────────────────────────────────────── */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">{collectionApproach.eyebrow}</span>
          <h2 className="mb-6 max-w-xl text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1]">
            {collectionApproach.heading}
          </h2>
          <p
            className="max-w-2xl leading-relaxed text-[var(--color-text-secondary)]"
            style={{ fontSize: "clamp(1rem,1.2vw,1.125rem)" }}
          >
            {collectionApproach.body}
          </p>
          <Link
            href={collectionApproach.link.href}
            className="mt-6 inline-flex items-center gap-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] hover:opacity-70 transition-opacity duration-200"
          >
            {collectionApproach.link.label} →
          </Link>
        </div>
      </section>

      {/* ── 3. Choose Your Path ──────────────────────────────────────────── */}
      <section
        id="collection-paths"
        className="section-lg border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow mb-4 block">The Collection</span>
            <h2 className="mb-4">Choose your path</h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed" style={{ fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)" }}>
              Each Soleta direction offers a different balance of permanence, expression, scale
              and freedom — while sharing the same architectural calm, natural materiality and
              long-term thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] sm:grid-cols-2">
            {collectionFamilies.map((family) => (
              <Link
                key={family.href}
                href={family.href}
                className="group flex flex-col bg-[var(--soleta-cream)] transition-colors duration-200 hover:bg-[var(--color-bg)]"
              >
                {/* Atmosphere placeholder — no real image dependency */}
                <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--color-surface)]">
                  <div className="h-full w-full bg-[var(--color-surface-raised)] transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>

                <div className="flex flex-1 flex-col p-8 gap-4">
                  <span className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    {family.eyebrow}
                  </span>
                  <h3 className="text-[1.375rem] leading-[1.2]">{family.heading}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {family.body}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1">
                    {family.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Need Guidance ─────────────────────────────────────────────── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">{collectionGuidance.eyebrow}</span>
          <h2 className="mb-4 max-w-lg">{collectionGuidance.heading}</h2>
          <p className="mb-8 text-[var(--color-text-secondary)] leading-relaxed" style={{ fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)" }}>
            {collectionGuidance.intro}
          </p>
          <ul className="flex flex-col gap-5">
            {collectionGuidance.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-l-2 border-[var(--color-brand)] pl-5 text-[var(--color-text-secondary)] leading-relaxed"
                style={{ fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. Why Soleta ────────────────────────────────────────────────── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <span className="eyebrow mb-4 block">{collectionWhySoleta.eyebrow}</span>
              <h2 className="mb-8 max-w-sm">{collectionWhySoleta.heading}</h2>
              <ul className="flex flex-col gap-4">
                {collectionWhySoleta.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[var(--color-text-secondary)] leading-relaxed"
                    style={{ fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)" }}
                  >
                    <span className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <span className="eyebrow mb-6 block">Learn more</span>
              <nav className="flex flex-col divide-y divide-[var(--color-border-light)]">
                {collectionWhySoleta.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-4 font-ui text-sm text-[var(--color-text)] hover:text-[var(--color-brand)] transition-colors duration-200"
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-[var(--color-brand)]">→</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Explore Further ───────────────────────────────────────────── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-10 block">{collectionExplore.eyebrow}</span>
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] sm:grid-cols-2 lg:grid-cols-4">
            {collectionExplore.blocks.map((block) => (
              <Link
                key={block.href}
                href={block.href}
                className="group flex flex-col gap-4 bg-[var(--color-bg)] p-8 transition-colors duration-200 hover:bg-[var(--soleta-cream)]"
              >
                <h3 className="text-[1.125rem] leading-[1.25]">{block.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {block.body}
                </p>
                <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1">
                  {block.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Final CTA ─────────────────────────────────────────────────── */}
      <CtaBand {...collectionCta} />
    </>
  );
}
