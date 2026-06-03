"use client";

import { useState } from "react";
import { StarRating, Button } from "@/components/ui";
import SectionLabel from "@/components/ui/SectionLabel";

const reviews = [
  {
    id: 1,
    initials: "ES",
    name: "E. Sterling",
    rating: 5,
    content: "A truly transcendent fragrance. It fills the room without overwhelming it, creating an atmosphere of pure tranquility.",
    verified: true,
  },
  {
    id: 2,
    initials: "ML",
    name: "M. Laurent",
    rating: 4,
    content: "The glass vessel is gorgeous and minimalistic. The jasmine notes are subtle yet incredibly sophisticated.",
    verified: true,
  },
  {
    id: 3,
    initials: "CV",
    name: "C. Vance",
    rating: 5,
    content: "Exquisite packaging and a scent that lingers beautifully. It feels like a piece of art in my living space.",
    verified: true,
  },
];

const avg = reviews.reduce((a, b) => a + b.rating, 0) / reviews.length;

export default function ReviewSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section style={{
      backgroundColor: "var(--color-white)",
      paddingTop: "80px",
      paddingBottom: "80px",
      borderTop: "1px solid var(--color-border)",
    }}>
      <div className="lumos-container">

        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: "56px",
        }}>
          <div>
            <SectionLabel align="left">Reviews</SectionLabel>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3vw, 40px)",
              fontWeight: 400,
              color: "var(--color-ink)",
            }}>
              Hushed Whispers
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13px",
              color: "var(--color-ink-muted)",
              marginTop: "8px",
            }}>
              What our discerning clientele say.
            </p>
          </div>

          {/* Average */}
          <div style={{ textAlign: "right" }}>
            <StarRating
              rating={Math.round(avg)}
              showNumber
              count={reviews.length}
              size={16}
            />
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              color: "var(--color-ink-faint)",
              marginTop: "6px",
              letterSpacing: "0.05em",
            }}>
              {avg.toFixed(1)} / 5.0 ({reviews.length * 41} Reviews)
            </p>
          </div>
        </div>

        {/* Review cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1px",
          backgroundColor: "var(--color-border)",
          marginBottom: "48px",
        }}>
          {reviews.map((r) => (
            <div key={r.id} style={{
              backgroundColor: "var(--color-white)",
              padding: "32px",
            }}>
              <StarRating rating={r.rating} size={13} />
              <p style={{
                fontFamily: "var(--font-display)",
                fontSize: "16px",
                fontStyle: "italic",
                color: "var(--color-ink)",
                lineHeight: 1.6,
                margin: "16px 0",
              }}>
                "{r.content}"
              </p>
              <p style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-ink-faint)",
              }}>
                — {r.name}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <Button
            variant="ghost"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "Read All Reviews"}
          </Button>
        </div>

      </div>
    </section>
  );
}