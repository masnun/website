import { ossProjects } from "../data.ts";

type Props = {
  // When set, show only OSS projects carrying this tag.
  filterTag?: string;
};

export function OssProjects({ filterTag }: Props) {
  const list = filterTag
    ? ossProjects.filter((p) => p.tags.includes(filterTag))
    : ossProjects;
  return (
    <div className="cards">
      {list.map((p) => (
        <div key={p.link} className="card project">
          <h3 className="card__title">{p.name}</h3>
          <p className="card__note">{p.summary}</p>
          <div className="project__tags">
            {p.tags.map((t) => (
              <a
                key={t}
                className="project__tag project__tag--link"
                href={`/projects?osstag=${encodeURIComponent(t)}`}
              >
                {t}
              </a>
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
