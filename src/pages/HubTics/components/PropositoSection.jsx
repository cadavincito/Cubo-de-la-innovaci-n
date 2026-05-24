import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importamos la herramienta de idiomas
import './PropositoSection.css';
import rionegroImage from '../../../assets/images/plaza-libertad.webp';

export default function PropositoSection() {
  
  // 2. Extraemos el idioma actual
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="proposito-section">
      <div className="proposito-container">
        
        {/* LADO IZQUIERDO: Textos institucionales */}
        <div className="proposito-text-column">
          <h3 className="proposito-etiqueta">HubTICs</h3>
          <h2 className="proposito-title">
            {isEnglish ? (
              <>We bring <span className="highlight-tech">tech</span> closer to how Rionegro works</>
            ) : (
              <>Acercamos la <span className="highlight-tech">tecnología</span> a la gestión de Rionegro</>
            )}
          </h2>
          
          <div className="proposito-description">
            <p>
              {isEnglish
                ? 'Hub TICs supports Rionegro’s development plan with tools that make public management smarter and the territory more competitive — from Smart City projects to connectivity and the Science, Technology and Innovation Observatory.'
                : 'Hub TICs apoya el plan de desarrollo de Rionegro con herramientas que hacen la gestión pública más inteligente y el territorio más competitivo: desde Ciudad Inteligente hasta conectividad y el Observatorio de Ciencia, Tecnología e Innovación.'}
            </p>
            <p>
              {isEnglish
                ? 'The goal is simple: better decisions with data, fewer digital gaps, and a local innovation ecosystem that works for everyone.'
                : 'La meta es sencilla: mejores decisiones con datos, menos brechas digitales y un ecosistema de innovación local que funcione para todos.'}
            </p>
          </div>
        </div>

        {/* LADO DERECHO: Imagen de Rionegro */}
        <div className="proposito-image-column">
          <div className="hub-glass-image-panel">
            {/* AQUÍ INSERTAMOS LA IMAGEN REAL */}
            <img 
              src={rionegroImage} 
              alt={isEnglish ? "Aerial view of Rionegro, Antioquia" : "Vista aérea de Rionegro, Antioquia"} 
              className="rionegro-photo" 
            />
          </div>
        </div>

      </div>
    </section>
  );
}