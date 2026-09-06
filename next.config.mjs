/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "img.soletahomes.com",
      },
    ],
  },
  async redirects() {
    return [
      // Old flat /built-projects/[slug] routes -> new canonical nested routes.
      // These three slugs existed before the routing restructure.
      {
        source:      "/built-projects/haus-tegernsee",
        destination: "/built-projects/private-residences/haus-tegernsee",
        permanent:   true,
      },
      // villa-falaise and worthersee-lodge: no project with a matching slug
      // or title exists anywhere in lib/content/built-projects.ts (checked
      // against all 9 current entries by slug and title). The original
      // content behind these two legacy URLs is gone, not renamed, so there
      // is no specific project page to point to. Redirecting to the
      // built-projects hub — the closest still-relevant destination for
      // anyone following an old bookmark/backlink to a "built project" URL
      // — instead of letting them 404 outright. See OWNER note: if the real
      // destination project is identified, point these at its actual slug
      // instead.
      {
        source:      "/built-projects/villa-falaise",
        destination: "/built-projects",
        permanent:   true,
      },
      {
        source:      "/built-projects/worthersee-lodge",
        destination: "/built-projects",
        permanent:   true,
      },
      // Legacy collection paths removed from public navigation.
      // Redirect to the closest active public collection path.
      {
        source:      "/collection/custom-architecture",
        destination: "/collection/signature",
        permanent:   true,
      },
      {
        source:      "/collection/large-family",
        destination: "/collection",
        permanent:   true,
      },
    ];
  },
};

export default nextConfig;

