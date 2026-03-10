"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { topNav, type TopNavItem } from "@/lib/nav";
import { cn } from "@/lib/cn";
import { MobileDrawer } from "./MobileDrawer";

/* ─── Icons ──────────────────────────────────────────────────────────────── */
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
      className="ml-0.5 opacity-50"
      aria-hidden="true"
    >
      <path d="M3.5 1.5H1v6.5h6.5V5.5M5.5 1h2.5m0 0v2.5M7.5 1 4 4.5" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={cn(
        "ml-0.5 w-2.5 h-2.5 opacity-50 transition-transform duration-200",
        open && "rotate-180"
      )}
      fill="none"
      viewBox="0 0 10 10"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 3.5l3.5 3 3.5-3" />
    </svg>
  );
}

/* ─── Desktop menu panel ─────────────────────────────────────────────────── */
function MenuPanel({
  item,
  onMouseEnter,
  onMouseLeave,
  onClose,
}: {
  item: TopNavItem;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}) {
  if (item.type === "link") return null;

  return (
    <div
      className="absolute top-full inset-x-0 bg-stone-50 border-b border-stone-200 shadow-xl"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label={`${item.label} submenu`}
    >
      <div className="container-site py-8 pb-10">
        {item.type === "dropdown" && (
          <ul className="flex flex-col gap-0.5 w-52">
            {item.items.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm text-stone-600 hover:text-stone-900 py-1.5 transition-colors duration-150"
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {item.type === "mega" && (
          <div
            className={cn(
              "grid gap-x-16 gap-y-8",
              item.groups.length === 1 && "grid-cols-1 max-w-xs",
              item.groups.length === 2 && "grid-cols-2 max-w-lg",
              item.groups.length === 3 && "grid-cols-3 max-w-3xl",
              item.groups.length >= 4 && "grid-cols-4"
            )}
          >
            {item.groups.map((group) => (
              <div key={group.label}>
                {group.href ? (
                  <Link
                    href={group.href}
                    className="eyebrow mb-4 block hover:text-timber-600 transition-colors duration-150"
                    onClick={onClose}
                  >
                    {group.label}
                  </Link>
                ) : (
                  <p className="eyebrow mb-4">{group.label}</p>
                )}
                <ul className="space-y-2">
                  {group.items.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block text-sm text-stone-600 hover:text-stone-900 py-0.5 transition-colors duration-150"
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Header ─────────────────────────────────────────────────────────────── */
export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(null), 160);
  }, []);

  const openMenu = useCallback(
    (label: string) => {
      clearClose();
      setOpen(label);
    },
    [clearClose]
  );

  const closeMenu = useCallback(() => setOpen(null), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const activeItem = topNav.find((item) => item.label === open);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 h-20 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur-md">
        <div className="container-site h-full flex items-center gap-4">

          {/* ── Wordmark ── */}
          <Link
            href="/"
            className="flex-shrink-0 group mr-6"
            aria-label="Soleta Homes — home"
            onClick={closeMenu}
          >
            <span className="font-serif text-xl tracking-[0.12em] uppercase text-stone-900 group-hover:text-timber-600 transition-colors duration-200">
              Soleta
            </span>
          </Link>

          {/* ── Desktop nav ── */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex flex-1 items-stretch"
            onMouseLeave={scheduleClose}
          >
            {topNav.map((item) => {
              const isOpen = open === item.label;

              /* External link */
              if (item.type === "link" && item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 text-[11px] font-sans font-medium tracking-[0.12em] uppercase whitespace-nowrap h-full border-b-2 border-transparent text-stone-400 hover:text-stone-700 transition-colors duration-200"
                  >
                    {item.label}
                    <ExternalIcon />
                  </a>
                );
              }

              /* Internal simple link */
              if (item.type === "link") {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center px-3 text-[11px] font-sans font-medium tracking-[0.12em] uppercase whitespace-nowrap h-full border-b-2 border-transparent text-stone-500 hover:text-stone-900 hover:border-stone-300 transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                );
              }

              /* Dropdown / mega trigger */
              return (
                <button
                  key={item.label}
                  type="button"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  className={cn(
                    "flex items-center px-3 text-[11px] font-sans font-medium tracking-[0.12em] uppercase whitespace-nowrap h-full border-b-2 transition-colors duration-200",
                    isOpen
                      ? "text-stone-900 border-timber-500"
                      : "text-stone-500 border-transparent hover:text-stone-900 hover:border-stone-300"
                  )}
                  onMouseEnter={() => openMenu(item.label)}
                  onFocus={() => openMenu(item.label)}
                  onClick={() => (isOpen ? closeMenu() : openMenu(item.label))}
                >
                  {item.label}
                  <ChevronIcon open={isOpen} />
                </button>
              );
            })}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex flex-shrink-0 ml-auto">
            <Link
              href="/contact"
              className="btn-primary text-[10.5px] py-3 px-5 tracking-widest"
            >
              Request a Private Offer
            </Link>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            type="button"
            className="lg:hidden ml-auto p-2 text-stone-600 hover:text-stone-900 transition-colors"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="2" y1="6"  x2="20" y2="6" />
                <line x1="2" y1="11" x2="20" y2="11" />
                <line x1="2" y1="16" x2="14" y2="16" />
              </svg>
            )}
          </button>

        </div>

        {/* ── Desktop menu panel ── */}
        {activeItem && activeItem.type !== "link" && (
          <MenuPanel
            item={activeItem}
            onMouseEnter={clearClose}
            onMouseLeave={scheduleClose}
            onClose={closeMenu}
          />
        )}
      </header>

      {/* ── Mobile drawer ── */}
      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
