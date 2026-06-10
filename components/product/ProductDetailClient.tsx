"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Badge, QuantityStepper, StarRating } from "@/components/ui";
import ReviewSection from "@/components/product/ReviewSection";
import ProductCard, { Product } from "@/components/shop/ProductCard";
import { PRODUCT_IMAGES } from "@/lib/images";
import { addCartItem } from "@/lib/cart";
import type { ProductDetail } from "@/lib/product-detail";

const tabs = ["Mô tả", "Tầng hương", "Chi tiết"];

const relatedProducts: Product[] = [
  {
    id: 1, name: "Midnight Cedar",
    scentNotes: "Sandalwood · Amber · Vetiver",
    price: 45, burnTime: "60 Hours",
    category: "woody", badge: "Bestseller",
    bg: "#2C1F1A", image: PRODUCT_IMAGES.midnightCedar,
  },
  {
    id: 2, name: "Palo Santo Glow",
    scentNotes: "Palo Santo · Myrrh · Bergamot",
    price: 52, burnTime: "80 Hours",
    category: "woody",
    bg: "#3D2E24", image: PRODUCT_IMAGES.paloSanto,
  },
  {
    id: 4, name: "Ethereal Bloom",
    scentNotes: "Rose · Bergamot · Patchouli",
    price: 48, burnTime: "60 Hours",
    category: "floral", badge: "New",
    bg: "#E8E0D8", image: PRODUCT_IMAGES.etherealBloom,
  },
];

const upsellProducts: Product[] = [
  {
    id: 6, name: "Velvet Smoke",
    scentNotes: "Cedar · Clove · Tonka",
    price: 72, burnTime: "80 Hours",
    category: "woody", badge: "New",
    bg: "#3D2E24", image: PRODUCT_IMAGES.velvetSmoke,
  },
  {
    id: 8, name: "Moonlit Bloom",
    scentNotes: "Jasmine · Iris · Musk",
    price: 68, burnTime: "60 Hours",
    category: "floral",
    bg: "#D8D0E0", image: PRODUCT_IMAGES.moonlitBloom,
  },
];

const faqItems = [
  {
    id: 1,
    question: "How long do the candles burn?",
    answer:
      "Burn time varies by size. Our standard 200g vessels burn for approximately 45–50 hours. The 300g burns for up to 70 hours. For optimal performance, allow the wax to melt fully to the edges during the first burn.",
  },
  {
    id: 2,
    question: "Are the vessels refillable?",
    answer:
      "Yes. All Lumos Aura glass vessels are designed to be refilled or repurposed. Once your candle has burned down, gently clean the vessel with warm water and mild soap. Contact us for refill options.",
  },
  {
    id: 3,
    question: "What ingredients are used?",
    answer:
      "We use 100% natural soy wax blended with premium fragrance oils and essential oils. All formulations are free from parabens, phthalates, and synthetic dyes. Our wicks are unbleached cotton for a clean, steady flame.",
  },
  {
    id: 4,
    question: "Do you ship internationally?",
    answer:
      "We currently ship to over 30 countries. International orders are carefully packed with thermal protection to preserve the integrity of the wax during transit. Estimated delivery is 7–14 business days.",
  },
];

type ProductDetailClientProps = {
  product: ProductDetail;
};

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const [quantity, setQuantity]   = useState(1);
  const [activeTab, setActiveTab] = useState("Mô tả");

  const [openFaq, setOpenFaq] = useState<number | null>(null);

const toggleFaq = (id: number) => {
  setOpenFaq((prev) => (prev === id ? null : id));
};

const handleAddToCart = () => {
  addCartItem({
    id: product.id,
    collection: product.collection,
    name: product.name,
    subtitle: product.details?.[0] ?? product.description,
    price: product.price,
    quantity,
    image: product.image,
    bg: "#E8E0D8",
  });
};

  return (
    <>
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
              <img
    src={product.image}
    alt={`${product.name} candle`}
    style={{
      width: "100%", height: "100%",
      objectFit: "cover",
      display: "block",
      transition: "transform 0.5s ease",
    }}
  />
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
  onClick={handleAddToCart}
>
  Add to Cart
</Button>
            </div>

            {/* Buy now */}
            <Button
  variant="ghost"
  fullWidth
  onClick={() => {
    handleAddToCart();
    window.location.href = "/checkout";
  }}
>
  Buy Now
</Button>

          </div>
        </div>
        <ReviewSection />
      </div>
    </div>
    {/* ── Ritual of Light ── */}
<section className="pdp-ritual-section">
  <div className="lumos-container">
    <div className="pdp-ritual-grid">

      <div className="pdp-ritual-image">
        <img
    src={PRODUCT_IMAGES.ritualLight}
    alt="Ritual of Light"
    style={{
      width: "100%", height: "100%",
      objectFit: "cover",
      position: "absolute", inset: 0,
      transition: "transform 0.6s ease",
    }}
  />
        <div className="pdp-ritual-image-inner">
          <div className="pdp-ritual-candle-large">
            <div className="pdp-ritual-wick" />
            <div className="pdp-ritual-flame" />
            <div className="pdp-ritual-body" />
          </div>
        </div>
      </div>

      <div className="pdp-ritual-content">
        <p className="pdp-ritual-eyebrow">
          Ritual of Light
        </p>

        <h2 className="pdp-ritual-headline">
          Crafted for moments of stillness.
        </h2>

        <p className="pdp-ritual-body-text">
          Each Lumos Aura creation is designed to transform
          everyday rituals into atmospheric experiences
          through scent, warmth, and intentional design.
        </p>

        <Link href="/products" className="pdp-ritual-cta">
          Discover the Collection →
        </Link>
      </div>

    </div>
  </div>
</section>

{/* ── Upsell ── */}
<section className="pdp-upsell-section">
  <div className="lumos-container">

    <h2 className="pdp-upsell-title">
      You May Also Like
    </h2>

    <div className="pdp-upsell-grid">
      {relatedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

  </div>
</section>
{/* ── Complete the Ritual ── */}
<section className="pdp-complete-section">
  <div className="pdp-complete-inner">

    <div className="pdp-complete-header">
      <h2 className="pdp-complete-title">
        Complete the Ritual
      </h2>

      <p className="pdp-complete-sub">
        Curated pairings to elevate your sensory experience.
      </p>
    </div>

    <div className="pdp-complete-grid">
      {upsellProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>

  </div>
</section>

{/* ── FAQ Accordion ── */}
        <section className="pdp-faq-section">
          <div className="pdp-faq-inner">

            {/* Header */}
            <div className="pdp-faq-header">
              <h2 className="pdp-faq-title">Questions, Answered</h2>
              <p className="pdp-faq-sub">
                Everything you need to know about your ritual essentials.
              </p>
            </div>

            {/* Accordion list */}
            <div className="pdp-faq-list">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.id;
                return (
                  <div key={item.id} className="pdp-faq-item">

                    {/* Trigger */}
                    <button
                      className="pdp-faq-trigger"
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                    >
                      <span className="pdp-faq-question">
                        {item.question}
                      </span>
                      <span className={`pdp-faq-icon${isOpen ? " open" : ""}`}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        >
                          <line x1="8" y1="2" x2="8" y2="14" />
                          <line x1="2" y1="8" x2="14" y2="8" />
                        </svg>
                      </span>
                    </button>

                    {/* Collapsible body */}
                    <div className={`pdp-faq-body${isOpen ? " open" : ""}`}>
                      <div className="pdp-faq-body-inner">
                        <p className="pdp-faq-answer">{item.answer}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

    </>
  );
}