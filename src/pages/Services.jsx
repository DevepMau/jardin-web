import React from 'react'
import ServicesList from '../components/ServicesList'

export default function Services() {
  return (
    <div className='services-page'>
        <div className='top-separator' />
        <ServicesList />
        <div className='bottom-separator' />
    </div>
  )
}
