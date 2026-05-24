import React from 'react';
import './Home.css';
import HeroBannerPrincipal from '../../components/layout/HeroBannerPrincipal';
import CuboInteractivo from '../../components/ui/CuboInteractivo';
import InnovationMap from '../../components/InnovationMap';
import OfertasEventosSection from './components/OfertasEventosSection';
import CifrasSection from './components/CifrasSection';
import InstagramFeedSection from './components/InstagramFeedSection';
import BannerConocenos from './components/BannerConocenos';
import ServiciosSection from '../../components/sections/ServiciosSection';
import AliadosSection from '../../components/sections/AliadosSection';

export default function Home() {
  return (
    <div className="home-container">
      <HeroBannerPrincipal />
      <CuboInteractivo />
      <InnovationMap />
      <OfertasEventosSection />
      <BannerConocenos />
      <CifrasSection />
      <ServiciosSection />
      <InstagramFeedSection />
      <AliadosSection />
    </div>
  );
}
