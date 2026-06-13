import { projects } from "../data.ts";

type Props = {
  // When true, show only the homepage-featured subset.
  featuredOnly?: boolean;
  // When set, show only projects whose tags intersect this list.
  filterTags?: string[];
  // When set, cap the number of projects shown.
  limit?: number;
};

export function Projects({ featuredOnly = false, filterTags, limit }: Props) {
  let list = featuredOnly ? projects.filter((p) => p.featured) : projects;
  if (filterTags && filterTags.length) {
    list = list.filter((p) => p.tags.some((t) => filterTags.includes(t)));
  }
  if (limit) {
    list = list.slice(0, limit);
  }
  return (
    <div className="cards">
      {list.map((p) => (
        <div key={p.slug} className="card project">
          <h3 className="card__title">{p.name}</h3>
          <p className="card__note">{p.summary}</p>
          <div className="project__tags">
            {p.tags.map((t) => (
              <a
                key={t}
                className="project__tag project__tag--link"
                href={`/projects?tag=${encodeURIComponent(t)}`}
              >
                {t}
              </a>
            ))}
          </div>
          <a className="project__more" href={`/project/${p.slug}`}>
            View details →
          </a>
        </div>
      ))}
    </div>
  );
}
