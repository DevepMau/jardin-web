import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} EL SANTY. Todos los derechos reservados.</p>
    </footer>
  );
}
