import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './RioInnovaBanner.css';
import logoRioInnova from '../../../assets/images/Rio-innova.png';

export default function RioInnovaBanner() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="rinnova-hero-dark full-screen">
      {/* Animación de ondas/pulsos de fondo */}
      <div className="rinnova-pulse-container">
        <div className="rinnova-pulse pulse-1"></div>
        <div className="rinnova-pulse pulse-2"></div>
        <div className="rinnova-pulse pulse-3"></div>
      </div>

      {/* Nodos de conexión (puntos brillantes flotantes) */}
      <div className="rinnova-nodes">
        <div className="node node-a"></div>
        <div className="node node-b"></div>
        <div className="node node-c"></div>
        <div className="node node-d"></div>
      </div>

      {/* Contenedor central que agrupa la tarjeta y la flecha */}
      <div className="rinnova-hero-wrapper">
        
        {/* Tarjeta central con MAYOR PROFUNDIDAD */}
        <div className="rinnova-hero-content-light">
          <img 
            src={logoRioInnova} 
            alt="RIO-INNOVA Laboratorio de Innovación Abierta" 
            className="rinnova-hero-logo"
          />
        </div>

        {/* Indicador animado para hacer scroll */}
        <div className="rinnova-scroll-indicator">
          <span className="scroll-text">{isEnglish ? "Discover more" : "Descubre más"}</span>
          <div className="scroll-arrow">↓</div>
        </div>

      </div>
    </section>
  );
}