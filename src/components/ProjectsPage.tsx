import { useState } from "react";
import { Projects } from "./Projects.tsx";
import { OssProjects } from "./OssProjects.tsx";
import { projects, ossProjects } from "../data.ts";

type Tab = "engineering" | "oss";

export function ProjectsPage() {
  const [tab, setTab] = useState<Tab>("engineering");

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

      <div className="section__body">
        {tab === "engineering" ? <Projects /> : <OssProjects />}
      </div>
    </section>
  );
}
