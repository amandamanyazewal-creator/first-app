import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button.jsx";
import "../styles/navbar.css";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
  { to: "/Gallery", label: "Gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink
          to="/"
          className="navbar__brand"
          onClick={() => setOpen(false)}
        >
          <span className="navbar__brand-dot" aria-hidden="true" />
          <img src="images/logo.png" width={100} height={90} /> Aman Tch
          <span style={{ color: "var(--key-blue)" }}></span>
        </NavLink>

        <nav
          className={`navbar__links ${open ? "is-open" : ""}`}
          aria-label="Primary"
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
          <div className="navbar__cta">
            <Button
              to="/contact"
              variant="primary"
              small
              onClick={() => setOpen(false)}
            >
              Contact me
            </Button>
          </div>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
