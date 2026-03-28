import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/process/design-planning"),
  title: "Design & Planning — Step 2 | Process | Soleta",
  description: "Your home takes shape — floor plans, elevations, 3D visualisations and material selections. Nothing is fixed until you approve it.",
};

const step = processSteps[1];
const prevStep = processSteps[0];
const nextStep = processSteps[2];

const cta = {
  eyebrow: "Ready to start",
  heading: "Begin the design process",
  body: "The first conversation is free. Tell us about your site and your vision.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View the Collection", href: "/collection" },
  theme: "dark" as const,
};

export default function DesignPlanningPage() {
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
                <span className="eyebrow mb-4 block">What happens in this step</span>
                <div className="flex flex-col gap-4 text-[var(--color-text-secondary)]">
                  <p className="leading-relaxed">Our design team works from the project brief to develop a full architectural proposal. This includes floor plans at 1:100 and 1:50 scale, elevations, section drawings through the key spaces and a 3D visualisation of the exterior and main interior volumes.</p>
                  <p className="leading-relaxed">Material selections are presented as a physical sample board — timber species for cladding and interior surfaces, insulation specification, glazing systems and exterior finish. You see and touch the actual materials before they are ordered.</p>
                  <p className="leading-relaxed">We iterate. A typical design stage involves two to three rounds of revisions — adjusting the floor plan, moving walls, changing the orientation of a terrace, reconsidering a material. Nothing is fixed until you sign off the final package. Only then do we proceed to engineering.</p>
                </div>
              </div>

              <div>
                <span className="eyebrow mb-4 block">Typical revision rounds</span>
                <ul className="flex flex-col gap-3">
                  {["Floor plan and massing — spatial layout and overall form", "Elevations and materials — exterior appearance and finish selection", "Interior — key room layouts, kitchen configuration, bathroom positions", "Final sign-off — complete drawing package approved by client"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-1 shrink-0 font-ui text-[0.5625rem] font-medium text-[var(--color-brand)]">0{i + 1}</span>
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
                <span className="eyebrow mb-4 block">Navigate</span>
                <div className="flex flex-col gap-3">
                  <Link href={prevStep.href} className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)] hover:opacity-70 transition-opacity">
                    ← {prevStep.number} {prevStep.label}
                  </Link>
                  <Link href={nextStep.href} className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] hover:opacity-70 transition-opacity">
                    {nextStep.number} {nextStep.label} →
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
