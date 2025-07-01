import { Code2, PenTool, Smile, Lightbulb, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Texto da esquerda */}
        <div className="text-area">
          <h2>Sobre Mim</h2>
          <hr />
          <p>
            Tenho uma abordagem completa para <strong>criar experiências digitais com propósito:</strong> planejo, projeto e desenvolvo interfaces que <strong>funcionam de verdade</strong> — tanto visualmente quanto tecnicamente.
          </p>
          <p>
            Atuo desde os primeiros esboços (wireframes e protótipos) até a entrega final, seja com código ou WordPress, aplicando princípios de <strong>UI/UX, SEO e marketing digital desde a base.</strong> Utilizo <strong>metodologias ágeis</strong> para garantir eficiência, alinhamento com o cliente e entregas evolutivas.
          </p>
          <p>
            Meus projetos são pensados para serem <strong>intuitivos, escaláveis e com foco nos objetivos do negócio.</strong> <strong>Acredito que um bom design vai além da estética:</strong> ele deve <strong>comunicar com clareza, gerar valor e entregar resultados reais.</strong>
          </p>
          <div className="badge">
            <i className="icon">
              <BookOpen size={18} />
            </i>
            <span>
              <strong>Sempre Aprendendo</strong><br />
              Comprometida com o crescimento contínuo
            </span>
          </div>
        </div>

        {/* Cards da direita */}
        <div className="cards-area">
          <div className="card">
            <i className="icon"><Code2 size={18} /></i>
            <h4>Desenvolvimento</h4>
            <p>Criando soluções web modernas e eficientes</p>
          </div>
          <div className="card">
            <i className="icon"><PenTool size={18} /></i>
            <h4>Design</h4>
            <p>Designs que unem estética, usabilidade e resultado</p>
          </div>
          <div className="card">
            <i className="icon"><Smile size={18} /></i>
            <h4>Experiência do Usuário</h4>
            <p>Conectando pessoas, objetivos e interfaces com clareza</p>
          </div>
          <div className="card">
            <i className="icon"><Lightbulb size={18} /></i>
            <h4>Inovação</h4>
            <p>Transformando ideias em soluções criativas e eficazes</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta-area">
        <h3>Pronto para transformar sua ideia em realidade?</h3>
        <p>Eu te ajudo a criar interfaces intuitivas e bonitas.</p>

        {/* BOTÃO COM ANIMAÇÃO USANDO FRAMER MOTION */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
        <motion.button
  onClick={() => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="cta-scan-button"
  whileHover={{ scale: 1.03 }}
  whileTap={{ scale: 0.97 }}
>
  <span className="glow-text">Começar Projeto</span>
</motion.button>




        </div>
      </div>
    </section>
  );
}