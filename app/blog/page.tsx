"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { postsIn, readMinutes, formatDate } from "@/lib/blog";

export default function BlogPage() {
  const { lang, t } = useLang();
  const posts = postsIn(lang);

  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-12 lg:px-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-son sm:text-sm">{t.blog.heroEyebrow}</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.blog.heroTitle}</h1>
      <p className="mt-2 max-w-2xl text-[15px] text-ash">{t.blog.heroLead}</p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group flex flex-col overflow-hidden rounded-[16px] border border-hairline bg-paper transition-colors hover:border-ink"
          >
            <div className="relative aspect-[16/9] bg-paper-soft">
              <Image
                src={p.cover.src}
                alt={p.cover.alt}
                fill
                loading={i < 3 ? "eager" : "lazy"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs text-ash">
                {formatDate(p.date, lang)} · {readMinutes(p)} {t.blog.minRead}
              </p>
              <h2 className="mt-2 text-lg font-bold leading-snug tracking-tight">{p.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ash">{p.description}</p>
              <span className="mt-auto pt-4 text-sm font-semibold text-ink">
                {t.blog.readMore} <span className="cta-arrow">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
