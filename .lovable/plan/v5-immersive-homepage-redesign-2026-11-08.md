# V5 immersive homepage redesign

## Scope and baseline
- Match the supplied 1152 × 768 reference composition in preview only: white header, navy immersive hero, compact growth strip, services overview and Selected Work, followed by remaining homepage sections in their current relative order.
- Baseline screenshots captured at all seven requested sizes. Current revision: `bd674f5e983de966684e4b31b578d830c05a52d4`.
- Recovery archive extracted successfully and homepage source compared byte-for-byte. Keep a project-local recovery copy before editing; this is verified file recovery, not a claim of Lovable version-history restoration. Do not create a Git branch or change Git state.

## Visual implementation
- Preserve the approved logo and favicon. Balance the existing header navigation and dropdowns; change its primary action to “Get a Consultation” using the current enquiry popup.
- Replace the detached image card with a full-width navy hero. Integrate the approved PC creative on the right without stretching or cropping essential content; blend only its left boundary if needed.
- Preserve the existing approved headline and supporting copy, with a cyan/teal emphasized phrase. Keep consultation and “See How We Work” actions horizontal on desktop; the latter goes to the existing homepage method section.
- Use the approved mobile creative exclusively on phones. Use a compact separate content region if the negative-space overlay cannot accommodate the approved copy or enlarged text safely; document this fallback.
- Add the four-stage framework with the supplied concise descriptions, compact outline icons and responsive columns.
- Move the service overview and Selected Work immediately after the framework. Keep all other homepage sections in their existing relative order.
- Use actual existing project images and shared work information for SensyTalk first and Gems Gallery second. Accurately label preview/independent portfolio status; omit invented results and unapproved Briwon Academy content.
- Apply homepage-specific spacing, typography and wide containers rather than changing reading layouts elsewhere.

## Constraint resolution
- Retain Web Creation → Paid Marketing → GEO as the approved service order. The fourth commerce card conflicts with the saved retirement instruction and is excluded; no new service page or route will be created. This is an explicit visual-reference deviation and prevents an unqualified P0 pass under the literal four-card criterion.
- Preserve existing routes and navigation destinations, including currently present auxiliary service routes; do not retire or rebuild unrelated pages in this task.
- Preserve current approved copy instead of adopting the screenshot’s alternate headline. Preserve the existing logo artwork rather than reconstructing the reference’s horizontal logo.
- All enquiry fields, validation, delivery, tracking, metadata, canonicals, structured data and sitemap stay unchanged.

## Technical details
- Reuse the current homepage and shared shell, existing design-system controls, outline-icon library and optimized PC/mobile asset pointers. No new dependencies or server changes.
- Scope the new hero, growth, service and work styling to the homepage. Keep brand colors/shadows in global semantic tokens and avoid remote CSS imports.
- Preserve the single root-mounted enquiry provider and `/start` interception. Reserve image space and load only the appropriate eager hero source.
- Document the homepage styling boundary in `AGENTS.md` and maintain the task roadmap.

## Verification and delivery
- Capture actual before/after screenshots, including 1152 × 768 reference comparison; required desktop/tablet sizes and 360/375/390/393/412/430px phones.
- Test navigation dropdowns, keyboard focus/Escape, mobile navigation, service and project links, consultation opening and validation with realistic input without sending an unsolicited enquiry.
- Check image selection and integrity, enlarged text, overflow, headings and readable contrast. Run existing relevant tests and review current build diagnostics.
- Compare protected source files against the recovery copy, and regression-check unrelated pages using the shared header.
- Record available laboratory performance observations and clearly distinguish them from field Core Web Vitals or physical-device testing.
- Deliver the requested A–M report and screenshots. Report unresolved P0 deviations and test limits honestly; stop before publishing.