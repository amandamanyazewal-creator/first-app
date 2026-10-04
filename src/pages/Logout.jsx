import { useEffect, useState } from "react";
import Button from "../components/Button.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import "../styles/login.css";

export default function Logout() {
  const { isAuthenticated, logout } = useAuth();
  const [wasSignedIn] = useState(isAuthenticated);

  // Clear the session as soon as this page is reached.
  useEffect(() => {
    if (isAuthenticated) {
      logout();
    }
    // Intentionally runs once on mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section auth-section">
      <div className="container">
        <div className="card auth-card auth-card--single">
          <div className="auth-form" style={{ textAlign: "center" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              TABLE: session
            </span>
            <h1>{wasSignedIn ? "You're signed out" : "Already signed out"}</h1>
            <p
              className="lede"
              style={{
                fontSize: "var(--step-sm)",
                margin: "0 auto var(--sp-4)",
              }}
            >
              {wasSignedIn
                ? "Your session has been cleared from this browser."
                : "There's no active session to sign out of."}
            </p>
            <div className="btn-row" style={{ justifyContent: "center" }}>
              <Button to="/login" variant="primary">
                Sign in again
              </Button>
              <Button to="/" variant="ghost">
                Back to home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
