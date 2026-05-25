# Cubo de la Innovación — Rionegro

El **Cubo de la Innovación** es la plataforma web oficial del ecosistema de ciencia, tecnología e innovación (CTI) del municipio de Rionegro, Antioquia. Centraliza en una sola experiencia interactiva la oferta de servicios, programas, espacios y convocatorias disponibles para emprendedores, empresarios y ciudadanos del oriente antioqueño.

Resuelve la fragmentación en la comunicación del ecosistema local: en lugar de buscar información dispersa, cualquier persona puede navegar desde un cubo 3D interactivo hasta los detalles de cada servicio, espacio o convocatoria abierta, todo en español e inglés.

---

## Tabla de contenidos

1. [Características](#características)
2. [Tecnologías](#tecnologías)
3. [Requisitos previos](#requisitos-previos)
4. [Instalación](#instalación)
5. [Ejecución](#ejecución)
6. [Scripts disponibles](#scripts-disponibles)
7. [Estructura del proyecto](#estructura-del-proyecto)
8. [Variables de entorno](#variables-de-entorno)
9. [Despliegue](#despliegue)
10. [Contribución](#contribución)
11. [Roadmap](#roadmap)
12. [Autores](#autores)
13. [Licencia](#licencia)

---

## Características

- **Cubo 3D interactivo:** Visualización Three.js que sirve como menú principal; el usuario gira el cubo y accede a cada servicio tocando una cara.
- **Rutas personalizadas por perfil:** Flujos diferenciados para emprendedores (ideación → preincubación → incubación) y empresarios (aceleración → internacionalización).
- **Gestión de ofertas y eventos:** Listado filtrable de convocatorias y actividades con fechas, lugar y enlace de inscripción.
- **Mapa de espacios físicos:** Páginas dedicadas a CoWorklabs, Maker Space y Cubo de la Innovación con modelo 3D del edificio por pisos.
- **Seis líneas de servicio:** Hub Tics, RioInnova, Tics Academy, Tics Land, Rionegro Smart City y Observatorio CTI.
- **Chatbot Cubix:** Asistente flotante de atención al ciudadano (versión beta).
- **Bilingüe (ES / EN):** Interfaz completa disponible en español e inglés mediante i18next.

---

## Tecnologías

- **Frontend:** React 18 + Vite 5
- **3D / Visualización:** Three.js · @react-three/fiber · @react-three/drei
- **Enrutamiento:** React Router DOM v7
- **Estilos:** Tailwind CSS 3 · CSS Modules por página
- **Internacionalización:** i18next · react-i18next (ES / EN)
- **Iconos:** react-icons
- **Herramientas:** ESLint · PostCSS · Autoprefixer

---

## Requisitos previos

- **Node.js** v18 o superior — [descargar](https://nodejs.org/)
- **npm** v9 o superior (incluido con Node.js)

---

## Instalación

```bash
# 1) Clonar el repositorio
git clone https://github.com/cadavincito/Cubo-de-la-innovaci-n.git

# 2) Entrar al directorio
cd Cubo-de-la-innovaci-n

# 3) Instalar dependencias
npm install
```

---

## Ejecución

```bash
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Levanta el servidor de desarrollo con hot-reload |
| `npm run build` | Genera la versión optimizada de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |

---

## Estructura del proyecto

```
.
├── public/                      # Recursos estáticos públicos
├── src/
│   ├── assets/images/           # Imágenes, logos y recursos gráficos
│   ├── components/
│   │   ├── common/              # Componentes reutilizables (EventoCard, etc.)
│   │   ├── layout/              # Navbar y Footer globales
│   │   ├── sections/            # Secciones compartidas (AliadosSection, etc.)
│   │   └── ui/                  # Elementos de interfaz (FloatingChatbot, etc.)
│   ├── constants/               # Datos estáticos (servicesData.js)
│   ├── hooks/                   # Custom hooks (useSlider)
│   ├── pages/
│   │   ├── Conocenos/           # Página "Conócenos" (propósito e historia)
│   │   ├── Contacto/            # Formulario de contacto
│   │   ├── Emprendedor/         # Ruta para emprendedores
│   │   ├── Empresario/          # Ruta para empresarios
│   │   ├── Espacios/            # Espacios físicos (MakerSpace, CoWorklabs, Cubo)
│   │   ├── Home/                # Página principal con cubo 3D
│   │   ├── HubTics/             # Línea Hub Tics
│   │   ├── Observatorio/        # Observatorio CTI
│   │   ├── Ofertas/             # Listado de ofertas y convocatorias
│   │   ├── Perfiles/            # Componentes comunes de perfil
│   │   ├── RioGo/               # Programa RIO-GO
│   │   ├── RioInnova/           # Línea RioInnova (incluye GovTech)
│   │   ├── SmartCity/           # Rionegro Smart City
│   │   ├── TicsAcademy/         # Tics Academy (formación digital)
│   │   └── TicsLand/            # Tics Land (fortalecimiento empresarial)
│   ├── App.jsx                  # Componente raíz con definición de rutas
│   ├── i18n.js                  # Configuración de i18next (ES / EN)
│   └── main.jsx                 # Punto de entrada de la aplicación
├── eslint.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## Variables de entorno

Este proyecto no requiere variables de entorno para ejecutarse en modo desarrollo. Si en el futuro se conecta a una API externa, crear un archivo `.env` en la raíz con las variables correspondientes:

```bash
cp .env.example .env
```

Ejemplo de variables que podrían añadirse:

| Variable | Descripción |
|---|---|
| `VITE_API_URL` | URL base de la API de eventos y convocatorias |
| `VITE_APP_ENV` | Entorno de ejecución (`development` / `production`) |

---

## Despliegue

```bash
# 1) Generar el build de producción
npm run build

# 2) La carpeta /dist contiene los archivos listos para publicar
```

El resultado en `/dist` es un sitio estático que puede alojarse en cualquier CDN o servidor de archivos estáticos (Netlify, Vercel, GitHub Pages, AWS S3, etc.).

---

## Contribución

1. Crear una rama desde `master` con nombre descriptivo:
   ```bash
   git checkout -b feature/nombre-de-la-funcionalidad
   ```
2. Realizar los cambios y hacer commits con mensajes claros en español.
3. Abrir un Pull Request hacia `master` describiendo qué se cambió y por qué.
4. Esperar revisión antes de hacer merge.

---

## Roadmap

- [ ] Chatbot Cubix con respuestas dinámicas e integración a backend
- [ ] API real para eventos y convocatorias (reemplazar datos estáticos)
- [ ] Feed de Instagram en vivo
- [ ] Suscripción al boletín funcional (integración con servicio de email)
- [ ] Traducciones EN completas para todas las páginas de servicio
- [ ] Panel de administración para gestionar ofertas y eventos

---

## Autores

- **Lauro Orozco** — Desarrollo
- **Mateo Alzate** — Desarrollo
- **Antonio Cadavid** — Desarrollo
- **Andrea Botero** — Desarrollo

---

## Licencia

Proyecto de uso institucional del municipio de Rionegro. Todos los derechos reservados © 2026 Cubo de la Innovación.
