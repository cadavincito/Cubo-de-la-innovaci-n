import React, { useState } from 'react';
import ofertasData from '../../constants/ofertasData.json';
import OfertaCard from '../../components/common/OfertaCard';
import './ConvocatoriasPage.css';

/* Datos estáticos: se calculan una sola vez fuera del componente */
const convocatoriasBase = ofertasData.filter((o) =>
  o.categorias.includes('Convocatorias')
);
const perfilesBase = ['Todos', ...new Set(convocatoriasBase.flatMap((o) => o.perfiles))];

export default function ConvocatoriasPage() {
  const [perfilActivo, setPerfilActivo] = useState('Todos');

  const convocatoriasFiltradas =
    perfilActivo === 'Todos'
      ? convocatoriasBase
      : convocatoriasBase.filter((o) => o.perfiles.includes(perfilActivo));

  return (
    <div className="subofertas-page-container">
      <header className="subofertas-header subofertas-header--convocatorias">
        <h1>Convocatorias</h1>
        <p>
          Oportunidades abiertas para emprendedores, empresas e innovadores
          del oriente antioqueño. No te quedes sin postularte.
        </p>
      </header>

      <div className="subofertas-layout">
        {/* Sidebar de filtros */}
        <aside className="suboferta-filters-sidebar">
          <div className="suboferta-filter-group">
            <h3>Perfil</h3>
            <div className="suboferta-filter-buttons">
              {perfilesBase.map((perf) => (
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

        {/* Grilla de tarjetas */}
        <main className="suboferta-grid-container">
          <div className="suboferta-results-count">
            Te mostramos <strong>{convocatoriasFiltradas.length}</strong> resultado
            {convocatoriasFiltradas.length !== 1 ? 's' : ''}
          </div>

          {convocatoriasFiltradas.length > 0 ? (
            <div className="suboferta-grid">
              {convocatoriasFiltradas.map((oferta) => (
                <OfertaCard key={oferta.id} oferta={oferta} />
              ))}
            </div>
          ) : (
            <div className="suboferta-no-results">
              <p>
                No hay convocatorias activas para ese perfil en este momento.
                ¡Vuelve pronto, siempre hay algo nuevo!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
