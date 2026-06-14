"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/lang";
import { TIER_DEFAULT_RATE } from "@/lib/apartments";

const TIER_HERO: Record<string, string> = {
  studio: "/photos/AN-203-1.jpg",
  deluxe: "/photos/AN-601-1.jpg",
  family: "/photos/AN-502-1.jpg",
};

export function TierPicker({ compact = false }: { compact?: boolean }) {
  const { lang, t } = useLang();
  const tiers = [
    { key: "studio" as const, sub: t.tiers.studio.subtitle, name: t.tiers.studio.name, body: t.tiers.studio.body },
    { key: "deluxe" as const, sub: t.tiers.deluxe.subtitle, name: t.tiers.deluxe.name, body: t.tiers.deluxe.body },
    { key: "family" as const, sub: t.tiers.family.subtitle, name: t.tiers.family.name, body: t.tiers.family.body },
  ];

  return (
    <div className={`grid gap-6 ${compact ? "md:grid-cols-3" : "md:grid-cols-3"}`}>
      {tiers.map((tier) => (
        <Link
          key={tier.key}
          href={`/apartments?tier=${tier.key}`}
          className="group block overflow-hidden rounded-2xl bg-paper transition hover:-translate-y-0.5"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={TIER_HERO[tier.key]}
              alt={tier.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-paper/90 px-3 py-1 font-label text-[10px] text-walnut backdrop-blur">
              {tier.sub}
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-1.5">
            <h3 className="font-display text-2xl text-ink leading-tight">{tier.name}</h3>
            <p className="text-sm text-ash">{tier.body}</p>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-walnut">
                {lang === "vi" ? "Từ" : "From"}{" "}
                <strong className="font-semibold text-ink tabular-nums">
                  {(TIER_DEFAULT_RATE[tier.key] / 1_000_000).toFixed(1)}M
                </strong>{" "}
                <span className="text-ash">VND / {lang === "vi" ? "đêm" : "night"}</span>
              </span>
              <span className="font-label text-[10px] text-son">{t.home.tierCta} →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
