import { createServerFn } from "@tanstack/react-start";
import { inquiryInputSchema } from "./config";

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => inquiryInputSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) return { ok: true as const };
    const inquiryId = data.submissionId ?? crypto.randomUUID();
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Retries reuse the client-generated submission ID. The insert conflict tells us the
    // row already exists without ever reading stored enquiry data back.
    let isRetry = false;
    if (data.submissionId) {
      const { count: existingCount, error: lookupError } = await supabaseAdmin
        .from("inquiries")
        .select("id", { count: "exact", head: true })
        .eq("id", inquiryId);
      if (lookupError) throw new Error("Could not validate this enquiry.");
      isRetry = (existingCount ?? 0) > 0;
    }

    if (!isRetry) {
      const windowStart = new Date(Date.now() - 60 * 60 * 1000).toISOString();
      const { count, error: countError } = await supabaseAdmin
        .from("inquiries")
        .select("id", { count: "exact", head: true })
        .ilike("work_email", data.workEmail)
        .gte("created_at", windowStart);

      if (countError) throw new Error("Could not validate this enquiry.");
      if ((count ?? 0) >= 3) throw new Error("Please wait before sending another enquiry.");

      const sanitizedSourcePage =
        !data.sourcePage ||
        data.sourcePage === "/start" ||
        data.sourcePage.startsWith("/start?")
          ? "/"
          : data.sourcePage;

      const { error } = await supabaseAdmin.from("inquiries").insert({
        id: inquiryId,
        full_name: data.fullName,
        work_email: data.workEmail,
        company_name: data.companyName,
        country: "",
        selected_service: data.selectedService,
        additional_context: data.businessAndChallenge || null,
        source_service: data.sourceService || null,
        source_page: sanitizedSourcePage,
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
            sourcePage: sanitizedSourcePage,
            submittedAt: new Date().toUTCString(),
          },
        });
      } catch (err) {
        console.error("Inquiry notification email failed", err);
      }
    }

    // Keep the database and owner email, but show success only when Google
    // also confirms delivery. Server-side POST avoids browser CORS limitations.
    try {
      const { forwardGoogleInquiry } = await import("./google-apps-script.server");
      await forwardGoogleInquiry(data, inquiryId);
    } catch (error) {
      console.error("Google enquiry delivery failed", {
        submissionId: inquiryId,
        reason: error instanceof Error ? error.message : "Unknown delivery error",
      });
      return { ok: false as const };
    }

    return { ok: true as const };
  });
