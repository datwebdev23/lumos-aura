"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = ["Tất cả", "Nến thơm", "Set quà tặng", "Custom"];

const products = [
  {
    id: 1,
    name: "Aura Basic — Lavender Dreams",
    price: 160000,
    originalPrice: null,
    category: "Nến thơm",
    badge: null,
    scent: "Lavender · Vanilla · Musk",
  },
  {
    id: 2,
    name: "Aura Basic — Gỗ Thông & Cam",
    price: 160000,
    originalPrice: null,
    category: "Nến thơm",
    badge: "Mới",
    scent: "Pine · Orange · Cedar",
  },
  {
    id: 3,
    name: "Signature Custom Mùi Hương",
    price: 220000,
    originalPrice: null,
    category: "Custom",
    badge: "Bán chạy",
    scent: "Theo tính cách của bạn",
  },
  {
    id: 4,
    name: "Gift Box — Warm Hug",
    price: 320000,
    originalPrice: 380000,
    category: "Set quà tặng",
    badge: "Sale",
    scent: "Nến + Phụ kiện + Thiệp",
  },
  {
    id: 5,
    name: "Aura Basic — Rose & Oud",
    price: 160000,
    originalPrice: null,
    category: "Nến thơm",
    badge: null,
    scent: "Rose · Oud · Amber",
  },
  {
    id: 6,
    name: "Gift Box — Premium Set",
    price: 450000,
    originalPrice: null,
    category: "Set quà tặng",
    badge: "Cao cấp",
    scent: "Nến + Tinh dầu + Thiệp tay",
  },
  {
    id: 7,
    name: "Sculptural — Moon Candle",
    price: 195000,
    originalPrice: null,
    category: "Custom",
    badge: "Nghệ thuật",
    scent: "Jasmine · White Tea",
  },
  {
    id: 8,
    name: "Aura Basic — Coconut & Lime",
    price: 160000,
    originalPrice: null,
    category: "Nến thơm",
    badge: null,
    scent: "Coconut · Lime · Sea Salt",
  },
];

const badgeColors: Record<string, { bg: string; color: string }> = {
  "Mới":       { bg: "rgba(107,124,92,0.15)",  color: "var(--color-olive)" },
  "Bán chạy":  { bg: "rgba(201,169,110,0.15)", color: "var(--color-gold-dark)" },
  "Sale":      { bg: "rgba(139,111,78,0.15)",  color: "var(--color-brown)" },
  "Cao cấp":   { bg: "rgba(201,169,110,0.12)", color: "var(--color-gold-dark)" },
  "Nghệ thuật":{ bg: "rgba(107,124,92,0.15)",  color: "var(--color-olive)" },
};

function formatPrice(price: number) {
  return price.toLocaleString("vi-VN") + "đ";
}

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("Tất cả");

  const filtered = activeTab === "Tất cả"
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section style={{
      backgroundColor: "var(--color-beige)",
      padding: "96px 32px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "24px",
          marginBottom: "48px",
        }}className="animate-fade-in-up delay-1">
          <div>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "12px",
            }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)" }} />
              <span style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
              }}>
                Sản phẩm
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 300,
              color: "var(--color-brown-dark)",
            }}>
              Được yêu thích nhất
            </h2>
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "100px",
                  border: "1px solid",
                  borderColor: activeTab === tab ? "var(--color-brown)" : "var(--color-sand)",
                  backgroundColor: activeTab === tab ? "var(--color-brown)" : "transparent",
                  color: activeTab === tab ? "var(--color-cream)" : "var(--color-brown)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
        }}>
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: "var(--color-cream)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-warm-lg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Image placeholder */}
                <div style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  backgroundColor: "var(--color-sand)",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <div style={{
                    width: "64px",
                    height: "80px",
                    backgroundColor: "var(--color-brown-light)",
                    borderRadius: "4px 4px 2px 2px",
                    opacity: 0.5,
                    position: "relative",
                  }}>
                    {/* Candle wick */}
                    <div style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "2px",
                      height: "12px",
                      backgroundColor: "var(--color-brown-dark)",
                      borderRadius: "1px",
                    }} />
                    {/* Flame */}
                    <div style={{
                      position: "absolute",
                      top: "-24px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "8px",
                      height: "14px",
                      backgroundColor: "var(--color-gold)",
                      borderRadius: "50% 50% 30% 30%",
                      opacity: 0.8,
                    }} />
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      backgroundColor: badgeColors[product.badge]?.bg,
                      fontFamily: "var(--font-sans)",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      color: badgeColors[product.badge]?.color,
                    }}>
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Product info */}
                <div style={{ padding: "20px" }}>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    marginBottom: "6px",
                  }}>
                    {product.scent}
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "var(--color-brown-dark)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}>
                    {product.name}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "var(--color-brown)",
                    }}>
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "rgba(139,111,78,0.4)",
                        textDecoration: "line-through",
                      }}>
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/products" className="btn-outline">
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}