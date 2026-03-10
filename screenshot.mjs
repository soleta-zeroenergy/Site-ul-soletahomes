/**
 * screenshot.mjs — takes a screenshot of a URL using Puppeteer
 * Usage: node screenshot.mjs <url> [label]
 * Example: node screenshot.mjs http://localhost:3000
 * Example: node screenshot.mjs http://localhost:3000 hero
 * Saves to: ./temporary screenshots/screenshot-N.png (or screenshot-N-label.png)
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const url = process.argv[2];
const label = process.argv[3];

if (!url) {
  console.error('Usage: node screenshot.mjs <url> [label]');
  process.exit(1);
}

const outputDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Find the next available screenshot number
const existing = fs.readdirSync(outputDir)
  .map(f => f.match(/^screenshot-(\d+)/))
  .filter(Boolean)
  .map(m => parseInt(m[1], 10));

const next = existing.length > 0 ? Math.max(...existing) + 1 : 1;
const filename = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;
const outputPath = path.join(outputDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });

try {
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.screenshot({ path: outputPath, fullPage: true });
  console.log(`Screenshot saved: temporary screenshots/${filename}`);
} catch (err) {
  console.error('Screenshot failed:', err.message);
  await browser.close();
  process.exit(1);
}

await browser.close();
