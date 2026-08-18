import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const publicRoutes = [
  "",
  "/about",
  "/services",
  "/videos",
  "/cases",
  "/contact",
  "/year-end-party",
  "/events/annual-dinner",
  "/services/stage-magic",
  "/pricing",
  "/lighting-sound",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/year-end-party" || path.startsWith("/events/") || path.startsWith("/services/stage") || path === "/pricing" || path === "/lighting-sound" ? 0.9 : 0.8,
  }));
}
