// Builds every deck (or the ones named on the command line) into site/<deck>/
// with the right --base for GitHub Pages, then generates site/index.html.
// Usage: bun scripts/build-site.ts [deck ...]
import { existsSync, readdirSync, rmSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { makeThumbnails } from "./thumbnails";

const root = resolve(import.meta.dir, "..");
const decksDir = join(root, "decks");
const siteDir = join(root, "site");
const repoBase = process.env.SITE_BASE ?? "/slides"; // https://hierynomus.github.io/slides/

type Event = { name: string; date?: string | Date; url?: string };
type Meta = { title: string; description?: string; hidden?: boolean; events?: Event[] };
type Deck = { name: string; meta: Meta };

const iso = (d?: string | Date) => (d instanceof Date ? d.toISOString().slice(0, 10) : d ? String(d) : "");

async function loadDecks(): Promise<Deck[]> {
  const names = readdirSync(decksDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && existsSync(join(decksDir, e.name, "deck.yaml")))
    .map((e) => e.name)
    .sort();
  return Promise.all(
    names.map(async (name) => ({
      name,
      meta: Bun.YAML.parse(await Bun.file(join(decksDir, name, "deck.yaml")).text()) as Meta,
    })),
  );
}

async function build(deck: Deck) {
  const out = join(siteDir, deck.name);
  console.log(`\n==> Building ${deck.name} -> ${out}`);
  const proc = Bun.spawn(
    ["bunx", "slidev", "build", "slides/slides.md", "--base", `${repoBase}/${deck.name}/`, "--out", out],
    { cwd: join(decksDir, deck.name), stdout: "inherit", stderr: "inherit" },
  );
  if ((await proc.exited) !== 0) throw new Error(`Build of ${deck.name} failed`);
}

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
// Latest event date; decks without a date sort first (not yet presented).
const sortKey = (d: Deck) => (d.meta.events ?? []).map((e) => iso(e.date)).sort().pop() || "9999";

function indexHtml(decks: Deck[]) {
  const cards = decks
    .filter((d) => !d.meta.hidden)
    .sort((a, b) => sortKey(b).localeCompare(sortKey(a)))
    .map((d) => {
      const events = (d.meta.events ?? [])
        .map((e) => {
          const label = esc(e.name);
          const name = e.url ? `<a href="${esc(e.url)}">${label}</a>` : label;
          return `<li>${name}${e.date ? ` <time>${iso(e.date)}</time>` : ""}</li>`;
        })
        .join("");
      const thumb = existsSync(join(siteDir, d.name, "thumbnail.jpg"))
        ? `<a href="${esc(d.name)}/"><img src="${esc(d.name)}/thumbnail.jpg" alt="Title slide of ${esc(d.meta.title)}" width="960" height="540" loading="lazy"></a>`
        : "";
      return `<article>
  ${thumb}
  <h2><a href="${esc(d.name)}/">${esc(d.meta.title)}</a></h2>
  ${d.meta.description ? `<p>${esc(d.meta.description)}</p>` : ""}
  <ul>${events}</ul>
</article>`;
    })
    .join("\n");
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Slides · Jeroen van Erp</title>
<style>
:root{--bg:#fff;--fg:#1b2b27;--muted:#5b6b66;--card:#f3f6f5;--accent:#0c322c;--link:#0b6b57}
@media (prefers-color-scheme:dark){:root{--bg:#0f1816;--fg:#e6efec;--muted:#9bb0aa;--card:#18251f;--accent:#8fe0c4;--link:#7fdcbf}}
body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.55 system-ui,-apple-system,sans-serif}
main{max-width:760px;margin:0 auto;padding:48px 16px}
h1{margin:0 0 4px;color:var(--accent)} header p{margin:0 0 32px;color:var(--muted)}
article{background:var(--card);border-radius:12px;padding:20px 24px;margin:0 0 16px;overflow:hidden}
article img{display:block;width:calc(100% + 48px);height:auto;aspect-ratio:16/9;object-fit:cover;margin:-20px -24px 16px}
article h2{margin:0 0 6px;font-size:1.25rem} article p{margin:0 0 10px}
a{color:var(--link)} ul{margin:0;padding:0;list-style:none;color:var(--muted);font-size:.9rem}
time{margin-left:.5em;font-variant-numeric:tabular-nums}
</style></head><body><main>
<header><h1>Slides</h1><p>Talks by Jeroen van Erp. Press <kbd>o</kbd> for the overview, <kbd>p</kbd> for presenter mode.</p></header>
${cards}
</main></body></html>`;
}

const decks = await loadDecks();
const wanted = process.argv.slice(2);
const toBuild = wanted.length ? decks.filter((d) => wanted.includes(d.name)) : decks;
if (wanted.length && toBuild.length !== wanted.length) {
  throw new Error(`Unknown deck(s). Available: ${decks.map((d) => d.name).join(", ")}`);
}
if (!wanted.length) rmSync(siteDir, { recursive: true, force: true });
mkdirSync(siteDir, { recursive: true });
for (const d of toBuild) await build(d);
if (!process.env.SKIP_THUMBNAILS) await makeThumbnails(toBuild.map((d) => d.name));
writeFileSync(join(siteDir, "index.html"), indexHtml(decks));
writeFileSync(join(siteDir, ".nojekyll"), "");
console.log(`\nSite ready in ${siteDir}`);
