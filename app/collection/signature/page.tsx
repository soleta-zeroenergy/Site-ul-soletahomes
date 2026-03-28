import type { Metadata } from "next";
import { ModelDetail } from "@/components/sections/ModelDetail";
import { signatureModel } from "@/lib/content/collection-models";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  ...withCanonical("/collection/signature"),
  title: "Signature Homes | Bespoke Timber Architecture | Soleta",
  description:
    "Landmark architecture for landmark sites. Every Signature home is a one-of-a-kind collaboration between client, site and our design team.",
};

export default function SignaturePage() {
  return <ModelDetail model={signatureModel} />;
}
