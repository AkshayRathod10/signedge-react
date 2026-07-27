import type { MetadataRoute } from "next";

// Static export: emits /robots.txt at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/auth/", "/error/", "/docs/", "/support/"],
    },
    sitemap: "https://www.signedgeindia.com/sitemap.xml",
    host: "https://www.signedgeindia.com",
  };
}
