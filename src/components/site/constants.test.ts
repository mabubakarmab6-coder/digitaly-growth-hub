import { strict as assert } from "node:assert";
import { test } from "node:test";
import { CONTACT_EMAIL, LINKEDIN_URL } from "./constants";

test("LinkedIn points at the official DigitalyMarket company page", () => {
  assert.equal(LINKEDIN_URL, "https://www.linkedin.com/company/digitalymarket/");
});

test("Published contact email is the owner address", () => {
  assert.equal(CONTACT_EMAIL, "mohammad@digitalymarket.com");
});
