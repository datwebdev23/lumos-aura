"use client";

interface FilterState {
  scents: string[];
  burnTimes: string[];
  maxPrice: number;
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  productCount: number;
}

const SCENT_OPTIONS = [
  { id: "woody",  label: "Woody"  },
  { id: "floral", label: "Floral" },
  { id: "fresh",  label: "Fresh"  },
  { id: "spicy",  label: "Spicy"  },
];

const BURN_OPTIONS = [
  { id: "40+", label: "40+ Hours" },
  { id: "60+", label: "60+ Hours" },
  { id: "80+", label: "80+ Hours" },
];

const PRICE_OPTIONS = [
  { id: 50,  label: "Under $50"  },
  { id: 75,  label: "Under $75"  },
  { id: 150, label: "Under $150" },
];

export default function FilterSidebar({
  filters,
  onFilterChange,
  productCount,
}: FilterSidebarProps) {

  const toggleScent = (id: string) => {
    const next = filters.scents.includes(id)
      ? filters.scents.filter((s) => s !== id)
      : [...filters.scents, id];
    onFilterChange({ ...filters, scents: next });
  };

  const toggleBurn = (id: string) => {
    const next = filters.burnTimes.includes(id)
      ? filters.burnTimes.filter((b) => b !== id)
      : [...filters.burnTimes, id];
    onFilterChange({ ...filters, burnTimes: next });
  };

  const setPrice = (val: number) => {
    const next = filters.maxPrice === val ? 999 : val;
    onFilterChange({ ...filters, maxPrice: next });
  };

  return (
    <aside className="shop-sidebar">

      {/* Result count */}
      <p className="shop-sidebar-count">
        {productCount} {productCount === 1 ? "product" : "products"}
      </p>

      {/* Scent Category */}
      <div className="shop-filter-group">
        <p className="shop-filter-heading">Scent Category</p>
        <div className="shop-filter-divider" />
        {SCENT_OPTIONS.map((opt) => (
          <label key={opt.id} className="shop-filter-option">
            <input
              type="checkbox"
              checked={filters.scents.includes(opt.id)}
              onChange={() => toggleScent(opt.id)}
              className="shop-filter-checkbox"
            />
            <span className="shop-filter-label">{opt.label}</span>
          </label>
        ))}
      </div>

      {/* Burn Time */}
      <div className="shop-filter-group">
        <p className="shop-filter-heading">Burn Time</p>
        <div className="shop-filter-divider" />
        {BURN_OPTIONS.map((opt) => (
          <label key={opt.id} className="shop-filter-option">
            <input
              type="checkbox"
              checked={filters.burnTimes.includes(opt.id)}
              onChange={() => toggleBurn(opt.id)}
              className="shop-filter-checkbox"
            />
            <span className="shop-filter-label">{opt.label}</span>
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="shop-filter-group">
        <p className="shop-filter-heading">Price</p>
        <div className="shop-filter-divider" />
        {PRICE_OPTIONS.map((opt) => (
          <label key={opt.id} className="shop-filter-option">
            <input
              type="checkbox"
              checked={filters.maxPrice === opt.id}
              onChange={() => setPrice(opt.id)}
              className="shop-filter-checkbox"
            />
            <span className="shop-filter-label">{opt.label}</span>
          </label>
        ))}
      </div>

      {/* Clear all */}
      {(filters.scents.length > 0 || filters.burnTimes.length > 0 || filters.maxPrice < 999) && (
        <button
          onClick={() => onFilterChange({ scents: [], burnTimes: [], maxPrice: 999 })}
          className="shop-clear-btn"
        >
          Clear all filters
        </button>
      )}

    </aside>
  );
}