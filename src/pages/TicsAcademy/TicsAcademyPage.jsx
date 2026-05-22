import React from 'react';
import HeroTics from './components/HeroTics';
import AboutTics from './components/AboutTics';

// Importaremos CoursesTics más adelante cuando lo hagamos
import './TicsAcademy.css'; 

export default function TicsAcademyPage() {
  return (
    <div className="tics-academy-page">
      <HeroTics />
      <AboutTics />
    </div>
  );
}