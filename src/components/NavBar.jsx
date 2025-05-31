import React from 'react'
import './NavBar.css';
import logo from '../assets/logo.png';

export default function NavBar() {
  return (
    <nav className="navbar">
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <img src={logo} alt="Logo" />
            </div>
            <div className='navbar-links'>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
  );
};
