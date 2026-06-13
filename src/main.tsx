import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider } from "./router.tsx";
import "./styles.css";

const root = document.getElementById("root")!;
const initialPath = window.location.pathname + window.location.search;

const app = (
  <React.StrictMode>
    <RouterProvider initialPath={initialPath}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// Prerendered HTML is present in production -> hydrate. In dev the root is
// empty -> client render.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
