import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { profile } from "../data.ts";
import { useHashRoute } from "../hooks/useHashRoute.ts";

const LayersIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2 2 7l10 5 10-5zM2 12l10 5 10-5-1.9-.95L12 14.85 3.9 11.05zM2 17l10 5 10-5-1.9-.95L12 19.85 3.9 15.05z" />
  </svg>
);

const UserStarIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="9" cy="7" r="4" />
    <path d="M9 13c-3.87 0-7 2.24-7 5v2h9.5a6.5 6.5 0 0 1-.5-2.5c0-1.86.78-3.54 2.04-4.73A13.4 13.4 0 0 0 9 13z" />
    <path d="M17.5 12l1.32 2.67 2.95.43-2.13 2.08.5 2.94-2.64-1.39-2.64 1.39.5-2.94-2.13-2.08 2.95-.43z" />
  </svg>
);

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
  ["#/projects", "Projects", LayersIcon],
  [
    "#/writing",
    "Writing",
    icon(
      "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    ),
  ],
  ["#/testimonials", "Testimonials", UserStarIcon],
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
              <span className="nav__label">{label}</span>
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
