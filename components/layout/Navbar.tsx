"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiSearchLine, RiShoppingBagLine, RiMenuLine, RiCloseLine } from "react-icons/ri";

const navLinks = [
  { label: "Shop",   href: "/products" },
  { label: "Gifts",  href: "/collections/giftbox" },
  { label: "About",  href: "/about" },
];

export default function Navbar() {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [isMenuOpen,  setIsMenuOpen]  = useState(false);
  const pathname = usePathname();
  const cartCount = 0;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      backgroundColor: "var(--color-white)",
      borderBottom: `1px solid ${isScrolled ? "var(--color-border)" : "transparent"}`,
      transition: "border-color 0.3s ease",
    }}>

      {/* Main navbar */}
      <div className="lumos-container" style={{
        display: "flex",
        alignItems: "center",
        height: "64px",
        gap: "40px",
      }}>

        {/* Left — nav links (desktop) */}
        <nav style={{
          display: "flex",
          gap: "32px",
          flex: 1,
        }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: "0.05em",
                  color: isActive ? "var(--color-ink)" : "var(--color-ink-muted)",
                  textDecoration: "none",
                  paddingBottom: "2px",
                  borderBottom: isActive
                    ? "1px solid var(--color-ink)"
                    : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--color-ink)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--color-ink-muted)";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Center — Logo */}
        <Link href="/" style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1,
          gap: "2px",
        }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 400,
            color: "var(--color-ink)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}>
            Lumos Aura
          </span>
        </Link>

        {/* Right — icons */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginLeft: "auto",
        }}>
          <button
            aria-label="Search"
            style={{
              background: "none",
              border: "none",
              padding: "4px",
              color: "var(--color-ink-mid)",
              cursor: "pointer",
              display: "flex",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-mid)"}
          >
            <RiSearchLine size={18} />
          </button>

          <Link
            href="/cart"
            aria-label="Cart"
            style={{
              position: "relative",
              color: "var(--color-ink-mid)",
              display: "flex",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-mid)"}
          >
            <RiShoppingBagLine size={18} />
            {cartCount > 0 && (
              <span style={{
                position: "absolute",
                top: "-6px",
                right: "-6px",
                width: "14px",
                height: "14px",
                backgroundColor: "var(--color-gold)",
                color: "var(--color-white)",
                borderRadius: "50%",
                fontSize: "9px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}>
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label="Menu"
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              padding: "4px",
              color: "var(--color-ink)",
              cursor: "pointer",
              display: "none",
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen
              ? <RiCloseLine size={20} />
              : <RiMenuLine size={20} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{
          backgroundColor: "var(--color-white)",
          borderTop: "1px solid var(--color-border)",
          padding: "8px 0 24px",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link-animated"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: "block",
                padding: "14px 24px",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                letterSpacing: "0.05em",
                color: "var(--color-ink)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ padding: "16px 24px 0" }}>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: "block",
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--color-ink-muted)",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}