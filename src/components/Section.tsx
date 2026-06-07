import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
};

export function Section({ id, title, kicker, children }: Props) {
  return (
    <motion.section
      id={id}
      className="section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="section__head">
        {kicker && <span className="section__kicker">{kicker}</span>}
        <h2 className="section__title">{title}</h2>
      </div>
      <div className="section__body">{children}</div>
    </motion.section>
  );
}
