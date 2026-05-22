import React from 'react';
import { useTranslation } from 'react-i18next';

import DSC02687 from '../../../assets/images/DSC02687.webp'
import DSC02734 from '../../../assets/images/DSC02734.webp'
import DSC02815 from '../../../assets/images/DSC02815.webp'

// Array de imágenes para la animación (fotos reales o de stock)
const col1Images = [
  "https://rionegro.gov.co/info/rionegro_se/media/pubInt/thumbs/thpubInt_700X400_948.webp",
  "https://cubodelainnovacion.com/wp-content/uploads/2025/06/Imagen-de-WhatsApp-2025-06-09-a-las-08.50.08_1f808566-768x1024.jpg",
  "https://cubodelainnovacion.com/wp-content/uploads/2025/09/Imagen-de-WhatsApp-2025-09-02-a-las-10.32.25_dc80c494-1024x768.jpg"
];

const col2Images = [
  DSC02687,
  DSC02734,
  DSC02815,
];

export default function AboutTics() {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <section className="tics-about-section">
      <div className="tics-about-container">
        
        {/* TEXTOS (Ahora irán justificados por CSS) */}
        <div className="tics-about-text">
          <h2 className="tics-section-title">
            {isEnglish ? "What is TICS Academy?" : "¿Qué es TICS Academy?"}
          </h2>
          <p>
            {isEnglish
              ? "It is a strategic strengthening line aimed at developing skills in science, technology, and innovation, designed to prepare citizens for the challenges of an increasingly digital and competitive world. Through practical, accessible, and updated learning processes, it seeks to strengthen skills in technological tools, critical thinking, creativity, and innovation."
              : "Es una línea estratégica de fortalecimiento orientada al desarrollo de habilidades en ciencia, tecnología e innovación, diseñada para preparar a la ciudadanía frente a los retos de un mundo cada vez más digital y competitivo. A través de procesos de aprendizaje prácticos, accesibles y actualizados, busca fortalecer competencias en herramientas tecnológicas, pensamiento crítico, creatividad e innovación."}
          </p>
          <p>
            {isEnglish
              ? "TICS Academy promotes access to knowledge, closing digital gaps, and generating opportunities, forming talent capable of transforming their environment, contributing to the development of the territory, and actively participating in the knowledge economy."
              : "TICS Academy promueve el acceso al conocimiento, el cierre de brechas digitales y la generación de oportunidades, formando talento capaz de transformar su entorno, aportar al desarrollo del territorio y participar activamente en la economía del conocimiento."}
          </p>
        </div>

        {/* GRID DE IMÁGENES CONTINUAS */}
        <div className="tics-about-visual-grid">
          
          {/* Columna 1: Animación hacia arriba */}
          <div className="scrolling-col col-up">
            {/* Duplicamos el array para que el scroll sea infinito y no se corte */}
            {[...col1Images, ...col1Images].map((imgSrc, index) => (
              <img key={`col1-${index}`} src={imgSrc} alt="Tech Academy" className="grid-anim-img" />
            ))}
          </div>

          {/* Columna 2: Animación hacia abajo */}
          <div className="scrolling-col col-down">
            {/* Duplicamos también */}
            {[...col2Images, ...col2Images].map((imgSrc, index) => (
              <img key={`col2-${index}`} src={imgSrc} alt="Innovation" className="grid-anim-img" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}