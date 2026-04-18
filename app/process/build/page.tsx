import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/process/build"),
  title: "Build — Stage 4 | Process & Services | Soleta",
  description:
    "Factory manufacturing and on-site assembly. Every structural element produced under controlled conditions, loaded in assembly order, and erected on your site by our team.",
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
          <span className="eyebrow mb-2 block">{step.number} — {step.label}</span>
          <h1 className="mb-6 max-w-2xl">{step.heading}</h1>
          <p className="subtitle max-w-xl">{step.description}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="/images/Signature800x533.webp"
          alt="Soleta — from factory to site"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                  Manufacturing begins only after engineering sign-off — and, where required, after building permit approval. Every structural element is cut, drilled, routed and finished in our production facility under controlled indoor conditions. Factory production eliminates the two largest sources of quality failure on traditional building sites: weather and inconsistent craftsmanship. Every element is made by the same team, on the same machines, to the same tolerances.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">02</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Loaded in sequence, assembled in order</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Elements are labelled, wrapped and loaded onto transport vehicles in precise assembly sequence. When the truck arrives on your site, there is no sorting, no improvisation, no waiting. The assembly team follows a choreographed sequence derived directly from the manufacturing drawings. The speed you see on site is a consequence of the preparation done in the factory — not of shortcuts taken during erection.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">03</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Indicative on-site timeline</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  The structural frame of a Classic or Signature is typically erected in 3 to 5 working days. The complete weatherproof envelope — structure, insulation, cladding, windows and external doors — is achieved within 2 to 4 weeks from the start of assembly, weather permitting. Internal works begin once the envelope is closed. Total build-stage duration, factory and site combined, is typically 6 to 10 weeks for a standard project.
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
                The foundation must be complete and cured before manufacturing begins — or at minimum before transport is scheduled. Foundation type and construction timeline depend on ground conditions at your specific site and are separately scoped during the engineering stage. Access for a crane and a heavy-goods vehicle must be confirmed in advance. We review all site readiness requirements with you before the build stage begins so there are no surprises when the truck arrives.
              </p>
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
          <div
            className="relative w-full border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r"
            style={{ minHeight: "clamp(300px, 36vw, 520px)" }}
          >
            <Image
              src="/images/Classic800x533.webp"
              alt="Soleta Classic — weatherproof envelope achieved on site"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16">
            <span className="eyebrow block">Factory precision, visible on site</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              Because every element is manufactured to CNC tolerance, the assembly process is unusually quiet. There is no cutting on site, no adjustment, no rework. What arrives fits. That predictability is not incidental — it is the direct consequence of resolving every dimension in the factory, before transport begins.
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
        heading="Final finishes and handover"
        body="Once the envelope is complete, internal works begin. Turnkey Delivery takes the home from structure to move-in ready."
        primaryCta={{ label: nextStep.number + " " + nextStep.label + " →", href: nextStep.href }}
        secondaryCta={{ label: "Back to Process & Services", href: "/process" }}
        theme="dark"
      />
    </>
  );
}
