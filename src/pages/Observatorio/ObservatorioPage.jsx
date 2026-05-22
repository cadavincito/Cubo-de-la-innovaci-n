import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './ObservatorioPage.css';

export default function ObservatorioPage() {
  const { i18n } = useTranslation();

  const idiomaActual = i18n.language || 'es'; 
  
  // 👇 ¡REEMPLAZA ESTE LINK POR EL REAL DEL OBSERVATORIO! 👇
  const enlaceBase = "https://observatorioctei-rionegro.base44.app"; 
  
  // Le agregamos dinámicamente el idioma al final igual que con Base44
  const iframeUrl = `${enlaceBase}/?lang=${idiomaActual}`;

  return (
    <div className="observatorio-page-container">
      <iframe 
        src={iframeUrl} 
        title="Observatorio CTeI"
        className="observatorio-iframe"
        allowFullScreen
      ></iframe>
    </div>
  );
}