interface DividerProps {
  variant?: "full" | "gold";
  className?: string;
}

export default function Divider({
  variant = "full",
  className = "",
}: DividerProps) {
  return (
    <div
      className={`${variant === "gold" ? "divider-gold" : "divider"} ${className}`}
    />
  );
}