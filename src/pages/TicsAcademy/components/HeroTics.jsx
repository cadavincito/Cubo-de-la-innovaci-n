import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './HeroTics.css'; // 👈 Importamos su CSS exclusivo

export default function HeroTics() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="hero-tics-wrapper">
      {/* Elementos de fondo temáticos (Código / Tecnología) que se mantienen */}
      <div className="hero-tech-shape shape-1">&lt;/&gt;</div>
      <div className="hero-tech-shape shape-2">&#123; &#125;</div>
      <div className="hero-tics-grid-overlay"></div>

      <div className="hero-tics-content">
        {/* Título Principal Impactante */}
        <h1 className="hero-tics-title animate-reveal">
          TICS <span className="hero-tics-academy-highlight">
            {/* Ícono de engranaje moderno SVG flanqueando Academy */}
            <svg className="academy-icon gear-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.46,12.97l1.39,1.08c0.15,0.13 0.2,0.33 0.11,0.51l-1.34,2.32c-0.1,0.18-0.3,0.24-0.49,0.18l-1.77-0.71c-0.38,0.29-0.77,0.53-1.21,0.71l-0.27,1.88c-0.03,0.19-0.19,0.33-0.39,0.33h-2.68c-0.2,0-0.36-0.14-0.39-0.33l-0.27-1.88c-0.44-0.18-0.83-0.42-1.21-0.71l-1.77,0.71c-0.19,0.06-0.39,0-0.49-0.18l-1.34-2.32c-0.1-0.18-0.04-0.38 0.11-0.51l1.39-1.08c-0.05-0.31-0.06-0.63-0.06-0.97c0-0.34 0.01-0.66 0.06-0.97l-1.39-1.08c-0.15-0.13-0.2-0.33-0.11-0.51l1.34-2.32c0.1-0.18 0.3-0.24 0.49-0.18l1.77,0.71c0.38-0.29 0.77-0.53 1.21-0.71l0.27-1.88c0.03-0.19 0.19-0.33 0.39-0.33h2.68c0.2,0 0.36,0.14 0.39,0.33l0.27,1.88c0.44,0.18 0.83,0.42 1.21,0.71l1.77-0.71c0.19-0.06 0.39,0 0.49,0.18l1.34,2.32c0.1,0.18 0.04,0.38-0.11,0.51l-1.39,1.08c0.05,0.31 0.06,0.63 0.06,0.97c0,0.34-0.01,0.66-0.06,0.97Z"/>
            </svg>
            Academy
            {/* Ícono de engranaje moderno SVG flanqueando Academy */}
            <svg className="academy-icon gear-icon" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.46,12.97l1.39,1.08c0.15,0.13 0.2,0.33 0.11,0.51l-1.34,2.32c-0.1,0.18-0.3,0.24-0.49,0.18l-1.77-0.71c-0.38,0.29-0.77,0.53-1.21,0.71l-0.27,1.88c-0.03,0.19-0.19,0.33-0.39,0.33h-2.68c-0.2,0-0.36-0.14-0.39-0.33l-0.27-1.88c-0.44-0.18-0.83-0.42-1.21-0.71l-1.77,0.71c-0.19,0.06-0.39,0-0.49-0.18l-1.34-2.32c-0.1-0.18-0.04-0.38 0.11-0.51l1.39-1.08c-0.05-0.31-0.06-0.63-0.06-0.97c0-0.34 0.01-0.66 0.06-0.97l-1.39-1.08c-0.15-0.13-0.2-0.33-0.11-0.51l1.34-2.32c0.1-0.18 0.3-0.24 0.49-0.18l1.77,0.71c0.38-0.29 0.77-0.53 1.21-0.71l0.27-1.88c0.03-0.19 0.19-0.33 0.39-0.33h2.68c0.2,0 0.36,0.14 0.39,0.33l0.27,1.88c0.44,0.18 0.83,0.42 1.21,0.71l1.77-0.71c0.19-0.06 0.39,0 0.49,0.18l1.34,2.32c0.1,0.18 0.04,0.38-0.11,0.51l-1.39,1.08c0.05,0.31 0.06,0.63 0.06,0.97c0,0.34-0.01,0.66-0.06,0.97Z"/>
            </svg>
          </span>
        </h1>
        
        {/* Copy enfocado en cursos y desarrollo de habilidades */}
        <p className="hero-tics-subtitle animate-reveal delay-1">
          {isEnglish 
            ? "Your gateway to the digital future. Discover specialized courses, develop technological skills, and transform your profile for the knowledge economy." 
            : "Tu puerta de entrada al futuro digital. Descubre cursos especializados, desarrolla habilidades tecnológicas y transforma tu perfil para la economía del conocimiento."}
        </p>
        
        {/* Botón de alto impacto conectado a Ofertas */}
        <div className="hero-tics-cta-container animate-reveal delay-2">
          <Link to="/ofertas" className="hero-tics-btn">
            <span className="btn-text">
              {isEnglish ? "Explore Courses" : "Explorar cursos"}
            </span>
            <span className="btn-icon">
              {/* Ícono de flecha SVG moderno */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}