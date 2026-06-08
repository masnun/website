import { profile } from "../data.ts";
import { Section } from "./Section.tsx";
import { Journey } from "./Journey.tsx";

// The long-form "About Me" page (#/about).
export function AboutPage() {
  return (
    <>
      <div className="section about-page">
        {profile.about.map((para, i) => (
          <p key={i} className="prose about-page__para">
            {para}
          </p>
        ))}
      </div>
      <Section id="journey" title="My Journey" kicker="How I got here">
        <Journey />
      </Section>
    </>
  );
}
