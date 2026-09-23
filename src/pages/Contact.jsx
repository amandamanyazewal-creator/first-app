import { useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import "../styles/contact.css";

const CONTACT_EMAIL = "amandamanyazewal@gmail.com";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "success"

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.message.trim()) next.message = "Please add a short message.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // No backend is wired up yet — open a pre-filled email as a fallback.
    const subject = encodeURIComponent(
      form.subject || `Portfolio message from ${form.name}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("success");
    setForm(initialForm);
  }

  return (
    <>
      <div className="page-head container">
        <span className="eyebrow">TABLE: contact</span>
        <h1>Let's work together</h1>
        <p className="lede">
          Have a project idea, or need a website, database solution, or IT
          support? I'm always interested in discussing new projects, technology,
          and professional opportunities.
        </p>
      </div>

      <section className="section section--tight section--paper">
        <div className="container contact-grid">
          <div className="card contact-info">
            <SectionTitle tag="Reach me" title="Contact information" />
            <div className="contact-info__item">
              <span className="contact-info__icon">@</span>
              <div>
                <strong>Email</strong>
                <p style={{ margin: 0 }}>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </p>
              </div>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__icon">#</span>
              <div>
                <strong>Phone</strong>
                <p style={{ margin: 0 }}>+251 979 744 091</p>
              </div>
            </div>
            <div className="contact-info__item">
              <span className="contact-info__icon">~</span>
              <div>
                <strong>Location</strong>
                <p style={{ margin: 0 }}>Debrebrehan, Ethiopia</p>
              </div>
            </div>

            <div className="contact-info__socials">
              <a
                className="pill"
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="pill"
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="pill"
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                className="pill"
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>

          <form
            className="card contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <SectionTitle
              tag="Send a message"
              title="Fill out the form below"
              lede="I'll get back to you as soon as possible."
            />

            <div className={`form-field ${errors.name ? "has-error" : ""}`}>
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className={`form-field ${errors.email ? "has-error" : ""}`}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className={`form-field ${errors.message ? "has-error" : ""}`}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="form-error">{errors.message}</span>
              )}
            </div>

            <Button type="submit" variant="primary">
              Send message
            </Button>

            {status === "success" && (
              <p className="form-status form-status--success" role="status">
                Thanks — your email app should have opened with your message
                ready to send.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
