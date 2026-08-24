export const CHALLENGE_OPTIONS = [
  "Getting discovered / increasing visibility",
  "Generating more qualified leads",
  "Improving website performance / conversions",
  "Growing e-commerce sales",
  "Improving marketplace performance",
  "Something else",
  "I'm not sure yet",
] as const;

export const OUTCOME_OPTIONS = [
  "More visibility",
  "More enquiries / leads",
  "More sales",
  "Better conversion",
  "Better marketplace performance",
  "A stronger digital presence",
  "Something else",
] as const;

export const BUSINESS_CATEGORY_OPTIONS = [
  "Manufacturer / B2B",
  "Professional Services",
  "Local Business",
  "E-commerce Brand",
  "Marketplace Seller",
  "Other",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within the next month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
] as const;

export const BUDGET_ALLOCATED_OPTIONS = ["Yes", "No", "I'm not sure"] as const;

export const BUDGET_RANGE_OPTIONS = [
  "Under ₹25,000",
  "₹25,000–₹50,000",
  "₹50,000–₹1 lakh",
  "₹1–3 lakh",
  "₹3 lakh+",
  "Prefer not to say",
] as const;

export type InquiryDraft = {
  challenges: string[];
  outcomes: string[];
  companyName: string;
  categories: string[];
  links: string[];
  businessDescription: string;
  painPoints: string;
  fullName: string;
  workEmail: string;
  country: string;
  timeline: string;
  budgetAllocated: string;
  budgetRange: string;
  additionalContext: string;
  consent: boolean;
};

export const EMPTY_DRAFT: InquiryDraft = {
  challenges: [],
  outcomes: [],
  companyName: "",
  categories: [],
  links: [""],
  businessDescription: "",
  painPoints: "",
  fullName: "",
  workEmail: "",
  country: "",
  timeline: "",
  budgetAllocated: "",
  budgetRange: "",
  additionalContext: "",
  consent: false,
};

export const STEPS = [
  { id: 1, label: "Your challenge" },
  { id: 2, label: "Your business" },
  { id: 3, label: "About you" },
  { id: 4, label: "Your project" },
  { id: 5, label: "Review & submit" },
] as const;
