import React from 'react'
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#gallery">Galería</a></li>
        <li><a href="#about">Nosotros</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
};
