import { freelance, profile } from "../data.ts";

type Props = {
  // Home shows just the summary + a link out; the page shows engagements too.
  full?: boolean;
};

export function Freelance({ full = false }: Props) {
  return (
    <div className="freelance">
      <div className="freelance__summary">
        {freelance.summary.map((p, i) => (
          <p key={i} className="prose">
            {p}
          </p>
        ))}
      </div>

      {!full && (
        <a
          className="btn btn--primary section__more-btn freelance__cta"
          href="#/freelance"
        >
          See my freelance history →
        </a>
      )}

      {full && (
        <>
          <h3 className="freelance__subhead">Selected engagements</h3>
          <ul className="engagements">
            {freelance.engagements.map((e) => (
              <li key={e.title + e.period} className="engagement">
                <div className="engagement__head">
                  <span className="engagement__title">{e.title}</span>
                  {e.rating ? (
                    <span
                      className="engagement__rating"
                      aria-label={`${e.rating} out of 5`}
                    >
                      {"★".repeat(Math.round(e.rating))} {e.rating.toFixed(1)}
                    </span>
                  ) : null}
                </div>
                <div className="engagement__meta">
                  <span className="engagement__period">{e.period}</span>
                  <span className="engagement__tags">
                    {e.tags.map((t) => (
                      <span key={t} className="engagement__tag">
                        {t}
                      </span>
                    ))}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <a
            className="btn btn--ghost freelance__cta"
            href={profile.upwork}
            target="_blank"
            rel="noreferrer"
          >
            View full Upwork profile ↗
          </a>
        </>
      )}
    </div>
  );
}
