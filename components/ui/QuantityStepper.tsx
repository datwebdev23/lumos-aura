"use client";

interface QuantityStepperProps {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
}

export default function QuantityStepper({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantityStepperProps) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      border: "1px solid var(--color-border-mid)",
    }}>
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        style={{
          width: "44px",
          height: "44px",
          background: "none",
          border: "none",
          fontSize: "18px",
          color: "var(--color-ink)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-surface)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "none"}
      >
        −
      </button>
      <span style={{
        width: "44px",
        height: "44px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: "15px",
        color: "var(--color-ink)",
        borderLeft: "1px solid var(--color-border-mid)",
        borderRight: "1px solid var(--color-border-mid)",
      }}>
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        style={{
          width: "44px",
          height: "44px",
          background: "none",
          border: "none",
          fontSize: "18px",
          color: "var(--color-ink)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = "var(--color-surface)"}
        onMouseLeave={(e) => e.currentTarget.style.background = "none"}
      >
        +
      </button>
    </div>
  );
}