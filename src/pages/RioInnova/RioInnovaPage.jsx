import React from 'react';
import RioInnovaBanner from './components/RioInnovaBanner';
import RioInnovaQueEs from './components/RioInnovaQueEs';
import RioInnovaProgramas from './components/RioInnovaProgramas';
import RioInnovaSectores from './components/RioInnovaSectores';

export default function RioInnovaPage() {
  return (
    <div className="rioinnova-page-container">
      <RioInnovaBanner />
      <RioInnovaQueEs />
      <RioInnovaProgramas />
      <RioInnovaSectores />
    </div>
  );
}