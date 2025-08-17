import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/portfolioData";
import "./Projects.css";

function Projects() {
  const [filter, setFilter] = useState("All");

  // Filtered projects
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.tech === filter);

  // Technology options
  const techOptions = ["All", ...new Set(projects.map((p) => p.tech))];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently.
        </p>

        {/* Filter */}
        <div className="projects-filter">
          {techOptions.map((tech) => (
            <button
              key={tech}
              className={filter === tech ? "active" : ""}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
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
