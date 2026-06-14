export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-baseline ${className}`}>
      <span className="font-rounded logo-gradient text-[30px] font-extrabold leading-none tracking-tight">
        AN
      </span>
    </div>
  );
}

export function Monogram({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 4 C 28 12 28 12 20 20 C 12 12 12 12 20 4 Z" />
        <path d="M20 20 C 28 28 28 28 20 36 C 12 28 12 28 20 20 Z" />
        <path d="M20 4 C 12 12 12 12 4 20 C 12 28 12 28 20 20 Z" />
        <path d="M20 4 C 28 12 28 12 36 20 C 28 28 28 28 20 20 Z" />
        <circle cx="20" cy="20" r="1.4" fill="currentColor" />
      </g>
    </svg>
  );
}
