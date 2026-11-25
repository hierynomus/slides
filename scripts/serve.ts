// Static server for site/, mounted under /slides/ like GitHub Pages. Shared by preview.ts and thumbnails.ts.
import { join, resolve } from "node:path";

export const siteDir = resolve(import.meta.dir, "..", "site");
export const prefix = "/slides";

export function serveSite(port = 0) {
  return Bun.serve({
    port,
    async fetch(req) {
      const path = decodeURIComponent(new URL(req.url).pathname);
      if (path === "/") return Response.redirect(`${prefix}/`, 302);
      if (!path.startsWith(`${prefix}/`) && path !== prefix) return new Response("Not found", { status: 404 });
      let rel = path.slice(prefix.length);
      if (rel === "") return Response.redirect(`${prefix}/`, 301);
      if (rel.endsWith("/")) rel += "index.html";
      const full = join(siteDir, rel);
      if (!full.startsWith(siteDir + "/")) return new Response("Forbidden", { status: 403 });
      const file = Bun.file(full);
      return (await file.exists()) ? new Response(file) : new Response("Not found", { status: 404 });
    },
  });
}
