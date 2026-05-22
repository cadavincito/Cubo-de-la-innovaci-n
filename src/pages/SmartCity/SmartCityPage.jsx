import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './SmartCityPage.css';

export default function SmartCityPage() {
  const { i18n } = useTranslation();

  // Ya quitamos el useEffect que bloqueaba el scroll (document.body.style.overflow = 'hidden')

  const idiomaActual = i18n.language || 'es'; 
  const iframeUrl = `https://rionegro-territoriointeligente.base44.app/?lang=${idiomaActual}`;

  return (
    <div className="iframe-page-container">
      <iframe 
        src={iframeUrl} 
        title="Rionegro Smart City"
        className="smartcity-iframe"
        allowFullScreen
      ></iframe>
    </div>
  );
}