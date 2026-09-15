import type { MetadataRoute } from "next";
import { getArticleSitemapEntries } from "@/lib/articles";
import { SITE_URL } from "@/lib/seo";

const publicRoutes = [
  "",
  "/about",
  "/services",
  "/videos",
  "/cases",
  "/contact",
  "/articles",
  "/year-end-party",
  "/events/annual-dinner",
  "/services/stage-magic",
  "/pricing",
  "/lighting-sound",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = publicRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority:
      path === ""
        ? 1
        : path === "/year-end-party" ||
            path.startsWith("/events/") ||
            path.startsWith("/services/stage") ||
            path === "/pricing" ||
            path === "/lighting-sound"
          ? 0.9
          : path === "/articles"
            ? 0.85
            : 0.8,
  }));

  const articleEntries = getArticleSitemapEntries().map((entry) => ({
    url: entry.url,
    lastModified: entry.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticEntries, ...articleEntries];
}
