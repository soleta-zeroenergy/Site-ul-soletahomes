"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { headerNav, type NavItem } from "@/lib/nav";

function isActive(href: string, pathname: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function hasActiveChild(item: NavItem, pathname: string): boolean {
  return (
    item.sections?.some((section) =>
      section.children.some((child) => isActive(child.href, pathname))
    ) ?? false
  );
}

function ExternalIndicator() {
  return (
    <span aria-hidden="true" className="text-[0.6rem] leading-none">
      ↗
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openDesktopSection, setOpenDesktopSection] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      setOpenDesktopSection(null);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSection(null);
    setOpenDesktopSection(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-[var(--soleta-cream)] transition-[border-color,box-shadow] duration-300",
          scrolled
            ? "border-soleta-gold/20 shadow-[0_2px_16px_0_rgb(30_27_22/0.07)]"
            : "border-transparent"
        )}
        style={{ height: "var(--header-height)" }}
      >
        <div className="container-site flex h-full items-center justify-between gap-6">
          <Link href="/" aria-label="Soleta Homes homepage" className="flex shrink-0 items-center gap-3">
            <Image
              src="/logo/Sigla%20Verde%20%2318392B.png"
              alt=""
              width={36}
              height={36}
              priority
              className="h-8 w-auto"
            />
            <Image
              src="/logo/Soleta%20sigla%20text%2018392b.png"
              alt="Soleta Homes"
              width={140}
              height={32}
              priority
              className="h-7 w-auto"
            />
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-7 lg:flex"
            onMouseLeave={() => setOpenDesktopSection(null)}
          >
            {headerNav.map((item, index) => {
              const active = isActive(item.href, pathname) || hasActiveChild(item, pathname);
              const hasDropdown = Boolean(item.sections?.length);
              const dropdownOpen = hasDropdown && openDesktopSection === index;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={hasDropdown ? () => setOpenDesktopSection(index) : undefined}
                  onMouseLeave={
                    hasDropdown
                      ? () =>
                          setOpenDesktopSection((current) => (current === index ? null : current))
                      : undefined
                  }
                  onFocusCapture={hasDropdown ? () => setOpenDesktopSection(index) : undefined}
                  onBlurCapture={
                    hasDropdown
                      ? (event) => {
                          const nextFocused = event.relatedTarget as Node | null;
                          if (!event.currentTarget.contains(nextFocused)) {
                            setOpenDesktopSection((current) => (current === index ? null : current));
                          }
                        }
                      : undefined
                  }
                >
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpenDesktopSection(null)}
                      className="flex items-center gap-1 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-[var(--soleta-ink)]/75 transition-colors duration-200 hover:text-[var(--soleta-ink)]"
                    >
                      {item.label}
                      <ExternalIndicator />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpenDesktopSection(null)}
                      className={cn(
                        "flex items-center gap-1 border-b font-ui pb-[2px] text-[0.6875rem] font-medium uppercase tracking-[0.1em] transition-colors duration-200",
                        active
                          ? "border-[var(--soleta-accent)] text-[var(--soleta-accent)]"
                          : "border-transparent text-[var(--soleta-ink)]/75 hover:text-[var(--soleta-ink)]"
                      )}
                    >
                      {item.label}
                      {hasDropdown && (
                        <svg
                          aria-hidden="true"
                          className={cn(
                            "h-3 w-3 opacity-40 transition-transform duration-200",
                            dropdownOpen && "rotate-180"
                          )}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                        </svg>
                      )}
                    </Link>
                  )}

                  {hasDropdown && (
                    <div
                      className={cn(
                        "absolute top-full pt-3",
                        item.sections!.length > 1 ? "left-1/2 -translate-x-1/2" : "left-0",
                        "invisible opacity-0 pointer-events-none transition-[opacity,visibility] duration-150",
                        dropdownOpen && "visible opacity-100 pointer-events-auto"
                      )}
                    >
                      <div
                        className={cn(
                          "border border-soleta-gold/25 bg-[var(--soleta-cream)] shadow-[0_8px_32px_0_rgb(30_27_22/0.10),0_2px_8px_0_rgb(30_27_22/0.05)]",
                          item.sections!.length > 1 && "flex"
                        )}
                      >
                        {item.sections!.map((section, sectionIndex) => (
                          <div
                            key={`${item.href}-${sectionIndex}`}
                            className={cn(
                              "py-4",
                              item.sections!.length > 1
                                ? "min-w-[190px] border-r border-soleta-gold/15 px-6 last:border-r-0"
                                : "min-w-[220px] px-5"
                            )}
                          >
                            {section.sectionLabel && (
                              <p className="mb-3 border-b border-soleta-gold/20 pb-2 font-ui text-[0.5625rem] font-medium uppercase tracking-[0.15em] text-[var(--soleta-accent)]">
                                {section.sectionLabel}
                              </p>
                            )}
                            <ul className="flex flex-col gap-[2px]">
                              {section.children.map((child) => (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={() => setOpenDesktopSection(null)}
                                    className={cn(
                                      "block px-2 py-[0.45rem] font-ui text-[0.75rem] tracking-[0.02em] transition-colors duration-150",
                                      isActive(child.href, pathname)
                                        ? "text-[var(--soleta-accent)]"
                                        : "text-[var(--soleta-ink)]/65 hover:bg-soleta-gold/8 hover:text-[var(--soleta-ink)]"
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-primary hidden px-7 py-[0.75rem] text-[0.625rem] lg:inline-flex"
            >
              Request a Private Offer
            </Link>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((value) => !value)}
              className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={cn(
                  "block h-px w-[22px] origin-center bg-[var(--soleta-ink)] transition-transform duration-200",
                  mobileOpen && "translate-y-[6px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-px w-[22px] bg-[var(--soleta-ink)] transition-opacity duration-200",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-px w-[22px] origin-center bg-[var(--soleta-ink)] transition-transform duration-200",
                  mobileOpen && "-translate-y-[6px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        aria-hidden={!mobileOpen}
        className={cn(
          "fixed inset-x-0 z-40 max-h-[calc(100dvh-var(--header-height))] overflow-y-auto border-b border-soleta-gold/20 bg-[var(--soleta-cream)] transition-[opacity,transform] duration-200 lg:hidden",
          mobileOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-1 opacity-0 pointer-events-none"
        )}
        style={{ top: "var(--header-height)" }}
      >
        <nav aria-label="Mobile primary navigation" className="container-site flex flex-col py-6">
          {headerNav.map((item, index) => {
            const active = isActive(item.href, pathname) || hasActiveChild(item, pathname);
            const hasDropdown = Boolean(item.sections?.length);
            const expanded = openSection === index;

            return (
              <div key={item.href} className="border-b border-soleta-gold/15">
                <div className="flex items-center justify-between">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center gap-1.5 py-4 font-ui text-[0.75rem] font-medium uppercase tracking-[0.1em] text-[var(--soleta-ink)]/75 transition-colors duration-200 hover:text-[var(--soleta-ink)]"
                    >
                      {item.label}
                      <ExternalIndicator />
                    </a>
                  ) : hasDropdown ? (
                    <button
                      type="button"
                      onClick={() => setOpenSection(expanded ? null : index)}
                      aria-expanded={expanded}
                      className={cn(
                        "flex flex-1 items-center justify-between py-4 font-ui text-left text-[0.75rem] font-medium uppercase tracking-[0.1em] transition-colors duration-200",
                        active
                          ? "text-[var(--soleta-accent)]"
                          : "text-[var(--soleta-ink)]/75 hover:text-[var(--soleta-ink)]"
                      )}
                    >
                      {item.label}
                      <svg
                        aria-hidden="true"
                        className={cn(
                          "h-4 w-4 opacity-35 transition-transform duration-200",
                          expanded && "rotate-180"
                        )}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex-1 py-4 font-ui text-[0.75rem] font-medium uppercase tracking-[0.1em] transition-colors duration-200",
                        active
                          ? "text-[var(--soleta-accent)]"
                          : "text-[var(--soleta-ink)]/75 hover:text-[var(--soleta-ink)]"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>

                {hasDropdown && expanded && (
                  <div className="flex flex-col gap-4 pb-4">
                    {item.sections!.map((section, sectionIndex) => (
                      <div key={`${item.href}-${sectionIndex}`}>
                        {section.sectionLabel && (
                          <p className="mb-2 mt-1 font-ui text-[0.5625rem] font-medium uppercase tracking-[0.15em] text-[var(--soleta-accent)]">
                            {section.sectionLabel}
                          </p>
                        )}
                        <ul className="flex flex-col gap-1 pl-2">
                          {section.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block py-[0.4rem] font-ui text-[0.8125rem] transition-colors duration-150",
                                  isActive(child.href, pathname)
                                    ? "text-[var(--soleta-accent)]"
                                    : "text-[var(--soleta-ink)]/55 hover:text-[var(--soleta-ink)]"
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="/contact"
            className="btn-primary mt-8 self-start px-8 py-4 text-[0.625rem]"
          >
            Request a Private Offer
          </Link>
        </nav>
      </div>

      {mobileOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-30 bg-[var(--soleta-ink)]/25 backdrop-blur-[2px] lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
