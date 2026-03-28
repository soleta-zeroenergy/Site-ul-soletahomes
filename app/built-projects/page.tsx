import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { projects, projectCategories } from "@/lib/content/built-projects";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/built-projects"),
  title: "Built Projects | Homes We Have Built | Soleta",
  description:
    "86+ Soleta homes built across Romania, France, Germany, Austria and beyond. Browse private residences, holiday homes, hospitality projects and case studies.",
};

const builtProjectsCta = {
  eyebrow: "Start your project",
  heading: "Begin your Soleta project",
  body: "Tell us about your site, your vision and your timeline.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "Discover the Process", href: "/process" },
  theme: "dark",
};

export default function BuiltProjectsPage() {
  return (
    <>
      {/* ── 1. Page header ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <span className="eyebrow mb-6 block">Built Projects</span>
          <h1 className="mb-6 max-w-2xl">
            Homes we have built
          </h1>
          <p className="subtitle max-w-xl">
            86+ homes across Romania, France, Germany, Austria and beyond.
            Each one shaped by its site, built to last generations.
          </p>
        </div>
      </section>

      {/* ── 2. Stats bar ── */}
      <section
        className="section-sm border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {[
              { value: "86+", label: "Homes built" },
              { value: "6", label: "Countries" },
              { value: "12+", label: "Years active" },
              { value: "100%", label: "Client retention" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-heading text-[2.5rem] font-normal leading-none text-[var(--soleta-ink)]">
                  {stat.value}
                </dt>
                <dd className="mt-2 font-ui text-[0.6875rem] uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── 3. Category filter tabs ── */}
      <section
        className="section-sm border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-site">
          <nav aria-label="Project categories" className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <span
                key={cat.value}
                className={
                  cat.value === "all"
                    ? "inline-block border border-[var(--soleta-ink)] bg-[var(--soleta-ink)] px-5 py-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--soleta-cream)]"
                    : "inline-block border border-[var(--color-border)] px-5 py-2 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-text-secondary)] hover:border-[var(--soleta-ink)] hover:text-[var(--soleta-ink)] transition-colors cursor-pointer"
                }
              >
                {cat.label}
              </span>
            ))}
          </nav>
        </div>
      </section>

      {/* ── 4. Projects grid ── */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/built-projects/${project.slug}`}
                className="group flex flex-col bg-[var(--color-bg)] transition-colors duration-200 hover:bg-[var(--soleta-cream)]"
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--color-surface)]">
                  <div className="h-full w-full bg-[var(--color-surface-raised)] transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-brand)]">
                      {project.categoryLabel}
                    </span>
                    <span className="font-ui text-[0.625rem] tracking-[0.08em] text-[var(--color-text-muted)]">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="mb-1 text-[1.25rem]">{project.title}</h3>
                  <p className="mb-4 font-ui text-[0.75rem] text-[var(--color-text-muted)]">
                    {project.location}, {project.country} · {project.area}
                  </p>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                    {project.summary}
                  </p>
                  <span className="mt-6 inline-block font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1">
                    View project →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <CtaBand {...builtProjectsCta} />
    </>
  );
}
