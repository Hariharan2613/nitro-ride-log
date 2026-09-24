import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veloce — Ride Smarter. Maintain Better." },
      { name: "description", content: "A premium motorcycle service tracker for mileage, maintenance, alerts and performance insights." },
      { property: "og:title", content: "Veloce — Ride Smarter. Maintain Better." },
      { property: "og:description", content: "A premium motorcycle service tracker for mileage, maintenance, alerts and performance insights." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});