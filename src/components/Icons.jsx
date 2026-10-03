const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const StreetIcon = (p) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" {...base} {...p}><path d="M9 29V6h12" /><path d="M18 6h7v3h-7z" fill="currentColor" stroke="none" /><path d="M5 29h8" /><path d="M19 12l-2 5M24 12l2 5" opacity=".5" /></svg>
);
export const SolarIcon = (p) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" {...base} {...p}><path d="M16 29V12" /><path d="M7 9l16-4 2 5-16 4z" /><path d="M11 8l1.5 5M17 6.5l1.5 5" opacity=".6" /><path d="M16 18h6v3h-6" /><path d="M11 29h10" /></svg>
);
export const ChainIcon = (p) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" {...base} {...p}><path d="M5 5v24M27 5v24" /><path d="M5 9l8 8-8 8M13 9l8 8-8 8M21 9l6 6M21 25l6-6M13 9l-8 8M21 9l-8 8M27 13l-6 4 6 4" opacity=".75" /></svg>
);
export const ConcreteIcon = (p) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" {...base} {...p}><path d="M6 7h4v20H6zM22 7h4v20h-4z" /><path d="M3 29h26" /><path d="M10 11h12M10 16h12M10 21h12" /><path d="M14 9.5l1.5 3M17 9.5l-1.5 3" opacity=".6" /></svg>
);
export const PhoneIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 005 5L15 12l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2" /></svg>
);
export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><path d="M12 21s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const CheckIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const ChevronIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}><path d="M6 9l6 6 6-6" /></svg>
);
export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91A9.86 9.86 0 0012.04 2zm5.8 14.05c-.24.68-1.43 1.31-1.97 1.36-.5.05-1.13.07-1.83-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3s.75-2.13 1.02-2.42c.26-.29.57-.36.77-.36h.55c.18 0 .42-.07.65.5.24.57.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.14.31-.29.48-.14.17-.3.38-.43.5-.14.15-.29.3-.12.6.17.29.75 1.24 1.61 2 1.11.99 2.04 1.3 2.33 1.44.29.15.46.12.63-.07.17-.2.72-.84.92-1.13.19-.29.38-.24.65-.14.26.1 1.68.79 1.97.94.29.14.48.21.55.33.07.12.07.69-.17 1.37z" />
  </svg>
);

export const SERVICE_ICONS = { street: StreetIcon, solar: SolarIcon, chain: ChainIcon, concrete: ConcreteIcon };
