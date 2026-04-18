/**
 * scripts/generate-placeholders.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Generates placeholder SVG images for local development.
 * Run: node scripts/generate-placeholders.js
 *
 * Replace the generated files in /public/images/ with real images before
 * deploying to production.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const fs   = require("fs");
const path = require("path");

/** Output directory for all public images */
const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

/** Ensure the output directory exists */
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Generates a simple SVG placeholder image.
 *
 * @param {string} label   - Text label displayed on the placeholder
 * @param {string} bgColor - Background fill colour (hex)
 * @param {string} w       - SVG viewBox width
 * @param {string} h       - SVG viewBox height
 * @returns {string}       - SVG markup string
 */
function makeSvgPlaceholder(label, bgColor = "#e2e8f0", w = "800", h = "1000") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bgColor}"/>
  <text
    x="50%" y="50%"
    dominant-baseline="middle"
    text-anchor="middle"
    font-family="Georgia, serif"
    font-size="28"
    fill="#94a3b8"
  >${label}</text>
</svg>`;
}

/** Placeholder image definitions */
const PLACEHOLDERS = [
  { filename: "stella-portrait.jpg",  label: "Stella Portrait",    bg: "#f1e8e0", w: "800",  h: "1000" },
  { filename: "podcast-ep1.jpg",      label: "Episode 1 Thumbnail",bg: "#e8f0e0", w: "800",  h: "800"  },
  { filename: "podcast-ep2.jpg",      label: "Episode 2 Thumbnail",bg: "#e0e8f0", w: "800",  h: "800"  },
  { filename: "podcast-ep3.jpg",      label: "Episode 3 Thumbnail",bg: "#f0e0e8", w: "800",  h: "800"  },
  { filename: "og-image.jpg",         label: "OG Image 1200x630",  bg: "#0f172a", w: "1200", h: "630"  },
];

/** Write each placeholder SVG to disk (with .jpg extension — still serves as valid placeholder) */
PLACEHOLDERS.forEach(({ filename, label, bg, w, h }) => {
  const svgContent = makeSvgPlaceholder(label, bg, w, h);
  const outputPath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(outputPath, svgContent, "utf-8");
  console.log(`✓ Created placeholder: public/images/${filename}`);
});

console.log("\n📸 Replace these files with real images before deploying.\n");
