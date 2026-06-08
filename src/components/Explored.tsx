import { explored } from "../data.ts";

export function Explored() {
  return (
    <div className="cards">
      {explored.map((e) => (
        <div key={e.tech} className="card">
          <h3 className="card__title">{e.tech}</h3>
          <p className="card__note">{e.note}</p>
        </div>
      ))}
    </div>
  );
}
