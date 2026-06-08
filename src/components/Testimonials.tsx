import { testimonials } from "../data.ts";

export function Testimonials({ limit }: { limit?: number }) {
  const sorted = [...testimonials].sort((a, b) => b.quote.length - a.quote.length);
  const shown = limit ? sorted.slice(0, limit) : sorted;
  return (
    <div className="quotes">
      {shown.map((t, i) => (
        <blockquote key={i} className="quote">
          {t.rating ? (
            <div className="quote__stars" aria-label={`${t.rating} out of 5`}>
              {"★★★★★".slice(0, Math.round(t.rating))}
              <span className="quote__stars-dim">
                {"★★★★★".slice(Math.round(t.rating))}
              </span>
            </div>
          ) : null}
          <p className="quote__text">“{t.quote}”</p>
          <footer className="quote__by">
            <strong>{t.author}</strong>
            <span>{t.company}</span>
            {(t.date || t.source) && (
              <span className="quote__meta">
                {[t.source, t.date].filter(Boolean).join(" · ")}
              </span>
            )}
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
