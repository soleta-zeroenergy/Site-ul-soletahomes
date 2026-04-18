import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import {
  processHero,
  processWhy,
  processSteps,
  processServices,
  processScope,
  processExpectations,
  processFaq,
  processCta,
} from "@/lib/content/process-services";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ValuesGrid } from "@/components/sections/ValuesGrid";
import { BadgeRow } from "@/components/sections/BadgeRow";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/process"),
  title: "Process & Services | How We Work | Soleta",
  description:
    "Five stages from first conversation to handover — Dream, Design & Planning, Engineering, Build and Turnkey Delivery. One team, one process, start to finish.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Home",                href: "/" },
  { name: "Process & Services",  href: "/process" },
]);

/* Map processSteps → ProcessTimeline stages */
const timelineStages = processSteps.map((step) => ({
  eyebrow: step.label,
  title:   step.heading,
  body:    step.description,
  details: step.deliverables,
}));

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(processFaq)) }}
      />

      {/* ── 1. Page header ── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">{processHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl whitespace-pre-line">{processHero.heading}</h1>
          <p className="subtitle max-w-xl">{processHero.body}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="/images/hero.webp"
          alt="Soleta — one team, one process, start to finish"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* ── 3. Why continuity matters ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-start">
            <div>
              <span className="eyebrow mb-4 block">Why it matters</span>
              <h2 className="mb-0" style={{ fontSize: "clamp(1.375rem, 2vw, 1.75rem)", lineHeight: 1.2 }}>
                {processWhy.heading}
              </h2>
            </div>
            <p className="leading-relaxed text-[var(--color-text-secondary)] lg:pt-14">
              {processWhy.body}
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. The five stages (ProcessTimeline) ── */}
      {/* ProcessTimeline renders its own <section> with internal spacing */}
      <div className="border-b border-[var(--color-border-light)]">
        <ProcessTimeline
          eyebrow="The five stages"
          heading="From first conversation to handover"
          stages={timelineStages}
          theme="warm"
        />
      </div>

      {/* ── 5. Image support block 1 — construction quality ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          {/* Image side */}
          <div
            className="relative w-full border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r"
            style={{ minHeight: "clamp(260px, 32vw, 480px)" }}
          >
            <Image
              src="/images/Signature800x533.webp"
              alt="Soleta Signature — precision manufacturing and on-site assembly"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Text side */}
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16">
            <span className="eyebrow block">Built once in the factory, once on your site</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              Every structural element is cut, drilled and finished under controlled conditions before it reaches your plot. When the truck arrives, the frame goes up in 3 to 5 days. The quality comes from preparation — not from working faster on site.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. What depends on site, country and planning ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span
              className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1"
              aria-hidden="true"
            >
              Note
            </span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                What depends on site, country and planning
              </h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                Foundation type and cost depend on ground conditions assessed at your specific plot. Building permit requirements — documents required, timeline, fees — vary significantly by country, region and municipality. Where local planning professionals are required, we coordinate with trusted partners, but local fees and timelines are outside our direct control. We clarify what is required and what is included before the engineering stage begins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Services around the process (ValuesGrid) ── */}
      {/* ValuesGrid renders its own <section> */}
      <div className="border-b border-[var(--color-border-light)]">
        <ValuesGrid
          eyebrow="Services"
          heading="Around the process"
          body="These services sit alongside the five-stage process. Some are included in specific project scopes; others are separately bookable. We confirm what applies to your project at the Dream stage."
          items={processServices}
          columns={3}
          theme="light"
        />
      </div>

      {/* ── 8. Included vs separately scoped ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-10 block">Scope clarity</span>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Included */}
            <div>
              <h2
                className="mb-6 border-b border-[var(--color-border-light)] pb-4"
                style={{ fontSize: "1.0625rem", lineHeight: 1.3 }}
              >
                {processScope.included.heading}
              </h2>
              <ul className="flex flex-col gap-3">
                {processScope.included.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Separately scoped */}
            <div>
              <h2
                className="mb-6 border-b border-[var(--color-border-light)] pb-4"
                style={{ fontSize: "1.0625rem", lineHeight: 1.3 }}
              >
                {processScope.separate.heading}
              </h2>
              <ul className="flex flex-col gap-3">
                {processScope.separate.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-text-muted)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Image support block 2 — handover quality ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          {/* Text side */}
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16 border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r">
            <span className="eyebrow block">Handover is not the end</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              At handover you receive full technical documentation, system manuals and your warranty pack. Our aftercare programme covers annual inspections, maintenance support and warranty management — because a home that performs at year one should perform at year twenty.
            </p>
          </div>
          {/* Image side */}
          <div
            className="relative w-full"
            style={{ minHeight: "clamp(260px, 30vw, 440px)" }}
          >
            <Image
              src="/images/Classic800x533.webp"
              alt="Soleta Classic — completed home at handover"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 10. Indicative timeline (BadgeRow) ── */}
      {/* BadgeRow renders its own <section> */}
      <div className="border-b border-[var(--color-border-light)]">
        <BadgeRow
          eyebrow="Indicative timeline"
          heading="Typical phase durations"
          items={processExpectations}
          theme="warm"
        />
      </div>
      {/* Caveat note below badge row */}
      <div
        className="border-b border-[var(--color-border-light)] px-5 py-6 sm:px-8 lg:px-12"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <p className="font-ui text-[0.6875rem] text-[var(--color-text-muted)] max-w-2xl">
          Timelines are indicative and reflect typical Central European conditions. Actual durations depend on project complexity, planning authority timelines, site access and client review cycles. We confirm project-specific timelines at the engineering stage.
        </p>
      </div>

      {/* ── 11. FAQ ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">Frequently asked</span>
          <h2 className="mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Questions about the process
          </h2>
          <FaqAccordion items={processFaq} />
        </div>
      </section>

      {/* ── 12. CTA ── */}
      <CtaBand {...processCta} />
    </>
  );
}
