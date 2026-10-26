import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/start")({
  beforeLoad: () => {
    throw redirect({ to: "/", search: { inquire: "true" }, replace: true });
  },
  head: () => ({
    meta: [
      { title: "Start a Conversation | DigitalyMarket" },
      { name: "description", content: "Start a conversation with DigitalyMarket." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Start a Conversation | DigitalyMarket" },
      { property: "og:description", content: "Start a conversation with DigitalyMarket." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://digitalymarket.com/start" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://digitalymarket.com/start" }],
  }),
});
