import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nathally Neves. Todos os direitos reservados.</p>
    </footer>
  );
}
