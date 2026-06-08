import Link from "next/link";

const mockOrder = {
  number: "#LA-9842",
  status: "Confirmed",
  item: {
    name: "Celestial Amber Extrait",
    subtitle: "50ml · Refillable",
    qty: 1,
    price: 85,
    bg: "#D4C8B8",
  },
};

export default function OrderConfirmedClient() {
  return (
    <div className="confirmed-page animate-fade-in">

      {/* Star icon */}
      <div className="confirmed-icon-wrap">
        <svg
          className="confirmed-icon-star"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.26L22 9.27l-5 5.14 1.18 7.19L12 18.4l-6.18 3.2L7 14.41 2 9.27l7.1-1.01L12 2z" />
        </svg>
      </div>

      {/* Headline */}
      <h1 className="confirmed-headline">
        Your Aura is on its way.
      </h1>

      <p className="confirmed-subtext">
        Thank you for your order. The ethereal essence is being
        prepared for its journey to you.
      </p>

      {/* Order card */}
      <div className="confirmed-card">

        {/* Order number + status */}
        <div className="confirmed-card-meta">
          <div className="confirmed-meta-group">
            <span className="confirmed-meta-label">Order Number</span>
            <span className="confirmed-meta-value">{mockOrder.number}</span>
          </div>
          <div className="confirmed-meta-group" style={{ alignItems: "flex-end" }}>
            <span className="confirmed-meta-label">Status</span>
            <div className="confirmed-meta-status">
              <span className="confirmed-status-dot" />
              {mockOrder.status}
            </div>
          </div>
        </div>

        {/* Order summary label */}
        <p className="confirmed-order-label">Order Summary</p>

        {/* Item row */}
        <div className="confirmed-item-row">
          {/* Thumbnail placeholder */}
          <div
            className="confirmed-item-thumb-placeholder"
            style={{ backgroundColor: mockOrder.item.bg }}
          />

          {/* Info */}
          <div className="confirmed-item-info">
            <p className="confirmed-item-name">{mockOrder.item.name}</p>
            <p className="confirmed-item-sub">{mockOrder.item.subtitle}</p>
            <span className="confirmed-qty-badge">
              QTY: {mockOrder.item.qty}
            </span>
          </div>

          {/* Price */}
          <p className="confirmed-item-price">
            ${mockOrder.item.price}.00
          </p>
        </div>

        {/* Tracking link */}
        <div className="confirmed-tracking-row">
          <Link href="/" className="confirmed-tracking-link">
            View Tracking Details →
          </Link>
        </div>

      </div>

      {/* CTA */}
      <div className="confirmed-cta-wrap">
        <Link href="/products" className="confirmed-cta-btn">
          Keep Exploring
        </Link>
      </div>

    </div>
  );
}