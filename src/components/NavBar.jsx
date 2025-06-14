import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png';

export default function NavBar () {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <a href="#home">
                    <img src={logo} alt="Logo" />
                </a>
            </div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
            </div>
            <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#about">Nosotros</a></li>
                    <li><a href="#contact">Contacto</a></li>
                    <li>
                        <a className='btn-budget' href="#form">
                            <button>Presupuesto</button>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};
