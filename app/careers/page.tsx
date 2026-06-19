import type { Metadata } from "next";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { ValuesGrid } from "@/components/sections/ValuesGrid";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";
import {
  careersHero,
  careersSections,
  careersValues,
  careersOpenings,
  careersSupportBlock,
} from "@/lib/content/careers";

export const metadata: Metadata = {
  ...withCanonical("/careers"),
  title: "Careers | Soleta",
  description:
    "Soleta is a small, precise organisation building timber homes across Europe and worldwide. We recruit carefully and not often — architects, engineers, production specialists, and specialists in local permitting legislation who want to do work that lasts.",
};

const schema = breadcrumbSchema([
  { name: "Home",    href: "/" },
  { name: "Careers", href: "/careers" },
]);

export default function CareersPage() {
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
          <span className="eyebrow mb-2 block">{careersHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl">{careersHero.heading}</h1>
          <p className="subtitle max-w-xl">{careersHero.intro}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ aspectRatio: "3000 / 975" }}
      >
        <Image
          src="https://img.soletahomes.com/hero_careers_3000x975.webp"
          alt="Soleta — precision manufacturing and craft"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* ── 3. What working at Soleta means ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-10 block">What working here means</span>
          <div className="flex flex-col gap-14">
            {careersSections.map((section, i) => (
              <div key={section.heading} className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
                <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>{section.heading}</h2>
                  <p className="leading-relaxed text-[var(--color-text-secondary)]">{section.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Who we look for — ValuesGrid ── */}
      <div className="border-b border-[var(--color-border-light)]">
        <ValuesGrid
          eyebrow="Who we look for"
          items={careersValues}
          columns={3}
          theme="warm"
        />
      </div>

      {/* ── 5. Openings / open applications ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">Openings</span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>{careersOpenings.heading}</h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">{careersOpenings.body}</p>
            </div>
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
            src="https://img.soletahomes.com/Who%20we%20are%20looking%20for.webp"
            alt="Who we are looking for — Soleta careers"
            width={0}
            height={0}
            sizes="(max-width: 1152px) 100vw, 1152px"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="flex flex-col gap-6 lg:max-w-2xl">
            <span className="eyebrow block">{careersSupportBlock.eyebrow}</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">{careersSupportBlock.body}</p>
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <CtaBand
        eyebrow="Get in touch"
        heading="Send us your work"
        body="If your experience is relevant and your work is serious, we would like to hear from you. Send your portfolio and a short introduction to office@soletahomes.com"
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "About Soleta", href: "/about" }}
        theme="dark"
      />
    </>
  );
}
