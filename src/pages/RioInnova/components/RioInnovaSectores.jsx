import React from 'react';
import { useTranslation } from 'react-i18next';
import './RioInnovaSectores.css';

export default function RioInnovaSectores() {
  const { i18n } = useTranslation();
  // 💡 Definimos la variable que causaba el error
  const isEnglish = i18n.language === 'en'; 

  // Datos basados en los sectores estratégicos del laboratorio 
  const sectores = [
    {
      id: 1,
      icon: "🚲",
      tituloEs: "Movilidad inteligente y sostenible", // [cite: 1, 17]
      tituloEn: "Smart and Sustainable Mobility",
      color: "#7FB1D3"
    },
    {
      id: 2,
      icon: "🚑",
      tituloEs: "Bienestar y Salud pública", // [cite: 1, 18]
      tituloEn: "Well-being and Public Health",
      color: "#1282C3"
    },
    {
      id: 3,
      icon: "✈️", // Avioncito para desarrollo aeroespacial [cite: 1, 19]
      tituloEs: "Desarrollo Aeroespacial", // [cite: 1, 19]
      tituloEn: "Aerospace Development",
      color: "#0E5681"
    }
  ];

  return (
    <section className="rinnova-sectores-section">
      <div className="rinnova-sectores-header">
        <h2 className="rinnova-title-sync">
          {isEnglish ? (
            <>Strategic <span className="title-highlight-sync">Sectors</span></>
          ) : (
            <>Sectores <span className="title-highlight-sync">Estratégicos</span></>
          )}
        </h2>
      </div>

      <div className="rinnova-nodes-container">
        <div className="rinnova-nodes-grid">
          {sectores.map((sector) => (
            <div 
              key={sector.id} 
              className="rinnova-node-hex" 
              style={{"--accent-color": sector.color}}
            >
              <div className="hex-inner">
                <div className="hex-content">
                  <span className="hex-icon">{sector.icon}</span>
                  <h3 className="hex-title">
                    {isEnglish ? sector.tituloEn : sector.tituloEs}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}