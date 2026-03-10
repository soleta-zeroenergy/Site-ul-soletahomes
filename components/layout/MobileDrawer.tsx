"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { topNav } from "@/lib/nav";
import { cn } from "@/lib/cn";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

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
      className="ml-1 opacity-50 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M3.5 1.5H1v6.5h6.5V5.5M5.5 1h2.5m0 0v2.5M7.5 1 4 4.5" />
    </svg>
  );
}

export function MobileDrawer({ isOpen, onClose }: Props) {
  const [expanded, setExpanded] = useState<string[]>([]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setExpanded([]);
  }, [isOpen]);

  const toggle = (label: string) =>
    setExpanded((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-stone-900/40 lg:hidden"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[90vw] bg-stone-50 shadow-2xl lg:hidden flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-stone-200 flex-shrink-0">
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.12em] uppercase text-stone-900 hover:text-timber-600 transition-colors"
            onClick={onClose}
          >
            Soleta
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <line x1="3" y1="3" x2="17" y2="17" />
              <line x1="17" y1="3" x2="3" y2="17" />
            </svg>
          </button>
        </div>

        {/* Nav list */}
        <nav className="flex-1 overflow-y-auto px-5 py-3" aria-label="Mobile navigation">
          {topNav.map((item) => {
            /* External link */
            if (item.type === "link" && item.external) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-3 text-sm font-medium text-stone-500 border-b border-stone-100 hover:text-stone-800 transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                  <ExternalIcon />
                </a>
              );
            }

            /* Simple internal link */
            if (item.type === "link") {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center py-3 text-sm font-medium text-stone-800 border-b border-stone-100 hover:text-timber-600 transition-colors"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              );
            }

            const isExpanded = expanded.includes(item.label);

            /* Flatten all child links for the accordion body */
            const flatLinks =
              item.type === "dropdown"
                ? item.items
                : item.groups.flatMap((g) => [
                    ...(g.href ? [{ label: g.label, href: g.href, external: false }] : []),
                    ...g.items,
                  ]);

            return (
              <div key={item.label} className="border-b border-stone-100">
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-stone-800 hover:text-timber-600 transition-colors text-left"
                  onClick={() => toggle(item.label)}
                >
                  <span>{item.label}</span>
                  <svg
                    className={cn(
                      "w-4 h-4 flex-shrink-0 transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )}
                    fill="none"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l5 5 5-5" />
                  </svg>
                </button>

                {isExpanded && (
                  <div className="pb-3">
                    {item.type === "mega" ? (
                      item.groups.map((group) => (
                        <div key={group.label} className="mt-2">
                          {group.href ? (
                            <Link
                              href={group.href}
                              className="eyebrow block px-3 py-1 hover:text-timber-600 transition-colors"
                              onClick={onClose}
                            >
                              {group.label}
                            </Link>
                          ) : (
                            <p className="eyebrow px-3 py-1">{group.label}</p>
                          )}
                          <ul>
                            {group.items.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="block pl-6 pr-3 py-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors"
                                  onClick={onClose}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))
                    ) : (
                      <ul>
                        {flatLinks.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block pl-4 pr-3 py-1.5 text-sm text-stone-500 hover:text-stone-900 transition-colors"
                              onClick={onClose}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="px-5 py-6 border-t border-stone-200 flex-shrink-0">
          <Link href="/contact" className="btn-primary w-full justify-center" onClick={onClose}>
            Request a Private Offer
          </Link>
        </div>
      </div>
    </>
  );
}
