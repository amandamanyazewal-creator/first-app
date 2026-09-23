import Button from "./Button.jsx";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card card">
      <div className="project-card__media" aria-hidden="true">
        <span className="project-card__tag">{project.image}</span>
      </div>

      <div className="project-card__body">
        <h3>{project.name}</h3>

        <p>{project.description}</p>

        <ul className="project-card__features">
          {project.features.slice(0, 4).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>

        <div className="btn-row" style={{ marginTop: "var(--sp-3)" }}>
          {project.demoUrl && (
            <Button href={project.demoUrl} variant="primary" small>
              Live demo
            </Button>
          )}
          {project.codeUrl && (
            <Button href={project.codeUrl} variant="ghost" small>
              View code
            </Button>
          )}
          {!project.demoUrl && !project.codeUrl && (
            <span className="project-card__soon">Links coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}
