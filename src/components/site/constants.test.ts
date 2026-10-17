import { strict as assert } from "node:assert";
import { test } from "node:test";
import { LINKEDIN_URL } from "./constants";

test("LinkedIn points at the official DigitalyMarket company page", () => {
  assert.equal(LINKEDIN_URL, "https://www.linkedin.com/company/digitalymarket/");
});
