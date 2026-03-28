import type { Metadata } from "next";
import Link from "next/link";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { CtaBand } from "@/components/sections/CtaBand";
import { withCanonical } from "@/lib/seo";
import {
  collectionIntro,
  collectionFamilies,
  collectionStats,
  collectionCta,
} from "@/lib/content/collection";

export const metadata: Metadata = {
  ...withCanonical("/collection"),
  title: "The Collection | Soleta Homes",
  description:
    "Explore the Soleta collection of architect-designed timber homes — Signature, Classic, Large Family, Holiday and Custom Architecture.",
};

export default function CollectionPage() {
  return (
    <>
      {/* ── 1. Page header ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">The Collection</span>
          <h1 className="mb-6 max-w-2xl">
            Homes built<br />for how you live
          </h1>
          <p className="subtitle max-w-xl">
            Every Soleta home begins with place — your land, your light, your
            life. We build around it.
          </p>
        </div>
      </section>

      {/* ── 2. Architectural philosophy ── */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-narrow">
          <SectionIntro {...collectionIntro} align="left" />
        </div>
      </section>

      {/* ── 3. Collection families grid ── */}
      <section
        className="section-lg border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <div className="mb-12">
            <span className="eyebrow mb-3 block">Architectural families</span>
            <h2 className="max-w-lg">Choose your starting point</h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] sm:grid-cols-2 lg:grid-cols-3">
            {collectionFamilies.map((family) => (
              <Link
                key={family.href}
                href={family.href}
                className="group flex flex-col bg-[var(--soleta-cream)] transition-colors duration-200 hover:bg-[var(--color-bg)]"
              >
                {/* Image placeholder — replace with next/image when photos available */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-surface)]">
                  <div className="h-full w-full bg-[var(--color-surface-raised)] transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <span className="eyebrow mb-3 block">{family.eyebrow}</span>
                  <h3 className="mb-3 text-[1.375rem]">{family.heading}</h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {family.body}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-sm bg-[var(--color-surface)] px-3 py-1 font-ui text-[0.625rem] tracking-[0.1em] text-[var(--color-text-muted)] uppercase">
                      {family.badge}
                    </span>
                    <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1">
                      {family.cta} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Stats bar ── */}
      <section
        className="section-sm border-t border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {collectionStats.map((stat) => (
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

      {/* ── 5. Final CTA ── */}
      <CtaBand {...collectionCta} />
    </>
  );
}
