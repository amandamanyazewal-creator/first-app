import SectionTitle from "../components/SectionTitle.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import Button from "../components/Button.jsx";
import { services } from "../data/servicesData.js";
import "../styles/services.css";

export default function Services() {
  return (
    <>
      <div className="page-head container">
        <span className="eyebrow">TABLE: services</span>
        <h1>What I can do for you</h1>
        <p className="lede">
          From building the site to designing what stores its data to keeping
          the machines around it running — five ways I can help.
        </p>
      </div>

      <section className="section section--tight section--paper">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink section--tight">
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
            <span className="eyebrow">Have a project in mind?</span>
            <h2 style={{ margin: 0 }}>Let's scope it out together.</h2>
          </div>
          <Button to="/contact" variant="amber">
            Start a conversation
          </Button>
        </div>
      </section>
    </>
  );
}
