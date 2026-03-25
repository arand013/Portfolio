import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

function Skills({ content }) {
  return (
    <section
      id="skills"
      className="section section--soft"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            copy={content.copy}
            align="center"
          />
        </Reveal>

        <div className="skills-grid">
          {content.groups.map((group, index) => (
            <Reveal
              key={group.title}
              className="skill-card-wrap"
              style={{ '--delay': `${index * 70}ms` }}
            >
              <article className="skill-card">
                <div className="skill-card__header">
                  <h3>{group.title}</h3>
                </div>

                <ul className="skill-list">
                  {group.items.map((item) => (
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

export default Skills;
