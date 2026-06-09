import { useEffect } from "react";
import { Hero } from "./components/Hero.tsx";
import { Nav } from "./components/Nav.tsx";
import { Section } from "./components/Section.tsx";
import { Skills } from "./components/Skills.tsx";
import { Stats } from "./components/Stats.tsx";
import { Projects } from "./components/Projects.tsx";
import { ProjectsPage } from "./components/ProjectsPage.tsx";
import { ProjectDetail } from "./components/ProjectDetail.tsx";
import { Timeline } from "./components/Timeline.tsx";
import { Testimonials } from "./components/Testimonials.tsx";
import { Writing } from "./components/Writing.tsx";
import { AboutPage } from "./components/AboutPage.tsx";
import { useHashRoute } from "./hooks/useHashRoute.ts";
import { profile, projects, workSummary } from "./data.ts";

// A simple page banner reused by the sub-pages.
function PageHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="pagehead">
      <a className="pagehead__back" href="#/">
        ← Home
      </a>
      <span className="section__kicker">{kicker}</span>
      <h1 className="pagehead__title">{title}</h1>
    </div>
  );
}

export default function App() {
  const route = useHashRoute();

  // Scroll to top on page changes; to the anchor when one is present.
  useEffect(() => {
    if (/^[a-z]/.test(route)) {
      document.getElementById(route)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [route]);

  // Path without any query string (e.g. "/projects?skill=Go" -> "/projects").
  const path = route.split("?")[0];

  const projectMatch = path.match(/^\/project\/(.+)$/);
  const activeProject = projectMatch
    ? projects.find((p) => p.slug === projectMatch[1])
    : undefined;

  let content;
  if (activeProject) {
    content = (
      <main>
        <ProjectDetail project={activeProject} />
      </main>
    );
  } else if (path === "/projects") {
    content = (
      <main>
        <PageHead kicker="What I've built" title="Projects" />
        <ProjectsPage />
      </main>
    );
  } else if (path === "/experience") {
    content = (
      <main>
        <PageHead kicker="Career & craft" title="Experience" />
        <Section id="skills" title="Skills" kicker="What I work with">
          <Skills />
        </Section>
        <Section
          id="work"
          title="Work Experience"
          kicker="Employment & freelance · 15+ years"
        >
          <div className="prose-stack">
            {workSummary.map((p, i) => (
              <p key={i} className="prose">
                {p}
              </p>
            ))}
          </div>
          <a
            className="btn btn--ghost section__more"
            href={profile.upwork}
            target="_blank"
            rel="noreferrer"
          >
            View full Upwork profile ↗
          </a>
        </Section>
        <Section
          id="timeline"
          title="Career Timeline"
          kicker="Full-time roles & freelance, side by side"
        >
          <Timeline />
        </Section>
      </main>
    );
  } else if (path === "/about") {
    content = (
      <main>
        <PageHead kicker="Who I am" title="About Me" />
        <AboutPage />
      </main>
    );
  } else if (path === "/writing") {
    content = (
      <main>
        <PageHead kicker="In-depth technical posts" title="Writing" />
        <Section id="writing" title="Selected Posts" kicker="What I've written">
          <Writing />
        </Section>
      </main>
    );
  } else if (path === "/testimonials") {
    content = (
      <main>
        <PageHead kicker="What people say" title="Testimonials" />
        <Section id="testimonials" title="Client Feedback" kicker="From Upwork & beyond">
          <Testimonials />
        </Section>
      </main>
    );
  } else {
    // Slim homepage - highlights only, full lists live on sub-pages.
    content = (
      <main>
        <Hero />
        <Section id="about" title="About Me" kicker="Who I am">
          <p className="prose">{profile.summary}</p>
          <Stats />
          <div className="section__more-wrap section__more-wrap--left">
            <a className="btn btn--primary section__more-btn" href="#/about">
              More about me →
            </a>
          </div>
        </Section>
        <Section id="projects" title="Featured Work" kicker="What I've built">
          <Projects featuredOnly limit={4} />
          <div className="section__more-wrap">
            <div className="seg">
              <a className="seg__btn" href="#/experience">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 2a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2h-4zm0 2h4v2h-4V4z" />
                </svg>
                Work Experience
              </a>
              <a className="seg__btn" href="#/projects">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2 2 7l10 5 10-5zM2 12l10 5 10-5-1.9-.95L12 14.85 3.9 11.05zM2 17l10 5 10-5-1.9-.95L12 19.85 3.9 15.05z" />
                </svg>
                All Projects
              </a>
            </div>
          </div>
        </Section>
        <Section id="testimonials" title="Testimonials" kicker="What people say">
          <Testimonials authors={["Patrick Brown", "Ash Hoey"]} />
          <div className="section__more-wrap section__more-wrap--left">
            <a className="btn btn--primary section__more-btn" href="#/testimonials">
              Read all testimonials →
            </a>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <>
      <Nav />
      {content}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
        </p>
      </footer>
    </>
  );
}
