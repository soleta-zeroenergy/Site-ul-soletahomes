import type { Metadata } from "next";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";
import {
  pressHero,
  pressFraming,
  pressCoverage,
  pressKit,
  pressSupportBlock,
} from "@/lib/content/press";

export const metadata: Metadata = {
  ...withCanonical("/press"),
  title: "Press & Media | Soleta in the Press",
  description:
    "Soleta has been featured by The Guardian, Inhabitat, Daily News, HomeAdore and international architecture publications across Europe and North America since 2013.",
};

const schema = breadcrumbSchema([
  { name: "Home",         href: "/" },
  { name: "Press & Media", href: "/press" },
]);

export default function PressPage() {
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
          <span className="eyebrow mb-2 block">{pressHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl">{pressHero.heading}</h1>
          <p className="subtitle max-w-xl">{pressHero.body}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="/images/Signature800x533.webp"
          alt="Soleta Signature — featured in international architecture press"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* ── 3. Context framing ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">Context</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">{pressFraming.body}</p>
          </div>
        </div>
      </section>

      {/* ── 4. Coverage grid ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-10 block">As featured in</span>
          <div className="flex flex-col gap-px bg-[var(--color-border-light)]">
            {pressCoverage.map((item) => (
              <a
                key={item.publication}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 gap-4 bg-[var(--soleta-cream)] p-8 transition-colors hover:bg-[var(--color-bg)] md:grid-cols-[180px_1fr_auto]"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-heading text-[1.125rem] leading-tight text-[var(--color-text)]">
                    {item.publication}
                  </span>
                  <span className="font-ui text-[0.625rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    {item.country} · {item.year}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-ui text-[0.75rem] font-medium text-[var(--color-text)]">
                    {item.title}
                  </p>
                  <p className="text-sm italic text-[var(--color-text-muted)]">
                    "{item.excerpt}"
                  </p>
                </div>
                <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform group-hover:translate-x-1 inline-block self-center whitespace-nowrap">
                  Read →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Press resources ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <span className="eyebrow mb-4 block">Press resources</span>
              <h2 className="mb-6" style={{ fontSize: "1.375rem", lineHeight: 1.25 }}>{pressKit.heading}</h2>
              <p className="mb-8 leading-relaxed text-[var(--color-text-secondary)]">
                {pressKit.body}
              </p>
              <a
                href={`mailto:${pressKit.contact}`}
                className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] hover:opacity-70 transition-opacity"
              >
                {pressKit.contact}
              </a>
            </div>
            <div>
              <span className="eyebrow mb-6 block">What&apos;s included</span>
              <ul className="flex flex-col gap-4">
                {pressKit.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0"
                  >
                    <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
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
            <span className="eyebrow block">{pressSupportBlock.eyebrow}</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">{pressSupportBlock.body}</p>
          </div>
          <div
            className="relative w-full"
            style={{ minHeight: "clamp(300px, 36vw, 520px)" }}
          >
            <Image
              src="/images/hero.webp"
              alt="Soleta — available for interview, site visits and technical briefings"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 7. CTA ── */}
      <CtaBand
        eyebrow="Press contact"
        heading="Working on a story?"
        body="We are available for interview, site visits and technical briefings. Contact the press team directly."
        primaryCta={{ label: "Contact the Press Team", href: "mailto:press@soletahomes.com" }}
        secondaryCta={{ label: "About Soleta", href: "/about" }}
        theme="dark"
      />
    </>
  );
}
