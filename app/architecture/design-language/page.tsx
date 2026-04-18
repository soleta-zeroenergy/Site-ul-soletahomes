import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { designLanguageContent } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/architecture/design-language"),
  title: "Design Language | Architecture & Design | Soleta",
  description:
    "The principles behind Soleta's architectural approach — site response, light and glazing, proportion, interior continuity, and designed flexibility.",
};

const schema = breadcrumbSchema([
  { name: "Home",                href: "/" },
  { name: "Architecture & Design", href: "/architecture" },
  { name: "Design Language",     href: "/architecture/design-language" },
]);

export default function DesignLanguagePage() {
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
          <span className="eyebrow mb-4 block">{designLanguageContent.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{designLanguageContent.heading}</h1>
          <p className="subtitle max-w-xl">{designLanguageContent.intro}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(260px, 38vw, 540px)" }}
      >
        <Image
          src="/images/WhySoleta900x1200.webp"
          alt="Soleta design language — architecture that belongs where it stands"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
      </div>

      {/* ── 3. Numbered prose sections ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="flex flex-col gap-16">
            {designLanguageContent.sections.slice(0, 2).map((section, i) => (
              <div key={i} className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
                <span
                  className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1"
                  aria-hidden="true"
                >
                  0{i + 1}
                </span>
                <div>
                  <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
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

      {/* ── 4. Visual support block ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          {/* Image side */}
          <div
            className="relative w-full border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r"
            style={{ minHeight: "clamp(260px, 32vw, 480px)" }}
          >
            <Image
              src="/images/hero.webp"
              alt="Soleta — site, light and proportion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Text side */}
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16">
            <span className="eyebrow block">03</span>
            <h2 style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
              {designLanguageContent.sections[2].heading}
            </h2>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              {designLanguageContent.sections[2].body}
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. Remaining prose sections (04 + 05) ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="flex flex-col gap-16">
            {designLanguageContent.sections.slice(3).map((section, i) => (
              <div key={i} className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
                <span
                  className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1"
                  aria-hidden="true"
                >
                  0{i + 4}
                </span>
                <div>
                  <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
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

      {/* ── 6. CTA ── */}
      <CtaBand
        eyebrow="Next"
        heading="See the construction system"
        body="How post and beam glulam timber frame turns design into a built reality."
        primaryCta={{ label: "Post & Beam System",  href: "/architecture/post-beam" }}
        secondaryCta={{ label: "View the Collection", href: "/collection" }}
        theme="dark"
      />
    </>
  );
}
