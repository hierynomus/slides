// Scaffolds decks/<name>/ with a minimal Slidev deck. Usage: bun scripts/new-deck.ts <name> ["Title"]
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const [name, title = name] = process.argv.slice(2);
if (!name || !/^[a-z0-9][a-z0-9-]*$/.test(name)) {
  console.error('Usage: new-deck <name> ["Title"]   (name: lowercase letters, digits, dashes)');
  process.exit(1);
}
const dir = resolve(import.meta.dir, "..", "decks", name);
if (existsSync(dir)) {
  console.error(`decks/${name} already exists`);
  process.exit(1);
}
mkdirSync(join(dir, "slides", "public"), { recursive: true });
const today = new Date().toISOString().slice(0, 10);
writeFileSync(join(dir, "package.json"), JSON.stringify({
  name, private: true, type: "module",
  scripts: { dev: "slidev slides/slides.md", build: "slidev build slides/slides.md", export: "slidev export slides/slides.md" },
}, null, 2) + "\n");
writeFileSync(join(dir, "deck.yaml"), `title: ${JSON.stringify(title)}\ndescription: \nhidden: true  # remove to list on the index page\nevents:\n  - name: TBD\n    date: ${today}\n`);
writeFileSync(join(dir, "slides", "slides.md"), `---\ntheme: default\ntitle: ${JSON.stringify(title)}\nauthor: Jeroen van Erp\nmdc: true\nrouterMode: hash\n---\n\n# ${title}\n\n---\n\n# Second slide\n`);
writeFileSync(join(dir, "README.md"), `# ${title}\n\nSlides for ... See the repository root README for how to run and publish.\n`);
console.log(`Created decks/${name}. Run: bun install && mise run dev ${name}`);
