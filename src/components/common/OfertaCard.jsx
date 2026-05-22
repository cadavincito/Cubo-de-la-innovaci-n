import React from 'react';
import { useTranslation } from 'react-i18next'; // IMPORTANTE: Importamos el traductor
import './OfertaCard.css';

export default function OfertaCard({ oferta }) {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  if (!oferta) return null;

  // MAGIA: Elegimos el bloque de texto dependiendo del idioma activo
  const content = isEnglish ? oferta.en : oferta.es;

  return (
    <div className="oferta-card">
      <div className="oferta-card-header">
        {oferta.image ? (
            <img src={oferta.image} alt={content.title} className="oferta-card-img" />
        ) : (
            <div style={{width:'100%', height:'100%', backgroundColor:'#eee'}}></div>
        )}
        <span className="oferta-card-badge">{content.category}</span>
      </div>

      <div className="oferta-card-body">
        <div className="oferta-card-date">
          <span>📅 {content.date}</span>
        </div>
        <h3 className="oferta-card-title">{content.title}</h3>
        <p className="oferta-card-desc">{content.description}</p>
        
        <a href={oferta.link} target="_blank" rel="noopener noreferrer" className="oferta-card-link">
          {/* Traducimos también el texto del botón directamente aquí */}
          {isEnglish ? "Register " : "Inscribirse "} <span>→</span>
        </a>
      </div>
    </div>
  );
}