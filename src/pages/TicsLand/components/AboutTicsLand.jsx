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
              {isEnglish ? 'What is TICs-LAND?' : '¿Qué es TICs-LAND?'}
            </h2>
            <p className="text-justified">
              {isEnglish
                ? 'TICs-LAND helps Rionegro businesses grow with technology. We connect technical know-how with real market needs so entrepreneurs and companies can adopt new tools and compete better.'
                : 'TICs-LAND ayuda a las empresas de Rionegro a crecer con tecnología. Conectamos el conocimiento técnico con las necesidades del mercado para que emprendedores y empresas adopten nuevas herramientas y compitan mejor.'}
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
              {isEnglish ? 'Our purpose' : 'Nuestro propósito'}
            </h3>
            <p className="text-justified">
              {isEnglish
                ? 'We want Rionegro to be more competitive by helping traditional businesses become technology-driven companies — with innovation that benefits everyone in the community.'
                : 'Queremos que Rionegro sea más competitiva ayudando a negocios tradicionales a convertirse en empresas con base tecnológica, con innovación que beneficie a toda la comunidad.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}