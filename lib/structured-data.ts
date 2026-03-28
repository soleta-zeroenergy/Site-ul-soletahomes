import { siteConfig } from "@/lib/metadata";

const BASE = siteConfig.url;

/* ── Types ───────────────────────────────────────────────────────────────── */

export type Crumb = { name: string; path: string };
export type FaqEntry = { q: string; a: string };

export type ServiceOpts = {
  name:          string;
  description:   string;
  serviceType?:  string;
  /** pathname, e.g. "/discover-soleta" */
  path:          string;
  areaServed?:   string[];
};

/* ── BreadcrumbList ──────────────────────────────────────────────────────── */

/**
 * Returns a Schema.org BreadcrumbList object.
 * Always include the homepage as the first crumb.
 *
 * @example
 * breadcrumb([
 *   { name: "Home",           path: "/" },
 *   { name: "Discover Soleta", path: "/discover-soleta" },
 * ])
 */
export function breadcrumb(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type":   "ListItem",
      position:   i + 1,
      name:       crumb.name,
      item:       crumb.path === "/" ? BASE : `${BASE}${crumb.path}`,
    })),
  };
}

/* ── FAQPage ─────────────────────────────────────────────────────────────── */

/**
 * Returns a Schema.org FAQPage object.
 * Use factual, human-quality Q&A — no keyword stuffing.
 *
 * @example
 * faqPage([
 *   { q: "What is Soleta?", a: "Soleta is ..." },
 * ])
 */
export function faqPage(items: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type":    "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name:     item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text:    item.a,
      },
    })),
  };
}

/* ── Service ─────────────────────────────────────────────────────────────── */

/**
 * Returns a Schema.org Service object describing a Soleta offering.
 * Provider is always the Soleta Homes organisation.
 */
export function service(opts: ServiceOpts) {
  return {
    "@context":   "https://schema.org",
    "@type":      "Service",
    name:          opts.name,
    description:   opts.description,
    ...(opts.serviceType ? { serviceType: opts.serviceType } : {}),
    url:           `${BASE}${opts.path}`,
    provider: {
      "@type": "Organization",
      name:     siteConfig.name,
      url:      BASE,
    },
    ...(opts.areaServed ? { areaServed: opts.areaServed } : {}),
  };
}

/* ── Script helper ───────────────────────────────────────────────────────── */

/**
 * Returns JSX-ready props for a `<script type="application/ld+json">` element.
 *
 * @example
 * <script {...jsonLd(breadcrumb([...]))} />
 */
export function jsonLd(schema: object): {
  type: "application/ld+json";
  dangerouslySetInnerHTML: { __html: string };
} {
  return {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}
