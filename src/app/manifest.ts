import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eco Care BD",
    short_name: "Eco Care",
    description:
      "Pest control, water tank cleaning, deep cleaning and AC maintenance in Chattogram. Free inspection, fixed prices.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#15803d",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
    ],
  };
}