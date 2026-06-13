import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "/" — the site is served from the root of the custom domain
// (masnun.com), and path-based routes like /projects need absolute asset URLs
// so they resolve the same from any depth.
export default defineConfig({
  base: "/",
  plugins: [react()],
});
