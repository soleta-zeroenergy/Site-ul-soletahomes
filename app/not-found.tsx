import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-[#1a1714] flex items-center justify-center px-5">
      <div className="text-center max-w-md">

        <p
          className="text-[#806754] mb-8"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          404
        </p>

        <h1
          className="text-[#faf8f6] mb-6"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
        >
          Page not found
        </h1>

        <p
          className="text-[#8a7e76] mb-12 leading-relaxed"
          style={{
            fontFamily: "var(--font-subtitle)",
            fontSize: "1.0625rem",
          }}
        >
          The page you are looking for may have moved or no longer exists.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/" className="btn-inverse py-4 px-9">
            Return home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.15em] uppercase text-[#c8bfb8] hover:text-[#faf8f6] transition-colors duration-200"
          >
            Contact us
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
