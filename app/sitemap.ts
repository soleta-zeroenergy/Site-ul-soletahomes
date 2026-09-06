import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";
import { journalArticles } from "@/lib/content/journal";
import { projects, projectHref } from "@/lib/content/built-projects";

const base = siteConfig.url;
const lastModified = new Date("2026-09-06");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Tier 1 — Homepage ──────────────────────────────────────────────── */
    { url: base, lastModified, changeFrequency: "monthly", priority: 1.0 },

    /* ── Tier 2 — Collection hub + models ──────────────────────────────── */
    { url: `${base}/collection`,                           lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/collection/classic`,                   lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/collection/signature`,                 lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/collection/holiday-retreat`,           lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/house-models`,                         lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/catalog`,                              lastModified, changeFrequency: "monthly", priority: 0.7 },

    /* ── Tier 2 — Built projects ────────────────────────────────────────── */
    /* educational-public and hospitality-resorts are excluded — those
       category pages are marked noindex (no projects yet). */
    { url: `${base}/built-projects`,                       lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/built-projects/private-residences`,    lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/built-projects/holiday-homes`,         lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/built-projects/case-studies`,          lastModified, changeFrequency: "monthly", priority: 0.75 },
    ...projects.map((p) => ({
      url:            `${base}${projectHref(p)}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority:        0.7,
    })),

    /* ── Tier 3 — Architecture & Design ────────────────────────────────── */
    { url: `${base}/architecture`,                         lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/architecture/design-language`,         lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/architecture/post-beam`,               lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/architecture/healthy-materials`,       lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/architecture/energy-zeroenergy`,       lastModified, changeFrequency: "monthly", priority: 0.8 },

    /* ── Tier 3 — Process & Services ───────────────────────────────────── */
    { url: `${base}/process`,                              lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/process/dream`,                        lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/process/design-planning`,              lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/process/engineering`,                  lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/process/build`,                        lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/process/turnkey`,                      lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/process/planning-budget`,              lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/process/international-delivery`,       lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services`,                             lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/private-consulting`,          lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/services/custom-design`,               lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/services/permits-legal`,               lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/interior-design`,             lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/aftercare`,                   lastModified, changeFrequency: "monthly", priority: 0.65 },

    /* ── Tier 3 — Conversion & discovery ─────────────────────────────────── */
    { url: `${base}/request-private-offer`,                lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`,                              lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/discover-soleta`,                      lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/build-with-us`,                        lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/inspiration`,                          lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/diy-e-shop`,                            lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/professionals`,                        lastModified, changeFrequency: "monthly", priority: 0.6 },

    /* ── Tier 3 — Journal ─────────────────────────────────────────────────── */
    { url: `${base}/journal`,                              lastModified, changeFrequency: "weekly", priority: 0.75 },
    ...journalArticles.map((a) => ({
      url:            `${base}/journal/${a.slug}`,
      lastModified:   new Date(a.publishedAt),
      changeFrequency: "yearly" as const,
      priority:        0.6,
    })),

    /* ── Tier 4 — About cluster ─────────────────────────────────────────── */
    { url: `${base}/about`,                                lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/sustainability`,                       lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/sustainability-tech`,                  lastModified, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/press`,                                lastModified, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/careers`,                              lastModified, changeFrequency: "monthly", priority: 0.6 },

    /* ── Tier 5 — Utility pages ─────────────────────────────────────────── */
    { url: `${base}/faq`,                                  lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/help-center`,                          lastModified, changeFrequency: "monthly", priority: 0.55 },
    { url: `${base}/support-resources`,                    lastModified, changeFrequency: "monthly", priority: 0.55 },
    { url: `${base}/privacy`,                              lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`,                                lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
