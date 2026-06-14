"use client";

import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";
import { GALLERY, GalleryCategory } from "@/lib/gallery";

type Filter = "all" | GalleryCategory;

export default function GalleryPage() {
  const { t } = useLang();
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const photos = filter === "all" ? GALLERY : GALLERY.filter((p) => p.category === filter);

  const tabs: { key: Filter; label: string }[] = [
    { key: "all", label: t.gallery.filters.all },
    { key: "apartments", label: t.gallery.filters.apartments },
    { key: "lobby", label: t.gallery.filters.lobby },
    { key: "amenities", label: t.gallery.filters.amenities },
    { key: "exterior", label: t.gallery.filters.exterior },
  ];

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-8">
          <SectionLabel>{t.gallery.heroEyebrow}</SectionLabel>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05] max-w-3xl">
            {t.gallery.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-walnut leading-relaxed">{t.gallery.heroLead}</p>
        </div>
      </section>

      {/* Sticky filter */}
      <div className="sticky top-[64px] z-30 bg-paper/95 backdrop-blur-md border-y border-hairline">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-3 flex gap-2 overflow-x-auto">
          {tabs.map((tab) => {
            const active = filter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition border ${
                  active ? "bg-ink text-paper border-ink" : "bg-paper text-ink border-hairline hover:border-walnut"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Masonry grid */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-12">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {photos.map((p) => (
              <button
                key={p.src}
                onClick={() => setLightbox(p.src)}
                className="mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid group"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={600}
                  height={450}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto object-cover transition duration-700 group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper/90 text-ink"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <div className="relative max-h-[88vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox}
              alt=""
              width={1600}
              height={1067}
              className="h-auto max-h-[88vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
