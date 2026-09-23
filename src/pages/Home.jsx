import Button from "../components/Button.jsx";
import SchemaHero from "../components/SchemaHero.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import "../styles/home.css";
import { useEffect, useState } from "react";

const highlights = [
  {
    tag: "01",
    title: "Web Development",
    text: "Creating responsive and modern websites, from landing pages to full React applications.",
    img: "/images/menten.png",
  },
  {
    tag: "02",
    title: "Database Management",
    text: "Designing, managing, and organizing databases so information stays accurate and easy to query.",
  },
  {
    tag: "03",
    title: "IT Support",
    text: "Providing technical support and solving computer and network problems, on-site and remote.",
  },
];

export default function Home() {
  return (
    <>
      <section className="section hero container reveal">
        <div className="hero__intro">
          <span className="eyebrow">
            Web Developer · Database Specialist · IT Professional
          </span>
          <h1>
            Hi, I'm <em>Amanuel</em>
          </h1>
          <p className="lede">
            I build modern, responsive, user-friendly web applications, design
            the databases that sit behind them, and keep the systems around them
            running — turning technical problems into working digital solutions.
          </p>
          <div className="btn-row">
            <Button to="/projects" variant="primary">
              View my projects
            </Button>
            <Button to="./contact" variant="ghost">
              Contact me
            </Button>
            <Button href="/cv/Amanuel_CV.pdf" variant="ghost">
              Download CV
            </Button>
          </div>
        </div>
        <SchemaHero />
      </section>
      <section className="section section--paper">
        <div className="container">
          <SectionTitle
            tag="TABLE: highlights"
            title="Professional highlights"
            lede="Three related specialties, one connected way of working."
          />
          <div className="grid grid-3">
            {highlights.map((h) => (
              <div className="card highlight-card" key={h.tag}>
                <span className="highlight-card__index">{h.tag}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--ink">
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--sp-4)",
          }}
        >
          <div>
            <span className="eyebrow">Currently</span>
            <h2 style={{ marginBottom: "var(--sp-1)" }}>
              Available for new projects
            </h2>
            <p className="lede">
              Based in Debrebrehan, Ethiopia — open to remote and on-site work.
            </p>
          </div>
          <Button to="/contact" variant="amber">
            Let's work together
          </Button>
        </div>
      </section>
    </>
  );
}
