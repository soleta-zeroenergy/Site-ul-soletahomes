import type { Metadata } from "next";

export const siteConfig = {
  name:        "Soleta Homes",
  tagline:     "Homes of enduring craft.",
  description:
    "Soleta designs premium timber homes where precise craftsmanship meets warm, natural living. Bespoke architecture built to last generations.",
  url:            "https://soletahomes.com",
  locale:         "en_US",
  type:           "website",
  twitterHandle:  "@soletahomes",
  ogImage:        "/images/og-default.jpg",
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:  `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "timber homes",
    "premium architecture",
    "bespoke houses",
    "luxury timber construction",
    "custom home design",
    "sustainable timber",
    "natural materials architecture",
    "wooden homes Europe",
  ],
  authors: [{ name: "Soleta Homes", url: siteConfig.url }],
  creator: "Soleta Homes",
  openGraph: {
    type:        siteConfig.type,
    locale:      siteConfig.locale,
    url:         siteConfig.url,
    title:       siteConfig.name,
    description: siteConfig.description,
    siteName:    siteConfig.name,
    images: [
      {
        url:    siteConfig.ogImage,
        width:  1200,
        height: 630,
        alt:    `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       siteConfig.name,
    description: siteConfig.description,
    site:        siteConfig.twitterHandle,
    images:      [siteConfig.ogImage],
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                true,
      follow:               true,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },
};
