import React from 'react';
import './About.css';
import groupPhoto from '../assets/imageAbout/team.jpg'; 
import missionPhoo from '../assets/imageAbout/mission.jpg';
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
          <h2>¿Quiénes somos?</h2>
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

      {/* Tercera sección: descripción + foto mision */}
      <section className="about-mision">
        <div className="image">
          <img src={missionPhoo} alt="Equipo de trabajo" />
        </div>
        <div className="text">
          <hr/>
          <h2>Mision/Vision</h2>
          <p>
            En El Santy, cuidamos tu patio como si fuera el nuestro. Nos dedicamos con ganas a cortar el pasto, 
            podar y dejar los espacios verdes bien prolijos, para que vos puedas disfrutar sin preocuparte.
          </p>
          <p>
            Queremos ser la opción número uno del barrio cuando alguien piense en cortar el pasto o mantener su jardín. 
            Crecer de a poco, con trabajo honesto, buena onda y haciendo bien las cosas.
          </p>
          <hr/>
        </div>
      </section>

      {/* Cuarta sección: valores */}
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