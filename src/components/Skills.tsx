import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data.ts";

export function Skills() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div className="skills">
      <div className="skills__list">
        {skills.map((s, i) => (
          <button
            key={s.name}
            className={`skill ${active === i ? "skill--active" : ""}`}
            onClick={() => setActive(active === i ? null : i)}
          >
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
            {active === i && (
              <motion.p
                className="skill__blurb"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {s.blurb}
              </motion.p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
