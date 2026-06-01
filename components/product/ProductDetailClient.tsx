"use client";

import { useState } from "react";
import Link from "next/link";
import ReviewSection from "./ReviewSection";

const product = {
  id: 1,
  name: "Aura Basic — Lavender Dreams",
  price: 160000,
  originalPrice: null,
  scent: "Lavender · Vanilla · Musk",
  description:
    "Một ngọn nến được tạo ra để đưa bạn vào trạng thái thư giãn sâu. Hương lavender tươi mát hòa quyện cùng vanilla ngọt dịu và musk ấm áp — như một buổi tối mùa đông bên cửa sổ mờ hơi sương.",
  details: [
    { label: "Dung tích", value: "200g" },
    { label: "Thời gian cháy", value: "~45 giờ" },
    { label: "Chất liệu", value: "100% Sáp đậu nành" },
    { label: "Tinh dầu", value: "Chuẩn kiểm định COA" },
    { label: "Kích thước", value: "Hũ thủy tinh Ø8cm" },
  ],
  scentNotes: [
    { type: "Top notes", note: "Lavender, Bergamot", desc: "Tươi mát, nhẹ nhàng" },
    { type: "Heart notes", note: "Vanilla, Jasmine", desc: "Ngọt dịu, lãng mạn" },
    { type: "Base notes", note: "Musk, Sandalwood", desc: "Ấm áp, lưu lâu" },
  ],
  variants: ["Hũ 100g — 110.000đ", "Hũ 200g — 160.000đ", "Hũ 300g — 210.000đ"],
  badges: ["100% Sáp đậu nành", "Handcrafted", "Giao toàn quốc"],
};

