import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoCubo from '../../assets/images/logo-cubo.png';
import './HeroBannerPrincipal.css';

export default function HeroBannerPrincipal() {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video" src="/hero-video.mp4" />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <img src={logoCubo} alt="Cubo de la Innovación" className="hero-logo-white" />
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <p className="hero-route-text">{t('hero.route_cta')}</p>
        <div className="hero-buttons">
          <Link to="/emprendedor" className="hero-btn hero-btn-secondary">
            {t('hero.btn_emprendedor')}
          </Link>
          <Link to="/empresario" className="hero-btn hero-btn-secondary">
            {t('hero.btn_empresario')}
          </Link>
        </div>
      </div>
    </section>
  );
}
