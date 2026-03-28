import type { Metadata } from "next";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  pressHero,
  pressCoverage,
  pressKit,
} from "@/lib/content/press";

export const metadata: Metadata = {
  ...withCanonical("/press"),
  title: "Press & Media | Soleta in the News",
  description:
    "Soleta has been covered by The Guardian, Inhabitat, Daily News, HomeAdore and dozens of international architecture publications since 2013.",
};

const pressCta = {
  eyebrow: "Press contact",
  heading: "Working on a story?",
  body: "We are happy to provide images, interviews and technical information for editorial coverage.",
  primaryCta: { label: "Contact the Press Team", href: "mailto:press@soletahomes.com" },
  secondaryCta: { label: "About Soleta", href: "/about" },
  theme: "dark",
};

export default function PressPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">{pressHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl">{pressHero.heading}</h1>
          <p className="subtitle max-w-xl">{pressHero.body}</p>
        </div>
      </section>

      {/* ── 2. Coverage grid ── */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <span className="eyebrow mb-4 block">Coverage</span>
          <h2 className="mb-12 text-[2rem]">As featured in</h2>
          <div className="flex flex-col gap-px bg-[var(--color-border-light)]">
            {pressCoverage.map((item) => (
              <a
                key={item.publication}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 gap-4 bg-[var(--color-bg)] p-8 transition-colors hover:bg-[var(--soleta-cream)] md:grid-cols-[180px_1fr_auto]"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-ui text-[0.75rem] font-medium text-[var(--color-text)]">
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
                <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform group-hover:translate-x-1 inline-block self-center">
                  Read →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Press kit ── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <span className="eyebrow mb-4 block">Press kit</span>
              <h2 className="mb-6 text-[2rem]">{pressKit.heading}</h2>
              <p className="mb-8 leading-relaxed text-[var(--color-text-secondary)]">
                {pressKit.body}
              </p>
              <a
                href={`mailto:${pressKit.contact}`}
                className="btn-primary"
              >
                {pressKit.contact}
              </a>
            </div>
            <div>
              <span className="eyebrow mb-6 block">What&apos;s included</span>
              <ul className="flex flex-col gap-3">
                {pressKit.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
                  >
                    <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand {...pressCta} />
    </>
  );
}
