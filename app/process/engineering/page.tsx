import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { processSteps } from "@/lib/content/process-services";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/process/engineering"),
  title: "Engineering — Step 3 | Process | Soleta",
  description: "Structural engineering, energy calculations, manufacturing drawings and building permit support. The technical foundation of every Soleta home.",
};

const step = processSteps[2];
const prevStep = processSteps[1];
const nextStep = processSteps[3];

const cta = {
  eyebrow: "Ready to start",
  heading: "Begin your Soleta project",
  body: "The first conversation is free. Tell us about your site and your vision.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View the Collection", href: "/collection" },
  theme: "dark",
};

export default function EngineeringPage() {
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
                  <p className="leading-relaxed">The approved architectural drawings are handed to our structural engineering team. Every connection, every joint and every load path is calculated — not assumed. We use Eurocodes and Romanian building standards as the baseline, and apply more stringent criteria where the site or the design requires it.</p>
                  <p className="leading-relaxed">In parallel, our energy team produces a full dynamic energy model of the home — calculating heating and cooling demand, solar gain, thermal bridge analysis and the output of any renewable energy systems. The model is the basis for the A+ or ZeroEnergy certification.</p>
                  <p className="leading-relaxed">The output of the engineering stage is a complete set of manufacturing drawings — the files that go directly to our CNC machines in the factory. Everything is checked, approved and signed off before a single element is cut.</p>
                </div>
              </div>

              <div>
                <span className="eyebrow mb-4 block">Engineering outputs</span>
                <ul className="flex flex-col gap-3">
                  {[
                    "Structural calculations — all load cases, connections and foundations",
                    "Energy model — heating/cooling demand, solar gain, ventilation",
                    "Thermal bridge analysis — all junctions and penetrations",
                    "CNC manufacturing drawings — element by element, ready for production",
                    "Building permit package — drawings and documents for submission",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
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
