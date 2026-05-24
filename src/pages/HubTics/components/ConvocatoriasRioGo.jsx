import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. Importamos la herramienta de idiomas
import './ConvocatoriasRioGo.css';

// 🚨 Asegúrate de guardar tu logo en la carpeta correcta y que la ruta coincida 🚨
// Ejemplo: src/assets/images/logo RIO-GO-03.png
import logoRioGo from '../../../assets/images/logo RIO-GO.png'; 

export default function ConvocatoriasRioGo() {
  
  // 2. Extraemos el idioma actual
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="riogo-section-new">
      <div className="riogo-glow-container">
        {/* Luces sutiles de fondo con la colorimetría del sitio */}
        <div className="glow-shape cyan-glow"></div>
        <div className="glow-shape purple-glow"></div>
      </div>

      <div className="riogo-glass-card">
        <div className="riogo-content-new">
          <h3 className="riogo-label-new">
            {isEnglish ? 'New program' : 'Programa nuevo'}
          </h3>
          
          {/* 👇 AQUÍ ESTÁ EL CAMBIO PRINCIPAL: USAMOS EL LOGO COMO TÍTULO 👇 */}
          <div className="riogo-logo-wrapper">
            <img src={logoRioGo} alt="Rio-GO Convocatoria" className="riogo-logo-new" />
          </div>
          
          <p className="riogo-description-new">
            {isEnglish
              ? 'Join our open innovation challenges. We need creative people like you to help solve real city problems with technology.'
              : 'Únete a nuestros retos de innovación abierta. Buscamos personas creativas como tú para resolver problemas reales de la ciudad con tecnología.'}
          </p>
          
          <Link to="/servicios/riogo" className="riogo-btn-new">
            {isEnglish ? 'See how to join' : 'Ver cómo participar'}
          </Link>
        </div>
      </div>
    </section>
  );
}