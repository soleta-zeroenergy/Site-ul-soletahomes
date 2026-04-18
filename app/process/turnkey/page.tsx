import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/process/turnkey"),
  title: "Turnkey Delivery — Stage 5 | Process & Services | Soleta",
  description:
    "Final finishes, systems commissioning and structured handover. What turnkey includes, what the documentation pack contains, and what happens after you move in.",
};

const step     = processSteps[4];
const prevStep = processSteps[3];

const schema = breadcrumbSchema([
  { name: "Home",               href: "/" },
  { name: "Process & Services", href: "/process" },
  { name: step.label,           href: step.href },
]);

export default function TurnkeyPage() {
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
        style={{ height: "clamp(260px, 36vw, 520px)" }}
      >
        <Image
          src="/images/Classic800x533.webp"
          alt="Soleta Classic — completed and ready for handover"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
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
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>What turnkey actually means</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Turnkey at Soleta means a home that is finished, tested and documented — ready to move into. It includes completed internal finishes, installed and commissioned kitchen and bathrooms, completed electrical and plumbing installations, and all systems operational. What it does not include — unless separately scoped — are items such as interior furniture, soft furnishings, landscaping and external works beyond the immediate building footprint. We confirm the exact scope in writing before the build stage begins.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">02</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Systems commissioning</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Heating and ventilation systems are commissioned, tested and adjusted before handover. ZeroEnergy systems — if installed — are run for a monitored period before the handover date to confirm they are operating within design parameters. The energy management system is configured for your household, and you are shown how to read it, adjust it and interpret alerts. Everything that runs is verified before you take the keys.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">03</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>A structured handover, not a rushed key exchange</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Handover is a structured walkthrough — typically 3 to 4 hours, with our project manager and the relevant technical lead on site. We go through every room, every system and every detail. Snagging items identified during the walkthrough are recorded, prioritised and resolved before or shortly after the handover date. You do not receive the documentation pack until the walkthrough is complete and both parties are satisfied.
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
          <span className="eyebrow mb-6 block">What you receive at handover</span>
          <ul className="flex flex-col gap-4">
            {step.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0">
                <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item}</p>
              </li>
            ))}
            {/* Additional documentation items not in the brief deliverable */}
            {[
              "As-built drawings — structural, electrical, plumbing and energy",
              "Material certificates for all structural and insulation elements",
              "Maintenance schedule — what to check, when and how",
              "System operation manuals and emergency contacts",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0">
                <span className="mt-[6px] h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-text-muted)]" />
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
          <div
            className="relative w-full border-b border-[var(--color-border-light)] lg:border-b-0 lg:border-r"
            style={{ minHeight: "clamp(300px, 36vw, 520px)" }}
          >
            <Image
              src="/images/WhySoleta900x1200.webp"
              alt="Soleta — handover and the aftercare programme"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:px-14 lg:py-16">
            <span className="eyebrow block">Handover is not the end of the relationship</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              Our aftercare programme covers annual inspection visits, maintenance guidance, warranty management and technical support. A Soleta home is designed to perform for 80 years or more — we take a direct interest in whether it does. Aftercare is available as a separately booked programme after handover and is particularly relevant for clients in countries where we do not have a permanent local presence.
            </p>
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
            href="/process"
            className="eyebrow opacity-60 hover:opacity-100 transition-opacity no-underline"
          >
            Back to Process overview →
          </Link>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to begin"
        heading="Start your Soleta project"
        body="The first conversation is free and carries no obligation. Tell us about your site and your vision — we will tell you what is possible."
        primaryCta={{ label: "Request a Private Offer", href: "/request-private-offer" }}
        secondaryCta={{ label: "Back to Process overview", href: "/process" }}
        theme="dark"
      />
    </>
  );
}
