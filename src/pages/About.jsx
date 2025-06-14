import React from 'react';
import './About.css';
import Carousel from '../components/Carousel';
import confianzaIcon from '../assets/imageAbout/imageValues/confianza.png';
import compromisoIcon from '../assets/imageAbout/imageValues/compromiso.png';
import calidadIcon from '../assets/imageAbout/imageValues/calidad.png';
import pasionIcon from '../assets/imageAbout/imageValues/pasion.png';
import versatilidadIcon from '../assets/imageAbout/imageValues/versatilidad.png';
import cercaniaIcon from '../assets/imageAbout/imageValues/cercania.png';

export default function About() {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>PROGRESANDO JUNTOS</h1>
      </section>
      <section className='about-body'>
        <Carousel />
      </section>
      {/* Tercera sección: valores */}
      <section className="about-values">
        <h2>NUESTROS VALORES</h2>
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