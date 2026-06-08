import { useEffect, useState } from "react";
import { skills, type Skill } from "../data.ts";

export function Skills() {
  const [active, setActive] = useState<Skill | null>(null);

  // Close on Escape.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="skill-pills">
        {skills.map((s) => (
          <button
            key={s.name}
            className="skill-pill"
            onClick={() => setActive(s)}
          >
            {s.name}
          </button>
        ))}
      </div>

      {active && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
          onClick={() => setActive(null)}
        >
          <div className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal__close"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ✕
            </button>
            <h3 className="modal__title">{active.name}</h3>
            <p className="modal__text">{active.blurb}</p>
            <a
              className="skill-item__cta"
              href={`#/projects?skill=${encodeURIComponent(active.name)}`}
              onClick={() => setActive(null)}
            >
              See related projects →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
