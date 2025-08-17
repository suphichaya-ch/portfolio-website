import React from "react";
import { projects } from "./data/portfolioData";

function App() {
  console.log(projects); // เช็คว่ามี data จริงหรือไม่

  return (
    <div style={{ padding: "20px", backgroundColor: "#f0f0f0", color: "#000" }}>
      <h1>My Projects</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id} style={{ marginBottom: "30px" }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "200px", display: "block" }}
              />
            )}
            {project.link && (
              <p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
