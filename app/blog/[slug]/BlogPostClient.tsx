"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/lang";

export function BlogPostClient({ slug }: { slug: string }) {
  const { t } = useLang();
  const posts = t.blog.posts;
  const post = posts.find((p) => p.slug === slug) ?? posts[0];
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[820px] px-6 lg:px-10 pt-8 text-xs text-ash flex items-center gap-2">
        <Link href="/blog" className="hover:text-son">{t.blog.backToList}</Link>
        <span>›</span>
        <span className="text-walnut">{post.category}</span>
      </div>

      {/* Header */}
      <header className="mx-auto max-w-[820px] px-6 lg:px-10 pt-5">
        <div className="font-label text-[11px] text-son">{post.category}</div>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl text-ink leading-[1.1]">{post.title}</h1>
        <div className="mt-4 flex items-center gap-2 text-sm text-ash">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readMins} {t.blog.minRead}</span>
        </div>
      </header>

      {/* Cover */}
      <div className="mx-auto max-w-[1080px] px-6 lg:px-10 mt-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
          <Image src={post.cover} alt={post.title} fill priority sizes="(max-width: 1080px) 100vw, 1080px" className="object-cover" />
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-[720px] px-6 lg:px-10 py-12">
        <div className="space-y-6 text-lg leading-relaxed text-walnut">
          {post.body.map((para, i) => (
            <p key={i} className={i === 0 ? "text-ink" : ""}>{para}</p>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <Link href="/contact" className="press inline-flex items-center gap-2 rounded-full bg-son px-7 py-3 text-sm font-label text-paper hover:bg-son-deep group">
            {t.home.finalCta}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>

      {/* Related */}
      <section className="bg-paper-soft">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-10 py-16">
          <h2 className="font-label text-[11px] text-son brush-rule">{t.blog.relatedTitle}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-4 items-center">
                <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl">
                  <Image src={p.cover} alt={p.title} fill sizes="128px" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div>
                  <div className="font-label text-[10px] text-son">{p.category}</div>
                  <h3 className="mt-1 font-display text-xl text-ink leading-snug group-hover:text-son transition">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
