import Link from "next/link";
export default function HelpCenterPage() {
  return (
    <main className="page-top">
      <section className="section bg-[#faf8f6]">
        <div className="container-site">
          <p className="eyebrow mb-4">Help Center</p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.08 }}>
            How can we help?
          </h1>
          <p className="subtitle mt-4 max-w-xl">
            Find answers to common questions or get in touch with our team directly.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/faq" className="btn-primary py-4 px-9">Browse FAQ</Link>
            <Link href="/contact" className="btn-outline py-4 px-9">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
