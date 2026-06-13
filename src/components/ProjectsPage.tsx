import { useEffect, useState } from "react";
import { Projects } from "./Projects.tsx";
import { OssProjects } from "./OssProjects.tsx";
import { projects, ossProjects, skills } from "../data.ts";
import { useRoute } from "../router.tsx";

type Tab = "all" | "engineering" | "oss";

export function ProjectsPage() {
  const [tab, setTab] = useState<Tab>("all");
  const route = useRoute();

  // Active filter comes from the URL:
  //   /projects?skill=<name>  ?tag=<tag>  (engineering tab)
  //   /projects?osstag=<tag>            (open-source tab)
  const query = route.split("?")[1] ?? "";
  const params = new URLSearchParams(query);
  const skillParam = params.get("skill");
  const tagParam = params.get("tag");
  const ossTagParam = params.get("osstag");

  const activeSkill = skills.find((s) => s.name === skillParam) ?? null;
  // A single tech tag takes precedence when present.
  const filterTags = tagParam ? [tagParam] : activeSkill?.tags;
  const activeLabel = tagParam ?? activeSkill?.name ?? null;

  // A filter in the URL forces the matching tab.
  useEffect(() => {
    if (ossTagParam) setTab("oss");
    else if (skillParam || tagParam) setTab("engineering");
  }, [ossTagParam, skillParam, tagParam]);

  const filteredCount = filterTags
    ? projects.filter((p) => p.tags.some((t) => filterTags.includes(t))).length
    : projects.length;
  const ossFilteredCount = ossTagParam
    ? ossProjects.filter((p) => p.tags.includes(ossTagParam)).length
    : ossProjects.length;

  return (
    <section id="projects" className="section">
      <div className="tabs" role="tablist">
        <button
          role="tab"
          aria-selected={tab === "all"}
          className={`tab ${tab === "all" ? "tab--active" : ""}`}
          onClick={() => setTab("all")}
        >
          All ({projects.length + ossProjects.length})
        </button>
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

      {tab === "engineering" && !activeLabel && (
        <p className="filter-note">Filter projects by skill</p>
      )}

      {tab === "engineering" && !activeLabel && (
        <div className="filter-pills" role="group" aria-label="Filter by skill">
          {skills.map((s) => (
            <a
              key={s.name}
              className="filter-pill"
              href={`/projects?skill=${encodeURIComponent(s.name)}`}
            >
              {s.name}
            </a>
          ))}
        </div>
      )}

      {tab === "engineering" && activeLabel && (
        <div className="filter-box">
          <span>
            Showing {filteredCount} project{filteredCount === 1 ? "" : "s"} for{" "}
            <strong>{activeLabel}</strong>
          </span>
          <a className="filter-box__clear" href="/projects">
            clear filter
          </a>
        </div>
      )}

      {tab === "oss" && ossTagParam && (
        <div className="filter-box">
          <span>
            Showing {ossFilteredCount} project{ossFilteredCount === 1 ? "" : "s"}{" "}
            for <strong>{ossTagParam}</strong>
          </span>
          <a className="filter-box__clear" href="/projects">
            clear filter
          </a>
        </div>
      )}

      <div className="section__body">
        {tab === "all" && (
          <>
            <h3 className="projects__group-title">Engineering</h3>
            <Projects />
            <h3 className="projects__group-title projects__group-title--spaced">
              Open Source
            </h3>
            <OssProjects />
          </>
        )}
        {tab === "engineering" && <Projects filterTags={filterTags} />}
        {tab === "oss" && <OssProjects filterTag={ossTagParam ?? undefined} />}
      </div>
    </section>
  );
}
