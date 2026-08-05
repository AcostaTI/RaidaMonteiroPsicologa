import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";

/** Gera /robots.txt automaticamente e aponta para o sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
