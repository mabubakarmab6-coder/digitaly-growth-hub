import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/start")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
  head: () => ({
    meta: [
      { title: "Start a Conversation | DigitalyMarket" },
      { name: "description", content: "Start a conversation with DigitalyMarket." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Start a Conversation | DigitalyMarket" },
      { property: "og:description", content: "Start a conversation with DigitalyMarket." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://digitalymarket.com/" }],
  }),
});
