import { NextResponse } from "next/server";

/**
 * OG image is generated as a static SVG at build time via next.config.ts image
 * metadata; this route exists so `opengraph-image` style URLs stay available.
 */
export function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#052e16"/>
      <stop offset="100%" stop-color="#15803d"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <text x="80" y="270" font-family="Poppins, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">Eco Care BD</text>
  <text x="80" y="350" font-family="Poppins, Arial, sans-serif" font-size="46" font-weight="600" fill="#bbf7d0">Protecting Homes. Purifying Lives.</text>
  <text x="80" y="430" font-family="Arial, sans-serif" font-size="28" fill="#ffffff" opacity="0.8">Pest Control &#183; Water Tank Cleaning &#183; Deep Cleaning</text>
  <rect x="80" y="480" width="420" height="60" rx="12" fill="#eab308"/>
  <text x="110" y="520" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#0f172a">Free inspection &#183; Chattogram</text>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}