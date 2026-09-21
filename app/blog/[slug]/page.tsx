import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS, findPost, postsIn, readMinutes, formatDate } from "@/lib/blog";
import { dict } from "@/lib/dictionary";
import { LOWEST_RATE, formatVnd } from "@/lib/roomTypes";
import { SITE_URL } from "@/lib/site";
import { SetLang } from "@/components/SetLang";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

function languages(slug: string) {
  const post = findPost(slug)!;
  const en = post.lang === "en" ? post.slug : post.pair;
  const vi = post.lang === "vi" ? post.slug : post.pair;
  return { en: `/blog/${en}`, vi: `/blog/${vi}`, "x-default": `/blog/${en}` };
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}`, languages: languages(post.slug) },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: "Hanoi AN Residence",
      locale: post.lang === "vi" ? "vi_VN" : "en_US",
      publishedTime: post.date,
      images: [{ url: post.cover.src, width: 1600, height: 900, alt: post.cover.alt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [post.cover.src] },
  };
}

const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-black";
const BTN_SECONDARY =
  "inline-flex items-center justify-center rounded-full border border-hairline bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const t = dict[post.lang];
  const list = postsIn(post.lang);
  const at = list.findIndex((p) => p.slug === post.slug);
  const related = [1, 2, 3].map((k) => list[(at + k) % list.length]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [`${SITE_URL}${post.cover.src}`],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: post.lang === "vi" ? "vi-VN" : "en",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: "Hanoi AN Residence", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Hanoi AN Residence",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/an-logo-gradient-256.png` },
    },
  };

  return (
    <article lang={post.lang}>
      <SetLang lang={post.lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="mx-auto max-w-[820px] px-6 pt-8 lg:px-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-ash">
          <Link href="/" className="underline-offset-2 hover:text-ink hover:underline">
            {t.detail.home}
          </Link>
          <span aria-hidden className="text-stone">/</span>
          <Link href="/blog" className="underline-offset-2 hover:text-ink hover:underline">
            {t.blog.journal}
          </Link>
        </nav>
        <p className="mt-5 text-sm text-ash">
          <time dateTime={post.date}>{formatDate(post.date, post.lang)}</time> · {readMinutes(post)} {t.blog.minRead}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[44px]">{post.title}</h1>
        <Link
          href={`/blog/${post.pair}`}
          hrefLang={post.lang === "en" ? "vi" : "en"}
          lang={post.lang === "en" ? "vi" : "en"}
          className={`${BTN_SECONDARY} mt-5`}
        >
          {t.blog.readOther}
        </Link>
      </header>

      <div className="mx-auto mt-8 max-w-[1080px] px-6 lg:px-10">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-paper-soft">
          <Image src={post.cover.src} alt={post.cover.alt} fill preload sizes="(max-width: 1080px) 100vw, 1080px" className="object-cover" />
        </div>
      </div>

      <div className="mx-auto max-w-[720px] space-y-6 px-6 py-12 text-[18px] leading-[1.75] lg:px-10">
        {post.body.map((para, i) => (
          <Fragment key={i}>
            <p>{para}</p>
            {i === post.inline.after && (
              <figure className="relative !my-10 aspect-[3/2] overflow-hidden rounded-[16px] bg-paper-soft">
                <Image src={post.inline.src} alt={post.inline.alt} fill sizes="(max-width: 720px) 100vw, 720px" className="object-cover" />
              </figure>
            )}
          </Fragment>
        ))}
      </div>

      <aside className="mx-auto max-w-[720px] px-6 lg:px-10">
        <div className="elevation-card rounded-[20px] border border-hairline bg-paper p-6">
          <div className="text-xl font-bold">{t.blog.stayTitle}</div>
          <p className="mt-2 text-[15px] text-ash">{t.home.heroSub}</p>
          <p className="mt-4 text-sm text-ash">
            {t.home.from} <span className="text-lg font-bold text-ink tabular-nums">{formatVnd(LOWEST_RATE, post.lang)}</span> {t.home.perNight}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/#book" className={BTN_PRIMARY}>
              {t.home.roomCta}
            </Link>
            <Link href="/#rooms" className={BTN_SECONDARY}>
              {t.home.roomsTitle}
            </Link>
          </div>
        </div>
      </aside>

      <section className="mx-auto mt-20 max-w-[1280px] px-6 lg:px-10">
        <h2 className="text-2xl font-bold tracking-tight">{t.blog.relatedTitle}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-[16px] border border-hairline bg-paper transition-colors hover:border-ink"
            >
              <div className="relative aspect-[16/9] bg-paper-soft">
                <Image src={p.cover.src} alt={p.cover.alt} fill sizes="(max-width: 640px) 100vw, 400px" className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs text-ash">{formatDate(p.date, p.lang)}</p>
                <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/blog" className={`${BTN_SECONDARY} mt-8`}>
          {t.blog.backToList} →
        </Link>
      </section>
    </article>
  );
}
