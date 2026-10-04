import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { inquiryInputSchema } from "./config";

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => inquiryInputSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };
    const inquiryId = crypto.randomUUID();
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

    const { error } = await supabase
      .from("inquiries")
      .insert({
        id: inquiryId,
        company_name: data.companyName,
        full_name: data.fullName,
        work_email: data.workEmail,
        country: "",
        selected_service: data.selectedService,
        source_service: data.sourceService || null,
        source_page: data.sourcePage || null,
        additional_context: data.businessAndChallenge || null,
        consent: true,
      });

    if (error) {
      console.error("Inquiry database insert failed", {
        code: error.code,
        message: error.message,
        details: error.details,
        hint: error.hint,
      });
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
          companyName: data.companyName,
          selectedService: data.selectedService,
          businessAndChallenge: data.businessAndChallenge,
          sourceService: data.sourceService,
          sourcePage: data.sourcePage,
          submittedAt: new Date().toUTCString(),
        },
      });
    } catch (err) {
      console.error("Inquiry notification email failed", err);
    }

    return { ok: true as const };
  });
