"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="lumos-hero">
      {/* Background image placeholder — warm candle atmosphere */}
      <div className="lumos-hero-bg" />

      {/* Decorative candle glow effect */}
      <div className="lumos-hero-glow" />

      {/* Content */}
      <div className="lumos-container lumos-hero-content">
        <div className="lumos-hero-inner">
          {/* Eyebrow label */}
          <div className="lumos-eyebrow animate-fade-in-up delay-1">
            <div className="lumos-eyebrow-line" />

            <span className="text-label-gold">Handcrafted Scented Candles</span>
          </div>

          {/* Main headline */}
          <h1 className="text-display-hero-dark animate-fade-in-up delay-2">
            Đốt nến lên,
            <br />
            <em className="text-gold-highlight">viết câu chuyện</em>
            <br />
            của bạn.
          </h1>

          {/* Subheadline */}
          <p className="hero-description animate-fade-in-up delay-3">
            Khám phá những hũ nến thơm được chế tác thủ công, mang đến cảm giác
            thư giãn, ấm áp và tinh tế cho không gian sống của bạn.
          </p>

          {/* CTA buttons */}
          <div className="hero-actions animate-fade-in-up delay-4">
            <Link href="/products" className="btn btn-gold">
              Khám phá sản phẩm
            </Link>

            <Link href="/quiz" className="btn btn-ghost-white">
              Làm Scent Quiz ✦
            </Link>
          </div>

          {/* Social proof */}
          <div className="hero-stats animate-fade-in-up delay-5">
            {[
              { number: "100%", label: "Sáp đậu nành" },
              { number: "50+", label: "Mùi hương" },
              { number: "500+", label: "Khách hàng" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="hero-stat-number">{stat.number}</p>
                <p className="hero-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
