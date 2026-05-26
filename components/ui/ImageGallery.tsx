"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type GalleryImage = { src: string; alt?: string };

/**
 * Editorial image gallery: full-width lead image + horizontal thumbnail strip.
 * Clicking any image opens a full-screen lightbox — fixed overlay, dark backdrop,
 * object-contain sizing, visible controls, thumbnail rail, keyboard navigation.
 */
export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, close, prev, next]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  if (!images || images.length === 0) return null;

  const lead   = images[0];
  const thumbs = images.slice(1);

  return (
    <>
      {/* ── In-page gallery ─────────────────────────────────────────────── */}
      <div className="flex flex-col gap-2">

        {/* Lead image */}
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          aria-label={`View image at full size${lead.alt ? `: ${lead.alt}` : ""}`}
          className="group relative w-full overflow-hidden border border-[var(--color-border-light)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={lead.src}
              alt={lead.alt ?? ""}
              fill
              sizes="(max-width: 1024px) 100vw, 72rem"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-1 font-ui text-[0.5625rem] font-medium uppercase tracking-[0.1em] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          >
            Enlarge
          </span>
        </button>

        {/* Thumbnail strip — horizontal scroll, never wraps */}
        {thumbs.length > 0 && (
          <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {thumbs.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightboxIndex(i + 1)}
                aria-label={`View image ${i + 2} at full size${img.alt ? `: ${img.alt}` : ""}`}
                className="group relative shrink-0 overflow-hidden border border-[var(--color-border-light)] focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
              >
                <div className="relative h-[72px] w-[108px]">
                  <Image
                    src={img.src}
                    alt={img.alt ?? ""}
                    fill
                    sizes="108px"
                    className="object-cover transition-opacity duration-200 group-hover:opacity-75"
                  />
                </div>
              </button>
            ))}
          </div>
        )}

      </div>

      {/* ── Lightbox ────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ backgroundColor: "rgba(18, 15, 12, 0.94)" }}
          onClick={close}
        >
          {/* Close button — top-right, always visible */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded bg-white/10 px-3 py-1.5 font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-white transition-colors duration-150 hover:bg-white/20"
          >
            Close <span aria-hidden="true" className="text-[0.875rem] leading-none">✕</span>
          </button>

          {/* Image area — stops click-to-close propagation */}
          <div
            className="flex w-full flex-col items-center gap-4 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main image — no fixed aspect ratio; constrained by max-w / max-h */}
            <div
              className="relative flex items-center justify-center"
              style={{ width: "90vw", maxWidth: "1100px", maxHeight: "82vh" }}
            >
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt ?? ""}
                width={1800}
                height={1200}
                className="object-contain"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "82vh",
                  width: "auto",
                  height: "auto",
                }}
                sizes="90vw"
                priority
              />
            </div>

            {/* Navigation row */}
            {images.length > 1 && (
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="flex items-center gap-2 rounded bg-white/10 px-4 py-2 font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-white transition-colors duration-150 hover:bg-white/20"
                >
                  <span aria-hidden="true">←</span> Prev
                </button>

                <span className="font-ui text-[0.5625rem] tabular-nums text-white/50">
                  {lightboxIndex + 1} / {images.length}
                </span>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="flex items-center gap-2 rounded bg-white/10 px-4 py-2 font-ui text-[0.625rem] font-medium uppercase tracking-[0.14em] text-white transition-colors duration-150 hover:bg-white/20"
                >
                  Next <span aria-hidden="true">→</span>
                </button>
              </div>
            )}

            {/* Thumbnail rail — horizontal scroll, never wraps */}
            {images.length > 1 && (
              <div className="flex flex-nowrap gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Go to image ${i + 1}${img.alt ? `: ${img.alt}` : ""}`}
                    className="relative shrink-0 overflow-hidden transition-opacity duration-150"
                    style={{
                      outline: i === lightboxIndex ? "2px solid rgba(255,255,255,0.7)" : "2px solid transparent",
                      outlineOffset: "2px",
                      opacity: i === lightboxIndex ? 1 : 0.45,
                    }}
                  >
                    <div className="relative h-[54px] w-[80px]">
                      <Image
                        src={img.src}
                        alt={img.alt ?? ""}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
