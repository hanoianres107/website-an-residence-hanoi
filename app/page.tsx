"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { GALLERY } from "@/lib/gallery";
import { LOWEST_RATE, formatVnd } from "@/lib/roomTypes";
import { StayGallery, type GalleryImg } from "@/components/StayGallery";
import { RoomsGrid } from "@/components/RoomsGrid";
import { BookingWidget, type RoomChoice } from "@/components/BookingWidget";
import { ContactForm } from "@/components/ContactForm";

// First five fill the gallery grid; the lightbox continues through every photo on the site.
const FEATURED: GalleryImg[] = [
  { src: "/photos/AN-601-2.jpg", alt: "Ba Mau Lake seen from an AN Residence balcony" },
  { src: "/photos/lobby-1.jpg", alt: "AN Residence lounge" },
  { src: "/photos/AN-502-2.jpg", alt: "Living and dining room, Two-Bedroom Deluxe Apartment" },
  { src: "/photos/rooftop-3.jpg", alt: "Kitchen at AN Residence" },
  { src: "/photos/AN-401-1.jpg", alt: "Junior Suite with a hand-painted mural" },
];
const PHOTOS: GalleryImg[] = [
  ...FEATURED,
  ...GALLERY.filter((g) => !FEATURED.some((f) => f.src === g.src)).map(({ src, alt }) => ({ src, alt })),
];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Hanoi%20AN%20Residence%2C%20107%20%C3%94%20%C4%90%E1%BB%93ng%20L%E1%BA%A7m%2C%20H%C3%A0%20N%E1%BB%99i";
const MAP_EMBED =
  "https://www.google.com/maps?q=107+%C3%94+%C4%90%E1%BB%93ng+L%E1%BA%A7m,+%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i&output=embed";

const BTN_SECONDARY =
  "inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-hairline bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink";

export default function Home() {
  const { lang, t } = useLang();
  const h = t.home;
  const [room, setRoom] = useState<RoomChoice>("any");

  const facts = [
    { k: h.factFrom, v: `${formatVnd(LOWEST_RATE, lang)} ${h.perNight}`, strong: true },
    { k: h.factType, v: h.factTypeValue },
    { k: h.factLocation, v: h.factLocationValue },
    { k: h.factCapacity, v: h.factCapacityValue },
    { k: h.factCheck, v: h.factCheckValue },
  ];

  return (
    <article>
      {/* Hero — photo, eyebrow, name, tagline, two actions (Eden layout) */}
      <section className="relative h-[70vh] min-h-[440px] max-h-[720px] w-full overflow-hidden bg-ink">
        <Image src="/photos/AN-501-1.jpg" alt="Junior Suite at Hanoi AN Residence" fill preload sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/15" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1280px] flex-col justify-end px-6 pb-10 sm:pb-14 lg:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-paper/90 sm:text-sm">{h.heroEyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-paper sm:text-5xl lg:text-6xl">{h.heroTitle}</h1>
          <p className="mt-3 max-w-2xl text-base text-paper/90 sm:text-lg">{h.heroSub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#rooms"
              className="inline-flex items-center rounded-full bg-son px-6 py-3 font-semibold text-paper transition-colors hover:bg-son-deep"
            >
              {h.heroCta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-paper/70 bg-paper/15 px-6 py-3 font-semibold text-paper backdrop-blur-sm transition-colors hover:bg-paper/25"
            >
              {h.heroSecondary}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pt-8 lg:px-10">
        <StayGallery images={PHOTOS} />
      </section>

      {/* About the building + sticky booking card */}
      <section className="mx-auto mt-12 grid max-w-[1280px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-10">
        <div className="space-y-10 lg:col-span-7">
          <div className="flex flex-wrap gap-2 text-sm">
            {h.chips.map((c) => (
              <span key={c} className="rounded-full border border-hairline px-2.5 py-1 text-ash">
                {c}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-[17px] leading-relaxed">
            {h.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="border-t border-hairline pt-8">
            <h2 className="text-2xl font-bold tracking-tight">{h.highlightsTitle}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {h.highlights.map((x) => (
                <li key={x} className="flex gap-3 text-[15px]">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-hairline pt-8">
            <h2 className="text-2xl font-bold tracking-tight">{h.amenitiesTitle}</h2>
            <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {h.amenities.map((a) => (
                <div key={a} className="flex gap-3 text-[15px]">
                  <span className="text-gold-deep">✓</span>
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div id="book" className="scroll-mt-24 lg:sticky lg:top-24">
            <div className="elevation-card rounded-[20px] border border-hairline bg-paper p-6">
              <div className="text-2xl font-bold">{h.bookTitle}</div>
              <p className="mt-2 text-sm text-ash">{h.bookLead}</p>
              <BookingWidget room={room} onRoomChange={setRoom} />
              <div className="mt-6 space-y-2 border-t border-hairline pt-6 text-[13px] text-ash">
                {facts.map((f) => (
                  <div key={f.k} className="flex justify-between gap-4">
                    <span>{f.k}</span>
                    <span className={`text-right text-ink ${f.strong ? "font-semibold" : ""}`}>{f.v}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 text-center">
              <Link href="/long-stay" className={BTN_SECONDARY}>
                {h.longStayLink} →
              </Link>
            </div>
          </div>
        </aside>
      </section>

      {/* Rooms & rates — same names, sizes, occupancy and prices as Booking.com */}
      <section id="rooms" className="mx-auto mt-20 max-w-[1280px] scroll-mt-24 px-6 lg:px-10">
        <h2 className="text-2xl font-bold tracking-tight">{h.roomsTitle}</h2>
        <p className="mt-2 max-w-2xl text-[15px] text-ash">{h.roomsNote}</p>
        <RoomsGrid onPick={setRoom} />
        <div className="mt-8">
          <Link href="/apartments" className={BTN_SECONDARY}>
            {h.roomsAll} →
          </Link>
        </div>
      </section>

      <section id="location" className="mx-auto mt-20 grid max-w-[1280px] scroll-mt-24 gap-8 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold tracking-tight">{h.locationTitle}</h2>
          <p className="mt-2 text-[15px] text-ash">{h.locationBody}</p>
          <ul className="mt-5 divide-y divide-hairline border-y border-hairline">
            {h.nearby.map((n) => (
              <li key={n.k} className="flex justify-between gap-4 py-3 text-[15px]">
                <span>{n.k}</span>
                <span className="tabular-nums text-ash">{n.v}</span>
              </li>
            ))}
          </ul>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className={`${BTN_SECONDARY} mt-6`}>
            {h.locationCta} →
          </a>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-hairline lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
          <iframe src={MAP_EMBED} className="absolute inset-0 h-full w-full" loading="lazy" title="Hanoi AN Residence — map" />
        </div>
      </section>

      <section id="contact" className="mx-auto mt-20 grid max-w-[1280px] scroll-mt-24 gap-8 px-6 lg:grid-cols-12 lg:items-start lg:gap-12 lg:px-10">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold tracking-tight">{t.contact.heroTitle}</h2>
          <p className="mt-2 text-[15px] text-ash">{t.contact.heroLead}</p>
          <div className="mt-6 space-y-2.5 text-[15px]">
            <a href="tel:+84905991979" className="block hover:text-son">
              +84 905 991 979 · Zalo · WhatsApp
            </a>
            <a href="mailto:anresidence107h3m@gmail.com" className="block hover:text-son">
              anresidence107h3m@gmail.com
            </a>
            <p className="text-ash">107 Ô Đồng Lầm, Đống Đa, Hà Nội</p>
          </div>
        </div>
        <ContactForm className="lg:col-span-7" />
      </section>
    </article>
  );
}
