import React from 'react';
import './About.css';
import groupPhoto from '../assets/imageAbout/team.jpg'; 
import mision from '../assets/imageAbout/mision.png';
import vision from '../assets/imageAbout/vision.png';
import confianzaIcon from '../assets/imageAbout/imageValues/confianza.png';
import compromisoIcon from '../assets/imageAbout/imageValues/compromiso.png';
import calidadIcon from '../assets/imageAbout/imageValues/calidad.png';
import pasionIcon from '../assets/imageAbout/imageValues/pasion.png';
import versatilidadIcon from '../assets/imageAbout/imageValues/versatilidad.png';
import cercaniaIcon from '../assets/imageAbout/imageValues/cercania.png';

export default function About() {
  return (
    <div className="about-container">

      {/* Sección superior con imagen y título */}
      <section className="about-hero">
        <h1>PROGRESANDO JUNTOS</h1>
      </section>
      <section className='about-body'>

        {/* Segunda sección: seccion mision / seccion equipo / seccion vision */}
        <section className="about-mision">
          <div className="text">
            <h2>MISION</h2>
            <hr />
            <img src={mision} alt="Icono de mision" />
            <p>
              En El Santy, cuidamos tu patio como si fuera el nuestro. Nos dedicamos con ganas a cortar el pasto, 
              podar y dejar los espacios verdes bien prolijos, para que puedas disfrutar sin preocuparte.
            </p>
          </div>
        </section>

        <section className="about-description">
          <div className="text">
            <h2>EQUIPO</h2>
            <hr />
            <p>
              El Santy es un emprendimiento familiar dedicado al corte de césped, podas menores y mantenimiento de jardines. 
              Nos enfocamos en brindar un servicio responsable, prolijo y con cercanía, cuidando cada espacio verde con respeto 
              por la naturaleza y el trabajo bien hecho.
            </p>
          </div>
          <div className="image">
            <img src={groupPhoto} alt="Equipo de trabajo" />
          </div>
        </section>

        <section className="about-vision">
          <div className="text">
            <h2>VISION</h2>
            <hr />
            <img src={vision} alt="Icono de vision" />
            <p>
              Queremos ser la opción número uno del barrio cuando alguien piense en cortar el pasto o mantener su jardín. 
              Crecer de a poco, con trabajo honesto, buena onda y haciendo bien las cosas.
            </p>
          </div>
        </section>
      </section>

      {/* Tercera sección: valores */}
      <section className="about-values">
        <h2>Nuestros Valores</h2>
        <div className="values-list">
          <div className="value-item">
            <div className='item-content'>
              <h3>Confianza</h3>
              <hr />
              <img src={confianzaIcon} alt="Confianza" />
              <p>
                Buscamos generar relaciones duraderas basadas en la honestidad y la transparencia.
              </p>
            </div>
          </div>

          <div className="value-item">
            <div className='item-content'>
              <h3>Compromiso</h3>
              <hr />
              <img src={compromisoIcon} alt="Compromiso" />
              <p>
                Nos dedicamos con seriedad y responsabilidad al trabajo, como si fuera en nuestro propio hogar.
              </p>
            </div>
          </div>

          <div className="value-item">
            <div className='item-content'>
              <h3>Calidad</h3>
              <hr />
              <img src={calidadIcon} alt="Calidad" />
              <p>
                Cuidamos cada detalle para ofrecer resultados duraderos y bien hechos.
              </p>
            </div>
          </div>

          <div className="value-item">
            <div className='item-content'>
              <h3>Pasion</h3>
              <hr />
              <img src={pasionIcon} alt="Pasion" />
              <p>
                Nos encanta embellecer y cuidar los espacios. Esa pasión se nota en cada proyecto.
              </p>
            </div>
          </div>

          <div className="value-item">
            <div className='item-content'>
              <h3>Cercania</h3>
              <hr />
              <img src={cercaniaIcon} alt="Cercania" />
              <p>
                Somos una empresa familiar que escucha y acompaña a sus clientes con atención y calidez.
              </p>
            </div>
          </div>

          <div className="value-item">
            <div className='item-content'>
              <h3>Versatilidad</h3>
              <hr />
              <img src={versatilidadIcon} alt="Versatilidad" />
              <p>
                Nos adaptamos a lo que necesitas: desde jardinería hasta reparaciones del hogar.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}