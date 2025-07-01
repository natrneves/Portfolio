import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <div id="home" className="Intro">
      <div className="blob-middle"></div>
      <h1><span className="highlight">Port</span>fólio<span className="dot">.</span></h1>
      <p className="subtitle">
        Nathally Neves | <span className="tag">Web Designer & UI/UX Designer</span>
      </p>
    </div>
  );
};

export default Intro;
