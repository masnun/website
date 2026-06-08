import type { ReactNode } from "react";
import { profile } from "../data.ts";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="1.4em" height="1.4em" fill="#25D366" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export function Contact() {
  const phoneDigits = profile.phone.replace(/[^\d]/g, "");
  const items: { label: string; value: string; href: string; icon: ReactNode }[] = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "✉" },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: "📞" },
    { label: "WhatsApp", value: profile.phone, href: `https://wa.me/${phoneDigits}`, icon: <WhatsAppIcon /> },
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
