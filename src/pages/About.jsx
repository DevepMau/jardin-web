import React from 'react';
import './About.css';
import groupPhoto from '../assets/group-photo.jpg';  // Imagen del grupo de trabajadores
import confianzaIcon from '../assets/fruit.png';
import compromisoIcon from '../assets/fruit.png';
import calidadIcon from '../assets/fruit.png';

export default function About() {
  return (
    <div className="about-container">

      {/* Sección superior con imagen y título */}
      <section className="about-hero">
        <h1>PROGRESANDO JUNTOS</h1>
      </section>

      {/* Segunda sección: descripción + foto grupo */}
      <section className="about-description">
        <div className="text">
          <hr/>
          <h2>Quiénes somos</h2>
          <p>
            Somos un emprendimiento familiar dedicado al cuidado y mantenimiento integral de jardines y espacios exteriores. 
            Con años de experiencia, nuestro equipo está comprometido a brindar servicios de calidad con pasión y profesionalismo.
          </p>
          <hr/>
        </div>
        <div className="image">
          <img src={groupPhoto} alt="Equipo de trabajo" />
        </div>
      </section>

      {/* Tercera sección: valores */}
      <section className="about-values">
        <h2>Nuestros Valores</h2>
        <div className="values-list">
          <div className="value-item">
            <img src={confianzaIcon} alt="Confianza" />
            <h3>Confianza</h3>
          </div>
          <div className="value-item">
            <img src={compromisoIcon} alt="Compromiso" />
            <h3>Compromiso</h3>
          </div>
          <div className="value-item">
            <img src={calidadIcon} alt="Calidad" />
            <h3>Calidad</h3>
          </div>
          {/* Podés agregar más valores aquí */}
        </div>
      </section>

    </div>
  );
}