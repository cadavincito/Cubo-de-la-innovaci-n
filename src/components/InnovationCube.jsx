import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Environment } from '@react-three/drei';
import { useTranslation } from 'react-i18next';
import * as THREE from 'three';
import './InnovationCube.css';

// Configuración de pisos con servicios específicos
const FLOORS = [
  {
    id: 'ground',
    name: 'Planta Baja',
    position: [0, 0, 0],
    height: 1.2,
    services: [
      'Recepción y Bienvenida',
      'Prototipado Rápido',
      'Zona de Espera Colaborativa'
    ],
    color: '#D2C5B0',
  },
  {
    id: 'floor2',
    name: 'Piso 2',
    position: [0, 1.4, 0],
    height: 1.2,
    services: [
      'Aceleración de Startups',
      'Mentoría Empresarial',
      'Espacios de Co-working'
    ],
    color: '#C9B9A0',
  },
  {
    id: 'floor3',
    name: 'Piso 3',
    position: [0, 2.8, 0],
    height: 1.2,
    services: [
      'Investigación Avanzada',
      'Comunidad de Innovadores',
      'Eventos de Alto Impacto'
    ],
    color: '#B8AB95',
  },
];

// Componente de Panel de Vidrio (MeshPhysicalMaterial)
function GlassPanel({ position, scale, isHovered }) {
  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      <boxGeometry args={[1, 0.8, 0.05]} />
      <meshPhysicalMaterial
        transmission={0.95}
        opacity={1}
        metalness={0.1}
        roughness={0.1}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        ior={1.5}
        thickness={0.5}
        color={isHovered ? '#b8e0f0' : '#e8f4f8'}
      />
    </mesh>
  );
}

// Componente de Panel Beige (MeshStandardMaterial)
function WallPanel({ position, scale, isHovered }) {
  return (
    <mesh position={position} scale={scale} castShadow receiveShadow>
      <boxGeometry args={[1, 0.8, 0.08]} />
      <meshStandardMaterial
        color={isHovered ? '#dfd5c3' : '#D2C5B0'}
        metalness={0.05}
        roughness={0.7}
        map-encoding={THREE.sRGBEncoding}
      />
    </mesh>
  );
}

// Componente de Estructura Metálica (Columna)
function MetalColumn({ position, height }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[0.25, height, 0.25]} />
      <meshStandardMaterial
        color="#1A1A1A"
        metalness={0.8}
        roughness={0.3}
      />
    </mesh>
  );
}

// Componente de Viga Horizontal
function Beam({ position, width, depth }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[width, 0.15, depth]} />
      <meshStandardMaterial
        color="#1A1A1A"
        metalness={0.8}
        roughness={0.3}
      />
    </mesh>
  );
}

// Componente Principal del Piso
function Floor({ floor, isSelected, isHovered, onHover, onSelect }) {
  const { t } = useTranslation();
  const floorWidth = 5.2 - floor.position[1] * 0.3;
  const floorDepth = 3.6 - floor.position[1] * 0.25;

  const glassPositions = [
    [-floorWidth * 0.35, 0, floorDepth * 0.4],
    [floorWidth * 0.35, 0, -floorDepth * 0.4],
  ];

  const wallPositions = [
    [-floorWidth * 0.35, 0, -floorDepth * 0.4],
    [floorWidth * 0.35, 0, floorDepth * 0.4],
  ];

  return (
    <group position={floor.position}>
      {/* Hitbox Invisible - CRÍTICO para la interactividad */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          onHover(floor.id);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          onHover(null);
          document.body.style.cursor = 'auto';
        }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(floor.id);
        }}
      >
        <boxGeometry args={[floorWidth + 0.3, floor.height + 0.2, floorDepth + 0.3]} />
        <meshBasicMaterial visible={false} />
      </mesh>

      {/* Plataforma Base del Piso */}
      <mesh position={[0, -floor.height / 2, 0]} receiveShadow>
        <boxGeometry args={[floorWidth, 0.08, floorDepth]} />
        <meshStandardMaterial
          color={isSelected ? '#A8D8FF' : isHovered ? '#C4E8FF' : floor.color}
          metalness={0}
          roughness={0.8}
        />
      </mesh>

      {/* Paneles de Vidrio */}
      {glassPositions.map((pos, idx) => (
        <GlassPanel
          key={`glass-${idx}`}
          position={pos}
          scale={[0.7, 0.8, 1]}
          isHovered={isHovered}
        />
      ))}

      {/* Paneles Beige de Pared */}
      {wallPositions.map((pos, idx) => (
        <WallPanel
          key={`wall-${idx}`}
          position={pos}
          scale={[0.7, 0.8, 1]}
          isHovered={isHovered}
        />
      ))}

      {/* Balcón en Piso 3 */}
      {floor.id === 'floor3' && (
        <>
          <mesh position={[0, floor.height * 0.3, floorDepth * 0.5]} castShadow>
            <boxGeometry args={[floorWidth * 0.8, 0.1, 0.3]} />
            <meshStandardMaterial color="#2A2A2A" metalness={0.6} roughness={0.4} />
          </mesh>
          <mesh position={[0, floor.height * 0.2, floorDepth * 0.55]} castShadow>
            <boxGeometry args={[floorWidth * 0.8, 0.15, 0.08]} />
            <meshStandardMaterial color="#1A1A1A" metalness={0.8} roughness={0.2} />
          </mesh>
        </>
      )}

      {/* Jardinera Planta Baja */}
      {floor.id === 'ground' && (
        <mesh position={[0, -floor.height * 0.45, floorDepth * 0.55]} castShadow>
          <boxGeometry args={[floorWidth * 0.9, 0.4, 0.5]} />
          <meshStandardMaterial color="#A89968" metalness={0} roughness={0.9} />
        </mesh>
      )}

      {/* Tarjeta de Información (UI) */}
      {isSelected && (
        <Html
          center
          distanceFactor={6}
          position={[0, floor.height * 0.8, floorDepth * 0.6]}
          style={{ pointerEvents: 'auto' }}
        >
          <div className="pointer-events-auto bg-white p-6 rounded-2xl shadow-2xl w-64 border-l-4 border-blue-500 font-sans transform transition-all hover:shadow-3xl">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {floor.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Servicios disponibles:
            </p>
            <ul className="space-y-2 mb-4">
              {floor.services.map((service, idx) => (
                <li
                  key={idx}
                  className="text-sm flex items-start gap-2"
                >
                  <span className="text-blue-500 font-bold">•</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(null);
              }}
              className="pointer-events-auto w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition active:scale-95"
            >
              Cerrar
            </button>
          </div>
        </Html>
      )}
    </group>
  );
}

