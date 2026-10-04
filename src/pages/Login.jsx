import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import "../styles/login.css";

const initialForm = { email: "", password: "" };

export default function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [showForgotNote, setShowForgotNote] = useState(false);

  // Already signed in — no reason to show the form again.
  if (isAuthenticated) {
    return <Navigate to="/account" replace />;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (form.password.length < 6)
      next.password = "Password must be at least 6 characters.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    login(form.email);
    navigate("/account");
  }

  return (
    <section className="section auth-section">
      <div className="container">
        <div className="card auth-card">
          <div className="auth-side">
            <div>
              <span className="eyebrow">TABLE: session</span>
              <h2 style={{ fontSize: "var(--step-md)" }}>Admin sign in</h2>
              <p>
                This area is for managing the portfolio's content — projects,
                gallery items, and skills — not for site visitors.
              </p>
            </div>

            <div className="schema-table">
              <div className="schema-table__head">
                <span>session</span>
                <span>001</span>
              </div>
              <ul className="schema-table__rows">
                <li>
                  user <span className="val">null</span>
                </li>
                <li>
                  status <span className="val">signed_out</span>
                </li>
                <li>
                  role <span className="val">owner</span>
                </li>
              </ul>
            </div>
          </div>

          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <span className="eyebrow">Sign in</span>
            <h1>Welcome back</h1>
            <p
              className="lede"
              style={{
                fontSize: "var(--step-sm)",
                marginBottom: "var(--sp-3)",
              }}
            >
              Sign in to manage this site's content.
            </p>

            <p
              className="auth-note"
              style={{ marginTop: 0, marginBottom: "var(--sp-4)" }}
            >
              Demo mode: this session is stored only in your browser. Any
              correctly formatted email with a 6+ character password will sign
              you in — connect a real auth provider before this handles real
              users.
            </p>

            <div className={`auth-field ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="auth-error">{errors.email}</span>
              )}
            </div>

            <div className={`auth-field ${errors.password ? "has-error" : ""}`}>
              <label htmlFor="password">Password</label>
              <div className="auth-password-row">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <span className="auth-error">{errors.password}</span>
              )}
            </div>

            <div className="auth-row">
              <label className="auth-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <button
                type="button"
                className="auth-forgot"
                onClick={() => setShowForgotNote((v) => !v)}
              >
                Forgot password?
              </button>
            </div>

            {showForgotNote && (
              <p className="auth-note">
                Password reset isn't wired up yet — connect an auth provider
                (Firebase Auth, Supabase, or a custom API) to enable this.
              </p>
            )}

            <Button type="submit" variant="primary">
              Sign in
            </Button>

            <Link to="/" className="auth-back">
              ← Back to the site
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}
