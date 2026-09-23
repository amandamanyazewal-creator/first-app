import "../styles/loading.css";

/** Small schema-themed loading indicator: three "syncing" table rows. */
export default function Loading({ label = "Loading" }) {
  return (
    <div className="loading" role="status" aria-live="polite">
      <span className="loading__row" />
      <span className="loading__row" />
      <span className="loading__row" />
      <span className="loading__label">{label}…</span>
    </div>
  );
}
