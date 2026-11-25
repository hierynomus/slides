// Serves site/ under the /slides/ prefix, like GitHub Pages does. Usage: bun scripts/preview.ts
import { join, resolve } from "node:path";

const site = resolve(import.meta.dir, "..", "site");
const prefix = "/slides";
const port = Number(process.env.PORT ?? 4173);

Bun.serve({
  port,
  async fetch(req) {
    const path = decodeURIComponent(new URL(req.url).pathname);
    if (path === "/") return Response.redirect(`${prefix}/`, 302);
    if (!path.startsWith(`${prefix}/`) && path !== prefix) return new Response("Not found", { status: 404 });
    let rel = path.slice(prefix.length);
    if (rel === "") return Response.redirect(`${prefix}/`, 301);
    if (rel.endsWith("/")) rel += "index.html";
    const file = Bun.file(join(site, rel));
    if (!file.name!.startsWith(site)) return new Response("Forbidden", { status: 403 });
    if (await file.exists()) return new Response(file);
    return new Response("Not found", { status: 404 });
  },
});
console.log(`Serving ${site} at http://localhost:${port}${prefix}/`);
