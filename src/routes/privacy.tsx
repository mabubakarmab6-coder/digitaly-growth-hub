import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GlobalFloatingCta } from "@/components/site/GlobalFloatingCta";
import { CONTACT_EMAIL } from "@/components/site/constants";

const title = "Privacy Policy | DigitalyMarket";
const description =
  "How DigitalyMarket collects, uses and protects the information you share through a growth conversation enquiry.";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://digitalymarket.com/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://digitalymarket.com/privacy" }],
  }),
});

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "What we collect",
    body: [
      "When you submit a growth conversation enquiry, we collect the details you choose to share: your name, work email, country, business name, business category, links to your online presence, and the context you write about your business, challenges, timeline and budget.",
      "We do not ask for a phone number, home address or any payment information.",
    ],
  },
  {
    heading: "Why we collect it",
    body: [
      "We use your enquiry to understand your business, assess whether we can genuinely help, and reply to you by email with the next appropriate step. That is the only purpose.",
    ],
  },
  {
    heading: "How we contact you",
    body: [
      "We follow up by email using the work email address you provide. We do not add you to a marketing list, and we do not contact you by phone or messaging apps.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries are retained only as long as needed to evaluate and respond to them, and to keep a record of our business correspondence. You can ask us to delete your enquiry at any time.",
    ],
  },
  {
    heading: "Analytics",
    body: [
      "We use standard website analytics to understand how pages are used — for example how many people begin or complete an enquiry. The free-text answers you write in the enquiry are never sent to analytics tools.",
    ],
  },
  {
    heading: "Your choices",
    body: [
      "You can request access to, correction of, or deletion of the information you shared with us. Email us and we'll action it.",
    ],
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <section className="section-y">
          <div className="container-page">
            <div className="mx-auto max-w-2xl">
              <p className="eyebrow">Privacy</p>
              <h1 className="mt-5 text-[2.2rem] leading-[1.1] font-semibold text-foreground sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                We keep this simple: we only collect what you choose to tell us in an enquiry, and we
                only use it to reply to you.
              </p>

              <div className="mt-12 grid gap-10">
                {sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-xl font-semibold tracking-tight text-foreground">
                      {section.heading}
                    </h2>
                    {section.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-3 text-base leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <p className="mt-12 border-t border-hairline pt-6 text-sm text-muted-foreground">
                Questions about this policy?{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <GlobalFloatingCta />
    </div>
  );
}
