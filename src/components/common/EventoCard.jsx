import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function EventoCard({ evento }) {
  const { t } = useTranslation();
  if (!evento) return null;

  // Imagen azul clara para diferenciar los eventos
  const imageUrl = `https://placehold.co/320x180/4a8deb/FFF?text=${encodeURIComponent(evento.titulo)}`;

  return (
    <div className="uni-card uni-card-centered">
      
      {/* LA IMAGEN EN LA PARTE SUPERIOR */}
      <div className="uni-card-image-container">
        <img src={imageUrl} alt={evento.titulo} className="uni-card-img" />
      </div>

      <div className="uni-card-content">
        <h3>{evento.titulo}</h3>
        <p className="uni-card-desc">
          <strong>{t('ofertas_eventos.date') || "Fecha"}:</strong> {evento.fecha}<br/>
          <strong>{t('ofertas_eventos.time') || "Hora"}:</strong> {evento.hora}<br/>
          <strong>{t('ofertas_eventos.place') || "Lugar"}:</strong> {evento.lugar}
        </p>
      </div>
      
      {/* FOOTER TOTALMENTE CENTRADO */}
      <div className="uni-card-footer-centered">
        <span className="uni-card-date">{t('ofertas_eventos.free_entry') || "Entrada libre"}</span>
        <Link to={`/eventos/${evento.id}`} className="uni-card-link">
          {t('ofertas_eventos.see_more') || "Ver más"} &#10095;
        </Link>
      </div>
    </div>
  );
}