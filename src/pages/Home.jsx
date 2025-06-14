import React from 'react'
import './Home.css';
import Nombre from '../assets/nombre.png';
import ImageSlider from '../components/ImageSlider';

export default function Home() {
  return (
    <div className='home-container'>
        <div className="text-section">
            <hr />
            <img src={Nombre} alt='nombre' />
            <h1>¡A tu servicio!</h1>
            <p>Nos dedicamos al mantenimiento integral de espacios exteriores, especializados en jardinería,
                corte de césped, poda de árboles y mantenimiento general.
            </p>
            <hr />
            <div className='btn-container-home'>
              <a className='btn-budget' href="#form">
                <button>Presupuesto</button>
              </a>
              <a className='btn-services' href="#list">
                <button>Servicios</button>
              </a>
            </div>
        </div>
        <div className="slider-section">
          <ImageSlider />
        </div>
    </div>
  );
}