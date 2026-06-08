import { projects } from "../data.ts";

type Props = {
  // When true, show only the homepage-featured subset.
  featuredOnly?: boolean;
};

export function Projects({ featuredOnly = false }: Props) {
  const list = featuredOnly ? projects.filter((p) => p.featured) : projects;
  return (
    <div className="cards">
      {list.map((p) => (
        <div key={p.slug} className="card project">
          <h3 className="card__title">{p.name}</h3>
          <p className="card__note">{p.summary}</p>
          <div className="project__tags">
            {p.tags.map((t) => (
              <span key={t} className="project__tag">
                {t}
              </span>
            ))}
          </div>
          <a className="project__more" href={`#/project/${p.slug}`}>
            View details →
          </a>
        </div>
      ))}
    </div>
  );
}
