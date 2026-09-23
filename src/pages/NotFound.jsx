import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section
      className="section container"
      style={{ textAlign: "center", padding: "var(--sp-8) 0" }}
    >
      <span className="eyebrow" style={{ justifyContent: "center" }}>
        ERROR 404
      </span>
      <h1>No row found for this route.</h1>
      <p className="lede" style={{ margin: "0 auto var(--sp-4)" }}>
        The page you're looking for doesn't exist — it may have been moved or
        the link may be out of date.
      </p>
      <Button to="/" variant="primary">
        Back to home
      </Button>
    </section>
  );
}
