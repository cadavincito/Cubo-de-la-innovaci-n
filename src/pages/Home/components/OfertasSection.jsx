import React from 'react';
import { Link } from 'react-router-dom';
import OfertasCarousel from '../../../components/ui/OfertasCarousel';
import ofertasData from '../../../constants/ofertasData.json';
import './OfertasSection.css';

export default function OfertasSection() {
  return (
    <section className="ofertas-section">
      <div className="ofertas-container">
        
        {/* CABECERA ACTUALIZADA */}
        <div className="ofertas-header">
          <div className="ofertas-title-group">
            <h2 className="ofertas-main-title">Ofertas</h2>
            <p className="ofertas-description">
              Potencia tus habilidades con nuestros cursos, talleres y programas diseñados para el ecosistema de innovación.
            </p>
          </div>
          <Link to="/ofertas" className="btn-ver-todas">
            Ver más ofertas
          </Link>
        </div>

        <OfertasCarousel ofertas={ofertasData} />

      </div>
    </section>
  );
}