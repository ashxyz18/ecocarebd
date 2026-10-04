/**
 * Dev helper: builds a labelled contact sheet from a folder of images so a whole
 * batch can be reviewed in one look instead of opening files one by one.
 *
 * Usage: node scripts/make-contact-sheet.cjs <srcDir> <outFile> [cols] [cell]
 */
const sharp = require("sharp");
const fs = require("node:fs");
const path = require("node:path");

async function main() {
  const srcDir = path.resolve(process.argv[2] ?? "pool");
  const outFile = path.resolve(process.argv[3] ?? "contact-sheet.jpg");
  const COLS = Number(process.argv[4] ?? 5);
  const CELL = Number(process.argv[5] ?? 300);
  const PAD = 20;
  const LABEL = 24;

  const files = fs
    .readdirSync(srcDir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();

  if (files.length === 0) {
    console.log("no images in", srcDir);
    return;
  }

  const rows = Math.ceil(files.length / COLS);
  const cellH = CELL + LABEL;
  const width = COLS * (CELL + PAD) + PAD;
  const height = rows * (cellH + PAD) + PAD;

  const composites = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const x = PAD + col * (CELL + PAD);
    const y = PAD + row * (cellH + PAD);

    try {
      const buf = await sharp(path.join(srcDir, file))
        .resize(CELL, CELL, { fit: "cover" })
        .jpeg({ quality: 70 })
        .toBuffer();
      composites.push({ input: buf, left: x, top: y + LABEL });
    } catch (e) {
      console.warn("skip", file, e.message);
    }

    const name = path.basename(file, path.extname(file)).slice(0, 34);
    const labelSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${CELL}" height="${LABEL}">
      <rect width="${CELL}" height="${LABEL}" fill="#111827"/>
      <text x="4" y="17" font-family="monospace" font-size="13" fill="#ffffff">${i}: ${name}</text>
    </svg>`;
    composites.push({ input: Buffer.from(labelSvg), left: x, top: y });
  }

  await sharp({
    create: { width, height, channels: 3, background: "#ffffff" },
  })
    .composite(composites)
    .jpeg({ quality: 72 })
    .toFile(outFile);

  console.log(`Contact sheet: ${outFile} (${files.length} images, ${COLS}x${rows})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});