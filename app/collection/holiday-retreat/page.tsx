import type { Metadata } from "next";
import { FamilyPage } from "@/components/sections/FamilyPage";
import { holidayRetreatModel } from "@/lib/content/collection-models";
import { withCanonical } from "@/lib/seo";
import { faqSchema, productSchema, breadcrumbSchema } from "@/lib/structured-data-helpers";

export const metadata: Metadata = {
  ...withCanonical("/collection/holiday-retreat"),
  title: "Holiday & Retreat Homes | Timber Cabins & Lodges | Soleta",
  description:
    "Compact timber homes for rest, nature and honest connection to the landscape. Ground screw foundations — relocatable. ZeroEnergy option.",
};

export default function HolidayRetreatPage() {
  const schemas = [
    productSchema({
      name:        "Holiday & Retreat Homes",
      description: holidayRetreatModel.subheading,
      image:       "https://soletahomes.com/images/Retreat800x533.webp",
      url:         "https://soletahomes.com/collection/holiday-retreat",
    }),
    faqSchema(holidayRetreatModel.faq),
    breadcrumbSchema([
      { name: "Home",                       href: "/" },
      { name: "The Collection",             href: "/collection" },
      { name: "Holiday & Retreat Homes",    href: "/collection/holiday-retreat" },
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
      <FamilyPage model={holidayRetreatModel} />
    </>
  );
}
