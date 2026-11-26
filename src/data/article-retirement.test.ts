import { strict as assert } from "node:assert";
import { test } from "node:test";

// Integration checks against the running preview; never target production.
const origin = "http://localhost:8080";
const retiredSlugs = [
  "what-is-digital-marketing",
  "what-is-ecommerce-marketing",
  "what-is-ecommerce-growth",
  "what-is-seo",
  "what-is-ecommerce-seo",
  "what-is-paid-marketing",
  "what-is-performance-marketing",
  "what-is-generative-engine-optimization",
  "how-does-digital-marketing-work",
];

test("all nine removed articles and the Insights listing return HTTP 404", async () => {
  for (const path of ["/insights", ...retiredSlugs.map(slug => `/insights/${slug}`)]) {
    const response = await fetch(`${origin}${path}`, { redirect: "manual" });
    assert.equal(response.status, 404, path);
  }
});

test("the public sitemap excludes the removed Insights section and articles", async () => {
  const response = await fetch(`${origin}/sitemap.xml`);
  assert.equal(response.status, 200);
  const xml = await response.text();
  assert.ok(xml.includes("<urlset"));
  assert.equal(/<loc>[^<]*\/insights(?:[\/<])/.test(xml), false);
  assert.ok(xml.includes("https://digitalymarket.com/services/web-creation</loc>"));
});