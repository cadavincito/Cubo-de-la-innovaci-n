import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './MakerSpace.css'; //

// Las rutas asumen que estás en src/pages/Espacios/components/
import imgMakerHero from '../../../assets/images/cuboo.webp'; 
import imgMakerInfo from '../../../assets/images/cuboo.webp'; 

export default function MakerSpace() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className="maker-detail-page">
      
      {/* 1. MÍGAS DE PAN */}
      <nav className="maker-breadcrumb">
        <Link to="/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        </Link>
        <span className="maker-separator">{'>'}</span>
        <Link to="/espacios">{isEnglish ? "Spaces" : "Espacios"}</Link>
        <span className="maker-separator">{'>'}</span>
        <span className="maker-current">Maker Space</span>
      </nav>

      {/* 2. HERO BANNER */}
      <header 
        className="maker-hero-card" 
        style={{ backgroundImage: `url(${imgMakerHero})` }}
      >
        <div className="maker-hero-overlay"></div>
        
        <div className="maker-hero-content">
          <div className="maker-hero-icon">
            <span>M</span>
          </div>
          <h1 className="maker-hero-title">
            Maker Space
          </h1>
        </div>
      </header>

      {/* 3. SECCIÓN DE INFORMACIÓN */}
      <section className="maker-info-section">
        <div className="maker-info-image-wrapper">
          <img src={imgMakerInfo} alt="Maker Space Interior" className="maker-info-img" />
        </div>
        
        <div className="maker-info-text-wrapper">
          <div className="maker-info-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
          </div>
          
          <p className="maker-lead-text">
            {isEnglish 
              ? "At the Maker Space, we have environments for much more than creating: we connect ideas with cutting-edge tools, where prototypes grow and opportunities are activated every day."
              : "En el Maker Space contamos con entornos para mucho más que crear: conectamos ideas con herramientas de última generación, donde los prototipos crecen y las oportunidades se activan cada día."}
          </p>
          
          <p className="maker-body-text">
            {isEnglish 
              ? "Whether you are looking to 3D print components, develop IoT hardware with sensors, or consolidate a physical product, here you will find the infrastructure, machinery, and community that drive your purpose."
              : "Ya sea que busques imprimir componentes en 3D, desarrollar hardware IoT con sensores, o consolidar un producto físico, aquí encuentras la infraestructura, maquinaria y la comunidad que impulsan tu propósito."}
          </p>
        </div>
      </section>

    </div>
  );
}