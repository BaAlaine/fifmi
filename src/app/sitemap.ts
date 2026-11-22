import type { MetadataRoute } from "next";
import { jesusSteps } from "@/content/jesus";
import { updateHref, updates } from "@/content/updates";
import { siteUrl } from "@/lib/cms";

/** Only routes that exist are listed. Collections are added as their pages are built. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/our-story`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/leadership`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/global-impact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/jesus`, changeFrequency: "monthly", priority: 0.9 },
    ...jesusSteps.map((s) => ({ url: `${siteUrl}/jesus/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${siteUrl}/apostles-updates`, changeFrequency: "weekly", priority: 0.8 },
  ];
  const articles: MetadataRoute.Sitemap = updates.map((u) => ({
    url: `${siteUrl}${updateHref(u)}`,
    lastModified: u.published,
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...articles];
}
