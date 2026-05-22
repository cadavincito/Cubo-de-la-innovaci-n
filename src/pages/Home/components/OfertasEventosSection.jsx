import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import OfertasCarousel from '../../../components/ui/OfertasCarousel'; 
import './OfertasEventosSection.css'; // ¡Importamos el nuevo CSS!

export default function OfertasEventosSection() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="ofertas-section-container">
      
      {/* TEXTOS DE ARRIBA */}
      <div className="ofertas-section-header">
        <h2>{isEnglish ? "Offers and Calls" : "Ofertas y Convocatorias"}</h2>
        <p>
          {isEnglish 
            ? "Boost your skills with our courses, workshops, and programs designed for the innovation ecosystem." 
            : "Potencia tus habilidades con nuestros cursos, talleres y programas diseñados para el ecosistema de innovación."}
        </p>
      </div>

      {/* CARRUSEL */}
      <OfertasCarousel />

      {/* BOTÓN DE ABAJO */}
      <div className="ofertas-section-footer">
        <Link to="/ofertas" className="btn-ver-mas">
          {isEnglish ? "See all offers" : "Ver más ofertas"}
        </Link>
      </div>

    </section>
  );
}