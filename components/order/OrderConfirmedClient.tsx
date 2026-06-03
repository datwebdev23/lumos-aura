import Link from "next/link";
import { Button } from "@/components/ui";

const orderNumber = "#LMA-84920";

const orderItems = [
  {
    id: 1,
    name: "Midnight Sandalwood",
    collection: "Signature Collection",
    qty: 1,
    price: 85,
  },
  {
    id: 2,
    name: "Celestial Fig",
    collection: "Room Mist",
    qty: 2,
    price: 90,
  },
];

const shipping = {
  name: "Eleanor Vance",
  address: "1992 Hill House Lane",
  apt: "Apt 4B",
  city: "New York, NY 10012",
  country: "United States",
};

const delivery = "October 24 - October 28";

function formatUSD(n: number) {
  return `$${n.toFixed(2)}`;
}

const subtotal  = orderItems.reduce((s, i) => s + i.price * i.qty, 0);
const shippingFee = 12;
const tax         = subtotal * 0.0855;
const total       = subtotal + shippingFee + tax;

export default function OrderConfirmedClient() {
  return (
    <div className="confirmed-page">
      <div className="confirmed-wrapper">

        {/* ── Hero / Thank you ── */}
        <div className="confirmed-hero animate-fade-in">

          {/* Checkmark */}
          <div className="confirmed-check">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <polyline
                points="20 6 9 17 4 12"
                stroke="var(--color-gold)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <p className="confirmed-brand">Lumos Aura</p>

          <h1 className="confirmed-headline">
            Thank you for your order
          </h1>

          <p className="confirmed-subtext">
            Your beautifully crafted items are being prepared.
            A confirmation email has been sent to your inbox.
          </p>
        </div>

        {/* ── Body ── */}
        <div className="confirmed-body">

          {/* Left — Order summary */}
          <div className="confirmed-card">

            {/* Card header */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "20px",
            }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 400,
                color: "var(--color-ink)",
              }}>
                Order Summary
              </h2>
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "12px",
                color: "var(--color-ink-muted)",
                letterSpacing: "0.05em",
              }}>
                {orderNumber}
              </span>
            </div>

            {/* Items */}
            <div style={{ marginBottom: "16px" }}>
              {orderItems.map((item) => (
                <div key={item.id} className="confirmed-order-row">
                  <div style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "var(--color-surface)",
                    flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <p className="confirmed-order-name">{item.name}</p>
                    <p className="confirmed-order-meta">{item.collection}</p>
                    <span style={{
                      display: "inline-block",
                      marginTop: "4px",
                      fontFamily: "var(--font-sans)",
                      fontSize: "9px",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-muted)",
                      border: "1px solid var(--color-border-mid)",
                      padding: "2px 8px",
                    }}>
                      QTY: {item.qty}
                    </span>
                  </div>
                  <p className="confirmed-order-price">
                    {formatUSD(item.price * item.qty)}
                  </p>
                </div>
              ))}
            </div>

            {/* Cost breakdown */}
            {[
              { label: "Subtotal",          value: formatUSD(subtotal)    },
              { label: "Shipping (Standard)", value: formatUSD(shippingFee) },
              { label: "Tax",               value: formatUSD(tax)         },
            ].map((row) => (
              <div key={row.label} style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "8px 0",
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
                }}>
                  {row.value}
                </span>
              </div>
            ))}

            {/* Total */}
            <div className="confirmed-total-row">
              <span className="confirmed-total-label">Total</span>
              <span className="confirmed-total-value">{formatUSD(total)}</span>
            </div>
          </div>

          {/* Right — Shipping + Assistance */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Shipping details */}
            <div className="confirmed-card">
              <p className="confirmed-card-label">
                <span className="confirmed-card-label-icon">🚚</span>
                Shipping Details
              </p>
              <p className="confirmed-shipping-name">{shipping.name}</p>
              <p className="confirmed-shipping-address">
                {shipping.address}<br />
                {shipping.apt}<br />
                {shipping.city}<br />
                {shipping.country}
              </p>
              <p className="confirmed-delivery-label">Estimated Delivery</p>
              <p className="confirmed-delivery-date">{delivery}</p>
            </div>

            {/* Need assistance */}
            <div className="confirmed-card">
              <p className="confirmed-card-label">
                <span className="confirmed-card-label-icon">🎧</span>
                Need Assistance?
              </p>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "var(--color-ink-muted)",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}>
                Our concierges are available to assist you
                with any questions regarding your artisan order.
              </p>
              <Link href="/contact" style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "var(--color-gold)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}>
                Contact Concierge →
              </Link>
            </div>

          </div>
        </div>

        {/* ── CTA ── */}
        <div className="confirmed-cta">
          <Button variant="primary" href="/">
            Return to Home
          </Button>
        </div>

      </div>
    </div>
  );
}