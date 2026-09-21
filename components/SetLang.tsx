"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/lang";
import type { Lang } from "@/lib/dictionary";

/** An article exists in one language, so the site chrome follows the article being read. */
export function SetLang({ lang }: { lang: Lang }) {
  const { setLang } = useLang();
  useEffect(() => {
    setLang(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);
  return null;
}
