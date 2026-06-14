"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";

export default function ExperiencesPage() {
  const { lang, t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <SectionLabel>{t.experiences.heroEyebrow}</SectionLabel>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05]">
              {t.experiences.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-walnut leading-relaxed">{t.experiences.heroLead}</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/photos/exterior-2.jpg"
              alt="Ba Mau Lake neighbourhood"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* A morning at AN — quiet narrative */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[920px] px-6 lg:px-10 py-20 text-center">
          <SectionLabel center>{t.experiences.morningTitle}</SectionLabel>
          <p className="mt-6 font-display text-2xl sm:text-3xl text-ink leading-relaxed italic">
            {t.experiences.morningBody}
          </p>
        </div>
      </section>

      {/* Around AN — nearby grid */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <SectionLabel>{t.experiences.nearbyTitle}</SectionLabel>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.experiences.nearby.map((n) => (
              <div key={n.h} className="border-t border-line pt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl text-ink leading-tight">{n.h}</h3>
                  <span className="font-label text-[10px] text-son whitespace-nowrap">{n.dist}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-walnut">{n.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-ash">{t.experiences.nearbyDistNote}</p>
        </div>
      </section>

      {/* Curated experiences */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <SectionLabel>{t.experiences.curatedTitle}</SectionLabel>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.experiences.curated.map((c, i) => (
              <div key={c.h} className="rounded-3xl bg-paper p-7 shadow-card">
                <div className="font-label text-[10px] text-gold-deep">0{i + 1}</div>
                <h3 className="mt-3 font-display text-2xl text-ink leading-tight">{c.h}</h3>
                <p className="mt-3 text-sm leading-relaxed text-walnut">{c.b}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-son px-7 py-3 text-sm font-label text-paper hover:bg-son-deep transition"
            >
              {lang === "vi" ? "Hỏi AN về trải nghiệm" : "Ask AN about experiences"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
