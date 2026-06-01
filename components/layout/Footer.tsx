"use client";

import Link from "next/link";
import { useState } from "react";
import { RiArrowRightLine, RiInstagramLine, RiFacebookCircleLine, RiTiktokLine } from "react-icons/ri";

const exploreLinks = [
  { label: "Shop All",    href: "/products" },
  { label: "Collections", href: "/collections" },
  { label: "Gifting",     href: "/collections/giftbox" },
];

const supportLinks = [
  { label: "Privacy Policy",    href: "/policy" },
  { label: "Shipping & Returns", href: "/policy" },
  { label: "Sustainability",    href: "/about" },
  { label: "Contact",           href: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.includes("@")) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer style={{ backgroundColor: "var(--color-off-white)" }}>

      {/* Main footer body */}
      <div className="lumos-container" style={{ padding: "64px 32px 48px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr",
          gap: "48px",
          alignItems: "start",
        }}
          className="footer-grid"
        >

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" style={{ textDecoration: "none" }}>
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-ink)",
                marginBottom: "12px",
              }}>
                Lumos Aura
              </p>
            </Link>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              color: "var(--color-ink-muted)",
              lineHeight: 1.7,
              maxWidth: "220px",
              marginBottom: "24px",
            }}>
              Artisanal light and fragrance crafted for moments of serene reflection.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "16px" }}>
              {[
                { icon: <RiInstagramLine size={16} />, href: "#", label: "Instagram" },
                { icon: <RiFacebookCircleLine size={16} />, href: "#", label: "Facebook" },
                { icon: <RiTiktokLine size={16} />, href: "#", label: "TikTok" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    color: "var(--color-ink-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-muted)"}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Explore */}
          <div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ink)",
              marginBottom: "20px",
            }}>
              Explore
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {exploreLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: "12px" }}>
                  <Link href={link.href} style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--color-ink-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-muted)"}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Support */}
          <div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ink)",
              marginBottom: "20px",
            }}>
              Support
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {supportLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: "12px" }}>
                  <Link href={link.href} style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--color-ink-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-muted)"}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ink)",
              marginBottom: "20px",
            }}>
              Join the Inner Circle
            </p>

            {submitted ? (
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "13px",
                color: "var(--color-gold)",
                letterSpacing: "0.05em",
              }}>
                Thank you for joining. ✦
              </p>
            ) : (
              <div style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid var(--color-border-mid)",
                paddingBottom: "8px",
              }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  style={{
                    flex: 1,
                    background: "none",
                    border: "none",
                    outline: "none",
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    color: "var(--color-ink)",
                    padding: "4px 0",
                  }}
                />
                <button
                  onClick={handleSubmit}
                  aria-label="Subscribe"
                  style={{
                    background: "none",
                    border: "none",
                    padding: "4px",
                    color: "var(--color-ink-muted)",
                    cursor: "pointer",
                    display: "flex",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-muted)"}
                >
                  <RiArrowRightLine size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="lumos-container" style={{
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            color: "var(--color-ink-faint)",
            letterSpacing: "0.05em",
          }}>
            © 2026 Lumos Aura. Artisanal Light & Fragrance.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Privacy Policy", "Shipping & Returns", "Sustainability", "Contact"].map((item) => (
              <Link key={item} href="/policy" style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                color: "var(--color-ink-faint)",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
                onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink-mid)"}
                onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-faint)"}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}