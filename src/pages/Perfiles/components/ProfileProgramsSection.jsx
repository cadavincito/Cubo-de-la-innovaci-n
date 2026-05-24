import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Perfiles.css';

export default function ProfileProgramsSection({ items, profileKey, variant = 'programs' }) {
  const { t } = useTranslation();
  const ns = `${profileKey}_page`;
  const titleKey = variant === 'phases' ? `${ns}.phases_title` : `${ns}.programs_title`;

  if (!items?.length) return null;

  if (variant === 'phases') {
    return (
      <section className="perfil-section">
        <h2 className="perfil-section-title">{t(titleKey)}</h2>
        <div className="perfil-phases-grid">
          {items.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="perfil-phase-card"
              style={{ '--phase-color': item.color }}
            >
              <span className="perfil-phase-number">{item.number}</span>
              <h3>{t(item.titleKey)}</h3>
              <p>{t(item.descKey)}</p>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="perfil-section">
      <h2 className="perfil-section-title">{t(titleKey)}</h2>
      <div className="perfil-programs-grid">
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="perfil-program-card"
            style={{ background: item.color }}
          >
            <span className="perfil-program-arrow">↗</span>
            <h3>{t(item.titleKey)}</h3>
            <p>{t(item.descKey)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
