import { test } from "bun:test";
import { assert } from "node:console";

import { LINKEDIN_URL } from "./constants";

test("LinkedIn points at the official DigitalyMarket company page", () => {
  assert.equal(LINKEDIN_URL, "https://www.linkedin.com/company/digitalymarket/");
});
