import { strict as assert } from "node:assert";
import { test } from "node:test";
import { services } from "./services";

test("E-commerce Growth is retired from service data and related capabilities", () => {
  assert.equal(services.some((service) => service.slug === "ecommerce-growth"), false);
  assert.equal(services.flatMap((service) => service.related).some((service) => service.slug === "ecommerce-growth"), false);
});

test("Marketplace Optimization is retired from service data and related capabilities", () => {
  assert.equal(services.some((service) => service.slug === "marketplace-optimization"), false);
  assert.equal(services.flatMap((service) => service.related).some((service) => service.slug === "marketplace-optimization"), false);
});