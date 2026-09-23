import { Link } from "react-router-dom";

/**
 * Shared button. Renders a <Link> for internal routes, an <a> for external
 * URLs (http/mailto/tel), or a <button> when given onClick with no href/to.
 */
export default function Button({
  children,
  to,
  href,
  variant = "primary",
  small = false,
  onClick,
  type = "button",
}) {
  const className = `btn btn--${variant}${small ? " btn--sm" : ""}`;

  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <>
        <a
          href={href}
          className={className}
          onClick={onClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {" "}
          {children}
        </a>
      </>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
