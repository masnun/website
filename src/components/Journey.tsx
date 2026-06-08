import { journey } from "../data.ts";

// Visual milestone timeline for the About page. Reuses the .timeline / .tl-*
// styles used by the work-history Timeline.
export function Journey() {
  return (
    <div className="timeline">
      {journey.map((m) => (
        <div key={m.year + m.title} className="tl-item">
          <div className="tl-dot" />
          <div className="tl-card">
            <div className="tl-card__top">
              <h3>{m.title}</h3>
              <span className="tl-period">{m.year}</span>
            </div>
            <p className="tl-desc">{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
