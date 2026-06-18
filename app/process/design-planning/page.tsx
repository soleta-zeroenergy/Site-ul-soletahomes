import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/process/design-planning"),
  title: "Design & Planning — Stage 2 | Process & Services | Soleta",
  description:
    "Turning your brief into a developed architectural proposal — plans, elevations, 3D visualisations, and material selections. Nothing is fixed until you approve it.",
};

const step     = processSteps[1];
const prevStep = processSteps[0];
const nextStep = processSteps[2];

const schema = breadcrumbSchema([
  { name: "Home",               href: "/" },
  { name: "Process & Services", href: "/process" },
  { name: step.label,           href: step.href },
]);

export default function DesignPlanningPage() {
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
            href="/process"
            className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
          >
            ← Process & Services
          </Link>
          <span className="eyebrow mb-2 block">{step.number} — {step.label}</span>
          <h1 className="mb-6 max-w-2xl">{step.heading}</h1>
          <p className="subtitle max-w-xl">{step.description}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ aspectRatio: "3000 / 975" }}
      >
        <Image
          src="https://img.soletahomes.com/hero_design_planning_3000x975.webp"
          alt="Soleta Signature — design taking shape from brief to proposal"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* ── 3. What happens ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="flex flex-col gap-14">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">01</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>From brief to developed proposal</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Our design team works from your signed project brief to develop a complete architectural proposal. This includes plans, elevations, sections through the main spaces, and a 3D visualisation of the exterior and the main interior volumes. Design is developed iteratively — typically two to three rounds of revision — before the final package is ready for approval.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">02</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Material selections you can see and even touch</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  If you visit us, material selections are presented as a physical sample board, insulation specifications, glazing systems, and exterior finish options. You see and touch the real materials before they are ordered, not only on a screen. Changes at this stage are simple. Changes at engineering stage cost more. Changes at manufacturing stage cost significantly more.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">03</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Design maturity before engineering begins</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Nothing moves to engineering until the design is approved and the final offer is signed. Engineering is expensive to repeat; design iteration is relatively inexpensive. We deliberately keep the design stage open until you are fully satisfied — because a design resolved before engineering is the only way to protect both budget and intent throughout the rest of the process.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. What you receive ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">What you receive</span>
          <ul className="flex flex-col gap-4">
            {step.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0">
                <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5. Supporting image split ── */}
      <section
        className="border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16 border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r">
            <span className="eyebrow block">Planning context</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              Building-permit requirements vary significantly between countries, regions, and individual municipalities. Where permit documentation is part of your project scope, local collaborators are required, and the design must be developed with the likely permit requirements in mind — setbacks, height limits, material restrictions, access conditions, and even the required format of project presentation. We do not guarantee planning outcomes, but we design with this awareness from the first sketch.
            </p>
          </div>
          <div
            className="relative w-full"
            style={{ minHeight: "clamp(260px, 30vw, 440px)" }}
          >
            <Image
              src="/images/hero.webp"
              alt="Soleta — planning-aware architectural design"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── 6. Navigation + CTA ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-10 lg:py-12"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow flex flex-wrap items-center justify-between gap-6">
          <Link
            href={prevStep.href}
            className="eyebrow opacity-60 hover:opacity-100 transition-opacity no-underline"
          >
            ← {prevStep.number} {prevStep.label}
          </Link>
          <Link
            href={nextStep.href}
            className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] hover:opacity-70 transition-opacity"
          >
            Next: {nextStep.number} {nextStep.label} →
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        heading="See how design becomes structure"
        body="Engineering resolves every technical question raised by the design — before a single element is manufactured."
        primaryCta={{ label: nextStep.number + " " + nextStep.label + " →", href: nextStep.href }}
        secondaryCta={{ label: "Back to Process overview", href: "/process" }}
        theme="dark"
      />
    </>
  );
}
