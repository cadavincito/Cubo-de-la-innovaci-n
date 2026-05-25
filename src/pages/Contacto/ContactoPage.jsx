import React, { useState } from 'react';
import './ContactoPage.css';

// Importa una imagen para tu banner (ajusta la ruta si es diferente)
import bannerContacto from '../../assets/images/imagen_proposito.jpg'; 

export default function ContactoPage() {
  // 1. ESTADOS (Aquí guardamos los datos, ¡y aquí está el famoso estadoEnvio!)
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    solicitud: '',
    terminos: false
  });
  
  const [estadoEnvio, setEstadoEnvio] = useState(''); // 👉 ¡Esta era la línea que faltaba!

  // 2. FUNCIÓN PARA LEER LO QUE EL USUARIO ESCRIBE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // 3. FUNCIÓN DE ENVÍO OPTIMIZADA (FORMSPREE)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstadoEnvio('enviando');

    try {
      // AQUÍ PEGAS EL LINK QUE TE DIO FORMSPREE
      const formspreeUrl = 'https://formspree.io/f/mwvyyvol'; 

      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formData.nombre,
          Apellidos: formData.apellidos,
          Correo: formData.correo,
          Solicitud: formData.solicitud
        })
      });

      if (response.ok) {
        setEstadoEnvio('exito');
        setFormData({ nombre: '', apellidos: '', correo: '', solicitud: '', terminos: false });
      } else {
        setEstadoEnvio('error');
      }

    } catch (error) {
      setEstadoEnvio('error');
    }
  };

  // 4. EL DISEÑO VISUAL
  return (
    <div className="contacto-page">
      {/* SECCIÓN HERO BANNER */}
      <section className="contacto-hero">
        <img src={bannerContacto} alt="Cubo de la Innovación" className="contacto-hero-bg" />
        <div className="contacto-hero-overlay">
          <h1>Contáctanos</h1>
        </div>
      </section>

      {/* SECCIÓN PRINCIPAL: INFO Y FORMULARIO */}
      <section className="contacto-main-container">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
        <div className="contacto-info">
          <div className="info-item">
            <h3>Correo</h3>
            <p>innova@rionegro.gov.co</p>
          </div>
          
          <div className="info-item">
            <h3>Teléfono</h3>
            <p>(+57) 604 - 520 40 60</p>
          </div>
          
          <div className="info-item">
            <h3>Dirección</h3>
            <p>Rionegro, Antioquia - Colombia</p>
          </div>
        </div>

        {/* COLUMNA DERECHA: FORMULARIO */}
        <div className="contacto-form-wrapper">
          <div className="contacto-form-card">
            <h2>Conéctate con el Cubo</h2>
            <p className="form-subtitle">Suscríbete para mantenerte actualizado o actualizada con nuestras últimas noticias e iniciativas.</p>
            
            {estadoEnvio === 'exito' ? (
              <div className="mensaje-exito">
                ¡Gracias por conectarte! Tus datos han sido guardados.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contacto-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre*</label>
                    <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Apellidos*</label>
                    <input type="text" name="apellidos" placeholder="Apellidos" value={formData.apellidos} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group">
                  <label>Correo*</label>
                  <input type="email" name="correo" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label>Solicitud*</label>
                  <textarea
                    name="solicitud"
                    placeholder="Cuéntanos en qué podemos ayudarte…"
                    value={formData.solicitud}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-textarea"
                  />
                </div>

                <div className="form-checkbox">
                  <input type="checkbox" name="terminos" id="terminos" checked={formData.terminos} onChange={handleChange} required />
                  <label htmlFor="terminos">Acepto términos y condiciones*</label>
                </div>

                <button type="submit" className="btn-submit" disabled={estadoEnvio === 'enviando' || !formData.terminos}>
                  {estadoEnvio === 'enviando' ? 'Enviando...' : 'Suscribirse'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SECCIÓN MAPA */}
      <section className="contacto-mapa-section">
        <h2>Ubicación</h2>
        <div className="mapa-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.864757716904!2d-75.37922372546302!3d6.148859227404499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e469facf2ed4b5b%3A0xecba9606b3e28db1!2sCubo%20de%20la%20Ciencia%2C%20Tecnolog%C3%ADa%20e%20Innovaci%C3%B3n!5e0!3m2!1ses-419!2sco!4v1778553442445!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa del Cubo de la Innovación"
          ></iframe>
        </div>
      </section>
    </div>
  );
}