import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Full-service timber home process — from concept to completion.",
};

export default function ServicesPage() {
  return (
    <section className="section container-site">
      <p className="eyebrow mb-6">What We Offer</p>
      <h1>Our services.</h1>
    </section>
  );
}
