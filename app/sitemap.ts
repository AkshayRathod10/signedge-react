import type { MetadataRoute } from "next";

// Static export: emits /sitemap.xml at build time.
export const dynamic = "force-static";

const BASE = "https://www.signedgeindia.com";

// Only indexable, canonical (trailing-slash) URLs. Keep in sync with the
// pages that do NOT set robots.index=false.
const routes = ["/", "/about-us/", "/services/", "/products/", "/blog/", "/reach-us/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
