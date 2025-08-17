import './Projects.css';
import ProjectCard from './ProjectCard';
import { projects } from '../../data/portfolioData'; // สมมติคุณเก็บ data ไว้ที่นี่

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
