import Image from "next/image";
import Link from "next/link";
import { footerColumns, legalNav } from "@/lib/nav";

const footerLinkClass =
  "inline-flex items-center gap-1 font-ui text-sm font-medium text-soleta-cream/60 transition-colors duration-200 hover:text-soleta-cream";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--soleta-forest)",
        color: "var(--soleta-cream)",
      }}
    >
      <div className="container-site py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-5 lg:gap-8">
          <div className="col-span-1 mb-2 flex flex-col gap-6 sm:col-span-2 lg:col-span-2 lg:mb-0">
            <Link href="/" aria-label="Soleta Homes">
              <Image
                src="/logo/Soleta%20sigla%20text%20efe9e1.png"
                alt="Soleta Homes"
                width={180}
                height={46}
                className="h-9 w-auto"
              />
            </Link>
            <p
              className="max-w-[18rem] text-sm leading-relaxed text-soleta-cream/50"
            >
              Premium timber homes designed with precision and built to endure.
            </p>
          </div>

          {footerColumns.map((column, index) => (
            <div key={index} className="col-span-1">
              {column.heading && (
                <p
                  className="mb-5 font-ui text-[0.625rem] font-medium uppercase tracking-[0.2em] text-soleta-gold"
                >
                  {column.heading}
                </p>
              )}
              <ul className="flex flex-col gap-3">
                {column.links.map(({ label, href, external }) => (
                  <li key={`${index}-${href}`}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footerLinkClass}
                      >
                        {label}
                        <span
                          aria-hidden="true"
                          className="text-xs text-[var(--soleta-gold)]"
                        >
                          &nearr;
                        </span>
                      </a>
                    ) : (
                      <Link href={href} className={footerLinkClass}>
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Ecosystem row */}
      <div className="border-t border-soleta-gold/20">
        <div className="container-site py-8">
          <p
            className="font-ui text-[0.5rem] uppercase tracking-[0.14em] text-soleta-cream/30 mb-5"
          >
            Part of Soleta Group
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
            <div className="flex flex-col gap-2">
              <span className="font-ui text-xs font-medium tracking-wide text-soleta-cream/70">
                SoletaHomes.com
              </span>
              <p className="font-ui text-xs text-soleta-cream/40 leading-relaxed max-w-[36ch]">
                Premium timber homes. Private residential and landmark projects.
                Direct consultation, design-to-delivery. No online purchase.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-ui text-xs font-medium tracking-wide text-soleta-cream/70">
                SoletaHousePlans.com
              </span>
              <p className="font-ui text-xs text-soleta-cream/40 leading-relaxed max-w-[36ch]">
                House plans, kits, and assembly support. Public pricing and
                direct online purchase for smaller projects.
              </p>
              <a
                href="https://soletahouseplans.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui text-[0.625rem] uppercase tracking-[0.1em] text-soleta-cream/40 hover:text-soleta-cream/70 transition-colors duration-200 no-underline"
              >
                Visit ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-soleta-gold/20">
        <div className="container-site flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <p className="font-ui text-xs font-medium tracking-wide text-soleta-cream/50">
            &copy; {year} Soleta Homes. All rights reserved.
          </p>
          {legalNav.length > 0 && (
            <nav aria-label="Legal navigation">
              <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {legalNav.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-ui text-xs font-medium tracking-wide text-soleta-cream/50 transition-colors duration-200 hover:text-soleta-cream"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </footer>
  );
}
