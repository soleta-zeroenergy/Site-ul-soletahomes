import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/process/engineering"),
  title: "Engineering | Process & Services | Soleta",
  description:
    "Structural calculations, energy model, manufacturing drawings, and support for permit documentation. Every technical decision must be resolved before a single element is produced.",
};

const step     = processSteps[2];
const prevStep = processSteps[1];
const nextStep = processSteps[3];

const schema = breadcrumbSchema([
  { name: "Home",               href: "/" },
  { name: "Process & Services", href: "/process" },
  { name: step.label,           href: step.href },
]);

export default function EngineeringPage() {
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
          <span className="eyebrow mb-2 block">{step.label}</span>
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
          src="https://img.soletahomes.com/hero_engineering_3000x975.webp"
          alt="Soleta Classic — structural precision from engineering to production"
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
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Precision protects the design</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  The approved architectural drawings are passed to our structural engineering team. Every connection, every joint, and every load path are calculated, not assumed. This is the stage where the design is tested against physical reality. A connection detail that looks clean on a drawing must also be structurally correct, thermally continuous, and manufacturable within precise tolerances. Engineering resolves all three at once.
                </p>
              </div>
            </div>

            {/* Image A — 1537×868, after "Precision protects the design" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1537 / 868" }}
            >
              <Image
                src="https://img.soletahomes.com/engineering-structural-connection-detail-1537x868.webp"
                alt="Soleta structural connection engineering detail"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">02</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Energy model and thermal analysis</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  In parallel with structural engineering, our energy team produces a complete dynamic energy model of the house — calculating heating and cooling demand, solar gain, thermal-bridge analysis, and the performance of any renewable-energy systems. The model is site-specific: it uses the real latitude, real orientation, and real window configuration of your house, not a generic approximation. This becomes the basis for energy-performance certification and for sizing the ZeroEnergy systems, if included.
                </p>
              </div>
            </div>

            {/* Image B — 1537×1025, after "Energy model and thermal analysis" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1537 / 1025" }}
            >
              <Image
                src="https://img.soletahomes.com/engineering-energy-model-thermal-analysis-1537x1025.webp"
                alt="Soleta energy model and thermal analysis for a timber home"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">03</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>3D manufacturing drawings, not just construction drawings</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  The output of the engineering stage is a complete set of manufacturing drawings — the files that go directly to our CNC machines. These are not construction drawings in the traditional sense. Every element is specified precisely: dimensions, connection points, insulation pockets, window openings, and service penetrations. Nothing is left to interpretation on site. When the machine runs, the result is identical to what was designed.
                </p>
              </div>
            </div>

            {/* Image C — 1537×723, after "3D manufacturing drawings" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1537 / 723" }}
            >
              <Image
                src="https://img.soletahomes.com/engineering-manufacturing-drawings-cnc-1537x723.webp"
                alt="Soleta manufacturing drawings prepared for CNC production"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
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

      {/* ── 5. This is the stage most builders rush ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="eyebrow md:pt-1">Timing</span>
            <div>
              <p className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] mb-4">This is the stage most builders rush</p>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                Engineering takes 4 to 8 weeks, depending on project complexity and whether permit documentation is required. That range does not indicate inefficiency — it reflects the difference between a straightforward standard project and a custom design with complex permitting requirements. We do not compress this stage to meet an arbitrary schedule, because errors discovered during manufacturing are significantly more expensive than errors resolved during engineering.
              </p>
            </div>
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
            ← {prevStep.label}
          </Link>
          <Link
            href={nextStep.href}
            className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] hover:opacity-70 transition-opacity"
          >
            Next: {nextStep.label} →
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow="Next step"
        heading="From drawings to production"
        body="Once engineering is complete and approved, manufacturing begins. Your home is built once in the factory — precisely — before it arrives on your site."
        primaryCta={{ label: nextStep.label + " →", href: nextStep.href }}
        secondaryCta={{ label: "Back to Process overview", href: "/process" }}
        theme="dark"
      />
    </>
  );
}
