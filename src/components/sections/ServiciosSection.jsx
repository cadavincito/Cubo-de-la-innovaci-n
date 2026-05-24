import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './ServiciosSection.css';

export default function ServiciosSection({ customTitle, serviceIds }) {
  const { t } = useTranslation();

  const servicios = [
    { id: 'academy', path: 'academy', color: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' },
    { id: 'rioinnova', path: 'rioinnova', color: 'linear-gradient(135deg, #0967a6 0%, #042444 100%)' },
    { id: 'land', path: 'land', color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' },
    { id: 'hub', path: 'hubtics', color: 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)' },
  ];

  const visibleServicios = serviceIds
    ? servicios.filter((s) => serviceIds.includes(s.id))
    : servicios;

  const duplicatedServicios = [...visibleServicios, ...visibleServicios];

  return (
    <section className="servicios-section">
      <div className="servicios-container">
        <div className="servicios-header">
          <h2 className="servicios-title">
            {customTitle || t('servicios_banner.title')}
          </h2>
          <p className="servicios-desc">{t('servicios_banner.desc')}</p>
        </div>

        <div className="servicios-slider-area">
          <div className="servicios-track">
            {duplicatedServicios.map((item, index) => (
              <Link
                to={`/servicios/${item.path}`}
                key={index}
                className="servicio-slide-card"
                style={{ background: item.color }}
              >
                <div className="servicio-card-content">
                  <span className="servicio-icon-arrow">↗</span>
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
