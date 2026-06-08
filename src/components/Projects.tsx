import { projects } from "../data.ts";

type Props = {
  // When true, show only the homepage-featured subset.
  featuredOnly?: boolean;
  // When set, show only projects whose tags intersect this list.
  filterTags?: string[];
};

export function Projects({ featuredOnly = false, filterTags }: Props) {
  let list = featuredOnly ? projects.filter((p) => p.featured) : projects;
  if (filterTags && filterTags.length) {
    list = list.filter((p) => p.tags.some((t) => filterTags.includes(t)));
  }
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
