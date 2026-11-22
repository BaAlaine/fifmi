import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/cms";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/prayer/thank-you", "/give/thank-you", "/jesus/response/thank-you", "/search", "/api/"] }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
