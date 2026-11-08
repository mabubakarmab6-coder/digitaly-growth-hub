import { strict as assert } from "node:assert";
import { test } from "node:test";
import { homepageServices, homepageWork } from "./homepage";

test("homepage preserves Web Creation, Paid Marketing, GEO order and destinations", () => {
  assert.deepEqual(homepageServices.map(s => s.href), ["/services/web-creation", "/services/paid-marketing", "/services/GEO"]);
});
test("homepage excludes the unapproved fourth commerce service", () => {
  assert.equal(homepageServices.some(s => String(s.href).includes("ecommerce")), false);
  assert.equal(homepageServices.length, 3);
});
test("homepage features SensyTalk before Gems Gallery using existing project records", () => {
  assert.deepEqual(homepageWork.map(p => p.slug), ["SensyTalk", "gemstone-gallery"]);
  assert.equal(homepageWork[1]?.liveUrl, "https://lapidary-lab-suite.vercel.app/");
});