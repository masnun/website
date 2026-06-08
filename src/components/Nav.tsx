import { useEffect, useState } from "react";
import { profile } from "../data.ts";
import { useHashRoute } from "../hooks/useHashRoute.ts";

// href is a full hash target: "#anchor" scrolls the home page,
// "#/page" routes to a sub-page.
const links = [
  ["#/", "Home"],
  ["#/about", "About"],
  ["#/experience", "Experience"],
  ["#/projects", "Projects"],
  ["#/writing", "Writing"],
  ["#/testimonials", "Testimonials"],
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
        {links.map(([href, label]) => {
          const target = href.replace(/^#/, "");
          const active =
            target === "/" ? current === "/" : current === target;
          return (
            <a
              key={href}
              href={href}
              className={active ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
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
