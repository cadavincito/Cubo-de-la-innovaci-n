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
              <>We integrate <span className="highlight-tech">TECH</span> capabilities into the PMD management</>
            ) : (
              <>Integramos capacidades <span className="highlight-tech">TECH</span> en la gestión del PMD</>
            )}
          </h2>
          
          <div className="proposito-description">
            <p>
              {isEnglish 
                ? 'The Hub TICs component aims to boost the Municipal Development Plan "Rionegro, City of Well-being" through the strategic implementation of technological tools that strengthen public management and territorial competitiveness. Through initiatives in Smart Cities, the consolidation of connectivity and Neutral Internet Network, and the creation of the Science, Technology and Innovation Observatory (CTeI).'
                : 'El componente Hub TICs tiene como propósito impulsar el Plan de Desarrollo Municipal Rionegro, Ciudad del Bienestar mediante la implementación estratégica de herramientas tecnológicas que fortalezcan la gestión pública y la competitividad territorial. A través de iniciativas en Ciudad Inteligente (Smart Cities), la consolidación de la conectividad y Red Neutra de internet, y la creación del Observatorio de Ciencia, Tecnología e Innovación (CTeI).'
              }
            </p>
            <p>
              {isEnglish
                ? 'These initiatives seek to improve data-driven decision making, close digital divides, and stimulate the local innovation ecosystem. In this way, technology becomes a transversal enabler of well-being, sustainability, and economic development in the municipality.'
                : 'Con estas iniciativas se busca mejorar la toma de decisiones basada en datos, cerrar brechas digitales y dinamizar el ecosistema de innovación local. De esta manera, la tecnología se convierte en un habilitador transversal del bienestar, la sostenibilidad y el desarrollo económico del municipio.'
              }
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