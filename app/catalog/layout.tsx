import type { Metadata } from "next";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  ...withCanonical("/catalog"),
  title: "Download the Catalogue | Soleta Homes",
  description:
    "The complete Soleta catalogue — all models, specifications, materials, ZeroEnergy systems and pricing guide. Free download.",
};

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
