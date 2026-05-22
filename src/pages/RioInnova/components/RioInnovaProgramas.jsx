import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './RioInnovaProgramas.css';

export default function RioInnovaProgramas() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="rinnova-programas-section">
      <div className="rinnova-programas-header">
        <h2 className="rinnova-title-dark">
          {isEnglish ? (
             <>Strategic <span className="title-highlight">programs</span></>
          ) : (
             <>Programas <span className="title-highlight">estratégicos</span></>
          )}
        </h2>
        {/* El texto descriptivo (subtitle) ha sido eliminado según tus instrucciones */}
      </div>

      <div className="rinnova-accordion">
        
        {/* TARJETA 1: GOVTECH (Color Crema) */}
        <div className="rinnova-acc-card bg-pdf-govtech">
          <div className="rinnova-acc-content">
            <h3 className="rinnova-acc-title text-black">
              {isEnglish ? (
                <>Public<br/>Innovation<br/><span className="text-blue-gov">GovTech</span></>
              ) : (
                <>Innovación<br/>Pública<br/><span className="text-blue-gov">GovTech</span></>
              )}
            </h3>
            
            <div className="rinnova-acc-hidden">
              <p className="rinnova-acc-desc text-dark-gray">
                {isEnglish
                  ? "Implementation of technological solutions to modernize public management, optimize citizen services, and promote transparency, bringing the government closer to the people."
                  : "Implementación de soluciones tecnológicas para modernizar la gestión pública, optimizar los servicios ciudadanos y promover la transparencia, acercando el gobierno a la gente."}
              </p>
              <Link to="/servicios/rioinnova/govtech" className="rinnova-acc-btn btn-blue">
                {isEnglish ? "Explore GovTech" : "Explorar GovTech"}
              </Link>
            </div>
          </div>
        </div>

        {/* TARJETA 2: EMPRESARIAL (Color Azul Oscuro) */}
        <div className="rinnova-acc-card bg-pdf-empresarial">
          <div className="rinnova-acc-content">
            <h3 className="rinnova-acc-title text-white">
              {isEnglish ? (
                <>Corporate<br/>Innovation</>
              ) : (
                <>Innovación<br/>Empresarial</>
              )}
            </h3>
            
            <div className="rinnova-acc-hidden">
              <p className="rinnova-acc-desc text-light-gray">
                {isEnglish
                  ? "Articulation with the private sector to accelerate digital transformation, foster the growth of local startups, and solve specific challenges of the industry."
                  : "Articulación con el sector privado para acelerar la transformación digital, fomentar el crecimiento de startups locales y resolver retos específicos de la industria."}
              </p>
              <Link to="/servicios/rioinnova/empresarial" className="rinnova-acc-btn btn-white">
                {isEnglish ? "Explore Corporate" : "Explorar Empresarial"}
              </Link>
            </div>
          </div>
        </div>

        {/* TARJETA 3: ACADÉMICA (Color Azul Claro) */}
        <div className="rinnova-acc-card bg-pdf-academica">
          <div className="rinnova-acc-content">
            <h3 className="rinnova-acc-title text-black">
              {isEnglish ? (
                <>Academic<br/>Innovation</>
              ) : (
                <>Innovación<br/>Académica</>
              )}
            </h3>
            
            <div className="rinnova-acc-hidden">
              <p className="rinnova-acc-desc text-dark-gray">
                {isEnglish
                  ? "Collaboration with universities and educational institutions for applied research, technology transfer, and the development of specialized talent for the future."
                  : "Colaboración con universidades e instituciones educativas para la investigación aplicada, la transferencia de tecnología y el desarrollo de talento especializado para el futuro."}
              </p>
              <Link to="/servicios/rioinnova/academica" className="rinnova-acc-btn btn-blue">
                 {isEnglish ? "Explore Academic" : "Explorar Académica"}
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}