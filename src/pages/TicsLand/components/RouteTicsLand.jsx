import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Datos con los COLORES EXACTOS de la imagen
const routeData = [
  {
    id: 1, number: "01", title: "IDEACIÓN", color: "#0056b3",
    desc: "Es la fase inicial del proceso de emprendimiento e innovación donde se generan ideas creativas para resolver problemas o satisfacer necesidades. Puede incluir brainstorming, análisis de oportunidades y el diseño de conceptos viables.",
    perfil: "Investigadores o emprendedores visionarios. Altamente técnicos, pero con bajo conocimiento del cliente.",
    icon: <><path d="M9 18h6M10 22h4M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1.5.5 2.5 1.5 3.5.76.76 1.23 1.52 1.41 2.5" /></>
  },
  {
    id: 2, number: "02", title: "PREINCUBACIÓN", color: "#e85d04",
    desc: "Es el periodo en el que se valida la idea de negocio antes de formalizarla como una empresa. Incluye la definición del modelo de negocio, estudios de mercado, prototipado inicial y planes de viabilidad.",
    perfil: "Equipos incipientes desarrollando su primer Producto Mínimo Viable (PMV).",
    icon: <><path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>
  },
  {
    id: 3, number: "03", title: "INCUBACIÓN", color: "#0077b6",
    desc: "Durante esta etapa el emprendedor accede a recursos como asesoría, espacios físicos, formación, conexiones estratégicas. En algunas ocasiones incluye financiamiento inicial o capital semilla para consolidar la empresa.",
    perfil: "Startups con producto listo (TRL 6+), pero que requieren formalizar sus procesos y lograr ventas constantes.",
    icon: <><path d="M13.5 2.5a7.5 7.5 0 0 0-11 11L2 22l4.5-4.5M22 2l-4.5 4.5" /><path d="M11 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></>
  },
  {
    id: 4, number: "04", title: "ACELERACIÓN", color: "#2a9d8f",
    desc: "Un programa diseñado para empresas que ya están operando. Su objetivo es escalar el negocio rápidamente a través de mentorías, financiamiento, acceso a redes y mejoras en procesos clave.",
    perfil: "Empresas maduras (Niveles promedio 6-7). Equipo sólido y procesos estandarizados.",
    icon: <><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></>
  },
  {
    id: 5, number: "05", title: "INTERNACIONALIZACIÓN", color: "#ca6702",
    desc: "Es el proceso mediante el cual una empresa expande sus operaciones a mercados internacionales. Requiere estrategias de adaptación cultural, regulatoria y comercial, además de alianzas en el extranjero.",
    perfil: "Empresas totalmente preparadas para la exportación de servicios tecnológicos.",
    icon: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>
  }
];

