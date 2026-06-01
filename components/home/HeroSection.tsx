"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section style={{
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: "var(--color-brown-deep)",
    }}>

      {/* Background image placeholder — warm candle atmosphere */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse at 60% 50%, rgba(201,169,110,0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(139,111,78,0.2) 0%, transparent 50%),
          linear-gradient(135deg, #1C1410 0%, #2C1F1A 40%, #3D2E24 100%)
        `,
      }} />

      {/* Decorative candle glow effect */}
      <div style={{
        position: "absolute",
        right: "10%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "120px 32px 80px",
        width: "100%",
      }}>
        <div style={{ maxWidth: "640px" }}>

          {/* Eyebrow label */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }} 
          
          className="animate-fade-in-up delay-1">
            
            <div style={{
              width: "40px",
              height: "1px",
              backgroundColor: "var(--color-gold)",
            }} />
            <span style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
            }}>
              Handcrafted Scented Candles
            </span>
          </div>

          {/* Main headline */}
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--color-cream)",
            marginBottom: "24px",
            letterSpacing: "-0.01em",
          }}className="animate-fade-in-up delay-2">
            Đốt nến lên,
            <br />
            <em style={{
              fontStyle: "italic",
              color: "var(--color-gold-light)",
            }}>
              viết câu chuyện
            </em>
            <br />
            của bạn.
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(232,217,200,0.75)",
            marginBottom: "48px",
            maxWidth: "480px",
            letterSpacing: "0.02em",
          }}className="animate-fade-in-up delay-3"
          >
            Nến thơm nghệ thuật thủ công từ sáp đậu nành thuần tự nhiên.
            Mỗi ngọn nến là một cảm xúc — được tạo ra riêng cho bạn.
          </p>

          {/* CTA buttons */}
          <div style={{ 
            display: "flex", 
            gap: "16px", 
            flexWrap: "wrap" 
            }} className="animate-fade-in-up delay-4">
            <Link href="/products" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              backgroundColor: "var(--color-gold)",
              color: "var(--color-brown-deep)",
              borderRadius: "100px",
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-gold-light)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-gold)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Khám phá sản phẩm
            </Link>

            <Link href="/quiz" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              backgroundColor: "transparent",
              color: "var(--color-cream)",
              borderRadius: "100px",
              border: "1px solid rgba(232,217,200,0.4)",
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-gold)";
                e.currentTarget.style.color = "var(--color-gold-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(232,217,200,0.4)";
                e.currentTarget.style.color = "var(--color-cream)";
              }}
            >
              Làm Scent Quiz ✦
            </Link>
          </div>

          {/* Social proof */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(201,169,110,0.15)",
          }}className="animate-fade-in-up delay-5">
            {[
              { number: "100%", label: "Sáp đậu nành" },
              { number: "50+", label: "Mùi hương" },
              { number: "500+", label: "Khách hàng" },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 400,
                  color: "var(--color-gold-light)",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}>
                  {stat.number}
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  color: "rgba(232,217,200,0.5)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "32px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}>
        <span style={{
          fontFamily: "var(--font-sans)",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(201,169,110,0.5)",
        }}>
          Scroll
        </span>
        <div style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, rgba(201,169,110,0.5), transparent)",
        }} />
      </div>

    </section>
  );
}