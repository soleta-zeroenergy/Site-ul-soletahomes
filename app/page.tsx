import type { Metadata } from "next";
import { Hero }           from "@/components/sections/Hero";
import { FeatureSplit }   from "@/components/sections/FeatureSplit";
import { CardGrid }       from "@/components/sections/CardGrid";
import { ValuesGrid }     from "@/components/sections/ValuesGrid";
import { ProjectGrid }    from "@/components/sections/ProjectGrid";
import { SpecStrip }      from "@/components/sections/SpecStrip";
import { FaqPreview }     from "@/components/sections/FaqPreview";
import { CtaBand }        from "@/components/sections/CtaBand";
import {
  homeHero,
  homeManifesto,
  homeCollection,
  homeValues,
  homeProjects,
  homeProcess,
  homeFaq,
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
            founder: {
              "@type": "Person",
              name: "Cătălin Butmălai",
            },
          },
        })}}
      />

      {/* 1 ── Hero */}
      <Hero {...homeHero} />

      {/* 2 ── Manifesto */}
      <FeatureSplit {...homeManifesto} />

      {/* 3 ── Collection */}
      <CardGrid {...homeCollection} />

      {/* 4 ── Why Timber + ZeroEnergy */}
      <ValuesGrid {...homeValues} />

      {/* 5 ── Built projects */}
      <ProjectGrid {...homeProjects} />

      {/* 6 ── Process */}
      <SpecStrip {...homeProcess} />

      {/* 7 ── FAQ */}
      <FaqPreview {...homeFaq} />

      {/* 8 ── Final CTA */}
      <CtaBand {...homeCta} />
    </>
  );
}