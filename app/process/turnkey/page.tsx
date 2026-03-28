import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/process/turnkey"),
  title: "Turnkey Delivery — Step 5 | Process | Soleta",
  description: "Final finishes, systems commissioning and handover. Keys in hand, full documentation, warranty pack and direct access to our aftercare team.",
};

const step = processSteps[4];
const prevStep = processSteps[3];

const cta = {
  eyebrow: "Ready to start",
  heading: "Begin your Soleta project",
  body: "The first conversation is free. Tell us about your site and your vision.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Explore the Process", href: "/process" },
  theme: "dark" as const,
};

export default function TurnkeyPage() {
  return (
    <>
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link href="/process" className="eyebrow mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            ← Process & Services
          </Link>
          <div className="mb-4 flex items-baseline gap-4">
            <span className="font-heading text-[3rem] leading-none text-[var(--color-brand)] opacity-20">{step.number}</span>
            <span className="eyebrow">{step.label}</span>
          </div>
          <h1 className="mb-6 max-w-2xl">{step.heading}</h1>
          <p className="subtitle max-w-xl">{step.description}</p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-8">
              <div>
                <span className="eyebrow mb-4 block">What happens at handover</span>
                <div className="flex flex-col gap-4 text-[var(--color-text-secondary)]">
                  <p className="leading-relaxed">The final weeks of a Soleta build are about precision and completeness. Internal finishes — floors, wall surfaces, ceilings — are completed. Kitchen and bathroom installations are finished and tested. Electrical and plumbing systems are commissioned and certified.</p>
                  <p className="leading-relaxed">ZeroEnergy systems — if installed — are commissioned, monitored for 7 days and handed over with full documentation. The energy management system is configured and you are shown how to use it. Alerts and monitoring access are set up on your smartphone.</p>
                  <p className="leading-relaxed">Handover is a structured walkthrough — typically 3 to 4 hours. We go through every room, every system and every detail. You receive the complete documentation pack: as-built drawings, material certificates, warranty documents, maintenance schedules and emergency contacts.</p>
                </div>
              </div>

              <div>
                <span className="eyebrow mb-4 block">Handover pack contents</span>
                <ul className="flex flex-col gap-3">
                  {[
                    "As-built drawings — structural, electrical, plumbing, energy",
                    "Material certificates — all structural and insulation elements",
                    "Warranty documents — structural, systems, appliances",
                    "Maintenance schedule — what to check, when and how",
                    "Energy system manual — operation, monitoring, optimisation",
                    "Aftercare contact — direct line to our team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="flex flex-col gap-8">
              <div className="border border-[var(--color-border-light)] p-8" style={{ backgroundColor: "var(--soleta-cream)" }}>
                <span className="eyebrow mb-6 block">Step summary</span>
                <dl className="flex flex-col gap-5">
                  <div className="border-b border-[var(--color-border-light)] pb-5">
                    <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-1">Duration</dt>
                    <dd className="font-ui text-sm text-[var(--color-text)]">{step.duration}</dd>
                  </div>
                  <div>
                    <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-3">What you receive</dt>
                    <dd>
                      <ul className="flex flex-col gap-2">
                        {step.deliverable.split(" · ").map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                            <span className="mt-1 h-[4px] w-[4px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="border border-[var(--color-border-light)] p-8" style={{ backgroundColor: "var(--soleta-cream)" }}>
                <span className="eyebrow mb-4 block">Previous step</span>
                <Link href={prevStep.href} className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)] hover:opacity-70 transition-opacity">
                  ← {prevStep.number} {prevStep.label}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
