import type { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/education", "/experience", "/work", "/leadership", "/achievements", "/insights", "/socials", "/contact"];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/work" || route === "/experience" ? 0.9 : 0.75,
  }));
}
