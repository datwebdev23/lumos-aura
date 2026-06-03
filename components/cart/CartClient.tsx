"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, QuantityStepper } from "@/components/ui";

type CartItem = {
  id: number;
  collection: string;
  name: string;
  subtitle: string;
  price: number;
  quantity: number;
  bg: string;
};

const initialItems: CartItem[] = [
  {
    id: 1,
    collection: "Midnight",
    name: "Midnight Sandalwood",
    subtitle: "8 oz / 50 Hour Burn",
    price: 45,
    quantity: 2,
    bg: "#E8E0D8",
  },
  {
    id: 2,
    collection: "Amber",
    name: "Celestial Amber Diffuser",
    subtitle: "200ml / 6 Months",
    price: 68,
    quantity: 1,
    bg: "#DDD5C8",
  },
];

function formatUSD(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export default function CartClient() {
  const [items, setItems] = useState<CartItem[]>(initialItems);

  const updateQty = (id: number, qty: number) => {
    setItems((prev) =>
      prev.map((item) => item.id === id ? { ...item, quantity: qty } : item)
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{
      backgroundColor: "var(--color-white)",
      minHeight: "100vh",
      paddingTop: "64px",
    }}>
      <div className="lumos-container" style={{ paddingTop: "64px", paddingBottom: "96px" }}>

        {/* Page title */}
        <div style={{ marginBottom: "56px" }}>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 400,
            color: "var(--color-ink)",
            marginBottom: "8px",
          }}>
            Your Cart
          </h1>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            color: "var(--color-ink-muted)",
          }}>
            Review your artisanal selections before illuminating your space.
          </p>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div style={{
            textAlign: "center",
            padding: "96px 0",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
          }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "28px",
              fontWeight: 400,
              color: "var(--color-ink-muted)",
              marginBottom: "32px",
            }}>
              Your cart is empty.
            </p>
            <Button variant="primary" href="/products">
              Explore the Collection
            </Button>
          </div>
        ) : (
          <div className="cart-layout">

            {/* Left — Cart items */}
            <div>
              {/* Header row */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                paddingBottom: "12px",
                borderBottom: "1px solid var(--color-ink)",
                marginBottom: "0",
              }}>
                <span className="text-label">Product</span>
                <span className="text-label" style={{ textAlign: "right" }}>Total</span>
              </div>

              {/* Items */}
              {items.map((item) => (
                <div key={item.id} style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  gap: "24px",
                  alignItems: "center",
                  padding: "28px 0",
                  borderBottom: "1px solid var(--color-border)",
                }}>

                  {/* Thumbnail */}
                  <div style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: item.bg,
                    flexShrink: 0,
                  }} />

                  {/* Info */}
                  <div>
                    <Badge_inline text={item.collection} />
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "var(--color-ink)",
                      margin: "6px 0 4px",
                      lineHeight: 1.2,
                    }}>
                      {item.name}
                    </h3>
                    <p style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "var(--color-ink-muted)",
                      marginBottom: "16px",
                    }}>
                      {item.subtitle}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                      <QuantityStepper
                        value={item.quantity}
                        onChange={(qty) => updateQty(item.id, qty)}
                      />
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{
                          background: "none",
                          border: "none",
                          fontFamily: "var(--font-sans)",
                          fontSize: "12px",
                          color: "var(--color-ink-faint)",
                          cursor: "pointer",
                          letterSpacing: "0.05em",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                          padding: 0,
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-faint)"}
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div style={{ textAlign: "right" }}>
                    <p style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "var(--color-ink-muted)",
                      marginBottom: "4px",
                    }}>
                      {formatUSD(item.price)}
                    </p>
                    <p className="text-price-sm">
                      {formatUSD(item.price * item.quantity)}
                    </p>
                  </div>

                </div>
              ))}

              {/* Continue shopping */}
              <div style={{ paddingTop: "24px" }}>
                <Link href="/products" style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-muted)",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                  transition: "color 0.2s",
                }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-muted)"}
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Right — Order summary */}
            <div style={{
              backgroundColor: "var(--color-off-white)",
              padding: "40px",
              alignSelf: "start",
            }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: 400,
                color: "var(--color-ink)",
                marginBottom: "32px",
              }}>
                Order Summary
              </h2>

              {/* Lines */}
              <div style={{ marginBottom: "24px" }}>
                {[
                  { label: "Subtotal", value: formatUSD(subtotal) },
                  { label: "Shipping", value: "Calculated at next step" },
                  { label: "Taxes",    value: "Calculated at next step" },
                ].map((row) => (
                  <div key={row.label} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--color-border)",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "var(--color-ink-muted)",
                    }}>
                      {row.label}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "var(--color-ink)",
                      textAlign: "right",
                      maxWidth: "160px",
                    }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "32px",
              }}>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                }}>
                  Total
                </span>
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  fontWeight: 400,
                  color: "var(--color-ink)",
                }}>
                  {formatUSD(subtotal)}
                </span>
              </div>

              {/* CTA */}
              <Button variant="primary" href="/checkout" fullWidth>
                Proceed to Checkout →
              </Button>

              {/* Secure badge */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginTop: "16px",
              }}>
                <span style={{ fontSize: "12px", color: "var(--color-ink-faint)" }}>🔒</span>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  color: "var(--color-ink-faint)",
                  letterSpacing: "0.05em",
                }}>
                  Secure Checkout
                </span>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

/* Inline collection badge — không cần file riêng */
function Badge_inline({ text }: { text: string }) {
  return (
    <span style={{
      display: "inline-block",
      fontFamily: "var(--font-sans)",
      fontSize: "9px",
      fontWeight: 500,
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      color: "var(--color-ink-muted)",
      border: "1px solid var(--color-border-mid)",
      padding: "3px 8px",
    }}>
      {text}
    </span>
  );
}