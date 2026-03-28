import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/content/built-projects";
import { withCanonical } from "@/lib/seo";
import { CtaBand } from "@/components/sections/CtaBand";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    ...withCanonical(`/built-projects/${project.slug}`),
    title: `${project.title} | ${project.location}, ${project.country} | Soleta`,
    description: project.summary,
  };
}

const projectCta = {
  eyebrow: "Start your project",
  heading: "Begin your Soleta project",
  body: "Tell us about your site, your vision and your timeline.",
  primaryCta: { label: "Request a Private Offer", href: "/contact" },
  secondaryCta: { label: "View all projects", href: "/built-projects" },
  theme: "dark" as const,
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects.filter((p) =>
    project.relatedSlugs.includes(p.slug)
  );

  return (
    <>
      {/* ── 1. Header ── */}
      <section
        className="section-lg border-b border-[var(--color-border-light)]"
        style={{ backgroundColor: "var(--soleta-cream)" }}
      >
        <div className="container-narrow">
          <Link
            href="/built-projects"
            className="eyebrow mb-6 inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            ← All projects
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="eyebrow">{project.categoryLabel}</span>
            <span className="font-ui text-[0.625rem] text-[var(--color-text-muted)]">
              {project.year}
            </span>
          </div>
          <h1 className="mb-3">{project.title}</h1>
          <p className="font-ui text-sm text-[var(--color-text-muted)]">
            {project.location}, {project.country} · {project.area} · {project.model}
          </p>
        </div>
      </section>

      {/* ── 2. Hero image placeholder ── */}
      <div
        className="aspect-[21/9] w-full bg-[var(--color-surface)]"
        aria-hidden="true"
      />

      {/* ── 3. Description + specs ── */}
      <section className="section" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container-site">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_340px]">
            <div className="flex flex-col gap-6">
              <span className="eyebrow block">About this project</span>
              {project.description.map((para, i) => (
                <p key={i} className="leading-relaxed text-[var(--color-text-secondary)]">
                  {para}
                </p>
              ))}

              {/* Testimonial */}
              {project.testimonial && (
                <blockquote className="mt-4 border-l-2 border-[var(--color-brand)] pl-6">
                  <p className="font-heading text-[1.25rem] italic leading-relaxed text-[var(--color-text)]">
                    "{project.testimonial.quote}"
                  </p>
                  <footer className="mt-3 font-ui text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    — {project.testimonial.author}
                  </footer>
                </blockquote>
              )}
            </div>

            {/* Specs sidebar */}
            <aside>
              <div
                className="border border-[var(--color-border-light)] p-8"
                style={{ backgroundColor: "var(--soleta-cream)" }}
              >
                <span className="eyebrow mb-6 block">Project details</span>
                <dl className="flex flex-col gap-4">
                  {project.specs.map((spec) => (
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

      {/* ── 4. Related projects ── */}
      {related.length > 0 && (
        <section
          className="section border-t border-[var(--color-border-light)]"
          style={{ backgroundColor: "var(--soleta-cream)" }}
        >
          <div className="container-site">
            <span className="eyebrow mb-4 block">Related projects</span>
            <h2 className="mb-10 text-[2rem]">You may also like</h2>
            <div className="grid grid-cols-1 gap-px bg-[var(--color-border-light)] md:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/built-projects/${rel.slug}`}
                  className="group flex flex-col bg-[var(--soleta-cream)] hover:bg-[var(--color-bg)] transition-colors"
                >
                  <div className="aspect-[4/3] bg-[var(--color-surface)] overflow-hidden">
                    <div className="h-full w-full bg-[var(--color-surface-raised)] transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="p-6">
                    <span className="eyebrow mb-2 block">{rel.categoryLabel}</span>
                    <h3 className="mb-1 text-[1.125rem]">{rel.title}</h3>
                    <p className="font-ui text-[0.75rem] text-[var(--color-text-muted)]">
                      {rel.location}, {rel.country}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. CTA ── */}
      <CtaBand {...projectCta} />
    </>
  );
}
