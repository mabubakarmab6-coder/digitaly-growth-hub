# Header logo visibility — PASS

## Root cause
The approved 768×512 image contains blank margins: visible artwork bounds are x=93–686, y=79–419 (593×340 pixels). The header rendered the entire image at 36px high on mobile and 44px on desktop, making the artwork only 41.7×23.9px and 51.0×29.2px respectively.

## Implementation
- Retained the original asset unchanged, including its existing opaque background.
- Created a lossless 633×380 crop from (73,59) to (706,439), keeping 20px around the full artwork, including the registered mark and tagline. Existing pixels, colors and composition are unchanged; there was no transparency to remove or preserve.
- Added `src/assets/digitalymarket-header-logo.png.asset.json`.
- `BrandLogo.tsx`: optional header placement selects the derivative, declares its intrinsic dimensions, and renders at 56px high below 768px and 68px above, with proportional width and max-width protection.
- `SiteNav.tsx`: selects the header placement and constrains the clickable logo area to its content. Footer retains the original asset.

## Actual before/after measurements
| Viewport | Image box before → after | Visible artwork before → after | Header height |
|---|---|---|---|
| 375px | 54×36 → 93.28×56px | 41.70×23.91 → 87.39×50.11px | 65px unchanged |
| 1440px | 66×44 → 113.27×68px | 50.96×29.22 → 106.11×60.84px | 81px unchanged |

Visible bounds use the asset's >22/255 difference-from-white threshold and the measured DOM scale. The crop uses 93.7% of image width and 89.5% of image height for artwork. The full composition is over twice its previous visible size. The small tagline remains inherently tiny at mobile header height; no alternate artwork was introduced.

## Responsive and regression QA
Browser-tested 320, 375, 430, 639, 640, 767, 768, 1023, 1024, 1025 and 1440px. All retained header height, proportional artwork, no overlap with navigation/CTA/menu, and no page horizontal overflow. Mobile service expansion, desktop service dropdown, sticky header at 500px scroll, and logo navigation to `/` passed. No browser runtime errors were observed. Before/after and scrolled header screenshots at 375px and 1440px were visually reviewed.

Preview compilation reported build OK. Existing two contact tests passed under Bun; Vitest could not discover these node:test suites, so the project's compatible runner was used. No new behavioral rule required a unit test. Explicit intrinsic dimensions reserve image space; network-level CLS scoring was not measured.

No forms, CTAs, SEO, analytics, navigation structure or footer design were changed. Production was not tested or published. No unresolved approval is required for this correction.