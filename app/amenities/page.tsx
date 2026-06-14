"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";
import { AmenityIcon } from "@/components/AmenityIcon";
import { COMMON_AMENITIES } from "@/lib/amenities";

const IN_ROOM_KEYS = ["ac", "smart", "espresso", "bosch", "laundry", "safe", "toiletries", "wifi"];

const IN_ROOM_EXTRA: Record<string, { vi: string; en: string; icon: string }> = {
  wifi: { vi: "WiFi tốc độ cao", en: "Fast WiFi", icon: "wifi" },
};

export default function AmenitiesPage() {
  const { lang, t } = useLang();
  const inRoom = IN_ROOM_KEYS.map((k) => COMMON_AMENITIES[k] ?? IN_ROOM_EXTRA[k]).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-10">
          <SectionLabel>{t.amenities.heroEyebrow}</SectionLabel>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05] max-w-3xl">
            {t.amenities.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-walnut leading-relaxed">{t.amenities.heroLead}</p>
        </div>
      </section>

      {/* Shared spaces — alternating feature blocks */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pb-8">
          <SectionLabel>{t.amenities.featuresTitle}</SectionLabel>
        </div>
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pb-16 space-y-14">
          {t.amenities.features.map((f, i) => (
            <div
              key={f.h}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={f.photo}
                  alt={f.h}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="max-w-md">
                <div className="font-label text-[10px] text-gold-deep">0{i + 1}</div>
                <h2 className="mt-2 font-display text-3xl sm:text-4xl text-ink leading-tight">{f.h}</h2>
                <p className="mt-4 text-walnut leading-relaxed">{f.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In-room comfort */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <div className="max-w-xl">
            <SectionLabel>{t.amenities.inRoomTitle}</SectionLabel>
            <p className="mt-4 text-ash">{t.amenities.inRoomLead}</p>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {inRoom.map((a) => (
              <div key={a.en} className="flex items-start gap-3">
                <AmenityIcon name={a.icon} className="mt-0.5 h-6 w-6 shrink-0 text-son" />
                <span className="text-sm text-ink leading-snug">{lang === "vi" ? a.vi : a.en}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest services */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <SectionLabel>{t.amenities.servicesTitle}</SectionLabel>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.amenities.services.map((s) => (
              <div key={s.h} className="border-t border-line pt-5">
                <h3 className="font-display text-2xl text-ink">{s.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-walnut">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[920px] px-6 lg:px-10 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-snug">{t.amenities.ctaTitle}</h2>
          <p className="mt-4 text-walnut">{t.amenities.ctaBody}</p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-7 rounded-full bg-son px-7 py-3 text-sm font-label text-paper hover:bg-son-deep transition"
          >
            {t.nav.contact}
          </Link>
        </div>
      </section>
    </>
  );
}
