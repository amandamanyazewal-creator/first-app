import { Link } from "react-router-dom";

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

  // Internal React Router link
  if (to) {
    return (
      <Link to={to} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    const external = /^https?:\/\//.test(href);

    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  // Normal button
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}