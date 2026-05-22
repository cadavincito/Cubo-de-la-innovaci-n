import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CuboInnovacion.css'; 

// Importa tus imágenes desde assets
import imgCuboHero from '../../../assets/images/cuboo.webp';
import imgCuboInfo from '../../../assets/images/cuboo.webp'; // Imagen para la zona de texto

export default function CuboInnovacion() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className="cubo-detail-page">
      
      {/* 1. MÍGAS DE PAN */}
      <nav className="cubo-breadcrumb">
        <Link to="/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </Link>
        <span className="cubo-separator">{'>'}</span>
        <Link to="/espacios">{isEnglish ? "Spaces" : "Espacios"}</Link>
        <span className="cubo-separator">{'>'}</span>
        <span className="cubo-current">{isEnglish ? "Innovation Cube" : "Cubo de la Innovación"}</span>
      </nav>

      {/* 2. HERO BANNER */}
      <header 
        className="cubo-hero-card" 
        style={{ backgroundImage: `url(${imgCuboHero})` }}
      >
        <div className="cubo-hero-overlay"></div>
        
        <div className="cubo-hero-content">
          <div className="cubo-hero-icon">
            {/* Ícono de un Cubo 3D */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="55" height="55">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h1 className="cubo-hero-title">
            {isEnglish ? "Innovation Cube" : "Cubo de la Innovación"}
          </h1>
        </div>
      </header>

      {/* 3. SECCIÓN DE INFORMACIÓN */}
      <section className="cubo-info-section">
        <div className="cubo-info-image-wrapper">
          <img src={imgCuboInfo} alt="Cubo de la Innovación Interior" className="cubo-info-img" />
        </div>
        
        <div className="cubo-info-text-wrapper">
          <div className="cubo-info-icon">
            {/* Ícono de bombillo / ideas */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.45.62 2.72 1.5 3.5.76.76 1.23 1.52 1.41 2.5"></path>
            </svg>
          </div>
          
          <p className="cubo-lead-text">
            {isEnglish 
              ? "The central ecosystem where great ideas become reality. We connect talent, technology, and corporate strategy in one place."
              : "El ecosistema central donde las grandes ideas se transforman en realidad. Conectamos talento, tecnología y estrategia corporativa en un solo lugar."}
          </p>
          
          <p className="cubo-body-text">
            {isEnglish 
              ? "This is the heart of our infrastructure. A space specifically designed to host high-impact events, hackathons, and open innovation processes that boost competitiveness and create real value based on knowledge."
              : "Este es el corazón de nuestra infraestructura. Un espacio diseñado específicamente para albergar eventos de alto impacto, hackathons y procesos de innovación abierta que impulsan la competitividad y crean valor real basado en conocimiento."}
          </p>
        </div>
      </section>

    </div>
  );
}