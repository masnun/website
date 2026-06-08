import { profile } from "../data.ts";

export function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero__hi">Hi, I'm</p>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__role">{profile.roles[0]}</p>
      <p className="hero__tagline">{profile.tagline}</p>

      <div className="hero__meta">
        <span>📍 {profile.location}</span>
        <a href={`https://${profile.github}`} target="_blank" rel="noreferrer">
          {profile.github}
        </a>
        <a href={profile.upwork} target="_blank" rel="noreferrer">
          Upwork · 4.7★ (57 reviews)
        </a>
      </div>

      <div className="hero__cta">
        <a className="btn btn--primary" href="#contact">
          Get in touch
        </a>
        <a className="btn btn--ghost" href={profile.upwork} target="_blank" rel="noreferrer">
          Hire on Upwork
        </a>
      </div>
    </section>
  );
}
