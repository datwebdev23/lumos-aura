"use client";

import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const featured = {
  tag: "Curated Set",
  title: "The Midnight Ritual",
  description: "Bộ sưu tập nến cao cấp — mùi hương được phối riêng cho những khoảnh khắc tĩnh lặng.",
  href: "/collections/midnight",
  cta: "Discover Collection",
};

const secondary = [
  {
    tag: "Signature",
    title: "Custom Mùi Hương",
    href: "/quiz",
  },
  {
    tag: "Gifting",
    title: "Gift Box Collection",
    href: "/collections/giftbox",
  },
];

export default function CategoryCards() {
  return (
    <section style={{
      backgroundColor: "var(--color-white)",
      paddingTop: "96px",
      paddingBottom: "96px",
    }}>
      <div className="lumos-container">

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <SectionLabel>Featured Gifts</SectionLabel>
          <h2 className="text-display" style={{ color: "var(--color-ink)" }}>
            Tìm ngọn nến của bạn
          </h2>
        </div>

        {/* Editorial grid — 1 large left + 2 small right */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.65fr",
          gridTemplateRows: "auto",
          gap: "12px",
        }}
          className="featured-grid"
        >

          {/* Large card — left */}
          <Link href={featured.href} style={{ textDecoration: "none", display: "block" }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "4 / 3",
                backgroundColor: "var(--color-surface)",
                overflow: "hidden",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector(".card-img") as HTMLElement;
                if (img) img.style.transform = "scale(1.04)";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector(".card-img") as HTMLElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              {/* Image placeholder */}
              <div
                className="card-img"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, #2C1F1A 0%, #4A3020 40%, #6B4A30 100%)",
                  transition: "transform 0.6s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Candle illustration */}
                <div style={{ position: "relative", opacity: 0.6 }}>
                  <div style={{
                    width: "2px", height: "16px",
                    backgroundColor: "#C9A96E",
                    margin: "0 auto",
                  }} />
                  <div style={{
                    width: "10px", height: "16px",
                    backgroundColor: "#E8C84A",
                    borderRadius: "50% 50% 30% 30%",
                    margin: "-8px auto 0",
                    opacity: 0.8,
                  }} />
                  <div style={{
                    width: "80px", height: "100px",
                    backgroundColor: "#8B6F4E",
                    borderRadius: "2px",
                    margin: "0 auto",
                  }} />
                </div>
              </div>

              {/* Overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(13,27,42,0.85) 0%, rgba(13,27,42,0.2) 50%, transparent 100%)",
              }} />

              {/* Text overlay */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "32px",
              }}>
                <span style={{
                  display: "inline-block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  padding: "4px 10px",
                  marginBottom: "12px",
                }}>
                  {featured.tag}
                </span>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 400,
                  color: "var(--color-white)",
                  marginBottom: "16px",
                  lineHeight: 1.1,
                }}>
                  {featured.title}
                </h3>
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "var(--color-gold-light)",
                  textDecoration: "none",
                }}>
                  {featured.cta} →
                </span>
              </div>
            </div>
          </Link>

          {/* Right column — 2 stacked cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {secondary.map((item, i) => (
              <Link
                key={item.title}
                href={item.href}
                style={{ textDecoration: "none", flex: 1, display: "block" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    minHeight: "180px",
                    overflow: "hidden",
                    cursor: "pointer",
                    backgroundColor: i === 0 ? "#E8D9C8" : "#C8D4CC",
                  }}
                  onMouseEnter={(e) => {
                    const img = e.currentTarget.querySelector(".card-img-sm") as HTMLElement;
                    if (img) img.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    const img = e.currentTarget.querySelector(".card-img-sm") as HTMLElement;
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  {/* Bg */}
                  <div
                    className="card-img-sm"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: i === 0
                        ? "linear-gradient(135deg, #E8D0B0 0%, #C4A882 100%)"
                        : "linear-gradient(135deg, #D0D8D0 0%, #A8B8A8 100%)",
                      transition: "transform 0.5s ease",
                    }}
                  />

                  {/* Overlay */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(26,26,26,0.6) 0%, transparent 60%)",
                  }} />

                  {/* Text */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px 24px",
                  }}>
                    <p style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.6)",
                      marginBottom: "6px",
                    }}>
                      {item.tag}
                    </p>
                    <h3 style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "var(--color-white)",
                      lineHeight: 1.1,
                    }}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}