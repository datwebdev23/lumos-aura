"use client";

import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    initials: "MA",
    rating: 5,
    date: "15/05/2026",
    title: "Mùi hương tuyệt vời, đúng như mô tả",
    content:
      "Mình đã mua rất nhiều nến thơm nhưng Lumos Aura thực sự khác biệt. Hương lavender không quá nồng, rất dịu nhẹ và tự nhiên. Đốt lên cả phòng thơm mà không bị ngạt. Sẽ mua lại!",
    verified: true,
  },
  {
    id: 2,
    name: "Trần Phương Linh",
    initials: "PL",
    rating: 5,
    date: "08/05/2026",
    title: "Quà tặng hoàn hảo cho bạn bè",
    content:
      "Mua làm quà sinh nhật cho bạn, bạn mình thích lắm. Đóng gói rất đẹp và chắc chắn, nến không bị vỡ khi ship. Thiệp viết tay rất có tâm. Cảm ơn shop!",
    verified: true,
  },
  {
    id: 3,
    name: "Lê Hoàng Nam",
    initials: "HN",
    rating: 4,
    date: "01/05/2026",
    title: "Chất lượng tốt, giao hàng nhanh",
    content:
      "Nến đẹp, mùi thơm dễ chịu. Trừ 1 sao vì giao hơi chậm hơn dự kiến 1 ngày. Nhưng nhìn chung rất hài lòng với sản phẩm. Sáp đậu nành cháy đều, không bị lõm.",
    verified: false,
  },
];

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg key={star} width={size} height={size} viewBox="0 0 24 24" fill="none">
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill={star <= rating ? "var(--color-gold)" : "var(--color-sand)"}
            stroke={star <= rating ? "var(--color-gold)" : "var(--color-sand)"}
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewSection() {
  const [showForm, setShowForm] = useState(false);
  const avgRating = reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;

  return (
    <section style={{
      backgroundColor: "var(--color-cream)",
      padding: "80px 32px",
      borderTop: "1px solid var(--color-sand)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "24px",
          marginBottom: "48px",
        }}>
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center",
              gap: "12px", marginBottom: "12px",
            }}>
              <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)" }} />
              <span style={{
                fontFamily: "var(--font-sans)", fontSize: "11px",
                letterSpacing: "0.3em", textTransform: "uppercase",
                color: "var(--color-gold)",
              }}>
                Đánh giá
              </span>
            </div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 300, color: "var(--color-brown-dark)",
            }}>
              Khách hàng nói gì?
            </h2>
          </div>

          {/* Average rating */}
          <div style={{ textAlign: "center" }}>
            <p style={{
              fontFamily: "var(--font-display)",
              fontSize: "56px", fontWeight: 300,
              color: "var(--color-brown-dark)", lineHeight: 1,
              marginBottom: "8px",
            }}>
              {avgRating.toFixed(1)}
            </p>
            <StarRating rating={Math.round(avgRating)} size={18} />
            <p style={{
              fontFamily: "var(--font-sans)", fontSize: "12px",
              color: "var(--color-brown-light)", marginTop: "6px",
              letterSpacing: "0.05em",
            }}>
              {reviews.length} đánh giá
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
          marginBottom: "48px",
        }}>
          {reviews.map((review) => (
            <div key={review.id} style={{
              backgroundColor: "var(--color-beige)",
              borderRadius: "16px",
              padding: "28px",
              border: "1px solid var(--color-sand)",
            }}>
              {/* Header */}
              <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "flex-start", marginBottom: "16px",
              }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                  {/* Avatar */}
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    backgroundColor: "var(--color-brown-light)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-sans)", fontSize: "13px",
                    fontWeight: 500, color: "var(--color-cream)",
                    flexShrink: 0,
                  }}>
                    {review.initials}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "var(--font-sans)", fontSize: "14px",
                      fontWeight: 500, color: "var(--color-brown-dark)",
                      marginBottom: "2px",
                    }}>
                      {review.name}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <StarRating rating={review.rating} />
                      {review.verified && (
                        <span style={{
                          fontFamily: "var(--font-sans)", fontSize: "10px",
                          color: "var(--color-olive)", letterSpacing: "0.05em",
                        }}>
                          ✓ Đã mua hàng
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <span style={{
                  fontFamily: "var(--font-sans)", fontSize: "11px",
                  color: "var(--color-brown-light)",
                }}>
                  {review.date}
                </span>
              </div>

              {/* Content */}
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: "13px",
                fontWeight: 500, color: "var(--color-brown-dark)",
                marginBottom: "8px", lineHeight: 1.4,
              }}>
                "{review.title}"
              </p>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: "13px",
                fontWeight: 300, color: "var(--color-brown)",
                lineHeight: 1.8,
              }}>
                {review.content}
              </p>
            </div>
          ))}
        </div>

        {/* Write review CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              padding: "14px 36px", borderRadius: "100px",
              border: "1px solid var(--color-brown)",
              backgroundColor: "transparent",
              fontFamily: "var(--font-sans)", fontSize: "12px",
              fontWeight: 500, letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-brown)", cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-brown)";
              e.currentTarget.style.color = "var(--color-cream)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--color-brown)";
            }}
          >
            {showForm ? "Đóng" : "Viết đánh giá"}
          </button>

          {/* Simple review form */}
          {showForm && (
            <div style={{
              maxWidth: "560px", margin: "32px auto 0",
              padding: "32px",
              backgroundColor: "var(--color-beige)",
              borderRadius: "16px",
              border: "1px solid var(--color-sand)",
              textAlign: "left",
            }}>
              <p style={{
                fontFamily: "var(--font-display)", fontSize: "22px",
                fontWeight: 300, color: "var(--color-brown-dark)",
                marginBottom: "24px",
              }}>
                Chia sẻ trải nghiệm của bạn
              </p>

              {[
                { label: "Họ tên", type: "text", placeholder: "Nguyễn Văn A" },
                { label: "Tiêu đề", type: "text", placeholder: "Tóm tắt cảm nhận..." },
              ].map((field) => (
                <div key={field.label} style={{ marginBottom: "16px" }}>
                  <label style={{
                    display: "block",
                    fontFamily: "var(--font-sans)", fontSize: "11px",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "var(--color-brown-light)", marginBottom: "8px",
                  }}>
                    {field.label}
                  </label>
                  <input type={field.type} placeholder={field.placeholder}
                    style={{
                      width: "100%", padding: "12px 16px",
                      borderRadius: "8px",
                      border: "1px solid var(--color-sand)",
                      backgroundColor: "var(--color-cream)",
                      fontFamily: "var(--font-sans)", fontSize: "14px",
                      color: "var(--color-brown-dark)",
                      outline: "none", boxSizing: "border-box",
                    }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: "16px" }}>
                <label style={{
                  display: "block",
                  fontFamily: "var(--font-sans)", fontSize: "11px",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "var(--color-brown-light)", marginBottom: "8px",
                }}>
                  Nội dung
                </label>
                <textarea placeholder="Chia sẻ chi tiết trải nghiệm của bạn..."
                  rows={4}
                  style={{
                    width: "100%", padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1px solid var(--color-sand)",
                    backgroundColor: "var(--color-cream)",
                    fontFamily: "var(--font-sans)", fontSize: "14px",
                    color: "var(--color-brown-dark)",
                    outline: "none", resize: "vertical",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <button style={{
                width: "100%", padding: "14px",
                borderRadius: "100px",
                backgroundColor: "var(--color-brown)",
                border: "none", cursor: "pointer",
                fontFamily: "var(--font-sans)", fontSize: "12px",
                fontWeight: 500, letterSpacing: "0.15em",
                textTransform: "uppercase", color: "var(--color-cream)",
              }}>
                Gửi đánh giá
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}