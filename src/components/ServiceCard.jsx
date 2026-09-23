export default function ServiceCard({ service }) {
  return (
    <article className="service-card card">
      <span className="service-card__icon" aria-hidden="true">
        {service.icon}
      </span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <ul className="service-card__list">
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
