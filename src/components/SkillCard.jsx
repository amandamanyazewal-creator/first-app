export default function SkillCard({ name, level, detail }) {
  return (
    <div className="skill-row">
      <div className="skill-row__head">
        <span className="skill-row__name">{name}</span>
        <span className="skill-row__level">{level}%</span>
      </div>
      <div
        className="skill-row__track"
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="skill-row__fill" style={{ width: `${level}%` }} />
      </div>
      {detail && <p className="skill-row__detail">{detail}</p>}
    </div>
  );
}
