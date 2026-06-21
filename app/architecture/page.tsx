import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { withCanonical } from "@/lib/seo";
import { architectureHero, architecturePillars, architectureFraming } from "@/lib/content/architecture";
import { CtaBand } from "@/components/sections/CtaBand";
import { breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/architecture"),
  title: "Architecture & Design | Soleta",
  description:
    "Design language, structural system, healthy materials and energy performance — shaped as one integrated approach. How every Soleta home is conceived and built.",
};

const schema = breadcrumbSchema([
  { name: "Home",                href: "/" },
  { name: "Architecture & Design", href: "/architecture" },
]);

/* Images assigned to each pillar card — 1537×1023 px, no crop required */
const pillarImages: Record<string, string> = {
  "/architecture/design-language":   "https://img.soletahomes.com/architecture-card-design-language.webp",
  "/architecture/post-beam":         "https://img.soletahomes.com/architecture-card-post-beam-system.webp",
  "/architecture/healthy-materials": "https://img.soletahomes.com/architecture-card-healthy-materials.webp",
  "/architecture/energy-zeroenergy": "https://img.soletahomes.com/architecture-card-zeroenergy%20.webp",
};

const pillarAlt: Record<string, string> = {
  "/architecture/design-language":   "Soleta design language",
  "/architecture/post-beam":         "Post and beam timber construction system",
  "/architecture/healthy-materials": "Healthy timber materials",
  "/architecture/energy-zeroenergy": "Soleta ZeroEnergy architecture",
};

export default function ArchitecturePage() {
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
          <span className="eyebrow mb-4 block">{architectureHero.eyebrow}</span>
          <h1 className="mb-6 max-w-2xl">{architectureHero.heading}</h1>
          <p className="subtitle max-w-xl">{architectureHero.body}</p>
        </div>
      </section>

      {/* ── 2. Hero image ── */}
      <div
        className="relative w-full border-b border-[var(--color-border-light)]"
        style={{ aspectRatio: "3000 / 975" }}
      >
        <Image
          src="https://img.soletahomes.com/hero_architecture_design_3000x975.webp"
          alt="Soleta architecture — design, structure, materials and performance"
          fill
          priority
          className="object-contain"
          sizes="100vw"
        />
      </div>

      {/* ── 3. System framing block ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-narrow">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:items-start">
            <div>
              <span className="eyebrow mb-4 block">One integrated system</span>
              <h2 className="mb-6" style={{ fontSize: "clamp(1.375rem, 2vw, 1.75rem)", lineHeight: 1.2 }}>
                {architectureFraming.heading}
              </h2>
            </div>
            <p className="leading-relaxed text-[var(--color-text-secondary)] lg:pt-14">
              {architectureFraming.body}
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. Four pillar navigator ── */}
      <section
        className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <span className="eyebrow mb-10 block">Four disciplines</span>
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2">
            {architecturePillars.map((pillar) => (
              <Link
                key={pillar.href}
                href={pillar.href}
                className="group flex flex-col bg-[var(--soleta-cream)] transition-colors duration-200 hover:bg-[var(--color-bg)]"
              >
                {/* Card image — 1537×1023, full image shown without crop */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: "1537 / 1023" }}
                >
                  <Image
                    src={pillarImages[pillar.href]}
                    alt={pillarAlt[pillar.href]}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Card text */}
                <div className="flex flex-col p-10 flex-1">
                  <span className="eyebrow mb-4 block">{pillar.eyebrow}</span>
                  <h2 className="mb-4 text-[1.375rem] leading-snug">{pillar.heading}</h2>
                  <p className="mb-8 flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {pillar.body}
                  </p>
                  <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1 inline-block">
                    {pillar.cta} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <CtaBand
        eyebrow="Next step"
        heading="See how we build in practice"
        body="Browse our completed projects or start a conversation about your site."
        primaryCta={{ label: "View Built Projects",      href: "/built-projects" }}
        secondaryCta={{ label: "Request a Private Consultation", href: "/request-private-offer" }}
        theme="dark"
      />
    </>
  );
}
