export function SectionLabel({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`font-label text-[11px] text-son ${center ? "brush-rule-center text-center" : "brush-rule"}`}>
      {children}
    </div>
  );
}
