"use client";

import { useState } from "react";
import Link from "next/link";

const promos = [
  {
    id: 1,
    tag: "Ưu đãi tuần này",
    headline: "Mua 2 tặng 1",
    sub: "Áp dụng cho tất cả nến dòng Aura Basic",
    cta: "Mua ngay",
    href: "/products",
    bg: "var(--color-brown-dark)",
    accent: "var(--color-gold)",
  },
  {
    id: 2,
    tag: "Quà tặng ý nghĩa",
    headline: "Free thiệp viết tay",
    sub: "Cho mọi đơn hàng Gift Box từ 320.000đ",
    cta: "Chọn Gift Box",
    href: "/collections/giftbox",
    bg: "var(--color-olive-dark)",
    accent: "var(--color-gold-light)",
  },
  {
    id: 3,
    tag: "Mới ra mắt",
    headline: "Sculptural Candles",
    sub: "Nến nghệ thuật tạo hình — phiên bản giới hạn",
    cta: "Khám phá",
    href: "/collections/sculptural",
    bg: "var(--color-brown-deep)",
    accent: "var(--color-gold)",
  },
];

export default function PromoBanner() {
  const [active, setActive] = useState(0);
  const current = promos[active];

  return (
    <section style={{ padding: "80px 32px", backgroundColor: "var(--color-cream)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section label */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: "12px", marginBottom: "32px",
        }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)" }} />
          <span style={{
            fontFamily: "var(--font-sans)", fontSize: "11px",
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--color-gold)",
          }}>Ưu đãi</span>
        </div>

        {/* Main banner */}
        <div style={{
          borderRadius: "20px",
          backgroundColor: current.bg,
          padding: "56px 64px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "32px",
          transition: "background-color 0.4s ease",
          position: "relative",
          overflow: "hidden",
          minHeight: "200px",
        }}>

          {/* Decorative glow */}
          <div style={{
            position: "absolute",
            right: "-60px", top: "-60px",
            width: "300px", height: "300px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            left: "30%", bottom: "-80px",
            width: "200px", height: "200px",
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />

          {/* Text content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <span style={{
              fontFamily: "var(--font-sans)", fontSize: "11px",
              letterSpacing: "0.25em", textTransform: "uppercase",
              color: current.accent, opacity: 0.8,
              display: "block", marginBottom: "12px",
            }}>
              ✦ {current.tag}
            </span>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 300, color: "var(--color-cream)",
              lineHeight: 1.1, marginBottom: "12px",
            }}>
              {current.headline}
            </h3>
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "15px",
              fontWeight: 300, color: "rgba(232,217,200,0.65)",
              marginBottom: "32px",
            }}>
              {current.sub}
            </p>
            <Link href={current.href} style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "12px 28px", borderRadius: "100px",
              backgroundColor: current.accent,
              color: "var(--color-brown-deep)",
              fontFamily: "var(--font-sans)", fontSize: "12px",
              fontWeight: 500, letterSpacing: "0.15em",
              textTransform: "uppercase", textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.85"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              {current.cta} →
            </Link>
          </div>

          {/* Slide indicators */}
          <div style={{
            position: "relative", zIndex: 1,
            display: "flex", flexDirection: "column", gap: "12px",
          }}>
            {promos.map((promo, i) => (
              <button key={promo.id} onClick={() => setActive(i)}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "12px 20px", borderRadius: "10px",
                  border: "1px solid",
                  borderColor: active === i ? "rgba(201,169,110,0.4)" : "rgba(255,255,255,0.1)",
                  backgroundColor: active === i ? "rgba(201,169,110,0.1)" : "transparent",
                  cursor: "pointer", textAlign: "left",
                  transition: "all 0.2s ease", minWidth: "200px",
                }}
              >
                <div style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  backgroundColor: active === i ? "var(--color-gold)" : "rgba(255,255,255,0.2)",
                  flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: "var(--font-sans)", fontSize: "12px",
                  color: active === i ? "var(--color-gold-light)" : "rgba(232,217,200,0.4)",
                  letterSpacing: "0.05em",
                }}>
                  {promo.tag}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}