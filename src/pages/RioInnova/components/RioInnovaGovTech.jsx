import React from 'react';
import './RioInnovaGovTech.css';

export default function RioInnovaGovTech() {
  // El link del taller que me pasaste
  const urlTaller = "https://sites.google.com/view/rioinnova/taller";

  return (
    <div className="govtech-external-wrapper">
      <iframe 
        src={urlTaller}
        title="Taller RIO-INNOVA"
        className="govtech-external-iframe"
        allowFullScreen
      ></iframe>
    </div>
  );
}