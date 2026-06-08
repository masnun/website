import { experience, freelance } from "../data.ts";

type Kind = "employment" | "freelance";

type Item = {
  kind: Kind;
  title: string;
  org: string;
  period: string;
  description?: string;
  tags?: string[];
};

const MONTHS: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
};

// Sort key from the start of a period string like "Jul 2015 — Now" or "2016 — 2018".
function startKey(period: string): number {
  const start = period.split(/[–—-]/)[0].trim();
  const m = start.match(/([A-Za-z]{3})?\s*(\d{4})/);
  if (!m) return 0;
  const year = Number(m[2]);
  const month = m[1] ? MONTHS[m[1]] ?? 1 : 1;
  return year * 12 + month;
}

const items: Item[] = [
  ...experience.map((j) => ({
    kind: "employment" as const,
    title: j.role,
    org: j.company,
    period: j.period,
    description: j.description,
  })),
  ...freelance.engagements.map((e) => ({
    kind: "freelance" as const,
    title: e.title,
    org: "Upwork",
    period: e.period,
    tags: e.tags,
  })),
].sort((a, b) => startKey(b.period) - startKey(a.period));

export function Timeline() {
  return (
    <>
      <div className="tl-legend">
        <span className="tl-legend__item tl-legend__item--employment">
          Employment
        </span>
        <span className="tl-legend__item tl-legend__item--freelance">
          Freelance
        </span>
      </div>

      <div className="timeline">
        {items.map((item) => (
          <div
            key={item.title + item.period}
            className={`tl-item tl-item--${item.kind}`}
          >
            <div className={`tl-dot tl-dot--${item.kind}`} />
            <div className="tl-card">
              <div className="tl-card__top">
                <h3>{item.title}</h3>
                <span className="tl-period">{item.period}</span>
              </div>
              <p className="tl-company">{item.org}</p>
              {item.description && <p className="tl-desc">{item.description}</p>}
              {item.tags && (
                <div className="project__tags">
                  {item.tags.map((t) => (
                    <span key={t} className="project__tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
