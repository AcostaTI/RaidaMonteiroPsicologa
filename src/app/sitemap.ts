import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

/** Gera /sitemap.xml automaticamente. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
