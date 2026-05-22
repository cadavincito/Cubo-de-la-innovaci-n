import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LinesTicsLand() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="tics-land-lines-section">
      <div className="tics-land-lines-container">
        
        {/* Título de la Sección */}
        <div className="lines-header animate-reveal">
          <h2 className="tics-land-section-title text-center">
            {isEnglish ? "Lines of Action" : "Líneas de Acción"}
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* Grid de las 3 Tarjetas Ribbon */}
        <div className="lines-grid">
          
          {/* Tarjeta 1: I+D+i */}
          <div className="ribbon-card animate-reveal delay-1">
            <div className="ribbon-card-content">
              <h3 className="ribbon-card-title">
                {isEnglish ? "R&D&I Projects" : "Proyectos de I+D+i"}
              </h3>
              <p className="ribbon-card-text">
                {isEnglish 
                  ? "Coordinate the structuring and management of Research, Development, and Innovation (R&D&I) initiatives that respond to the technological challenges of strategic sectors." 
                  : "Articular la estructuración y gestión de iniciativas de Investigación, Desarrollo e Innovación (I+D+i) que den respuesta a los retos tecnológicos de los sectores estratégicos."}
              </p>
            </div>
            {/* Cinta fluida (Lazo izquierdo) */}
            <div className="ribbon-graphic">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="ribbon-svg">
                <defs>
                  <linearGradient id="grad-ribbon-1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00325b" /> {/* Azul institucional */}
                    <stop offset="100%" stopColor="#007A3B" /> {/* Verde oscuro */}
                  </linearGradient>
                </defs>
                <path d="M -5,80 C 15,80 25,35 45,35 C 65,35 65,70 50,70 C 35,70 35,45 60,45 C 80,45 90,80 105,80" fill="none" stroke="url(#grad-ribbon-1)" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Tarjeta 2: Talento STEAM */}
          <div className="ribbon-card animate-reveal delay-2">
            <div className="ribbon-card-content">
              <h3 className="ribbon-card-title">
                {isEnglish ? "STEAM Talent" : "Talento STEAM"}
              </h3>
              <p className="ribbon-card-text">
                {isEnglish 
                  ? "Boost the development of advanced human capital by fostering STEAM+ skills, preparing citizens to lead and adapt to the dynamics of the Fourth Industrial Revolution." 
                  : "Impulsar el desarrollo de capital humano avanzado mediante el fomento de competencias STEAM+, preparando a los ciudadanos para liderar y adaptarse a las dinámicas de la Cuarta Revolución Industrial (4RI)."}
              </p>
            </div>
            {/* Cinta fluida (Onda central conectora) */}
            <div className="ribbon-graphic">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="ribbon-svg">
                <defs>
                  <linearGradient id="grad-ribbon-2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#007A3B" /> {/* Verde oscuro */}
                    <stop offset="100%" stopColor="#00A651" /> {/* Verde vibrante */}
                  </linearGradient>
                </defs>
                <path d="M -5,80 C 20,80 30,30 50,30 C 70,30 80,75 105,75" fill="none" stroke="url(#grad-ribbon-2)" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Tarjeta 3: Fortalecimiento Empresarial */}
          <div className="ribbon-card animate-reveal delay-3">
            <div className="ribbon-card-content">
              <h3 className="ribbon-card-title">
                {isEnglish ? "Business Strengthening" : "Fortalecimiento Empresarial"}
              </h3>
              <p className="ribbon-card-text">
                {isEnglish 
                  ? "Design and execute the intervention route that accelerates the digital and competitive maturity of the business fabric." 
                  : "Diseñar y ejecutar la ruta de intervención que acelere la madurez digital y competitiva del tejido empresarial."}
              </p>
            </div>
            {/* Cinta fluida (Lazo final ascendente) */}
            <div className="ribbon-graphic">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="ribbon-svg">
                <defs>
                  <linearGradient id="grad-ribbon-3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00A651" /> {/* Verde vibrante */}
                    <stop offset="100%" stopColor="#33FF8A" /> {/* Verde luminoso */}
                  </linearGradient>
                </defs>
                <path d="M -5,75 C 20,75 30,25 55,25 C 75,25 80,65 65,65 C 50,65 45,40 75,35 C 95,30 100,10 105,0" fill="none" stroke="url(#grad-ribbon-3)" strokeWidth="12" strokeLinecap="round" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}