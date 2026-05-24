import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "hero": {
        "subtitle": "El epicentro de Ciencia, Tecnología e Innovación para el oriente antioqueño.",
        "route_cta": "Escoge tu Ruta dependiendo de tu perfil",
        "btn_conocenos": "CONÓCENOS",
        "btn_espacios": "EXPLORAR ESPACIOS",
        "btn_empresario": "SOY EMPRESARIO",
        "btn_emprendedor": "SOY EMPRENDEDOR / QUIERO EMPRENDER"
      },
      "ofertas_eventos": {
        "title": "Ofertas y eventos",
        "subtitle": "Descubre los programas, retos y actividades que el Cubo de la Innovación tiene para ti.",
        "tab_ofertas": "Ofertas",
        "tab_eventos": "Eventos",
        "view_all": "Ver todos los eventos",
        "date": "Fecha",
        "time": "Hora",
        "place": "Lugar",
        "closes": "Cierra",
        "free_entry": "Entrada libre",
        "see_more": "Ver más"
      },
      "banner_conocenos": {
        "title_1": "Impulsamos el ",
        "title_highlight": "Futuro",
        "title_2": " de la Región",
        "subtitle": "Ciencia y Tecnología para el Oriente Antioqueño",
        "desc": "Acompañamos tu idea, fortalecemos tu empresa. Únete a nuestro ecosistema de innovación.",
        "btn": "CONÓCENOS MÁS"
      },
      "footer": {
        "desc": "El epicentro del ecosistema de Ciencia, Tecnología e Innovación para el oriente.",
        "quick_links": "ENLACES RÁPIDOS",
        "about": "Conócenos",
        "offers": "Ofertas y Convocatorias",
        "spaces": "Nuestros Espacios",
        "services": "Servicios",
        "citizen_service": "ATENCIÓN AL CIUDADANO",
        "contact": "Contacto y PQRS",
        "faq": "Preguntas Frecuentes (FAQs)",
        "transparency": "Transparencia",
        "public_policy": "Política Pública",
        "subscribe": "SUSCRÍBETE AL BOLETÍN",
        "subscribe_desc": "Recibe las últimas noticias, retos y convocatorias en tu correo.",
        "email_placeholder": "Tu correo electrónico",
        "subscribe_btn": "SUSCRIBIRSE",
        "rights": "© 2026 Cubo de la Innovación. Todos los derechos reservados."
      },
      "cubo_interactivo": {
        "title": "Explora el Cubo",
        "subtitle": "Gira y descubre cada línea de acción. Haz clic en una cara para conocer más.",
        "hint": "Pasa el cursor para pausar · Haz clic en una cara para explorar",
        "faces": {
          "academy_title": "Tics Academy",
          "academy_desc": "Formación digital",
          "rioinnova_title": "RioInnova",
          "rioinnova_desc": "Aceleración e innovación",
          "land_title": "Tics Land",
          "land_desc": "Creatividad y experimentación",
          "hub_title": "Hub Tics",
          "hub_desc": "Conexión empresarial",
          "cowork_title": "CoWorklabs",
          "cowork_desc": "Coworking y networking",
          "maker_title": "Maker Space",
          "maker_desc": "Laboratorios y prototipado"
        }
      },
      "servicios_banner": {
        "title": "Nuestros Servicios",
        "desc": "Descubre las diferentes líneas de acción que el Cubo de la Innovación ofrece para potenciar tu talento, acelerar tu empresa y conectar con el futuro.",
        "academy_title": "Tics Academy",
        "academy_desc": "Formación en habilidades digitales.",
        "rioinnova_title": "RioInnova",
        "rioinnova_desc": "Aceleración y emprendimiento.",
        "land_title": "Tics Land",
        "land_desc": "Espacios creativos y experimentación.",
        "hub_title": "Hub Tics",
        "hub_desc": "Conexión empresarial y networking."
      },
      "aliados": {
        "title": "Nuestros Aliados",
        "desc": "Trabajamos de la mano con organizaciones líderes para impulsar el ecosistema de innovación."
      },
      "cifras": {
        "emprendedores": "Emprendedores apoyados",
        "eventos": "Eventos realizados",
        "espacios": "Espacios de innovación"
      },
      "instagram": {
        "title": "Síguenos en Instagram",
        "user": "@cuboinnovacion",
        "btn": "Ir al perfil"
      },
      "conocenos_page": {
        "proposito_title": "Nuestro Propósito",
        "proposito_text": "Ser el principal catalizador del ecosistema de Ciencia, Tecnología e Innovación (CTel) de Rionegro y el Oriente Antioqueño, conectando el talento local con oportunidades globales y fomentando el desarrollo sostenible de la región.",
        "historia_title": "Nuestra Historia",
        "historia_subtitle": "Impulsando el ecosistema de innovación local",
        "historia_text": " El Cubo de la Innovación nace como una respuesta de la política pública de ciencia, tecnología e innovación del municipio, con el propósito de consolidar el ecosistema municipal y regional de innovación. Somos un espacio creado para conectar ciudadanía, empresas, academia y Estado alrededor de la ciencia, la tecnología y la innovación, impulsando ideas, proyectos y soluciones que aporten al desarrollo y la transformación del territorio.",
        "frase_texto": "La innovación no es solo tecnología, es la capacidad de transformar realidades y conectar el talento con el futuro.",
        "frase_autor": "— Ecosistema Cubo de la Innovación"
      },
      "hubtics_page": {
        "badge": "Línea Estratégica",
        "title": "Hub Tics",
        "desc": "Conectamos la innovación con el desarrollo territorial. El epicentro donde las ideas se convierten en proyectos de alto impacto para el Oriente Antioqueño."
      },
      "emprendedor_page": {
        "badge": "Perfil",
        "title": "Soy emprendedor",
        "subtitle": "Recursos para idear, validar y dar los primeros pasos con tu negocio en el ecosistema del Cubo de la Innovación.",
        "programs_title": "Programas para tu etapa",
        "phases_title": "Tu ruta de crecimiento",
        "ofertas_title": "Ofertas para ti",
        "ofertas_cta": "Ver todas las ofertas",
        "ofertas_empty": "No hay ofertas activas para tu perfil en este momento. Explora todas las convocatorias disponibles.",
        "servicios_title": "Líneas estratégicas recomendadas",
        "cta_title": "¿Listo para empezar?",
        "cta_desc": "Explora nuestros espacios de innovación y da el primer paso con tu idea.",
        "cta_btn": "Explorar espacios",
        "programs": {
          "academy_title": "Tics Academy",
          "academy_desc": "Formación en habilidades digitales para cerrar brechas y fortalecer tu perfil.",
          "land_title": "Tics Land",
          "land_desc": "Aceleración y acompañamiento en las primeras etapas de tu emprendimiento.",
          "maker_title": "Maker Space",
          "maker_desc": "Prototipado y fabricación digital para materializar tu idea.",
          "riogo_title": "RIO-GO",
          "riogo_desc": "Programa gratuito para nacer con ADN digital desde el día uno.",
          "cowork_title": "CoWorklabs",
          "cowork_desc": "Espacio de colaboración y networking con otros emprendedores."
        },
        "phases": {
          "ideacion_title": "Ideación",
          "ideacion_desc": "Genera y valida ideas creativas para resolver problemas o satisfacer necesidades del mercado.",
          "preincubacion_title": "Preincubación",
          "preincubacion_desc": "Valida tu idea de negocio, define el modelo y desarrolla tu primer producto mínimo viable.",
          "incubacion_title": "Incubación",
          "incubacion_desc": "Accede a asesoría, formación y conexiones para formalizar procesos y lograr ventas constantes."
        }
      },
      "empresario_page": {
        "badge": "Perfil",
        "title": "Soy empresario",
        "subtitle": "Soluciones para escalar, consolidar y transformar digitalmente tu empresa con el apoyo del Cubo.",
        "programs_title": "Programas para tu empresa",
        "phases_title": "Etapas de madurez",
        "ofertas_title": "Ofertas para tu perfil",
        "ofertas_cta": "Ver todas las ofertas",
        "ofertas_empty": "No hay ofertas activas para tu perfil en este momento. Explora todas las convocatorias disponibles.",
        "servicios_title": "Líneas estratégicas recomendadas",
        "cta_title": "¿Listo para transformar tu empresa?",
        "cta_desc": "Conecta con programas de innovación empresarial y transformación digital avanzada.",
        "cta_btn": "Contáctanos",
        "programs": {
          "rioinnova_title": "RioInnova — Innovación Empresarial",
          "rioinnova_desc": "Aceleración de la transformación digital y retos de industria con startups locales.",
          "land_title": "Tics Land — Fortalecimiento",
          "land_desc": "Madurez digital y competitiva para empresas en etapas de aceleración e internacionalización.",
          "hub_title": "Hub Tics",
          "hub_desc": "Conexión empresarial, networking y desarrollo territorial con innovación.",
          "smartcity_title": "Rionegro Smart City",
          "smartcity_desc": "Territorio inteligente y decisiones basadas en datos para la competitividad regional.",
          "observatorio_title": "Observatorio CTeI",
          "observatorio_desc": "Indicadores de ciencia, tecnología e innovación para orientar tu estrategia.",
          "riogo_title": "RIO-GO",
          "riogo_desc": "Expande tu negocio con procesos de venta online y experiencia de cliente digital."
        },
        "phases": {
          "aceleracion_title": "Aceleración",
          "aceleracion_desc": "Escala tu negocio con mentorías, financiamiento y mejoras en procesos clave.",
          "internacionalizacion_title": "Internacionalización",
          "internacionalizacion_desc": "Expande operaciones a mercados internacionales con estrategias adaptadas y alianzas globales."
        }
      }
    }
  },
  en: {
    translation: {
      "hero": {
        "subtitle": "The epicenter of Science, Technology, and Innovation for Eastern Antioquia.",
        "route_cta": "Choose your path based on your profile",
        "btn_conocenos": "ABOUT US",
        "btn_espacios": "EXPLORE SPACES",
        "btn_empresario": "I AM A BUSINESS OWNER",
        "btn_emprendedor": "I WANT TO START / I AM AN ENTREPRENEUR"
      },
      "ofertas_eventos": {
        "title": "Offers and Events",
        "subtitle": "Discover the programs, challenges, and activities that the Innovation Cube has for you.",
        "tab_ofertas": "Offers",
        "tab_eventos": "Events",
        "view_all": "View all events",
        "date": "Date",
        "time": "Time",
        "place": "Place",
        "closes": "Closes",
        "free_entry": "Free entry",
        "see_more": "See more"
      },
      "banner_conocenos": {
        "title_1": "Driving the ",
        "title_highlight": "Future",
        "title_2": " of the Region",
        "subtitle": "Science and Technology for Eastern Antioquia",
        "desc": "We support your idea, we strengthen your company. Join our innovation ecosystem.",
        "btn": "KNOW MORE ABOUT US"
      },
      "footer": {
        "desc": "The center of the Science, Technology, and Innovation ecosystem for the east.",
        "quick_links": "QUICK LINKS",
        "about": "About Us",
        "offers": "Offers and Open Calls",
        "spaces": "Our Spaces",
        "services": "Services",
        "citizen_service": "CITIZEN SERVICE",
        "contact": "Contact and PQRS",
        "faq": "Frequently Asked Questions (FAQs)",
        "transparency": "Transparency",
        "public_policy": "Public Policy",
        "subscribe": "SUBSCRIBE TO NEWSLETTER",
        "subscribe_desc": "Receive the latest news, challenges, and open calls in your email.",
        "email_placeholder": "Your email address",
        "subscribe_btn": "SUBSCRIBE",
        "rights": "© 2026 Cubo de la Innovación. All rights reserved."
      },
      "cubo_interactivo": {
        "title": "Explore the Cube",
        "subtitle": "Spin and discover each line of action. Click a face to learn more.",
        "hint": "Hover to pause · Click a face to explore",
        "faces": {
          "academy_title": "Tics Academy",
          "academy_desc": "Digital training",
          "rioinnova_title": "RioInnova",
          "rioinnova_desc": "Acceleration & innovation",
          "land_title": "Tics Land",
          "land_desc": "Creativity & experimentation",
          "hub_title": "Hub Tics",
          "hub_desc": "Business connection",
          "cowork_title": "CoWorklabs",
          "cowork_desc": "Coworking & networking",
          "maker_title": "Maker Space",
          "maker_desc": "Labs & prototyping"
        }
      },
      "servicios_banner": {
        "title": "Our Services",
        "desc": "Discover the different lines of action that the Innovation Cube offers to boost your talent, accelerate your company, and connect with the future.",
        "academy_title": "Tics Academy",
        "academy_desc": "Digital skills training.",
        "rioinnova_title": "RioInnova",
        "rioinnova_desc": "Acceleration and entrepreneurship.",
        "land_title": "Tics Land",
        "land_desc": "Creative spaces and experimentation.",
        "hub_title": "Hub Tics",
        "hub_desc": "Business connection and networking."
      },
      "aliados": {
        "title": "Our Partners",
        "desc": "We work hand in hand with leading organizations to drive the innovation ecosystem."
      },
      "cifras": {
        "emprendedores": "Supported entrepreneurs",
        "eventos": "Events hosted",
        "espacios": "Innovation spaces"
      },
      "instagram": {
        "title": "Follow us on Instagram",
        "user": "@cuboinnovacion",
        "btn": "Go to profile"
      },
      "conocenos_page": {
        "proposito_title": "Our Purpose",
        "proposito_text": "To be the main catalyst of the Science, Technology, and Innovation (STI) ecosystem in Rionegro and Eastern Antioquia, connecting local talent with global opportunities and fostering the sustainable development of the region.",
        "historia_title": "Our History",
        "historia_subtitle": "Driving the local innovation ecosystem",
        "historia_text": "The Innovation Cube was born as an initiative of the municipality of Rionegro, Antioquia, with the goal of strengthening the innovation, science, and technology ecosystem in the Eastern Antioquia region. Its creation is part of a smart and sustainable territorial development strategy, where education, entrepreneurship, and technology come together to boost the municipality's competitiveness.",
        "frase_texto": "Innovation is not just technology; it is the ability to transform realities and connect talent with the future.",
        "frase_autor": "— Innovation Cube Ecosystem"
      },
      "hubtics_page": {
        "badge": "Strategic Line",
        "title": "Hub Tics",
        "desc": "We connect innovation with territorial development. The epicenter where ideas become high-impact projects for Eastern Antioquia."
      },
      "emprendedor_page": {
        "badge": "Profile",
        "title": "I am an entrepreneur",
        "subtitle": "Resources to ideate, validate, and take the first steps with your business in the Innovation Cube ecosystem.",
        "programs_title": "Programs for your stage",
        "phases_title": "Your growth path",
        "ofertas_title": "Offers for you",
        "ofertas_cta": "View all offers",
        "ofertas_empty": "There are no active offers for your profile right now. Explore all available open calls.",
        "servicios_title": "Recommended strategic lines",
        "cta_title": "Ready to get started?",
        "cta_desc": "Explore our innovation spaces and take the first step with your idea.",
        "cta_btn": "Explore spaces",
        "programs": {
          "academy_title": "Tics Academy",
          "academy_desc": "Digital skills training to close gaps and strengthen your profile.",
          "land_title": "Tics Land",
          "land_desc": "Acceleration and support in the early stages of your venture.",
          "maker_title": "Maker Space",
          "maker_desc": "Prototyping and digital fabrication to bring your idea to life.",
          "riogo_title": "RIO-GO",
          "riogo_desc": "Free program to launch with digital DNA from day one.",
          "cowork_title": "CoWorklabs",
          "cowork_desc": "Collaboration and networking space with other entrepreneurs."
        },
        "phases": {
          "ideacion_title": "Ideation",
          "ideacion_desc": "Generate and validate creative ideas to solve problems or meet market needs.",
          "preincubacion_title": "Pre-incubation",
          "preincubacion_desc": "Validate your business idea, define the model, and develop your first minimum viable product.",
          "incubacion_title": "Incubation",
          "incubacion_desc": "Access mentoring, training, and connections to formalize processes and achieve steady sales."
        }
      },
      "empresario_page": {
        "badge": "Profile",
        "title": "I am a business owner",
        "subtitle": "Solutions to scale, consolidate, and digitally transform your company with support from the Cube.",
        "programs_title": "Programs for your company",
        "phases_title": "Maturity stages",
        "ofertas_title": "Offers for your profile",
        "ofertas_cta": "View all offers",
        "ofertas_empty": "There are no active offers for your profile right now. Explore all available open calls.",
        "servicios_title": "Recommended strategic lines",
        "cta_title": "Ready to transform your company?",
        "cta_desc": "Connect with corporate innovation and advanced digital transformation programs.",
        "cta_btn": "Contact us",
        "programs": {
          "rioinnova_title": "RioInnova — Corporate Innovation",
          "rioinnova_desc": "Accelerating digital transformation and industry challenges with local startups.",
          "land_title": "Tics Land — Strengthening",
          "land_desc": "Digital maturity and competitiveness for companies in acceleration and internationalization stages.",
          "hub_title": "Hub Tics",
          "hub_desc": "Business connection, networking, and territorial development through innovation.",
          "smartcity_title": "Rionegro Smart City",
          "smartcity_desc": "Smart territory and data-driven decisions for regional competitiveness.",
          "observatorio_title": "CTeI Observatory",
          "observatorio_desc": "Science, technology, and innovation indicators to guide your strategy.",
          "riogo_title": "RIO-GO",
          "riogo_desc": "Expand your business with online sales processes and digital customer experience."
        },
        "phases": {
          "aceleracion_title": "Acceleration",
          "aceleracion_desc": "Scale your business with mentoring, funding, and improvements in key processes.",
          "internacionalizacion_title": "Internationalization",
          "internacionalizacion_desc": "Expand operations to international markets with adapted strategies and global partnerships."
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es", 
    fallbackLng: "es",
    interpolation: { escapeValue: false }
  });

export default i18n;