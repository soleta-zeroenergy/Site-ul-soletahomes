import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { ValuesGrid } from "@/components/sections/ValuesGrid";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";
import {
  aboutHero,
  aboutFraming,
  aboutStorySections,
  aboutValues,
  aboutRecognition,
  aboutSupportBlock,
  companyTimeline,
} from "@/lib/content/about";

export const metadata: Metadata = {
  ...withCanonical("/about"),
  title: "About Soleta | Founded 2011 | Timber Homes Romania",
  description:
    "Soleta was founded in 2011 by Cătălin Butmălai. Over 86 homes delivered across Europe. The story, the system and the values behind Romania's most internationally recognised timber home brand.",
};

const schema = breadcrumbSchema([
  { name: "Home",  href: "/" },
  { name: "About", href: "/about" },
]);

export default function AboutPage() {
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
          <span className="eyebrow mb-2 block">{aboutHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{aboutHero.heading}</h1>
          <p className="subtitle max-w-xl">{aboutHero.body}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="https://img.soletahomes.com/sh-about-hero-01-2038x771.webp"
          alt="Soleta — designed and built from conviction"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* ── 3. What Soleta is — framing block ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
            <p className="leading-relaxed text-[var(--color-text-secondary)]">{aboutFraming.left}</p>
            <p className="leading-relaxed text-[var(--color-text-secondary)] md:border-l md:border-[var(--color-border-light)] md:pl-16">{aboutFraming.right}</p>
          </div>
        </div>
      </section>

      {/* ── 4. The Soleta Story ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-10 block">The Soleta Story</span>
          <div className="flex flex-col gap-14">
            {aboutStorySections.map((section, i) => (
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

      {/* ── 5. What Soleta stands for — ValuesGrid ── */}
      <div className="border-b border-[var(--color-border-light)]">
        <ValuesGrid
          eyebrow="What Soleta stands for"
          items={aboutValues}
          columns={3}
          theme="light"
        />
      </div>

      {/* ── 6. Recognition / proof layer ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">Record</span>
            <div>
              <h2 className="mb-6" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>What makes Soleta different</h2>
              <p className="mb-8 leading-relaxed text-[var(--color-text-secondary)]">{aboutRecognition.intro}</p>
              <ul className="flex flex-col gap-4">
                {aboutRecognition.points.map((point) => (
                  <li key={point} className="flex items-start gap-4 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0">
                    <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Timeline ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-10 block">History</span>
          <div className="flex flex-col gap-px bg-[var(--color-border-light)]">
            {companyTimeline.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-[80px_1fr] gap-8 bg-[var(--color-bg)] p-8 md:grid-cols-[120px_200px_1fr]"
              >
                <span className="font-heading text-[1.5rem] text-[var(--color-brand)]">
                  {item.year}
                </span>
                <span className="font-ui text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text)] md:pt-1">
                  {item.event}
                </span>
                <p className="col-span-2 text-sm leading-relaxed text-[var(--color-text-secondary)] md:col-span-1">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Founder editorial block ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow py-14 lg:py-20">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] md:gap-14">
            <div
              className="relative w-full shrink-0"
              style={{ height: "clamp(240px, 22vw, 320px)" }}
            >
              <Image
                src="/images/Catalin Butmalai.jpg"
                alt="Cătălin Butmălai — Founder & Design Director, Soleta"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 240px"
              />
            </div>
            <div className="flex flex-col justify-center gap-6">
              <span className="eyebrow block">{aboutSupportBlock.eyebrow}</span>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">{aboutSupportBlock.body}</p>
              <blockquote className="mt-2 border-l-2 border-[var(--color-brand)] pl-6">
                <p className="font-heading text-[1.125rem] italic leading-relaxed text-[var(--color-text)]">
                  "I drew the first Soleta in 2011. Everything since then has been an attempt to make the next one better."
                </p>
                <footer className="mt-3 font-ui text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  — Cătălin Butmălai, Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CTA ── */}
      <CtaBand
        eyebrow="Next step"
        heading="Begin your Soleta project"
        body="The first conversation is free and carries no obligation. Tell us about your site and your vision."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "View Built Projects", href: "/built-projects" }}
        theme="dark"
      />
    </>
  );
}
