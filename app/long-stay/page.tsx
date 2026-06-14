"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";

export default function LongStayPage() {
  const { lang, t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <SectionLabel>{t.longStay.heroEyebrow}</SectionLabel>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05]">
              {t.longStay.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-walnut leading-relaxed">{t.longStay.heroLead}</p>
            <Link
              href="/contact"
              className="press mt-7 inline-flex items-center gap-2 rounded-full bg-son px-7 py-3 text-sm font-label text-paper hover:bg-son-deep group"
            >
              {t.longStay.ctaButton}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/photos/AN-602-1.jpg"
              alt="Long-stay serviced apartment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[920px] px-6 lg:px-10 py-16 text-center">
          <SectionLabel center>{t.longStay.introTitle}</SectionLabel>
          <p className="mt-6 font-display text-2xl sm:text-3xl text-ink leading-relaxed">
            {t.longStay.introBody}
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <SectionLabel>{t.longStay.perksTitle}</SectionLabel>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.longStay.perks.map((p, i) => (
              <div key={p.h} className="border-t border-line pt-5">
                <div className="font-label text-[10px] text-gold-deep">0{i + 1}</div>
                <h3 className="mt-2 font-display text-2xl text-ink leading-tight">{p.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-walnut">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal for */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionLabel>{t.longStay.idealTitle}</SectionLabel>
          <ul className="space-y-4">
            {t.longStay.idealFor.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-line pb-4">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-son/10 text-son">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-ink leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[920px] px-6 lg:px-10 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-snug">{t.longStay.ctaTitle}</h2>
          <p className="mt-4 text-walnut">{t.longStay.ctaBody}</p>
          <p className="mt-3 text-xs text-ash max-w-lg mx-auto">{t.longStay.rateNote}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="press inline-flex items-center gap-2 rounded-full bg-son px-7 py-3 text-sm font-label text-paper hover:bg-son-deep group"
            >
              {t.longStay.ctaButton}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/apartments"
              className="inline-flex items-center rounded-full border border-hairline bg-paper px-7 py-3 text-sm font-label text-ink hover:border-walnut transition"
            >
              {lang === "vi" ? "Xem hạng phòng" : "View rooms"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
