// Builds every deck (or the ones named on the command line) into site/<deck>/
// with the right --base for GitHub Pages, then generates site/index.html.
// Usage: bun scripts/build-site.ts [deck ...]
import { copyFileSync, existsSync, readdirSync, rmSync, mkdirSync, writeFileSync } from "node:fs";
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

const fmtDate = (d?: string | Date) =>
  d ? new Date(iso(d)).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }) : "";

function indexHtml(decks: Deck[]) {
  const cards = decks
    .filter((d) => !d.meta.hidden)
    .sort((a, b) => sortKey(b).localeCompare(sortKey(a)))
    .map((d) => {
      const events = (d.meta.events ?? [])
        .map((e) => {
          const label = esc(e.name);
          const name = e.url ? `<a href="${esc(e.url)}">${label}</a>` : label;
          return `<li>${e.date ? `<time datetime="${iso(e.date)}">${fmtDate(e.date)}</time>` : ""}<span>${name}</span></li>`;
        })
        .join("");
      const thumb = existsSync(join(siteDir, d.name, "thumbnail.jpg"))
        ? `<a class="thumb" href="${esc(d.name)}/" tabindex="-1" aria-hidden="true"><img src="${esc(d.name)}/thumbnail.jpg" alt="" width="960" height="540" loading="lazy"></a>`
        : "";
      return `<article>
  ${thumb}
  <div class="body">
    <h2><a href="${esc(d.name)}/">${esc(d.meta.title)}</a></h2>
    ${d.meta.description ? `<p>${esc(d.meta.description)}</p>` : ""}
    <ul>${events}</ul>
  </div>
</article>`;
    })
    .join("\n");
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Slides · Jeroen van Erp</title>
<link rel="icon" href="geeko.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=SUSE:wght@300;400;500;600;700&display=swap">
<style>
:root{
  --pine:#0c322c;--jungle:#30ba78;--mint:#90ebcd;--waterhole:#2453ff;--persimmon:#fe7c3f;--fog:#efefef;
  --bg:var(--fog);--card:#fff;--fg:var(--pine);--muted:#4d6761;--link:#025937;--chip:#c0efde;--chip-fg:#025937;--shadow:0 1px 3px rgba(12,50,44,.12),0 8px 24px rgba(12,50,44,.08)
}
@media (prefers-color-scheme:dark){:root{--bg:#081f1b;--card:#16453b;--fg:#fff;--muted:#a9cfc3;--link:var(--mint);--chip:#0c322c;--chip-fg:var(--mint);--shadow:0 8px 24px rgba(0,0,0,.35)}}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--fg);font:400 16px/1.5 "SUSE",system-ui,-apple-system,sans-serif}
a{color:var(--link)}
.hero{background:radial-gradient(circle at 15% 0%,#0f5a48 0%,var(--pine) 70%);color:#fff;padding:32px 16px 56px;position:relative;overflow:hidden}
.hero>div{max-width:1200px;margin:0 auto}
.brand{display:flex;align-items:center;gap:10px;font-weight:500;font-size:1.4rem;letter-spacing:.1em}
.brand img{height:1.5em}
.hero h1{margin:48px 0 8px;font-size:clamp(2.2rem,6vw,3.5rem);font-weight:500;line-height:1.1}
.hero h1 em{font-style:normal;color:var(--jungle)}
.hero p{margin:0;max-width:44ch;font-size:1.1rem;color:var(--mint);font-weight:300}
.hero kbd{background:rgba(255,255,255,.12);border-radius:4px;padding:1px 6px;font:inherit;font-weight:500;color:#fff}
.hero::after{content:"";position:absolute;right:-80px;bottom:-120px;width:420px;height:420px;background:url(geeko.png) no-repeat center/contain;opacity:.12;transform:scaleX(-1);pointer-events:none}
main{max-width:1200px;margin:-28px auto 0;padding:0 16px 64px;position:relative;z-index:1}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,340px),1fr));gap:24px}
article{background:var(--card);border-radius:14px;overflow:hidden;box-shadow:var(--shadow);display:flex;flex-direction:column;transition:transform .15s,box-shadow .15s}
article:hover,article:focus-within{transform:translateY(-3px);box-shadow:0 0 0 2px var(--jungle),var(--shadow)}
.thumb{display:block;background:var(--pine);aspect-ratio:16/9}
.thumb img{display:block;width:100%;height:100%;object-fit:cover}
.body{padding:18px 22px 22px;display:flex;flex-direction:column;gap:10px;flex:1}
h2{margin:0;font-size:1.2rem;font-weight:600;line-height:1.3}
h2 a{color:inherit;text-decoration:none}
h2 a::after{content:"";position:absolute;inset:0}
article{position:relative}
.body a:not(h2 a){position:relative;z-index:1}
.body p{margin:0;color:var(--muted);font-size:.93rem}
ul{margin:auto 0 0;padding:6px 0 0;list-style:none;display:flex;flex-direction:column;gap:6px;font-size:.85rem}
li{display:flex;gap:8px;align-items:baseline}
time{flex:none;background:var(--chip);color:var(--chip-fg);border-radius:999px;padding:1px 10px;font-weight:600;font-size:.78rem;font-variant-numeric:tabular-nums}
footer{max-width:1200px;margin:0 auto;padding:0 16px 40px;color:var(--muted);font-size:.85rem}
</style></head><body>
<header class="hero"><div>
  <div class="brand"><img src="geeko.png" alt=""><span>SUSE</span></div>
  <h1>Talks &amp; <em>slides</em></h1>
  <p>Decks by Jeroen van Erp. In a deck, press <kbd>o</kbd> for the overview and <kbd>p</kbd> for presenter mode.</p>
</div></header>
<main><div class="grid">
${cards}
</div></main>
<footer><a href="https://github.com/hierynomus/slides">Source on GitHub</a></footer>
</body></html>`;
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
copyFileSync(join(root, "assets", "geeko.png"), join(siteDir, "geeko.png"));
console.log(`\nSite ready in ${siteDir}`);
