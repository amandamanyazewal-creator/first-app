import { createContext, useContext, useEffect, useState } from "react";

/**
 * Demo-only auth state. There is no backend behind this — it exists so the
 * Login / Account / Logout pages have somewhere real to read and write
 * session state. The "session" is just localStorage in this browser, not a
 * verified credential. Before handling real users, wire `login()` up to a
 * real provider (Firebase Auth, Supabase, your own API, etc.) instead of
 * accepting any well-formed email/password.
 */

const STORAGE_KEY = "amanuel-portfolio.auth-demo";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // localStorage can be unavailable (private browsing, etc). Fail silently.
    }
  }, [user]);

  function login(email) {
    setUser({ email, signedInAt: new Date().toISOString() });
  }

  function logout() {
    setUser(null);
  }

  const value = { user, isAuthenticated: Boolean(user), login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
