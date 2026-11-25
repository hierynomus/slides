// Screenshots the first slide of each built deck to site/<deck>/thumbnail.jpg.
// Usage: bun scripts/thumbnails.ts [deck ...]   (run after the decks are built into site/)
import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright-chromium";
import { serveSite, siteDir, prefix } from "./serve";

export async function makeThumbnails(only: string[] = []) {
  const decks = readdirSync(siteDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && existsSync(join(siteDir, e.name, "index.html")))
    .map((e) => e.name)
    .filter((n) => !only.length || only.includes(n));
  const server = serveSite();
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
    for (const deck of decks) {
      await page.goto(`http://localhost:${server.port}${prefix}/${deck}/#/1`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1500); // entrance transitions and lazy images
      const out = join(siteDir, deck, "thumbnail.jpg");
      await page.screenshot({ path: out, type: "jpeg", quality: 80 });
      console.log(`thumbnail: ${out}`);
    }
  } finally {
    await browser.close();
    server.stop(true);
  }
}

if (import.meta.main) await makeThumbnails(process.argv.slice(2));
