"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { RatingLockup } from "@/components/RatingLockup";
import { TierPicker } from "@/components/TierPicker";
import { FeaturedGrid } from "@/components/FeaturedGrid";
import { SectionLabel } from "@/components/SectionLabel";
import { BookingWidget } from "@/components/BookingWidget";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  const { lang, t } = useLang();

  return (
    <>
      {/* Hero — full-bleed photograph with overlaid quiet label */}
      <section className="relative">
        <div className="relative h-[88svh] min-h-[560px] w-full overflow-hidden">
          <Image
            src="/photos/lobby-1.jpg"
            alt="AN Residence — lobby"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55" />
          <div className="absolute inset-0 flex flex-col">
            <div className="flex-1" />
            <div className="mx-auto w-full max-w-[1320px] px-6 lg:px-10 pb-14 text-paper">
              <div className="font-label text-[11px] tracking-[0.32em] text-paper/80">
                {t.home.heroEyebrow}
              </div>
              <h1 className="mt-4 font-script text-[72px] sm:text-[120px] leading-[0.95] text-paper">
                {t.home.heroTitle}
              </h1>
              <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-paper/95">
                {t.home.heroSub}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/apartments"
                  className="press group inline-flex items-center gap-2 rounded-full bg-son px-6 py-3 text-sm font-label text-paper hover:bg-son-deep"
                >
                  {t.home.heroCta}
                  <span className="cta-arrow">→</span>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center rounded-full border border-paper/60 bg-paper/10 px-6 py-3 text-sm font-label text-paper hover:bg-paper/20 backdrop-blur transition"
                >
                  {t.home.heroSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking availability widget — Airbnb-style, just below the hero */}
      <section className="relative z-20 bg-paper">
        <div className="mx-auto max-w-[1180px] px-6 lg:px-10 pt-10">
          <BookingWidget />
        </div>
      </section>

      {/* Rating lockup — Airbnb Guest Favorite analogue */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20">
          <RatingLockup />
        </div>
      </section>

      {/* Three tiers */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20">
          <div className="grid md:grid-cols-[1fr_auto] md:items-end gap-6 mb-10">
            <div>
              <SectionLabel>{t.home.tierEyebrow}</SectionLabel>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink max-w-xl leading-tight">
                {t.home.tierTitle}
              </h2>
              <p className="mt-3 max-w-xl text-ash">{t.home.tierIntro}</p>
            </div>
            <Link href="/apartments" className="font-label text-[11px] text-son hover:text-son-deep">
              {lang === "vi" ? "Tất cả 15 căn →" : "All 15 apartments →"}
            </Link>
          </div>
          <TierPicker />
        </div>
      </section>

      {/* Featured grid */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel>{lang === "vi" ? "Một vài căn nổi bật" : "A few favorites"}</SectionLabel>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink max-w-xl leading-tight">
                {lang === "vi" ? "Sáu cánh cửa AN mở ra điều gì." : "Six AN doors and what's behind each."}
              </h2>
            </div>
          </div>
          <FeaturedGrid />
        </div>
      </section>

      {/* Hanoi Soul */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="/photos/exterior-1.jpg"
              alt="Ba Mau Lake exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionLabel>{t.home.soulEyebrow}</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-tight">
              {t.home.soulTitle}
            </h2>
            <p className="mt-5 text-walnut leading-relaxed">{t.home.soulBody}</p>
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
              {t.home.soulFacts.map((f) => (
                <div key={f.k} className="border-t border-line pt-3">
                  <dt className="font-label text-[10px] text-ash">{f.k}</dt>
                  <dd className="text-base text-ink mt-1">{f.v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="https://maps.google.com/?q=107+%C3%94+%C4%90%E1%BB%93ng+L%E1%BA%A7m+Hanoi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center mt-7 text-sm font-label text-son hover:text-son-deep"
            >
              {t.home.locationCta} →
            </a>
          </div>
        </div>
      </section>

      {/* 4 pillars */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel center>{t.home.pillarsEyebrow}</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-tight">
              {t.home.pillarsTitle}
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.pillarsList.map((p, i) => (
              <div key={p.title} className="text-center sm:text-left">
                <div className="font-label text-[10px] text-gold-deep">0{i + 1}</div>
                <h3 className="mt-2 font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-walnut">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-stay teaser */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionLabel>{t.longStay.heroEyebrow}</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-tight">
              {t.longStay.heroTitle}
            </h2>
            <p className="mt-5 max-w-xl text-walnut leading-relaxed">{t.longStay.heroLead}</p>
            <Link
              href="/long-stay"
              className="press group mt-7 inline-flex items-center gap-2 rounded-full border border-son/30 bg-paper px-6 py-3 text-sm font-label text-son hover:bg-son hover:text-paper"
            >
              {lang === "vi" ? "Tìm hiểu ở dài ngày" : "Explore long stays"}
              <span className="cta-arrow">→</span>
            </Link>
          </div>
          <div className="relative order-1 lg:order-2 aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/photos/AN-602-2.jpg"
              alt="Long-stay living space"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact form — near the bottom of home */}
      <section id="contact" className="bg-paper scroll-mt-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:items-center">
          <div>
            <SectionLabel>{t.contact.heroEyebrow}</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-tight">
              {t.contact.heroTitle}
            </h2>
            <p className="mt-5 max-w-md text-walnut leading-relaxed">{t.contact.heroLead}</p>
            <div className="mt-7 space-y-2.5 text-sm">
              <a href="tel:+84905991979" className="block text-ink hover:text-son">+84 905 991 979 · Zalo · WhatsApp</a>
              <a href="mailto:anresidence107h3m@gmail.com" className="block text-ink hover:text-son">anresidence107h3m@gmail.com</a>
              <p className="text-ash">107 Ô Đồng Lầm, Đống Đa, Hà Nội</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Final CTA — quiet, centered */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[920px] px-6 lg:px-10 py-24 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink italic leading-snug">
            “{t.home.finalTitle}”
          </h2>
          <p className="mt-5 font-script text-3xl text-son">{t.home.finalSub}</p>
          <Link
            href="/contact"
            className="press group inline-flex items-center gap-2 mt-8 rounded-full bg-son px-7 py-3 text-sm font-label text-paper hover:bg-son-deep"
          >
            {t.home.finalCta}
            <span className="cta-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
