/**
 * Generates branded placeholder JPEGs so the site never renders a broken image.
 * Replace any file in public/images with a real photo of the same name and the
 * site picks it up automatically — no code changes needed.
 */
const sharp = require("sharp");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.join(__dirname, "..", "public", "images");

const PALETTES = {
  blue: ["#0c2461", "#1d4ed8", "#60a5fa"],
  cyan: ["#0c2461", "#0e7490", "#22d3ee"],
  sky: ["#0c2461", "#0369a1", "#38bdf8"],
  amber: ["#3f2d0c", "#b45309", "#fbbf24"],
  slate: ["#0b1220", "#334155", "#94a3b8"],
  deep: ["#0c2461", "#1e40af", "#2563eb"],
};

function escapeXml(s) {
  return String(s).replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]
  );
}

function svg({ w, h, palette, title, subtitle, label }) {
  const [dark, mid, accent] = PALETTES[palette] ?? PALETTES.green;
  const titleSize = Math.round(w / 15);
  const subSize = Math.round(w / 30);
  const badgeSize = Math.round(w / 34);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${dark}"/>
      <stop offset="55%" stop-color="${mid}"/>
      <stop offset="100%" stop-color="${accent}"/>
    </linearGradient>
    <pattern id="dots" width="34" height="34" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.6" fill="#ffffff" opacity="0.14"/>
    </pattern>
  </defs>

  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#dots)"/>
  <circle cx="${w * 0.84}" cy="${h * 0.16}" r="${w * 0.26}" fill="#ffffff" opacity="0.07"/>
  <circle cx="${w * 0.12}" cy="${h * 0.9}" r="${w * 0.3}" fill="#ffffff" opacity="0.06"/>

  <text x="${w * 0.07}" y="${h * 0.42}" font-family="Poppins, Segoe UI, Arial, sans-serif"
        font-size="${titleSize}" font-weight="800" fill="#ffffff" opacity="0.96">${escapeXml(title)}</text>
  <text x="${w * 0.07}" y="${h * 0.42 + titleSize * 1.25}" font-family="Segoe UI, Arial, sans-serif"
        font-size="${subSize}" font-weight="500" fill="#ffffff" opacity="0.72">${escapeXml(subtitle)}</text>

  <g transform="translate(${w * 0.07} ${h * 0.72})">
    <rect width="${w * 0.42}" height="${badgeSize * 2.2}" rx="${badgeSize * 0.5}" fill="#ffffff" opacity="0.14"/>
    <text x="${badgeSize * 0.8}" y="${badgeSize * 1.5}" font-family="Segoe UI, Arial, sans-serif"
          font-size="${badgeSize}" font-weight="700" fill="#ffffff" opacity="0.9">${escapeXml(label)}</text>
  </g>

  <text x="${w * 0.07}" y="${h * 0.93}" font-family="Segoe UI, Arial, sans-serif"
        font-size="${Math.round(w / 42)}" font-weight="600" fill="#ffffff" opacity="0.5">PLACEHOLDER &#183; replace with your own photo</text>
</svg>`;
}

const SERVICE_PLACEHOLDERS = [
  ["fumigation-services", "Fumigation", "Hospitals &#183; warehouses &#183; godowns", "deep"],
  ["water-tank-cleaning", "Water Tank Cleaning", "Reserve &amp; overhead tanks", "cyan"],
  ["termite-control", "Termite Control", "Baiting &amp; barrier treatment", "amber"],
  ["bed-bug-control", "Bed Bug Control", "Heat &amp; chemical treatment", "slate"],
  ["cockroach-control", "Cockroach Control", "Gel bait &amp; drain treatment", "amber"],
  ["rodent-control", "Rodent Control", "Trapping, baiting &amp; proofing", "slate"],
  ["mosquito-fly-control", "Mosquito &amp; Fly Control", "Fogging &amp; residual spray", "cyan"],
  ["woodworm-control", "Woodworm Control", "Deep timber treatment", "amber"],
  ["home-office-cleaning", "Home &amp; Office Cleaning", "Deep &amp; recurring plans", "blue"],
  ["sofa-carpet-cleaning", "Sofa &amp; Carpet Cleaning", "Steam extraction", "blue"],
  ["outdoor-glass-cleaning", "Glass Cleaning", "High-rise rope access", "sky"],
  ["ac-repair-maintenance", "AC Repair &amp; Maintenance", "Servicing &amp; gas refill", "sky"],
];

const SITE_PLACEHOLDERS = [
  ["hero-technician", 1200, 1500, "Certified Technicians", "Eco-safe, family-safe treatment", "blue", "Pest control"],
  ["trust-eco-treatment", 1200, 1500, "Eco-Friendly Methods", "Low-toxicity, targeted products", "deep", "Child &amp; pet safe"],
  ["about-team", 1400, 1050, "Our Team", "50+ certified technicians in Chattogram", "blue", "Since 2009"],
];

async function write(file, buffer) {
  const full = path.join(ROOT, file);
  await fs.promises.mkdir(path.dirname(full), { recursive: true });
  await fs.promises.writeFile(full, buffer);
  return full;
}

async function main() {
  let count = 0;

  for (const [slug, title, subtitle, palette] of SERVICE_PLACEHOLDERS) {
    const buffer = await sharp(
      Buffer.from(
        svg({ w: 1200, h: 900, palette, title, subtitle, label: "Eco Care BD" })
      )
    )
      .jpeg({ quality: 72, progressive: true })
      .toBuffer();
    count++;
    await write(path.join("services", `${slug}.jpg`), buffer);
  }

  for (const [name, w, h, title, subtitle, palette, label] of SITE_PLACEHOLDERS) {
    const buffer = await sharp(Buffer.from(svg({ w, h, palette, title, subtitle, label })))
      .jpeg({ quality: 72, progressive: true })
      .toBuffer();
    count++;
    await write(`${name}.jpg`, buffer);
  }

  const PHASES = ["Before", "During", "After", "Detail"];
  for (const [slug, title, , palette] of SERVICE_PLACEHOLDERS) {
    for (let i = 0; i < PHASES.length; i++) {
      const buffer = await sharp(
        Buffer.from(
          svg({
            w: 1000,
            h: 1000,
            palette,
            title: title.replace(/&amp;/g, "&"),
            subtitle: "Eco Care BD &#183; Chattogram",
            label: PHASES[i],
          })
        )
      )
        .jpeg({ quality: 70, progressive: true })
        .toBuffer();
      count++;
      await write(path.join("gallery", `${slug}-${i + 1}.jpg`), buffer);
    }
  }

  console.log(`Generated ${count} placeholder images in ${ROOT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});