// Componente de Estructura Metálica (Exoesqueleto)
function MetalStructure() {
  const maxHeight = 3.2;
  const maxWidth = 5.2;
  const maxDepth = 3.6;

  return (
    <group>
      {/* Columnas en las 4 esquinas */}
      <MetalColumn position={[-maxWidth / 2, maxHeight / 2, -maxDepth / 2]} height={maxHeight} />
      <MetalColumn position={[maxWidth / 2, maxHeight / 2, -maxDepth / 2]} height={maxHeight} />
      <MetalColumn position={[-maxWidth / 2, maxHeight / 2, maxDepth / 2]} height={maxHeight} />
      <MetalColumn position={[maxWidth / 2, maxHeight / 2, maxDepth / 2]} height={maxHeight} />

      {/* Vigas Horizontales Principales */}
      {[0, 1.4, 2.8].map((yPos) => (
        <group key={`beams-${yPos}`}>
          <Beam position={[0, yPos, 0]} width={maxWidth} depth={0.25} />
          <Beam position={[0, yPos, 0]} width={0.25} depth={maxDepth} />
        </group>
      ))}
    </group>
  );
}

// Componente de la Escena
function BuildingScene({ selectedFloor, hoveredFloor, onSelect, onHover }) {
  return (
    <>
      {/* Iluminación */}
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight
        position={[10, 15, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <directionalLight position={[-10, 8, -10]} intensity={0.4} />
      <pointLight position={[0, 5, 0]} intensity={0.3} />

      {/* Ambiente */}
      <Environment preset="city" intensity={0.8} />

      {/* Estructura Metálica */}
      <MetalStructure />

      {/* Pisos */}
      {FLOORS.map((floor) => (
        <Floor
          key={floor.id}
          floor={floor}
          isSelected={selectedFloor === floor.id}
          isHovered={hoveredFloor === floor.id}
          onHover={onHover}
          onSelect={onSelect}
        />
      ))}

      {/* Suelo */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#f5f5f5" metalness={0} roughness={0.8} />
      </mesh>

      {/* Controles */}
      <OrbitControls
        minDistance={8}
        maxDistance={20}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        target={[0, 1.4, 0]}
        autoRotate={false}
      />
    </>
  );
}

// Componente Principal
export default function InnovationCube() {
  const { t } = useTranslation();
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [hoveredFloor, setHoveredFloor] = useState(null);

  const handleSelect = useCallback((id) => {
    setSelectedFloor((prev) => (prev === id ? null : id));
  }, []);

  const handlePointerMissed = useCallback(() => {
    setSelectedFloor(null);
  }, []);

  return (
    <section className="innovation-cube-section" aria-labelledby="innovation-cube-title">
      <div className="innovation-cube-header">
        <h2 id="innovation-cube-title">{t('innovation_cube.title')}</h2>
        <p>{t('innovation_cube.subtitle')}</p>
        <span className="innovation-cube-hint">{t('innovation_cube.hint')}</span>
      </div>

      <div className="innovation-cube-canvas-wrap h-[min(70vh,620px)] min-h-[420px] w-full">
        <Canvas
          shadows
          camera={{ position: [8, 5, 8], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            pixelRatio: Math.min(window.devicePixelRatio, 2),
          }}
          onPointerMissed={handlePointerMissed}
        >
          <color attach="background" args={['#f0f4f8']} />
          <fog attach="fog" args={['#f0f4f8', 15, 50]} />

          <BuildingScene
            selectedFloor={selectedFloor}
            hoveredFloor={hoveredFloor}
            onSelect={handleSelect}
            onHover={setHoveredFloor}
          />
        </Canvas>
      </div>
    </section>
  );
}
