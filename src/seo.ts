// Central SEO config: per-route metadata, canonical URLs, Open Graph / Twitter
// tags, JSON-LD, sitemap and the master route list. Shared by the server
// prerender (entry-server.tsx) and the client (App.tsx updates the title on
// SPA navigation). Keep this the single source of truth for anything <head>.

import { profile, projects, skills, blogPosts, ossProjects } from "./data.ts";

export const SITE = {
  origin: "https://masnun.me",
  name: profile.name,
  title: "Abu Ashraf Masnun — Software Craftsman",
  description:
    "Abu Ashraf Masnun — passionate full stack software developer. Python, Go, Node.js. Building scalable systems used by millions.",
};

type Meta = { title: string; description: string };

const staticMeta: Record<string, Meta> = {
  "/": { title: SITE.title, description: SITE.description },
  "/about": {
    title: "About — Abu Ashraf Masnun",
    description:
      "Abu Ashraf Masnun's story: 15+ years building backend and distributed systems, from self-taught teenager in Khulna to technical architect across Python, Go and Node.js.",
  },
  "/experience": {
    title: "Experience — Abu Ashraf Masnun",
    description:
      "15+ years of full-time and freelance engineering — high-scale email & SMS platforms, data pipelines, API gateways and polyglot code review across Python, Go and Node.js.",
  },
  "/projects": {
    title: "Projects — Abu Ashraf Masnun",
    description:
      "Selected work by Abu Ashraf Masnun: distributed systems, messaging platforms, real-time analytics, data pipelines and open-source projects in Go, Node.js and Python.",
  },
  "/writing": {
    title: "Writing — Abu Ashraf Masnun",
    description:
      "In-depth technical writing on async & concurrency, language internals, Go, distributed systems and API design from masnun.com and masnun.rocks.",
  },
  "/testimonials": {
    title: "Testimonials — Abu Ashraf Masnun",
    description:
      "What clients say about working with Abu Ashraf Masnun — 4.7★ across 57 Upwork reviews over a decade of backend and distributed-systems work.",
  },
};

// Every URL the site prerenders. Order is sitemap order.
export function allRoutes(): string[] {
  return [
    "/",
    "/about",
    "/experience",
    "/projects",
    "/writing",
    "/testimonials",
    ...projects.map((p) => `/project/${p.slug}`),
  ];
}

export function metaFor(path: string): Meta {
  const clean = path.split("?")[0];
  if (staticMeta[clean]) return staticMeta[clean];
  const m = clean.match(/^\/project\/(.+)$/);
  if (m) {
    const p = projects.find((x) => x.slug === m[1]);
    if (p) return { title: `${p.name} — ${SITE.name}`, description: p.summary };
  }
  return staticMeta["/"];
}

// Canonical URL with a trailing slash to match the directory-per-route output.
export function canonical(path: string): string {
  const clean = path.split("?")[0];
  const slug = clean === "/" ? "/" : `${clean.replace(/\/$/, "")}/`;
  return SITE.origin + slug;
}

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function jsonLd(): string {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.origin,
    image: `${SITE.origin}/og.png`,
    jobTitle: "Software Architect",
    description: profile.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Khulna",
      addressCountry: "Bangladesh",
    },
    knowsAbout: [
      "Distributed Systems",
      "Go",
      "Python",
      "Node.js",
      "Software Architecture",
    ],
    sameAs: [
      `https://${profile.github}`,
      profile.linkedin,
      profile.stackoverflow,
      profile.upwork,
    ],
  };
  // Escape "<" to keep the JSON safe inside an HTML <script> block.
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// The full set of <head> tags injected for a given route during prerender.
export function headTags(path: string): string {
  const { title, description } = metaFor(path);
  const url = canonical(path);
  const img = `${SITE.origin}/og.png`;
  const clean = path.split("?")[0];
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="author" content="${esc(SITE.name)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:type" content="${clean === "/" ? "website" : "article"}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  ];
  if (clean === "/") {
    tags.push(`<script type="application/ld+json">${jsonLd()}</script>`);
  }
  return tags.join("\n    ");
}

