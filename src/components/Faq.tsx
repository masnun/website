import { faqs } from "../data.ts";

// Visible FAQ on the home page. The same Q&A is emitted as FAQPage JSON-LD in
// seo.ts; Google requires the answers to be present on the page, and the plain
// markup is easy for LLMs to lift directly.
export function Faq() {
  return (
    <dl className="faq">
      {faqs.map((item) => (
        <div key={item.q} className="faq__item">
          <dt className="faq__q">{item.q}</dt>
          <dd className="faq__a">{item.a}</dd>
        </div>
      ))}
    </dl>
  );
}
