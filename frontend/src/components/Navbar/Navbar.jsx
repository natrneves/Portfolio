import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="logo">
        <span className="highlight">Nathally</span> Neves
      </div>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
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
