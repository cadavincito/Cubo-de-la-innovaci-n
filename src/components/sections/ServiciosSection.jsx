import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ServiciosSection.css';

export default function ServiciosSection({ customTitle }) {
  const { t } = useTranslation();

  // Datos de las tarjetas: 'id' es para el texto, 'path' es para la URL exacta
  const servicios = [
    { id: 'academy', path: 'academy', color: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }, // Naranja
    { id: 'rioinnova', path: 'rioinnova', color: 'linear-gradient(135deg, #0967a6 0%, #042444 100%)' }, // Azul
    { id: 'land', path: 'land', color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }, // Verde
    { id: 'hub', path: 'hubtics', color: 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)' } // Morado (¡Ajustado a hubtics!)
  ];

  // Duplicamos la lista para que el carrusel sea infinito sin saltos
  const duplicatedServicios = [...servicios, ...servicios];

  return (
    <section className="servicios-section">
      <div className="servicios-container">
        
        {/* LADO IZQUIERDO: TEXTO */}
        <div className="servicios-header">
          <h2 className="servicios-title">
            {customTitle || t('servicios_banner.title')}
          </h2>
          <p className="servicios-desc">{t('servicios_banner.desc')}</p>
        </div>

        {/* LADO DERECHO: CARRUSEL DE TARJETAS */}
        <div className="servicios-slider-area">
          <div className="servicios-track">
            {duplicatedServicios.map((item, index) => (
              <Link 
                to={`/servicios/${item.path}`}  /* USAMOS EL PATH AQUÍ PARA QUE NO FALLE LA RUTA */
                key={index} 
                className="servicio-slide-card"
                style={{ background: item.color }}
              >
                <div className="servicio-card-content">
                  <span className="servicio-icon-arrow">↗</span>
                  {/* USAMOS EL ID AQUÍ PARA MANTENER TUS TRADUCCIONES INTACTAS */}
                  <h3>{t(`servicios_banner.${item.id}_title`)}</h3>
                  <p>{t(`servicios_banner.${item.id}_desc`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}