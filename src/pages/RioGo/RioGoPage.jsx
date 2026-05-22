import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next'; // 1. Importamos tu herramienta de idiomas
import './RioGoPage.css';

// 🚨 No olvides descomentar y ajustar la ruta de tu logo real
import logoRioGo from '../../assets/images/logo RIO-GO-03.png';

export default function RioGoPage() {
  const formRef = useRef(null);
  
  // 2. Extraemos el idioma actual
  const { i18n } = useTranslation();
  const idiomaActual = i18n.language === 'en' ? 'en' : 'es';

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 3. Nuestro mini-diccionario de traducciones
  const textos = {
    es: {
      badge: "Destino Turístico Inteligente",
      subtitle: "Potencia tu negocio y haz parte del futuro de Rionegro. El programa 100% gratuito que transforma tu comercio con tecnología. Atrae más clientes, moderniza tus pagos y destaca en el mundo digital.",
      cta: "Quiero transformar mi negocio",
      audienciaTitulo: "Diseñado para los motores de nuestra economía",
      aud1Titulo: "Comerciantes",
      aud1Desc: "Moderniza tu local con pagos ágiles (QR y datáfonos) y destaca en los mapas digitales para que más turistas te encuentren.",
      aud2Titulo: "Emprendedores",
      aud2Desc: "Nace con un ADN digital fuerte. Te ayudamos a crear tus canales y llegar a muchas más personas desde el día uno.",
      aud3Titulo: "Empresarios",
      aud3Desc: "Expande tus fronteras, optimiza tus procesos de venta online y mejora la experiencia de tus clientes de principio a fin.",
      beneficiosTitulo: "Todo lo que tu negocio necesita para dar el salto",
      ben1Titulo: "Diagnóstico Digital",
      ben1Desc: "Evaluamos cómo está tu negocio hoy en internet y trazamos un plan de acción.",
      ben2Titulo: "Tu propio Micrositio",
      ben2Desc: "Un espacio web profesional para que te encuentren fácilmente en Google.",
      ben3Titulo: "Pagos Digitales",
      ben3Desc: "Implementación de códigos QR, links de pago y opciones sin contacto.",
      ben4Titulo: "Marketing y Redes",
      ben4Desc: "Capacitación práctica para vender más por WhatsApp, Instagram y Facebook.",
      ben5Titulo: "Acompañamiento en sitio",
      ben5Desc: "¡Nosotros vamos a tu local! Te asesoramos presencialmente sin que dejes de vender.",
      ctaOutline: "Aplicar a estos beneficios",
      pasosTitulo: "Tu ruta hacia el éxito en 4 pasos",
      paso1Titulo: "Regístrate",
      paso1Desc: "Llena el formulario al final de esta página en menos de 2 minutos.",
      paso2Titulo: "Te visitamos",
      paso2Desc: "Un gestor TIC agenda una visita directamente en tu local comercial.",
      paso3Titulo: "Implementamos",
      paso3Desc: "Configuramos las herramientas y te enseñamos a usarlas paso a paso.",
      paso4Titulo: "Creces",
      paso4Desc: "Empiezas a disfrutar de los beneficios de ser un negocio inteligente.",
      formTitulo: "¡Transforma tu negocio hoy!",
      formDesc1: "Completa tus datos a continuación. Los cupos son limitados y un gestor de RIO-GO se pondrá en contacto contigo muy pronto.",
      formDesc2: "Tus datos están seguros. Programa gratuito de la Alcaldía de Rionegro."
    },
    en: {
      badge: "Smart Tourist Destination",
      subtitle: "Boost your business and be part of Rionegro's future. The 100% free program that transforms your commerce with technology. Attract more customers, modernize your payments, and stand out in the digital world.",
      cta: "I want to transform my business",
      audienciaTitulo: "Designed for the engines of our economy",
      aud1Titulo: "Merchants",
      aud1Desc: "Modernize your store with agile payments (QR and dataphones) and stand out on digital maps so more tourists can find you.",
      aud2Titulo: "Entrepreneurs",
      aud2Desc: "Born with a strong digital DNA. We help you create your channels and reach many more people from day one.",
      aud3Titulo: "Business Owners",
      aud3Desc: "Expand your borders, optimize your online sales processes, and improve your customers' experience from start to finish.",
      beneficiosTitulo: "Everything your business needs to take the leap",
      ben1Titulo: "Digital Diagnosis",
      ben1Desc: "We evaluate your business's current online presence and draw up an action plan.",
      ben2Titulo: "Your Own Website",
      ben2Desc: "A professional web space so you can be easily found on Google.",
      ben3Titulo: "Digital Payments",
      ben3Desc: "Implementation of QR codes, payment links, and contactless options.",
      ben4Titulo: "Marketing & Social Media",
      ben4Desc: "Practical training to sell more through WhatsApp, Instagram, and Facebook.",
      ben5Titulo: "On-site Support",
      ben5Desc: "We go to your store! We advise you in person so you don't stop selling.",
      ctaOutline: "Apply for these benefits",
      pasosTitulo: "Your path to success in 4 steps",
      paso1Titulo: "Register",
      paso1Desc: "Fill out the form at the bottom of this page in less than 2 minutes.",
      paso2Titulo: "We visit you",
      paso2Desc: "An ICT manager schedules a visit directly at your commercial premises.",
      paso3Titulo: "We implement",
      paso3Desc: "We set up the tools and teach you how to use them step by step.",
      paso4Titulo: "You grow",
      paso4Desc: "You start enjoying the benefits of being a smart business.",
      formTitulo: "Transform your business today!",
      formDesc1: "Fill in your details below. Spots are limited and a RIO-GO manager will contact you very soon.",
      formDesc2: "Your data is safe. A free program by the Mayor's Office of Rionegro."
    }
  };

  // Variable rápida para no escribir tanto
  const t = textos[idiomaActual];

  // URL del Iframe dinámica (le pasamos el idioma a Base44)
  const iframeUrl = `https://riogo-subsecretariatics.base44.app/?lang=${idiomaActual}`;

  return (
    <div className="rg-landing-container">
      
      {/* =========================================
          1. HERO SECTION (Impacto)
          ========================================= */}
      <section className="rg-hero">
        <div className="rg-glow cyan-glow"></div>
        <div className="rg-glow purple-glow"></div>

        <div className="rg-hero-glass">
          <div className="rg-hero-content">
            <span className="rg-badge">{t.badge}</span>
            
            {/* 👇 AQUÍ ESTÁ EL CAMBIO PRINCIPAL: El logo es ahora el título visual 👇 */}
            <img src={logoRioGo} alt="RIO-GO" className="rg-hero-logo" />
            
            {/* Se elimina el título de texto anterior <h1 className="rg-hero-title">...</h1> */}
            
            <p className="rg-hero-subtitle">
              {/* Para mantener la palabra '100% gratuito/free' en negrita */}
              {idiomaActual === 'es' ? (
                <>Potencia tu negocio y haz parte del futuro de Rionegro. El programa <strong>100% gratuito</strong> que transforma tu comercio con tecnología. Atrae más clientes, moderniza tus pagos y destaca en el mundo digital.</>
              ) : (
                <>Boost your business and be part of Rionegro's future. The <strong>100% free</strong> program that transforms your commerce with technology. Attract more customers, modernize your payments, and stand out in the digital world.</>
              )}
            </p>
            <button onClick={scrollToForm} className="rg-cta-btn">
              {t.cta}
            </button>
          </div>
        </div>
      </section>

      {/* 2. AUDIENCIAS */}
      <section className="rg-section rg-bg-light">
        <h2 className="rg-section-title">{t.audienciaTitulo}</h2>
        <div className="rg-grid-3">
          <div className="rg-card">
            <div className="rg-icon">🛍️</div>
            <h3>{t.aud1Titulo}</h3>
            <p>{t.aud1Desc}</p>
          </div>
          <div className="rg-card">
            <div className="rg-icon">🚀</div>
            <h3>{t.aud2Titulo}</h3>
            <p>{t.aud2Desc}</p>
          </div>
          <div className="rg-card">
            <div className="rg-icon">🏢</div>
            <h3>{t.aud3Titulo}</h3>
            <p>{t.aud3Desc}</p>
          </div>
        </div>
      </section>

      {/* 3. BENEFICIOS */}
      <section className="rg-section">
        <h2 className="rg-section-title">{t.beneficiosTitulo}</h2>
        <div className="rg-benefits-grid">
          <div className="rg-benefit-item">
            <div className="rg-benefit-icon">📊</div>
            <div>
              <h4>{t.ben1Titulo}</h4>
              <p>{t.ben1Desc}</p>
            </div>
          </div>
          <div className="rg-benefit-item">
            <div className="rg-benefit-icon">🌐</div>
            <div>
              <h4>{t.ben2Titulo}</h4>
              <p>{t.ben2Desc}</p>
            </div>
          </div>
          <div className="rg-benefit-item">
            <div className="rg-benefit-icon">💳</div>
            <div>
              <h4>{t.ben3Titulo}</h4>
              <p>{t.ben3Desc}</p>
            </div>
          </div>
          <div className="rg-benefit-item">
            <div className="rg-benefit-icon">📱</div>
            <div>
              <h4>{t.ben4Titulo}</h4>
              <p>{t.ben4Desc}</p>
            </div>
          </div>
          <div className="rg-benefit-item">
            <div className="rg-benefit-icon">🤝</div>
            <div>
              <h4>{t.ben5Titulo}</h4>
              <p>{t.ben5Desc}</p>
            </div>
          </div>
        </div>
        <div className="rg-center-btn">
          <button onClick={scrollToForm} className="rg-cta-btn-outline">
            {t.ctaOutline}
          </button>
        </div>
      </section>

      {/* 4. PASOS */}
      <section className="rg-section rg-bg-dark">
        <h2 className="rg-section-title rg-text-white">{t.pasosTitulo}</h2>
        <div className="rg-steps">
          <div className="rg-step">
            <div className="rg-step-number">1</div>
            <h4 className="rg-text-white">{t.paso1Titulo}</h4>
            <p>{t.paso1Desc}</p>
          </div>
          <div className="rg-step">
            <div className="rg-step-number">2</div>
            <h4 className="rg-text-white">{t.paso2Titulo}</h4>
            <p>{t.paso2Desc}</p>
          </div>
          <div className="rg-step">
            <div className="rg-step-number">3</div>
            <h4 className="rg-text-white">{t.paso3Titulo}</h4>
            <p>{t.paso3Desc}</p>
          </div>
          <div className="rg-step">
            <div className="rg-step-number">4</div>
            <h4 className="rg-text-white">{t.paso4Titulo}</h4>
            <p>{t.paso4Desc}</p>
          </div>
        </div>
      </section>

      {/* 5. FORMULARIO BASE44 (Captación) */}
      <section ref={formRef} className="rg-form-section">
        <div className="rg-form-header">
          <h2 className="rg-section-title">{t.formTitulo}</h2>
          <p className="rg-form-subtitle">
            {t.formDesc1} <br/>
            <strong>{t.formDesc2}</strong>
          </p>
        </div>

        <div className="rg-iframe-wrapper">
          <iframe 
            src={iframeUrl} 
            title="Formulario de Registro RIO-GO"
            className="rg-base44-iframe"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}