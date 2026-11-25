import team from "@/assets/editorial-team.webp.asset.json";
import commerce from "@/assets/editorial-commerce.webp.asset.json";
import factory from "@/assets/editorial-factory.webp.asset.json";
import local from "@/assets/editorial-local.webp.asset.json";
import gems from "@/assets/editorial-gems.webp.asset.json";
import saas from "@/assets/editorial-saas.webp.asset.json";
import seo from "@/assets/editorial-seo.webp.asset.json";
import geo from "@/assets/editorial-geo.webp.asset.json";
import analytics from "@/assets/editorial-analytics.webp.asset.json";

/** Existing editorial photography, delivered as self-hosted WebP images. */
export const editorialImages = {
  team: team.url,
  commerce: commerce.url,
  factory: factory.url,
  local: local.url,
  gems: gems.url,
  saas: saas.url,
  seo: seo.url,
  geo: geo.url,
  analytics: analytics.url,
} as const;
