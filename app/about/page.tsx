import type { Metadata } from "next";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";
import {
  aboutHero,
  founderStory,
  companyTimeline,
  companyNumbers,
} from "@/lib/content/about";

export const metadata: Metadata = {
  ...withCanonical("/about"),
  title: "About Soleta | Founded 2013 | Timber Homes Romania",
  description:
    "Soleta was founded in 2013 by Cătălin Butmălai. 86+ homes built across Europe. The story behind Romania's most internationally recognised timber home brand.",
};

const aboutCta = {
  eyebrow: "Next step",
  heading: "Begin your Soleta project",
  body: "The first conversation is free. Tell us about your site and your vision.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View Built Projects", href: "/built-projects" },
  theme: "dark",
};

export default function AboutPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">{aboutHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{aboutHero.heading}</h1>
          <p className="subtitle max-w-xl">{aboutHero.body}</p>
        </div>
      </section>

      {/* ── 2. Numbers ── */}
      <section
        className="section-sm border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {companyNumbers.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-heading text-[2rem] font-normal leading-none text-[var(--soleta-ink)]">
                  {stat.value}
                </dt>
                <dd className="mt-2 font-ui text-[0.625rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 3. Founder story ── */}
      <section className="section" style={{ backgroundColor: "var(--soleta-cream)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[380px_1fr]">

            {/* Founder card */}
            <div className="flex flex-col gap-6">
              <div
                className="aspect-[3/4] w-full bg-[var(--color-surface)]"
                aria-hidden="true"
              />
              <div>
                <p className="font-heading text-[1.375rem]">{founderStory.heading}</p>
                <p className="font-ui text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--color-brand)]">
                  {founderStory.role}
                </p>
              </div>
            </div>

            {/* Story text */}
            <div className="flex flex-col justify-center gap-6">
              <span className="eyebrow block">{founderStory.eyebrow}</span>
              {founderStory.paragraphs.map((para, i) => (
                <p key={i} className="leading-relaxed text-[var(--color-text-secondary)]">
                  {para}
                </p>
              ))}
              <blockquote className="mt-4 border-l-2 border-[var(--color-brand)] pl-6">
                <p className="font-heading text-[1.25rem] italic leading-relaxed text-[var(--color-text)]">
                  "{founderStory.quote}"
                </p>
                <footer className="mt-3 font-ui text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  — {founderStory.quoteAuthor}
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Timeline ── */}
      <section
        className="section border-t border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-4 block">History</span>
          <h2 className="mb-12 text-[2rem]">From prototype to platform</h2>
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

      <CtaBand {...aboutCta} />
    </>
  );
}
