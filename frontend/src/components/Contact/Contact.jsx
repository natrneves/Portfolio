import { Mail, MapPin, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      {/* Título da seção */}
      <div className="contact-title fade-in-up">
        <h2>Vamos trabalhar juntos?</h2>
        <p>Entre em contato e tire sua ideia do papel com a gente.</p>
      </div>

      {/* Container principal */}
      <div className="contact-container">
        {/* Lado esquerdo: info */}
        <div className="contact-info fade-in-left">
          <div className="contact-card">
            <div className="contact-card-icon">
              <Mail />
            </div>
            <div className="contact-card-content">
              <h4>Email</h4>
              <p>nathallyr06@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <MapPin />
            </div>
            <div className="contact-card-content">
              <h4>Localização</h4>
              <p>Criciúma - SC, Brasil</p>
            </div>
          </div>

          <div className="work-reasons">
            <h3>Por que trabalhar com a gente?</h3>
            <ul>
              <li>
                <CheckCircle />
                Qualidade garantida
                <span>Projetos entregues com alto padrão e precisão.</span>
              </li>
              <li>
                <CheckCircle />
                Suporte constante
                <span>Acompanhamento do início ao pós-lançamento.</span>
              </li>
              <li>
                <CheckCircle />
                Soluções personalizadas
                <span>Software feito sob medida para seu negócio.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Formulário */}
        <div className="contact-form fade-in-right">
          <div className="form-header">
            <h2>Vamos conversar sobre sua ideia?</h2>
            <p>Preencha o formulário e entraremos em contato em até 48h.</p>
          </div>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="E-mail" required />
            </div>
            <input type="text" placeholder="Assunto" required />
            <textarea placeholder="Mensagem" required></textarea>
            <button type="submit">Enviar mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}
