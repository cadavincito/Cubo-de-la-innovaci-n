import React from 'react';
import { useTranslation } from 'react-i18next';
import './HistoriaSection.css';
import fotoEdificio from '../../../assets/images/cuboo.webp'; // Usa la foto real del edificio

export default function HistoriaSection() {
  const { t } = useTranslation();

  return (
    <section className="historia-section">
      <div className="historia-container">
        
        {/* LADO IZQUIERDO: TEXTO */}
        <div className="historia-content">
          <span className="historia-tag">{t('conocenos_page.historia_title')}</span>
          <h2 className="historia-subtitle">{t('conocenos_page.historia_subtitle')}</h2>
          <p className="historia-description">
            {t('conocenos_page.historia_text')}
          </p>
        </div>

        {/* LADO DERECHO: IMAGEN */}
        <div className="historia-image-wrapper">
          <img src={fotoEdificio} alt="Edificio Cubo" className="historia-img" />
          <div className="historia-img-decoration"></div>
        </div>

      </div>
    </section>
  );
}