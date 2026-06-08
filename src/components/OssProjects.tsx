import { ossProjects } from "../data.ts";

export function OssProjects() {
  return (
    <div className="cards">
      {ossProjects.map((p) => (
        <div key={p.link} className="card project">
          <h3 className="card__title">{p.name}</h3>
          <p className="card__note">{p.summary}</p>
          <div className="project__tags">
            {p.tags.map((t) => (
              <span key={t} className="project__tag">
                {t}
              </span>
            ))}
          </div>
          <a
            className="project__more"
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </div>
      ))}
    </div>
  );
}
