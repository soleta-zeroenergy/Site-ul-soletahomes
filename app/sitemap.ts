import type { MetadataRoute } from "next";
import { siteConfig }         from "@/lib/metadata";

const base = siteConfig.url;

/**
 * New-architecture routes only.
 * Old scaffold folders (about, architecture, awards, …) are excluded —
 * they do not have page.tsx files and should not be indexed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-03-12");

  return [
    /* ── Tier 1 — Homepage ───────────────────────────────────────────────── */
    {
      url:             base,
      lastModified,
      changeFrequency: "monthly",
      priority:        1.0,
    },

    /* ── Tier 2 — Core discovery & conversion routes ─────────────────────── */
    {
      url:             `${base}/discover-soleta`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.9,
    },
    {
      url:             `${base}/house-models`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.9,
    },
    {
      url:             `${base}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.9,
    },

    /* ── Tier 3 — Service & process pages ────────────────────────────────── */
    {
      url:             `${base}/build-with-us`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.8,
    },
    {
      url:             `${base}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.8,
    },

    /* ── Tier 4 — Audience & editorial pages ─────────────────────────────── */
    {
      url:             `${base}/professionals`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.7,
    },
    {
      url:             `${base}/inspiration`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.7,
    },

    /* ── Tier 5 — Informational & resource pages ─────────────────────────── */
    {
      url:             `${base}/sustainability-tech`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.6,
    },
    {
      url:             `${base}/support-resources`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.6,
    },
    {
      url:             `${base}/diy-e-shop`,
      lastModified,
      changeFrequency: "monthly",
      priority:        0.6,
    },
  ];
}
