import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { customArchModel } from "@/lib/content/collection-models";
import { withCanonical } from "@/lib/seo";
import { faqSchema, breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/collection/custom-architecture"),
  title: "Custom Architecture | Bespoke Timber Homes | Soleta",
  description:
    "Bring your own architect's design or start with a brief. We adapt it to the Soleta system, and manufacture and assemble almost any architecture to the highest standard.",
};

/* ── Static page content ─────────────────────────────────────────────────── */

const whoItIsFor = [
  {
    title: "You already have an architect",
    body:  "You have drawings, a design direction, or a completed specification. Soleta is a manufacturer and builder that understands timber construction and can deliver it with precision.",
  },
  {
    title: "You have a site and a brief",
    body:  "You know roughly what you want and where you want to build, but have not yet started working with an architect. Our design team can develop the architecture from your brief.",
  },
  {
    title: "Your project doesn't fit a catalogue",
    body:  "Your site is unusual, the design brief is special, or your vision does not align with any standard collection. Custom Architecture begins where the defined paths end.",
  },
];

const whatWeDesign = [
  "Single-family residences with architecturally specific briefs",
  "Multi-unit or phased residential developments in engineered timber",
  "Hospitality and small resort projects — lodges, pavilions, retreats",
  "Educational and community buildings",
  "Hybrid structures combining timber with stone, concrete, or steel",
  "Off-grid and fully autonomous buildings",
  "Experimental or unconventional spatial programmes",
];

const processSteps = [
  {
    step: "01 — First conversation",
    body: "We talk through your site, your design brief, and the stage you are currently at — whether you already have drawings or are starting only from a feeling. No obligation, no pressure.",
  },
  {
    step: "02 — Feasibility and scope",
    body: "We assess the project from the perspective of structural and manufacturing feasibility. If you have drawings, we review them. If not, we define the design phase and what it will involve.",
  },
  {
    step: "03 — Engineering and documentation",
    body: "Structural calculations, manufacturing drawings, and full construction documentation are developed. This is where we translate architectural intent into precise information that can be built.",
  },
  {
    step: "04 — Factory manufacturing",
    body: "All timber elements are produced in our factory, under controlled conditions. Quality remains independent of weather, site access, or seasonal constraints.",
  },
  {
    step: "05 — On-site assembly",
    body: "Our teams deliver and assemble the structure on your site. We manage the construction process and provide continuous supervision through to handover.",
  },
];

