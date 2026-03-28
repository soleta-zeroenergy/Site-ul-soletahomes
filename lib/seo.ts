import type { Metadata } from "next";
import { siteConfig }    from "@/lib/metadata";

/* ── Canonical URL ───────────────────────────────────────────────────────── */

/** Absolute URL for a given pathname (e.g. "/discover-soleta") */
export function canonicalUrl(path: string): string {
  const normalized = path === "/" ? "" : path;
  return `${siteConfig.url}${normalized}`;
}

/**
 * Returns a partial Metadata object with `alternates.canonical` set.
 * Spread into any page's exported `metadata` const.
 *
 * @example
 * export const metadata: Metadata = {
 *   ...withCanonical("/services"),
 *   title:       "Services",
 *   description: "...",
 * };
 */
export function withCanonical(path: string): Pick<Metadata, "alternates"> {
  return {
    alternates: { canonical: canonicalUrl(path) },
  };
}

/* ── Per-page metadata builder ───────────────────────────────────────────── */

/**
 * Builds a complete per-page Metadata object with title, description,
 * canonical URL, and matching Open Graph / Twitter card overrides.
 *
 * @example
 * export const metadata = pageMetadata({
 *   title:       "Build With Us",
 *   description: "Five clear stages...",
 *   path:        "/build-with-us",
 * });
 */
export function pageMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title:        string;
  description:  string;
  path:         string;
  /** Absolute path from /public — defaults to site OG image */
  ogImage?:     string;
}): Metadata {
  const url   = canonicalUrl(path);
  const image = ogImage ?? siteConfig.ogImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card:        "summary_large_image",
      title,
      description,
      images:      [image],
    },
  };
}

/* ── Re-exports for convenience ─────────────────────────────────────────── */
export { siteConfig } from "@/lib/metadata";
