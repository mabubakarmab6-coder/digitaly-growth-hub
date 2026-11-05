# End-to-End Lead Measurement Trace

**Audit Codename:** DYM-MEASUREMENT-FORENSICS  
**Document:** `07_Lead_Conversion_Trace.md`  
**Target:** `https://digitalymarket.com`  
**Evidence Links:** `EVD-02`, `EVD-04`, `EVD-05`, `EVD-06`, `EVD-07`, `EVD-10`  

---

## 1. Master Lead Conversion Trace Diagram

```mermaid
sequenceDiagram
    autonumber
    actor Visitor as Website Visitor
    participant CTA as CTA Button / Link
    participant Modal as Inquiry Modal (React)
    participant State as dataLayer State (state.ts)
    participant ServerFn as submitInquiry() ServerFn
    participant DB as Supabase inquiries Table
    participant GTM as GTM Container v13
    participant GA4 as Google Analytics 4
    participant Ads as Google Ads (AW-10976434396)
    participant Meta as Meta Pixel & CAPI

    Visitor->>CTA: 1. Clicks "Start a Growth Conversation"
    CTA->>Modal: Intercepts click & calls openInquiry()
    Modal->>State: trackInquiry("inquiry_popup_open")
    State->>GTM: dataLayer.push({ event: "inquiry_popup_open" })
    Note over GTM: 🚨 NO TRIGGER in GTM -> Ignored

    Visitor->>Modal: 2. Types in first input (fullName)
    Modal->>State: trackInquiry("inquiry_form_started")
    State->>GTM: dataLayer.push({ event: "inquiry_form_started" })
    Note over GTM: 🚨 NO TRIGGER in GTM -> Ignored

    Visitor->>Modal: 3. Clicks "Send Enquiry" (Incomplete form)
    Modal->>Modal: Zod safeParse(draft) fails
    Note over Modal: Client validation error rendered in UI; ZERO dataLayer telemetry!

    Visitor->>Modal: 4. Fills all fields & clicks "Send Enquiry"
    Modal->>Modal: Zod safeParse(draft) succeeds
    Modal->>Modal: Generates UUID submissionId
    Modal->>ServerFn: POST submitInquiry({ data, submissionId })
    
    ServerFn->>DB: 5. Inserts lead into Supabase
    ServerFn-->>Modal: 6. Returns HTTP 200 { ok: true }
    
    Modal->>Visitor: 7. Displays Success Checkmark UI
    Modal->>State: 8. trackInquiry("inquiry_form_submitted")
    State->>GTM: dataLayer.push({ event: "inquiry_form_submitted" })
    
    Note over GTM,Ads: 🚨 CRITICAL SEVERANCE: GTM has NO TRIGGER for inquiry_form_submitted!
    GTM-.xGA4: 0 hits sent to GA4
    GTM-.xAds: 0 hits sent to Google Ads (Tag deleted!)
    GTM-.xMeta: 0 hits sent to Meta Pixel (Tag deleted!)
    ServerFn-.xMeta: 0 hits sent to Meta CAPI (Not implemented!)
```

---

## 2. Transition-by-Transition Forensic Breakdown

### Transition 1: CTA Click (`cta_click`)
- **Source System:** Client Browser DOM (`src/components/site/GlobalFloatingCta.tsx`, `Hero.tsx`, `SiteNav.tsx`).
- **Trigger Condition:** User clicks an anchor with `href="/start"`, `href="#inquire"`, or `data-inquiry`.
- **Event Identity:** In `InquiryProvider.tsx` (lines 101–122), `interceptInquiryLinks` intercepts the click via `event.preventDefault()`. It invokes `openInquiry()` directly.
- **Payload:** None emitted for the click itself.
- **Destination:** None.
- **Finding:** **VERIFIED ABSENT.** No `cta_click` event is dispatched to `dataLayer`. GA4 Enhanced Measurement only records a raw click if the link navigates, which is cancelled by `preventDefault()`.

---

### Transition 2: Form Open (`form_open`)
- **Source System:** React Component `InquiryProvider.tsx` (line 84).
- **Trigger Condition:** `openInquiry()` executes.
- **Event Identity:** `inquiry_popup_open`.
- **Payload:**
  ```json
  {
    "event": "inquiry_popup_open",
    "source_page": "/",
    "source_service": "general"
  }
  ```
- **Destination:** Injected into `window.dataLayer`.
- **GTM Reception:** GTM Container Version 13 receives the event in `dataLayer`.
- **Trigger Evaluation:** GTM contains exactly 4 trigger conditions (`gtm.js`, `gtm.init_consent`, `"GA4 Custome Event"`, `gtm.init`). None match `inquiry_popup_open`.
- **Finding:** **VERIFIED DEFECTIVE.** Pushed to dataLayer but silently ignored by GTM.

---

