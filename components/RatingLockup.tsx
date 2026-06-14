"use client";

import { useLang } from "@/lib/lang";

export function RatingLockup() {
  const { t } = useLang();
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-end gap-3">
        <LaurelLeft />
        <div className="font-display text-[68px] sm:text-[88px] leading-none font-semibold text-ink tabular-nums">
          {t.home.rating}
        </div>
        <LaurelRight />
      </div>
      <div className="mt-3 font-label text-[11px] text-walnut tracking-[0.32em]">
        {t.home.ratingLabel}
      </div>
      <div className="mt-2 text-sm text-ash">{t.home.ratingSub}</div>
    </div>
  );
}

function LaurelLeft() {
  return (
    <svg viewBox="0 0 48 96" width="36" height="72" aria-hidden="true">
      <g fill="none" stroke="#8b0000" strokeWidth="1.2" strokeLinecap="round">
        <path d="M44 4 C 30 24 26 50 30 92" />
        <path d="M40 18 C 30 18 24 22 22 28" />
        <path d="M36 30 C 26 30 20 34 18 40" />
        <path d="M32 42 C 22 42 16 46 14 52" />
        <path d="M30 54 C 20 54 14 58 12 64" />
        <path d="M28 66 C 18 66 12 70 10 76" />
        <path d="M28 78 C 18 78 14 82 12 88" />
      </g>
    </svg>
  );
}

function LaurelRight() {
  return (
    <svg viewBox="0 0 48 96" width="36" height="72" aria-hidden="true">
      <g fill="none" stroke="#8b0000" strokeWidth="1.2" strokeLinecap="round" transform="translate(48 0) scale(-1 1)">
        <path d="M44 4 C 30 24 26 50 30 92" />
        <path d="M40 18 C 30 18 24 22 22 28" />
        <path d="M36 30 C 26 30 20 34 18 40" />
        <path d="M32 42 C 22 42 16 46 14 52" />
        <path d="M30 54 C 20 54 14 58 12 64" />
        <path d="M28 66 C 18 66 12 70 10 76" />
        <path d="M28 78 C 18 78 14 82 12 88" />
      </g>
    </svg>
  );
}
