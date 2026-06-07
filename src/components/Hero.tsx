import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data.ts";

// Typewriter cycling through profile.roles.
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    const delay = done ? 1600 : cleared ? 200 : deleting ? 45 : 90;

    const t = setTimeout(() => {
      if (done) {
        setDeleting(true);
      } else if (cleared) {
        setDeleting(false);
        setWordIdx((i) => i + 1);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, wordIdx, words]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--1" />
        <span className="blob blob--2" />
        <span className="blob blob--3" />
      </div>

      <motion.div
        className="hero__inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="hero__hi">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__role">
          <span className="hero__typed">{typed}</span>
          <span className="hero__caret" />
        </h2>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__meta">
          <span>📍 {profile.location}</span>
          <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">
            🐙 {profile.github}
          </a>
        </div>

        <div className="hero__cta">
          <a className="btn btn--primary" href="#contact">
            Get in touch
          </a>
          <a
            className="btn btn--ghost"
            href={`./${encodeURIComponent(profile.cv)}`}
            target="_blank"
            rel="noreferrer"
          >
            Download CV ↓
          </a>
        </div>
      </motion.div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
