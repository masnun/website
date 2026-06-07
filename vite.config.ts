import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes asset paths relative, so the build works on any
// GitHub Pages URL (user site, project subpath) or a custom domain.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
