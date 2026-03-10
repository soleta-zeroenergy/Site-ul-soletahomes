import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Soleta team about your project.",
};

export default function ContactPage() {
  return (
    <section className="section container-site">
      <p className="eyebrow mb-6">Get In Touch</p>
      <h1>Start a conversation.</h1>
    </section>
  );
}
