import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/cms";

/** Only routes that exist are listed. Collections are added as their pages are built. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 }];
}
