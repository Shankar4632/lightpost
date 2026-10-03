import { useId } from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site";

const PALETTES = {
  // on dark backgrounds (navbar, footer)
  light: { post: "#C9CED1", mesh: "#8A949B", lamp: "#F0A630", main: "text-white", sub: "text-steel-light" },
  // on light backgrounds
  dark: { post: "#1E2327", mesh: "#2F5D50", lamp: "#F0A630", main: "text-asphalt", sub: "text-steel-dark" },
};

const MESH = Array.from({ length: 15 }, (_, i) => -40 + i * 7);

/** The fence-panel-and-lamp mark. Usable on its own (e.g. in a loader). */
export function LogoMark({ variant = "light", className = "h-10 w-10", cone = true }) {
  const p = PALETTES[variant];
  const clip = `mesh-${useId().replace(/:/g, "")}`;
  return (
    <svg viewBox="0 0 64 64" className={`shrink-0 ${className}`} aria-hidden="true">
      <defs>
        <clipPath id={clip}><rect x="16" y="32" width="32" height="25" /></clipPath>
      </defs>
      {cone && <path d="M35.5 12 L25 31 L50 31 L46.5 12 Z" fill={p.lamp} fillOpacity="0.26" />}
      <g clipPath={`url(#${clip})`} stroke={p.mesh} strokeWidth="1.7" fill="none">
        {MESH.map((c) => (
          <g key={c}>
            <line x1={c} y1="31" x2={c + 26} y2="57" />
            <line x1={c + 26} y1="31" x2={c} y2="57" />
          </g>
        ))}
      </g>
      <path d="M14 59 V8 H41" stroke={p.post} strokeWidth="4" fill="none" strokeLinecap="square" />
      <path d="M50 59 V29" stroke={p.post} strokeWidth="4" fill="none" strokeLinecap="square" />
      <path d="M14 31 H50" stroke={p.post} strokeWidth="2" fill="none" />
      <rect x="33" y="6" width="16" height="6" rx="1.2" fill={p.lamp} />
    </svg>
  );
}

/** Mark + two-line wordmark. `light` = for dark backgrounds (default). */
export default function Logo({ light = true }) {
  const variant = light ? "light" : "dark";
  const p = PALETTES[variant];
  // First word large, the rest small — matches the logo lockup.
  const [first, ...rest] = SITE.name.split(" ");
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${SITE.name}, home`}>
      <LogoMark variant={variant} className="h-11 w-11" />
      <span className="flex flex-col font-display leading-none">
        <span className={`text-[26px] font-bold tracking-tight ${p.main}`}>{first}</span>
        {rest.length > 0 && (
          <span className={`mt-0.5 text-[13px] font-medium tracking-[0.06em] ${p.sub}`}>{rest.join(" ")}</span>
        )}
      </span>
    </Link>
  );
}
