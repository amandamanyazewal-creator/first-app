/**
 * Schema-style section heading: a TABLE:-style eyebrow tag above the title.
 */
export default function SectionTitle({ tag, title, lede, align = "left" }) {
  return (
    <div style={{ textAlign: align, marginBottom: "var(--sp-5)" }}>
      {tag && <span className="eyebrow">{tag}</span>}
      <h2>{title}</h2>
      {lede && (
        <p
          className="lede"
          style={align === "center" ? { margin: "0 auto" } : undefined}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
