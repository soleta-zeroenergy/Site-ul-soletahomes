import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/services/aftercare"),
  title: "Aftercare | Services | Soleta",
  description: "Annual inspections, maintenance programmes, warranty management and extension support. We built your home — we want it to last.",
};

const cta = {
  eyebrow: "Aftercare",
  heading: "We built it. We stand behind it.",
  body: "Contact us to arrange an annual inspection or discuss your aftercare needs.",
  primaryCta: { label: "Contact the Aftercare Team", href: "/contact" },
  secondaryCta: { label: "Explore the Process", href: "/process" },
  theme: "dark",
};

export default function AftercarePage() {
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
          <span className="eyebrow mb-4 block">Aftercare</span>
          <h1 className="mb-6 max-w-2xl">A home that gets better with age</h1>
          <p className="subtitle max-w-xl">
            Annual inspections, maintenance programmes, warranty management and extension support. The relationship does not end at handover.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-8">
              <div>
                <span className="eyebrow mb-4 block">Why aftercare matters</span>
                <div className="flex flex-col gap-4 text-[var(--color-text-secondary)]">
                  <p className="leading-relaxed">A timber home built to Soleta standards will perform reliably for 80 or more years — but only if it is maintained correctly. Natural materials are forgiving and durable, but they need periodic attention. The annual inspection programme exists to catch small issues before they become large ones.</p>
                  <p className="leading-relaxed">Our aftercare team is the same team that designed and built your home. We know every joint, every detail and every material that was used. When something needs attention, we understand the context — we do not need to investigate from scratch.</p>
                  <p className="leading-relaxed">Aftercare also covers ZeroEnergy systems. Energy systems evolve, software updates, components need periodic servicing. We manage all of this as part of the annual maintenance programme.</p>
                </div>
              </div>

              <div>
                <span className="eyebrow mb-4 block">What aftercare includes</span>
                <ul className="flex flex-col gap-3">
                  {[
                    "Annual structural inspection — exterior cladding, roof, foundations, drainage",
                    "ZeroEnergy systems check — output, efficiency, component condition",
                    "Ventilation system service — filter replacement, flow rate check",
                    "Timber maintenance — cladding condition, re-treatment schedule",
                    "Warranty management — all warranty claims handled directly",
                    "Extension support — advice on additions and modifications",
                    "Emergency response — direct line to our technical team",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside>
              <div className="border border-[var(--color-border-light)] p-8" style={{ backgroundColor: "var(--soleta-cream)" }}>
                <span className="eyebrow mb-6 block">Programme details</span>
                <dl className="flex flex-col gap-5">
                  {[
                    { label: "Frequency", value: "Annual inspection + on-call support" },
                    { label: "Response time", value: "48 hours for non-emergency, same day for urgent" },
                    { label: "Coverage area", value: "Romania · EU (by arrangement)" },
                    { label: "Available to", value: "All Soleta homes, including older builds" },
                    { label: "Warranty extension", value: "Available from Year 3 onwards" },
                  ].map((spec) => (
                    <div key={spec.label} className="border-b border-[var(--color-border-light)] pb-5 last:border-0 last:pb-0">
                      <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)] mb-1">{spec.label}</dt>
                      <dd className="font-ui text-sm text-[var(--color-text)]">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
