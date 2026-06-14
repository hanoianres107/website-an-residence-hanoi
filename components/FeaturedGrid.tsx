"use client";

import Link from "next/link";
import Image from "next/image";
import { APARTMENTS } from "@/lib/apartments";
import { useLang } from "@/lib/lang";

const FEATURED_CODES = ["601", "602", "501", "402", "203", "401"];

export function FeaturedGrid() {
  const { lang, t } = useLang();
  const featured = FEATURED_CODES.map((c) => APARTMENTS.find((a) => a.code === c)!).filter(Boolean);

  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {featured.map((apt) => (
        <Link key={apt.code} href={`/apartments/${apt.code}`} className="group block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[14px]">
            <Image
              src={apt.photo}
              alt={lang === "vi" ? apt.themeVi : apt.themeEn}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-paper/90 px-2.5 py-1 font-label text-[10px] text-son backdrop-blur">
              AN.{apt.code}
            </span>
          </div>
          <div className="mt-3 space-y-1">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-xl text-ink leading-tight">
                {lang === "vi" ? apt.themeVi : apt.themeEn}
              </h3>
              <span className="text-xs text-ash tabular-nums whitespace-nowrap">{apt.sizeSqm}m²</span>
            </div>
            <p className="text-sm text-ash">
              {apt.tier === "studio" && (lang === "vi" ? "Studio · Mộng An" : "Quiet studio")}
              {apt.tier === "deluxe" && (lang === "vi" ? "Deluxe · view hồ" : "Deluxe · lakeview")}
              {apt.tier === "family" && (lang === "vi" ? "Family · 2BR suite" : "Family · 2BR suite")}
            </p>
            <p className="text-sm text-ink">
              <strong className="font-semibold tabular-nums">{(apt.rate / 1_000_000).toFixed(1)}M</strong>
              <span className="text-ash"> VND{t.apartments.cardPerNight}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
