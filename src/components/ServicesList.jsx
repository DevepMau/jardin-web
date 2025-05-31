import React, { useState } from 'react';
import services from '../utils/ServicesData';
import './ServicesList.css';

export default function ServicesList() {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelect = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-container">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onClick={() => handleSelect(service)}
          >
            <div className="card-image">
                <img src={service.image} alt={service.title} />
                <div className="card-title-overlay">
                    <h3>{service.title}</h3>
                </div>
             </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="service-modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedService.image} alt={selectedService.title} />
            <h3>{selectedService.title}</h3>
            <p>{selectedService.description}</p>
            <button onClick={handleClose}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}