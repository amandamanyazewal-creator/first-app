import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projectsData.js";
import "../styles/projects.css";

export default function Projects() {
  return (
    <>
      <div className="page-head container">
        <span className="eyebrow">TABLE: projects</span>
        <h1>Recent projects</h1>
        <p className="lede">
          A mix of interface work and the database systems behind it — from a
          personal portfolio to management systems for real-world records.
        </p>
      </div>

      <section className="section section--tight section--paper">
        <div className="container">
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
