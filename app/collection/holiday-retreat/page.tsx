import type { Metadata } from "next";
import { ModelDetail } from "@/components/sections/ModelDetail";
import { holidayRetreatModel } from "@/lib/content/collection-models";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  ...withCanonical("/collection/holiday-retreat"),
  title: "Holiday & Retreat Homes | Timber Cabins & Lodges | Soleta",
  description:
    "Compact timber homes for rest, nature and honest connection to the landscape. Ground screw foundations — relocatable. ZeroEnergy option.",
};

export default function HolidayRetreatPage() {
  return <ModelDetail model={holidayRetreatModel} />;
}
