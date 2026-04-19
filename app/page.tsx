import type { Metadata } from "next";
import Link from "next/link";
import { Hero }            from "@/components/sections/Hero";
import { FeatureSplit }    from "@/components/sections/FeatureSplit";
import Image              from "next/image";
import { ProjectGrid }     from "@/components/sections/ProjectGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FaqPreview }      from "@/components/sections/FaqPreview";
import { CtaBand }         from "@/components/sections/CtaBand";
import {
  homeHero,
  homeProofStrip,
  homeManifesto,
  homeCollection,
  homeValues,
  homeProjects,
  homeWhoWeWorkWith,
  homeProcess,
  homeProcessCta,
  homeDesignBridge,
  homeFaq,
  homeFaqCta,
  homeCta,
  homeCtaTextLink,
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

      {/* 2 ── Proof strip */}
      <section className="bg-[#1a1714] py-6">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {homeProofStrip.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-5 shrink-0 bg-brand-400" />
                <span
                  className="font-ui text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-[#c8bfb8]"
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 ── Manifesto */}
      <FeatureSplit {...homeManifesto} />

      {/* 4 ── Collection preview */}
      <section className="section bg-[#faf8f6]">
        <div className="container-site">
          <div className="mb-14 max-w-2xl">
            <p className="eyebrow mb-4 text-brand-500">{homeCollection.eyebrow}</p>
            <h2
              className="text-[#1a1714] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.12, letterSpacing: "0.02em" }}
            >
              {homeCollection.heading}
            </h2>
            <p className="text-[#4a4440] leading-relaxed" style={{ fontFamily: "var(--font-subtitle)", fontSize: "1.125rem" }}>
              {homeCollection.body}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-sand-400 bg-sand-400 sm:grid-cols-2">
            {homeCollection.cards.map((card) => (
              <Link
                key={card.href}
                href={card.href!}
                className="group flex flex-col overflow-hidden bg-white"
              >
                <div className="relative aspect-[3/2] overflow-hidden bg-[#ece9e5]">
                  {card.imageSrc && (
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt ?? card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="flex flex-col flex-1 p-6 gap-3">
                  {card.eyebrow && (
                    <p className="eyebrow text-brand-500">{card.eyebrow}</p>
                  )}
                  <h3
                    className="text-[#1a1714]"
                    style={{ fontSize: "1.125rem", lineHeight: 1.3, letterSpacing: "0.02em", fontFamily: "var(--font-heading)" }}
                  >
                    {card.title}
                  </h3>
                  {card.body && (
                    <p className="text-sm leading-relaxed flex-1 text-[#6b5d56]">{card.body}</p>
                  )}
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-flex items-center gap-1.5 text-[0.625rem] font-medium tracking-[0.14em] uppercase text-brand-500"
                  >
                    {card.cta ?? "Discover"} →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {homeCollection.cta && (
            <div className="mt-12 flex justify-center">
              <Link href={homeCollection.cta.href} className="btn-outline py-4 px-10">
                {homeCollection.cta.label}
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* 5 ── Why Timber */}
      <section className="py-14 lg:py-20 bg-white overflow-hidden">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">

            {/* Left — full portrait image at native 1000×1450 proportions, no crop */}
            <Image
              src="https://img.soletahomes.com/sh-home-why-timber-03-1000x1450-.webp"
              alt="Soleta timber home interior"
              width={1000}
              height={1450}
              className="w-full h-auto"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Right — full content stack: eyebrow + heading + body + 2×2 grid */}
            <div className="flex flex-col justify-center gap-8">
              {/* Header block */}
              <div className="flex flex-col gap-4">
                <p className="eyebrow text-brand-500">{homeValues.eyebrow}</p>
                <h2
                  className="text-[#1a1714]"
                  style={{
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    lineHeight: 1.1,
                    letterSpacing: "0.02em",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {homeValues.heading!.split("\n").map((line, i) => (
                    <span key={i}>{i > 0 && <br />}{line}</span>
                  ))}
                </h2>
                <p
                  className="leading-relaxed text-[#4a4440]"
                  style={{ fontFamily: "var(--font-subtitle)", fontSize: "clamp(1rem, 1.2vw, 1.125rem)" }}
                >
                  {homeValues.body}
                </p>
              </div>
              {/* 2×2 benefit grid */}
              <div className="grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2">
                {homeValues.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 border-t border-sand-400 pt-6 pb-7"
                  >
                    <div aria-hidden="true" className="w-6 h-px mb-1 bg-brand-500" />
                    <h3
                      className="text-[#1a1714]"
                      style={{
                        fontSize: "1.0625rem",
                        lineHeight: 1.3,
                        letterSpacing: "0.02em",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#6b5d56]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6 ── Built Projects */}
      <ProjectGrid {...homeProjects} />

      {/* 7 ── Who We Work With */}
      <section className="section bg-[#faf8f6]">
        <div className="container-site">
          <div className="mb-12 max-w-xl">
            <p className="eyebrow mb-4 text-brand-500">{homeWhoWeWorkWith.eyebrow}</p>
            <h2
              className="text-[#1a1714]"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                lineHeight: 1.1,
                letterSpacing: "0.02em",
              }}
            >
              {homeWhoWeWorkWith.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-sand-400 border border-sand-400 sm:grid-cols-2 lg:grid-cols-4">
            {homeWhoWeWorkWith.blocks.map((block) => (
              <Link
                key={block.href}
                href={block.href}
                className="group flex flex-col gap-4 bg-[#faf8f6] p-8 transition-colors duration-200 hover:bg-white"
              >
                <h3
                  className="text-[#1a1714]"
                  style={{
                    fontSize: "1.0625rem",
                    lineHeight: 1.3,
                    letterSpacing: "0.02em",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {block.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-[#6b5d56]">
                  {block.body}
                </p>
                <span className="inline-flex items-center gap-1.5 font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-brand-500 transition-transform duration-200 group-hover:translate-x-1">
                  View projects →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link href={homeWhoWeWorkWith.cta.href} className="btn-outline py-4 px-10">
              {homeWhoWeWorkWith.cta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* 8 ── How We Work */}
      <ProcessTimeline {...homeProcess} />
      <div className="bg-[#faf8f6] pb-16 flex justify-center">
        <Link href={homeProcessCta.href} className="btn-outline py-4 px-10">
          {homeProcessCta.label}
        </Link>
      </div>

      {/* 9 ── Design & Construction bridge */}
      <section className="section bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

            <div>
              <p className="eyebrow mb-4 text-brand-500">{homeDesignBridge.eyebrow}</p>
              <h2
                className="mb-6 text-[#1a1714]"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  lineHeight: 1.1,
                  letterSpacing: "0.02em",
                }}
              >
                {homeDesignBridge.heading}
              </h2>
              <p
                className="leading-relaxed text-[#4a4440]"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)",
                }}
              >
                {homeDesignBridge.body}
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-6 text-brand-500">Learn more</p>
              <nav aria-label="Design and construction topics">
                <ul className="flex flex-col divide-y divide-sand-400">
                  {homeDesignBridge.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-4 font-ui text-sm text-[#1a1714] transition-colors duration-200 hover:text-brand-500"
                      >
                        {link.label}
                        <span aria-hidden="true" className="text-brand-500">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </section>

      {/* 10 ── FAQ preview */}
      <FaqPreview {...homeFaq} />
      <div className="bg-white pb-16 flex justify-center">
        <Link href={homeFaqCta.href} className="btn-outline py-4 px-10">
          {homeFaqCta.label}
        </Link>
      </div>

      {/* 11 ── Final CTA */}
      <CtaBand {...homeCta} />
      <div className="bg-[#1a1714] pb-10 flex justify-center">
        <Link
          href={homeCtaTextLink.href}
          className="font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-[#9a8e87] transition-colors duration-200 hover:text-[#c8bfb8]"
        >
          {homeCtaTextLink.label} →
        </Link>
      </div>
    </>
  );
}
