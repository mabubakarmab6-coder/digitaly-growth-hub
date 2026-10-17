import { strict as assert } from "node:assert";
import { test } from "node:test";
import { services } from "./services";
import { SERVICE_OPTIONS } from "../lib/inquiry/config";

test("agency services are ordered Web Creation, Paid Marketing, then GEO", () => {
  assert.deepEqual(services.map((service) => service.slug), ["web-creation", "paid-marketing", "geo"]);
});

test("enquiry service choices follow the agency order without changing saved values", () => {
  assert.deepEqual(SERVICE_OPTIONS.slice(0, 3), ["Website", "Paid Marketing", "GEO"]);
  assert.deepEqual([...SERVICE_OPTIONS].sort(), ["Website", "Paid Marketing", "GEO", "SEO", "E-commerce / Marketplace", "Not sure yet"].sort());
});

test("E-commerce Growth is retired from service data and related capabilities", () => {
  assert.equal(services.some((service) => service.slug === "ecommerce-growth"), false);
  assert.equal(services.flatMap((service) => service.related).some((service) => service.slug === "ecommerce-growth"), false);
});

test("Marketplace Optimization is retired from service data and related capabilities", () => {
  assert.equal(services.some((service) => service.slug === "marketplace-optimization"), false);
  assert.equal(services.flatMap((service) => service.related).some((service) => service.slug === "marketplace-optimization"), false);
});