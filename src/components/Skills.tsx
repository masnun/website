import { skills } from "../data.ts";

export function Skills() {
  return (
    <div className="skills">
      <div className="skills__list">
        {skills.map((s) => (
          <div key={s.name} className="skill">
            <div className="skill__row">
              <span className="skill__name">{s.name}</span>
              <span className="skill__pct">{s.level}%</span>
            </div>
            <div className="skill__bar">
              <div className="skill__fill" style={{ width: `${s.level}%` }} />
            </div>
            <p className="skill__blurb">{s.blurb}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
