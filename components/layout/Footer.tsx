import Link from "next/link";
import { footerNav } from "@/lib/nav";
import { siteConfig } from "@/lib/metadata";

const currentYear = new Date().getFullYear();

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use",   href: "/terms" },
  { label: "Cookie Policy",  href: "/cookies" },
];

function ExternalIcon() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-1 opacity-40 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M3.5 1.5H1v6.5h6.5V5.5M5.5 1h2.5m0 0v2.5M7.5 1 4 4.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="container-site py-16 md:py-20">

        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-14">

          {/* Brand column */}
          <div className="lg:w-52 flex-shrink-0 space-y-4">
            <Link href="/" aria-label="Soleta Homes — home">
              <span className="font-serif text-2xl tracking-[0.12em] uppercase text-stone-900">
                Soleta
              </span>
            </Link>
            <p className="text-sm text-stone-500 leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation columns — 4 col grid */}
          <nav
            aria-label="Footer navigation"
            className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10"
          >
            {footerNav.map((col, i) => (
              <div key={i}>
                {col.heading && (
                  <p className="eyebrow mb-4">{col.heading}</p>
                )}
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-stone-500 hover:text-stone-900 transition-colors"
                        >
                          {link.label}
                          <ExternalIcon />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* CTA strip */}
        <div className="mt-14 pt-10 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-stone-900 mb-1">
              Ready to build your Soleta home?
            </p>
            <p className="text-xs text-stone-400">Private consultations · Worldwide delivery</p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0 text-xs py-3 px-6 tracking-widest">
            Request a Private Offer
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            &copy; {currentYear} Soleta Homes. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xs text-stone-400 hover:text-stone-600 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
