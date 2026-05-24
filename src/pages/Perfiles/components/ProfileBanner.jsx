import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../Conocenos/components/PropositoBanner.css';

import fondoAzulElectrico from '../../../assets/images/banner.webp';

export default function ProfileBanner({ profileKey }) {
  const { t } = useTranslation();
  const ns = `${profileKey}_page`;

  return (
    <section className="proposito-banner-section">
      <img src={fondoAzulElectrico} alt="" className="proposito-bg-image" aria-hidden="true" />
      <div className="proposito-content-frame compact">
        <span className="proposito-badge">{t(`${ns}.badge`)}</span>
        <h1 className="proposito-title-bold">{t(`${ns}.title`)}</h1>
        <div className="proposito-divider-accent"></div>
        <p className="proposito-text-body">{t(`${ns}.subtitle`)}</p>
      </div>
    </section>
  );
}
