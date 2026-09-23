export default function ExperienceCard({ role, isLast }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__rail">
        <span className="timeline-item__dot" />
        {!isLast && <span className="timeline-item__line" />}
      </div>
      <div className="timeline-item__body">
        <span className="eyebrow">{role.period}</span>
        <h3>{role.title}</h3>
        <p>{role.summary}</p>
        <ul className="timeline-item__list">
          {role.responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
