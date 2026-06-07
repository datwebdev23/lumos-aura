import AdminSidebar from "./AdminSidebar";
import Link from "next/link";

const stats = [
  {
    label: "Total Orders",
    value: "1,248",
    change: "+12.5%",
    trend: "up",
    icon: "◳",
    bars: [30, 45, 38, 52, 48, 61, 72, 85, 78, 95],
    barColor: "var(--color-gold)",
  },
  {
    label: "Revenue",
    value: "$48,290",
    change: "+8.2%",
    trend: "up",
    icon: "◫",
    bars: [40, 38, 50, 45, 55, 60, 58, 70, 75, 88],
    barColor: "var(--color-ink-mid)",
  },
  {
    label: "New Users",
    value: "342",
    change: "−2.4%",
    trend: "down",
    icon: "◯",
    bars: [80, 72, 68, 75, 70, 65, 60, 58, 55, 50],
    barColor: "var(--color-border-mid)",
  },
];

const recentOrders = [
  { id: "ORD-0091", customer: "Eleanor Vance",  date: "Oct 24, 2024", amount: 185, status: "delivered"  },
  { id: "ORD-0090", customer: "Julian Crane",   date: "Oct 24, 2024", amount: 65,  status: "processing" },
  { id: "ORD-0089", customer: "Sophia Sterling", date: "Oct 23, 2024", amount: 320, status: "delivered"  },
  { id: "ORD-0088", customer: "Marcus Thorne",  date: "Oct 22, 2024", amount: 120, status: "cancelled"  },
];

export default function DashboardClient() {
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
              <h1 className="admin-page-title">Overview</h1>
              <p className="admin-page-sub">Welcome back. Here is your daily summary.</p>
            </div>
            <button className="btn btn-primary btn-sm">
              Generate Report
            </button>
          </div>

          {/* Stat cards */}
          <div className="admin-stats-grid">
            {stats.map((stat) => {
              const maxBar = Math.max(...stat.bars);
              return (
                <div key={stat.label} className="admin-stat-card">
                  <div className="admin-stat-label">
                    {stat.label}
                    <span className="admin-stat-icon">{stat.icon}</span>
                  </div>
                  <div className="admin-stat-value">{stat.value}</div>
                  <div className={`admin-stat-change ${stat.trend}`}>
                    {stat.trend === "up" ? "↑" : "↓"} {stat.change} vs last month
                  </div>
                  {/* Mini bar chart */}
                  <div className="admin-mini-chart">
                    {stat.bars.map((h, i) => (
                      <div
                        key={i}
                        className="admin-mini-bar"
                        style={{
                          height: `${(h / maxBar) * 100}%`,
                          backgroundColor: i === stat.bars.length - 1
                            ? stat.barColor
                            : "var(--color-border)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Recent orders */}
          <div className="admin-card">
            <div className="admin-card-header">
              <h2 className="admin-card-title">Recent Orders</h2>
              <Link href="/admin/orders" className="btn btn-ghost btn-sm">
                View All
              </Link>
            </div>

            <table className="admin-table">
              <thead>
                <tr>
                  {["Order ID", "Customer", "Date", "Amount", "Status"].map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "var(--color-ink-mid)",
                      letterSpacing: "0.03em",
                    }}>
                      #{order.id}
                    </td>
                    <td>{order.customer}</td>
                    <td style={{ color: "var(--color-ink-muted)" }}>{order.date}</td>
                    <td style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      fontWeight: 400,
                    }}>
                      ${order.amount}.00
                    </td>
                    <td>
                      <span className={`admin-badge admin-badge-${order.status}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}