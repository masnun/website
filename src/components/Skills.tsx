import { skills } from "../data.ts";

export function Skills() {
  return (
    <div className="cards">
      {skills.map((s) => (
        <div key={s.name} className="card">
          <h3 className="card__title">{s.name}</h3>
          <p className="card__note">{s.blurb}</p>
        </div>
      ))}
    </div>
  );
}
