import { Link } from "react-router-dom";
import "../styles/footer.css";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Web Development",
  "React Development",
  "Database Management",
  "SQL Development",
  "IT Support",
  "Network Support",
];

const socials = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "Telegram", href: "https://t.me/" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <span className="footer__brand">Amanuel</span>
            <p className="footer__desc">
              Web Developer &amp; Database Specialist — building modern web
              applications and digital solutions with a focus on quality,
              usability, and continuous learning.
            </p>
          </div>

          <div>
            <p className="footer__heading">Quick links</p>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__heading">Services</p>
            <ul className="footer__links">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/services">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer__heading">Elsewhere</p>
            <ul className="footer__links">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} Amanuel. All rights reserved.
          </span>
          <span>Designed &amp; built with React.js</span>
        </div>
      </div>
    </footer>
  );
}
