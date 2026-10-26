import { createFileRoute } from "@tanstack/react-router";

import { LandingPage } from "../components/landing/landing-page";
import landingCss from "../components/landing/landing.css?url";

// Title/description/og/twitter are inherited from __root.tsx. No og:image here so
// serve-time hosting can inject the project's social preview.
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ name: "theme-color", content: "#0a0a0a" }],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "stylesheet", href: landingCss },
    ],
  }),
  component: LandingPage,
});
