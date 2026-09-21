import Image from "next/image";

/** Web Logo Kit — Gradient AN (21/09/2026). Kit README: 104–128 px wide on desktop headers, 80–96 px on phones. */
export function Logo({ className = "" }: { className?: string }) {
  // unoptimized: the kit file is already sized for the header, and the local image
  // optimizer hangs converting this transparent PNG to WebP/AVIF (JPEG photos are fine).
  return (
    <Image
      src="/brand/an-logo-gradient-256.png"
      alt="AN Residence"
      width={256}
      height={151}
      unoptimized
      className={`h-auto w-20 sm:w-[104px] ${className}`}
    />
  );
}
