import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

// Asegúrate de que la ruta de la imagen sea correcta dependiendo de dónde guardes este archivo
import logoCubo from '../../assets/images/logo-cubo.png'; 

export default function HeroBannerPrincipal() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video" src="/hero-video.mp4" />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={logoCubo} alt="Cubo de la Innovación" className="hero-logo-white" />
        
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="hero-buttons">
          {/* Borramos el Link de conocenos y dejamos solo este: */}
          <Link to="/espacios" className="hero-btn hero-btn-secondary">
            {t('hero.btn_emprendedor')}
          </Link>
          <Link to="/espacios" className="hero-btn hero-btn-secondary">
            {t('hero.btn_empresario')}
          </Link>
        </div>
      </div>
    </section>
  );
}