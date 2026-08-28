import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import type { InquiryDraft } from "./config";

function str(v: unknown, max = 4000): string {
  return typeof v === "string" ? v.slice(0, max).trim() : "";
}

function strArray(v: unknown, max = 40): string[] {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === "string").slice(0, max).map((s) => s.slice(0, 400).trim()).filter(Boolean) : [];
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: InquiryDraft) => {
    const d = {
      challenges: strArray(input.challenges),
      outcomes: strArray(input.outcomes),
      companyName: str(input.companyName, 200),
      categories: strArray(input.categories),
      links: strArray(input.links),
      businessDescription: str(input.businessDescription),
      painPoints: str(input.painPoints),
      fullName: str(input.fullName, 200),
      workEmail: str(input.workEmail, 320),
      country: str(input.country, 120),
      timeline: str(input.timeline, 120),
      budgetAllocated: str(input.budgetAllocated, 60),
      budgetRange: str(input.budgetRange, 120),
      additionalContext: str(input.additionalContext),
      consent: input.consent === true,
    };
    if (!d.consent) throw new Error("Consent is required.");
    if (!d.companyName) throw new Error("Business name is required.");
    if (!d.fullName) throw new Error("Full name is required.");
    if (!emailPattern.test(d.workEmail)) throw new Error("A valid work email is required.");
    if (!d.country) throw new Error("Country is required.");
    if (d.challenges.length === 0 || d.outcomes.length === 0) throw new Error("Challenge and outcome are required.");
    return d;
  })
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabase = createClient<Database>(process.env["SUPABASE_URL"]!, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input, init) => {
          const h = new Headers(init?.headers);
          if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
          h.set("apikey", key);
          return fetch(input, { ...init, headers: h });
        },
      },
    });

    const inquiryId = crypto.randomUUID();
    const { error } = await supabase
      .from("inquiries")
      .insert({
        id: inquiryId,
        challenges: data.challenges,
        outcomes: data.outcomes,
        company_name: data.companyName,
        business_categories: data.categories,
        online_links: data.links,
        business_description: data.businessDescription || null,
        pain_points: data.painPoints || null,
        full_name: data.fullName,
        work_email: data.workEmail,
        country: data.country,
        timeline: data.timeline || null,
        budget_allocated: data.budgetAllocated || null,
        budget_range: data.budgetAllocated === "Yes" ? data.budgetRange || null : null,
        additional_context: data.additionalContext || null,
        consent: data.consent,
      });

    if (error) {
      console.error("Inquiry insert failed", error);
      throw new Error("Could not save the enquiry.");
    }

    // Notify the team. A notification failure must not fail the submission.
    try {
      const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");
      await sendTemplateEmail("new-inquiry-notification", "mohammad@digitalymarket.com", {
        idempotencyKey: `new-inquiry-notification-${inquiryId}`,
        replyTo: data.workEmail,
        templateData: {
          fullName: data.fullName,
          workEmail: data.workEmail,
          country: data.country,
          companyName: data.companyName,
          categories: data.categories.join(", "),
          links: data.links.join("\n"),
          businessDescription: data.businessDescription,
          painPoints: data.painPoints,
          challenges: data.challenges.join(", "),
          outcomes: data.outcomes.join(", "),
          timeline: data.timeline,
          budgetAllocated: data.budgetAllocated,
          budgetRange: data.budgetAllocated === "Yes" ? data.budgetRange : "",
          additionalContext: data.additionalContext,
          submittedAt: new Date().toUTCString(),
        },
      });
    } catch (err) {
      console.error("Inquiry notification email failed", err);
    }

    return { ok: true as const };
  });
