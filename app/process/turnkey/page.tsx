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
    "Final finishes, systems commissioning, and structured handover. What turnkey includes, what the documentation pack contains, and what happens after you move in.",
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
          src="https://img.soletahomes.com/hero_turnkey_delivery_3000x975.webp"
          alt="Soleta Classic — completed and ready for handover"
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
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>What turnkey actually means</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Turnkey at Soleta means a home that is finished, tested, and documented — ready to move into. It includes complete interior finishes, kitchen and bathrooms installed and commissioned, completed electrical and plumbing installations, and all systems operational. What it does not include — unless separately defined — are items such as interior furniture, textiles, landscaping, and external works beyond the immediate footprint of the building. We confirm the exact scope in writing before the Build stage begins.
                </p>
              </div>
            </div>

            {/* Image A — 1537×865, after "What turnkey actually means" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1537 / 865" }}
            >
              <Image
                src="https://img.soletahomes.com/turnkey-completed-interior-1537x865.webp"
                alt="Completed Soleta interior ready for handover"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">02</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>Systems commissioning</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Heating and ventilation systems are commissioned, tested, and adjusted before handover. ZeroEnergy systems — if installed — operate for a monitored period before the handover date to confirm that they perform within the design parameters. The energy-management system is configured for your household, and we show you how to read it, adjust it, and interpret alerts. Everything that operates is verified before you receive the keys.
                </p>
              </div>
            </div>

            {/* Image B — 1537×1025, after "Systems commissioning" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1537 / 1025" }}
            >
              <Image
                src="https://img.soletahomes.com/turnkey-systems-commissioning-1537x1025.webp"
                alt="Soleta systems commissioning before handover"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
              <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] md:pt-1" aria-hidden="true">03</span>
              <div>
                <h2 className="mb-4" style={{ fontSize: "1.1875rem", lineHeight: 1.3 }}>A structured handover, not a rushed key exchange</h2>
                <p className="leading-relaxed text-[var(--color-text-secondary)]">
                  Handover is a structured walkthrough — typically 3 to 4 hours, with our project manager and the relevant technical lead present on site. We go through every room, every system, and every detail. Snagging items identified during the walkthrough are recorded, prioritised, and resolved before or shortly after the handover date. You do not receive the documentation pack until the walkthrough is complete and both parties are satisfied.
                </p>
              </div>
            </div>

            {/* Image C — 1537×1023, after "A structured handover, not a rushed key exchange" */}
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "1537 / 1023" }}
            >
              <Image
                src="https://img.soletahomes.com/turnkey-handover-documentation-1537x1023.png"
                alt="Soleta handover documentation and home manuals"
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

      {/* ── 5. Aftercare ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[120px_1fr]">
            <span className="eyebrow md:pt-1">Handover is not the end of the relationship</span>
            <p className="leading-relaxed text-[var(--color-text-secondary)]">
              Our aftercare programme covers annual inspection visits, maintenance guidance, warranty management, and technical support. A Soleta home is designed to perform for 80 years or more — and we have a direct interest in making sure that happens. Aftercare is available as a separately contracted programme after handover and is particularly relevant for clients in countries where we do not have a permanent local presence.
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
        body="The first conversation is free and carries no obligation. Tell us about your site and your vision — and we will tell you what is possible."
        primaryCta={{ label: "Request a Private Consultation", href: "/request-private-offer" }}
        secondaryCta={{ label: "Back to Process overview", href: "/process" }}
        theme="dark"
      />
    </>
  );
}
