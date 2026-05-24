import React, { useRef } from 'react';
import ofertasData from '../../constants/ofertasData.json';
import OfertaCard from '../common/OfertaCard';
import './OfertasCarousel.css';

export default function OfertasCarousel() {
  const carouselRef = useRef(null);

  const ofertasOrdenadas = [...ofertasData].sort((a, b) => {
    return new Date(b.fechaOrden).getTime() - new Date(a.fechaOrden).getTime();
  });

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="ofertas-carousel-wrapper">
      <button className="carousel-arrow left-arrow" onClick={() => scroll('left')} type="button" aria-label="Anterior">
        &#8249;
      </button>

      <div className="ofertas-scroll-container" ref={carouselRef}>
        {ofertasOrdenadas.map((oferta) => (
          <OfertaCard key={oferta.id} oferta={oferta} />
        ))}
      </div>

      <button className="carousel-arrow right-arrow" onClick={() => scroll('right')} type="button" aria-label="Siguiente">
        &#8250;
      </button>
    </div>
  );
}
