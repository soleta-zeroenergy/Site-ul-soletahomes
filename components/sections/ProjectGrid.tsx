import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

/* ── Types ─────────────────────────────────────────────────────────────────── */
export type ProjectItem = {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  location: string;
  category: string;
  href?: string;
  year?: string | number;
};

export type ProjectGridProps = {
  eyebrow?: string;
  heading?: string;
  projects: ProjectItem[];
  cta?: { label: string; href: string };
  columns?: number;
  theme?: "light" | "warm" | "dark" | string;
};

/* ── Config ────────────────────────────────────────────────────────────────── */

const PLACEHOLDERS = [
  "radial-gradient(ellipse 65% 65% at 28% 42%, rgba(128,103,84,0.32) 0%, #1a1714 68%)",
  "radial-gradient(ellipse 65% 65% at 75% 58%, rgba(128,103,84,0.26) 0%, #1a1714 68%)",
  "radial-gradient(ellipse 65% 65% at 50% 22%, rgba(128,103,84,0.30) 0%, #1a1714 68%)",
  "radial-gradient(ellipse 65% 65% at 18% 72%, rgba(128,103,84,0.24) 0%, #1a1714 68%)",
];

const bgMap = {
  light: "bg-white",
  warm: "bg-[#faf8f6]",
  dark: "bg-[#1a1714]",
};

/* ── Component ─────────────────────────────────────────────────────────────── */
export function ProjectGrid({
  eyebrow,
  heading,
  projects,
  cta,
  columns = 3,
  theme = "light",
}: ProjectGridProps) {
  const isDark = theme === "dark";
  const gridCols =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={cn("section", bgMap[theme])}>
      <div className="container-site">
        {(eyebrow || heading) && (
          <div className="mb-14 flex items-end justify-between gap-8">
            <div className="max-w-xl">
              {eyebrow && (
                <p
                  className={cn(
                    "eyebrow mb-4",
                    isDark ? "text-brand-400" : "text-brand-500"
                  )}
                >
                  {eyebrow}
                </p>
              )}
              {heading && (
                <h2
                  className={isDark ? "text-[#faf8f6]" : "text-[#1a1714]"}
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    lineHeight: 1.12,
                    letterSpacing: "0.02em",
                  }}
                >
                  {heading}
                </h2>
              )}
            </div>

            {cta && (
              <Link
                href={cta.href}
                className={cn(
                  "hidden md:inline-flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.15em] uppercase shrink-0 transition-colors duration-200",
                  isDark
                    ? "text-[#c8bfb8] hover:text-[#faf8f6]"
                    : "text-brand-500 hover:text-[#1a1714]"
                )}
              >
                {cta.label}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        )}

        <div className={cn("grid gap-px border border-sand-400 bg-sand-400", gridCols)}>
          {projects.map((project, i) => {
            const hasImage = Boolean(project.imageSrc);

            const innerContent = (
              <div className="relative aspect-[4/3] overflow-hidden">
                {hasImage ? (
                  <Image
                    src={project.imageSrc!}
                    alt={project.imageAlt ?? project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-75"
                    style={{ background: PLACEHOLDERS[i % PLACEHOLDERS.length] }}
                  />
                )}

                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,23,20,0.85) 0%, rgba(26,23,20,0.30) 45%, transparent 72%)",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "rgba(26,23,20,0.15)" }}
                />

                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-1.5">
                  <p className="text-[0.5625rem] font-medium tracking-[0.18em] uppercase text-brand-300">
                    {project.category}
                    {project.year && (
                      <span className="ml-3 text-[#9a8e87]">{project.year}</span>
                    )}
                  </p>

                  <h3
                    className="text-[#faf8f6]"
                    style={{
                      fontSize: "1.125rem",
                      lineHeight: 1.25,
                      letterSpacing: "0.02em",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-[0.6875rem] tracking-wide text-[#9a8e87]">
                    {project.location}
                  </p>
                </div>
              </div>
            );

            if (project.href) {
              return (
                <Link
                  key={i}
                  href={project.href}
                  className="group relative overflow-hidden bg-[#1a1714] block"
                >
                  {innerContent}
                </Link>
              );
            }

            return (
              <div
                key={i}
                className="group relative overflow-hidden bg-[#1a1714] block"
              >
                {innerContent}
              </div>
            );
          })}
        </div>

        {cta && (
          <div className="mt-10 flex justify-center md:hidden">
            <Link
              href={cta.href}
              className={cn(
                "btn-outline py-4 px-10",
                isDark && "border-white/30 text-[#faf8f6] hover:bg-white/10"
              )}
            >
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}