### Transition 3: Form Start (`form_start`)
- **Source System:** React Component `InquiryProvider.tsx` (line 133).
- **Trigger Condition:** User triggers the first input `change` event on any form field (`formStarted.current === false`).
- **Event Identity:** `inquiry_form_started`.
- **Payload:**
  ```json
  {
    "event": "inquiry_form_started",
    "source_page": "/",
    "source_service": "general"
  }
  ```
- **Destination:** Injected into `window.dataLayer`.
- **GTM Reception:** Evaluated by GTM; zero matching triggers.
- **Finding:** **VERIFIED DEFECTIVE.** Pushed to dataLayer but silently ignored by GTM.

---

### Transition 4: Validation (`form_validation_error`)
- **Source System:** Client React Component `InquiryProvider.tsx` (line 145).
- **Trigger Condition:** `handleSubmit` invokes `inquiryInputSchema.safeParse(draft)`.
- **Behavior on Failure:** If validation fails, `setErrors(nextErrors)` updates React component state and returns immediately.
- **Payload:** **ZERO TELEMETRY DISPATCHED.** No call to `trackInquiry()` exists in the error branch.
- **Finding:** **VERIFIED ABSENT.** Marketing and UX teams cannot analyze which fields cause form drop-off.

---

### Transition 5: Submit Attempt (`form_submit_attempt`)
- **Source System:** Client React Component `InquiryProvider.tsx` (lines 158–163).
- **Trigger Condition:** Zod validation passes; execution prepares server function dispatch.
- **Behavior:** The component generates a UUID fingerprint `pendingSubmission.current = { fingerprint, id: crypto.randomUUID() }` and sets `setSubmitting(true)`.
- **Payload:** **ZERO TELEMETRY DISPATCHED.** No pre-flight attempt milestone is pushed.
- **Finding:** **VERIFIED ABSENT.**

---

### Transition 6: Backend Acceptance & Lead ID Generation
- **Source System:** TanStack Start Server Function `src/lib/inquiry/submit.functions.ts` (`EVD-06`).
- **Trigger Condition:** Server receives HTTP POST payload.
- **Execution Logic:**
  1. Honeypot check: If `data.website` is filled, returns `{ ok: true }` silently.
  2. Idempotency check: Looks up existing row in Supabase using `submissionId` (`inquiryId`). If already present, skips insert.
  3. Rate limiting: Checks whether email exceeded 3 submissions in the last hour.
  4. Database Insert: Inserts row into Supabase `inquiries` table.
  5. Notifications: Sends transactional email alert and forwards to Google Apps Script.
  6. Return: Returns `{ ok: true }` to client.
- **Server-Side Measurement Audit:**
  - Meta CAPI call: **NONE.**
  - GA4 Measurement Protocol call: **NONE.**
  - Google Ads Offline Conversion call: **NONE.**
- **Finding:** Backend ingestion is technically robust, but **completely isolated from measurement platforms**.

---

### Transition 7: Browser Success Event (`generate_lead`)
- **Source System:** Client React Component `InquiryProvider.tsx` (line 183).
- **Trigger Condition:** Server function returns `{ ok: true }`.
- **Event Identity:** `inquiry_form_submitted`.
- **Payload Transmitted:**
  ```json
  {
    "event": "inquiry_form_submitted",
    "source_page": "/",
    "source_service": "general",
    "selected_service": "GEO"
  }
  ```
- **Critical Architectural Defects:**
  1. **Non-Standard Event Name:** Pushed as `inquiry_form_submitted` instead of Google/Meta standard `generate_lead`.
  2. **Missing Lead Identifier:** The client UUID `submissionId` is **omitted** from the dataLayer payload!
  3. **Missing User Data:** No hashed email or phone number is passed for Google Ads Enhanced Conversions.
  4. **No Matching GTM Trigger:** GTM Version 13 has zero triggers for `inquiry_form_submitted`.
  5. **No Fired Tags:** GA4, Google Ads, and Meta receive 0 conversion hits.
- **Finding:** **VERIFIED DEFECTIVE (CRITICAL SEVERITY).**

---

## 3. Lead Qualification & Closed-Won Journey (`lead_qualified`, `lead_closed_won`)

- **In GTM Container v13 (`EVD-02`):** Tag ID 32 (`__ccd_conversion_marking`) contains explicit conversion marking rules for `close_convert_lead` and `qualify_lead`.
- **The Reality:** 
  - DigitalyMarket manages inbound leads via email and Google Sheets.
  - There is no automated webhook, Zapier/Make automation, or backend cron job that sends a qualification event or closed-won revenue signal back to GA4 Measurement Protocol or Google Ads Offline Conversions.
  - Therefore, even though the GTM container is theoretically prepared to mark these events as conversions, **the data pipeline upstream does not exist**.
- **Finding:** **VERIFIED ABSENT.**
