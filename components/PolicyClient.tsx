"use client";

import { useState } from "react";

const policies = [
  {
    id: "shipping",
    title: "Chính sách giao hàng",
    icon: "🚚",
    sections: [
      {
        heading: "Phạm vi giao hàng",
        content:
          "Lumos Aura giao hàng toàn quốc thông qua các đơn vị vận chuyển uy tín. Đơn hàng được xử lý trong vòng 1–2 ngày làm việc sau khi xác nhận thanh toán.",
      },
      {
        heading: "Thời gian giao hàng",
        content:
          "Nội thành TP.HCM & Hà Nội: 1–2 ngày. Các tỉnh thành khác: 3–5 ngày làm việc. Giao hàng hỏa tốc trong ngày có thể đặt trước 11:00 (chỉ áp dụng nội thành TP.HCM).",
      },
      {
        heading: "Phí vận chuyển",
        content:
          "Miễn phí vận chuyển cho đơn hàng từ 300.000đ. Đơn dưới 300.000đ: phí ship theo bảng giá của đơn vị vận chuyển, dao động 20.000đ – 40.000đ tùy khu vực.",
      },
      {
        heading: "Đóng gói đặc biệt",
        content:
          "Tất cả sản phẩm được đóng gói 3 lớp chống sốc. Mùa hè (tháng 4–9): có đá gel giữ mát để bảo vệ sáp nến khỏi nhiệt độ cao trong quá trình vận chuyển.",
      },
    ],
  },
  {
    id: "return",
    title: "Chính sách đổi trả",
    icon: "↩️",
    sections: [
      {
        heading: "Điều kiện đổi trả",
        content:
          "Lumos Aura hỗ trợ đổi trả trong vòng 3 ngày kể từ ngày nhận hàng trong các trường hợp: sản phẩm bị vỡ/hỏng do vận chuyển, giao sai mùi hương hoặc sai sản phẩm so với đơn hàng.",
      },
      {
        heading: "Quy trình đổi trả",
        content:
          "Bước 1: Quay video unboxing khi nhận hàng (bắt buộc để được hỗ trợ). Bước 2: Liên hệ Lumos Aura qua Zalo/Email trong 3 ngày kèm video và mô tả lỗi. Bước 3: Chúng tôi xác nhận và ship hàng thay thế miễn phí.",
      },
      {
        heading: "Lưu ý quan trọng",
        content:
          "Sản phẩm custom theo yêu cầu (in tên, chọn mùi hương riêng) không áp dụng đổi trả trừ trường hợp lỗi từ phía Lumos Aura. Sản phẩm đã qua sử dụng không được đổi trả.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Chính sách bảo mật",
    icon: "🔒",
    sections: [
      {
        heading: "Thu thập thông tin",
        content:
          "Lumos Aura thu thập thông tin cá nhân (họ tên, email, số điện thoại, địa chỉ) chỉ khi bạn đặt hàng hoặc đăng ký nhận bản tin. Thông tin được mã hóa và bảo mật theo tiêu chuẩn SSL.",
      },
      {
        heading: "Sử dụng thông tin",
        content:
          "Thông tin của bạn chỉ được dùng để xử lý đơn hàng, liên lạc về đơn hàng và gửi thông tin khuyến mãi (nếu bạn đồng ý). Lumos Aura cam kết không chia sẻ thông tin với bên thứ ba.",
      },
      {
        heading: "Quyền của khách hàng",
        content:
          "Bạn có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân của mình bất kỳ lúc nào bằng cách liên hệ qua email hello@lumosaura.vn.",
      },
    ],
  },
  {
    id: "faq",
    title: "Câu hỏi thường gặp",
    icon: "❓",
    sections: [
      {
        heading: "Nến sáp đậu nành có an toàn không?",
        content:
          "Hoàn toàn an toàn. Sáp đậu nành (soy wax) có nguồn gốc tự nhiên, không chứa độc tố, cháy sạch hơn sáp paraffin thông thường và không tạo khói đen. Tất cả sản phẩm của Lumos Aura đều sử dụng tinh dầu có chứng nhận COA.",
      },
      {
        heading: "Làm thế nào để nến cháy đều?",
        content:
          "Lần đầu đốt nến: để nến cháy đến khi toàn bộ bề mặt sáp tan đều (khoảng 2–3 tiếng) để tránh hiện tượng lõm tunnel. Cắt bấc về 6mm trước mỗi lần đốt. Không đốt quá 4 tiếng liên tục.",
      },
      {
        heading: "Có thể đặt nến custom không?",
        content:
          "Có! Bạn có thể làm bài Scent Quiz trên website để hệ thống gợi ý mùi hương theo tính cách. Ngoài ra có thể custom lời chúc trên nhãn hũ nến cho đơn hàng quà tặng. Thời gian sản xuất custom: 3–5 ngày làm việc.",
      },
      {
        heading: "Nến bị chảy sáp bề mặt có phải lỗi không?",
        content:
          "Hiện tượng đổ mồ hôi (sweating) trên bề mặt sáp đậu nành là bình thường, do sáp tự nhiên nhạy cảm với nhiệt độ. Không ảnh hưởng đến chất lượng và mùi hương. Chỉ cần dùng khăn mềm lau nhẹ là được.",
      },
    ],
  },
];

export default function PolicyClient() {
  const [activePolicy, setActivePolicy] = useState("shipping");
  const current = policies.find((p) => p.id === activePolicy)!;

  return (
    <div style={{ backgroundColor: "var(--color-cream)", minHeight: "100vh", paddingTop: "100px" }}>

      {/* Hero */}
      <div style={{
        backgroundColor: "var(--color-brown-deep)",
        padding: "64px 32px",
        textAlign: "center",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center",
          gap: "12px", marginBottom: "16px",
        }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)" }} />
          <span style={{
            fontFamily: "var(--font-sans)", fontSize: "11px",
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "var(--color-gold)",
          }}>Chính sách</span>
          <div style={{ width: "32px", height: "1px", backgroundColor: "var(--color-gold)" }} />
        </div>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 300, color: "var(--color-cream)",
        }}>
          Cam kết của Lumos Aura
        </h1>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 32px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: "48px",
          alignItems: "start",
        }}>

          {/* Sidebar tabs */}
          <div style={{
            position: "sticky", top: "100px",
            display: "flex", flexDirection: "column", gap: "8px",
          }}>
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => setActivePolicy(policy.id)}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "14px 20px", borderRadius: "10px",
                  border: "1px solid",
                  borderColor: activePolicy === policy.id ? "var(--color-brown)" : "transparent",
                  backgroundColor: activePolicy === policy.id ? "var(--color-beige)" : "transparent",
                  cursor: "pointer", textAlign: "left",
                  transition: "all 0.2s ease",
                }}
              >
                <span style={{ fontSize: "18px" }}>{policy.icon}</span>
                <span style={{
                  fontFamily: "var(--font-sans)", fontSize: "13px",
                  fontWeight: activePolicy === policy.id ? 500 : 400,
                  color: activePolicy === policy.id ? "var(--color-brown-dark)" : "var(--color-brown-light)",
                }}>
                  {policy.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content area */}
          <div>
            <div style={{ marginBottom: "40px" }}>
              <h2 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 300, color: "var(--color-brown-dark)",
                marginBottom: "8px",
              }}>
                {current.title}
              </h2>
              <div style={{ width: "48px", height: "2px", backgroundColor: "var(--color-gold)" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {current.sections.map((section, i) => (
                <div key={i} style={{
                  padding: "28px 32px",
                  backgroundColor: "var(--color-beige)",
                  borderRadius: "12px",
                  border: "1px solid var(--color-sand)",
                  borderLeft: "3px solid var(--color-gold)",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px", fontWeight: 400,
                    color: "var(--color-brown-dark)",
                    marginBottom: "12px",
                  }}>
                    {section.heading}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px", fontWeight: 300,
                    lineHeight: 1.9, color: "var(--color-brown)",
                  }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}