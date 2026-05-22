import React, { useRef } from 'react';
import { ofertasData } from '../../constants/ofertasData';
import OfertaCard from '../common/OfertaCard';
import './OfertasCarousel.css';

export default function OfertasCarousel() {
  const carouselRef = useRef(null);

  // 1. ORDENAR POR FECHA (Las más próximas/recientes primero)
  // getTime() convierte la fecha a números para que React pueda ordenarlas
  const ofertasOrdenadas = [...ofertasData].sort((a, b) => {
    return new Date(b.fechaOrden).getTime() - new Date(a.fechaOrden).getTime();
  });

  // 2. FUNCIÓN DE LAS FLECHAS
  const scroll = (direction) => {
    if (carouselRef.current) {
      // clientWidth toma el ancho exacto visible (las 3 tarjetas) y desliza ese mismo bloque
      const scrollAmount = carouselRef.current.clientWidth; 
      carouselRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <div className="ofertas-carousel-wrapper">
      {/* FLECHA IZQUIERDA */}
      <button className="carousel-arrow left-arrow" onClick={() => scroll('left')}>&#8249;</button>
      
      {/* CONTENEDOR DE TARJETAS */}
      <div className="ofertas-scroll-container" ref={carouselRef}>
        {ofertasOrdenadas.map((oferta) => (
          <OfertaCard key={oferta.id} oferta={oferta} />
        ))}
      </div>

      {/* FLECHA DERECHA */}
      <button className="carousel-arrow right-arrow" onClick={() => scroll('right')}>&#8250;</button>
    </div>
  );
}