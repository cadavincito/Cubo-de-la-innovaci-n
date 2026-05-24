import React from 'react';
import { useTranslation } from 'react-i18next';
import './OfertaCard.css';

const OFERTA_IMAGES = {
  'convocatoria-alimentos.webp': new URL('../../assets/images/convocatoria-alimentos.webp', import.meta.url).href,
  'canvataller.webp': new URL('../../assets/images/canvataller.webp', import.meta.url).href,
  'Curso25.webp': new URL('../../assets/images/Curso25.webp', import.meta.url).href,
  'Curso26.webp': new URL('../../assets/images/Curso26.webp', import.meta.url).href,
};

function resolveOfertaImage(image) {
  if (!image) return null;
  return OFERTA_IMAGES[image] ?? image;
}

export default function OfertaCard({ oferta }) {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  if (!oferta) return null;

  const content = isEnglish ? oferta.en : oferta.es;
  const imageSrc = resolveOfertaImage(oferta.image);

  return (
    <div className="oferta-card">
      <div className="oferta-card-header">
        {imageSrc ? (
            <img src={imageSrc} alt={content.title} className="oferta-card-img" />
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
        
        <a href={oferta.link?.trim()} target="_blank" rel="noopener noreferrer" className="oferta-card-link">
          {isEnglish ? "Register " : "Inscribirse "} <span>→</span>
        </a>
      </div>
    </div>
  );
}