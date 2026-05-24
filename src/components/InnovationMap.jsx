import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cuboImage from '../assets/cubo.png';
import './InnovationMap.css';

// Configuración de plantas y servicios
const FLOORS = [
  {
    id: 'ground',
    name: 'Planta Baja',
    color: '#00d4ff',
    services: [
      'Recepción Central',
      'Espacios de Networking',
      'Laboratorio de Prototipado'
    ],
    // Coordenadas SVG (0-100 escala)
    polygonPoints: '5,55 95,60 95,100 5,100'
  },
  {
    id: 'floor2',
    name: 'Piso 2',
    color: '#0088ff',
    services: [
      'Centro de Aceleración de Startups',
      'Oficinas de Coworking',
      'Mentorías Especializadas'
    ],
    polygonPoints: '8,35 92,38 95,60 5,55'
  },
  {
    id: 'floor3',
    name: 'Piso 3',
    color: '#b800ff',
    services: [
      'Laboratorio de Investigación Avanzada',
      'Ciencia de Datos',
      'Sala de Conferencias de Comunidad CTi'
    ],
    polygonPoints: '12,8 88,10 92,38 8,35'
  }
];

// Componente de la tarjeta flotante
function InfoCard({ floor, onClose }) {
  return (
    <div className="info-card-overlay">
      <div className="info-card">
        <div className="info-card-header">
          <h3>{floor.name}</h3>
          <button
            type="button"
            className="info-card-close"
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <div className="info-card-content">
          <p className="info-card-subtitle">Servicios disponibles:</p>
          <ul className="info-card-services">
            {floor.services.map((service, idx) => (
              <li key={idx}>
                <span className="service-dot"></span>
                {service}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="info-card-button"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}

// Componente Principal
export default function InnovationMap() {
  const { t } = useTranslation();
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [hoveredFloor, setHoveredFloor] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleImageLoad = (e) => {
    setImageSize({
      width: e.target.offsetWidth,
      height: e.target.offsetHeight
    });
  };

  const handleFloorHover = useCallback((floorId) => {
    setHoveredFloor(floorId);
    document.body.style.cursor = 'pointer';
  }, []);

  const handleFloorOut = useCallback(() => {
    setHoveredFloor(null);
    document.body.style.cursor = 'auto';
  }, []);

  const handleFloorClick = useCallback((e, floorId) => {
    e.stopPropagation();
    setSelectedFloor(floorId);
  }, []);

  const handleCloseCard = useCallback(() => {
    setSelectedFloor(null);
  }, []);

  const selectedFloorData = selectedFloor
    ? FLOORS.find(f => f.id === selectedFloor)
    : null;

  return (
    <section className="innovation-map-section" aria-labelledby="innovation-map-title">
      <div className="innovation-map-header">
        <h2 id="innovation-map-title">{t('innovation_cube.title')}</h2>
        <p>{t('innovation_cube.subtitle')}</p>
        <span className="innovation-map-hint">{t('innovation_cube.hint')}</span>
      </div>

      <div className="innovation-map-container">
        {/* Imagen de Fondo */}
        <img
          src={cuboImage}
          alt="Cubo de la Innovación"
          className="innovation-map-image"
          onLoad={handleImageLoad}
        />

        {/* SVG Superpuesto con Zonas Interactivas */}
        <svg
          className="innovation-map-overlay"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ pointerEvents: 'auto' }}
        >
          {FLOORS.map((floor) => (
            <polygon
              key={floor.id}
              points={floor.polygonPoints}
              className={`floor-zone ${hoveredFloor === floor.id ? 'hovered' : ''} ${
                selectedFloor === floor.id ? 'selected' : ''
              }`}
              fill={
                hoveredFloor === floor.id || selectedFloor === floor.id
                  ? floor.color
                  : 'transparent'
              }
              stroke={
                hoveredFloor === floor.id || selectedFloor === floor.id
                  ? floor.color
                  : 'transparent'
              }
              strokeWidth="0.5"
              opacity={hoveredFloor === floor.id || selectedFloor === floor.id ? 0.6 : 0.1}
              onMouseEnter={() => handleFloorHover(floor.id)}
              onMouseLeave={handleFloorOut}
              onClick={(e) => handleFloorClick(e, floor.id)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </svg>

        {/* Tarjeta de Información */}
        {selectedFloorData && (
          <InfoCard floor={selectedFloorData} onClose={handleCloseCard} />
        )}
      </div>
    </section>
  );
}
