// Build-time prerender: turns the SPA into static, crawlable HTML.
//
// For every route in the app it renders the React tree to HTML, injects the
// per-route <head> tags into the Vite-built template, and writes a real file
// (directory-per-route so URLs are clean). It also emits sitemap.xml, a 404.html
// SPA fallback, and rasterizes the social-share OG image.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const dist = join(root, "dist");
const serverEntry = pathToFileURL(join(root, "dist-server", "entry-server.js"));

const {
  render,
  allRoutes,
  sitemapXml,
  llmsTxt,
  llmsFullTxt,
  projectMarkdown,
  SITE,
} = await import(serverEntry.href);

const template = readFileSync(join(dist, "index.html"), "utf8");

function write(file, contents) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, contents);
}

function pageFor(route) {
  const { html, head } = render(route);
  return template
    .replace("<!--app-head-->", head)
    .replace("<!--app-html-->", html);
}

// 1. Generate the OG / Twitter share image (1200x630).
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1020"/>
      <stop offset="1" stop-color="#162033"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="10" fill="#38bdf8"/>
  <text x="80" y="250" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="700" fill="#f8fafc">Abu Ashraf Masnun</text>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="40" fill="#38bdf8">Software Architect · Distributed Systems</text>
  <text x="80" y="410" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#94a3b8">Go · Node.js · Python — scaling systems used by millions</text>
  <text x="80" y="560" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#64748b">masnun.me</text>
</svg>`;
await sharp(Buffer.from(ogSvg)).png().toFile(join(dist, "og.png"));

// 2. Prerender every route to a static HTML file.
const routes = allRoutes();
for (const route of routes) {
  const file =
    route === "/"
      ? join(dist, "index.html")
      : join(dist, route, "index.html");
  write(file, pageFor(route));
}

// 3. SPA fallback for unknown paths (GitHub Pages serves 404.html).
write(join(dist, "404.html"), pageFor("/"));

// 4. sitemap.xml
const lastmod = new Date().toISOString().slice(0, 10);
write(join(dist, "sitemap.xml"), sitemapXml(lastmod));

// 5. LLM accessibility: llms.txt map, full-text dump, and raw markdown per
//    project (so AI tools can fetch clean source instead of scraping HTML).
write(join(dist, "llms.txt"), llmsTxt());
write(join(dist, "llms-full.txt"), llmsFullTxt());
let mdCount = 0;
for (const route of routes) {
  const m = route.match(/^\/project\/(.+)$/);
  if (!m) continue;
  const md = projectMarkdown(m[1]);
  if (md) {
    write(join(dist, "project", `${m[1]}.md`), md);
    mdCount++;
  }
}

console.log(
  `Prerendered ${routes.length} routes + 404 + sitemap + llms.txt + llms-full.txt + ${mdCount} project .md + og.png for ${SITE.origin}`
);
