"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui";
import { Button } from "@/components/ui";
import SectionLabel from "@/components/ui/SectionLabel";

const tabs = ["All", "Nến thơm", "Set quà tặng", "Custom"];

const products = [
  {
    id: 1,
    name: "Aura Basic — Lavender Dreams",
    price: 160000,
    originalPrice: null,
    category: "Nến thơm",
    badge: null,
    scent: "Lavender · Vanilla · Musk",
    bg: "#E8E0D8",
  },
  {
    id: 2,
    name: "Aura Basic — Gỗ Thông & Cam",
    price: 160000,
    originalPrice: null,
    category: "Nến thơm",
    badge: "Mới",
    scent: "Pine · Orange · Cedar",
    bg: "#DDD5CC",
  },
  {
    id: 3,
    name: "Signature Custom Mùi Hương",
    price: 220000,
    originalPrice: null,
    category: "Custom",
    badge: "Bán chạy",
    scent: "Theo tính cách của bạn",
    bg: "#E4DDD8",
  },
  {
    id: 4,
    name: "Gift Box — Warm Hug",
    price: 320000,
    originalPrice: 380000,
    category: "Set quà tặng",
    badge: "Sale",
    scent: "Nến + Phụ kiện + Thiệp",
    bg: "#D8D0C8",
  },
  {
    id: 5,
    name: "Aura Basic — Rose & Oud",
    price: 160000,
    originalPrice: null,
    category: "Nến thơm",
    badge: null,
    scent: "Rose · Oud · Amber",
    bg: "#E0D8D5",
  },
  {
    id: 6,
    name: "Gift Box — Premium Set",
    price: 450000,
    originalPrice: null,
    category: "Set quà tặng",
    badge: "Cao cấp",
    scent: "Nến + Tinh dầu + Thiệp tay",
    bg: "#D5CEC8",
  },
  {
    id: 7,
    name: "Sculptural — Moon Candle",
    price: 195000,
    originalPrice: null,
    category: "Custom",
    badge: null,
    scent: "Jasmine · White Tea",
    bg: "#DDD8D0",
  },
  {
    id: 8,
    name: "Aura Basic — Coconut & Lime",
    price: 160000,
    originalPrice: null,
    category: "Nến thơm",
    badge: null,
    scent: "Coconut · Lime · Sea Salt",
    bg: "#E8E4DC",
  },
];

function formatPrice(p: number) {
  return p.toLocaleString("vi-VN") + "đ";
}

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? products
    : products.filter((p) => p.category === activeTab);

  return (
    <section style={{
      backgroundColor: "var(--color-white)",
      paddingTop: "96px",
      paddingBottom: "96px",
    }}>
      <div className="lumos-container">

        {/* Header */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: "48px",
        }}>
          <div>
            <SectionLabel align="left">Sản phẩm</SectionLabel>
            <h2 className="text-display" style={{ color: "var(--color-ink)" }}>
              Được yêu thích nhất
            </h2>
          </div>

          {/* Filter tabs */}
          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "8px 18px",
                  border: "1px solid",
                  borderColor: activeTab === tab
                    ? "var(--color-ink)"
                    : "var(--color-border)",
                  backgroundColor: activeTab === tab
                    ? "var(--color-ink)"
                    : "transparent",
                  color: activeTab === tab
                    ? "var(--color-white)"
                    : "var(--color-ink-muted)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  borderRadius: 0,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "2px",
        }}>
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{ cursor: "pointer" }}
                onMouseEnter={(e) => {
                  const img = e.currentTarget.querySelector(".product-img") as HTMLElement;
                  if (img) img.style.transform = "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  const img = e.currentTarget.querySelector(".product-img") as HTMLElement;
                  if (img) img.style.transform = "scale(1)";
                }}
              >
                {/* Image */}
                <div style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  overflow: "hidden",
                  position: "relative",
                  backgroundColor: product.bg,
                }}>
                  <div
                    className="product-img"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: product.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 0.5s ease",
                    }}
                  >
                    {/* Candle icon */}
                    <div style={{ opacity: 0.5 }}>
                      <div style={{
                        width: "2px", height: "12px",
                        backgroundColor: "#8B6F4E",
                        margin: "0 auto",
                      }} />
                      <div style={{
                        width: "8px", height: "12px",
                        backgroundColor: "#C9A96E",
                        borderRadius: "50% 50% 30% 30%",
                        margin: "-4px auto 0",
                      }} />
                      <div style={{
                        width: "52px", height: "64px",
                        backgroundColor: "#A08060",
                        margin: "0 auto",
                        borderRadius: "1px",
                      }} />
                    </div>
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                    }}>
                      <Badge variant={
                        product.badge === "Bán chạy" || product.badge === "Cao cấp"
                          ? "gold"
                          : "default"
                      }>
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: "16px 4px" }}>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-faint)",
                    marginBottom: "6px",
                  }}>
                    {product.scent}
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "var(--color-ink)",
                    marginBottom: "8px",
                    lineHeight: 1.3,
                  }}>
                    {product.name}
                  </h3>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "var(--color-ink)",
                    }}>
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "var(--color-ink-faint)",
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

        {/* View all */}
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <Button variant="ghost" href="/products">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}