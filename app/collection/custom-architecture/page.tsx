import type { Metadata } from "next";
import { ModelDetail } from "@/components/sections/ModelDetail";
import { customArchModel } from "@/lib/content/collection-models";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  ...withCanonical("/collection/custom-architecture"),
  title: "Custom Architecture | Bespoke Timber Homes | Soleta",
  description:
    "Bring your own architect's design or start with a brief. We manufacture and assemble any timber-frame architecture to the highest standard.",
};

export default function CustomArchPage() {
  return <ModelDetail model={customArchModel} />;
}
