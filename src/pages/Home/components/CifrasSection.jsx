import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './CifrasSection.css';

// ==========================================
// SUB-COMPONENTE PARA LA ANIMACIÓN (Conteo)
// ==========================================
const AnimatedCounter = ({ end, prefix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  // 1. Detectar cuando el elemento entra en la pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect(); // Desconecta para que solo anime la primera vez que se ve
        }
      },
      { threshold: 0.5 } // Se activa cuando al menos la mitad de la caja es visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 2. Hacer la animación matemática fluida
  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      // Calcula el progreso de 0 a 1 dependiendo del tiempo
      const progress = Math.min((timestamp - startTimestamp) / duration, 1); 
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Asegura que termine exactamente en tu número
      }
    };
    
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <h3 className="cifra-numero" ref={ref}>{prefix}{count}</h3>;
};

// ==========================================
// COMPONENTE PRINCIPAL DE LA SECCIÓN
// ==========================================
export default function CifrasSection() {
  const { t } = useTranslation();

  return (
    <section className="cifras-section">
      <div className="cifras-container">
        
        {/* Cifra 1 */}
        <div className="cifra-box">
          <AnimatedCounter end={500} prefix="+" />
          <p className="cifra-texto">{t('cifras.emprendedores')}</p>
        </div>

        {/* Cifra 2 */}
        <div className="cifra-box">
          <AnimatedCounter end={120} prefix="+" />
          <p className="cifra-texto">{t('cifras.eventos')}</p>
        </div>

        {/* Cifra 3 */}
        <div className="cifra-box">
          <AnimatedCounter end={4} />
          <p className="cifra-texto">{t('cifras.espacios')}</p>
        </div>

      </div>
    </section>
  );
}