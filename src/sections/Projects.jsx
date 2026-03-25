import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

function Projects({ content }) {
  return (
    <section
      id="projects"
      className="section"
    >
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            copy={content.copy}
          />
        </Reveal>

        <div className="projects-grid">
          {content.items.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
