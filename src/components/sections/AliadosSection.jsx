import React from 'react';
import { useTranslation } from 'react-i18next';
import './AliadosSection.css';

// 1. IMPORTA TUS LOGOS LOCALES AQUÍ
// Asegúrate de que la ruta y el nombre del archivo sean correctos (ej: .png, .jpg, .svg)
import logo1 from '../../assets/images/Logo-1.png';
import logo2 from '../../assets/images/Logo-2.png';
import logo3 from '../../assets/images/Logo-3.png';
import logo4 from '../../assets/images/Logo-4.png';
import logo5 from '../../assets/images/Logo-5.png';
import logo6 from '../../assets/images/Logo-6.png';
import logo7 from '../../assets/images/Logo-7.png';
import logo8 from '../../assets/images/Logo-8.png';
import logo9 from '../../assets/images/Logo-9.png';
import logo10 from '../../assets/images/Logo-10.png';
import logo11 from '../../assets/images/Logo-11.png';
import logo12 from '../../assets/images/Logo-12.png';
import logo13 from '../../assets/images/Logo-13.png';
import logo14 from '../../assets/images/Logo-14.png';
import logo15 from '../../assets/images/Logo-15.png';
import logo16 from '../../assets/images/Logo-16.png';
import logo17 from '../../assets/images/Logo-17.png';
import logo18 from '../../assets/images/Logo-18.png';
import logo19 from '../../assets/images/Logo-19.png';
import logo20 from '../../assets/images/Logo-20.png';
import logo21 from '../../assets/images/Logo-21.png';
import logo22 from '../../assets/images/Logo-22.png';
import logo23 from '../../assets/images/Logo-23.png';
import logo24 from '../../assets/images/Logo-24.png';

// Agrega más según necesites...

export default function AliadosSection() {
  const { t } = useTranslation();

  // 2. ACTUALIZA EL ARREGLO CON EL 'src' LOCAL Y LA 'url' DE LA PÁGINA
  const logos = [
    { 
      id: 1, 
      src: logo1, 
      url: "https://www.asdi.edu.co/" // <- Enlace al hacer clic
    },
    { 
      id: 2, 
      src: logo2, 
      url: "https://www.bancolombia.com/" 
    },
    { 
      id: 3, 
      src: logo3, 
      url: "https://www.caescol.org/" 
    },
    { 
      id: 4, 
      src: logo4, 
      url: "https://ccoa.org.co/" 
    },
    { 
      id: 5, 
      src: logo5, 
      url: "http://ceo.org.co/" 
    },
    { 
      id: 6, 
      src: logo6, 
      url: "https://www.clinicasomer.com/" 
    },
    { 
      id: 7, 
      src: logo7, 
      url: "https://www.comfama.com/" 
    },
    { 
      id: 8, 
      src: logo8, 
      url: "https://www.comfenalcoantioquia.com.co/" 
    },
    { 
      id: 9, 
      src: logo9, 
      url: "https://www.cornare.gov.co/" 
    },
    { 
      id: 10, 
      src: logo10, 
      url: "https://www.ecar.com.co/" 
    },
    { 
      id: 11, 
      src: logo11, 
      url: "https://www.invima.gov.co/" 
    },
    { 
      id: 12, 
      src: logo12, 
      url: "https://www.invima.gov.co/" 
    },
    { 
      id: 13, 
      src: logo13, 
      url: "https://www.antioquia.gov.co/" 
    },
    { 
      id: 14, 
      src: logo14, 
      url: "https://investinoriente.org/" 
    },
    { 
      id: 15, 
      src: logo15, 
      url: "https://www.iudigital.edu.co/" 
    },
    { 
      id: 16, 
      src: logo16, 
      url: "https://masbosques.org/" 
    },
    { 
      id: 17, 
      src: logo17, 
      url: "https://parquedelemprendimiento.co/" 
    },
    { 
      id: 18, 
      src: logo18, 
      url: "https://rutanmedellin.org/" 
    },
    { 
      id: 19, 
      src: logo19, 
      url: "https://www.sena.edu.co/" 
    },
    { 
      id: 20, 
      src: logo20, 
      url: "https://cursoscortossenatic.co/" 
    },
    { 
      id: 21, 
      src: logo21, 
      url: "https://www.uax.com" 
    },
    { 
      id: 22, 
      src: logo22, 
      url: "http://uco.edu.co/" 
    },
    { 
      id: 23, 
      src: logo23, 
      url: "https://www.udea.edu.co" 
    },
    { 
      id: 24, 
      src: logo24, 
      url: "https://www.vaxthera.com/" 
    },
  ];

  // Duplicamos la lista para que el scroll infinito nunca tenga espacios en blanco
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="aliados-section">
      <div className="aliados-container">
        
        <div className="aliados-header">
          <h2 className="aliados-title">{t('aliados.title')}</h2>
          <p className="aliados-desc">{t('aliados.desc')}</p>
        </div>

        <div className="aliados-slider-wrapper">
          <div className="aliados-track">
            {duplicatedLogos.map((logo, index) => (
              <div key={`logo-${index}`} className="aliados-slide">
                {/* 3. ENVUELVE LA IMAGEN EN UN ENLACE <a> */}
                <a 
                  href={logo.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'block', cursor: 'pointer' }} // El cursor 'pointer' muestra la manito
                >
                  <img src={logo.src} alt={`Aliado ${index}`} className="aliado-img" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}