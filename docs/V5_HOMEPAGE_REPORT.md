# DigitalyMarket — V5 implementation and QA report

## A. Executive Summary
Implemented the preview-only immersive navy homepage, compact growth framework, approved three-service overview and selected-work preview. Consultation actions retain the existing enquiry workflow. No publication occurred.

The supplied reference is not reproduced exactly: approved current copy, original logo, existing navigation, three approved services and two existing portfolio entries take priority. Literal four-service-card P0 acceptance remains unmet, as disclosed in the approved plan.

## B. Baseline Findings
The old hero used a white editorial grid, detached rounded photograph, 620px minimum height with 80/90px vertical padding, and oversized wrapping text. Main service/work content appeared much farther down the page. Shared containers already had a 1400px cap, so the fix scopes density and gutters to the homepage rather than globally widening every page.

Baseline revision: bd674f5e983de966684e4b31b578d830c05a52d4. A source archive was extracted successfully and original homepage files compared byte-for-byte. Focused recovery copies also remain in `.lovable/recovery/v5/`. Git state was not changed; Lovable version-history restoration was not verified. Baseline rendered screenshots exist at 1920×1080, 1440×900, 1280×800, 1024×768, 768×1024, 393×873 and 360×800 under `/tmp/browser/v5/baseline/` (temporary sandbox evidence).

## C. Implementation Inventory
- `src/components/dym-next/DymHome.tsx`: immersive hero, growth strip, early service/work sections, shared portfolio records; remaining sections retain relative order.
- `src/components/dym-next/DymShell.tsx`: optional homepage scope and consultation label/control; existing navigation, dropdowns and destinations preserved.
- `src/components/dym-next/dym-next.css`: removed a remote CSS font import; existing loaded font supplies the homepage typography.
- `src/styles.css`: semantic homepage brand tokens and scoped responsive styling.
- `src/data/homepage.ts`: approved service subset and featured-first shared portfolio ordering.
- `src/data/homepage.test.ts`: concrete service order, exclusion and project-order checks.
- `AGENTS.md`, `roadmap.md`: presentation boundary and delivery status.
- Recovery copies and this report are documentation, not new dependencies. No dependency, server or route edits.

## D. Visual Fidelity
Compared actual 1152×768 render to the supplied 1152×768 reference. The navy hero, left text/right scene, horizontal desktop actions, outline-icon framework, white service cards and light Selected Work band follow the reference language.

Significant disclosed differences: approved original logo is stacked rather than the reference's wide logo; current navigation includes Industries/Contact; current headline/supporting copy are longer; the reference has four services and three projects whereas this implementation has three services and two existing projects. The hero/reference header is taller, placing Selected Work below the 768px reference viewport. No pixel-perfect or high-fidelity acceptance claim is made. The existing floating consultation action is retained and can cover content near the viewport's bottom-right, as before.

## E. Desktop Hero
Uses existing optimized landscape derivatives of approved PC.png. All four participants, founder face/gesture/watch and dashboard remain in the image; CSS retains natural aspect ratio with `object-fit: contain`, no rounded image border or stretching. Only an 8% left-edge navy blend is applied. At 1440px the hero measures approximately 486px; at 1920px its image height is capped at 510px to preserve first-viewport density. Wider layouts may retain navy breathing space around the contained image rather than crop essential content.

Network checks showed one actual consultation binary per fresh viewport. Development imports of both pointer JSON files are not duplicate image downloads. Originals and existing image pointers were unchanged.

## F. Mobile Hero
Uses approved mobile.png derivatives at ≤900px. A separate compact semantic content region is used, followed by the entire uncropped portrait. The image's negative space cannot contain the approved longer headline, description, actions and positioning labels safely at small/enlarged-text sizes. This is the approved fallback; it creates more vertical height and does not mimic an inaccessible overlay.

360/375/390/393/412/430px checks passed overflow/image loading. Both actions are available; at 360px they may wrap. The founder scene remains intact below the content. Browser emulation only, not a physical OnePlus test.

## G. Homepage Sections
Header: PASS for approved existing navigation and consultation access. Four-stage framework: PASS. Services: three approved cards in Web Creation → Paid Marketing → GEO order, not the reference's four. No commerce page was added. Selected Work: existing SensyTalk preview first and independent Gems Gallery portfolio project second, with no fabricated outcome claims. Briwon Academy excluded because no approved public record exists here. The Gems image is its existing portfolio cover art, not newly generated proof of a live website.

