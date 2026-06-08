import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
};

export function Section({ id, title, kicker, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="section__head">
        {kicker && <span className="section__kicker">{kicker}</span>}
        <h2 className="section__title">{title}</h2>
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
}
