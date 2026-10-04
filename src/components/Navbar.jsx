import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import "../styles/navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
  { to: "/gallery", label: "Gallery" },
  { to: "/sounds", label: "Sounds" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setOpen(false);
  }, []);

  function handleLogout() {
    setOpen(false);
    logout();
    navigate("/logout");
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Brand / Logo */}
        <NavLink
          to="/"
          className="navbar__brand"
          onClick={() => setOpen(false)}
        >
          <span className="navbar__brand-dot" aria-hidden="true" />

          <img
            src="/images/logo.png"
            alt="Aman Tch logo"
            width="50"
            height="50"
          />

          <span>Aman Tch</span>
        </NavLink>

        {/* Navigation Links */}
        <nav
          className={`navbar__links ${open ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Login / Logout */}
          <div className="navbar__cta">
            {isAuthenticated ? (
              <Button variant="ghost" small onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button
                to="/login"
                variant="primary"
                small
                onClick={() => setOpen(false)}
              >
                Login
              </Button>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
