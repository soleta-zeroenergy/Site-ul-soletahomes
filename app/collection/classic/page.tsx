import type { Metadata } from "next";
import { ModelDetail } from "@/components/sections/ModelDetail";
import { classicModel } from "@/lib/content/collection-models";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  ...withCanonical("/collection/classic"),
  title: "Classic Soleta Homes | Timber Frame Family Homes",
  description:
    "The most requested Soleta home — generous proportions, enduring materials and a design that belongs in any landscape. From €X.",
};

export default function ClassicPage() {
  return <ModelDetail model={classicModel} />;
}
