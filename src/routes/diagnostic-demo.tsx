import { createFileRoute } from "@tanstack/react-router";
import { DymDiagnosticPage } from "@/components/dym-next/DymPages";
const url="https://digitalymarket.com/diagnostic-demo";
export const Route=createFileRoute("/diagnostic-demo")({
 component:DymDiagnosticPage,
 head:()=>({
  meta:[{title:"Explore Your Growth Challenge | DigitalyMarket"},{name:"description",content:"Explore possible first questions for diagnosing your digital growth challenge. Illustrative and not a scored business audit."},{name:"robots",content:"noindex, follow"},{property:"og:url",content:url}],
  links:[{rel:"canonical",href:url}],
 }),
});
