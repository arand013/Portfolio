import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

function About({ content }) {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container about-grid">
        <Reveal className="about-media">
          <div className="profile-card">
            <div className="profile-frame">
              <img
                src={content.image}
                alt="Alexander Aranda"
                className="profile-image"
                loading="lazy"
              />
            </div>
            <div className="profile-summary">
              <span>Software Engineer</span>
              <strong>Alexander Aranda</strong>
              <p>{content.summary}</p>
            </div>
          </div>
        </Reveal>

        <div className="about-content">
          <Reveal>
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
            />
          </Reveal>

          <Reveal
            className="about-body"
            style={{ '--delay': '80ms' }}
          >
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <div className="highlight-grid">
            {content.highlights.map((highlight, index) => (
              <Reveal
                key={highlight.label}
                className="highlight-wrap"
                style={{ '--delay': `${index * 70}ms` }}
              >
                <article className="highlight-card">
                  <span>{highlight.label}</span>
                  <strong>{highlight.value}</strong>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
