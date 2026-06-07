"use client";

import { useState } from "react";
import Link from "next/link";
import { FormField } from "@/components/ui";

type Section = "profile" | "orders" | "addresses" | "security";

const navItems: { id: Section; label: string; icon: string }[] = [
  { id: "profile",   label: "Profile Settings", icon: "○" },
  { id: "orders",    label: "Order History",    icon: "◷" },
  { id: "addresses", label: "Addresses",        icon: "◎" },
  { id: "security",  label: "Security",         icon: "◻" },
];

const mockOrders = [
  {
    id: "LMA-0091",
    name: "Celestial Bloom",
    meta: "Oct 24, 2026 · Signature Collection",
    price: 185,
    status: "delivered",
    bg: "#E8E0D8",
  },
  {
    id: "LMA-0090",
    name: "Midnight Sandalwood",
    meta: "Oct 24, 2026 · Room Mist",
    price: 65,
    status: "processing",
    bg: "#DDD5C8",
  },
];

const mockAddresses = [
  {
    id: 1,
    label: "Home",
    icon: "⌂",
    name: "Eleanor Vance",
    lines: ["123 Serenity Lane, Apt 4B", "New York, NY 10001", "United States"],
    isDefault: true,
  },
  {
    id: 2,
    label: "Office",
    icon: "◻",
    name: "Eleanor Vance (Design Dept)",
    lines: ["450 Minimalist Blvd, Floor 12", "San Francisco, CA 94105", "United States"],
    isDefault: false,
  },
];

