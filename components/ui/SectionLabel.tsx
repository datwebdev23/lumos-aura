interface SectionLabelProps {
  children: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionLabel({
  children,
  align = "center",
  className = "",
}: SectionLabelProps) {
  const cls = align === "center" ? "section-label" : "section-label-left";
  return (
    <div className={`${cls} ${className}`}>
      <span>{children}</span>
    </div>
  );
}