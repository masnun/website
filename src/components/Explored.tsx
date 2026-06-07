import { motion } from "framer-motion";
import { explored } from "../data.ts";

export function Explored() {
  return (
    <div className="cards">
      {explored.map((e, i) => (
        <motion.div
          key={e.tech}
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45, delay: i * 0.05 }}
        >
          <h3 className="card__title">{e.tech}</h3>
          <p className="card__note">{e.note}</p>
        </motion.div>
      ))}
    </div>
  );
}
