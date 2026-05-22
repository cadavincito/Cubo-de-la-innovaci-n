import React from 'react';
import './Conocenos.css';

// 1. IMPORTAMOS LOS COMPONENTES LOCALES (Los que viven en la carpeta de Conocenos)
import PropositoBanner from './components/PropositoBanner';
import HistoriaSection from './components/HistoriaSection';
import FraseBanner from './components/FraseBanner';

// 2. IMPORTAMOS LOS COMPONENTES GLOBALES (Los que compartimos con el Home)
import ServiciosSection from '../../components/sections/ServiciosSection';
import AliadosSection from '../../components/sections/AliadosSection';

export default function Conocenos() {
  return (
    <div className="conocenos-page">
      
      {/* SECCIÓN 1: Banner de Propósito (El que tiene el cristal y el fondo azul) */}
      <PropositoBanner />

      {/* SECCIÓN 2: Historia (Texto a un lado, imagen al otro) */}
      <HistoriaSection />

      {/* SECCIÓN 3: Líneas Estratégicas 
          Usamos el componente de Servicios pero le cambiamos el nombre con la 'prop' customTitle */}
      <ServiciosSection customTitle="Líneas Estratégicas" />

      {/* SECCIÓN 4: Banner con Frase (El respiro visual con degradado) */}
      <FraseBanner />

      {/* SECCIÓN 5: Aliados CTEI (El carrusel infinito de logos) */}
      <AliadosSection />

    </div>
  );
}