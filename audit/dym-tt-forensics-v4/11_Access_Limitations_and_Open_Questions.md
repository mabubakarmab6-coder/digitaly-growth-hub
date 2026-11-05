# Access Limitations & Open Engineering Questions

**Audit Codename:** DYM-MEASUREMENT-FORENSICS  
**Document:** `11_Access_Limitations_and_Open_Questions.md`  
**Target:** `https://digitalymarket.com`  
**Audit Standard:** Tier 1 Direct Technical Verification / Zero Production Mutation  
**Date:** 02 November 2026  

---

## 1. Access Limitations & Forensic Impact

This forensic audit was conducted in strict **READ-ONLY / ZERO MUTATION** mode utilizing direct source code inspection, byte-level remote GTM container payload analysis, and headless Edge CDP network tracing. 

Because direct administrative access to certain vendor dashboards is restricted, specific backend platform settings could not be inspected directly and are documented below.

| Platform / Asset | Missing Access Level | Blocked Verification Item | Forensic Alternative Applied | Impact on Audit Conclusion |
| :--- | :--- | :--- | :--- | :--- |
| **Google Tag Manager** (`GTM-KKPZ3XL5`) | GTM Admin / Workspace Edit Access | Cannot view unpublished workspaces or drafts. | Downloaded and parsed live published container payload (`EVD-01`, `EVD-02`). | **Low.** Live production container state is 100% verified. |
| **Google Analytics 4** (`G-Y4C6BMK9WG`) | GA4 Admin / Property Access | Cannot check Data Retention (2 vs 14 mos), Internal IP filters, or BigQuery linking. | Captured live network hits and parsed GTM container configuration rules. | **Low.** Confirmed basic pageviews work but lead conversion hits are absent. |
| **Google Ads** (`AW-10976434396`) | Google Ads Account Read Access | Cannot inspect historical conversion action counts, Target CPA bidding distortion, or Enhanced Conversions settings. | Verified complete deletion of Google Ads tags from production GTM v13. | **Medium.** Cannot verify past damage to Smart Bidding algorithms. |
| **Meta Events Manager** (`1791505495459296`) | Meta Business Manager Access | Cannot inspect Event Match Quality (EMQ) scores or previous pixel activity. | Verified zero pixel execution in browser runtime and zero CAPI dispatch in server code. | **Low.** Zero current signal transmission is confirmed. |
| **Microsoft Clarity** (`y55ed0nfer`) | Clarity Dashboard Access | Cannot check heatmap recordings or GA4 dashboard linking toggle. | Confirmed total deletion of Clarity tag from GTM v13. | **Low.** Confirmed Clarity is completely non-operational. |
| **Google Search Console** | GSC Property Dashboard Access | Cannot view search impressions, clicks, or crawl coverage errors. | Verified site verification meta tag in `<head>` and audited generated `/sitemap.xml`. | **Low.** Technical ownership verified; reporting performance uninspected. |

---

## 2. Open Technical Questions for Platform Owners

To ensure seamless implementation of the remediation roadmap, the following technical and operational questions should be addressed by DigitalyMarket leadership:

1. **Active Advertising Accounts:**
   - Is Google Ads account `AW-10976434396` currently spending budget, paused, or scheduled for upcoming campaigns?
   - Is Meta Ad Account / Dataset `1791505495459296` the designated primary pixel, or has a new dataset been generated?

2. **Consent & CMP Selection:**
   - Does DigitalyMarket intend to market to UK/EU corporate clients? If yes, which certified CMP (e.g., Cookiebot, OneTrust, Termly) is preferred for Consent Mode v2 implementation?

3. **Lead Routing & CRM System:**
   - Beyond Supabase and Google Sheets, is DigitalyMarket planning to adopt a B2B CRM (e.g., HubSpot, Salesforce, Pipedrive) where sales qualification milestones (`lead_qualified`, `lead_closed_won`) can be captured and fed back into Google Ads and GA4?

4. **Enhanced Conversions Policy:**
   - Does leadership authorize passing SHA-256 hashed customer emails to Google Ads for Enhanced Conversions, provided the Privacy Policy is updated to reflect this practice accurately?

---

## 3. Completion Gate Sign-Off

- [x] Accessible tracking entry points inventoried.
- [x] Current application architecture documented.
- [x] Every proposed Master Register event classified with standardized status.
- [x] Every accessible platform assessed across 6-stage lifecycle.
- [x] Primary lead measurement traced end-to-end.
- [x] Duplicate-conversion risks investigated and documented.
- [x] Consent/privacy risks assessed with direct evidence.
- [x] All findings cross-referenced with Evidence IDs.
- [x] Critical and High findings independently rechecked.
- [x] Remediation actions provide actionable acceptance criteria.
- [x] Access limitations documented.
- [x] Zero production state mutations occurred.

**Final Audit Classification:** **COMPLETE & HIGH CONFIDENCE**
