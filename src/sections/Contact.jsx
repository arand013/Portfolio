import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

function Contact({ content }) {
  return (
    <section
      id="contact"
      className="section section--soft"
    >
      <div className="container contact-layout">
        <Reveal className="contact-intro">
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
          />

          <a
            className="button button-primary"
            href={`mailto:${content.email}`}
          >
            Send Email
          </a>
        </Reveal>

        <div className="contact-card-grid">
          <Reveal style={{ '--delay': '40ms' }}>
            <article className="contact-card">
              <span>Email</span>
              <a href={`mailto:${content.email}`}>{content.email}</a>
            </article>
          </Reveal>

          <Reveal style={{ '--delay': '100ms' }}>
            <article className="contact-card">
              <span>LinkedIn</span>
              <a
                href={content.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/alexander-aranda1
              </a>
            </article>
          </Reveal>

          <Reveal style={{ '--delay': '160ms' }}>
            <article className="contact-card">
              <span>GitHub</span>
              <a
                href={content.github}
                target="_blank"
                rel="noreferrer"
              >
                github.com/arand013
              </a>
            </article>
          </Reveal>

          <Reveal style={{ '--delay': '220ms' }}>
            <article className="contact-card">
              <span>Location</span>
              <strong>{content.location}</strong>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
