import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";

export type ProjectItem = {
  id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image: string;
  imageAlt?: string;
  href: string;
};

type Props = {
  projects: ProjectItem[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  /** "asymmetric" = first card spans full width at tablet, 2 cols at desktop. "uniform" = equal columns. */
  layout?: "asymmetric" | "uniform";
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
};

export function ProjectGrid({
  projects,
  eyebrow,
  heading,
  subheading,
  layout = "asymmetric",
  viewAllHref,
  viewAllLabel = "View all projects",
  className,
}: Props) {
  const [featured, ...rest] = projects;

  return (
    <section className={cn("section", className)}>
      <div className="container-site">

        {/* Section header */}
        {(eyebrow || heading) && (
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 md:mb-14">
            <SectionHeader
              eyebrow={eyebrow}
              heading={heading ?? ""}
              subheading={subheading}
            />
            {viewAllHref && (
              <a href={viewAllHref} className="btn-ghost shrink-0 self-start md:self-auto">
                {viewAllLabel}
                <span className="block h-px w-6 bg-current" aria-hidden />
              </a>
            )}
          </div>
        )}

        {/* Grid */}
        {layout === "asymmetric" && featured ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/*
              Mobile:   1 col — featured is full width
              Tablet:   2 cols — featured spans both (full width), rest go below in 2-col grid
              Desktop:  3 cols — featured spans 2, rest stack in 3rd column
            */}
            <div className="md:col-span-2 lg:col-span-2">
              <Card
                image={featured.image}
                imageAlt={featured.imageAlt}
                eyebrow={featured.eyebrow}
                title={featured.title}
                subtitle={featured.subtitle}
                href={featured.href}
                aspectRatio="landscape"
                showArrow
              />
            </div>

            {/* Rest: stacked in 3rd column on lg, 2-col row on md, single col on mobile */}
            {rest.length > 0 && (
              <div className="md:col-span-2 lg:col-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8">
                {rest.slice(0, 2).map((project) => (
                  <Card
                    key={project.id}
                    image={project.image}
                    imageAlt={project.imageAlt}
                    eyebrow={project.eyebrow}
                    title={project.title}
                    subtitle={project.subtitle}
                    href={project.href}
                    aspectRatio="landscape"
                    showArrow
                  />
                ))}
              </div>
            )}

            {/* Overflow cards — full grid row */}
            {rest.length > 2 &&
              rest.slice(2).map((project) => (
                <Card
                  key={project.id}
                  image={project.image}
                  imageAlt={project.imageAlt}
                  eyebrow={project.eyebrow}
                  title={project.title}
                  subtitle={project.subtitle}
                  href={project.href}
                  aspectRatio="landscape"
                  showArrow
                />
              ))
            }
          </div>
        ) : (
          /* Uniform grid: 1 col → 2 col → 3 col */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                image={project.image}
                imageAlt={project.imageAlt}
                eyebrow={project.eyebrow}
                title={project.title}
                subtitle={project.subtitle}
                href={project.href}
                aspectRatio="landscape"
                showArrow
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
