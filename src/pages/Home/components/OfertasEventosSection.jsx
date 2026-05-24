import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './OfertasEventosSection.css';

import OfertasCarousel from '../../../components/ui/OfertasCarousel';

export default function OfertasEventosSection() {
  const { t } = useTranslation();

  return (
    <section className="ofertas-section-container">
      <div className="ofertas-section-header">
        <h2>{t('ofertas_eventos.title')}</h2>
        <p>{t('ofertas_eventos.subtitle')}</p>
      </div>

      <OfertasCarousel />

      <div className="ofertas-section-footer">
        <Link to="/ofertas" className="btn-ver-mas">
          {t('ofertas_eventos.view_all_offers')}
        </Link>
      </div>
    </section>
  );
}
