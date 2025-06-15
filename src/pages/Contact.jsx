import React from 'react'
import './Contact.css';
import logo from '../assets/logo.png';
import Nombre from '../assets/nombre.png';
import QRCode from '../assets/imageContact/qr.jpg';
import whatsappIcon from '../assets/imageContact/whatsapp.png';
import mailIcon from '../assets/imageContact/mail.png';
import instagramIcon from '../assets/imageContact/instagram.png';
import copyIcon from '../assets/imageContact/copy.png';

export default function Contact() {
  return (
    <div class="contact-container">
      <div className='top-separator' />
      <div className='introduction'>
        <h2>CONTACTAME</h2>
        <hr />
        <div className='invite'>
          <p className='col1'>
          Estamos para ayudarte. Podés comunicarte con nosotros a través de 
          WhatsApp, correo electrónico o 
          Instagram, y con gusto responderemos todas tus consultas.
          </p>
          <p className='col2'>
          También podés completar el siguiente formulario para solicitar un 
          <strong> presupuesto sin compromiso</strong>. ¡Te responderemos lo antes posible!
          </p>
        </div>
      </div>
      <div className='section-2'>
        <div className='contact-data-section'>
        <ul>
          <li><img src={logo} alt="Logo" className='data-logo'/></li>
          <li><img src={Nombre} alt='nombre' className='data-nombre'/></li>
          <li className='content'>
            <img src={whatsappIcon} alt='icon-whatsapp'/>
            <p>11 6431 7622</p>
            <button onClick={() => navigator.clipboard.writeText("1164317622")}>
              <img src={copyIcon} alt='icon-copy'/>
            </button>
          </li>
          <li className='qr-code'>
            <img src={QRCode} alt='qr' />
          </li>
          <li className='content'>
            <img src={instagramIcon} alt='icon-instagram' />
            <p>@ServiciosElSanty</p>
          </li>
          <li className='content'>
            <img src={mailIcon} alt='icon-mail' />
            <p>servicioselsanty@gmail.com</p>
          </li>
        </ul>
        </div>
        <div id='form' class="contact-form-section">
          <h1>¡PEDI TU PRESUPUESTO!</h1>
          <form action="https://formsubmit.co/servicioselsanty@gmail.com" method="POST" id="contact-form">
            <h3>Nombre completo</h3>
            <input type="text" name="nombre" required />
            <h3>Email</h3>
            <input type="email" name="email"/>
            <h3>Telefono</h3>
            <input type="number" name="telefono" required />
            <h3>Asunto</h3>
            <input type="text" name="asunto" placeholder='¿Que servicio buscas?' required />
            <h3>Mensaje</h3>
            <textarea name="mensaje" placeholder="Contanos qué necesitás" required></textarea>
            <input type="hidden" name="_next" value="http://localhost:3000"></input>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
      <div className='bottom-separator' />
    </div>
  )
}
