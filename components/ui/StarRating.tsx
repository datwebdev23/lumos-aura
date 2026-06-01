interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  showNumber?: boolean;
  count?: number;
}

export default function StarRating({
  rating,
  max = 5,
  size = 14,
  showNumber = false,
  count,
}: StarRatingProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      <div style={{ display: "flex", gap: "2px" }}>
        {Array.from({ length: max }).map((_, i) => (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24">
            <polygon
              points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
              fill={i < rating ? "var(--color-gold)" : "var(--color-border-mid)"}
              stroke={i < rating ? "var(--color-gold)" : "var(--color-border-mid)"}
              strokeWidth="0.5"
            />
          </svg>
        ))}
      </div>
      {showNumber && (
        <span style={{
          fontFamily: "var(--font-sans)",
          fontSize: "13px",
          color: "var(--color-ink-muted)",
        }}>
          {rating.toFixed(1)}{count !== undefined && ` (${count})`}
        </span>
      )}
    </div>
  );
}