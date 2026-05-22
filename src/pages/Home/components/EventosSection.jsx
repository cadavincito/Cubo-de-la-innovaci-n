import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { eventosData } from '../../../constants/eventosData';
import EventoCard from '../../../components/common/EventoCard';
import './EventosSection.css';

export default function EventosSection() {
  const carouselRef = useRef(null);

  const scroll = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="eventos-section">
      <div className="eventos-container">
        
        {/* Columna Izquierda (Fija) */}
        <div className="eventos-sidebar">
          <h2 className="eventos-title">Próximos<br/>Eventos</h2>
          <Link to="/eventos" className="btn-eventos">Ver más eventos</Link>
        </div>

        {/* Columna Derecha (Deslizable) */}
        <div className="eventos-carousel-area">
          <div className="eventos-scroll-container" ref={carouselRef}>
            {eventosData?.map(evento => (
              <div className="evento-card-wrapper" key={evento.id}>
                <EventoCard evento={evento} />
              </div>
            ))}
          </div>
          
          {/* Flecha verde flotante como en tu imagen */}
          <button className="carousel-arrow right-arrow-events" onClick={scroll}>
            &#10095;
          </button>
        </div>

      </div>
    </section>
  );
}