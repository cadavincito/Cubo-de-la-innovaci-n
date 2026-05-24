import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../Home/components/BannerConocenos.css';

export default function ProfileCtaBanner({ profileKey }) {
  const { t } = useTranslation();
  const ns = `${profileKey}_page`;
  const ctaPath = profileKey === 'emprendedor' ? '/espacios' : '/contacto';

  return (
    <section className="banner-conocenos">
      <div className="banner-conocenos-bg-effect"></div>
      <div className="banner-conocenos-container">
        <div className="banner-conocenos-content-area">
          <h2 className="banner-conocenos-title">{t(`${ns}.cta_title`)}</h2>
          <p className="banner-conocenos-description">{t(`${ns}.cta_desc`)}</p>
          <Link to={ctaPath} className="banner-conocenos-btn">
            {t(`${ns}.cta_btn`)}
          </Link>
        </div>
      </div>
    </section>
  );
}
