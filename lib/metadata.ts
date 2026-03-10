import type { Metadata } from "next";

export const siteConfig = {
  name: "Soleta Homes",
  tagline: "Architecture rooted in nature.",
  description:
    "Soleta designs premium timber homes where Scandinavian precision meets Mediterranean warmth. Bespoke architecture built to last generations.",
  url: "https://soletahomes.com",
  locale: "en_US",
  type: "website" as const,
  twitterHandle: "@soletahomes",
  ogImage: "/images/og-default.jpg",
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "timber architecture",
    "premium homes",
    "bespoke houses",
    "Scandinavian design",
    "Mediterranean architecture",
    "sustainable building",
    "wooden homes",
  ],
  authors: [{ name: "Soleta Homes", url: siteConfig.url }],
  creator: "Soleta Homes",
  openGraph: {
    type: siteConfig.type,
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    site: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
