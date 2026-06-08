import { useState } from "react";
import { skills } from "../data.ts";

export function Skills() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (name: string) =>
    setOpen((o) => ({ ...o, [name]: !o[name] }));

  return (
    <div className="skill-list">
      {skills.map((s) => {
        const isOpen = !!open[s.name];
        return (
          <div key={s.name} className={`skill-item ${isOpen ? "is-open" : ""}`}>
            <button
              className="skill-item__head"
              aria-expanded={isOpen}
              onClick={() => toggle(s.name)}
            >
              <span className="skill-item__name">{s.name}</span>
              <span className="skill-item__chevron" aria-hidden="true">
                ›
              </span>
            </button>
            {isOpen && (
              <div className="skill-item__body">
                <p className="card__note">{s.blurb}</p>
                <a
                  className="skill-item__cta"
                  href={`#/projects?skill=${encodeURIComponent(s.name)}`}
                >
                  See related projects →
                </a>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
