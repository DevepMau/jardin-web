import React from 'react'
import ServicesList from '../components/ServicesList'

export default function Services() {
  return (
    <div className='services-page'>
        <div className='top-separator' />
        <div className='introduction'>
          <h2>NUESTROS SERVICIOS</h2>
          <hr />
          <div className='invite'>
            <p className='col1'>
              Nos especializamos en el cuidado y mantenimiento de tu hogar y tus espacios al aire libre.
              Confiá en nosotros y descubrí cómo podemos facilitarte la vida.   
            </p>
            <p className='col2'>
              Desde jardinería y mantenimiento de parques y patios, hasta arreglos generales del hogar, 
              estamos para ayudarte a mantener tus espacios siempre en perfectas condiciones.
            </p>
        </div>
      </div>
      <ServicesList />
      <div className='bottom-separator' />
    </div>
  )
}
