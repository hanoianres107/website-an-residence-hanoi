import type { MetadataRoute } from "next";
import { APARTMENTS } from "@/lib/apartments";
import { POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/apartments",
    "/long-stay",
    "/offers",
    "/amenities",
    "/experiences",
    "/gallery",
    "/blog",
    "/faq",
    "/about",
    "/location",
    "/contact",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...APARTMENTS.map((a) => ({
      url: `${SITE_URL}/apartments/${a.code}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...POSTS.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: { [p.lang]: `${SITE_URL}/blog/${p.slug}`, [p.lang === "en" ? "vi" : "en"]: `${SITE_URL}/blog/${p.pair}` } },
    })),
  ];
}