// --- LLM / AI-tool accessibility -----------------------------------------
// llms.txt is an emerging convention (llmstxt.org): a single markdown file that
// gives language models a curated, link-rich map of the site. llms-full.txt
// inlines the actual content so a model can ingest the whole site in one fetch.

const u = (path: string) => canonical(path);

export function llmsTxt(): string {
  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push("");
  lines.push(`> ${profile.tagline}. ${profile.summary}`);
  lines.push("");
  lines.push(`- Location: ${profile.location}`);
  lines.push(`- GitHub: https://${profile.github}`);
  lines.push(`- LinkedIn: ${profile.linkedin}`);
  lines.push(`- Stack Overflow: ${profile.stackoverflow}`);
  lines.push(`- Upwork: ${profile.upwork}`);
  lines.push("");

  lines.push("## Pages");
  lines.push(`- [About](${u("/about")}): ${metaFor("/about").description}`);
  lines.push(
    `- [Experience](${u("/experience")}): ${metaFor("/experience").description}`
  );
  lines.push(
    `- [Projects](${u("/projects")}): ${metaFor("/projects").description}`
  );
  lines.push(`- [Writing](${u("/writing")}): ${metaFor("/writing").description}`);
  lines.push(
    `- [Testimonials](${u("/testimonials")}): ${metaFor("/testimonials").description}`
  );
  lines.push("");

  lines.push("## Projects");
  for (const p of projects) {
    lines.push(`- [${p.name}](${u(`/project/${p.slug}`)}): ${p.summary}`);
  }
  lines.push("");

  lines.push("## Open Source");
  for (const o of ossProjects) {
    lines.push(`- [${o.name}](${o.link}): ${o.summary}`);
  }
  lines.push("");

  lines.push("## Writing");
  for (const cat of blogPosts) {
    for (const post of cat.posts) {
      lines.push(`- [${post.title}](${post.url}): ${post.blurb}`);
    }
  }
  lines.push("");

  lines.push("## Optional");
  lines.push(`- [Full text of the site](${SITE.origin}/llms-full.txt)`);
  lines.push(
    "- Each project also has a raw markdown version at /project/<slug>.md"
  );
  lines.push("");
  return lines.join("\n");
}

export function llmsFullTxt(): string {
  const out: string[] = [];
  out.push(`# ${SITE.name}`);
  out.push("");
  out.push(`> ${profile.tagline}`);
  out.push("");
  out.push("## Summary");
  out.push(profile.summary);
  out.push("");

  out.push("## About");
  for (const para of profile.about) out.push(para + "\n");

  out.push("## Skills");
  for (const s of skills) {
    out.push(`### ${s.name}`);
    out.push(s.blurb);
    out.push(`Tags: ${s.tags.join(", ")}`);
    out.push("");
  }

  out.push("## Projects");
  for (const p of projects) {
    out.push(`### ${p.name}`);
    out.push(`URL: ${u(`/project/${p.slug}`)}`);
    out.push(`Tags: ${p.tags.join(", ")}`);
    out.push("");
    out.push(p.markdown ?? p.details);
    out.push("");
  }

  out.push("## Open Source");
  for (const o of ossProjects) {
    out.push(`### ${o.name}`);
    out.push(`URL: ${o.link}`);
    out.push(o.summary);
    out.push("");
  }

  out.push("## Writing");
  for (const cat of blogPosts) {
    out.push(`### ${cat.category}`);
    for (const post of cat.posts) {
      out.push(`- ${post.title} (${post.url}): ${post.blurb}`);
    }
    out.push("");
  }

  return out.join("\n");
}

// Raw markdown body for one project route, used to publish /project/<slug>.md.
export function projectMarkdown(slug: string): string | null {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;
  const header = `# ${p.name}\n\n${p.summary}\n\nTags: ${p.tags.join(", ")}\n`;
  return `${header}\n${p.markdown ?? p.details}\n`;
}

export function sitemapXml(lastmod: string): string {
  const urls = allRoutes()
    .map(
      (r) =>
        `  <url>\n    <loc>${canonical(r)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${r === "/" ? "1.0" : "0.7"}</priority>\n  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}