export default function AccountClient() {
  const [active, setActive] = useState<Section>("profile");

  const [profile, setProfile] = useState({
    firstName: "Eleanor",
    lastName:  "Vance",
    email:     "eleanor.vance@example.com",
    phone:     "+1 (555) 000-0000",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    next:    "",
    confirm: "",
  });

  const [saved,        setSaved]        = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  const handleSaveProfile = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleSavePassword = () => {
    if (passwords.next && passwords.next === passwords.confirm) {
      setPasswordSaved(true);
      setPasswords({ current: "", next: "", confirm: "" });
      setTimeout(() => setPasswordSaved(false), 2500);
    }
  };

  return (
    <div className="account-page">
      <div className="account-wrapper">
        <div className="account-layout">

          {/* ── Sidebar ── */}
          <aside className="account-sidebar">

            {/* Avatar */}
            <div className="account-avatar">
              {profile.firstName[0]}{profile.lastName[0]}
            </div>

            <p className="account-sidebar-name">
              {profile.firstName} {profile.lastName}
            </p>
            <p className="account-sidebar-role">Premium Member</p>

            <div className="account-sidebar-divider" />

            {/* Nav */}
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`account-nav-item${active === item.id ? " active" : ""}`}
              >
                <span style={{ fontSize: "14px", opacity: 0.7 }}>{item.icon}</span>
                {item.label}
              </button>
            ))}

            <button className="account-nav-logout">
              <span style={{ fontSize: "14px", opacity: 0.6 }}>→</span>
              Sign Out
            </button>
          </aside>

          {/* ── Main content ── */}
          <main>

            {/* ── Profile ── */}
            {active === "profile" && (
              <div className="account-section animate-fade-in">
                <h2 className="account-section-title">Personal Information</h2>
                <p className="account-section-sub">
                  Update your details to ensure a seamless artisanal experience.
                </p>
                <div className="divider" style={{ marginBottom: "32px" }} />

                {saved && (
                  <div style={{
                    borderLeft: "2px solid var(--color-success)",
                    border: "1px solid var(--color-border)",
                    padding: "11px 14px",
                    marginBottom: "20px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "var(--color-success)",
                  }}>
                    Changes saved successfully.
                  </div>
                )}

                <div className="account-form-grid">
                  <FormField
                    label="First Name"
                    value={profile.firstName}
                    onChange={(v) => setProfile({ ...profile, firstName: v })}
                    variant="line"
                  />
                  <FormField
                    label="Last Name"
                    value={profile.lastName}
                    onChange={(v) => setProfile({ ...profile, lastName: v })}
                    variant="line"
                  />
                </div>
                <div className="account-form-full">
                  <FormField
                    label="Email Address"
                    type="email"
                    value={profile.email}
                    onChange={(v) => setProfile({ ...profile, email: v })}
                    variant="line"
                  />
                </div>
                <div className="account-form-full">
                  <FormField
                    label="Phone Number (Optional)"
                    type="tel"
                    value={profile.phone}
                    onChange={(v) => setProfile({ ...profile, phone: v })}
                    variant="line"
                  />
                </div>

                <div className="account-save-row">
                  <button
                    onClick={handleSaveProfile}
                    className="btn btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {/* ── Orders ── */}
            {active === "orders" && (
              <div className="account-section animate-fade-in">
                <h2 className="account-section-title">Order History</h2>
                <p className="account-section-sub">
                  Your past artisanal selections.
                </p>
                <div className="divider" style={{ marginBottom: "32px" }} />

                {mockOrders.map((order) => (
                  <div key={order.id} className="account-order-row">
                    <div
                      className="account-order-thumb"
                      style={{ backgroundColor: order.bg }}
                    />
                    <div>
                      <p className="account-order-name">{order.name}</p>
                      <p className="account-order-meta">{order.meta}</p>
                    </div>
                    <div>
                      <p className="account-order-price">
                        ${order.price}.00
                      </p>
                      <p className={`account-order-status status-${order.status}`}>
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── Addresses ── */}
            {active === "addresses" && (
              <div className="account-section animate-fade-in">
                <div className="account-address-header">
                  <div>
                    <h2 className="account-section-title">Saved Addresses</h2>
                    <p className="account-section-sub" style={{ marginBottom: 0 }}>
                      Manage your delivery destinations.
                    </p>
                  </div>
                  <button className="btn btn-ghost btn-sm">
                    + Add New
                  </button>
                </div>

                <div className="divider" style={{ marginBottom: "24px" }} />

                <div className="account-address-grid">
                  {mockAddresses.map((addr) => (
                    <div
                      key={addr.id}
                      className={`account-address-card${addr.isDefault ? " is-default" : ""}`}
                    >
                      {addr.isDefault && (
                        <span className="account-address-badge">Default</span>
                      )}
                      <p className="account-address-label">
                        <span>{addr.icon}</span>
                        {addr.label}
                      </p>
                      <p className="account-address-name">{addr.name}</p>
                      <p className="account-address-text">
                        {addr.lines.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < addr.lines.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                      <div className="account-address-actions">
                        <button className="account-address-action">Edit</button>
                        <button className="account-address-action danger">Remove</button>
                        {!addr.isDefault && (
                          <button className="account-address-action">Make Default</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Security ── */}
            {active === "security" && (
              <div className="account-section animate-fade-in">
                <h2 className="account-section-title">Security</h2>
                <p className="account-section-sub">
                  Update your password to keep your account secure.
                </p>
                <div className="divider" style={{ marginBottom: "32px" }} />

                {passwordSaved && (
                  <div style={{
                    border: "1px solid var(--color-border)",
                    borderLeft: "2px solid var(--color-success)",
                    padding: "11px 14px",
                    marginBottom: "20px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "var(--color-success)",
                  }}>
                    Password updated successfully.
                  </div>
                )}

                <div className="account-form-full">
                  <label className="form-label">Current Password</label>
                  <input
                    type="password"
                    value={passwords.current}
                    onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="account-form-full">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    value={passwords.next}
                    onChange={(e) => setPasswords({ ...passwords, next: e.target.value })}
                    className="form-input"
                  />
                </div>
                <div className="account-form-full" style={{ marginBottom: "32px" }}>
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    value={passwords.confirm}
                    onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="account-save-row">
                  <button
                    onClick={handleSavePassword}
                    className="btn btn-ghost"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  );
}