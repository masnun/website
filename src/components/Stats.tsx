import { heroStats } from "../data.ts";

// Recruiter-facing stat bar. Two rows: volume metrics, then track-record.
export function Stats() {
  return (
    <div className="hero__stats">
      <div className="hero__stats-row">
        {heroStats.slice(0, 2).map((s) => (
          <div key={s.label} className="hero__stat">
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="hero__stats-row">
        {heroStats.slice(2).map((s) => (
          <div key={s.label} className="hero__stat">
            <span className="hero__stat-value">{s.value}</span>
            <span className="hero__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
