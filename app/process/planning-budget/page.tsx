import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import {
  planningBudgetHeader,
  noFixedPriceList,
  budgetFactors,
  budgetStages,
  whatSoletaControls,
  whatRemainsLocal,
  whenFormalOfferPossible,
  budgetFaq,
  planningBudgetCta,
} from "@/lib/content/process-planning-budget";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/process/planning-budget"),
  title: "Planning & Budget | Process & Services | Soleta",
  description:
    "How budget clarity is built into a Soleta project — no fixed online price list, indicative clarity first, and a formal offer only once design, engineering, scope and site information are sufficient.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Home",               href: "/" },
  { name: "Process & Services", href: "/process" },
  { name: planningBudgetHeader.label, href: "/process/planning-budget" },
]);

export default function PlanningBudgetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(budgetFaq)) }}
      />

      {/* ── 1. Page header ── */}
      <section
        className="border-b border-[var(--color-border-light)] px-0 pt-12 pb-10 lg:pt-16 lg:pb-14"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link
            href="/process"
            className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Process & Services
          </Link>
          <span className="eyebrow mb-2 block">{planningBudgetHeader.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl">{planningBudgetHeader.heading}</h1>
          <p className="subtitle max-w-xl">{planningBudgetHeader.subtitle}</p>
        </div>
      </section>

      {/* ── 2. Why there is no fixed online price list ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {noFixedPriceList.label}
            </span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {noFixedPriceList.heading}
              </h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                {noFixedPriceList.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. What shapes the budget ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {budgetFactors.label}
            </span>
            <div>
              <h2 className="mb-8" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {budgetFactors.heading}
              </h2>
              <ul className="flex flex-col gap-6">
                {budgetFactors.items.map((item) => (
                  <li key={item.title} className="border-b border-[var(--color-border-light)] pb-6 last:border-0 last:pb-0">
                    <p className="mb-1.5 font-ui text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text)]">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. How clarity develops stage by stage ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {budgetStages.label}
            </span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {budgetStages.heading}
              </h2>
              <p className="mb-8 leading-relaxed text-[var(--color-text-secondary)]">
                {budgetStages.intro}
              </p>
              <div className="flex flex-col gap-0">
                {budgetStages.stages.map((stage, i) => (
                  <div
                    key={stage.number}
                    className="grid grid-cols-[64px_1fr] gap-4 border-t border-[var(--color-border-light)] py-6 last:border-b last:border-[var(--color-border-light)]"
                  >
                    <span
                      aria-hidden="true"
                      className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]"
                    >
                      {stage.number}
                    </span>
                    <div>
                      <p
                        className="mb-1.5"
                        style={{ fontFamily: "var(--font-heading)", fontSize: "1.0625rem", lineHeight: 1.3 }}
                      >
                        {stage.title}
                      </p>
                      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                        {stage.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. What Soleta can control ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {whatSoletaControls.label}
            </span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {whatSoletaControls.heading}
              </h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                {whatSoletaControls.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. What remains local or project-dependent ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {whatRemainsLocal.label}
            </span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {whatRemainsLocal.heading}
              </h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                {whatRemainsLocal.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. When a formal offer becomes possible ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {whenFormalOfferPossible.label}
            </span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {whenFormalOfferPossible.heading}
              </h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                {whenFormalOfferPossible.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Budget FAQ ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">Frequently asked</span>
          <h2 className="mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            Budget FAQ
          </h2>
          <FaqAccordion items={budgetFaq} />
        </div>
      </section>

      {/* ── 9. Navigation + CTA ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-10 lg:py-12"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/process"
            className="eyebrow opacity-60 hover:opacity-100 transition-opacity no-underline"
          >
            ← Back to Process overview
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow={planningBudgetCta.eyebrow}
        heading={planningBudgetCta.heading}
        body={planningBudgetCta.body}
        primaryCta={planningBudgetCta.primaryCta}
        secondaryCta={planningBudgetCta.secondaryCta}
        theme="dark"
      />
    </>
  );
}
