import type { Metadata } from "next";
import { withCanonical } from "@/lib/seo";

export const metadata: Metadata = {
  ...withCanonical("/process"),
  title: "Process & Services | How We Work | Soleta",
  description:
    "Five stages from first conversation to handover — Dream, Design & Planning, Engineering, Build and Turnkey Delivery. One team, one process, start to finish.",
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
