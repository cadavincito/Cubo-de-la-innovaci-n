import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ofertasData } from '../../constants/ofertasData';
import OfertaCard from '../../components/common/OfertaCard';
import './OfertasPage.css';

export default function OfertasPage() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  // ESTADOS PARA LOS FILTROS
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [perfilActivo, setPerfilActivo] = useState('Todos');

  // LÓGICA DINÁMICA: Extraer categorías y perfiles únicos de los datos
  const categoriasUnicas = useMemo(() => {
    const cats = ofertasData.flatMap(o => o.categorias);
    return ['Todas', ...new Set(cats)];
  }, []);

  const perfilesUnicos = useMemo(() => {
    const perfs = ofertasData.flatMap(o => o.perfiles);
    return ['Todos', ...new Set(perfs)];
  }, []);

  // FILTRADO DE LA LISTA
  const ofertasFiltradas = ofertasData.filter(oferta => {
    const cumpleCategoria = categoriaActiva === 'Todas' || oferta.categorias.includes(categoriaActiva);
    const cumplePerfil = perfilActivo === 'Todos' || oferta.perfiles.includes(perfilActivo);
    return cumpleCategoria && cumplePerfil;
  });

  return (
    <div className="ofertas-page-container">
      <header className="ofertas-header">
        <h1>{isEnglish ? "Offers & Calls" : "Ofertas y Convocatorias"}</h1>
        <p>{isEnglish ? "Explore all our active programs" : "Explora todos nuestros programas activos"}</p>
      </header>

      <div className="ofertas-content-layout">
        {/* PANEL DE FILTROS (Lateral en Desktop) */}
        <aside className="filters-sidebar">
          <div className="filter-group">
            <h3>{isEnglish ? "Category" : "Categoría"}</h3>
            <div className="filter-buttons">
              {categoriasUnicas.map(cat => (
                <button 
                  key={cat}
                  className={categoriaActiva === cat ? 'active' : ''}
                  onClick={() => setCategoriaActiva(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <h3>{isEnglish ? "Profile" : "Perfil"}</h3>
            <div className="filter-buttons">
              {perfilesUnicos.map(perf => (
                <button 
                  key={perf}
                  className={perfilActivo === perf ? 'active' : ''}
                  onClick={() => setPerfilActivo(perf)}
                >
                  {perf}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* GRILLA DE RESULTADOS */}
        <main className="ofertas-grid-container">
          <div className="results-count">
            {isEnglish ? "Showing" : "Mostrando"} {ofertasFiltradas.length} {isEnglish ? "results" : "resultados"}
          </div>
          
          <div className="ofertas-grid">
            {ofertasFiltradas.map(oferta => (
              <OfertaCard key={oferta.id} oferta={oferta} />
            ))}
          </div>

          {ofertasFiltradas.length === 0 && (
            <div className="no-results">
              <p>{isEnglish ? "No offers found for these filters." : "No se encontraron ofertas con estos filtros."}</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}