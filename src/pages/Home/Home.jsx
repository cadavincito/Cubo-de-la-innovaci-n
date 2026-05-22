import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './Home.css';

// 1. COMPONENTE DEL BANNER (El que acabamos de crear)
// Ajusta la ruta si lo guardaste en otra carpeta
import HeroBannerPrincipal from '../../components/layout/HeroBannerPrincipal'; 

// 2. SECCIONES LOCALES (Exclusivas del Home)
import OfertasEventosSection from './components/OfertasEventosSection';
import CifrasSection from './components/CifrasSection';
import InstagramFeedSection from './components/InstagramFeedSection';
import BannerConocenos from './components/BannerConocenos';

// 3. SECCIONES GLOBALES (Compartidas con otras páginas)
import ServiciosSection from '../../components/sections/ServiciosSection';
import AliadosSection from '../../components/sections/AliadosSection';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      
      {/* 1. SECCIÓN HERO (Ahora como componente independiente) */}
      <HeroBannerPrincipal />

      {/* 2. SECCIÓN DE OFERTAS (Las tarjetas nuevas) */}
      <OfertasEventosSection />

      {/* 3. EL RESTO DE TUS SECCIONES */}
      <BannerConocenos />
      <CifrasSection />
      <ServiciosSection />
      <InstagramFeedSection />
      <AliadosSection />

    </div>
  );
}