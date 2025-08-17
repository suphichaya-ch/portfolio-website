// src/components/Projects/Projects.jsx
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../data/portfolioData";
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setProjects(projectsData);
      setIsLoading(false);
    }, 1000); // 1s delay
  }, []);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        {isLoading ? (
          <div className="spinner">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
