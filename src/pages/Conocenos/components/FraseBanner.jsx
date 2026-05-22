import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importamos el traductor
import './FraseBanner.css';

export default function FraseBanner() {
  const { t } = useTranslation(); // 2. Iniciamos el traductor
  const canvasRef = useRef(null);

  // EFECTO DE ANIMACIÓN DE FONDO CONTINUA (Partículas)
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

    const particles = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.5 + 1,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        color: `rgba(179, 212, 240, ${Math.random() * 0.5 + 0.2})`
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
    <section className="frase-banner-dynamic">
      <canvas ref={canvasRef} className="frase-animation-canvas" />

      <div className="frase-content-frame">
        {/* 3. Reemplazamos los textos estáticos por las variables de traducción */}
        <blockquote className="frase-texto-hero">
          "{t('conocenos_page.frase_texto')}"
        </blockquote>
        <div className="frase-autor-bold">{t('conocenos_page.frase_autor')}</div>
      </div>

    </section>
  );
}