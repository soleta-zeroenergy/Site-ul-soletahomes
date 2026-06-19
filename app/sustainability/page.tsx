import type { Metadata } from "next";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";
import {
  sustainabilityHero,
  sustainabilityFraming,
  sustainabilityPrinciples,
  sustainabilitySupportBlock,
  sustainabilityCta,
} from "@/lib/content/sustainability";

export const metadata: Metadata = {
  ...withCanonical("/sustainability"),
  title: "Sustainability | Carbon Storage, Natural Materials | Soleta",
  description:
    "30–40 tonnes of CO₂ stored per home. 97% organic materials. No excavation foundations. How Soleta builds light and builds to last — with the qualifications those statements require.",
};

const schema = breadcrumbSchema([
  { name: "Home",           href: "/" },
  { name: "Sustainability", href: "/sustainability" },
]);

export default function SustainabilityPage() {
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
          <span className="eyebrow mb-2 block">{sustainabilityHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{sustainabilityHero.heading}</h1>
          <p className="subtitle max-w-xl">{sustainabilityHero.body}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ aspectRatio: "3000 / 975" }}
      >
        <Image
          src="https://img.soletahomes.com/hero_sustainability_3000x975.webp"
          alt="Soleta — built light, built to last"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* ── 3. Framing block ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">{sustainabilityFraming.left}</p>
            <p className="leading-relaxed text-[var(--color-text-secondary)] md:border-l md:border-[var(--color-border-light)] md:pl-16">{sustainabilityFraming.right}</p>
          </div>
        </div>
      </section>

      {/* ── 4. Principles ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-10 block">Six principles</span>
          <div className="flex flex-col gap-px bg-[var(--color-border-light)]">
            {sustainabilityPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-1 gap-6 bg-[var(--color-bg)] p-10 md:grid-cols-[80px_1fr_1fr]"
              >
                <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)]">
                  {principle.number}
                </span>
                <h3 className="text-[1.125rem] leading-snug md:pr-8">{principle.heading}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Supporting image split ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow flex flex-col gap-10">
          <Image
            src="https://img.soletahomes.com/Longevity%20is%20the%20most%20sustainable%20outcome.webp"
            alt="Longevity is the most sustainable outcome — Soleta"
            width={0}
            height={0}
            sizes="(max-width: 1152px) 100vw, 1152px"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="flex flex-col gap-6 lg:max-w-2xl">
            <span className="eyebrow block">{sustainabilitySupportBlock.eyebrow}</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">{sustainabilitySupportBlock.body}</p>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <CtaBand {...sustainabilityCta} />
    </>
  );
}
