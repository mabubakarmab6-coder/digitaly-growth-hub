import { expect, test } from "bun:test";
import { services } from "./services";

test("E-commerce Growth is retired from service data and related capabilities", () => {
  expect(services.some((service) => service.slug === "ecommerce-growth")).toBe(false);
  expect(services.flatMap((service) => service.related).some((service) => service.slug === "ecommerce-growth")).toBe(false);
});

test("Marketplace Optimization is retired from service data and related capabilities", () => {
  expect(services.some((service) => service.slug === "marketplace-optimization")).toBe(false);
  expect(services.flatMap((service) => service.related).some((service) => service.slug === "marketplace-optimization")).toBe(false);
});