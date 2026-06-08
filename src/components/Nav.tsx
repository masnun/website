import { useEffect, useState } from "react";
import { profile } from "../data.ts";

const links = [
  ["about", "About"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["leadership", "Community"],
  ["testimonials", "Testimonials"],
  ["contact", "Contact"],
];

type Props = {
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export function Nav({ theme, onToggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#top" className="nav__brand">
        {profile.name.split(" ").map((w) => w[0]).join("")}
        <span className="nav__brand-dot">.</span>
      </a>

      <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="nav__actions">
        <button
          className="nav__icon"
          aria-label="Toggle color theme"
          onClick={onToggleTheme}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
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
