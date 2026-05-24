import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SectorsTicsLand() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="tics-land-objective-section">
      <div className="objective-container">
        
        {/* CABECERA (Títulos superiores de la imagen) */}
        <div className="objective-header animate-reveal">
          <h2 className="objective-main-title">
            {isEnglish ? 'Sectors we work with' : 'Sectores en los que trabajamos'}
          </h2>
          <p className="objective-subtitle">
            {isEnglish
              ? 'We help local businesses grow with technology in the sectors that matter most to our region.'
              : 'Acompañamos a empresas locales a crecer con tecnología en los sectores que más mueven nuestra región.'}
          </p>
        </div>

        {/* MAPA MENTAL / DIAGRAMA (Hub and Spoke) */}
        <div className="hub-diagram-wrapper animate-reveal delay-1">
          
          {/* Líneas conectoras animadas en SVG (Fondo) */}
          <svg className="hub-connections-svg" preserveAspectRatio="none">
            <line x1="25%" y1="20%" x2="50%" y2="50%" className="animated-connector" />
            <line x1="25%" y1="80%" x2="50%" y2="50%" className="animated-connector" />
            <line x1="75%" y1="20%" x2="50%" y2="50%" className="animated-connector" />
            <line x1="75%" y1="80%" x2="50%" y2="50%" className="animated-connector" />
          </svg>

          {/* Columna Izquierda */}
          <div className="hub-col left-col">
            <div className="sector-pill">
              <div className="pill-icon">
                {/* Ícono Aeroespacial */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15H9c-1.42 0-2.83-.4-4-1.15l-1.55-1.02a1 1 0 0 1-.22-1.4L8.5 4.5A7.48 7.48 0 0 1 15 2h5a1 1 0 0 1 1 1v5a7.48 7.48 0 0 1-2.5 5.27l-6.93 5.27a1 1 0 0 1-1.4-.22l-1.02-1.55A8.13 8.13 0 0 1 12 15z"/></svg>
              </div>
              <span className="pill-text">{isEnglish ? "AEROSPACE" : "AEROESPACIAL"}</span>
            </div>

            <div className="sector-pill">
              <div className="pill-icon">
                {/* Ícono Bienestar */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <span className="pill-text">{isEnglish ? "WELLNESS" : "BIENESTAR"}</span>
            </div>
          </div>

          {/* Centro (TIC-LAND) */}
          <div className="hub-col center-col">
            <div className="hub-center-node">
              <div className="node-pulse-ring"></div>
              <h3>TIC-LAND</h3>
            </div>
          </div>

          {/* Columna Derecha */}
          <div className="hub-col right-col">
            <div className="sector-pill">
              <div className="pill-icon">
                {/* Ícono Financiero */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <span className="pill-text">{isEnglish ? "FINANCIAL" : "FINANCIERO"}</span>
            </div>

            <div className="sector-pill">
              <div className="pill-icon">
                {/* Ícono Turismo */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
              </div>
              <span className="pill-text">{isEnglish ? "TOURISM" : "TURISMO"}</span>
            </div>
          </div>

        </div>

        {/* FOOTER (Texto inferior de la imagen) */}
        <div className="objective-footer animate-reveal delay-2">
          <p>
            {isEnglish 
              ? "Closing technological gaps and fostering knowledge-based value creation." 
              : "Cerrando brechas tecnológicas y fomentando la creación de valor basada en conocimiento"}
          </p>
        </div>

      </div>
    </section>
  );
}