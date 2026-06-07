import { motion } from "framer-motion";
import { leadership } from "../data.ts";

export function Leadership() {
  return (
    <ul className="lead-list">
      {leadership.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        >
          <span className="lead-mark">▹</span>
          {item}
        </motion.li>
      ))}
    </ul>
  );
}
