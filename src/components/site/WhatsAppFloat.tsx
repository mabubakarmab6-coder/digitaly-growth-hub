import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./constants";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DigitalyMarket on WhatsApp"
      title="WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-full border border-hairline bg-card px-4 text-sm font-semibold text-foreground shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
