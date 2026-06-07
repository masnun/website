import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../data.ts";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  const go = (d: number) =>
    setIdx((i) => (i + d + testimonials.length) % testimonials.length);

  return (
    <div className="quotes">
      <button className="quote-nav" aria-label="Previous" onClick={() => go(-1)}>
        ‹
      </button>

      <div className="quote-stage">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={idx}
            className="quote"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <p className="quote__text">“{t.quote}”</p>
            <footer className="quote__by">
              <strong>{t.author}</strong>
              <span>{t.company}</span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="quote-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === idx ? "dot--on" : ""}`}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>

      <button className="quote-nav" aria-label="Next" onClick={() => go(1)}>
        ›
      </button>
    </div>
  );
}
