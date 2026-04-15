import type { Metadata } from "next";
import Link              from "next/link";
import { Hero }            from "@/components/sections/Hero";
import { FeatureSplit }    from "@/components/sections/FeatureSplit";
import { CardGrid }        from "@/components/sections/CardGrid";
import { ValuesGrid }      from "@/components/sections/ValuesGrid";
import { ProjectGrid }     from "@/components/sections/ProjectGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FaqPreview }      from "@/components/sections/FaqPreview";
import { CtaBand }         from "@/components/sections/CtaBand";
import {
  homeHero,
  homeManifesto,
  homeCollection,
  homeValues,
  homeProjects,
  homeProcess,
  homeFaq,
  homeFaqCta,
  homeCta,
} from "@/lib/content/home";
import { withCanonical, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...withCanonical("/"),
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/logo/Sigla%20Verde%20%2318392B.png`,
            foundingDate: "2013",
            founder: { "@type": "Person", name: "Cătălin Butmălai" },
          },
        })}}
      />

      {/* 1 ── Hero */}
      <Hero {...homeHero} />

      {/* 2 ── Manifesto */}
      <FeatureSplit {...homeManifesto} />

      {/* 3 ── Collection */}
      <CardGrid {...homeCollection} />

      {/* 4 ── Why Timber 2+2 */}
      <ValuesGrid {...homeValues} />

      {/* 5 ── Built projects */}
      <ProjectGrid {...homeProjects} />

      {/* 6 ── Process timeline vertical */}
      <ProcessTimeline {...homeProcess} />

      {/* 7 ── FAQ preview + link spre pagina dedicată */}
      <FaqPreview {...homeFaq} />
      <div className="bg-white pb-16 flex justify-center">
        <Link href={homeFaqCta.href} className="btn-outline py-4 px-10">
          {homeFaqCta.label}
        </Link>
      </div>

      {/* 8 ── Final CTA */}
      <CtaBand {...homeCta} />
    </>
  );
}
