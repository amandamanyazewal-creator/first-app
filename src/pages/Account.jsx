import { Navigate } from "react-router-dom";
import Button from "../components/Button.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import "../styles/login.css";

export default function Account() {
  const { user, isAuthenticated } = useAuth();

  // Not signed in — send visitors straight to the login form.
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <section className="section auth-section">
      <div className="container">
        <div className="card auth-card auth-card--single">
          <div className="auth-form">
            <span className="eyebrow">TABLE: session</span>
            <h1>Welcome back</h1>
            <p className="lede" style={{ fontSize: "var(--step-sm)", marginBottom: "var(--sp-4)" }}>
              Signed in as <strong>{user.email}</strong>.
            </p>

            <div className="schema-table" style={{ marginBottom: "var(--sp-4)" }}>
              <div className="schema-table__head">
                <span>session</span>
                <span>001</span>
              </div>
              <ul className="schema-table__rows">
                <li>user <span className="val">{user.email}</span></li>
                <li>status <span className="val available">signed_in</span></li>
                <li>since <span className="val">{new Date(user.signedInAt).toLocaleString()}</span></li>
              </ul>
            </div>

            <p className="auth-note" style={{ marginTop: 0 }}>
              This is a placeholder account screen — there's no real admin dashboard behind it
              yet. Build out project/gallery editing here once a backend is connected.
            </p>

            <div className="btn-row">
              <Button to="/logout" variant="primary">Log out</Button>
              <Button to="/" variant="ghost">Back to site</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
