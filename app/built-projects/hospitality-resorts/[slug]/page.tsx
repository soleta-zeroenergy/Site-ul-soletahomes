import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findProject, getCategoryMeta, projects, projectHref } from "@/lib/content/built-projects";
import { ProjectPageTemplate } from "@/components/sections/ProjectPageTemplate";
import { withCanonical } from "@/lib/seo";

const CATEGORY = "hospitality-resorts" as const;

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects
    .filter((p) => p.category === CATEGORY)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject(CATEGORY, params.slug);
  if (!project) return {};
  return {
    ...withCanonical(projectHref(project)),
    title: `${project.title} | ${[project.location, project.country].filter(Boolean).join(", ")} | Soleta`,
    description: project.summary,
  };
}

export default function HospitalityResortProjectPage({ params }: Props) {
  const project  = findProject(CATEGORY, params.slug);
  if (!project) notFound();
  const category = getCategoryMeta(CATEGORY);
  return <ProjectPageTemplate project={project} category={category} />;
}
