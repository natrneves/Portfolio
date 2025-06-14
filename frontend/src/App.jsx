import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
