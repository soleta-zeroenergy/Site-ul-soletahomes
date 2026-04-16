"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Self-contained floor plan thumbnail + full-screen modal.
 * Renders a clickable thumbnail; click opens the plan at full size.
 * Escape key or backdrop click closes the modal.
 */
export function FloorPlanModal({
  src,
  alt,
  label,
}: {
  src:    string;
  alt:    string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      {/* Thumbnail */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View floor plan${label ? `: ${label}` : ""} at full size`}
        className="group relative w-full overflow-hidden border border-[var(--color-border-light)] bg-[var(--soleta-cream)] transition-shadow duration-200 hover:shadow-md focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
      >
        <div className="relative aspect-[3/2] w-full">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4"
          />
        </div>
        {label && (
          <p className="border-t border-[var(--color-border-light)] px-4 py-2 text-center font-ui text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
            {label}
          </p>
        )}
        <span className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-1 font-ui text-[0.5625rem] font-medium uppercase tracking-[0.1em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Enlarge
        </span>
      </button>

      {/* Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white/70 transition-colors duration-200 hover:text-white"
            >
              Close ✕
            </button>
            <div className="relative aspect-[3/2] w-full bg-[var(--soleta-cream)]">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain p-6"
              />
            </div>
            {label && (
              <p className="mt-3 text-center font-ui text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-white/60">
                {label}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
