import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

const base = siteConfig.url;
const lastModified = new Date("2026-03-27");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Tier 1 — Homepage ──────────────────────────────────────────────── */
    { url: base, lastModified, changeFrequency: "monthly", priority: 1.0 },

    /* ── Tier 2 — Collection hub + models ──────────────────────────────── */
    { url: `${base}/collection`,                           lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/collection/classic`,                   lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/collection/signature`,                 lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/collection/large-family`,              lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/collection/holiday-retreat`,           lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/collection/custom-architecture`,       lastModified, changeFrequency: "monthly", priority: 0.85 },

    /* ── Tier 2 — Built projects ────────────────────────────────────────── */
    { url: `${base}/built-projects`,                       lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/built-projects/private-residences`,    lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/built-projects/holiday-homes`,         lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/built-projects/hospitality-resorts`,   lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/built-projects/educational-public`,    lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/built-projects/case-studies`,          lastModified, changeFrequency: "monthly", priority: 0.75 },

    /* ── Tier 3 — Architecture & Design ────────────────────────────────── */
    { url: `${base}/architecture`,                         lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/architecture/design-language`,         lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/architecture/post-beam`,               lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/architecture/healthy-materials`,       lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/architecture/energy-zeroenergy`,       lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/architecture/certifications`,          lastModified, changeFrequency: "monthly", priority: 0.7 },

    /* ── Tier 3 — Process & Services ───────────────────────────────────── */
    { url: `${base}/process`,                              lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services`,                             lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/services/private-consulting`,          lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/services/custom-design`,               lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/services/permits-legal`,               lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/interior-design`,             lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services/aftercare`,                   lastModified, changeFrequency: "monthly", priority: 0.65 },

    /* ── Tier 4 — About cluster ─────────────────────────────────────────── */
    { url: `${base}/about`,                                lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/sustainability`,                       lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/press`,                                lastModified, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/careers`,                              lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/awards`,                               lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/investors`,                            lastModified, changeFrequency: "monthly", priority: 0.55 },

    /* ── Tier 4 — Country landing pages ────────────────────────────────── */
    { url: `${base}/country/germany`,                      lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/country/france`,                       lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/country/austria`,                      lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/country/switzerland`,                  lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/country/italy`,                        lastModified, changeFrequency: "monthly", priority: 0.7 },

    /* ── Tier 5 — Utility pages ─────────────────────────────────────────── */
    { url: `${base}/contact`,                              lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/catalog`,                              lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/help-center`,                          lastModified, changeFrequency: "monthly", priority: 0.55 },
  ];
}
