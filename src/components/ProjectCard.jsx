import Reveal from './Reveal';

function ProjectCard({ project, index }) {
  return (
    <Reveal
      className="project-card-wrap"
      style={{ '--delay': `${index * 70}ms` }}
    >
      <article className="project-card">
        <div className="project-media">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
          />
        </div>

        <div className="project-body">
          <div className="project-copy">
            <p className="project-kicker">{project.tags.join(' / ')}</p>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
          </div>

          {project.outcome ? <p className="project-outcome">{project.outcome}</p> : null}

          <ul className="project-tags" aria-label={`${project.title} technology tags`}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="project-actions">
            <a
              className="button button-primary"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              View Live
            </a>
            <a
              className="button button-secondary"
              href={project.repository}
              target="_blank"
              rel="noreferrer"
            >
              Repository
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default ProjectCard;
