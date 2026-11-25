// Serves site/ at http://localhost:4173/slides/. Usage: bun scripts/preview.ts
import { serveSite, prefix } from "./serve";

const server = serveSite(Number(process.env.PORT ?? 4173));
console.log(`Serving site/ at http://localhost:${server.port}${prefix}/`);
