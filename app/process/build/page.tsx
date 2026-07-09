import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/process/build"),
  title: "Build | Process & Services | Soleta",
  description:
    "Factory manufacturing and on-site assembly. Every structural element is produced under controlled conditions, loaded in assembly order, and erected on your site by our team.",
};

const step     = processSteps[3];
const prevStep = processSteps[2];
const nextStep = processSteps[4];

const schema = breadcrumbSchema([
  { name: "Home",               href: "/" },
  { name: "Process & Services", href: "/process" },
  { name: step.label,           href: step.href },
]);

export default function BuildPage() {
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
            ← Process &amp; Services
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
          src="https://img.soletahomes.com/hero_build_3000x975.webp"
          alt="Soleta — from factory to site"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* ── 3. What happens in this stage ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="flex flex-col gap-14">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">01</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Controlled production, not site improvisation</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Manufacturing begins only after engineering approval. Every structural element is cut, drilled, routed, and finished in our production facility under controlled indoor conditions. Factory production eliminates the two major sources of quality failure on traditional sites: weather and inconsistent execution. Every element is produced by the same team, on the same machines, to the same tolerances.
                </p>
              </div>
            </div>

            {/* Image A — 1533×1025, after "Controlled production, not site improvisation" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1533 / 1025" }}
            >
              <Image
                src="https://img.soletahomes.com/build-controlled-production-1533x1025.png"
                alt="Soleta controlled timber production"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">02</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Loaded in sequence, assembled in order</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Elements are labelled, protected, and loaded onto transport vehicles in assembly sequence. When the truck arrives on your site, there is no improvisation or wasted time. The assembly team follows a clear sequence derived directly from the manufacturing drawings. The speed you see on site is the consequence of preparation done in the factory — not shortcuts taken during erection.
                </p>
              </div>
            </div>

            {/* Image B — 1537×1769 (tall/vertical), after "Loaded in sequence, assembled in order" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1537 / 1769" }}
            >
              <Image
                src="https://img.soletahomes.com/build-loaded-in-sequence-1537x1769.PNG"
                alt="Soleta timber elements loaded in sequence for delivery"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">03</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Indicative on-site timeline</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  The structural frame of a Classic or Signature model is typically erected in 3 to 10 working days. The complete weatherproof envelope — structure, insulation, cladding, windows, and external doors — is achieved within 3 to 10 weeks from the start of assembly, weather permitting. Internal works begin once the envelope is closed. The total duration of the Build stage, factory and site combined, is typically 6 to 13 weeks for a standard project.
                </p>
              </div>
            </div>

            {/* Image C — 1537×862, after "Indicative on-site timeline" (site delivery / assembly sequence) */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1537 / 862" }}
            >
              <Image
                src="https://img.soletahomes.com/build-loaded-in-sequence-1537x862.webp"
                alt="Soleta factory-to-site delivery sequence"
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

      {/* ── 5. What this stage depends on ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">Note</span>
            <div>
              <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>What site readiness means in practice</h2>
              <p className="leading-relaxed text-[var(--color-text-secondary)]">
                The foundation must be complete and cured before the Build stage begins. Foundation type and construction timeline depend on the conditions of your specific site and are defined separately during the engineering stage. Access for a crane, if needed, and for a heavy truck must be confirmed in advance. We review all site-readiness requirements with you before the Build stage begins so there are no surprises when the truck arrives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Weatherproof envelope — image D + text ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          {/* Image D — 1537×1025, full image visible, no crop */}
          <div
            className="relative w-full overflow-hidden mb-10"
            style={{ aspectRatio: "1537 / 1025" }}
          >
            <Image
              src="https://img.soletahomes.com/build-weatherproof-envelope-complete-1537x1025.PNG"
              alt="Soleta weatherproof envelope complete during build"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 768px"
            />
          </div>
          {/* Text */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="eyebrow md:pt-1">Factory precision, visible on site</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              Because every element is manufactured to CNC tolerances, the assembly process is unusually clean and quiet. What arrives on site fits. That predictability is not accidental — it is the direct consequence of resolving every dimension in the factory before transport begins.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. Navigation ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-10 lg:py-12"
        style={{ backgroundColor: "var(--color-bg)" }}
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
        heading="Final finishes and handover"
        body="Once the envelope is complete, internal works begin. Turnkey Delivery takes the home from structure to move-in-ready."
        primaryCta={{ label: nextStep.label + " →", href: nextStep.href }}
        secondaryCta={{ label: "Back to Process & Services", href: "/process" }}
        theme="dark"
      />
    </>
  );
}
