import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importamos la herramienta de idiomas
import './HubBanner.css'; // Asegúrate de importar el CSS nuevo aquí

export default function HubBanner() {
  
  // 2. Verificamos cuál es el idioma actual
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  // ¡AQUÍ ESTÁ LA CLAVE! 
  // Ya no debe haber ningún useEffect ni referencias a 'canvas' o 'getContext'.
  // Solo la función del componente devolviendo la estructura.

  return (
    <div className="hub-banner-container">
      {/* ¡AQUÍ BORRAMOS LA LÍNEA DE LA CUADRÍCULA! Ya no existe. */}

      <div className="hub-content">
        {/* Asegúrate de que el título "Hub Tics" sea un <h1> y tenga esta clase */}
        <h1 className="hub-title">Hub Tics</h1>
        
        {/* 3. Reemplazamos el texto estático por la condición bilingüe */}
        <p className="hub-desc">
          {isEnglish 
            ? "Connecting innovation with territorial development. The epicenter where ideas turn into high-impact projects for Eastern Antioquia."
            : "Conectamos la innovación con el desarrollo territorial. El epicentro donde las ideas se convierten en proyectos de alto impacto para el Oriente Antioqueño."
          }
        </p>
        
        {/* ... tus logos y botones, que ya deben estar blancos ... */}
      </div>
    </div>
  );
}