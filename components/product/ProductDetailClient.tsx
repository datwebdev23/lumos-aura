"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Badge, QuantityStepper, StarRating } from "@/components/ui";
import ReviewSection from "@/components/product/ReviewSection";

const product = {
  id: 1,
  collection: "Midnight Collection",
  name: "Celestial Bloom",
  price: 85,
  description:
    "An ethereal blend inspired by a quiet, starlit night. Hand-poured with artisanal precision, capturing the tranquil essence of nightfall.",
  scentProfile: [
    { type: "TOP",   note: "Bergamot, White Tea" },
    { type: "HEART", note: "Night-Blooming Jasmine" },
    { type: "BASE",  note: "Sandalwood, Amber" },
  ],
  details: [
    "10 oz / 283g",
    "60-hour burn time",
    "Vegan coconut-soy wax blend",
  ],
  badges: ["Handcrafted", "Vegan Wax", "Free Shipping"],
  rating: 4.8,
  reviewCount: 124,
};

const tabs = ["Mô tả", "Tầng hương", "Chi tiết"];

export default function ProductDetailClient() {
  const [quantity, setQuantity]   = useState(1);
  const [activeTab, setActiveTab] = useState("Mô tả");

  return (
    <div style={{
      backgroundColor: "var(--color-white)",
      minHeight: "100vh",
      paddingTop: "64px",
    }}>

      {/* Main content */}
      <div className="lumos-container" style={{ paddingTop: "56px", paddingBottom: "96px" }}>

        {/* Breadcrumb */}
        <div style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          marginBottom: "48px",
        }}>
          {["Home", "Shop", product.name].map((crumb, i, arr) => (
            <span key={crumb} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {i < arr.length - 1 ? (
                <>
                  <Link href="/" style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-faint)",
                  }}>
                    {crumb}
                  </Link>
                  <span style={{ color: "var(--color-border-mid)", fontSize: "10px" }}>›</span>
                </>
              ) : (
                <span style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-muted)",
                }}>
                  {crumb}
                </span>
              )}
            </span>
          ))}
        </div>

        {/* 2-col layout */}
        <div className="product-grid">

          {/* Left — Image gallery */}
          <div>
            {/* Main image */}
            <div style={{
              width: "100%",
              aspectRatio: "1 / 1",
              backgroundColor: "var(--color-surface)",
              position: "relative",
              overflow: "hidden",
              marginBottom: "12px",
            }}>
              {/* Candle illustration placeholder */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(160deg, #F2EFE9 0%, #E8E0D5 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <div style={{ opacity: 0.4 }}>
                  <div style={{
                    width: "2px", height: "20px",
                    backgroundColor: "#8B6F4E",
                    margin: "0 auto",
                  }} />
                  <div style={{
                    width: "12px", height: "18px",
                    backgroundColor: "#C9A96E",
                    borderRadius: "50% 50% 30% 30%",
                    margin: "-6px auto 0",
                  }} />
                  <div style={{
                    width: "100px", height: "130px",
                    backgroundColor: "#A08060",
                    margin: "0 auto",
                    borderRadius: "1px",
                  }} />
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{
                  aspectRatio: "1 / 1",
                  backgroundColor: i === 0 ? "var(--color-surface)" : "var(--color-off-white)",
                  cursor: "pointer",
                  border: i === 0
                    ? "1px solid var(--color-ink)"
                    : "1px solid var(--color-border)",
                  transition: "border-color 0.2s ease",
                }} />
              ))}
            </div>
          </div>

          {/* Right — Product info */}
          <div>

            {/* Collection tag */}
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-ink-muted)",
              marginBottom: "12px",
            }}>
              {product.collection}
            </p>

            {/* Name */}
            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "var(--color-ink)",
              marginBottom: "16px",
            }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ marginBottom: "20px" }}>
              <StarRating
                rating={product.rating}
                showNumber
                count={product.reviewCount}
              />
            </div>

            {/* Price */}
            <p className="text-price" style={{ marginBottom: "24px" }}>
              ${product.price}.00
            </p>

            {/* Description */}
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              lineHeight: 1.8,
              color: "var(--color-ink-muted)",
              marginBottom: "32px",
              maxWidth: "420px",
            }}>
              {product.description}
            </p>

            {/* Divider */}
            <div className="divider" style={{ marginBottom: "32px" }} />

            {/* Scent Profile */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-ink)",
                marginBottom: "16px",
              }}>
                Scent Profile
              </p>
              {product.scentProfile.map((s) => (
                <div key={s.type} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid var(--color-border)",
                }}>
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-ink-faint)",
                  }}>
                    {s.type}
                  </span>
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "var(--color-ink)",
                  }}>
                    {s.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Details */}
            <div style={{ marginBottom: "40px" }}>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-ink)",
                marginBottom: "12px",
              }}>
                Details
              </p>
              {product.details.map((d) => (
                <p key={d} style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--color-ink-muted)",
                  paddingBottom: "6px",
                  lineHeight: 1.6,
                }}>
                  · {d}
                </p>
              ))}
            </div>

            {/* Quantity + Add to cart */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            }}>
              <QuantityStepper
                value={quantity}
                onChange={setQuantity}
              />
              <Button
                variant="primary"
                fullWidth
                onClick={() => {}}
              >
                Add to Cart
              </Button>
            </div>

            {/* Buy now */}
            <Button
              variant="ghost"
              fullWidth
              onClick={() => {}}
            >
              Buy Now
            </Button>

          </div>
        </div>
        <ReviewSection />
      </div>
    </div>
  );
}