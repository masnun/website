import { useEffect } from "react";
import { Hero } from "./components/Hero.tsx";
import { Nav } from "./components/Nav.tsx";
import { Section } from "./components/Section.tsx";
import { Skills } from "./components/Skills.tsx";
import { Projects } from "./components/Projects.tsx";
import { ProjectsPage } from "./components/ProjectsPage.tsx";
import { ProjectDetail } from "./components/ProjectDetail.tsx";
import { Timeline } from "./components/Timeline.tsx";
import { Freelance } from "./components/Freelance.tsx";
import { Leadership } from "./components/Leadership.tsx";
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
          kicker="Employment & freelance · ~15 years"
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
        <Section id="leadership" title="Leadership & Community" kicker="Giving back">
          <Leadership />
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
    // Slim homepage — highlights only, full lists live on sub-pages.
    content = (
      <main>
        <Hero />
        <Section id="about" title="About Me" kicker="Who I am">
          <p className="prose">{profile.summary}</p>
          <div className="section__more-wrap section__more-wrap--left">
            <a className="btn btn--primary section__more-btn" href="#/about">
              More about me →
            </a>
          </div>
        </Section>
        <Section id="projects" title="Featured Projects" kicker="What I've built">
          <Projects featuredOnly />
          <div className="section__more-wrap">
            <a className="btn btn--primary btn--round section__more-btn" href="#/projects">
              See all {projects.length} projects →
            </a>
          </div>
        </Section>
        <Section id="freelance" title="Freelance" kicker="Upwork track record">
          <Freelance />
        </Section>
        <Section id="writing" title="Writing" kicker="In-depth technical posts">
          <p className="prose">
            I write long-form technical posts on masnun.rocks and masnun.com —
            less tutorial, more how things actually work under the hood. The
            recurring themes: async and concurrency in Python, language
            internals and design, Go and distributed systems, and building
            real-time systems and clean REST APIs.
          </p>
          <div className="section__more-wrap section__more-wrap--left">
            <a className="btn btn--primary section__more-btn" href="#/writing">
              Read my writing →
            </a>
          </div>
        </Section>
        <Section id="testimonials" title="Testimonials" kicker="What people say">
          <Testimonials limit={2} />
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
