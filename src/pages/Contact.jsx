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
      <div className='contact-data'>
        <h1>CONTACTANOS</h1>
        <hr />
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
    <div class="contact-form-section">
      <h1>¡PEDI TU PRESUPUESTO!</h1>
      <form id="contact-form">
        <input type="text" name="nombre" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu email" required />
        <input type="text" name="localidad" placeholder="Localidad donde vives" />
        <input type="text" name="direccion" placeholder="Tu direccion" />
        <textarea name="mensaje" placeholder="Contanos qué necesitás" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
  )
}
