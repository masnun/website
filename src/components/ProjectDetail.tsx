import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Project } from "../data.ts";

export function ProjectDetail({ project }: { project: Project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.slug]);

  return (
    <article className="section project-page">
      <a className="project-page__back" href="#/projects">
        ← Back to projects
      </a>

      <h1 className="project-page__title">{project.name}</h1>
      <p className="project-page__summary">{project.summary}</p>

      <div className="project__tags">
        {project.tags.map((t) => (
          <a
            key={t}
            className="project__tag project__tag--link"
            href={`#/projects?tag=${encodeURIComponent(t)}`}
          >
            {t}
          </a>
        ))}
      </div>

      {project.markdown ? (
        <div className="modal__md project-page__body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.markdown}
          </ReactMarkdown>
        </div>
      ) : (
        <p className="project-page__body">{project.details}</p>
      )}

      {project.link && (
        <a
          className="section__more"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          Visit project ↗
        </a>
      )}
    </article>
  );
}
