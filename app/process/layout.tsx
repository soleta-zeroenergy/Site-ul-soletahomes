import type { Metadata } from "next";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  ...withCanonical("/process"),
  title: "Process & Services | How We Work | Soleta",
  description:
    "Five steps from first conversation to moving in. Three levels of service — Kit Only, Turnkey or Full Service. Building permits, interior design and aftercare.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
