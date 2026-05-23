import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "hero": {
        "subtitle": "El epicentro de Ciencia, Tecnología e Innovación para el oriente antioqueño.",
        "btn_conocenos": "CONÓCENOS",
        "btn_espacios": "EXPLORAR ESPACIOS",
        "btn_empresario": "SOY EMPRESARIO",
        "btn_emprendedor": "QUIERO EMPRENDER/SOY EMPRENDEDOR"
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
      }
    }
  },
  en: {
    translation: {
      "hero": {
        "subtitle": "The epicenter of Science, Technology, and Innovation for Eastern Antioquia.",
        "btn_conocenos": "ABOUT US",
        "btn_espacios": "EXPLORE SPACES",
        "btn_empresario": "SOY EMPRESARIO",
        "btn_emprendedor": "QUIERO EMPRENDER/SOY EMPRENDEDOR"
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