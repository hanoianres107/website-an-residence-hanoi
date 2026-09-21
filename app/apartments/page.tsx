"use client";

import Image from "next/image";
import Link from "next/link";
import { APARTMENTS, TIER_ORDER } from "@/lib/apartments";
import { roomType } from "@/lib/roomTypes";
import { useLang } from "@/lib/lang";
import { RoomsGrid } from "@/components/RoomsGrid";

export default function ApartmentsPage() {
  const { lang, t } = useLang();

  return (
    <>
      <section className="mx-auto max-w-[1280px] px-6 pt-12 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-son sm:text-sm">{t.rooms.heroEyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.home.roomsTitle}</h1>
        <p className="mt-2 max-w-2xl text-[15px] text-ash">{t.home.roomsNote}</p>
        <RoomsGrid />
      </section>

      <section className="mx-auto mt-20 max-w-[1280px] px-6 lg:px-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-son sm:text-sm">{t.rooms.exploreEyebrow}</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight">{t.rooms.exploreTitle}</h2>
        <p className="mt-2 max-w-2xl text-[15px] text-ash">{t.rooms.exploreLead}</p>

        <div className="mt-10 space-y-14">
          {TIER_ORDER.map((tier) => {
            const inTier = APARTMENTS.filter((a) => a.tier === tier);
            return (
              <div key={tier} id={`tier-${tier}`} className="scroll-mt-28">
                <h3 className="text-xl font-bold tracking-tight">{roomType(tier).name}</h3>
                <p className="mb-6 mt-1 text-sm text-ash">
                  {inTier.length} {lang === "vi" ? "căn" : "apartments"} · {t.tiers[tier].facts}
                </p>
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {inTier.map((apt) => (
                    <Link key={apt.code} href={`/apartments/${apt.code}`} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[16px] bg-paper-soft">
                        <Image
                          src={apt.photo}
                          alt={lang === "vi" ? apt.themeVi : apt.themeEn}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-paper px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                          AN.{apt.code}
                        </span>
                      </div>
                      <div className="mt-3 flex items-baseline justify-between gap-3">
                        <h4 className="text-lg font-bold leading-tight tracking-tight">{lang === "vi" ? apt.themeVi : apt.themeEn}</h4>
                        <span className="whitespace-nowrap text-xs tabular-nums text-ash">{apt.sizeSqm} m²</span>
                      </div>
                      <p className="mt-1 text-sm text-ash">
                        {lang === "vi" ? `Tầng ${apt.floor}` : `Floor ${apt.floor}`} ·{" "}
                        {apt.bedrooms} {lang === "vi" ? "phòng ngủ" : apt.bedrooms > 1 ? "bedrooms" : "bedroom"}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
