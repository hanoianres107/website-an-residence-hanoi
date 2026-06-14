"use client";

import { useLang } from "@/lib/lang";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center gap-0 rounded-full border border-hairline bg-paper p-[3px] ${compact ? "text-[11px]" : "text-xs"}`}>
      <button
        onClick={() => setLang("vi")}
        className={`px-3 py-1 rounded-full font-label transition ${lang === "vi" ? "bg-ink text-paper" : "text-ash hover:text-ink"}`}
        aria-pressed={lang === "vi"}
      >
        VN
      </button>
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded-full font-label transition ${lang === "en" ? "bg-ink text-paper" : "text-ash hover:text-ink"}`}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}
