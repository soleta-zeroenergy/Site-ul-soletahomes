import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { AttributionCapture } from "@/components/AttributionCapture";
import { ConsentBanner } from "@/components/ConsentBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SoletaGroupBridge } from "@/components/sections/SoletaGroupBridge";
import { baseMetadata, siteConfig } from "@/lib/metadata";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  ...baseMetadata,
  verification: {
    google: 'u9lbFNIsVgO3qJCJnheNK4yS_rB9V5m41dirM1Te_Z0',
  },
  alternates: {
    canonical: 'https://soletahomes.com',
    languages: {
      'en': 'https://soletahomes.com',
      'x-default': 'https://soletahomes.com',
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo/soleta-logo-dark.svg`,
    width: 180,
    height: 48,
  },
  description: siteConfig.description,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "studio@soletahomes.com",
  },
  sameAs: [
    "https://soleta.ro",
  ],
  subOrganization: {
    "@type": "Organization",
    name: "Soleta House Plans",
    url: "https://soletahouseplans.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-[var(--soleta-bg)] text-[var(--soleta-ink)]">
        <ConsentBanner />
        <Header />
        <main className="min-h-screen" style={{ paddingTop: "var(--header-height)" }}>
          {children}
        </main>
        <AttributionCapture />
        <Analytics />
        <SoletaGroupBridge />
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
