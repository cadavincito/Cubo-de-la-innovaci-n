import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Importamos la herramienta de idiomas
import './ServiciosHub.css';

export default function ServiciosHub() {
  
  // 2. Extraemos el idioma actual
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="servicios-hub-section">
      <div className="servicios-hub-header">
        <h2 className="sh-title">
          {isEnglish ? "HubTICs Action Lines" : "Líneas de Acción HubTICs"}
        </h2>
        <p className="sh-subtitle">
          {isEnglish 
            ? "Two strategic approaches to connect our talent with the future of the territory."
            : "Dos enfoques estratégicos para conectar nuestro talento con el futuro del territorio."
          }
        </p>
      </div>

      <div className="servicios-hub-accordion">
        
        {/* TARJETA 1: OBSERVATORIO */}
        <div className="sh-card observatorio-bg">
          <div className="sh-card-overlay"></div>
          <div className="sh-card-content">
            <h3 className="sh-card-title">
              {isEnglish ? "STI Observatory" : "Observatorio CTeI"}
            </h3>
            
            <div className="sh-card-hidden-info">
              <p>
                {isEnglish
                  ? "The Rionegro STI Observatory aims to strengthen strategic decision-making through the generation, analysis, and visualization of information on science, technology, and innovation in the municipality. It consolidates indicators, projects, ecosystem actors, investment, and local technological capabilities. Furthermore, it articulates municipal and national data to guide public policies, competitiveness, and knowledge-based development."
                  : "El Observatorio de CTeI de Rionegro tiene como objetivo fortalecer la toma de decisiones estratégicas mediante la generación, análisis y visualización de información sobre ciencia, tecnología e innovación en el municipio. Consolida indicadores, proyectos, actores del ecosistema, inversión y capacidades tecnológicas locales. Además, articula datos municipales y nacionales para orientar políticas públicas, competitividad y desarrollo basado en conocimiento."
                }
              </p>
              <Link to="/servicios/observatorio" className="sh-btn">
                {isEnglish ? "Explore Observatory" : "Explorar Observatorio"}
              </Link>
            </div>
          </div>
        </div>

        {/* TARJETA 2: RIONEGRO SMART CITY */}
        <div className="sh-card smartcity-bg">
          <div className="sh-card-overlay"></div>
          <div className="sh-card-content">
            <h3 className="sh-card-title">Rionegro Smart City</h3>
            
            <div className="sh-card-hidden-info">
              <p>
                {isEnglish
                  ? "We seek the strategic use of technology, both our own and from the public-private ecosystem, to improve the quality of life in Rionegro. It integrates real-time data to optimize mobility, security, environment, and public services, strengthening evidence-based decision-making. Thus, digital innovation becomes an engine for well-being, sustainability, and territorial competitiveness."
                  : "Buscamos el uso estratégico de tecnología, propia y del ecosistema público-privado, para mejorar la calidad de vida en Rionegro. Integra datos en tiempo real para optimizar movilidad, seguridad, ambiente y servicios públicos, fortaleciendo la toma de decisiones basada en evidencia. Así, la innovación digital se convierte en motor de bienestar, sostenibilidad y competitividad territorial."
                }
              </p>
              <Link to="/servicios/smartcity" className="sh-btn">
                {isEnglish ? "Explore Smart City" : "Explorar Smart City"}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}