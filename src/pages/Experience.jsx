import SectionTitle from "../components/SectionTitle.jsx";
import ExperienceCard from "../components/ExperienceCard.jsx";
import { experience } from "../data/experienceData.js";
import "../styles/experience.css";

export default function Experience() {
  return (
    <>
      <div className="page-head container">
        <span className="eyebrow">TABLE: experience</span>
        <h1>Professional experience</h1>
        <p className="lede">
          How my work breaks down across the front end, the data layer, and the
          systems that keep everything running — plus what I'm actively learning
          next.
        </p>
      </div>

      <section className="section section--tight">
        <div className="container">
          <div className="timeline">
            {experience.map((role, i) => (
              <ExperienceCard
                key={role.id}
                role={role}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
