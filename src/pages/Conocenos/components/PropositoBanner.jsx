import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './PropositoBanner.css';

// Importa tu imagen azul eléctrico desde assets
import fondoAzulElectrico from '../../../assets/images/banner.webp';

export default function PropositoBanner() {
  const { t } = useTranslation();
  const canvasRef = useRef(null);

  // EFECTO DE ANIMACIÓN DE PARTÍCULAS SUTIL Y LLAMATIVA
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Partículas cristalinas más escasas y lentas para mayor sutileza
    const particles = [];
    for (let i = 0; i < 30; i++) { // Reducimos la cantidad a la mitad
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5, // Más pequeñas
        vx: (Math.random() - 0.5) * 0.8, // Velocidad súper lenta
        vy: (Math.random() - 0.5) * 0.8, 
        color: `rgba(179, 212, 240, ${Math.random() * 0.4 + 0.1})` // Más transparentes
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.random() * Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="proposito-banner-section">
      {/* LA IMAGEN DE FONDO (Con opacidad baja en CSS) */}
      <img src={fondoAzulElectrico} alt="Fondo Azul Eléctrico" className="proposito-bg-image" />

      {/* CANVA PARA LA ANIMACIÓN DE PARTÍCULAS SUTIL */}
      <canvas ref={canvasRef} className="proposito-animation-canvas" />

      {/* CONTENEDOR EFECTO CRISTAL (Glassmorphism) MÁS PEQUEÑO */}
      <div className="proposito-content-frame compact">
        <h2 className="proposito-title-bold">{t('conocenos_page.proposito_title')}</h2>
        <div className="proposito-divider-accent"></div>
        <p className="proposito-text-body">{t('conocenos_page.proposito_text')}</p>
      </div>

    </section>
  );
}