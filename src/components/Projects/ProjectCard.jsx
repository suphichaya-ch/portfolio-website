// src/components/Projects/ProjectCard.jsx
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* ใส่รูปตรงนี้ */}
      <img src={project.image}  className="project-image" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      
      
      {/* ปรับเพิ่มปุ่มหรือ link ได้ตาม data */}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      )}
    </div>
  );
}

export default ProjectCard;