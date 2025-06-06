import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Minhas Habilidades</h2>
        <p className="section-subtitle">Tecnologias e ferramentas que domino, sempre em constante evolução</p>

        <div className="skills-grid">
          {/* Exemplo: Frontend */}
          <div className="skill-card">
            <div className="skill-icon">F</div>
            <h3>Frontend</h3>
            <ul>
              <li><span>HTML/CSS</span><div className="bar"><div style={{width: "90%"}}></div></div></li>
              <li><span>JavaScript</span><div className="bar"><div style={{width: "80%"}}></div></div></li>
              <li><span>React</span><div className="bar"><div style={{width: "75%"}}></div></div></li>
              <li><span>TypeScript</span><div className="bar"><div style={{width: "70%"}}></div></div></li>
            </ul>
          </div>

          {/* Repita para Design, Backend, Ferramentas */}
          {/* ... */}
        </div>

        <div className="learning">
          <h3>Sempre Aprendendo</h3>
          <p>Tecnologias que estou explorando e adicionando ao meu arsenal de conhecimento</p>
          <div className="badges">
            <span>Vue.js</span>
            <span>Angular</span>
            <span>Flutter</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>GraphQL</span>
            <span>Next.js</span>
            <span>Svelte</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
