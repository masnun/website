import { useEffect } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Project } from "../data.ts";

export function ProjectDetail({ project }: { project: Project }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.slug]);

  return (
    <article className="section project-page">
      <a className="project-page__back" href="#projects">
        ← Back to projects
      </a>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="project-page__title">{project.name}</h1>
        <p className="project-page__summary">{project.summary}</p>

        <div className="project__tags">
          {project.tags.map((t) => (
            <span key={t} className="project__tag">
              {t}
            </span>
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
            className="modal__link"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Visit project ↗
          </a>
        )}
      </motion.div>
    </article>
  );
}
