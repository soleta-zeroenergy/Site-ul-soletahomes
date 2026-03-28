import type { Metadata } from "next";
import { ModelDetail } from "@/components/sections/ModelDetail";
import { largeFamilyModel } from "@/lib/content/collection-models";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  ...withCanonical("/collection/large-family"),
  title: "Large Family Homes | 4–7 Bedroom Timber Homes | Soleta",
  description:
    "Spacious timber homes for growing families — modular additions without demolition, multi-generational layouts and ZeroEnergy systems.",
};

export default function LargeFamilyPage() {
  return <ModelDetail model={largeFamilyModel} />;
}
