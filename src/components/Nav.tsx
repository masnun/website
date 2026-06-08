import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { profile } from "../data.ts";
import { useHashRoute } from "../hooks/useHashRoute.ts";

const icon = (d: string): ReactNode => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d={d} />
  </svg>
);

// href is a full hash target: "#anchor" scrolls the home page,
// "#/page" routes to a sub-page.
const links: [string, string, ReactNode][] = [
  ["#/", "Home", icon("M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z")],
  [
    "#/about",
    "About",
    icon(
      "M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6z"
    ),
  ],
  [
    "#/experience",
    "Experience",
    icon(
      "M10 2a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2h-4zm0 2h4v2h-4V4z"
    ),
  ],
  ["#/projects", "Projects", icon("M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z")],
  [
    "#/writing",
    "Writing",
    icon(
      "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    ),
  ],
  [
    "#/testimonials",
    "Testimonials",
    icon(
      "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
    ),
  ],
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const route = useHashRoute();
  // Normalize home ("" or "/") so the Home pill highlights correctly.
  const current = route === "" ? "/" : route;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#/" className="nav__brand">
        {profile.name.split(" ").map((w) => w[0]).join("")}
        <span className="nav__brand-dot">.</span>
      </a>

      <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
        {links.map(([href, label, ico]) => {
          const target = (href as string).replace(/^#/, "");
          const active =
            target === "/" ? current === "/" : current === target;
          return (
            <a
              key={href as string}
              href={href as string}
              className={active ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {ico}
              {label}
            </a>
          );
        })}
      </nav>

      <div className="nav__actions">
        <button
          className="nav__icon nav__burger"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
