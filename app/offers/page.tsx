"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";

export default function OffersPage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-10">
          <SectionLabel>{t.offers.heroEyebrow}</SectionLabel>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05] max-w-3xl">
            {t.offers.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-walnut leading-relaxed">{t.offers.heroLead}</p>
        </div>
      </section>

      {/* Direct booking perks */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>{t.offers.directTitle}</SectionLabel>
          </div>
          <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {t.offers.directPerks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-son/10 text-son">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-ink leading-snug">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Rate plans */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <div className="max-w-xl">
            <SectionLabel>{t.offers.plansTitle}</SectionLabel>
            <p className="mt-4 text-ash">{t.offers.plansLead}</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.offers.plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border p-7 transition ${
                  plan.highlight
                    ? "border-son bg-son/[0.04] shadow-float"
                    : "border-hairline bg-paper shadow-card"
                }`}
              >
                <div className={`font-label text-[10px] ${plan.highlight ? "text-son" : "text-gold-deep"}`}>
                  {plan.tagline}
                </div>
                <h3 className="mt-3 font-display text-2xl text-ink leading-tight">{plan.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-walnut">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[920px] px-6 lg:px-10 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-ink leading-snug">{t.offers.ctaTitle}</h2>
          <p className="mt-4 text-walnut">{t.offers.ctaBody}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-son px-7 py-3 text-sm font-label text-paper hover:bg-son-deep transition"
            >
              {t.offers.ctaButton}
            </Link>
            <Link
              href="/apartments"
              className="inline-flex items-center rounded-full border border-hairline bg-paper px-7 py-3 text-sm font-label text-ink hover:border-walnut transition"
            >
              {t.nav.apartments}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
