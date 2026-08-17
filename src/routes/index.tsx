import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

const title = "DSupply — Discover the Best Businesses Near You";
const description =
  "Find trusted local businesses, stores, services and more on DSupply. Search by category, location or business name across 60+ cities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});
