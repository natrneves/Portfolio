import React from "react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5548991615371"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
