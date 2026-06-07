import { useEffect, useState } from "react";
import { Hero } from "./components/Hero.tsx";
import { Nav } from "./components/Nav.tsx";
import { Section } from "./components/Section.tsx";
import { Skills } from "./components/Skills.tsx";
import { Timeline } from "./components/Timeline.tsx";
import { Explored } from "./components/Explored.tsx";
import { Leadership } from "./components/Leadership.tsx";
import { Testimonials } from "./components/Testimonials.tsx";
import { Contact } from "./components/Contact.tsx";
import { profile } from "./data.ts";

type Theme = "dark" | "light";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Nav theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <Section id="about" title="Summary" kicker="Who I am">
          <p className="prose">{profile.summary}</p>
        </Section>
        <Section id="skills" title="Skills" kicker="What I work with">
          <Skills />
        </Section>
        <Section id="experience" title="Experience" kicker="Where I've worked">
          <Timeline />
        </Section>
        <Section id="explored" title="Things I've Explored" kicker="Curiosity log">
          <Explored />
        </Section>
        <Section id="leadership" title="Leadership & Community" kicker="Giving back">
          <Leadership />
        </Section>
        <Section id="testimonials" title="Testimonials" kicker="What people say">
          <Testimonials />
        </Section>
        <Section id="contact" title="Get in touch" kicker="Say hello">
          <Contact />
        </Section>
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
        </p>
      </footer>
    </>
  );
}
