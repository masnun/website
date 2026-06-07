import { profile } from "../data.ts";

export function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "✉" },
    { label: "Website", value: profile.website, href: `https://${profile.website}`, icon: "🌐" },
    { label: "GitHub", value: profile.github, href: `https://${profile.github}`, icon: "🐙" },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: "📞" },
  ];

  return (
    <div className="contact">
      <p className="prose contact__lead">
        Open to interesting problems and good teams. Drop a line — I'm always
        around.
      </p>
      <div className="contact__grid">
        {items.map((it) => (
          <a
            key={it.label}
            className="contact__card"
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            <span className="contact__icon">{it.icon}</span>
            <span className="contact__label">{it.label}</span>
            <span className="contact__value">{it.value}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
