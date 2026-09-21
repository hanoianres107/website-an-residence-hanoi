"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

export type GalleryImg = { src: string; alt: string };

/**
 * Eden-style photo gallery (same as catbaoutdoors.vn/stays/the-eden-cat-ba):
 * phones get a swipeable strip with "n / N" on each photo; from sm up it is
 * 1 large + 4 small tiles, the last one showing "+N more". Any photo opens a lightbox.
 */
export function StayGallery({ images }: { images: GalleryImg[] }) {
  const { lang } = useLang();
  const [openAt, setOpenAt] = useState<number | null>(null);
  if (images.length === 0) return null;

  const remaining = Math.max(0, images.length - 5);
  // Fewer than five photos (most apartments have 3–4): stretch the right-hand tiles so no grid cell is left empty.
  const n = Math.min(images.length, 5);
  const span = (i: number) =>
    i === 0
      ? n === 1
        ? "sm:col-span-4 sm:row-span-2"
        : "sm:col-span-2 sm:row-span-2"
      : i > 4
        ? "sm:hidden"
        : n === 2
          ? "sm:col-span-2 sm:row-span-2"
          : n === 3 || (n === 4 && i === 3)
            ? "sm:col-span-2"
            : "";

  return (
    <>
      <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 scroll-px-6 pb-1 sm:pb-0 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 sm:grid-rows-2 sm:overflow-hidden sm:rounded-[20px] sm:aspect-[16/7]">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenAt(i)}
            className={`relative shrink-0 w-[86vw] aspect-[4/3] snap-start rounded-[16px] overflow-hidden bg-paper-soft sm:w-auto sm:aspect-auto sm:rounded-none ${span(i)}`}
            aria-label={`${img.alt} — ${i + 1} / ${images.length}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading={i === 0 ? "eager" : "lazy"}
              sizes={i === 0 ? "(max-width: 640px) 86vw, 50vw" : "(max-width: 640px) 86vw, 25vw"}
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
            {i === 4 && remaining > 0 && (
              <span className="absolute inset-0 hidden sm:flex items-center justify-center bg-ink/60 text-base font-semibold text-paper">
                +{remaining} {lang === "vi" ? "ảnh" : "more"}
              </span>
            )}
            <span className="sm:hidden absolute bottom-2 right-2 rounded-full bg-ink/70 px-2 py-0.5 text-[11px] font-semibold text-paper">
              {i + 1} / {images.length}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-sm text-ash">
          {images.length} {lang === "vi" ? "ảnh" : images.length === 1 ? "photo" : "photos"}
        </span>
        <button
          type="button"
          onClick={() => setOpenAt(0)}
          className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-hairline bg-paper px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink"
        >
          {lang === "vi" ? "Xem tất cả ảnh →" : "Show all photos →"}
        </button>
      </div>

      {openAt !== null && <Lightbox images={images} startAt={openAt} onClose={() => setOpenAt(null)} />}
    </>
  );
}

function Lightbox({ images, startAt, onClose }: { images: GalleryImg[]; startAt: number; onClose: () => void }) {
  const { lang } = useLang();
  const [idx, setIdx] = useState(startAt);
  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  const arrow =
    "absolute top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink font-bold elevation-card hover:bg-paper sm:h-12 sm:w-12";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${images[idx].alt} — ${idx + 1} / ${images.length}`}
      className="fixed inset-0 z-50 flex flex-col bg-ink/95"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-paper">
        <span className="text-sm font-semibold">
          {idx + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full px-3 py-1.5 text-sm font-semibold transition-colors hover:bg-paper/10"
        >
          ✕ {lang === "vi" ? "Đóng" : "Close"}
        </button>
      </div>
      <div className="relative flex-1 select-none px-4 pb-4">
        <Image key={images[idx].src} src={images[idx].src} alt={images[idx].alt} fill sizes="100vw" className="object-contain" />
        {images.length > 1 && (
          <>
            <button type="button" onClick={prev} aria-label={lang === "vi" ? "Ảnh trước" : "Previous photo"} className={`${arrow} left-3 sm:left-6`}>
              ‹
            </button>
            <button type="button" onClick={next} aria-label={lang === "vi" ? "Ảnh sau" : "Next photo"} className={`${arrow} right-3 sm:right-6`}>
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
}
