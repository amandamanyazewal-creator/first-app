import SectionTitle from "../components/SectionTitle.jsx";
import App from "../class/firstreact.jsx";
import "../styles/about.css";

const education = [
  "Information Technology / Computer Science",
  "Web Development Training",
  "Database and SQL Training",
  "Programming and Software Development",
];

const interests = [
  "Web Application Development",
  "Frontend Development",
  "Database Design",
  "SQL & Data Management",
  "React Development",
  "Firebase",
  "Networking & IT Support",
  "Learning New Technologies",
];

export default function About() {
  return (
    <>
      <div className="about-block">
        <App />
      </div>
      <div className="page-head container">
        <span className="eyebrow">TABLE: about</span>
        <h1>Who am I?</h1>
        <p className="lede">
          I'm Amanuel, a technology enthusiast and web developer with an
          interest in web development, programming, databases, and information
          technology. I'm continuously learning modern technologies and
          improving my technical skills — I enjoy turning ideas into functional,
          user-friendly digital solutions.
        </p>
      </div>

      <section className="section section--tight section--paper">
        <div className="container about-grid">
          <div>
            <div className="about-block">
              <SectionTitle tag="Goal" title="My professional goal" />
              <p className="lede" style={{ marginBottom: 0 }}>
                To become a highly skilled Full-Stack Web Developer and Database
                Professional, capable of developing secure, efficient, and
                scalable applications.
              </p>
            </div>

            <div className="about-block">
              <SectionTitle tag="Background" title="Education" />
              <ul className="about-list">
                {education.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <div className="about-block">
              <SectionTitle tag="Focus areas" title="My interests" />
              <div className="interest-tags">
                {interests.map((i) => (
                  <span className="pill" key={i}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <table className="info-table card">
            <caption>
              <img src="images/amanprofile.png" />
            </caption>
            <tbody>
              <tr>
                <th>Name</th>
                <td>Amanuel</td>
              </tr>
              <tr>
                <th>Profession</th>
                <td>Web Developer</td>
              </tr>
              <tr>
                <th>Specialization</th>
                <td>
                  Full Stack Development ; Web Development &amp; IT suporter
                </td>
              </tr>
              <tr>
                <th>Location</th>
                <td>Debrebreha, Ethiopia</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>
                  <a href="mailto:amandamanyazewal@gmail.com">
                    amandamanyazewal@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <th>Availability</th>
                <td>
                  <span className="status-pill">Available for projects</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
