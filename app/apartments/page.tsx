"use client";

import Image from "next/image";
import Link from "next/link";
import { APARTMENTS, TIER_ORDER } from "@/lib/apartments";
import { ROOM_TYPES } from "@/lib/roomTypes";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";

export default function ApartmentsPage() {
  const { lang, t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-10">
          <SectionLabel>{t.rooms.heroEyebrow}</SectionLabel>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05] max-w-3xl">
            {t.rooms.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-walnut leading-relaxed">{t.rooms.heroLead}</p>
        </div>
      </section>

      {/* Three room types */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pb-16 space-y-6">
          {ROOM_TYPES.map((rt) => {
            const tier = t.tiers[rt.tier];
            return (
              <div
                key={rt.tier}
                className="group grid overflow-hidden rounded-3xl border border-hairline bg-paper shadow-card md:grid-cols-[1.1fr_1fr] lg:grid-cols-[1.3fr_1fr]"
              >
                <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[320px]">
                  <Image
                    src={rt.hero}
                    alt={tier.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-paper/90 px-3 py-1 font-label text-[10px] text-walnut backdrop-blur">
                    {rt.count} {t.rooms.unitsCount}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-7 lg:p-10">
                  <div className="font-label text-[10px] text-gold-deep">{tier.subtitle}</div>
                  <h2 className="mt-2 font-display text-3xl lg:text-4xl text-ink leading-tight">{tier.name}</h2>
                  <p className="mt-3 text-walnut leading-relaxed">{tier.body}</p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ash">
                    <span>{rt.sizeLabel}</span>
                    <span>· {rt.bedrooms} {t.rooms.bedroomsLabel}{rt.bedrooms > 1 && lang === "en" ? "s" : ""}</span>
                    <span>· {lang === "vi" ? "Tối đa" : "Up to"} {rt.sleeps} {t.rooms.sleeps}</span>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-5">
                    <div className="text-sm">
                      <span className="text-ash">{t.rooms.fromLabel} </span>
                      <strong className="font-sans font-bold text-2xl text-ink tabular-nums">
                        {(rt.fromRate / 1_000_000).toFixed(1)}M
                      </strong>
                      <span className="text-ash"> {t.rooms.perNight}</span>
                    </div>
                    <a
                      href={`#tier-${rt.tier}`}
                      className="press inline-flex items-center gap-1.5 rounded-full bg-son px-5 py-2.5 text-xs font-label text-paper hover:bg-son-deep"
                    >
                      {t.rooms.viewType}
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Explore all 15 themed units */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <SectionLabel>{t.rooms.exploreEyebrow}</SectionLabel>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-tight max-w-2xl">
            {t.rooms.exploreTitle}
          </h2>
          <p className="mt-3 max-w-xl text-ash">{t.rooms.exploreLead}</p>

          <div className="mt-12 space-y-16">
            {TIER_ORDER.map((tier) => {
              const inTier = APARTMENTS.filter((a) => a.tier === tier);
              return (
                <div key={tier} id={`tier-${tier}`} className="scroll-mt-28">
                  <h3 className="font-display text-3xl text-ink mb-2">{t.tiers[tier].name}</h3>
                  <p className="text-sm text-ash mb-6">
                    {inTier.length} {lang === "vi" ? "căn" : "apartments"} · {t.tiers[tier].body}
                  </p>
                  <ApartmentGrid apartments={inTier} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function ApartmentGrid({ apartments }: { apartments: typeof APARTMENTS }) {
  const { lang } = useLang();
  return (
    <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {apartments.map((apt) => (
        <Link key={apt.code} href={`/apartments/${apt.code}`} className="group block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[14px]">
            <Image
              src={apt.photo}
              alt={lang === "vi" ? apt.themeVi : apt.themeEn}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-paper/90 px-2.5 py-1 font-label text-[10px] text-son backdrop-blur">
              AN.{apt.code}
            </span>
          </div>
          <div className="mt-3 space-y-1">
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-display text-xl text-ink leading-tight">
                {lang === "vi" ? apt.themeVi : apt.themeEn}
              </h4>
              <span className="text-xs text-ash tabular-nums whitespace-nowrap">{apt.sizeSqm}m²</span>
            </div>
            <p className="text-sm text-ash">
              {lang === "vi" ? `Tầng ${apt.floor}` : `Floor ${apt.floor}`} ·{" "}
              {apt.bedrooms} {lang === "vi" ? "phòng ngủ" : apt.bedrooms > 1 ? "bedrooms" : "bedroom"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
