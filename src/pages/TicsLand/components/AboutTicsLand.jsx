import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutTicsLand() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="tics-land-about-section">
      <div className="tics-land-about-container">
        
        {/* FILA 1: QUÉ ES (Texto Izquierda | Imagen Derecha) */}
        <div className="about-row">
          <div className="about-content-left animate-reveal">
            <h2 className="tics-land-section-title">
              {isEnglish ? "What is TICs-LAND?" : "¿Qué es TICs-LAND?"}
            </h2>
            <p className="text-justified">
              {isEnglish
                ? "TICs-LAND is the strategic axis of the Sub-secretariat of Territory TICs dedicated to the sophistication of the business fabric of Rionegro. It acts as an acceleration platform that connects technical knowledge with market needs, making it easier for local entrepreneurs and companies to adopt emerging technologies to compete in the global economy."
                : "TICs-LAND es el eje estratégico de la Subsecretaría de Territorio TICs dedicado a la sofisticación del tejido empresarial de Rionegro. Actúa como una plataforma de aceleración que conecta el conocimiento técnico con las necesidades del mercado, facilitando que emprendedores y empresas locales adopten tecnologías emergentes para competir en la economía global."}
            </p>
          </div>
          <div className="about-visual-right animate-reveal delay-1">
            <div className="image-ux-wrapper">
              <img 
                src="https://q-xx.bstatic.com/xdata/images/city/608x352/954203.webp?k=22785536ba1f3fbc2cccfe0ee14ecdd97459fd5d8acd3e0a101bf39007b13e8b&o=" 
                alt="TICs-LAND Equipo" 
                className="ux-animated-img" 
              />
              <div className="ux-img-backdrop-green"></div>
            </div>
          </div>
        </div>

        {/* FILA 2: PROPÓSITO (Imagen Izquierda | Texto Derecha) */}
        <div className="about-row reverse-mobile mt-5">
          <div className="about-visual-left animate-reveal delay-2">
             <div className="image-ux-wrapper">
              <img 
                src="https://www.periodicoelparamo.com/wp-content/uploads/2022/05/Rionegro-Antioquia.jpeg" 
                alt="Propósito Global" 
                className="ux-animated-img" 
              />
              <div className="ux-img-backdrop-blue"></div>
            </div>
          </div>
          <div className="about-content-right animate-reveal delay-3">
            <h3 className="tics-land-subtitle">
              {isEnglish ? "Purpose" : "PROPÓSITO"}
            </h3>
            <p className="text-justified">
              {isEnglish
                ? "To boost the territorial competitiveness of Rionegro by transforming traditional businesses into technology-based companies, ensuring that innovation is the engine of sustainable economic development for every citizen of Rionegro."
                : "Impulsar la competitividad territorial de Rionegro transformando negocios tradicionales en empresas de base tecnológica, garantizando que la innovación sea el motor de desarrollo económico sostenible para cada rionegrero."}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}