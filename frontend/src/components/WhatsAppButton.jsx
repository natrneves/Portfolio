import React from "react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'Botão WhatsApp'
      });
    }
  };

  return (
    <a
      href="https://wa.me/5548991615371"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
}
