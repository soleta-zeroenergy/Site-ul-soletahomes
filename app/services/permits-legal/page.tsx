import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/services/permits-legal"),
  title: "Permits & Legal | Services | Soleta",
  description: "Building permit preparation and submission in Romania and across Europe. We know what planners need — and how to give it to them.",
};

const cta = {
  eyebrow: "Get permit support",
  heading: "Let us handle the permits",
  body: "Tell us about your site and we will advise on the permit process before you commit to anything.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Explore the Process", href: "/process" },
  theme: "dark" as const,
};

export default function PermitsLegalPage() {
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
          <span className="eyebrow mb-4 block">Permits & Legal</span>
          <h1 className="mb-6 max-w-2xl">We know what planners need</h1>
          <p className="subtitle max-w-xl">
            Building permit preparation and submission in Romania and, in partnership with local professionals, across Europe. Twelve years of approvals means we rarely get surprises.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-8">
              <div>
                <span className="eyebrow mb-4 block">What we handle</span>
                <div className="flex flex-col gap-4 text-[var(--color-text-secondary)]">
                  <p className="leading-relaxed">Building permits in Romania involve a specific set of documents, certifications and approvals that vary by municipality and zone classification. We have prepared and submitted permits across Romania — from rural hillside plots to urban infill sites — and we know which documents each authority requires and in what format.</p>
                  <p className="leading-relaxed">For projects outside Romania, we work with local architects and permit specialists in France, Germany, Austria and Switzerland. We provide the technical documentation; the local professional provides the permit submission and planning liaison.</p>
                  <p className="leading-relaxed">We also advise on site selection before you buy. If you are considering a plot, we can review the zoning, the planning history and any restrictions — before you commit to a purchase.</p>
                </div>
              </div>

              <div>
                <span className="eyebrow mb-4 block">Permit package includes</span>
                <ul className="flex flex-col gap-3">
                  {[
                    "Urban planning certificate (certificat de urbanism) — Romania",
                    "Architectural drawings to planning authority standards",
                    "Structural calculations summary for planning submission",
                    "Energy performance certificate (EPB/DEEE)",
                    "Fire safety and access documentation",
                    "Submission to local authority and follow-up",
                    "Response to queries from planners",
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
                <span className="eyebrow mb-6 block">Service details</span>
                <dl className="flex flex-col gap-5">
                  {[
                    { label: "Coverage", value: "Romania (direct) · EU (in partnership)" },
                    { label: "Typical duration", value: "4–12 weeks depending on municipality" },
                    { label: "Pre-purchase advice", value: "Available — plot review before you commit" },
                    { label: "Included in", value: "Full Service and Turnkey packages" },
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
