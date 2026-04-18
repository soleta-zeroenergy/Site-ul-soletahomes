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
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="/images/Life800x600.webp"
          alt="Soleta — built light, built to last"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16 border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r">
            <span className="eyebrow block">{sustainabilitySupportBlock.eyebrow}</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">{sustainabilitySupportBlock.body}</p>
          </div>
          <div
            className="relative w-full"
            style={{ minHeight: "clamp(300px, 36vw, 520px)" }}
          >
            <Image
              src="/images/Aurora800x600.webp"
              alt="Soleta Aurora — materials that age well"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <CtaBand {...sustainabilityCta} />
    </>
  );
}
