import { useState } from "react";
import { Projects } from "./Projects.tsx";
import { OssProjects } from "./OssProjects.tsx";
import { projects, ossProjects, skills } from "../data.ts";
import { useHashRoute } from "../hooks/useHashRoute.ts";

type Tab = "engineering" | "oss";

export function ProjectsPage() {
  const [tab, setTab] = useState<Tab>("engineering");
  const route = useHashRoute();

  // Active skill filter comes from the URL: #/projects?skill=<name>
  const query = route.split("?")[1] ?? "";
  const skillParam = new URLSearchParams(query).get("skill");
  const activeSkill = skills.find((s) => s.name === skillParam) ?? null;
  const filterTags = activeSkill?.tags;

  const filteredCount = filterTags
    ? projects.filter((p) => p.tags.some((t) => filterTags.includes(t))).length
    : projects.length;

  return (
    <section id="projects" className="section">
      <div className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === "engineering"}
          className={`tab ${tab === "engineering" ? "tab--active" : ""}`}
          onClick={() => setTab("engineering")}
        >
          Engineering ({projects.length})
        </button>
        <button
          role="tab"
          aria-selected={tab === "oss"}
          className={`tab ${tab === "oss" ? "tab--active" : ""}`}
          onClick={() => setTab("oss")}
        >
          Open Source ({ossProjects.length})
        </button>
      </div>

      {tab === "engineering" && (
        <div className="filter-pills" role="group" aria-label="Filter by skill">
          <a
            className={`filter-pill ${!activeSkill ? "filter-pill--active" : ""}`}
            href="#/projects"
          >
            All
          </a>
          {skills.map((s) => (
            <a
              key={s.name}
              className={`filter-pill ${
                activeSkill?.name === s.name ? "filter-pill--active" : ""
              }`}
              href={`#/projects?skill=${encodeURIComponent(s.name)}`}
            >
              {s.name}
            </a>
          ))}
        </div>
      )}

      {tab === "engineering" && activeSkill && (
        <p className="filter-status">
          Showing {filteredCount} project{filteredCount === 1 ? "" : "s"} for{" "}
          <strong>{activeSkill.name}</strong> ·{" "}
          <a href="#/projects">clear filter</a>
        </p>
      )}

      <div className="section__body">
        {tab === "engineering" ? (
          <Projects filterTags={filterTags} />
        ) : (
          <OssProjects />
        )}
      </div>
    </section>
  );
}
