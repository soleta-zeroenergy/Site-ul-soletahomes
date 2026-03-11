import { Hero } from "@/components/sections/Hero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { ProjectGrid, type ProjectItem } from "@/components/sections/ProjectGrid";
import { CtaStrip } from "@/components/sections/CtaStrip";

/* ─── Data ──────────────────────────────────────────────────────────────── */

const collectionItems = [
  {
    id:       "signature",
    eyebrow:  "Flagship",
    title:    "Signature Series",
    subtitle: "Statement homes where architectural precision meets sculptural form. Bespoke to every site.",
    image:    "https://placehold.co/800x1000/CCC7BA/524C47?text=Signature+Series",
    imageAlt: "Signature Series timber home",
    href:     "/collection/signature",
  },
  {
    id:       "classic",
    eyebrow:  "Timeless",
    title:    "Classic Series",
    subtitle: "The essential Soleta home. Refined proportions, natural materials, a lifetime of comfort.",
    image:    "https://placehold.co/800x1000/B5AFA2/3D3834?text=Classic+Series",
    imageAlt: "Classic Series timber home",
    href:     "/collection/classic",
  },
  {
    id:       "landscape",
    eyebrow:  "Nature",
    title:    "Landscape Series",
    subtitle: "Homes shaped by terrain. Designed to dissolve into forest, meadow, or hillside.",
    image:    "https://placehold.co/800x1000/D4B5A0/3D2E22?text=Landscape+Series",
    imageAlt: "Landscape Series timber home in nature",
    href:     "/collection/holiday-retreat",
  },
];

const featuredProjects: ProjectItem[] = [
  {
    id:       "project-1",
    eyebrow:  "Bavaria · 2024",
    title:    "Lakeshore Residence",
    subtitle: "Private family home · 420 m² · CLT post & beam",
    image:    "https://placehold.co/800x500/CCC7BA/28241F?text=Lakeshore+Residence",
    imageAlt: "Lakeshore Residence exterior",
    href:     "/built-projects/private-residences",
  },
  {
    id:       "project-2",
    eyebrow:  "Tyrol · 2023",
    title:    "Alpine Retreat",
    subtitle: "Holiday home · 210 m² · Passive house certified",
    image:    "https://placehold.co/800x500/D4B5A0/3D2E22?text=Alpine+Retreat",
    imageAlt: "Alpine Retreat exterior",
    href:     "/built-projects/holiday-homes",
  },
  {
    id:       "project-3",
    eyebrow:  "Provence · 2023",
    title:    "Vineyard House",
    subtitle: "Custom architecture · 380 m² · ZeroEnergy",
    image:    "https://placehold.co/800x500/E8D6CA/3D2E22?text=Vineyard+House",
    imageAlt: "Vineyard House exterior",
    href:     "/built-projects/case-studies",
  },
];

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <Hero
        variant="split"
        eyebrow="Scandinavian Timber Architecture"
        heading="Homes designed to last generations."
        subheading="Soleta combines Scandinavian structural precision with the warmth of natural materials to create homes that feel timeless."
        ctaLabel="Request a Private Offer"
        ctaHref="/contact"
        secondaryCtaLabel="Explore the Collection"
        secondaryCtaHref="/collection"
        imageSrc="https://placehold.co/1440x900/DDD9CE/3D3834?text=Soleta+Home"
        imageAlt="Soleta timber home in a forest landscape"
      />

      {/* ── 2. Collection preview ────────────────────────────────────────── */}
      <section className="section bg-stone-50" aria-labelledby="collection-heading">
        <div className="container-site">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-10 md:mb-14">
            <SectionHeader
              eyebrow="Our Collection"
              heading="Architectural families."
              subheading="Each collection explores a different relationship between space, landscape, and timber structure."
              ruled
            />
            <a
              href="/collection"
              className="btn-ghost shrink-0 self-start md:self-auto"
              aria-label="View all collections"
            >
              View all
              <span className="block h-px w-6 bg-current" aria-hidden />
            </a>
          </div>

          {/* Cards — portrait, 1→2→3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {collectionItems.map((item) => (
              <Card
                key={item.id}
                image={item.image}
                imageAlt={item.imageAlt}
                eyebrow={item.eyebrow}
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                aspectRatio="portrait"
                showArrow
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Built projects preview ────────────────────────────────────── */}
      <ProjectGrid
        eyebrow="Selected Work"
        heading="Homes we have built."
        subheading="A selection of completed residences across Europe — each one shaped by its site, its owners, and the Soleta craft tradition."
        layout="asymmetric"
        viewAllHref="/built-projects"
        viewAllLabel="View all projects"
        projects={featuredProjects}
        className="bg-stone-100/60"
      />

      {/* ── 4. CTA ──────────────────────────────────────────────────────── */}
      <CtaStrip
        variant="dark"
        align="center"
        eyebrow="Private Consultation"
        heading="Begin your Soleta project."
        subheading="Our team will guide you from first sketch to final construction."
        ctaLabel="Request a Private Offer"
        ctaHref="/contact"
        secondaryCtaLabel="Explore the collection"
        secondaryCtaHref="/collection"
      />
    </>
  );
}
