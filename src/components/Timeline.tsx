import { motion } from "framer-motion";
import { experience } from "../data.ts";

export function Timeline() {
  return (
    <div className="timeline">
      {experience.map((job, i) => (
        <motion.div
          key={job.company + job.period}
          className="tl-item"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.04 }}
        >
          <div className="tl-dot" />
          <div className="tl-card">
            <div className="tl-card__top">
              <h3>{job.role}</h3>
              <span className="tl-period">{job.period}</span>
            </div>
            <p className="tl-company">{job.company}</p>
            <p className="tl-desc">{job.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
