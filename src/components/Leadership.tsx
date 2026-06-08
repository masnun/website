import { leadership } from "../data.ts";

export function Leadership() {
  return (
    <ul className="lead-list">
      {leadership.map((item) => (
        <li key={item}>
          <span className="lead-mark">▹</span>
          {item}
        </li>
      ))}
    </ul>
  );
}
