import { CtaBand } from "@/components/sections/CtaBand";
export default function CareersPage() {
  return (
    <main className="page-top">
      <section className="section bg-[#faf8f6]">
        <div className="container-site">
          <p className="eyebrow mb-4">Careers</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.08 }}>
            Join the Soleta team
          </h1>
          <p className="subtitle mt-4 max-w-xl">
            We are always looking for talented architects, engineers and craftspeople who share our values. Send your portfolio and a short introduction to studio@soletahomes.com
          </p>
        </div>
      </section>
      <CtaBand
        heading="Get in touch"
        body="Send your CV and portfolio to studio@soletahomes.com"
        primaryCta={{ label: "Contact us", href: "/contact" }}
        theme="dark"
      />
    </main>
  );
}
