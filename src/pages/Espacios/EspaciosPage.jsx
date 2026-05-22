import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Espacios.css';

// Asegúrate de que las rutas a tus imágenes sean correctas
import imgMaker from '../../assets/images/ombredelafoto.webp'; 
import imgCowork from '../../assets/images/cowo.webp';
import imgCubo from '../../assets/images/cuboo.webp';

const espaciosData = [
  {
    id: 'maker',
    titleEs: 'Maker Space',
    titleEn: 'Maker Space',
    descEs: 'Laboratorio de fabricación digital y prototipado rápido.',
    descEn: 'Digital fabrication and rapid prototyping laboratory.',
    bgImage: imgMaker, 
    link: '/espacios/maker-space'
  },
  {
    id: 'cowork',
    titleEs: 'CoWorklabs',
    titleEn: 'CoWorklabs',
    descEs: 'Espacios colaborativos diseñados para la sinergia y el networking.',
    descEn: 'Collaborative spaces designed for synergy and networking.',
    bgImage: imgCowork,
    link: '/espacios/coworklabs'
  },
  {
    id: 'cubo',
    titleEs: 'Cubo de la Innovación',
    titleEn: 'Innovation Cube',
    descEs: 'El ecosistema central donde las grandes ideas se transforman en realidad.',
    descEn: 'The central ecosystem where great ideas become reality.',
    bgImage: imgCubo,
    link: '/espacios/cubo-innovacion'
  }
];

export default function EspaciosPage() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className="espacios-page-wrapper">
      <div className="espacios-accordion-container">
        {espaciosData.map((espacio) => (
          <Link 
            to={espacio.link} 
            key={espacio.id} 
            className="espacio-panel"
            style={{ backgroundImage: `url(${espacio.bgImage})` }}
          >
            {/* Overlay azul elegante */}
            <div className="espacio-overlay"></div>

            {/* Contenido de texto y botón dinámico según el idioma */}
            <div className="espacio-content">
              <h2 className="espacio-title">
                {isEnglish ? espacio.titleEn : espacio.titleEs}
              </h2>
              <div className="espacio-hidden-content">
                <p className="espacio-desc">
                  {isEnglish ? espacio.descEn : espacio.descEs}
                </p>
                <span className="espacio-btn">
                  {isEnglish ? "Explore Space" : "Explorar Espacio"} →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}