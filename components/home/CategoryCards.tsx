"use client";

import Link from "next/link";

const categories = [
  {
    title: "Aura Basic",
    subtitle: "Bộ sưu tập cơ bản",
    description: "Nến hũ thủy tinh tối giản với các mùi hương thư giãn tiêu chuẩn.",
    href: "/collections/basic",
    accent: "var(--color-gold)",
    bg: "var(--color-brown-dark)",
  },
  {
    title: "Custom Mùi Hương",
    subtitle: "Signature collection",
    description: "Làm bài Scent Quiz — hệ thống tự phối mùi hương theo tính cách của bạn.",
    href: "/quiz",
    accent: "var(--color-gold-light)",
    bg: "var(--color-brown)",
    featured: true,
  },
  {
    title: "Gift Box",
    subtitle: "Quà tặng tinh tế",
    description: "Hộp quà sang trọng — nến thơm, phụ kiện và thiệp viết tay.",
    href: "/collections/giftbox",
    accent: "var(--color-sand)",
    bg: "var(--color-brown-deep)",
  },
];

export default function CategoryCards() {
  return (
    <section style={{
      backgroundColor: "var(--color-cream)",
      padding: "96px 32px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}className="animate-fade-in-up delay-1">
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "16px",
          }}>
            <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)" }} />
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
            }}>
              Bộ sưu tập
            </span>
            <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)" }} />
          </div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 300,
            color: "var(--color-brown-dark)",
            letterSpacing: "0.02em",
          }}>
            Tìm ngọn nến của bạn
          </h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}>
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: cat.bg,
                  borderRadius: "16px",
                  padding: "48px 36px",
                  height: "100%",
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  border: cat.featured ? `1px solid rgba(201,169,110,0.3)` : "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(28,20,16,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Decorative glow */}
                <div style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, rgba(201,169,110,0.1) 0%, transparent 70%)`,
                  pointerEvents: "none",
                }} />

                {cat.featured && (
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    backgroundColor: "rgba(201,169,110,0.15)",
                    border: "1px solid rgba(201,169,110,0.3)",
                    borderRadius: "100px",
                    padding: "4px 12px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-gold-light)",
                  }}>
                    Phổ biến nhất
                  </div>
                )}

                <div>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: cat.accent,
                    opacity: 0.7,
                    marginBottom: "12px",
                  }}>
                    {cat.subtitle}
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "32px",
                    fontWeight: 400,
                    color: "var(--color-cream)",
                    marginBottom: "16px",
                    lineHeight: 1.1,
                  }}>
                    {cat.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "rgba(232,217,200,0.65)",
                  }}>
                    {cat.description}
                  </p>
                </div>

                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "32px",
                }}>
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: cat.accent,
                  }}>
                    Khám phá
                  </span>
                  <span style={{ color: cat.accent, fontSize: "16px" }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}