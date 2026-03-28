import type { Metadata } from "next";
import Link from "next/link";
import { withCanonical } from "@/lib/seo";
import { projects } from "@/lib/content/built-projects";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  ...withCanonical("/built-projects/case-studies"),
  title: "Case Studies | Built Projects | Soleta",
  description: "In-depth case studies of Soleta homes — the site, the challenge, the solution and the outcome.",
};

const cta = {
  eyebrow: "Start your project",
  heading: "Begin your Soleta project",
  body: "Tell us about your site, your vision and your timeline.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View all projects", href: "/built-projects" },
  theme: "dark",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link href="/built-projects" className="eyebrow mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
            ← Built Projects
          </Link>
          <span className="eyebrow mb-4 block">Case Studies</span>
          <h1 className="mb-6 max-w-2xl">The full story behind the build</h1>
          <p className="subtitle max-w-xl">
            Each case study documents the site, the challenge, the design decisions and the outcome — in enough detail to be genuinely useful to someone planning a similar project.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/built-projects/${project.slug}`}
                className="group flex flex-col bg-[var(--color-bg)] hover:bg-[var(--soleta-cream)] transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[var(--color-surface)]">
                  <div className="h-full w-full bg-[var(--color-surface-raised)] transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-ui text-[0.625rem] font-medium uppercase tracking-[0.12em] text-[var(--color-brand)]">{project.categoryLabel}</span>
                    <span className="font-ui text-[0.625rem] text-[var(--color-text-muted)]">{project.year}</span>
                  </div>
                  <h3 className="mb-1 text-[1.25rem]">{project.title}</h3>
                  <p className="mb-4 font-ui text-[0.75rem] text-[var(--color-text-muted)]">{project.location}, {project.country} · {project.area}</p>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{project.summary}</p>
                  <span className="mt-6 inline-block font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--color-brand)] transition-transform duration-200 group-hover:translate-x-1">
                    Read case study →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand {...cta} />
    </>
  );
}
