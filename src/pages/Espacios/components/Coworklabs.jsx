import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Coworklabs.css'; 

// Importa tus imágenes desde assets (asegúrate de tener una foto adicional para la info)
import imgCoworkHero from '../../../assets/images/cuboo.webp';
import imgCoworkInfo from '../../../assets/images/cuboo.webp'; // O el nombre que le pongas a la segunda foto

export default function Coworklabs() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className="cowork-detail-page">
      
      {/* 1. MÍGAS DE PAN */}
      <nav className="cowork-breadcrumb">
        <Link to="/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </Link>
        <span className="cowork-separator">{'>'}</span>
        <Link to="/espacios">{isEnglish ? "Spaces" : "Espacios"}</Link>
        <span className="cowork-separator">{'>'}</span>
        <span className="cowork-current">CoWorklabs</span>
      </nav>

      {/* 2. HERO BANNER */}
      <header 
        className="cowork-hero-card" 
        style={{ backgroundImage: `url(${imgCoworkHero})` }}
      >
        <div className="cowork-hero-overlay"></div>
        
        <div className="cowork-hero-content">
          <div className="cowork-hero-icon">
            {/* Un ícono de red/conexión */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h1 className="cowork-hero-title">
            CoWorklabs
          </h1>
        </div>
      </header>

      {/* 3. SECCIÓN DE INFORMACIÓN */}
      <section className="cowork-info-section">
        <div className="cowork-info-image-wrapper">
          <img src={imgCoworkInfo} alt="CoWorklabs Interior" className="cowork-info-img" />
        </div>
        
        <div className="cowork-info-text-wrapper">
          <div className="cowork-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
          </div>
          
          <p className="cowork-lead-text">
            {isEnglish 
              ? "At CoWorklabs, individual work transforms into collective growth. We design spaces where synergy and networking happen naturally."
              : "En CoWorklabs, el trabajo individual se transforma en crecimiento colectivo. Diseñamos espacios donde la sinergia y el networking suceden de forma natural."}
          </p>
          
          <p className="cowork-body-text">
            {isEnglish 
              ? "Whether you are looking for a dedicated desk, private offices for your team, or equipped meeting rooms, here you will find a dynamic environment surrounded by professionals and companies sharing your vision of innovation."
              : "Ya sea que busques un escritorio dedicado, oficinas privadas para tu equipo o salas de reuniones equipadas, aquí encontrarás un ambiente dinámico rodeado de profesionales y empresas que comparten tu visión de innovación."}
          </p>
        </div>
      </section>

    </div>
  );
}