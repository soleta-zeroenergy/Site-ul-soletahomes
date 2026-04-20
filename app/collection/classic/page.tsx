import type { Metadata } from "next";
import { FamilyPage } from "@/components/sections/FamilyPage";
import { classicModel } from "@/lib/content/collection-models";
import { withCanonical } from "@/lib/seo";
import { faqSchema, productSchema, breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/collection/classic"),
  title: "Classic Soleta Homes | Timber Frame Family Homes",
  description:
    "The most requested Soleta family of homes — generous proportions, enduring materials, and a design that feels naturally at home in any landscape.",
};

export default function ClassicPage() {
  const schemas = [
    productSchema({
      name:        "Classic Soleta Home",
      description: classicModel.subheading,
      image:       "https://soletahomes.com/images/Classic800x533.webp",
      url:         "https://soletahomes.com/collection/classic",
    }),
    faqSchema(classicModel.faq),
    breadcrumbSchema([
      { name: "Home",                 href: "/" },
      { name: "The Collection",       href: "/collection" },
      { name: "Classic Soleta Homes", href: "/collection/classic" },
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
      <FamilyPage model={classicModel} />
    </>
  );
}
