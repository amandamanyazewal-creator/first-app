export default function GalleryCard({ item, onOpen }) {
  return (
    <button
      type="button"
      className={`gallery-card gallery-card--${item.category}`}
      onClick={() => onOpen(item)}
    >
      <span className="gallery-card__media">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.visibility = "hidden";
          }}
        />
        <span className="gallery-card__tag">{item.tag}</span>
      </span>
      <span className="gallery-card__title">{item.title}</span>
    </button>
  );
}
