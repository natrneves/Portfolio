import React, { useState } from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Projects() {
  const [showModal, setShowModal] = useState(false);

  const projects = [
    {
      title: "Projeto Casa Guido",
      description: "Portal Web de consultas e cadastros de crianças e adolescentes com câncer. Projeto desenvolvido da faculdade de Ciência da Computação. Projeto em andamento.",
      year: 2025,
      tags: ["React", "Java com Springboot", "Figma"],
      img: "/imagens/ProjetoGuido.png",
    },
    {
      title: "App gamificado de leitura",
      description: "Plataforma para organizar livros lidos, em leitura e desejados, com recompensas visuais que incentivam o hábito de leitura. Projeto em andamento.",
      year: 2025,
      tags: ["Figma", "Mobile UI", "Prototipação"],
      img: "/imagens/carregando.png",
    },
     {
      title: "Registro digital de cuidados dos pets",
      description: "Interface para tutores cadastrarem consultas, vacinas e alertas, com exportação em PDF para envio ao veterinário. Projeto em andamento",
      year: 2025,
      tags: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
      img: "/imagens/carregando.png",
    }
    ,
    {
      title: "Painel de produtividade para freelancers",
      description: "Projeto pessoal para desenvolver uma interface para freelances acompanharem tarefas, prazos, horas trabalhadas e pagamentos. Protótipo em desenvolvimento",
      year: 2025,
      tags: ["React", "CSS", "Figma", "Node.js"],
      img: "/imagens/carregando.png",
    },
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-title">
        <h2>Meus Projetos</h2>
        <p>Uma coleção dos meus trabalhos mais significativos em design e desenvolvimento</p>
      </div>

      <h3 className="featured-title">Projetos em Destaque</h3>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <div className="image-container">
                <img src={project.img} alt={project.title} />
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
                  <button className="btn-primary" onClick={handleShowModal}>
                    Ver Projeto
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <p>🚧 Projeto ainda em andamento. Em breve disponível.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
