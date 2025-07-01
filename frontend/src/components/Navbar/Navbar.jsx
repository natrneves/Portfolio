import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

 useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    console.log("ScrollY:", scrollY);
    setIsScrolled(scrollY > 50);
  };

  handleScroll(); // força o estado inicial

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={closeMenu}>
         <span className="nathally">Nathally</span> <span className="neves">Neves</span>
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={closeMenu}>Início</a></li>
          <li><a href="#about" onClick={closeMenu}>Sobre</a></li>
          <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projetos</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contato</a></li>
        </ul>
      </nav>

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}
