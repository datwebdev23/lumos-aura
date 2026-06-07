"use client";

import { useState, useMemo } from "react";
import ProductCard, { Product } from "./ProductCard";
import FilterSidebar from "./FilterSidebar";

const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Midnight Cedar",
    scentNotes: "Sandalwood · Amber · Vetiver",
    price: 45,
    burnTime: "60 Hours",
    category: "woody",
    badge: "Bestseller",
    bg: "#2C1F1A",
  },
  {
    id: 2,
    name: "Palo Santo Glow",
    scentNotes: "Palo Santo · Myrrh · Bergamot",
    price: 52,
    burnTime: "80 Hours",
    category: "woody",
    bg: "#3D2E24",
  },
  {
    id: 3,
    name: "Wild Fig",
    scentNotes: "Fig Leaf · Galbanum · Cedarwood",
    price: 48,
    burnTime: "60 Hours",
    category: "fresh",
    bg: "#4A3828",
  },
  {
    id: 4,
    name: "Ethereal Bloom",
    scentNotes: "Rose · Bergamot · Patchouli",
    price: 48,
    burnTime: "60 Hours",
    category: "floral",
    badge: "New",
    bg: "#E8E0D8",
  },
  {
    id: 5,
    name: "Celestial Amber",
    scentNotes: "Amber · Vanilla · Musk",
    price: 55,
    burnTime: "80 Hours",
    category: "spicy",
    bg: "#D4C8B8",
  },
  {
    id: 6,
    name: "Santal Embers",
    scentNotes: "Sandalwood · Smoke · Oud",
    price: 68,
    burnTime: "60 Hours",
    category: "woody",
    bg: "#5C4A38",
  },
  {
    id: 7,
    name: "Morning Dew",
    scentNotes: "Green Tea · Cucumber · Lemon",
    price: 42,
    burnTime: "40 Hours",
    category: "fresh",
    bg: "#C8D4C0",
  },
  {
    id: 8,
    name: "Jasmine Noir",
    scentNotes: "Jasmine · Black Pepper · Musk",
    price: 58,
    burnTime: "60 Hours",
    category: "floral",
    bg: "#D8D0E0",
  },
  {
    id: 9,
    name: "Spiced Tobacco",
    scentNotes: "Tobacco · Cinnamon · Clove",
    price: 62,
    burnTime: "80 Hours",
    category: "spicy",
    bg: "#4A3020",
  },
];

type SortOption = "newest" | "price-asc" | "price-desc";

interface FilterState {
  scents: string[];
  burnTimes: string[];
  maxPrice: number;
}

const BURN_TIME_MAP: Record<string, number> = {
  "40+": 40,
  "60+": 60,
  "80+": 80,
};

export default function ShopClient() {
  const [filters, setFilters] = useState<FilterState>({
    scents: [],
    burnTimes: [],
    maxPrice: 999,
  });
  const [sort, setSort]           = useState<SortOption>("newest");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const filtered = useMemo(() => {
    let result = [...ALL_PRODUCTS];

    if (filters.scents.length > 0) {
      result = result.filter((p) => filters.scents.includes(p.category));
    }

    if (filters.burnTimes.length > 0) {
      const minBurn = Math.min(
        ...filters.burnTimes.map((b) => BURN_TIME_MAP[b] ?? 0)
      );
      result = result.filter((p) => {
        const hours = parseInt(p.burnTime ?? "0");
        return hours >= minBurn;
      });
    }

    if (filters.maxPrice < 999) {
      result = result.filter((p) => p.price < filters.maxPrice);
    }

    if (sort === "price-asc")  result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);

    return result;
  }, [filters, sort]);

  const activeFilterCount =
    filters.scents.length +
    filters.burnTimes.length +
    (filters.maxPrice < 999 ? 1 : 0);

  const removeScent = (id: string) =>
    setFilters((f) => ({ ...f, scents: f.scents.filter((s) => s !== id) }));

  const removeBurn = (id: string) =>
    setFilters((f) => ({ ...f, burnTimes: f.burnTimes.filter((b) => b !== id) }));

  const removePrice = () =>
    setFilters((f) => ({ ...f, maxPrice: 999 }));

  return (
    <div style={{
      backgroundColor: "var(--color-off-white)",
      minHeight: "100vh",
    }}>
      <div className="lumos-container" style={{ paddingTop: "48px", paddingBottom: "96px" }}>

        {/* Page header */}
        <div className="shop-page-header">
          <div>
            <h1 className="shop-page-title">The Collection</h1>
            <p className="shop-page-sub">
              Explore our curated selection of fine olfactory art, designed to elevate your space and spirit.
            </p>
          </div>

          {/* Sort + mobile filter toggle */}
          <div className="shop-header-actions">
            <button
              className="shop-mobile-filter-btn"
              onClick={() => setShowMobileFilter(!showMobileFilter)}
            >
              {showMobileFilter ? "Hide Filters" : `Filters${activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}`}
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="shop-sort-select"
            >
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Active filter pills */}
        {activeFilterCount > 0 && (
          <div className="shop-active-filters">
            {filters.scents.map((s) => (
              <button
                key={s}
                onClick={() => removeScent(s)}
                className="shop-active-pill"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)} ×
              </button>
            ))}
            {filters.burnTimes.map((b) => (
              <button
                key={b}
                onClick={() => removeBurn(b)}
                className="shop-active-pill"
              >
                {b} Hours ×
              </button>
            ))}
            {filters.maxPrice < 999 && (
              <button onClick={removePrice} className="shop-active-pill">
                Under ${filters.maxPrice} ×
              </button>
            )}
            <button
              onClick={() => setFilters({ scents: [], burnTimes: [], maxPrice: 999 })}
              className="shop-clear-all-pill"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Body — sidebar + grid */}
        <div className="shop-body">

          {/* Sidebar */}
          <div className={`shop-sidebar-wrapper${showMobileFilter ? " mobile-open" : ""}`}>
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              productCount={filtered.length}
            />
          </div>

          {/* Product grid */}
          <div>
            {filtered.length === 0 ? (
              <div className="shop-empty">
                <p style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 400,
                  color: "var(--color-ink-muted)",
                  textAlign: "center",
                  paddingTop: "64px",
                }}>
                  No products match your filters.
                </p>
                <div style={{ textAlign: "center", marginTop: "24px" }}>
                  <button
                    onClick={() => setFilters({ scents: [], burnTimes: [], maxPrice: 999 })}
                    className="btn btn-ghost"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            ) : (
              <div className="shop-product-grid">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}