import { Code2, PenTool, Smile, Lightbulb, BookOpen } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="container">
        {/* Texto da esquerda */}
        <div className="text-area">
          <h2>Sobre Mim</h2>
          <hr />
          <p>
            Sou uma <strong>estudante de Ciência da Computação</strong> apaixonada por criar experiências digitais que fazem a diferença.
            Como <strong>Web Designer</strong>, combino criatividade com técnica para desenvolver interfaces que não apenas impressionam visualmente,
            mas também oferecem uma experiência excepcional ao usuário.
          </p>
          <p>
            Minha jornada em <strong>UI/UX</strong> me ensinou que o design vai além da estética – é sobre resolver problemas reais e criar conexões significativas entre pessoas e tecnologia.
            Estou constantemente aprimorando minhas habilidades de programação para transformar conceitos criativos em realidade digital.
          </p>
          <p>
            Acredito que a melhor tecnologia é aquela que se torna invisível ao usuário, permitindo que eles alcancem seus objetivos de forma natural e intuitiva.
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
            <p>Interfaces visuais que encantam e convertem</p>
          </div>
          <div className="card">
            <i className="icon"><Smile size={18} /></i>
            <h4>Experiência do Usuário</h4>
            <p>Focada em criar jornadas intuitivas e agradáveis</p>
          </div>
          <div className="card">
            <i className="icon"><Lightbulb size={18} /></i>
            <h4>Inovação</h4>
            <p>Sempre explorando novas tecnologias e tendências</p>
          </div>
        </div>
      </div>

      {/* CTA FORA do container, ocupa largura total */}
      <div className="cta-area">
        <h3>Vamos Criar Algo Incrível Juntos?</h3>
        <p>Estou sempre em busca de novos desafios e oportunidades para aplicar minha paixão por design e tecnologia.</p>
        <button>Vamos Conversar</button>
      </div>
    </section>
  );
}
