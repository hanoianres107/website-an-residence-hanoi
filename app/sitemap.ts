import type { MetadataRoute } from "next";
import { APARTMENTS } from "@/lib/apartments";

const SITE_URL = "https://anresidencehanoi.com";

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

  const blogSlugs = ["son-mai-ha-thai", "buoi-sang-ho-ba-mau", "o-dai-ngay-tai-an"];

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
    ...blogSlugs.map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
