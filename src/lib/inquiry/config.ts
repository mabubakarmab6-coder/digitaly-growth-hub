import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Paid Marketing",
  "SEO",
  "GEO",
  "Website",
  "E-commerce / Marketplace",
  "Not sure yet",
] as const;

export const inquirySchema = z.object({
  fullName: string;
});

export const inquiryInputSchema = z.object({
  fullName: z.string().trim().min(1, "Please enter your full name.").max(100, "Please keep your name under 100 characters."),
  workEmail: z.string().trim().email("Please enter a valid work email.").max(255, "Please keep your email under 255 characters."),
  companyName: z.string().trim().min(1, "Please enter your company or business name.").max(200, "Please keep the business name under 200 characters."),
  selectedService: z.enum(SERVICE_OPTIONS, { message: "Please select the closest service." }),
  businessAndChallenge: z.string().trim().max(4000, "Please keep this under 4,000 characters."),
  sourceService: z.string().trim().max(80).optional().default(""),
  sourcePage: z.string().trim().max(500).optional().default(""),
  website: z.string().max(0).optional().default(""),
});

export type InquiryDraft = z.input<typeof inquiryInputSchema>;
export type ValidatedInquiry = z.output<typeof inquiryInputSchema>;

export const EMPTY_DRAFT: InquiryDraft = {
  fullName: "",
  workEmail: "",
  companyName: "",
  selectedService: undefined,
  businessAndChallenge: "",
  sourceService: "",
  sourcePage: "",
  website: "",
};
