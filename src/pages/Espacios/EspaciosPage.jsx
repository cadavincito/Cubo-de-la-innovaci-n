import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Espacios.css';

import imgMaker from '../../assets/images/ombredelafoto.webp';
import imgCowork from '../../assets/images/cowo.webp';
import imgCubo from '../../assets/images/cuboo.webp';

const espaciosData = [
  {
    id: 'maker',
    titleKey: 'espacios_page.maker_title',
    descKey: 'espacios_page.maker_desc',
    bgImage: imgMaker,
    link: '/espacios/maker-space',
  },
  {
    id: 'cowork',
    titleKey: 'espacios_page.cowork_title',
    descKey: 'espacios_page.cowork_desc',
    bgImage: imgCowork,
    link: '/espacios/coworklabs',
  },
  {
    id: 'cubo',
    titleKey: 'espacios_page.cubo_title',
    descKey: 'espacios_page.cubo_desc',
    bgImage: imgCubo,
    link: '/espacios/cubo-innovacion',
  },
];

export default function EspaciosPage() {
  const { t } = useTranslation();

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
            <div className="espacio-overlay"></div>

            <div className="espacio-content">
              <h2 className="espacio-title">{t(espacio.titleKey)}</h2>
              <div className="espacio-hidden-content">
                <p className="espacio-desc">{t(espacio.descKey)}</p>
                <span className="espacio-btn">
                  {t('espacios_page.explore')} →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
