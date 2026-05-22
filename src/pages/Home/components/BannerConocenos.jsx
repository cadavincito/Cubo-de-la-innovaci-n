import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Importamos el gancho de traducción
import './BannerConocenos.css';
import logoCuboIcono from "../../../assets/images/logo-cubo-icono.webp";

const BannerConocenos = () => {
  // 2. Activamos la función de traducción (t)
  const { t } = useTranslation();

  return (
    <section className="banner-conocenos">
      <div className="banner-conocenos-bg-effect"></div>
      
      <div className="banner-conocenos-container">
        <div className="banner-conocenos-content-area">
          <h2 className="banner-conocenos-title">
            {/* 3. Reemplazamos los textos por sus llaves del diccionario */}
            {t('banner_conocenos.title_1')} 
            <span className="highlight-blue">{t('banner_conocenos.title_highlight')}</span> 
            {t('banner_conocenos.title_2')}
          </h2>
          
          <h3 className="banner-conocenos-subtitle">
            {t('banner_conocenos.subtitle')}
          </h3>
          
          <p className="banner-conocenos-description">
            {t('banner_conocenos.desc')}
          </p>
          
          <Link to="/conocenos" className="banner-conocenos-btn">
            {t('banner_conocenos.btn')}
          </Link>
        </div>

        <div className="banner-conocenos-logo-area">
          <img src={logoCuboIcono} alt="Isotipo Cubo de la Innovación" className="banner-cubo-logo" />
        </div>
      </div>
    </section>
  );
};

export default BannerConocenos;