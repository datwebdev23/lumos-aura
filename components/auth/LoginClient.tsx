"use client";

import { useState } from "react";
import Link from "next/link";
import { FormField } from "@/components/ui";

const MOCK_EMAIL    = "hello@lumosaura.vn";
const MOCK_PASSWORD = "lumos2026";

const footerLinks = [
  { label: "Privacy Policy",    href: "/policy"   },
  { label: "Shipping & Returns", href: "/policy"   },
  { label: "Sustainability",    href: "/about"    },
  { label: "Contact",           href: "/contact"  },
];

export default function LoginClient() {
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [success,  setSuccess]  = useState(false);
  const [loading,  setLoading]  = useState(false);

  const handleSignIn = () => {
    setError("");
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (
        email.trim().toLowerCase() === MOCK_EMAIL &&
        password === MOCK_PASSWORD
      ) {
        setSuccess(true);
      } else {
        setError("Incorrect email or password. Please try again.");
      }
    }, 800);
  };

  return (
    <div className="login-page">

      {/* ── Body: centered card ── */}
      <div className="login-page-body">
        <div className="login-card animate-fade-in">

          {/* Brand */}
          <div className="login-brand">
            <Link href="/" style={{ textDecoration: "none" }}>
              <span className="login-brand-name">Lumos Aura</span>
              <span className="login-brand-sub">Artisanal Light &amp; Fragrance</span>
            </Link>
          </div>

          <div className="login-divider" />

          {/* Headline */}
          <h1 className="login-headline">Welcome Back</h1>
          <p className="login-sub">
            Enter your details to access your sanctuary.
          </p>

          {/* Feedback */}
          {error   && <div className="login-error">{error}</div>}
          {success && <div className="login-success">Signed in successfully. Redirecting…</div>}

          {/* Email */}
          <div className="login-field">
            <FormField
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={setEmail}
              variant="line"
            />
          </div>

          {/* Password */}
          <div className="login-field">
            <div className="login-field-header">
              <label className="form-label">Password</label>
              <button className="login-forgot">Forgot?</button>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
              className="form-input"
            />
          </div>

          {/* CTA */}
          <div className="login-cta">
            <button
              onClick={handleSignIn}
              disabled={loading || success}
              className="btn btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                opacity: loading || success ? 0.7 : 1,
              }}
            >
              {loading ? "Signing in…" : "Sign In →"}
            </button>
          </div>

          {/* Create account */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <span className="login-footer-text">New to Lumos Aura? </span>
            <Link href="/register" className="login-footer-link">
              Create Account
            </Link>
          </div>

        </div>
      </div>

      {/* ── Minimal footer ── */}
      <footer className="login-minimal-footer">
        <span className="login-minimal-footer-copy">
          © 2026 Lumos Aura. Artisanal Light &amp; Fragrance.
        </span>
        <nav className="login-minimal-footer-links">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="login-minimal-footer-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </footer>

    </div>
  );
}