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
      // Old flat /built-projects/[slug] routes → new canonical nested routes.
      // These three slugs existed before the routing restructure.
      {
        source:      "/built-projects/villa-falaise",
        destination: "/built-projects/private-residences/villa-falaise",
        permanent:   true,
      },
      {
        source:      "/built-projects/haus-tegernsee",
        destination: "/built-projects/private-residences/haus-tegernsee",
        permanent:   true,
      },
      {
        source:      "/built-projects/worthersee-lodge",
        destination: "/built-projects/holiday-homes/worthersee-lodge",
        permanent:   true,
      },
      // Custom Architecture merged into Soleta Signature
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

