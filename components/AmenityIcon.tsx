export function AmenityIcon({ name, className = "" }: { name: string; className?: string }) {
  const stroke = "currentColor";
  const sw = 1.4;
  const common = { fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "lake":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M2 17c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" {...common} />
          <path d="M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2" {...common} />
          <circle cx="18" cy="6" r="2" {...common} />
        </svg>
      );
    case "tree":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M12 21V13" {...common} />
          <path d="M12 13c-3 0-6-2-6-6 0-3 3-5 6-5s6 2 6 5c0 4-3 6-6 6Z" {...common} />
        </svg>
      );
    case "tub":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" {...common} />
          <path d="M5 12V7a2 2 0 0 1 2-2h2" {...common} />
          <path d="M5 19v2M19 19v2" {...common} />
        </svg>
      );
    case "balcony":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M4 21V11M20 21V11M4 21h16" {...common} />
          <path d="M4 13h16M8 13v8M12 13v8M16 13v8" {...common} />
          <path d="M3 11l9-7 9 7" {...common} />
        </svg>
      );
    case "kitchen":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" {...common} />
          <path d="M4 10h16M9 6h.01M9 13v5" {...common} />
        </svg>
      );
    case "bed":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M3 18V8M21 18v-5a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3" {...common} />
          <path d="M3 13h18M3 18h18M7 10v0" {...common} />
        </svg>
      );
    case "dining":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M4 11h16l-1 8H5l-1-8Z" {...common} />
          <path d="M4 11V7M20 11V7" {...common} />
        </svg>
      );
    case "desk":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M3 10h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Z" {...common} />
          <path d="M6 14v6M18 14v6M9 10V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" {...common} />
        </svg>
      );
    case "wifi":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M2 9a16 16 0 0 1 20 0M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0" {...common} />
          <circle cx="12" cy="20" r="1.2" fill={stroke} />
        </svg>
      );
    case "ac":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="8" rx="2" {...common} />
          <path d="M7 12v3M12 12v3M17 12v3" {...common} />
        </svg>
      );
    case "tv":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="3" y="5" width="18" height="12" rx="2" {...common} />
          <path d="M8 21h8" {...common} />
        </svg>
      );
    case "dishwasher":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="5" y="3" width="14" height="18" rx="2" {...common} />
          <path d="M5 8h14M9 5h3" {...common} />
          <circle cx="12" cy="15" r="3" {...common} />
        </svg>
      );
    case "laundry":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="4" y="3" width="16" height="18" rx="2" {...common} />
          <circle cx="12" cy="14" r="4" {...common} />
          <path d="M8 6h.01" {...common} />
        </svg>
      );
    case "toiletries":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M9 3h6v3l1 2v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8l1-2V3Z" {...common} />
          <path d="M9 8h6" {...common} />
        </svg>
      );
    case "coffee":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M5 7h12v8a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V7Z" {...common} />
          <path d="M17 9h2a2 2 0 0 1 0 4h-2" {...common} />
          <path d="M9 3v2M12 3v2M15 3v2" {...common} />
        </svg>
      );
    case "safe":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" {...common} />
          <circle cx="14" cy="12" r="3" {...common} />
          <path d="M7 9v6" {...common} />
        </svg>
      );
    case "reception":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M3 21V11h18v10" {...common} />
          <path d="M6 21v-4h12v4M12 11V7a3 3 0 0 1 6 0" {...common} />
        </svg>
      );
    case "gym":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M2 12h2M6 8v8M10 6v12M14 6v12M18 8v8M20 12h2" {...common} />
        </svg>
      );
    case "lobby":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <path d="M4 21V8l8-5 8 5v13" {...common} />
          <path d="M9 21v-6h6v6" {...common} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden>
          <circle cx="12" cy="12" r="3" {...common} />
        </svg>
      );
  }
}
