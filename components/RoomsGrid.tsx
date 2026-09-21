"use client";

import Image from "next/image";
import Link from "next/link";
import type { Tier } from "@/lib/apartments";
import { ROOM_TYPES, formatVnd } from "@/lib/roomTypes";
import { useLang } from "@/lib/lang";

const CTA =
  "mt-3 w-full inline-flex items-center justify-center rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-black";

/**
 * Eden "Rooms & rates" cards: three in a row on desktop, an edge-to-edge swipe tray
 * below lg. With `onPick` (home page) the button preselects the room in the booking
 * card on the same page; elsewhere it links to that card.
 */
export function RoomsGrid({ onPick }: { onPick?: (tier: Tier) => void }) {
  const { lang, t } = useLang();

  return (
    <div className="mt-6 -mx-6 flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 pb-3 scroll-px-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 lg:pb-0 lg:scroll-px-0">
      {ROOM_TYPES.map((r) => {
        const copy = t.tiers[r.tier];
        return (
          <article
            key={r.tier}
            id={`room-${r.tier}`}
            className="snap-start shrink-0 w-[82vw] max-w-[360px] sm:w-[360px] lg:w-auto lg:max-w-none flex flex-col overflow-hidden rounded-[16px] border border-hairline bg-paper scroll-mt-24"
          >
            <div className="relative aspect-[4/3] bg-paper-soft">
              <Image
                src={r.hero}
                alt={`${r.name} — AN Residence`}
                fill
                sizes="(max-width: 640px) 82vw, (max-width: 1024px) 360px, 400px"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-paper px-2.5 py-1 text-xs font-bold text-ink">
                {r.sizeSqm} m²
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-lg font-bold tracking-tight">{r.name}</h3>
              <p className="mt-1 text-sm text-ash">
                {copy.beds} · {t.home.sleeps(r.sleeps)}
              </p>
              <p className="mt-1 text-sm text-ash">{copy.facts}</p>
              <p className="mt-3 text-[14px] leading-relaxed">{copy.body}</p>
              <div className="mt-auto pt-5">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-xs text-ash">{t.home.from}</span>
                  <span className="text-xl font-bold tabular-nums">{formatVnd(r.fromRate, lang)}</span>
                  <span className="text-xs text-ash">{t.home.perNight}</span>
                </div>
                {onPick ? (
                  <a href="#book" onClick={() => onPick(r.tier)} className={CTA}>
                    {t.home.roomCta}
                  </a>
                ) : (
                  <Link href="/#book" className={CTA}>
                    {t.home.roomCta}
                  </Link>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
