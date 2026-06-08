import { motion } from "framer-motion";
import { ossProjects } from "../data.ts";

export function OssProjects() {
  return (
    <div className="cards">
      {ossProjects.map((p, i) => (
        <motion.div
          key={p.link}
          className="card project"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
        >
          <h3 className="card__title">{p.name}</h3>
          <p className="card__note">{p.summary}</p>
          <div className="project__tags">
            {p.tags.map((t) => (
              <span key={t} className="project__tag">
                {t}
              </span>
            ))}
          </div>
          <a
            className="project__more"
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </motion.div>
      ))}
    </div>
  );
}
