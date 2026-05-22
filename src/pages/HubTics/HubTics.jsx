import React from 'react';

// Componentes específicos de esta página
import HubBanner from './components/HubBanner';
import PropositoSection from './components/PropositoSection';
import ServiciosHub from './components/ServiciosHub';
import ConvocatoriasRioGo from './components/ConvocatoriasRioGo';

// 👇 1. Importamos el componente universal de Aliados 👇
import AliadosSection from '../../components/sections/AliadosSection';

export default function PaginaHubTics() {
  return (
    <div>
      {/* 1. El banner principal */}
      <HubBanner />

      {/* 2. Sección limpia y blanca de Propósito */}
      <PropositoSection />

      {/* 3. Tarjetas de Servicios (Observatorio, Smart Cities...) */}
      <ServiciosHub />

      {/* 4. El nuevo llamado a la acción de Convocatorias Rio-GO */}
      <ConvocatoriasRioGo />

      {/* 👇 5. ¡AQUÍ CERRAMOS CON LA SECCIÓN UNIVERSAL DE ALIADOS! 👇 */}
      <AliadosSection />
    </div>
  );
}