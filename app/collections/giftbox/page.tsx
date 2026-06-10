import Link from "next/link";

export default function GiftboxPage() {
  return (
    <main style={{ paddingTop: "120px", minHeight: "100vh" }}>
      <div className="lumos-container">
        <h1 className="text-display-lg">Gift Collection</h1>
        <p className="text-body" style={{ maxWidth: "640px", marginTop: "24px" }}>
          Curated Lumos Aura gift boxes for birthdays, celebrations, and quiet
          everyday rituals.
        </p>

        <div style={{ marginTop: "32px" }}>
          <Link href="/products" className="nav-link-animated">
            Explore all products →
          </Link>
        </div>
      </div>
    </main>
  );
}