import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ofertasData from '../../../constants/ofertasData.json';
import OfertaCard from '../../../components/common/OfertaCard';
import '../Perfiles.css';

export default function ProfileOfertasSection({ perfil, profileKey }) {
  const { t } = useTranslation();
  const ns = `${profileKey}_page`;

  const ofertasFiltradas = ofertasData.filter((oferta) =>
    oferta.perfiles.includes(perfil)
  );

  return (
    <section className="perfil-section">
      <div className="perfil-ofertas-header">
        <h2 className="perfil-section-title">{t(`${ns}.ofertas_title`)}</h2>
        <Link to="/ofertas" className="perfil-ofertas-cta">
          {t(`${ns}.ofertas_cta`)}
        </Link>
      </div>

      {ofertasFiltradas.length > 0 ? (
        <div className="perfil-ofertas-grid">
          {ofertasFiltradas.map((oferta) => (
            <OfertaCard key={oferta.id} oferta={oferta} />
          ))}
        </div>
      ) : (
        <p className="perfil-empty-msg">
          {t(`${ns}.ofertas_empty`)}
        </p>
      )}
    </section>
  );
}
