"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";

const allProducts = [
  {
    id: 1, sku: "MC-001",
    name: "Midnight Fig & Cedar",
    category: "Candles",
    price: 48,
    stock: 142,
    status: "active",
    bg: "#2C1F1A",
  },
  {
    id: 2, sku: "LS-002",
    name: "Lunar Sandalwood",
    category: "Diffusers",
    price: 65,
    stock: 38,
    status: "active",
    bg: "#E8E0D8",
  },
  {
    id: 3, sku: "AC-003",
    name: "Starlight Match Cloche",
    category: "Accessories",
    price: 32,
    stock: 0,
    status: "hidden",
    bg: "#D4CFC6",
  },
  {
    id: 4, sku: "CB-004",
    name: "Celestial Bloom",
    category: "Candles",
    price: 85,
    stock: 56,
    status: "active",
    bg: "#E0D8D0",
  },
  {
    id: 5, sku: "EF-005",
    name: "Ethereal Bloom Mist",
    category: "Diffusers",
    price: 75,
    stock: 24,
    status: "active",
    bg: "#D8D0C8",
  },
  {
    id: 6, sku: "AW-006",
    name: "Astral Woods Set",
    category: "Gift Sets",
    price: 120,
    stock: 12,
    status: "active",
    bg: "#1A2E42",
  },
];

const categories = ["All Categories", "Candles", "Diffusers", "Accessories", "Gift Sets"];
const statuses    = ["Status: All", "Active", "Hidden"];

export default function ProductsClient() {
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status,   setStatus]   = useState("Status: All");
  const [page,     setPage]     = useState(1);

  const filtered = allProducts.filter((p) => {
    const matchSearch   = p.name.toLowerCase().includes(search.toLowerCase())
      || p.sku.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All Categories" || p.category === category;
    const matchStatus   = status === "Status: All"
      || p.status === status.toLowerCase();
    return matchSearch && matchCategory && matchStatus;
  });

  return (
    <div className="admin-shell">
      <AdminSidebar />

      <div className="admin-main">
        {/* Topbar */}
        <header className="admin-topbar" style={{ position: "relative" }}>
          <div className="admin-topbar-search">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="admin-search-input"
            />
          </div>
          <span className="admin-topbar-center">Admin Console</span>
          <div className="admin-topbar-actions">
            <button className="admin-icon-btn" aria-label="Notifications">🔔</button>
            <button className="admin-icon-btn" aria-label="Settings">⚙</button>
          </div>
        </header>

        {/* Content */}
        <div className="admin-content">

          {/* Page header */}
          <div className="admin-page-header">
            <div>
              <h1 className="admin-page-title">Product Inventory</h1>
              <p className="admin-page-sub">Manage your artisanal collection.</p>
            </div>
            <button className="btn btn-primary">
              + Add New Product
            </button>
          </div>

          {/* Filters */}
          <div className="admin-filters">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="admin-select"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="admin-select"
            >
              {statuses.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <span className="admin-filters-count">
              {filtered.length} items total
            </span>
          </div>

          {/* Table */}
          <div className="admin-card">
            <table className="admin-table">
              <thead>
                <tr>
                  {["Image", "Name", "Category", "Price", "Stock", "Status", "Actions"].map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((product) => (
                  <tr key={product.id}>
                    {/* Thumb */}
                    <td>
                      <div
                        className="admin-product-thumb"
                        style={{ backgroundColor: product.bg }}
                      />
                    </td>

                    {/* Name */}
                    <td>
                      <p className="admin-product-name">{product.name}</p>
                      <p className="admin-product-sku">SKU: {product.sku}</p>
                    </td>

                    {/* Category */}
                    <td style={{ color: "var(--color-ink-muted)" }}>
                      {product.category}
                    </td>

                    {/* Price */}
                    <td style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}>
                      ${product.price}.00
                    </td>

                    {/* Stock */}
                    <td className={product.stock === 0 ? "admin-stock-zero" : ""}>
                      {product.stock === 0 ? "Out of stock" : product.stock}
                    </td>

                    {/* Status */}
<td>
  {product.stock === 0 ? (
    <span className="admin-badge admin-badge-out-of-stock">
      Out of Stock
    </span>
  ) : (
    <span className={`admin-badge admin-badge-${product.status}`}>
      {product.status}
    </span>
  )}
</td>

                    {/* Actions */}
                    <td>
                      <div style={{ display: "flex", gap: "12px" }}>
                        <button style={{
                          background: "none",
                          border: "none",
                          fontFamily: "var(--font-sans)",
                          fontSize: "11px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-ink-muted)",
                          cursor: "pointer",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                          padding: 0,
                          transition: "color 0.15s",
                        }}
                          onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-ink)"}
                          onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-muted)"}
                        >
                          Edit
                        </button>
                        <button style={{
                          background: "none",
                          border: "none",
                          fontFamily: "var(--font-sans)",
                          fontSize: "11px",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-ink-faint)",
                          cursor: "pointer",
                          textDecoration: "underline",
                          textUnderlineOffset: "3px",
                          padding: 0,
                          transition: "color 0.15s",
                        }}
                          onMouseEnter={(e) => e.currentTarget.style.color = "var(--color-error)"}
                          onMouseLeave={(e) => e.currentTarget.style.color = "var(--color-ink-faint)"}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="admin-pagination">
              <span className="admin-pagination-info">
                Showing 1 to {filtered.length} of {filtered.length}
              </span>
              <div className="admin-pagination-controls">
                <button className="admin-page-btn">‹</button>
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`admin-page-btn${page === p ? " active" : ""}`}
                  >
                    {p}
                  </button>
                ))}
                <button className="admin-page-btn">›</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}