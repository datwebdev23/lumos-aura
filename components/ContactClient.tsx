"use client";

import { useState } from "react";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) setSent(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    border: "1px solid var(--color-sand)",
    backgroundColor: "var(--color-cream)",
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    color: "var(--color-brown-dark)",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s ease",
  };

  const labelStyle = {
    display: "block" as const,
    fontFamily: "var(--font-sans)",
    fontSize: "11px",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "var(--color-brown-light)",
    marginBottom: "8px",
  };

  return (
    <div style={{ backgroundColor: "var(--color-cream)", minHeight: "100vh", paddingTop: "100px" }}>

      {/* Hero */}
      <div style={{
        backgroundColor: "var(--color-brown-deep)",
        padding: "80px 32px",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center",
          gap: "12px", marginBottom: "20px",
        }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)" }} />
          <span style={{
            fontFamily: "var(--font-sans)", fontSize: "11px",
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--color-gold)",
          }}>Liên hệ</span>
          <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)" }} />
        </div>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 5vw, 64px)",
          fontWeight: 300, color: "var(--color-cream)",
          marginBottom: "16px",
        }}>
          Chúng tôi luôn lắng nghe
        </h1>
        <p style={{
          fontFamily: "var(--font-sans)", fontSize: "15px",
          color: "rgba(232,217,200,0.65)", fontWeight: 300,
          maxWidth: "480px", margin: "0 auto", lineHeight: 1.8,
        }}>
          Có câu hỏi về sản phẩm, đơn hàng custom, hay chỉ muốn nói chuyện về nến thơm?
        </p>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "80px 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.5fr",
          gap: "64px",
          alignItems: "start",
        }}>

          {/* Left — Info */}
          <div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "32px", fontWeight: 300,
              color: "var(--color-brown-dark)",
              marginBottom: "32px",
            }}>
              Thông tin liên hệ
            </h2>

            {[
              {
                icon: "📍",
                label: "Địa chỉ",
                value: "TP. Hồ Chí Minh, Việt Nam",
                sub: "Nhận đặt hàng online toàn quốc",
              },
              {
                icon: "📞",
                label: "Điện thoại",
                value: "0909 123 456",
                sub: "Thứ 2 – Chủ nhật, 9:00 – 21:00",
              },
              {
                icon: "✉️",
                label: "Email",
                value: "hello@lumosaura.vn",
                sub: "Phản hồi trong vòng 24 giờ",
              },
              {
                icon: "💬",
                label: "Zalo",
                value: "0909 123 456",
                sub: "Tư vấn nhanh qua Zalo",
              },
            ].map((item) => (
              <div key={item.label} style={{
                display: "flex", gap: "16px",
                padding: "20px 0",
                borderBottom: "1px solid var(--color-sand)",
              }}>
                <span style={{ fontSize: "20px", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
                <div>
                  <p style={{
                    fontFamily: "var(--font-sans)", fontSize: "10px",
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "var(--color-gold)", marginBottom: "4px",
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-sans)", fontSize: "15px",
                    fontWeight: 500, color: "var(--color-brown-dark)",
                    marginBottom: "2px",
                  }}>
                    {item.value}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-sans)", fontSize: "12px",
                    color: "var(--color-brown-light)",
                  }}>
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}

            {/* Google Maps */}
<div
  style={{
    marginTop: "32px",
    width: "100%",
    height: "260px",
    backgroundColor: "var(--color-beige)",
    borderRadius: "12px",
    border: "1px solid var(--color-sand)",
    overflow: "hidden",
  }}
>
  <iframe
    title="Lumos Aura location map"
    src="https://www.google.com/maps?q=Ho%20Chi%20Minh%20City%2C%20Vietnam&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0, display: "block" }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

<p
  style={{
    marginTop: "12px",
    fontFamily: "var(--font-sans)",
    fontSize: "12px",
    color: "var(--color-brown-light)",
    lineHeight: 1.6,
  }}
>
  Bản đồ hiển thị khu vực TP. Hồ Chí Minh — Lumos Aura hiện nhận đặt hàng online toàn quốc.
</p>
          </div>

          {/* Right — Form */}
          <div style={{
            backgroundColor: "var(--color-beige)",
            borderRadius: "20px",
            padding: "40px",
            border: "1px solid var(--color-sand)",
          }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{
                  width: "64px", height: "64px", borderRadius: "50%",
                  backgroundColor: "rgba(107,124,92,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: "28px",
                }}>
                  ✓
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "28px",
                  fontWeight: 300, color: "var(--color-brown-dark)",
                  marginBottom: "12px",
                }}>
                  Đã nhận tin nhắn!
                </h3>
                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: "14px",
                  color: "var(--color-brown)", lineHeight: 1.7,
                }}>
                  Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                </p>
              </div>
            ) : (
              <>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontSize: "28px",
                  fontWeight: 300, color: "var(--color-brown-dark)",
                  marginBottom: "8px",
                }}>
                  Gửi tin nhắn
                </h3>
                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: "13px",
                  color: "var(--color-brown-light)", marginBottom: "32px",
                }}>
                  Điền thông tin bên dưới, chúng tôi sẽ liên hệ lại sớm nhất.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={labelStyle}>Họ tên *</label>
                    <input
                      type="text" placeholder="Nguyễn Văn A"
                      style={inputStyle}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Số điện thoại</label>
                    <input
                      type="tel" placeholder="0909 xxx xxx"
                      style={inputStyle}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: "16px" }}>
                  <label style={labelStyle}>Email *</label>
                  <input
                    type="email" placeholder="example@email.com"
                    style={inputStyle}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: "28px" }}>
                  <label style={labelStyle}>Nội dung *</label>
                  <textarea
                    placeholder="Bạn muốn hỏi về sản phẩm nào? Đơn hàng custom? Hay chỉ muốn nói chuyện về nến thơm?"
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  style={{
                    width: "100%", padding: "16px",
                    borderRadius: "100px",
                    backgroundColor: "var(--color-brown-dark)",
                    border: "none", cursor: "pointer",
                    fontFamily: "var(--font-sans)", fontSize: "12px",
                    fontWeight: 500, letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "var(--color-cream)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "var(--color-brown-deep)"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "var(--color-brown-dark)"}
                >
                  Gửi tin nhắn ✦
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}