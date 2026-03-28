import type { MetadataRoute } from "next";
import { siteConfig }         from "@/lib/metadata";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow:     "/",
        /* Disallow internal Next.js paths and any future API routes */
        disallow:  ["/api/", "/_next/", "/static/"],
      },
    ],
    sitemap:   `${siteConfig.url}/sitemap.xml`,
    host:      siteConfig.url,
  };
}
