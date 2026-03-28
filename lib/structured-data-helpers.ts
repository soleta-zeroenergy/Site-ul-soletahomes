export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Soleta Homes",
    url: "https://soletahomes.com",
    logo: "https://soletahomes.com/logo/Sigla%20Verde%20%2318392B.png",
    foundingDate: "2013",
    founder: {
      "@type": "Person",
      name: "Cătălin Butmălai",
    },
    description:
      "Premium timber frame homes designed and built in Romania. ZeroEnergy architecture, natural materials, delivered across Europe.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RO",
    },
    sameAs: [
      "https://soleta.ro",
    ],
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function productSchema({
  name,
  description,
  image,
  url,
}: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    url,
    brand: {
      "@type": "Brand",
      name: "Soleta Homes",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://soletahomes.com${item.href}`,
    })),
  };
}
