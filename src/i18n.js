import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      "hero": {
        "subtitle": "Aquí conectamos ideas, talento y tecnología para hacer crecer el oriente antioqueño.",
        "route_cta": "Cuéntanos dónde estás: te mostramos lo que más te sirve",
        "btn_conocenos": "Conócenos",
        "btn_espacios": "Ver espacios",
        "btn_empresario": "Soy empresario",
        "btn_emprendedor": "Quiero emprender"
      },
      "ofertas_eventos": {
        "title": "Ofertas y eventos",
        "subtitle": "Cursos, charlas y actividades pensadas para ti. ¡Hay algo nuevo casi siempre!",
        "tab_ofertas": "Ofertas",
        "tab_eventos": "Eventos",
        "view_all": "Ver todos los eventos",
        "date": "Fecha",
        "time": "Hora",
        "place": "Lugar",
        "closes": "Cierra",
        "free_entry": "Entrada libre",
        "see_more": "Ver más",
        "view_all_offers": "Ver todas las ofertas"
      },
      "ofertas_page": {
        "title": "Ofertas y convocatorias",
        "subtitle": "Mira lo que tenemos abierto ahora y encuentra la oportunidad que encaja contigo.",
        "category": "Categoría",
        "profile": "Perfil",
        "showing": "Te mostramos",
        "results": "resultados",
        "no_results": "No encontramos ofertas con esos filtros. Prueba con otra categoría o perfil."
      },
      "oferta_card": {
        "register": "Quiero inscribirme"
      },
      "banner_conocenos": {
        "title_1": "Impulsamos el ",
        "title_highlight": "futuro",
        "title_2": " de la región",
        "subtitle": "Ciencia y tecnología para el oriente antioqueño",
        "desc": "Si tienes una idea, te acompañamos. Si ya tienes empresa, te ayudamos a crecer. ¡Bienvenido al Cubo!",
        "btn": "Quiero saber más"
      },
      "footer": {
        "desc": "Un espacio para aprender, crear y conectar en el oriente antioqueño.",
        "quick_links": "Enlaces útiles",
        "about": "Conócenos",
        "offers": "Ofertas y convocatorias",
        "spaces": "Nuestros espacios",
        "services": "Servicios",
        "citizen_service": "Atención al ciudadano",
        "contact": "Escríbenos",
        "faq": "Preguntas frecuentes",
        "transparency": "Transparencia",
        "public_policy": "Política pública",
        "subscribe": "Suscríbete al boletín",
        "subscribe_desc": "Te avisamos de convocatorias, eventos y novedades. Sin spam, lo prometemos.",
        "email_placeholder": "tu@correo.com",
        "subscribe_btn": "Quiero recibir novedades",
        "rights": "© 2026 Cubo de la Innovación. Todos los derechos reservados."
      },
      "cubo_interactivo": {
        "title": "Gira el Cubo y descubre",
        "subtitle": "Arrastra con el ratón o el dedo para explorar. Toca una cara cuando veas algo que te interese.",
        "hint": "Tip: arrastra para girar · toca una cara para ir al detalle",
        "faces": {
          "academy_title": "Tics Academy",
          "academy_desc": "Aprende habilidades digitales a tu ritmo",
          "rioinnova_title": "RioInnova",
          "rioinnova_desc": "Impulsa tu idea o tu empresa",
          "land_title": "Tics Land",
          "land_desc": "Experimenta, crea y prueba cosas nuevas",
          "hub_title": "Hub Tics",
          "hub_desc": "Conecta con otros y haz crecer tu red",
          "cowork_title": "CoWorklabs",
          "cowork_desc": "Trabaja en buena compañía",
          "maker_title": "Maker Space",
          "maker_desc": "Prototipa y materializa tus ideas"
        }
      },
      "servicios_banner": {
        "title": "Lo que puedes hacer aquí",
        "desc": "Elige la ruta que más te convenga: formarte, emprender, innovar o conectar con otros.",
        "academy_title": "Tics Academy",
        "academy_desc": "Cursos y talleres en lo digital.",
        "rioinnova_title": "RioInnova",
        "rioinnova_desc": "Acompañamiento para emprender e innovar.",
        "land_title": "Tics Land",
        "land_desc": "Espacios para crear y experimentar.",
        "hub_title": "Hub Tics",
        "hub_desc": "Red de contactos y oportunidades."
      },
      "aliados": {
        "title": "Quienes caminan con nosotros",
        "desc": "Gracias a estas organizaciones podemos abrir más puertas para ti."
      },
      "cifras": {
        "emprendedores": "Personas que hemos acompañado",
        "eventos": "Eventos que hemos hecho juntos",
        "espacios": "Espacios para crear e innovar"
      },
      "instagram": {
        "title": "Síguenos en Instagram",
        "user": "@cuboinnovacion",
        "btn": "Ver perfil"
      },
      "conocenos_page": {
        "proposito_title": "Para qué estamos aquí",
        "proposito_text": "Queremos que en Rionegro y el oriente antioqueño sea más fácil aprender, emprender e innovar. Conectamos personas, empresas y proyectos para que las buenas ideas no se queden en el papel.",
        "historia_title": "Nuestra historia",
        "historia_subtitle": "Creciendo contigo, paso a paso",
        "historia_text": "El Cubo nació como apuesta del municipio para que la ciencia, la tecnología y la innovación estén al alcance de todos. Hoy somos un lugar donde ciudadanía, empresas, academia y gobierno se encuentran para hacer realidad proyectos que mejoran la vida en la región.",
        "frase_texto": "Innovar no es solo usar tecnología: es cambiar las cosas para mejor y abrirle camino al talento de aquí.",
        "frase_autor": "— Comunidad Cubo de la Innovación"
      },
      "hubtics_page": {
        "badge": "Línea estratégica",
        "title": "Hub Tics",
        "desc": "Unimos innovación y territorio para que las ideas se conviertan en proyectos que de verdad aporten al oriente antioqueño."
      },
      "emprendedor_page": {
        "badge": "Tu camino",
        "title": "¿Estás empezando?",
        "subtitle": "Perfecto. Aquí encontrarás formación, espacios y programas para pasar de la idea a tu primer cliente.",
        "programs_title": "Lo que más te puede ayudar ahora",
        "phases_title": "Tu ruta, paso a paso",
        "ofertas_title": "Oportunidades abiertas para ti",
        "ofertas_cta": "Ver todas las ofertas",
        "ofertas_empty": "Por ahora no hay ofertas activas para emprendedores, pero puedes revisar todas las convocatorias por si aparece algo nuevo pronto.",
        "servicios_title": "También te recomendamos",
        "cta_title": "¿Te animas a dar el primer paso?",
        "cta_desc": "Visita nuestros espacios, conoce a la comunidad y empieza cuando tú quieras.",
        "cta_btn": "Ver espacios",
        "programs": {
          "academy_title": "Tics Academy",
          "academy_desc": "Aprende lo digital sin complicaciones.",
          "land_title": "Tics Land",
          "land_desc": "Te acompañamos en las primeras etapas de tu negocio.",
          "maker_title": "Maker Space",
          "maker_desc": "Prueba, prototipa y haz tangible tu idea.",
          "riogo_title": "RIO-GO",
          "riogo_desc": "Gratis: pon tu negocio en el mundo digital desde el día uno.",
          "cowork_title": "CoWorklabs",
          "cowork_desc": "Trabaja junto a otros emprendedores como tú."
        },
        "phases": {
          "ideacion_title": "Ideación",
          "ideacion_desc": "Tienes una idea y quieres saber si tiene sentido. Aquí la exploras con calma.",
          "preincubacion_title": "Preincubación",
          "preincubacion_desc": "Validas tu idea, entiendes a tu cliente y das forma a tu primer producto.",
          "incubacion_title": "Incubación",
          "incubacion_desc": "Recibes apoyo para ordenar tu negocio y empezar a vender de forma constante."
        }
      },
      "empresario_page": {
        "badge": "Tu camino",
        "title": "¿Ya tienes empresa?",
        "subtitle": "Genial. Aquí hay programas para escalar, digitalizarte y competir mejor.",
        "programs_title": "Lo que más te puede servir",
        "phases_title": "Cuando tu negocio ya va en serio",
        "ofertas_title": "Oportunidades para tu perfil",
        "ofertas_cta": "Ver todas las ofertas",
        "ofertas_empty": "Ahora mismo no hay ofertas activas para empresarios, pero vale la pena revisar todas las convocatorias.",
        "servicios_title": "También te recomendamos",
        "cta_title": "¿Listo para dar el siguiente paso?",
        "cta_desc": "Escríbenos y te orientamos sobre el programa que mejor encaje con tu empresa.",
        "cta_btn": "Hablemos",
        "programs": {
          "rioinnova_title": "RioInnova — Innovación empresarial",
          "rioinnova_desc": "Transformación digital y retos de industria con apoyo cercano.",
          "land_title": "Tics Land — Fortalecimiento",
          "land_desc": "Para empresas que quieren crecer con más orden y competitividad.",
          "hub_title": "Hub Tics",
          "hub_desc": "Conecta con otros actores y abre nuevas oportunidades.",
          "smartcity_title": "Rionegro Smart City",
          "smartcity_desc": "Datos e innovación para decisiones más inteligentes.",
          "observatorio_title": "Observatorio CTeI",
          "observatorio_desc": "Información clara para planear tu estrategia.",
          "riogo_title": "RIO-GO",
          "riogo_desc": "Lleva tus ventas y tu atención al cliente al entorno digital."
        },
        "phases": {
          "aceleracion_title": "Aceleración",
          "aceleracion_desc": "Tu negocio ya funciona: ahora toca crecer con mentoría, procesos y recursos.",
          "internacionalizacion_title": "Internacionalización",
          "internacionalizacion_desc": "Piensas en otros mercados. Te ayudamos a dar pasos con confianza."
        }
      },
      "innovation_cube": {
        "title": "Conoce el edificio planta por planta",
        "subtitle": "Gira el modelo, pasa el cursor sobre cada piso y haz clic para ver qué servicio hay ahí.",
        "hint": "Arrastra para girar · Clic en un piso para más info",
        "floor1_name": "Planta 1 · Primer nivel",
        "floor1_title": "CoWorklabs",
        "floor1_service": "Espacios colaborativos, recepción, escritorios compartidos y salas de reuniones para trabajar en buena compañía.",
        "floor2_name": "Planta 2 · Segundo nivel",
        "floor2_title": "Maker Space",
        "floor2_service": "Laboratorio de fabricación digital: impresión 3D, prototipado rápido, IoT y herramientas para materializar tus ideas.",
        "floor3_name": "Planta 3 · Tercer nivel",
        "floor3_title": "Cubo de la Innovación",
        "floor3_service": "El corazón del ecosistema: eventos de alto impacto, hackathons, charlas y procesos de innovación abierta.",
        "explore": "Ver espacio",
        "close": "Cerrar"
      },
      "espacios_page": {
        "maker_title": "Maker Space",
        "maker_desc": "Un lugar para prototipar, crear y probar tus ideas con herramientas digitales.",
        "cowork_title": "CoWorklabs",
        "cowork_desc": "Trabaja en buena compañía, conecta con otros y comparte energía emprendedora.",
        "cubo_title": "Cubo de la Innovación",
        "cubo_desc": "Nuestro corazón: aquí se cruzan ideas, personas y proyectos que transforman la región.",
        "explore": "Conocer este espacio"
      },
      "chatbot": {
        "title": "Hola, soy Cubix",
        "greeting": "¡Hola! 👋 Soy Cubix, tu asistente del Cubo. ¿En qué te puedo ayudar hoy?",
        "reply": "Gracias por escribirnos. Por ahora soy una versión de prueba, pero pronto alguien del equipo te responderá. Mientras tanto, échale un vistazo a la sección de Ofertas.",
        "placeholder": "Escribe tu mensaje aquí...",
        "send": "Enviar",
        "open": "Abrir chat",
        "close": "Cerrar chat"
      }
    }
  },
  en: {
    translation: {
      "hero": {
        "subtitle": "We connect ideas, talent, and technology to help Eastern Antioquia grow.",
        "route_cta": "Tell us where you are — we'll show you what fits you best",
        "btn_conocenos": "About us",
        "btn_espacios": "See our spaces",
        "btn_empresario": "I'm a business owner",
        "btn_emprendedor": "I want to start"
      },
      "ofertas_eventos": {
        "title": "Offers and events",
        "subtitle": "Courses, talks, and activities made for you. There's usually something new!",
        "tab_ofertas": "Offers",
        "tab_eventos": "Events",
        "view_all": "See all events",
        "date": "Date",
        "time": "Time",
        "place": "Place",
        "closes": "Closes",
        "free_entry": "Free entry",
        "see_more": "See more",
        "view_all_offers": "See all offers"
      },
      "ofertas_page": {
        "title": "Offers and open calls",
        "subtitle": "See what's open right now and find the opportunity that fits you.",
        "category": "Category",
        "profile": "Profile",
        "showing": "Showing",
        "results": "results",
        "no_results": "We couldn't find offers with those filters. Try another category or profile."
      },
      "oferta_card": {
        "register": "I'd like to sign up"
      },
      "banner_conocenos": {
        "title_1": "We help build the ",
        "title_highlight": "future",
        "title_2": " of our region",
        "subtitle": "Science and technology for Eastern Antioquia",
        "desc": "Have an idea? We'll walk with you. Already running a business? We'll help you grow. Welcome to the Cube!",
        "btn": "Tell me more"
      },
      "footer": {
        "desc": "A place to learn, create, and connect in Eastern Antioquia.",
        "quick_links": "Useful links",
        "about": "About us",
        "offers": "Offers and open calls",
        "spaces": "Our spaces",
        "services": "Services",
        "citizen_service": "Citizen support",
        "contact": "Get in touch",
        "faq": "FAQs",
        "transparency": "Transparency",
        "public_policy": "Public policy",
        "subscribe": "Join our newsletter",
        "subscribe_desc": "We'll let you know about open calls, events, and news. No spam, we promise.",
        "email_placeholder": "you@email.com",
        "subscribe_btn": "Keep me updated",
        "rights": "© 2026 Cubo de la Innovación. All rights reserved."
      },
      "cubo_interactivo": {
        "title": "Spin the Cube and explore",
        "subtitle": "Drag with your mouse or finger to look around. Tap a face when something catches your eye.",
        "hint": "Tip: drag to spin · tap a face for details",
        "faces": {
          "academy_title": "Tics Academy",
          "academy_desc": "Learn digital skills at your pace",
          "rioinnova_title": "RioInnova",
          "rioinnova_desc": "Boost your idea or business",
          "land_title": "Tics Land",
          "land_desc": "Experiment, create, and try new things",
          "hub_title": "Hub Tics",
          "hub_desc": "Meet people and grow your network",
          "cowork_title": "CoWorklabs",
          "cowork_desc": "Work alongside others",
          "maker_title": "Maker Space",
          "maker_desc": "Prototype and bring ideas to life"
        }
      },
      "servicios_banner": {
        "title": "What you can do here",
        "desc": "Pick the path that suits you: learn, start up, innovate, or connect with others.",
        "academy_title": "Tics Academy",
        "academy_desc": "Courses and workshops in digital skills.",
        "rioinnova_title": "RioInnova",
        "rioinnova_desc": "Support to start up and innovate.",
        "land_title": "Tics Land",
        "land_desc": "Spaces to create and experiment.",
        "hub_title": "Hub Tics",
        "hub_desc": "Network and opportunities."
      },
      "aliados": {
        "title": "Who walks with us",
        "desc": "Thanks to these partners, we can open more doors for you."
      },
      "cifras": {
        "emprendedores": "People we've supported",
        "eventos": "Events we've shared",
        "espacios": "Spaces to create and innovate"
      },
      "instagram": {
        "title": "Follow us on Instagram",
        "user": "@cuboinnovacion",
        "btn": "View profile"
      },
      "conocenos_page": {
        "proposito_title": "Why we're here",
        "proposito_text": "We want learning, entrepreneurship, and innovation to feel accessible in Rionegro and Eastern Antioquia. We connect people, companies, and projects so good ideas don't stay on paper.",
        "historia_title": "Our story",
        "historia_subtitle": "Growing with you, step by step",
        "historia_text": "The Cube started as the municipality's bet to bring science, technology, and innovation closer to everyone. Today we're a place where citizens, businesses, academia, and government meet to make projects that improve life in the region.",
        "frase_texto": "Innovating isn't just about tech — it's about making things better and giving local talent a fair chance.",
        "frase_autor": "— Cubo de la Innovación community"
      },
      "hubtics_page": {
        "badge": "Strategic line",
        "title": "Hub Tics",
        "desc": "We link innovation and territory so ideas become projects that truly matter for Eastern Antioquia."
      },
      "emprendedor_page": {
        "badge": "Your path",
        "title": "Just getting started?",
        "subtitle": "Great. Here you'll find training, spaces, and programs to go from idea to first customer.",
        "programs_title": "What can help you most right now",
        "phases_title": "Your path, step by step",
        "ofertas_title": "Open opportunities for you",
        "ofertas_cta": "See all offers",
        "ofertas_empty": "There are no active offers for entrepreneurs right now, but check all open calls — something new may come up soon.",
        "servicios_title": "We also recommend",
        "cta_title": "Ready to take the first step?",
        "cta_desc": "Visit our spaces, meet the community, and start whenever you're ready.",
        "cta_btn": "See spaces",
        "programs": {
          "academy_title": "Tics Academy",
          "academy_desc": "Learn digital skills without the fuss.",
          "land_title": "Tics Land",
          "land_desc": "Support in the early stages of your business.",
          "maker_title": "Maker Space",
          "maker_desc": "Try things out and make your idea tangible.",
          "riogo_title": "RIO-GO",
          "riogo_desc": "Free: take your business digital from day one.",
          "cowork_title": "CoWorklabs",
          "cowork_desc": "Work alongside other entrepreneurs like you."
        },
        "phases": {
          "ideacion_title": "Ideation",
          "ideacion_desc": "You have an idea and want to see if it makes sense. Explore it here at your pace.",
          "preincubacion_title": "Pre-incubation",
          "preincubacion_desc": "Validate your idea, understand your customer, and shape your first product.",
          "incubacion_title": "Incubation",
          "incubacion_desc": "Get support to organize your business and start selling steadily."
        }
      },
      "empresario_page": {
        "badge": "Your path",
        "title": "Already running a business?",
        "subtitle": "Perfect. Here are programs to scale, go digital, and compete better.",
        "programs_title": "What can help you most",
        "phases_title": "When your business is ready to grow",
        "ofertas_title": "Opportunities for you",
        "ofertas_cta": "See all offers",
        "ofertas_empty": "No active offers for business owners right now, but it's worth checking all open calls.",
        "servicios_title": "We also recommend",
        "cta_title": "Ready for the next step?",
        "cta_desc": "Write to us and we'll point you to the program that fits your company best.",
        "cta_btn": "Let's talk",
        "programs": {
          "rioinnova_title": "RioInnova — Business innovation",
          "rioinnova_desc": "Digital transformation and industry challenges with close support.",
          "land_title": "Tics Land — Strengthening",
          "land_desc": "For companies that want to grow with more structure and competitiveness.",
          "hub_title": "Hub Tics",
          "hub_desc": "Connect with others and find new opportunities.",
          "smartcity_title": "Rionegro Smart City",
          "smartcity_desc": "Data and innovation for smarter decisions.",
          "observatorio_title": "CTeI Observatory",
          "observatorio_desc": "Clear information to plan your strategy.",
          "riogo_title": "RIO-GO",
          "riogo_desc": "Bring your sales and customer care into the digital world."
        },
        "phases": {
          "aceleracion_title": "Acceleration",
          "aceleracion_desc": "Your business works — now it's time to grow with mentoring, processes, and resources.",
          "internacionalizacion_title": "Internationalization",
          "internacionalizacion_desc": "You're thinking about other markets. We'll help you take confident steps."
        }
      },
      "innovation_cube": {
        "title": "Explore the building floor by floor",
        "subtitle": "Rotate the model, hover over each floor, and click to see what's there.",
        "hint": "Drag to rotate · Click a floor for details",
        "floor1_name": "Floor 1 · Ground level",
        "floor1_title": "CoWorklabs",
        "floor1_service": "Collaborative spaces, reception, shared desks, and meeting rooms to work alongside others.",
        "floor2_name": "Floor 2 · Second level",
        "floor2_title": "Maker Space",
        "floor2_service": "Digital fabrication lab: 3D printing, rapid prototyping, IoT, and tools to bring your ideas to life.",
        "floor3_name": "Floor 3 · Third level",
        "floor3_title": "Innovation Cube",
        "floor3_service": "The heart of the ecosystem: high-impact events, hackathons, talks, and open innovation processes.",
        "explore": "See space",
        "close": "Close"
      },
      "espacios_page": {
        "maker_title": "Maker Space",
        "maker_desc": "A place to prototype, create, and test your ideas with digital tools.",
        "cowork_title": "CoWorklabs",
        "cowork_desc": "Work alongside others, connect, and share entrepreneurial energy.",
        "cubo_title": "Innovation Cube",
        "cubo_desc": "Our heart: where ideas, people, and projects that transform the region meet.",
        "explore": "Explore this space"
      },
      "chatbot": {
        "title": "Hi, I'm Cubix",
        "greeting": "Hi! 👋 I'm Cubix, your Cube assistant. How can I help you today?",
        "reply": "Thanks for reaching out. I'm still a beta version, but someone from the team will reply soon. In the meantime, check out our Offers section.",
        "placeholder": "Type your message here...",
        "send": "Send",
        "open": "Open chat",
        "close": "Close chat"
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
