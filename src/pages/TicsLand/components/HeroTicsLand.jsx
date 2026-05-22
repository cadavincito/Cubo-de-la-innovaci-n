import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroTicsLand.css';

// 👇 1. Importamos la imagen usando rutas relativas (subiendo 3 carpetas hasta assets)
import bgImage from '../../../assets/images/tics-land-bg.webp';

export default function HeroTicsLand() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="hero-land-wrapper">
      
      {/* 👇 2. Inyectamos la imagen directamente como estilo en línea */}
      <div 
        className="hero-land-bg-image" 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      
      {/* Overlays de gradiente para fusionar y dar contraste */}
      <div className="hero-land-overlay gradient-v"></div>
      <div className="hero-land-overlay gradient-radial"></div>

      {/* Contenedor de contenido central */}
      <div className="hero-land-content">
        <h1 className="hero-land-title animate-reveal-land">
          {isEnglish ? "TICs-LAND" : "TICs-LAND"}
        </h1>
      </div>
    </section>
  );
}