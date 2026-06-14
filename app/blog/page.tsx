"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";
import { SectionLabel } from "@/components/SectionLabel";

export default function BlogPage() {
  const { t } = useLang();
  const posts = t.blog.posts;

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pt-16 pb-10">
          <SectionLabel>{t.blog.heroEyebrow}</SectionLabel>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl text-ink leading-[1.05] max-w-3xl">
            {t.blog.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-walnut leading-relaxed">{t.blog.heroLead}</p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 pb-20">
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-paper/90 px-3 py-1 font-label text-[10px] text-son backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-2 text-xs text-ash">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readMins} {t.blog.minRead}</span>
                  </div>
                  <h2 className="mt-2 font-display text-2xl text-ink leading-snug group-hover:text-son transition">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-walnut">{post.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-label text-son">
                    {t.blog.readMore}
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
