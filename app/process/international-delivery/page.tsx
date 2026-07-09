import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import {
  internationalDeliveryHeader,
  canCoordinate,
  remainsLocal,
  deliveryModels,
  feasibilityFactors,
  internationalFaq,
  internationalDeliveryCta,
} from "@/lib/content/process-international-delivery";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/process/international-delivery"),
  title: "International Delivery | Process & Services | Soleta",
  description:
    "How Soleta works with international clients — what is usually coordinated directly, what remains local or project-dependent, and how delivery scope is confirmed during feasibility.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Home",               href: "/" },
  { name: "Process & Services", href: "/process" },
  { name: internationalDeliveryHeader.label, href: "/process/international-delivery" },
]);

export default function InternationalDeliveryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(internationalFaq)) }}
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
          <span className="eyebrow mb-2 block">{internationalDeliveryHeader.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl">{internationalDeliveryHeader.heading}</h1>
          <p className="subtitle max-w-xl">{internationalDeliveryHeader.subtitle}</p>
        </div>
      </section>

      {/* ── 2. What Soleta can usually coordinate ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {canCoordinate.label}
            </span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {canCoordinate.heading}
              </h2>
              <p className="mb-8 leading-relaxed text-[var(--color-text-secondary)]">
                {canCoordinate.intro}
              </p>
              <ul className="flex flex-col gap-6">
                {canCoordinate.items.map((item) => (
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

      {/* ── 3. What remains local or project-dependent ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {remainsLocal.label}
            </span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {remainsLocal.heading}
              </h2>
              <p className="mb-6 leading-relaxed text-[var(--color-text-secondary)]">
                {remainsLocal.intro}
              </p>
              <ul className="flex flex-col gap-3">
                {remainsLocal.items.map((item) => (
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

      {/* ── 4. Delivery models ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {deliveryModels.label}
            </span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {deliveryModels.heading}
              </h2>
              <p className="mb-8 leading-relaxed text-[var(--color-text-secondary)]">
                {deliveryModels.intro}
              </p>
              <div className="flex flex-col gap-0">
                {deliveryModels.items.map((item) => (
                  <div
                    key={item.title}
                    className="border-t border-[var(--color-border-light)] py-6 last:border-b last:border-[var(--color-border-light)]"
                  >
                    <p
                      className="mb-1.5"
                      style={{ fontFamily: "var(--font-heading)", fontSize: "1.0625rem", lineHeight: 1.3 }}
                    >
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. How international feasibility is assessed ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">
              {feasibilityFactors.label}
            </span>
            <div>
              <h2 className="mb-8" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>
                {feasibilityFactors.heading}
              </h2>
              <ul className="flex flex-col gap-6">
                {feasibilityFactors.items.map((item) => (
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
              <p className="mt-10 text-sm">
                <Link
                  href="/process/planning-budget"
                  className="text-[var(--color-brand)] hover:opacity-70 transition-opacity"
                >
                  For how budget clarity develops, see Planning &amp; Budget.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-4 block">Frequently asked</span>
          <h2 className="mb-10" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
            International delivery FAQ
          </h2>
          <FaqAccordion items={internationalFaq} />
        </div>
      </section>

      {/* ── 7. Navigation + CTA ── */}
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
          <Link
            href="/process/planning-budget"
            className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] hover:opacity-70 transition-opacity"
          >
            Planning & Budget →
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow={internationalDeliveryCta.eyebrow}
        heading={internationalDeliveryCta.heading}
        body={internationalDeliveryCta.body}
        primaryCta={internationalDeliveryCta.primaryCta}
        secondaryCta={internationalDeliveryCta.secondaryCta}
        theme="dark"
      />
    </>
  );
}