export default function ProductDetailClient() {
  const [selectedVariant, setSelectedVariant] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Mô tả");

  const tabs = ["Mô tả", "Tầng hương", "Chi tiết"];

  return (
    <div style={{ backgroundColor: "var(--color-cream)", minHeight: "100vh", paddingTop: "100px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 32px" }}>

        {/* Breadcrumb */}
        <div style={{
          display: "flex", gap: "8px", alignItems: "center",
          marginBottom: "40px",
          fontFamily: "var(--font-sans)", fontSize: "12px",
          letterSpacing: "0.05em", color: "var(--color-brown-light)",
        }}>
          <Link href="/" style={{ color: "var(--color-brown-light)", textDecoration: "none" }}>Trang chủ</Link>
          <span>›</span>
          <Link href="/products" style={{ color: "var(--color-brown-light)", textDecoration: "none" }}>Sản phẩm</Link>
          <span>›</span>
          <span style={{ color: "var(--color-brown-dark)" }}>{product.name}</span>
        </div>

        {/* Main layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}
          className="product-grid"
        >
          {/* Left — Image gallery */}
          <div>
            {/* Main image */}
            <div style={{
              width: "100%", aspectRatio: "1 / 1",
              backgroundColor: "var(--color-sand)",
              borderRadius: "16px",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "16px",
              position: "relative",
              overflow: "hidden",
            }}>
              <div style={{
                background: "radial-gradient(circle at 50% 60%, rgba(201,169,110,0.2) 0%, transparent 60%)",
                position: "absolute", inset: 0,
              }} />
              {/* Candle illustration */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{
                  width: "12px", height: "60px",
                  backgroundColor: "var(--color-brown-dark)",
                  borderRadius: "2px",
                  margin: "0 auto",
                  position: "relative",
                }}>
                  <div style={{
                    position: "absolute", top: "-18px", left: "50%",
                    transform: "translateX(-50%)",
                    width: "14px", height: "22px",
                    backgroundColor: "var(--color-gold)",
                    borderRadius: "50% 50% 30% 30%",
                    opacity: 0.9,
                  }} />
                </div>
                <div style={{
                  width: "120px", height: "140px",
                  backgroundColor: "var(--color-brown-light)",
                  borderRadius: "6px 6px 4px 4px",
                  margin: "0 auto",
                  opacity: 0.7,
                }} />
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: "flex", gap: "12px" }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{
                  flex: 1, aspectRatio: "1 / 1",
                  backgroundColor: i === 1 ? "var(--color-sand)" : "var(--color-beige)",
                  borderRadius: "8px",
                  border: i === 1 ? "2px solid var(--color-brown)" : "2px solid transparent",
                  cursor: "pointer",
                  transition: "border-color 0.2s ease",
                }} />
              ))}
            </div>
          </div>

          {/* Right — Product info */}
          <div>
            {/* Badges */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
              {product.badges.map((badge) => (
                <span key={badge} style={{
                  padding: "4px 12px", borderRadius: "100px",
                  backgroundColor: "rgba(201,169,110,0.1)",
                  border: "1px solid rgba(201,169,110,0.3)",
                  fontFamily: "var(--font-sans)", fontSize: "10px",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "var(--color-gold-dark)",
                }}>
                  {badge}
                </span>
              ))}
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 300, lineHeight: 1.2,
              color: "var(--color-brown-dark)",
              marginBottom: "8px",
            }}>
              {product.name}
            </h1>

            {/* Scent */}
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "13px",
              letterSpacing: "0.1em", color: "var(--color-gold)",
              marginBottom: "24px",
            }}>
              ✦ {product.scent}
            </p>

            {/* Price */}
            <div style={{ marginBottom: "32px" }}>
              <span style={{
                fontFamily: "var(--font-display)",
                fontSize: "32px", fontWeight: 400,
                color: "var(--color-brown)",
              }}>
                {product.price.toLocaleString("vi-VN")}đ
              </span>
            </div>

            {/* Variants */}
            <div style={{ marginBottom: "28px" }}>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: "11px",
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "var(--color-brown-light)", marginBottom: "12px",
              }}>
                Dung tích
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {product.variants.map((v, i) => (
                  <button key={i} onClick={() => setSelectedVariant(i)}
                    style={{
                      padding: "10px 18px", borderRadius: "8px",
                      border: "1px solid",
                      borderColor: selectedVariant === i ? "var(--color-brown)" : "var(--color-sand)",
                      backgroundColor: selectedVariant === i ? "var(--color-brown)" : "transparent",
                      color: selectedVariant === i ? "var(--color-cream)" : "var(--color-brown)",
                      fontFamily: "var(--font-sans)", fontSize: "13px",
                      cursor: "pointer", transition: "all 0.2s ease",
                    }}>
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: "11px",
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "var(--color-brown-light)", marginBottom: "12px",
              }}>
                Số lượng
              </p>
              <div style={{
                display: "inline-flex", alignItems: "center",
                border: "1px solid var(--color-sand)", borderRadius: "8px",
                overflow: "hidden",
              }}>
                {[
                  { label: "−", action: () => setQuantity(Math.max(1, quantity - 1)) },
                  { label: String(quantity), action: null },
                  { label: "+", action: () => setQuantity(quantity + 1) },
                ].map((btn, i) => (
                  <button key={i} onClick={btn.action || undefined}
                    style={{
                      width: "44px", height: "44px",
                      backgroundColor: btn.action ? "transparent" : "var(--color-beige)",
                      border: "none",
                      borderLeft: i > 0 ? "1px solid var(--color-sand)" : "none",
                      fontFamily: "var(--font-sans)", fontSize: i === 1 ? "16px" : "20px",
                      color: "var(--color-brown-dark)",
                      cursor: btn.action ? "pointer" : "default",
                    }}>
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              <button style={{
                padding: "16px 32px", borderRadius: "100px",
                backgroundColor: "var(--color-brown-dark)",
                border: "none", cursor: "pointer",
                fontFamily: "var(--font-sans)", fontSize: "13px",
                fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
                color: "var(--color-cream)", transition: "all 0.3s ease",
              }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--color-brown-deep)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--color-brown-dark)"}
              >
                Thêm vào giỏ hàng
              </button>
              <button style={{
                padding: "16px 32px", borderRadius: "100px",
                backgroundColor: "var(--color-gold)",
                border: "none", cursor: "pointer",
                fontFamily: "var(--font-sans)", fontSize: "13px",
                fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
                color: "var(--color-brown-deep)", transition: "all 0.3s ease",
              }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "0.9"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
              >
                Mua ngay
              </button>
            </div>

            {/* Perks */}
            <div style={{
              padding: "20px", borderRadius: "12px",
              backgroundColor: "var(--color-beige)",
              border: "1px solid var(--color-sand)",
            }}>
              {[
                { icon: "🚚", text: "Miễn phí vận chuyển đơn từ 300.000đ" },
                { icon: "✦", text: "Đóng gói 3 lớp chống sốc, có đá gel mùa hè" },
                { icon: "↩", text: "Đổi trả trong 3 ngày nếu lỗi vận chuyển" },
              ].map((perk) => (
                <div key={perk.text} style={{
                  display: "flex", gap: "12px", alignItems: "center",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--color-sand)",
                }}>
                  <span style={{ fontSize: "14px" }}>{perk.icon}</span>
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: "13px",
                    color: "var(--color-brown)", lineHeight: 1.5,
                  }}>
                    {perk.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs section */}
        <div style={{ marginTop: "80px" }}>
          <div style={{
            display: "flex", gap: "0",
            borderBottom: "1px solid var(--color-sand)",
            marginBottom: "40px",
          }}>
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{
                  padding: "12px 28px", border: "none", background: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)", fontSize: "13px",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  color: activeTab === tab ? "var(--color-brown-dark)" : "var(--color-brown-light)",
                  borderBottom: activeTab === tab ? "2px solid var(--color-brown)" : "2px solid transparent",
                  marginBottom: "-1px", transition: "all 0.2s ease",
                }}>
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          {activeTab === "Mô tả" && (
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "15px",
              lineHeight: 1.9, color: "var(--color-brown)",
              maxWidth: "640px",
            }}>
              {product.description}
            </p>
          )}

          {activeTab === "Tầng hương" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "560px" }}>
              {product.scentNotes.map((note, i) => (
                <div key={i} style={{
                  display: "flex", gap: "24px", alignItems: "center",
                  padding: "20px 24px", borderRadius: "12px",
                  backgroundColor: "var(--color-beige)",
                  border: "1px solid var(--color-sand)",
                }}>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    backgroundColor: "var(--color-gold)", flexShrink: 0,
                  }} />
                  <div>
                    <p style={{
                      fontFamily: "var(--font-sans)", fontSize: "10px",
                      letterSpacing: "0.2em", textTransform: "uppercase",
                      color: "var(--color-gold)", marginBottom: "4px",
                    }}>{note.type}</p>
                    <p style={{
                      fontFamily: "var(--font-display)", fontSize: "18px",
                      color: "var(--color-brown-dark)", marginBottom: "2px",
                    }}>{note.note}</p>
                    <p style={{
                      fontFamily: "var(--font-sans)", fontSize: "12px",
                      color: "var(--color-brown-light)",
                    }}>{note.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Chi tiết" && (
            <div style={{ maxWidth: "480px" }}>
              {product.details.map((d, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--color-sand)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: "13px",
                    color: "var(--color-brown-light)", letterSpacing: "0.05em",
                  }}>{d.label}</span>
                  <span style={{
                    fontFamily: "var(--font-sans)", fontSize: "13px",
                    fontWeight: 500, color: "var(--color-brown-dark)",
                  }}>{d.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
        <ReviewSection />
    </div>
  );
}