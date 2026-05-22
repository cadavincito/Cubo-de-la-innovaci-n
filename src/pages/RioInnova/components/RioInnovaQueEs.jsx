import React from 'react';
import { useTranslation } from 'react-i18next';
import './RioInnovaQueEs.css';

export default function RioInnovaQueEs() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="rinnova-quees-section">
      <div className="rinnova-quees-header">
        
        {/* Título principal */}
        <h2 className="rinnova-title-sync">
          {isEnglish ? (
            <>What is an <span className="title-highlight-sync">Open Innovation</span> Lab?</>
          ) : (
            <>¿Qué es un Laboratorio de <span className="title-highlight-sync">Innovación Abierta</span>?</>
          )}
        </h2>

        {/* Descripción con las palabras clave resaltadas */}
        <p className="rinnova-quees-desc">
          {isEnglish ? (
            <>It is an <span className="rinnova-highlight">Open Innovation</span> Laboratory that connects the government with companies and academia to solve strategic city-region challenges, through collaborative processes of <span className="rinnova-highlight">innovation</span> and <span className="rinnova-highlight">technological</span> development, generating social and economic impact in Eastern Antioquia.</>
          ) : (
            <>Es un Laboratorio de <span className="rinnova-highlight">Innovación Abierta</span> que conecta al gobierno con las empresas y la academia para resolver desafíos estratégicos de ciudad-región, mediante procesos colaborativos de <span className="rinnova-highlight">innovación</span> y desarrollo <span className="rinnova-highlight">tecnológico</span>, que generen impacto social y económico en el Oriente Antioqueño.</>
          )}
        </p>

      </div>

      <div className="rinnova-cards-container">
        {/* Tarjeta 1: Laboratorio */}
        <div className="rinnova-info-card">
          <div className="rinnova-card-icon">🔬</div>
          <h3>{isEnglish ? "Laboratory" : "Laboratorio"}</h3>
          <p>
            {isEnglish
              ? "Physical and/or virtual space that articulates human, technological, and methodological capabilities to co-create solutions to public or business challenges."
              : "Espacio físico y/o virtual que articula capacidades humanas, tecnológicas y metodológicas para co-crear soluciones a desafíos públicos o empresariales."}
          </p>
        </div>

        {/* Tarjeta 2: Innovación */}
        <div className="rinnova-info-card">
          <div className="rinnova-card-icon">💡</div>
          <h3>{isEnglish ? "Innovation" : "Innovación"}</h3>
          <p>
            {isEnglish
              ? "Process of creating value and generating impact through the implementation of new ideas, products, or solutions."
              : "Proceso de crear valor y generar impacto mediante la implementación de nuevas ideas, productos o soluciones."}
          </p>
        </div>

        {/* Tarjeta 3: Abierta */}
        <div className="rinnova-info-card">
          <div className="rinnova-card-icon">🤝</div>
          <h3>{isEnglish ? "Open" : "Abierta"}</h3>
          <p>
            {isEnglish
              ? "Inter-institutional collaboration (university-company-state-society) with a citizen focus. Co-creation and experimentation."
              : "Colaboración interinstitucional universidad-empresa-estado-sociedad Enfoque ciudadano. Co-creación y experimentación."}
          </p>
        </div>
      </div>
    </section>
  );
}