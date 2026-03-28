import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/services/interior-design"),
  title: "Interior Design | Services | Soleta",
  description: "Material selections, furniture specification, lighting design and coordination. Available as a full service or as a consultation to support your own designer.",
};

const cta = {
  eyebrow: "Interior design",
  heading: "Design the inside too",
  body: "Tell us about your project and we will explain how our interior design service works.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View the Collection", href: "/collection" },
  theme: "dark" as const,
};

export default function InteriorDesignPage() {
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
          <span className="eyebrow mb-4 block">Interior Design</span>
          <h1 className="mb-6 max-w-2xl">The inside, designed with the same care</h1>
          <p className="subtitle max-w-xl">
            Material selections, furniture specification, lighting design and coordination. The interior palette is part of the architecture — not an afterthought.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-8">
              <div>
                <span className="eyebrow mb-4 block">Our approach to interiors</span>
                <div className="flex flex-col gap-4 text-[var(--color-text-secondary)]">
                  <p className="leading-relaxed">A Soleta home has a natural material logic — exposed glulam structure, wood fibre insulation, natural finishes. The interior design service extends this logic to every surface, every fitting and every piece of furniture. The result is a home that is coherent from outside to inside.</p>
                  <p className="leading-relaxed">We work with a curated set of suppliers — natural stone, handmade ceramic tiles, solid timber cabinetry, linen upholstery — chosen for durability, sustainability and authentic material character. We do not specify synthetics that mimic natural materials.</p>
                  <p className="leading-relaxed">The service is available as a full interior design package (material selections through to furniture procurement) or as a consultation to support your own designer. In both cases, we provide a physical sample board of all proposed finishes before anything is ordered.</p>
                </div>
              </div>

              <div>
                <span className="eyebrow mb-4 block">Full service includes</span>
                <ul className="flex flex-col gap-3">
                  {[
                    "Floor, wall and ceiling finish selections — all rooms",
                    "Kitchen design and specification",
                    "Bathroom design and specification",
                    "Built-in joinery design",
                    "Lighting design — fixed and decorative",
                    "Furniture specification and procurement",
                    "Physical sample board for client approval",
                    "Coordination with construction team",
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
                <span className="eyebrow mb-6 block">Service options</span>
                <dl className="flex flex-col gap-5">
                  {[
                    { label: "Full interior design", value: "Material selections through to furniture procurement" },
                    { label: "Consultation only", value: "3-hour session to support your own designer" },
                    { label: "Finishes only", value: "Material selections for floors, walls, ceilings" },
                    { label: "Included in", value: "Full Service package (optional in Turnkey)" },
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
