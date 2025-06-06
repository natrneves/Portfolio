import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "E-commerce Responsivo",
      description: "Plataforma completa de e-commerce com design moderno, checkout otimizado e experiência mobile-first.",
      year: 2024,
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      img: "/images/ecommerce.jpg",
      featured: true
    },
    {
      title: "App Mobile UI Design",
      description: "Design completo de aplicativo mobile com foco em usabilidade e experiência do usuário excepcional.",
      year: 2023,
      tags: ["Figma", "Adobe XD", "Prototype", "User Research"],
      img: "/images/mobile-ui.jpg",
      featured: true
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-title">
        <h2>Meus Projetos</h2>
        <hr />
        <p>Uma coleção dos meus trabalhos mais significativos em design e desenvolvimento</p>
      </div>

      <h3 className="featured-title">Projetos em Destaque</h3>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-container">
              <img src={project.img} alt={project.title} />
              {project.featured && <span className="badge">Destaque</span>}
            </div>
            <div className="card-content">
              <div className="project-header">
                <h4>{project.title}</h4>
                <span className="year">{project.year}</span>
              </div>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, idx) => (
                  <span className="tag" key={idx}>{tag}</span>
                ))}
              </div>
              <div className="actions">
                <button className="btn-primary">Ver Projeto</button>
                <button className="btn-secondary"> Código</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