## H. Functional Integrity
Desktop dropdown hover, keyboard ArrowDown access, Escape, mobile menu/service expansion and consultation access passed. Hero consultation opened the unchanged dialog. Empty-form validation and realistic dummy input/selection were exercised; dialog dismissal passed. No enquiry was sent, so production storage/Google delivery/success/error readback were not reverified.

See How We Work scrolls to existing `#method`. Nine destinations returned HTTP 200 with one H1 and no horizontal overflow: three displayed services, SensyTalk, Gems Gallery, About, Industries, Insights and Founder. Existing routes were not renamed or removed. The enquiry UI currently uses its existing single service selector; this redesign did not invent a multi-select or change form behavior.

## I. Technical Integrity
Latest automatic build diagnostics: build OK. Browser checks reported zero runtime errors. Twelve concrete existing/new tests passed via Bun (the repository tests use node:test). Protected routes, root tracking/head code, inquiry client/server files, public assets and consultation pointers compared unchanged to the recovery copy. GTM and metadata were not edited; no new tracking was introduced.

Keyboard/focus/Escape checks passed. Contrast uses white/navy, white/blue and teal/navy roles; no formal full-site WCAG certification or assistive-device audit was performed. Enlarged-text checks passed the scoped hero overflow test; full-site 200% zoom certification is not claimed. Reduced-motion overrides exist.

Local unthrottled Chromium preview observation at 1280×1800: LCP 500ms and CLS 0. This is a single localhost laboratory sample, not field Core Web Vitals or production performance. INP was not measured. Retained lower-page external editorial images remain outside the redesign scope.

## J. Responsive QA Matrix
PASS indicates no detected horizontal overflow/runtime errors and correct hero source, not exact reference fidelity.

| Viewport | Overflow | Runtime | Hero height | Image |
|---|---|---|---|---|
| 1920 × 1080 | PASS | PASS | 510px | Landscape |
| 1440 × 900 | PASS | PASS | 486px | Landscape |
| 1280 × 800 | PASS | PASS | 455px | Landscape |
| 1152 × 768 | PASS | PASS | 422px | Landscape |
| 1024 × 768 | PASS | PASS | 462px | Landscape |
| 768 × 1024 | PASS | PASS | 1218px | Portrait |
| 360 × 800 | PASS | PASS | 849px | Portrait |
| 375 × 800 | PASS | PASS | 867px | Portrait |
| 390 × 844 | PASS | PASS | 886px | Portrait |
| 393 × 873 | PASS | PASS | 890px | Portrait |
| 412 × 915 | PASS | PASS | 900px | Portrait |
| 430 × 932 | PASS | PASS | 923px | Portrait |

## K. Preview Evidence
Current preview: https://id-preview--e7179c8b-8337-4855-aa67-cd29ea3896b1.lovable.app

Persistent delivered evidence is in `DigitalyMarket_V5_Preview_Evidence/` alongside this report: reference-size preview, desktop, mobile, Selected Work and filled enquiry preview. Complete temporary screenshots, menu/keyboard/enlarged-text evidence and machine-readable checks remain under `/tmp/browser/v5/`; temporary paths do not provide permanent recovery.

## L. Remaining Risks
- Literal four-card requirement conflicts with approved three-service constraint. Requires a separate service/content decision, not an invented card or route.
- Reference density and exact composition are not fully matched because protected copy, logo and portfolio inventory differ.
- End-to-end enquiry delivery was deliberately not tested; existing delivery remains unchanged, with prior external timeout/readback limitations.
- No production, physical-device, screen-reader, field-CWV or full-site accessibility certification.
- Existing auxiliary service routes/menu entries remain because preservation was explicitly approved; reconciling these with older service-retirement preferences is a separate content task.
- Existing floating CTA can overlap lower-right preview content. No duplicate form or CTA workflow was introduced.

## M. Final Verdict
REQUIRES CORRECTIONS

The visual implementation is available for review, but literal four-service P0 and full reference-fidelity acceptance remain unresolved. Nothing was published. Final production authorization is still required.
