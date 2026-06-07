"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: "▦" },
  { label: "Products",  href: "/admin/products",  icon: "◫" },
  { label: "Orders",    href: "/admin/orders",    icon: "◳" },
  { label: "Users",     href: "/admin/users",     icon: "◯" },
  { label: "Vouchers",  href: "/admin/vouchers",  icon: "◻" },
  { label: "Analytics", href: "/admin/analytics", icon: "⟋" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="admin-sidebar">
      {/* Brand */}
      <div className="admin-sidebar-brand">
        <span className="admin-sidebar-brand-name">Lumos Admin</span>
        <span className="admin-sidebar-brand-sub">Management Suite</span>
      </div>

      {/* Nav */}
      <nav className="admin-nav-group">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`admin-nav-item${isActive ? " active" : ""}`}
            >
              <span className="admin-nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="admin-sidebar-footer">
        <div className="admin-sidebar-avatar">AD</div>
        <div>
          <span className="admin-sidebar-footer-name">Admin</span>
          <span className="admin-sidebar-footer-role">Management Suite</span>
        </div>
      </div>
    </aside>
  );
}