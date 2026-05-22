import React from 'react';
import HeroTicsLand from './components/HeroTicsLand';
import AboutTicsLand from './components/AboutTicsLand';
import LinesTicsLand from './components/LinesTicsLand';
import RouteTicsLand from './components/RouteTicsLand';
import SectorsTicsLand from './components/SectorsTicsLand';
import './TicsLand.css'; 

export default function TicsLandPage() {
  return (
    <div className="tics-land-page">
      <HeroTicsLand />
      <AboutTicsLand />
      <LinesTicsLand />
      <RouteTicsLand />
      <SectorsTicsLand />
      
    </div>
  );
}