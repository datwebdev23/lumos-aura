type BadgeVariant = "default" | "gold" | "success";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClass: Record<BadgeVariant, string> = {
  "default": "badge badge-default",
  "gold":    "badge badge-gold",
  "success": "badge badge-success",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span className={`${variantClass[variant]} ${className}`}>
      {children}
    </span>
  );
}