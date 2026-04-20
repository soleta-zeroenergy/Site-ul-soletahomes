import type { Metadata } from "next";
import { FamilyPage } from "@/components/sections/FamilyPage";
import { signatureModel } from "@/lib/content/collection-models";
import { withCanonical } from "@/lib/seo";
import { faqSchema, productSchema, breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/collection/signature"),
  title: "Signature Homes | Bespoke Timber Architecture | Soleta",
  description:
    "Landmark architecture for landmark sites. Every Signature home is a one-of-a-kind collaboration between client, site, and our design team.",
};

export default function SignaturePage() {
  const schemas = [
    productSchema({
      name:        "Signature Soleta Home",
      description: signatureModel.subheading,
      image:       "https://soletahomes.com/images/Signature800x533.webp",
      url:         "https://soletahomes.com/collection/signature",
    }),
    faqSchema(signatureModel.faq),
    breadcrumbSchema([
      { name: "Home",            href: "/" },
      { name: "The Collection",  href: "/collection" },
      { name: "Signature Homes", href: "/collection/signature" },
    ]),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <FamilyPage model={signatureModel} />
    </>
  );
}
