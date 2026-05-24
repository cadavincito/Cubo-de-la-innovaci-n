import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ofertasData from '../../constants/ofertasData.json';
import OfertaCard from '../../components/common/OfertaCard';
import './OfertasPage.css';

export default function OfertasPage() {
  const { t } = useTranslation();

  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [perfilActivo, setPerfilActivo] = useState('Todos');

  const categoriasUnicas = useMemo(() => {
    const cats = ofertasData.flatMap((o) => o.categorias);
    return ['Todas', ...new Set(cats)];
  }, []);

  const perfilesUnicos = useMemo(() => {
    const perfs = ofertasData.flatMap((o) => o.perfiles);
    return ['Todos', ...new Set(perfs)];
  }, []);

  const ofertasFiltradas = ofertasData.filter((oferta) => {
    const cumpleCategoria =
      categoriaActiva === 'Todas' || oferta.categorias.includes(categoriaActiva);
    const cumplePerfil =
      perfilActivo === 'Todos' || oferta.perfiles.includes(perfilActivo);
    return cumpleCategoria && cumplePerfil;
  });

  return (
    <div className="ofertas-page-container">
      <header className="ofertas-header">
        <h1>{t('ofertas_page.title')}</h1>
        <p>{t('ofertas_page.subtitle')}</p>
      </header>

      <div className="ofertas-content-layout">
        <aside className="filters-sidebar">
          <div className="filter-group">
            <h3>{t('ofertas_page.category')}</h3>
            <div className="filter-buttons">
              {categoriasUnicas.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={categoriaActiva === cat ? 'active' : ''}
                  onClick={() => setCategoriaActiva(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>{t('ofertas_page.profile')}</h3>
            <div className="filter-buttons">
              {perfilesUnicos.map((perf) => (
                <button
                  key={perf}
                  type="button"
                  className={perfilActivo === perf ? 'active' : ''}
                  onClick={() => setPerfilActivo(perf)}
                >
                  {perf}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="ofertas-grid-container">
          <div className="results-count">
            {t('ofertas_page.showing')} {ofertasFiltradas.length}{' '}
            {t('ofertas_page.results')}
          </div>

          <div className="ofertas-grid">
            {ofertasFiltradas.map((oferta) => (
              <OfertaCard key={oferta.id} oferta={oferta} />
            ))}
          </div>

          {ofertasFiltradas.length === 0 && (
            <div className="no-results">
              <p>{t('ofertas_page.no_results')}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
