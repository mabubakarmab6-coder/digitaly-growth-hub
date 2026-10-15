import { strict as assert } from "node:assert";
import { test } from "node:test";
import { GEMS_GALLERY_LIVE_URL, workProjects } from "./work";

test("Gems Gallery uses the approved Vercel hosting address", () => {
  assert.equal(GEMS_GALLERY_LIVE_URL, "https://lapidary-lab-suite.vercel.app/");
  assert.equal(workProjects.find((project) => project.id === "gemstone-gallery")?.liveUrl, "https://lapidary-lab-suite.vercel.app/");
});

test("Gems Gallery retains its existing case-study path", () => {
  assert.equal(workProjects.find((project) => project.id === "gemstone-gallery")?.slug, "gemstone-gallery");
});