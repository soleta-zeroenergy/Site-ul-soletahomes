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
        style={{ aspectRatio: "3000 / 975" }}
      >
        <Image
          src="https://img.soletahomes.com/hero_process_services_3000x975.webp"
          alt="Soleta — one team, one process, start to finish"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
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

      {/* ── 3b. Editorial image A — design / planning ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "1536 / 1025" }}
          >
            <Image
              src="https://img.soletahomes.com/process-design-planning-table-1536x1025.webp"
              alt="Soleta design planning table with architectural drawings"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 768px"
            />
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

      {/* ── 5. Editorial image B + text — factory preparation ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          {/* Image B — 1537×1025, full image visible, no crop */}
          <div
            className="relative w-full overflow-hidden mb-10"
            style={{ aspectRatio: "1537 / 1025" }}
          >
            <Image
              src="https://img.soletahomes.com/1-process-factory-to-site-1537x1025.webp"
              alt="Soleta factory to site timber preparation"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 768px"
            />
          </div>
          {/* Text */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="eyebrow md:pt-1">Built once in the factory, once on your site</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              Every structural element is cut, drilled and finished under controlled conditions before it reaches your site. When the truck arrives, the frame goes up in 3 to 10 days. Quality comes from preparation, not from working faster on site.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5b. Editorial image C — site assembly / delivery sequence ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "1537 / 1025" }}
          >
            <Image
              src="https://img.soletahomes.com/2-process-factory-to-site-1537x1025.webp"
              alt="Soleta labelled timber elements prepared for site assembly"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 768px"
            />
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
                Foundation type and cost depend on ground conditions assessed at your specific plot. Building-permit requirements, the required documents, timelines, fees, and similar items, vary significantly by country, region, and municipality. Where local planning professionals are required, we provide our support and experience, but local legislation, fees, and timelines are outside our direct control. We clarify what is required and what is included before the engineering stage begins.
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
          body="These services sit alongside the five-stage process. Some are included in certain project types; others can be contracted separately. We confirm what applies to your project during the Dream stage."
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
          <p className="mt-10 text-sm">
            <Link
              href="/process/planning-budget"
              className="text-[var(--color-brand)] hover:opacity-70 transition-opacity"
            >
              For a fuller explanation, see Planning &amp; Budget.
            </Link>
          </p>
          <p className="mt-3 text-sm">
            <Link
              href="/process/international-delivery"
              className="text-[var(--color-brand)] hover:opacity-70 transition-opacity"
            >
              Building outside your home country? See International Delivery.
            </Link>
          </p>
        </div>
      </section>

      {/* ── 9. Editorial image D + text — handover / completed home ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          {/* Image D — 1537×1025, full image visible, no crop */}
          <div
            className="relative w-full overflow-hidden mb-10"
            style={{ aspectRatio: "1537 / 1025" }}
          >
            <Image
              src="https://img.soletahomes.com/process-handover-completed-home-1537x1025.webp"
              alt="Completed Soleta home at handover"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 768px"
            />
          </div>
          {/* Text */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="eyebrow md:pt-1">Handover is not the end</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              At handover you receive full technical documentation, system manuals, and your warranty pack. Our aftercare programme covers annual inspections, maintenance support, and warranty management — because a home that performs in year one should still perform in year twenty.
            </p>
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
          Timelines are indicative and reflect typical European conditions. Actual durations depend on project complexity, authority timelines, site access, and client review cycles. We confirm the project-specific schedule during the engineering stage.
        </p>
      </div>

      {/* ── 10b. SoletaHousePlans contextual link ── */}
      <div
        className="border-b border-[var(--color-border-light)] px-5 py-6 sm:px-8 lg:px-12"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <p className="font-ui text-[0.8125rem] text-[var(--color-text-secondary)] max-w-2xl">
          For a model-based EasyKit route, with a plans-only option, visit{" "}
          <a
            href="https://soletahouseplans.com/easykit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand)] underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            SoletaHousePlans ↗
          </a>
          .
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
