import Link from "next/link";

type ButtonVariant = "primary" | "gold" | "ghost" | "ghost-white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
  "primary":     "btn btn-primary",
  "gold":        "btn btn-gold",
  "ghost":       "btn btn-ghost",
  "ghost-white": "btn btn-ghost-white",
};

const sizeClass: Record<ButtonSize, string> = {
  "sm": "btn-sm",
  "md": "",
  "lg": "btn-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
  disabled = false,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const classes = [
    variantClass[variant],
    sizeClass[size],
    fullWidth ? "w-full" : "",
    className,
  ].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={{ opacity: disabled ? 0.5 : 1 }}
    >
      {children}
    </button>
  );
}