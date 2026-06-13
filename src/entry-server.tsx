// Server entry used only at build time by scripts/prerender.mjs. Renders the
// app to an HTML string for a given route and supplies the matching <head>
// tags, route list and sitemap. Never shipped to the browser.

import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import { RouterProvider } from "./router.tsx";
import { headTags } from "./seo.ts";

export function render(path: string): { html: string; head: string } {
  const html = renderToString(
    <RouterProvider initialPath={path}>
      <App />
    </RouterProvider>
  );
  return { html, head: headTags(path) };
}

export {
  allRoutes,
  sitemapXml,
  llmsTxt,
  llmsFullTxt,
  projectMarkdown,
  SITE,
} from "./seo.ts";
