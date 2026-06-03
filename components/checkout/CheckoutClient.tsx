"use client";

import { useState } from "react";
import Link from "next/link";
import { FormField } from "@/components/ui";

const mockOrderItems = [
  { id: 1, name: "Midnight Sandalwood", qty: 1, price: 85 },
  { id: 2, name: "Celestial Fig",       qty: 2, price: 75 },
];

const VOUCHER_CODE = "LUMOS10";

type Step = 1 | 2 | 3;

function formatUSD(n: number) {
  return `$${n.toFixed(2)}`;
}

export default function CheckoutClient() {
  const [activeStep, setActiveStep] = useState<Step>(1);
  const [voucher,    setVoucher]    = useState("");
  const [voucherOk,  setVoucherOk]  = useState(false);
  const [shipping,   setShipping]   = useState({
    firstName: "",
    lastName: "",
    address: "",
  });

  const subtotal = mockOrderItems.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = voucherOk ? subtotal * 0.1 : 0;
  const total    = subtotal - discount;

  const steps: { id: Step; label: string }[] = [
    { id: 1, label: "1. Shipping Information" },
    { id: 2, label: "2. Payment Method"       },
    { id: 3, label: "3. Review Order"         },
  ];

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "var(--color-off-white)",
      display: "flex",
      flexDirection: "column",
    }}>

      {/* ── Checkout header ── */}
      <header style={{
        borderBottom: "1px solid var(--color-border)",
        padding: "24px 0",
        textAlign: "center",
        backgroundColor: "var(--color-white)",
      }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "22px",
            fontWeight: 400,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--color-ink)",
          }}>
            Lumos Aura
          </span>
        </Link>
      </header>

      {/* ── Body ── */}
      <div style={{
        flex: 1,
        maxWidth: "960px",
        width: "100%",
        margin: "0 auto",
        padding: "48px 24px 64px",
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: "40px",
        alignItems: "start",
      }}
        className="checkout-body"
      >

        {/* ── Left: accordion steps ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            const isDone   = activeStep > step.id;

            return (
              <div key={step.id} style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border)",
              }}>

                {/* Step header */}
                <button
                  onClick={() => isDone && setActiveStep(step.id)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: isDone ? "pointer" : "default",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: isActive
                      ? "var(--color-ink)"
                      : isDone
                        ? "var(--color-ink-mid)"
                        : "var(--color-ink-faint)",
                    transition: "color 0.2s",
                  }}>
                    {step.label}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "18px",
                    color: "var(--color-ink-faint)",
                  }}>
                    {isActive ? "⌄" : isDone ? "✓" : "›"}
                  </span>
                </button>

                {/* Step body */}
                {isActive && (
                  <div style={{
                    padding: "0 24px 28px",
                    borderTop: "1px solid var(--color-border)",
                  }}>

                    {/* ── Step 1: Shipping ── */}
                    {step.id === 1 && (
                      <div style={{ paddingTop: "24px" }}>
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: "20px",
                          marginBottom: "20px",
                        }}
                          className="checkout-form-row"
                        >
                          <FormField
                            label="First Name"
                            placeholder="Jane"
                            value={shipping.firstName}
                            onChange={(v) => setShipping({ ...shipping, firstName: v })}
                            variant="line"
                          />
                          <FormField
                            label="Last Name"
                            placeholder="Doe"
                            value={shipping.lastName}
                            onChange={(v) => setShipping({ ...shipping, lastName: v })}
                            variant="line"
                          />
                        </div>
                        <div style={{ marginBottom: "28px" }}>
                          <FormField
                            label="Address"
                            placeholder="123 Serenity Lane"
                            value={shipping.address}
                            onChange={(v) => setShipping({ ...shipping, address: v })}
                            variant="line"
                          />
                        </div>
                        <button
                          onClick={() => setActiveStep(2)}
                          className="btn btn-primary"
                        >
                          Continue to Payment
                        </button>
                      </div>
                    )}

                    {/* ── Step 2: Payment ── */}
                    {step.id === 2 && (
                      <div style={{ paddingTop: "24px" }}>
                        {[
                          { id: "card",  label: "Credit / Debit Card" },
                          { id: "momo",  label: "MoMo"                },
                          { id: "vnpay", label: "VNPay"               },
                          { id: "bank",  label: "Bank Transfer"       },
                        ].map((opt) => (
                          <label key={opt.id} style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "14px 0",
                            borderBottom: "1px solid var(--color-border)",
                            cursor: "pointer",
                          }}>
                            <input
                              type="radio"
                              name="payment"
                              defaultChecked={opt.id === "card"}
                              style={{
                                accentColor: "var(--color-ink)",
                                width: "15px",
                                height: "15px",
                                flexShrink: 0,
                              }}
                            />
                            <span style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "14px",
                              color: "var(--color-ink)",
                            }}>
                              {opt.label}
                            </span>
                          </label>
                        ))}
                        <div style={{ marginTop: "28px" }}>
                          <button
                            onClick={() => setActiveStep(3)}
                            className="btn btn-primary"
                          >
                            Continue to Review
                          </button>
                        </div>
                      </div>
                    )}

                    {/* ── Step 3: Review ── */}
                    {step.id === 3 && (
                      <div style={{ paddingTop: "24px" }}>
                        {[
                          {
                            label: "Ship to",
                            value: shipping.firstName
                              ? `${shipping.firstName} ${shipping.lastName} — ${shipping.address || "N/A"}`
                              : "Not provided",
                          },
                          { label: "Payment", value: "Credit / Debit Card" },
                        ].map((row) => (
                          <div key={row.label} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "12px 0",
                            borderBottom: "1px solid var(--color-border)",
                          }}>
                            <span className="text-label">{row.label}</span>
                            <span style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "13px",
                              color: "var(--color-ink)",
                              textAlign: "right",
                              maxWidth: "240px",
                            }}>
                              {row.value}
                            </span>
                          </div>
                        ))}
                        <div style={{ marginTop: "28px" }}>
                          <Link href="/order-confirmed" className="btn btn-primary">
                            Complete Purchase
                          </Link>
                        </div>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Right: Order summary ── */}
        <div style={{
          backgroundColor: "var(--color-white)",
          border: "1px solid var(--color-border)",
          padding: "28px",
        }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "24px",
            fontWeight: 400,
            color: "var(--color-ink)",
            marginBottom: "20px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--color-border)",
          }}>
            Order Summary
          </h2>

          {/* Items */}
          <div style={{ marginBottom: "20px" }}>
            {mockOrderItems.map((item) => (
              <div key={item.id} style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
              }}>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-ink)",
                }}>
                  {item.name}
                  <span style={{
                    color: "var(--color-ink-faint)",
                    marginLeft: "4px",
                  }}>
                    x{item.qty}
                  </span>
                </span>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--color-ink)",
                }}>
                  {formatUSD(item.price * item.qty)}
                </span>
              </div>
            ))}
          </div>

          {/* Voucher */}
          <div style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "16px",
            marginBottom: "16px",
          }}>
            <p className="text-label" style={{ marginBottom: "10px" }}>
              Voucher Code
            </p>
            <div style={{ display: "flex", gap: "8px", alignItems: "flex-end" }}>
              <input
                type="text"
                placeholder="Enter code"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyVoucher()}
                className="form-input"
                style={{ flex: 1 }}
              />
              <button
                onClick={applyVoucher}
                style={{
                  background: "none",
                  border: "none",
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  color: voucherOk ? "var(--color-success)" : "var(--color-ink)",
                  cursor: "pointer",
                  padding: "0 0 12px",
                  flexShrink: 0,
                  transition: "color 0.2s",
                }}
              >
                {voucherOk ? "Applied ✓" : "Apply"}
              </button>
            </div>
          </div>

          {/* Subtotal / Shipping */}
          <div style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "16px",
          }}>
            {[
              { label: "Subtotal", value: formatUSD(subtotal) },
              ...(voucherOk
                ? [{ label: "Discount (10%)", value: `-${formatUSD(discount)}` }]
                : []),
              { label: "Shipping", value: "Complimentary" },
            ].map((row) => (
              <div key={row.label} style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px",
              }}>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: row.label.startsWith("Discount")
                    ? "var(--color-success)"
                    : "var(--color-ink-muted)",
                }}>
                  {row.label}
                </span>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: row.label.startsWith("Discount")
                    ? "var(--color-success)"
                    : "var(--color-ink)",
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
            borderTop: "1px solid var(--color-ink)",
            paddingTop: "16px",
            marginTop: "8px",
            marginBottom: "24px",
          }}>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "20px",
              fontWeight: 400,
              color: "var(--color-ink)",
            }}>
              Total
            </span>
            <span style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontWeight: 400,
              color: "var(--color-ink)",
            }}>
              {formatUSD(total)}
            </span>
          </div>

          {/* CTA */}
          <Link href="/order-confirmed" className="btn btn-gold"
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            Complete Purchase
          </Link>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        borderTop: "1px solid var(--color-border)",
        padding: "20px 24px",
        textAlign: "center",
      }}>
        <span style={{
          fontFamily: "var(--font-sans)",
          fontSize: "10px",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--color-ink-faint)",
        }}>
          Secure Checkout · 2026 Lumos Aura
        </span>
      </div>

    </div>
  );

  function applyVoucher() {
    setVoucherOk(voucher.trim().toUpperCase() === VOUCHER_CODE);
  }
}