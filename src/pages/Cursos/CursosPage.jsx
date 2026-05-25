import React, { useState } from 'react';
import ofertasData from '../../constants/ofertasData.json';
import OfertaCard from '../../components/common/OfertaCard';
import './CursosPage.css';

/* Categorías que pertenecen a esta página */
const CATEGORIAS_CURSOS = ['Cursos', 'Retos', 'Talleres'];

/* Datos estáticos: se calculan una sola vez fuera del componente */
const cursosBase = ofertasData.filter((o) =>
  o.categorias.some((cat) => CATEGORIAS_CURSOS.includes(cat))
);
const perfilesBase = ['Todos', ...new Set(cursosBase.flatMap((o) => o.perfiles))];

export default function CursosPage() {
  const [perfilActivo, setPerfilActivo] = useState('Todos');

  const cursosFiltrados =
    perfilActivo === 'Todos'
      ? cursosBase
      : cursosBase.filter((o) => o.perfiles.includes(perfilActivo));

  return (
    <div className="subofertas-page-container">
      <header className="subofertas-header">
        <h1>Cursos y Retos</h1>
        <p>
          Formaciones prácticas, talleres y desafíos para impulsar tus
          habilidades digitales y emprendedoras.
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
            Te mostramos <strong>{cursosFiltrados.length}</strong> resultado
            {cursosFiltrados.length !== 1 ? 's' : ''}
          </div>

          {cursosFiltrados.length > 0 ? (
            <div className="suboferta-grid">
              {cursosFiltrados.map((oferta) => (
                <OfertaCard key={oferta.id} oferta={oferta} />
              ))}
            </div>
          ) : (
            <div className="suboferta-no-results">
              <p>
                No hay cursos o retos activos para ese perfil en este momento.
                ¡Vuelve pronto!
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
