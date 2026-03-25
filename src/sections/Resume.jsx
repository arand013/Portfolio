import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

function Resume({ content }) {
  return (
    <section
      id="resume"
      className="section section--compact"
    >
      <div className="container resume-layout">
        <div className="resume-main">
          <Reveal>
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              copy={content.story}
            />
          </Reveal>

          <Reveal
            className="resume-summary-card"
            style={{ '--delay': '80ms' }}
          >
            <div className="resume-timeline">
              {content.timeline.map((item) => (
                <article key={`${item.period}-${item.title}`} className="resume-timeline__item">
                  <span>{item.period}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>

            <ul className="resume-research-list">
              {content.research.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <a
              className="button button-primary"
              href={content.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </Reveal>
        </div>

        <div className="resume-grid">
          {content.categories.map((category, index) => (
            <Reveal
              key={category.title}
              className="resume-card-wrap"
              style={{ '--delay': `${index * 70}ms` }}
            >
              <article className="resume-card">
                <h3>{category.title}</h3>
                <ul className="skill-list">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
