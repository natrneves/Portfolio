import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaComments, FaClock, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-container">
        {/* Coluna da Esquerda */}
        <div className="contact-info">
          <h2>Como me encontrar</h2>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>nathally@email.com</p>
              <small>Resposta em até 24h</small>
            </div>
          </div>

          <div className="info-box">
            <FaPhone className="icon" />
            <div>
              <h4>Telefone</h4>
              <p>+55 (11) 99999-9999</p>
              <small>Seg-Sex, 9h às 18h</small>
            </div>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Localização</h4>
              <p>São Paulo, SP</p>
              <small>Disponível remotamente</small>
            </div>
          </div>

          {/* Box de motivos */}
          <div className="work-reasons">
            <h3>Por que trabalhar comigo?</h3>
            <ul>
              <li><FaComments /> Comunicação Clara<br /><span>Mantenho você atualizado em cada etapa do projeto</span></li>
              <li><FaClock /> Entrega Pontual<br /><span>Compromisso com prazos e qualidade</span></li>
              <li><FaCheckCircle /> Satisfação Garantida<br /><span>Trabalho até você ficar 100% satisfeito</span></li>
            </ul>
          </div>
        </div>

        {/* Coluna da Direita */}
        <div className="contact-form">
          <div className="form-header">
            <h2>Envie sua mensagem</h2>
            <p>Preencha o formulário e retornarei o mais breve possível</p>
          </div>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Seu nome" required />
              <input type="email" placeholder="seu@email.com" required />
            </div>
            <input type="text" placeholder="Sobre o que você gostaria de conversar?" required />
            <textarea placeholder="Conte-me mais sobre seu projeto, objetivos e como posso ajudar..." required></textarea>
            <button type="submit">
              <FaPaperPlane /> Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
