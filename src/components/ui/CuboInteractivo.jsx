import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './CuboInteractivo.css';

const CARAS = [
  {
    id: 'front',
    faceClass: 'cubo-face--front',
    titleKey: 'cubo_interactivo.faces.academy_title',
    descKey: 'cubo_interactivo.faces.academy_desc',
    route: '/servicios/academy',
    accent: '#f97316',
  },
  {
    id: 'back',
    faceClass: 'cubo-face--back',
    titleKey: 'cubo_interactivo.faces.rioinnova_title',
    descKey: 'cubo_interactivo.faces.rioinnova_desc',
    route: '/servicios/rioinnova',
    accent: '#0967a6',
  },
  {
    id: 'right',
    faceClass: 'cubo-face--right',
    titleKey: 'cubo_interactivo.faces.land_title',
    descKey: 'cubo_interactivo.faces.land_desc',
    route: '/servicios/land',
    accent: '#10b981',
  },
  {
    id: 'left',
    faceClass: 'cubo-face--left',
    titleKey: 'cubo_interactivo.faces.hub_title',
    descKey: 'cubo_interactivo.faces.hub_desc',
    route: '/servicios/hubtics',
    accent: '#6d28d9',
  },
  {
    id: 'top',
    faceClass: 'cubo-face--top',
    titleKey: 'cubo_interactivo.faces.cowork_title',
    descKey: 'cubo_interactivo.faces.cowork_desc',
    route: '/espacios/coworklabs',
    accent: '#0d9488',
  },
  {
    id: 'bottom',
    faceClass: 'cubo-face--bottom',
    titleKey: 'cubo_interactivo.faces.maker_title',
    descKey: 'cubo_interactivo.faces.maker_desc',
    route: '/espacios/maker-space',
    accent: '#00d2ff',
  },
];

const AUTO_ROTATE_DURATION_MS = 24000;
const DRAG_SENSITIVITY = 0.45;
const CLICK_THRESHOLD_PX = 6;

export default function CuboInteractivo() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [rotX, setRotX] = useState(-18);
  const [rotY, setRotY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [userControlled, setUserControlled] = useState(false);

  const dragRef = useRef({
    pointerId: null,
    startX: 0,
    startY: 0,
    startRotX: -18,
    startRotY: 0,
    moved: false,
  });

  useEffect(() => {
    if (userControlled) return undefined;

    const startTime = performance.now();
    let rafId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = (elapsed % AUTO_ROTATE_DURATION_MS) / AUTO_ROTATE_DURATION_MS;
      setRotY(progress * 360);
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [userControlled]);

  const handlePointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setUserControlled(true);
    setIsDragging(true);

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startRotX: rotX,
      startRotY: rotY,
      moved: false,
    };
  };

  const handlePointerMove = (event) => {
    if (dragRef.current.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - dragRef.current.startX;
    const deltaY = event.clientY - dragRef.current.startY;

    if (
      Math.abs(deltaX) > CLICK_THRESHOLD_PX ||
      Math.abs(deltaY) > CLICK_THRESHOLD_PX
    ) {
      dragRef.current.moved = true;
    }

    setRotY(dragRef.current.startRotY + deltaX * DRAG_SENSITIVITY);
    setRotX(dragRef.current.startRotX - deltaY * DRAG_SENSITIVITY);
  };

  const endDrag = (event) => {
    if (dragRef.current.pointerId !== event.pointerId) return;

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    setIsDragging(false);
    dragRef.current.pointerId = null;
  };

  const handleFaceClick = (route) => {
    if (dragRef.current.moved) return;
    navigate(route);
  };

  const handleFaceKeyDown = (event, route) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigate(route);
    }
  };

  return (
    <section className="cubo-interactivo-section" aria-labelledby="cubo-interactivo-title">
      <div className="cubo-interactivo-header">
        <h2 id="cubo-interactivo-title" className="cubo-interactivo-title">
          {t('cubo_interactivo.title')}
        </h2>
        <p className="cubo-interactivo-subtitle">{t('cubo_interactivo.subtitle')}</p>
      </div>

      <div className="cubo-scene-container">
        <div
          className={`cubo-scene ${isDragging ? 'cubo-scene--dragging' : ''}`}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
          role="presentation"
        >
          <div
            className="cubo-animator"
            style={{
              transform: `rotateX(${rotX}deg) rotateY(${rotY}deg)`,
            }}
          >
            <div className="cubo-inner">
              {CARAS.map((cara) => (
                <button
                  key={cara.id}
                  type="button"
                  className={`cubo-face ${cara.faceClass}`}
                  style={{ '--face-accent': cara.accent }}
                  onClick={() => handleFaceClick(cara.route)}
                  onKeyDown={(e) => handleFaceKeyDown(e, cara.route)}
                  aria-label={`${t(cara.titleKey)} — ${t(cara.descKey)}`}
                >
                  <span className="cubo-face-icon" aria-hidden="true">
                    ↗
                  </span>
                  <h3 className="cubo-face-title">{t(cara.titleKey)}</h3>
                  <p className="cubo-face-desc">{t(cara.descKey)}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="cubo-interactivo-hint">{t('cubo_interactivo.hint')}</p>
    </section>
  );
}
