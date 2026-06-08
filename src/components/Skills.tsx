import { motion } from "framer-motion";
import { skills } from "../data.ts";

export function Skills() {
  return (
    <div className="skills">
      <div className="skills__list">
        {skills.map((s, i) => (
          <div key={s.name} className="skill">
            <div className="skill__row">
              <span className="skill__name">{s.name}</span>
              <span className="skill__pct">{s.level}%</span>
            </div>
            <div className="skill__bar">
              <motion.div
                className="skill__fill"
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 }}
              />
            </div>
            <p className="skill__blurb">{s.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
