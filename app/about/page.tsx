"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";

export default function AboutPage() {
  const { lang, t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-10 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <SectionLabel>{t.about.heroEyebrow}</SectionLabel>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05]">
              {t.about.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-walnut leading-relaxed">
              {t.about.heroLead}
            </p>
            <p className="mt-6 font-script text-4xl text-son">{t.brandTag}</p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src="/photos/lobby-2.jpg" alt="" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[920px] px-6 lg:px-10 py-20">
          <SectionLabel center>{t.about.sectionStoryTitle}</SectionLabel>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-walnut">
            {t.about.sectionStoryBody.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel center>{t.about.pillarsTitle}</SectionLabel>
            <p className="mt-4 text-walnut">{t.about.pillarsLead}</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.pillarsList.map((p, i) => (
              <div key={p.title} className="border-t border-line pt-6">
                <div className="font-label text-[10px] text-gold-deep">0{i + 1}</div>
                <h3 className="mt-2 font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-walnut">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20 grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <SectionLabel>Indochine Craft</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-tight">
              {t.about.craftTitle}
            </h2>
            <div className="mt-8 space-y-6">
              {t.about.craftItems.map((item) => (
                <div key={item.h} className="border-t border-line pt-4">
                  <h4 className="font-display text-xl text-ink">{item.h}</h4>
                  <p className="mt-1.5 text-sm text-walnut leading-relaxed max-w-md">{item.b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl col-span-2">
              <Image src="/photos/lobby-5.jpg" alt="" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="relative aspect-[1/1] overflow-hidden rounded-2xl">
              <Image src="/photos/lobby-4.jpg" alt="" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative aspect-[1/1] overflow-hidden rounded-2xl">
              <Image src="/photos/lobby-7.jpg" alt="" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/photos/exterior-3.jpg" alt="" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <SectionLabel>Hanoi Soul</SectionLabel>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-ink leading-tight">
              {t.about.locationTitle}
            </h2>
            <p className="mt-5 text-walnut leading-relaxed">{t.about.locationBody}</p>
            <Link
              href="/contact"
              className="inline-flex items-center mt-7 rounded-full bg-son px-6 py-3 text-sm font-label text-paper hover:bg-son-deep transition"
            >
              {lang === "vi" ? "Liên hệ AN" : "Get in touch"}
            </Link>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-paper-soft">
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
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
