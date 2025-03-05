import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./styles.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+5521968371100" 
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
}

export default WhatsAppButton;