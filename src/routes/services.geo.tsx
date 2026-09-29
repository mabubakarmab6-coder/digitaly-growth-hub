import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/geo")({
  beforeLoad: () => {
    throw redirect({ to: "/services/GEO", statusCode: 301 });
  },
});
