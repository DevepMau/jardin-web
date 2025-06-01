import React from 'react'
import './Contact.css';

export default function Contact() {
  return (
    <section class="contact-container">
  <div class="contact-header">
    <div class="contact-overlay">
      <h1>¡Estamos a tu servicio!</h1>
      <p>Llamanos o escribinos:</p>
      <ul>
        <li>📞 Teléfono: 1234-5678</li>
        <li>📱 WhatsApp: +54 9 11 1234 5678</li>
        <li>📧 Email: elsantycontacto@mail.com</li>
        <li>📍 Zona Norte, Buenos Aires</li>
      </ul>
    </div>
  </div>
  <div class="contact-form-section">
    <h2>Pedí tu presupuesto sin compromiso</h2>
    <form id="contact-form">
      <input type="text" name="nombre" placeholder="Tu nombre" required />
      <input type="email" name="email" placeholder="Tu email" required />
      <textarea name="mensaje" placeholder="Contanos qué necesitás" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>

</section>
  )
}
