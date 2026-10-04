# Replace the inquiry system with one global popup

## Scope
- Replace the current five-step `/start` experience with one reusable, user-triggered inquiry dialog available across the site.
- Keep the existing DigitalyMarket visual system, stored submissions, and owner notification email.
- Do not publish after implementation.

## Implementation
1. Create a global inquiry provider and accessible dialog mounted once at the site root.
2. Build exactly five visible questions: full name, work email, company/business name, one service dropdown, and one optional business/challenge textarea.
3. Add client and server validation, submitting/success/error states, duplicate-submit prevention, focus management, Escape/close support, mobile scrolling, and saved in-progress form state.
4. Capture `source_service`, `source_page`, and `selected_service` internally from each triggering CTA without exposing extra fields.
5. Reuse the existing server submission and email pipeline, simplifying its payload and stored data to match the new questions.
6. Convert every inquiry CTA—including navigation, footer, floating action, homepage, services, industries, work, insights, and about—to open the global dialog with relevant context.
7. Safely redirect `/start` to the homepage so the old form is no longer user-facing and no duplicate inquiry experience remains.
8. Remove obsolete public contact actions and old inquiry UI/state code after confirming nothing active depends on them.

## Technical details
- Use the existing Radix dialog primitive for focus trapping, focus restoration, Escape handling, and dialog semantics.
- Use Zod schemas on both client and server; enforce trim and length limits before database or email use.
- Extend the existing `inquiries` table only as needed for the three context fields, while retaining historical columns and records.
- Continue storing submissions with insert-only public access and sending owner notifications to the configured professional address.
- Continue existing analytics without sending names, emails, company names, or free-text content.

## QA
- Test required-field and email validation, optional empty textarea, failed-submit retry, duplicate-submit prevention, success reset/reopen, and service context.
- Verify desktop, tablet, narrow mobile, keyboard navigation, Escape close, focus return, scrolling, and no horizontal overflow.
- Submit a test enquiry end-to-end, confirm the stored row and owner email event, then delete only that test row.
- Audit for old `/start` CTA links, obsolete fields, phone/WhatsApp/Gmail exposure, console errors, broken links, and build errors.
