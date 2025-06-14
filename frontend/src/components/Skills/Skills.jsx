import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Minhas Habilidades</h2>
      <p className="section-subtitle">
        Tecnologias e ferramentas que domino, sempre em constante evolução
      </p>

      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-card">
          <div className="skill-icon">F</div>
          <h3 className="card-title">Frontend</h3>
          <ul>
            <li>
              <div className="skill-row">
                <span>HTML/CSS</span>
                <span>90%</span>
              </div>
              <div className="bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>JavaScript</span>
                <span>80%</span>
              </div>
              <div className="bar">
                <div style={{ width: "80%" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>React</span>
                <span>75%</span>
              </div>
              <div className="bar">
                <div style={{ width: "75%" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>TypeScript</span>
                <span>70%</span>
              </div>
              <div className="bar">
                <div style={{ width: "70%" }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* Design */}
        <div className="skill-card">
          <div className="skill-icon">D</div>
          <h3 className="card-title">Design</h3>
          <ul>
            <li>
              <div className="skill-row">
                <span>Figma</span>
                <span>95%</span>
              </div>
              <div className="bar">
                <div style={{ width: "95%", backgroundColor: "#4b5563" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>Adobe XD</span>
                <span>85%</span>
              </div>
              <div className="bar">
                <div style={{ width: "85%", backgroundColor: "#4b5563" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>UI Design</span>
                <span>90%</span>
              </div>
              <div className="bar">
                <div style={{ width: "90%", backgroundColor: "#4b5563" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>UX Research</span>
                <span>75%</span>
              </div>
              <div className="bar">
                <div style={{ width: "75%", backgroundColor: "#4b5563" }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <div className="skill-icon">B</div>
          <h3 className="card-title">Backend</h3>
          <ul>
            <li>
              <div className="skill-row">
                <span>Node.js</span>
                <span>65%</span>
              </div>
              <div className="bar">
                <div style={{ width: "65%", backgroundColor: "#6b7280" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>Python</span>
                <span>70%</span>
              </div>
              <div className="bar">
                <div style={{ width: "70%", backgroundColor: "#6b7280" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>SQL</span>
                <span>75%</span>
              </div>
              <div className="bar">
                <div style={{ width: "75%", backgroundColor: "#6b7280" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>API REST</span>
                <span>70%</span>
              </div>
              <div className="bar">
                <div style={{ width: "70%", backgroundColor: "#6b7280" }}></div>
              </div>
            </li>
          </ul>
        </div>

        {/* Ferramentas */}
        <div className="skill-card">
          <div className="skill-icon">F</div>
          <h3 className="card-title">Ferramentas</h3>
          <ul>
            <li>
              <div className="skill-row">
                <span>Git/GitHub</span>
                <span>85%</span>
              </div>
              <div className="bar">
                <div style={{ width: "85%" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>Responsive Design</span>
                <span>95%</span>
              </div>
              <div className="bar">
                <div style={{ width: "95%" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>Tailwind CSS</span>
                <span>90%</span>
              </div>
              <div className="bar">
                <div style={{ width: "90%" }}></div>
              </div>
            </li>
            <li>
              <div className="skill-row">
                <span>WordPress</span>
                <span>80%</span>
              </div>
              <div className="bar">
                <div style={{ width: "80%" }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Sempre Aprendendo */}
      <div className="learning">
        <h3>Sempre Aprendendo</h3>
        <p>
          Tecnologias que estou explorando e adicionando ao meu arsenal de conhecimento
        </p>
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
    </section>
  );
}

export default Skills;