const scopeItems = [
  {
    category: "What Soleta provides",
    items: [
      "Structural review and engineering for any Soleta-type structural project",
      "Factory manufacturing of all structural timber elements",
      "Transport and, where needed, crane-assisted on-site assembly",
      "Site supervision throughout the construction phase",
      "Support for permitting documentation, where applicable",
      "10-year full structural warranty",
    ],
  },
  {
    category: "Typically outside scope",
    items: [
      "Architectural design fees (if you bring your own architect)",
      "Land acquisition and site preparation",
      "Foundation design and construction",
      "Utility connections and M&E engineering",
      "Interior finishes — quoted per specification",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────────────────── */

export default function CustomArchPage() {
  const schemas = [
    faqSchema(customArchModel.faq),
    breadcrumbSchema([
      { name: "Home",                   href: "/" },
      { name: "The Collection",         href: "/collection" },
      { name: "Custom Architecture",    href: "/collection/custom-architecture" },
    ]),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <article>

        {/* ── 1. Page header ─────────────────────────────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] pt-12 pb-10 lg:pt-16 lg:pb-14"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-narrow">
            <Link
              href="/collection"
              className="eyebrow mb-8 inline-flex items-center gap-2 no-underline opacity-60 hover:opacity-100 transition-opacity"
            >
              ← The Collection
            </Link>
            <span className="eyebrow mb-4 block">{customArchModel.eyebrow}</span>
            <h1 className="mb-6 max-w-2xl whitespace-pre-line">{customArchModel.heading}</h1>
            <p className="subtitle max-w-xl mb-10">{customArchModel.subheading}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <Link href="/built-projects" className="btn-outline">
                See Built Work
              </Link>
            </div>
          </div>
        </section>

        {/* ── 2. Hero image ──────────────────────────────────────────────── */}
        <div className="relative w-full overflow-hidden" style={{ height: "clamp(260px, 38vw, 520px)" }}>
          <Image
            src="/images/rezerva800x533.webp"
            alt="Custom Soleta architectural project"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* ── 3. What custom means ───────────────────────────────────────── */}
        <section className="border-b border-[var(--color-border-light)] py-14 lg:py-20" style={{ backgroundColor: "var(--color-bg)" }}>
          <div className="container-site">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_360px]">

              <div>
                <span className="eyebrow mb-6 block">What custom means</span>
                <div className="flex flex-col gap-5">
                  {customArchModel.description.map((para, i) => (
                    <p
                      key={i}
                      className="leading-relaxed text-[var(--color-text-secondary)]"
                      style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Specs sidebar */}
              <aside>
                <div
                  className="border border-[var(--color-border-light)] p-8"
                  style={{ backgroundColor: "var(--soleta-cream)" }}
                >
                  <span className="eyebrow mb-6 block">Project parameters</span>
                  <dl className="flex flex-col gap-4">
                    {customArchModel.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="flex flex-col gap-1 border-b border-[var(--color-border-light)] pb-4 last:border-0 last:pb-0"
                      >
                        <dt className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                          {spec.label}
                        </dt>
                        <dd className="font-ui text-sm text-[var(--color-text)]">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* ── 4. Who it is for ───────────────────────────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-site">
            <span className="eyebrow mb-4 block">Who it is for</span>
            <h2
              className="mb-12 max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
            >
              Three kinds of project start here
            </h2>
            <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] border border-[var(--color-border-light)] sm:grid-cols-3">
              {whoItIsFor.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 bg-[var(--soleta-cream)] p-8"
                >
                  <h3
                    className="font-heading text-[1.125rem] text-[var(--color-text)]"
                    style={{ lineHeight: 1.3 }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. What can be designed from scratch ───────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-narrow">
            <span className="eyebrow mb-4 block">Scope of work</span>
            <h2
              className="mb-8 max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
            >
              What can be designed and built
            </h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {whatWeDesign.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                >
                  <span className="mt-[0.4rem] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--color-brand)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 6. Process ─────────────────────────────────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-narrow">
            <span className="eyebrow mb-4 block">How it works</span>
            <h2
              className="mb-10 max-w-lg"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
            >
              From first conversation to delivery
            </h2>
            <ol className="flex flex-col divide-y divide-[var(--color-border-light)]">
              {processSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-8 py-6">
                  <span
                    aria-hidden="true"
                    className="shrink-0 font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-brand)] pt-[0.25rem]"
                    style={{ minWidth: "2.5rem" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-heading text-[1.125rem] text-[var(--color-text)]"
                      style={{ lineHeight: 1.3 }}
                    >
                      {step.step}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[var(--color-brand)] transition-opacity duration-200 hover:opacity-70"
              >
                Full process overview →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. Scope — included / outside scope ────────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-site">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              {scopeItems.map((col) => (
                <div key={col.category}>
                  <span className="eyebrow mb-6 block">{col.category}</span>
                  <ul className="flex flex-col gap-3">
                    {col.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-text-secondary)]"
                      >
                        <span
                          className="mt-[0.4rem] h-[5px] w-[5px] shrink-0 rounded-full"
                          style={{
                            backgroundColor:
                              col.category === "What Soleta provides"
                                ? "var(--color-brand)"
                                : "#b8b4ae",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. Built work reference ────────────────────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-site">
            <div className="mb-12 flex items-end justify-between gap-8">
              <div>
                <span className="eyebrow mb-4 block">Built work</span>
                <h2
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
                >
                  Custom projects in real settings
                </h2>
              </div>
              <Link
                href="/built-projects"
                className="hidden shrink-0 items-center gap-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-[var(--color-brand)] transition-opacity duration-200 hover:opacity-70 md:inline-flex"
              >
                All built projects →
              </Link>
            </div>

            {/* Project card — Villa Aquarius as reference */}
            <div className="grid grid-cols-1 gap-px border border-[var(--color-border-light)] bg-[var(--color-border-light)] md:grid-cols-2">
              {[
                {
                  imageSrc: "/images/Aquarius800x600.webp",
                  imageAlt: "Villa Aquarius",
                  title:    "Villa AQUARIUS",
                  location: "Europe",
                  category: "Private Residence",
                  year:     2014,
                  href:     "/built-projects/private-residences",
                },
                {
                  imageSrc: "/images/Life800x600.webp",
                  imageAlt: "House Life",
                  title:    "House Life",
                  location: "Europe",
                  category: "Holiday Home",
                  year:     2024,
                  href:     "/built-projects/holiday-homes",
                },
              ].map((project, i) => (
                <Link
                  key={i}
                  href={project.href}
                  className="group relative overflow-hidden bg-[#1a1714] block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(26,23,20,0.85) 0%, rgba(26,23,20,0.20) 50%, transparent 75%)",
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1.5">
                      <p className="font-ui text-[0.5625rem] font-medium tracking-[0.18em] uppercase text-[#c8bfb8]">
                        {project.category}
                        <span className="ml-3 text-[#9a8e87]">{project.year}</span>
                      </p>
                      <h3
                        className="text-[#faf8f6]"
                        style={{
                          fontSize:      "1.125rem",
                          lineHeight:    1.25,
                          letterSpacing: "0.02em",
                          fontFamily:    "var(--font-heading)",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p className="font-ui text-[0.6875rem] tracking-wide text-[#9a8e87]">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-center md:hidden">
              <Link href="/built-projects" className="btn-outline py-4 px-10">
                All built projects
              </Link>
            </div>
          </div>
        </section>

        {/* ── 9. FAQ ─────────────────────────────────────────────────────── */}
        <section
          className="border-b border-[var(--color-border-light)] py-14 lg:py-20"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div className="container-narrow">
            <span className="eyebrow mb-4 block">Frequently asked</span>
            <h2
              className="mb-10"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1.15 }}
            >
              Questions about Custom Architecture
            </h2>
            <FaqAccordion items={customArchModel.faq} />
          </div>
        </section>

        {/* ── 10. Final CTA ──────────────────────────────────────────────── */}
        <section
          className="py-14 lg:py-20"
          style={{ backgroundColor: "var(--soleta-forest)", color: "var(--soleta-cream)" }}
        >
          <div className="container-narrow text-center">
            <span
              className="eyebrow mb-4 block"
              style={{ color: "var(--soleta-gold)" }}
            >
              Next step
            </span>
            <h2
              className="mb-4"
              style={{
                color:      "var(--soleta-cream)",
                fontSize:   "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
              }}
            >
              Start a custom project
            </h2>
            <p
              className="subtitle mb-10 mx-auto max-w-md"
              style={{ color: "var(--soleta-cream)", opacity: 0.7 }}
            >
              Tell us about your site, your brief and how far along you are. We will assess feasibility and outline the right path forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-inverse">
                Start a Conversation
              </Link>
              <Link
                href="/collection"
                className="btn-ghost"
                style={{ color: "var(--soleta-cream)", opacity: 0.7 }}
              >
                ← Back to The Collection
              </Link>
            </div>
          </div>
        </section>

        {/* ── Sticky mobile CTA ──────────────────────────────────────────── */}
        <div
          className="fixed bottom-0 left-0 right-0 z-40 flex gap-2 border-t border-white/10 bg-[var(--soleta-forest)] p-3 md:hidden"
        >
          <Link href="/contact" className="btn-primary flex-1 justify-center text-center">
            Start a Conversation
          </Link>
          <Link href="/built-projects" className="btn-outline flex-1 justify-center text-center"
            style={{ borderColor: "rgba(255,255,255,0.25)", color: "var(--soleta-cream)" }}
          >
            Built Work
          </Link>
        </div>

      </article>
    </>
  );
}
