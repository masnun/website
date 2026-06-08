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
import { Explored } from "./components/Explored.tsx";
import { Leadership } from "./components/Leadership.tsx";
import { Testimonials } from "./components/Testimonials.tsx";
import { Contact } from "./components/Contact.tsx";
import { useHashRoute } from "./hooks/useHashRoute.ts";
import { profile, projects } from "./data.ts";

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

  const projectMatch = route.match(/^\/project\/(.+)$/);
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
  } else if (route === "/projects") {
    content = (
      <main>
        <PageHead kicker="What I've built" title="Projects" />
        <ProjectsPage />
      </main>
    );
  } else if (route === "/experience") {
    content = (
      <main>
        <PageHead kicker="Career & craft" title="Experience" />
        <Section id="skills" title="Skills" kicker="What I work with">
          <Skills />
        </Section>
        <Section id="timeline" title="Work History" kicker="Where I've worked">
          <Timeline />
        </Section>
        <Section id="explored" title="Things I've Explored" kicker="Curiosity log">
          <Explored />
        </Section>
        <Section id="leadership" title="Leadership & Community" kicker="Giving back">
          <Leadership />
        </Section>
      </main>
    );
  } else if (route === "/freelance") {
    content = (
      <main>
        <PageHead kicker="Upwork track record" title="Freelance" />
        <Section id="freelance" title="On Upwork" kicker="Since 2009 · 4.7★ · 58 jobs">
          <Freelance full />
        </Section>
      </main>
    );
  } else {
    // Slim homepage — highlights only, full lists live on sub-pages.
    content = (
      <main>
        <Hero />
        <Section id="about" title="Summary" kicker="Who I am">
          <p className="prose">{profile.summary}</p>
        </Section>
        <Section id="projects" title="Featured Projects" kicker="What I've built">
          <Projects featuredOnly />
          <div className="section__more-wrap">
            <a className="btn btn--primary section__more-btn" href="#/projects">
              See all {projects.length} projects →
            </a>
          </div>
        </Section>
        <Section id="freelance" title="Freelance" kicker="Upwork track record">
          <Freelance />
        </Section>
        <Section id="testimonials" title="Testimonials" kicker="What people say">
          <Testimonials />
        </Section>
        <Section id="contact" title="Get in touch" kicker="Say hello">
          <Contact />
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
