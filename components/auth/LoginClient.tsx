"use client";

import { useState } from "react";
import Link from "next/link";

const MOCK_EMAIL    = "hello@lumosaura.vn";
const MOCK_PASSWORD = "lumos2026";

type Tab = "signin" | "create";

export default function LoginClient() {
  const [tab,      setTab]      = useState<Tab>("signin");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
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
    <div className="login-split-page">

      {/* ── Left: lifestyle image panel ── */}
      <div className="login-split-left">
        <div className="login-split-left-overlay" />
      </div>

      {/* ── Right: form panel ── */}
      <div className="login-split-right">

        {/* Top bar */}
        <div className="login-split-topbar">
          <Link href="/" className="login-split-back">
            ← Return to Shop
          </Link>
        </div>

        {/* Centered form */}
        <div className="login-split-form-wrap">
          <div className="login-split-form">

            {/* Sign In / Create tabs */}
            <div className="login-split-tabs">
              <button
                className={`login-split-tab ${tab === "signin" ? "active" : "inactive"}`}
                onClick={() => { setTab("signin"); setError(""); }}
              >
                Sign In
              </button>
              <button
                className={`login-split-tab ${tab === "create" ? "active" : "inactive"}`}
                onClick={() => { setTab("create"); setError(""); }}
              >
                Create
              </button>
            </div>

            {/* Feedback messages */}
            {error && (
              <div className="login-split-feedback error">
                {error}
              </div>
            )}
            {success && (
              <div className="login-split-feedback success">
                Signed in successfully. Redirecting…
              </div>
            )}

            {/* Email */}
            <div className="login-input-group">
              <label className="login-input-label" htmlFor="login-email">
                Email Address
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input-box"
                autoComplete="email"
              />
            </div>

            {/* Password */}
            <div className="login-input-group">
              <div className="login-input-row">
                <label className="login-input-label" htmlFor="login-password">
                  Password
                </label>
                <button className="login-forgot-link" tabIndex={-1}>
                  Forgot password?
                </button>
              </div>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                className="login-input-box"
                autoComplete="current-password"
              />
            </div>

            {/* Remember me */}
            <div className="login-remember-row">
              <input
                id="remember-me"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="login-remember-checkbox"
              />
              <label htmlFor="remember-me" className="login-remember-label">
                Remember me
              </label>
            </div>

            {/* Sign In CTA */}
            <button
              onClick={handleSignIn}
              disabled={loading || success}
              className={`login-split-btn${loading ? " loading" : ""}`}
            >
              {loading ? "Signing in…" : "Sign In →"}
            </button>

            {/* OR divider */}
            <div className="login-or-divider">
              <div className="login-or-line" />
              <span className="login-or-text">or continue with</span>
              <div className="login-or-line" />
            </div>

            {/* Social buttons — visual only */}
            <button className="login-social-btn" onClick={() => {}}>
              <svg className="login-social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.4.07 2.38.77 3.2.8 1.22-.24 2.39-1 3.7-.84 1.58.19 2.76.88 3.54 2.17-3.25 1.96-2.77 5.9.3 7.1-.63 1.52-1.43 3.03-2.74 3.65zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Continue with Apple
            </button>

            <button className="login-social-btn" onClick={() => {}}>
              <svg className="login-social-icon" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

          </div>
        </div>
      </div>

    </div>
  );
}