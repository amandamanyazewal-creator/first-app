import SectionTitle from "../components/SectionTitle.jsx";
import SkillCard from "../components/SkillCard.jsx";
import { skillGroups, otherSkills } from "../data/skillsData.js";
import "../styles/skills.css";

export default function Skills() {
  return (
    <>
      <div className="page-head container">
        <span className="eyebrow">TABLE: skills</span>
        <h1>My technical skills</h1>
        <p className="lede">
          Grouped the way I actually use them — building interfaces, structuring
          the data behind them, and supporting the systems they run on.
        </p>
      </div>

      <section className="section section--tight">
        <div className="container skills-groups">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <div className="skills-group__head">
                <SectionTitle
                  tag={group.title}
                  title={group.title}
                  lede={group.note}
                />
              </div>
              <div className="skills-group__rows">
                {group.skills.map((s) => (
                  <SkillCard key={s.name} {...s} />
                ))}
              </div>
            </div>
          ))}

          <div>
            <SectionTitle
              tag="Also in the toolkit"
              title="Other technical skills"
            />
            <div className="other-skills">
              {otherSkills.map((s) => (
                <span className="pill" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
