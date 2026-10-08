import type { ValidatedInquiry } from "./config";

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbwZWN7iUPZCDoOdet5g1q0GOllRTb4-dYwR2XFePaJ5hEGfzDAK0yf4ZWb8BT7ezUg4/exec";

export function mapGoogleInquiry(data: ValidatedInquiry, submissionId: string) {
  return {
    fullName: data.fullName,
    workEmail: data.workEmail,
    country: "",
    companyName: data.companyName,
    onlinePresence: "",
    // The current form combines business description and challenge in one answer.
    // Preserve it verbatim rather than guessing how to split it.
    businessDescription: data.businessAndChallenge,
    painPoints: "",
    services: [data.selectedService],
    source: "DigitalyMarket Website",
    userAgent: data.userAgent,
    selectedService: data.selectedService,
    businessAndChallenge: data.businessAndChallenge,
    sourceService: data.sourceService,
    sourcePage: data.sourcePage,
    submissionId,
  };
}

export async function forwardGoogleInquiry(data: ValidatedInquiry, submissionId: string) {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(mapGoogleInquiry(data, submissionId)),
    redirect: "follow",
    signal: AbortSignal.timeout(25_000),
  });
  if (!response.ok) throw new Error(`Google enquiry endpoint returned HTTP ${response.status}.`);
  const result: unknown = await response.json();
  if (!result || typeof result !== "object" || !("success" in result) || result.success !== true) {
    throw new Error("Google enquiry endpoint did not confirm success.");
  }
}
