# Roadmap

- [x] Reorder agency service listings, summaries and enquiry choices to Web Creation → Paid Marketing → GEO; verify across the website without publishing.

- [x] Update Gems Gallery live links and structured data to the approved Vercel address; verify the case-study navigation.
- [ ] Disconnect the former Gems Gallery subdomain (blocked: connected to a different project; external DNS is managed at GoDaddy).

- [x] Remove the two retired commerce service routes and unused page-only components/data.
- [x] Remove retired service listings, internal links and SEO references without replacement routes or redirects.
- [x] Verify retirement, remaining navigation/services and unchanged inquiry opening; report redirect decisions in docs/COMMERCE_SERVICE_REMOVAL.md.

- [x] Build the approved seven-section visual-first Web Creation page without changing shared integrations.
- [x] Verify Web Creation visuals, metadata, links and enquiry opening/validation across desktop/tablet/mobile; full delivery remains subject to the existing Google timeout below.

- [x] Replace the Paid Marketing placeholder with the approved eight-section service page.
- [x] Verify page SEO, links, FAQs, enquiry context and validation tracking on desktop, tablet and mobile; record submission limitation.
- [x] Report tested outcomes, limitations and rollback in docs/PAID_MARKETING_HANDOVER.md; not published.
- [ ] Confirm end-to-end Google delivery for the Paid Marketing enquiry (blocked by external Apps Script timeout; local storage verified, test row removed).

- [x] Connect the unchanged inquiry popup to the supplied Google Apps Script JSON endpoint.
- [x] Verify success/failure handling, retained answers, service-array mapping, and desktop/mobile behavior.
- [x] Confirm Google response and report whether the connected Sheet can be verified (Google confirmed success; independent Sheet readback unavailable).

- [x] Replace the old inquiry UI with one global five-question popup.
- [x] Reuse and adapt stored submission and owner notification handling.
- [x] Connect every inquiry CTA with source context.
- [x] Retire the old `/start` experience safely.
- [x] Complete accessibility, responsive, regression, storage, and email QA.

- [x] Feature SensyTalk in the homepage Work section instead of Gems Gallery.
- [x] Point the site's LinkedIn link at the official DigitalyMarket company page.
- [x] Show the published email address alongside Instagram and LinkedIn contact buttons.
- [x] Label the email button "Email" so it matches the Instagram and LinkedIn buttons, keeping the address in its accessible name.
- [x] Move the footer contact buttons into the full-width bottom row so all three sit together on one line.
- [x] Reposition Abubakar as Founder & Principal Growth Strategist across homepage, About page, and credibility sections (eliminating solo/recruiter CTAs).
- [x] Sanitize `/start` references before Supabase database insertion and Google Apps Script forwarding, redirect direct `/start` hits to `/?inquire=true`, and add Supabase migration to clean historical entries.
- [x] Add Privacy Policy and Sitemap links to the footer bottom row.
