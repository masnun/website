import { experience } from "../data.ts";

export function Timeline() {
  return (
    <div className="timeline">
      {experience.map((job) => (
        <div key={job.company + job.period} className="tl-item">
          <div className="tl-dot" />
          <div className="tl-card">
            <div className="tl-card__top">
              <h3>{job.role}</h3>
              <span className="tl-period">{job.period}</span>
            </div>
            <p className="tl-company">{job.company}</p>
            <p className="tl-desc">{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
