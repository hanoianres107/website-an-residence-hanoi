import raw from "./blog-posts.json";
import type { Lang } from "./dictionary";

// Articles from "Hanoi-AN-Residence-Blog-Articles-Sep-Dec-2026-EN-VI.docx" — regenerate
// blog-posts.json from the docx instead of hand-editing it. Each language has its own
// URL so Google can index both; `pair` links an article to its translation.
export type BlogPost = {
  slug: string;
  lang: Lang;
  pair: string;
  title: string;
  description: string;
  date: string;
  cover: { src: string; alt: string };
  inline: { src: string; alt: string; after: number };
  body: string[];
};

export const POSTS = raw as BlogPost[];

export const postsIn = (lang: Lang) => POSTS.filter((p) => p.lang === lang);

export const findPost = (slug: string) => POSTS.find((p) => p.slug === slug);

export const readMinutes = (p: BlogPost) => Math.max(1, Math.round(p.body.join(" ").split(/\s+/).length / 220));

const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Built by hand (not toLocaleDateString) so server and browser always print the same string.
export function formatDate(iso: string, lang: Lang) {
  const [y, m, d] = iso.split("-").map(Number);
  return lang === "vi" ? `${d} tháng ${m}, ${y}` : `${d} ${MONTHS_EN[m - 1]} ${y}`;
}
