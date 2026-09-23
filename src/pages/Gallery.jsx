import { useEffect, useMemo, useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import GalleryCard from "../components/GalleryCard.jsx";
import { galleryCategories, galleryItems } from "../data/galleryData.js";
import "../styles/gallery.css";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((i) => i.category === filter),
    [filter]
  );

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setActive(null);
    }
    if (active) {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }
  }, [active]);

  return (
    <>
      <div className="page-head container">
        <span className="eyebrow">TABLE: gallery</span>
        <h1>Visual gallery</h1>
        <p className="lede">
          Snapshots from across the work — interfaces, schemas, and the systems
          behind them. Filter by specialty or open any tile for a closer look.
        </p>
      </div>

      <section className="section section--tight section--paper">
        <div className="container">
          <SectionTitle
            tag="Browse"
            title="Recent work, at a glance"
            lede="Replace these placeholder tiles with real screenshots from public/images/gallery."
          />

          <div
            className="gallery-filters"
            role="tablist"
            aria-label="Filter gallery by category"
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                className={filter === cat.id ? "is-active" : ""}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((item) => (
              <GalleryCard key={item.id} item={item} onOpen={setActive} />
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div className="lightbox__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lightbox__close"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ×
            </button>
            <div className="lightbox__media">
              <img
                src={active.image}
                alt=""
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />
            </div>
            <div className="lightbox__body">
              <span className="eyebrow">{active.tag}</span>
              <h3>{active.title}</h3>
              <p>{active.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
