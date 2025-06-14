import React, {useState} from 'react';
import './Carousel.css';
import groupPhoto from '../assets/imageAbout/team.jpg'; 
import mision from '../assets/imageAbout/mision.png';
import vision from '../assets/imageAbout/vision.png';

export default function Carousel() {
    
    const [currentIndex, setCurrentIndex] = useState(1); // empieza con "Equipo" al centro

    const handleLeft = () => {
        setCurrentIndex((prev) => (prev - 1 + 3) % 3);
    };

    const handleRight = () => {
        setCurrentIndex((prev) => (prev + 1) % 3);
    };

  return (
    <div className="carousel-container">
        <button className="carousel-btn left" onClick={handleLeft}>‹</button>

        <div className="carousel">
            <div className={`card ${currentIndex === 0 ? 'active' : ''}`}>
                <section className="carousel-mision">
                    <h2>MISIÓN</h2>
                    <img src={mision} alt="Icono de mision" />
                    <p>
                    En El Santy, cuidamos tu patio como si fuera el nuestro. Nos dedicamos con ganas a cortar el pasto, 
                    podar y dejar los espacios verdes bien prolijos, para que puedas disfrutar sin preocuparte.
                    </p>
                </section>
            </div>
            <div className={`card ${currentIndex === 1 ? 'active' : ''}`}>
                <section className="carousel-description">
                    <h2>EQUIPO</h2>
                    <img src={groupPhoto} alt="Equipo de trabajo" />
                    <p>
                    El Santy es un emprendimiento familiar dedicado al corte de césped, podas menores y mantenimiento de jardines. 
                    Nos enfocamos en brindar un servicio responsable, prolijo y con cercanía, cuidando cada espacio verde con respeto 
                    por la naturaleza y el trabajo bien hecho.
                    </p>
                </section>
            </div>
            <div className={`card ${currentIndex === 2 ? 'active' : ''}`}>
                <section className="carousel-vision">
                    <h2>VISIÓN</h2>
                    <img src={vision} alt="Icono de vision" />
                    <p>
                    Queremos ser la opción número uno del barrio cuando alguien piense en cortar el pasto o mantener su jardín. 
                    Crecer de a poco, con trabajo honesto, buena onda y haciendo bien las cosas.
                    </p>
                </section>
            </div>
        </div>
    <button className="carousel-btn right" onClick={handleRight}>›</button>
    </div>
  )
}
