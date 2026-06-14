"use client";

import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";

const MAPS_QUERY = "107+Ô+Đồng+Lầm+Đống+Đa+Hà+Nội";
const MAPS_LINK = `https://maps.google.com/?q=${MAPS_QUERY}`;
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&z=16&output=embed`;

export default function LocationPage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-10">
          <SectionLabel>{t.location.heroEyebrow}</SectionLabel>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05] max-w-3xl">
            {t.location.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-walnut leading-relaxed">{t.location.heroLead}</p>
        </div>
      </section>

      {/* Map + address */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pb-16 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-hairline shadow-card">
            <iframe
              src={MAPS_EMBED}
              title="AN Residence on Google Maps"
              className="h-[360px] w-full lg:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h2 className="font-label text-[11px] text-ash">{t.location.addressTitle}</h2>
            <p className="mt-4 text-lg text-ink leading-relaxed">{t.location.address}</p>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center mt-6 rounded-full bg-son px-6 py-3 text-sm font-label text-paper hover:bg-son-deep transition"
            >
              {t.location.mapsCta} →
            </a>
            <div className="mt-8 space-y-3 border-t border-line pt-6 text-sm">
              <a href="tel:+84905991979" className="block text-ink hover:text-son">+84 905 991 979</a>
              <a href="mailto:anresidence107h3m@gmail.com" className="block text-ink hover:text-son">anresidence107h3m@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Getting here */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <SectionLabel>{t.location.gettingHereTitle}</SectionLabel>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {t.location.gettingHere.map((g) => (
              <div key={g.h} className="border-t border-line pt-5">
                <h3 className="font-display text-2xl text-ink leading-tight">{g.h}</h3>
                <p className="mt-2 text-sm leading-relaxed text-walnut">{g.b}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-ash">{t.location.transportNote}</p>
        </div>
      </section>
    </>
  );
}