export default function RouteTicsLand() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';
  const [activeStep, setActiveStep] = useState(null);

  const openPopup = (step) => setActiveStep(step);
  const closePopup = () => setActiveStep(null);

  return (
    <section className="tics-land-route-section">
      <div className="route-container">
        
        {/* Cabecera idéntica a la imagen */}
        <div className="route-header animate-reveal">
          <div className="route-header-text">
            <h2 className="route-main-title">
              {isEnglish ? "THE ENTREPRENEUR'S " : "LA RUTA DEL "}
              <span className="route-highlight-title">{isEnglish ? "ROUTE" : "EMPRENDEDOR"}</span>
            </h2>
            <p className="route-subtitle">
              {isEnglish 
                ? "The path to turn an innovative idea into a company with global impact." 
                : "El camino para convertir una idea innovadora en una empresa de impacto global."}
            </p>
          </div>
          
          <div className="ebt-info-card">
            <div className="ebt-icon-wrapper">
              <span className="ebt-icon">i</span>
            </div>
            <div className="ebt-info-text">
              <strong>{isEnglish ? "¿What is an EBT?" : "¿Qué es una EBT?"}</strong>
              <p>{isEnglish ? "Technology-Based Company that develops innovative solutions based on scientific and technological knowledge." : "Empresa de Base Tecnológica que desarrolla soluciones innovadoras basadas en conocimiento científico y tecnológico."}</p>
            </div>
          </div>
        </div>

        {/* Línea de Tiempo Interactiva */}
        <div className="infographic-timeline animate-reveal delay-1">
          {/* La línea conectora de fondo */}
          <div className="infographic-connector-line"></div>

          <div className="infographic-steps">
            {routeData.map((step, index) => (
              <div 
                key={step.id} 
                className="infographic-node"
                style={{ '--node-color': step.color }}
                onClick={() => openPopup(step)}
              >
                {/* Número superior */}
                <div className="info-number">{step.number}</div>
                
                {/* Círculo con iconos */}
                <div className="info-circle-wrapper">
                  <div className="info-dashed-ring"></div>
                  <div className="info-solid-circle">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {step.icon}
                    </svg>
                  </div>
                  {/* Flecha conectora para todos menos el último */}
                  {index < routeData.length - 1 && (
                    <div className="info-arrow-connector"></div>
                  )}
                </div>

                {/* Título inferior */}
                <h4 className="info-title">{step.title}</h4>
                <span className="node-click-hint">{isEnglish ? "Click to open" : "Clic para abrir"}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Banner Inferior + CTA (Idéntico a la imagen) */}
        <div className="route-bottom-banner animate-reveal delay-2">
          <div className="banner-features">
            <div className="feature-intro">
              <h4>{isEnglish ? "ONE PATH, ONE IMPACT" : "UN CAMINO, UN IMPACTO"}</h4>
              <p>{isEnglish ? "Each step brings you closer to conquering the world." : "Cada etapa te acerca más a transformar tu idea en una empresa sólida, escalable y lista para conquistar el mundo."}</p>
            </div>
            
            <div className="feature-icons">
              <div className="feat-item"><span className="feat-icon">🎓</span><p>{isEnglish ? "Knowledge" : "Conocimiento"}<br/>{isEnglish ? "that boosts" : "que impulsa"}</p></div>
              <div className="feat-item"><span className="feat-icon">🤝</span><p>{isEnglish ? "Connections" : "Conexiones"}<br/>{isEnglish ? "that open doors" : "que abren puertas"}</p></div>
              <div className="feat-item"><span className="feat-icon">💰</span><p>{isEnglish ? "Resources" : "Recursos"}<br/>{isEnglish ? "that accelerate" : "que aceleran"}</p></div>
              <div className="feat-item"><span className="feat-icon">🌍</span><p>{isEnglish ? "Global vision" : "Visión global"}<br/>{isEnglish ? "without borders" : "sin fronteras"}</p></div>
            </div>
          </div>

          <div className="banner-cta">
            <div className="cta-content">
              <h4>{isEnglish ? "¿Ready to start your route?" : "¿Listo para iniciar tu ruta?"}</h4>
              <p>{isEnglish ? "The first step is to start!" : "El emprendimiento es un viaje lleno de desafíos, aprendizajes y oportunidades. ¡El primer paso es empezar!"}</p>
              {/* 👇 PON TU LINK AQUÍ 👇 */}
              <a href="https://tulink.com" target="_blank" rel="noopener noreferrer" className="cta-btn">
                {isEnglish ? "START ROUTE" : "INICIAR RUTA"}
              </a>
            </div>
            <div className="cta-rocket">🚀</div>
          </div>
        </div>

      </div>

      {/* POP-UP MODAL (Lógica intacta, con el color de la etapa) */}
      {activeStep && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()} style={{ borderTop: `6px solid ${activeStep.color}` }}>
            <button className="popup-close" onClick={closePopup}>✕</button>
            <div className="popup-header">
              <span className="popup-number" style={{ color: activeStep.color }}>{activeStep.number}</span>
              <h3 className="popup-title" style={{ color: activeStep.color }}>{activeStep.title}</h3>
            </div>
            <div className="popup-body">
              <p className="popup-desc">{activeStep.desc}</p>
              <div className="popup-ebt-box">
                <div className="ebt-badge" style={{ backgroundColor: activeStep.color }}>PERFIL EBT</div>
                <p>{activeStep.perfil}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}