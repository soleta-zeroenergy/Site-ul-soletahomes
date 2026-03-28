import type { Metadata } from "next";
import { Fragment }      from "react";
import { Hero }          from "@/components/sections/Hero";
import { CardGrid }      from "@/components/sections/CardGrid";
import { ProjectGrid }   from "@/components/sections/ProjectGrid";
import { CtaBand }       from "@/components/sections/CtaBand";
import {
  homeHero,
  homeCollection,
  homeProjects,
  homeBadges,
  homeCta,
} from "@/lib/content/home";
import { withCanonical, siteConfig } from "@/lib/seo";

/* ── Page metadata ─────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  ...withCanonical("/"),
  description: siteConfig.description,
};

/* ── WebSite JSON-LD ─────────────────────────────────────────────────────── */

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

      {/* 1 ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero {...homeHero} />

      {/* 2 ── Collection preview ───────────────────────────────────────────── */}
      <CardGrid {...homeCollection} />

      {/* 3 ── Built projects preview ───────────────────────────────────────── */}
      <ProjectGrid {...homeProjects} />

      {/* 4 ── Proof band ───────────────────────────────────────────────────── */}
      <div className="border-y border-sand-400 bg-white py-11">
        <div className="container-site">
          <ul className="flex flex-wrap items-center justify-center">
            {homeBadges.map((badge, i) => (
              <Fragment key={badge}>
                <li className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase text-[#5a524c] px-8">
                  {badge}
                </li>
                {i < homeBadges.length - 1 && (
                  <li aria-hidden="true" className="w-[3px] h-[3px] rounded-full bg-sand-400 shrink-0" />
                )}
              </Fragment>
            ))}
          </ul>
        </div>
      </div>

      {/* 5 ── Final CTA band ───────────────────────────────────────────────── */}
      <CtaBand {...homeCta} />
    </>
  );
}
