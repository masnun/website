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
          href="#/experience"
        >
          See my freelance work →
        </a>
      )}

      {full && (
        <a
          className="btn btn--ghost freelance__cta"
          href={profile.upwork}
          target="_blank"
          rel="noreferrer"
        >
          View full Upwork profile ↗
        </a>
      )}
    </div>
  );
}
