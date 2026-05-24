import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import menuLinks from '../../constants/menuLinks.json';
import './Navbar.css';

import logoCubo from '../../assets/images/logo-cubo.png'; 
import logoGovCo from '../../assets/images/logo-gov-co.png';
import accessibilityIcon from '../../assets/images/accessibility.png'; 
import fbIcon from '../../assets/images/facebook.png';
import igIcon from '../../assets/images/instagram.png';
import ytIcon from '../../assets/images/youtube.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getTranslatedTitle = (title) => {
    if (i18n.language === 'es') return title; 
    const translations = {
      'Conócenos': 'About Us',
      'Ofertas': 'Offers',
      'Espacios': 'Spaces',
      'Servicios': 'Services',
      'Contacto': 'Contact',
      'Convocatorias': 'Open Calls',
      'Cursos y Retos': 'Courses & Challenges',
      'Coworking': 'Coworking',
      'Auditorios': 'Auditoriums',
      'Salas de reuniones': 'Meeting Rooms',
      'Tics Academy': 'Tics Academy',
      'Rio Innova': 'Rio Innova',
      'Hub Tics': 'Hub Tics',
      'Tics Land': 'Tics Land'
    };
    return translations[title] || title;
  };

  return (
    <header className="navbar-wrapper">
      
      <div className="topbar">
        <div className="topbar-container">
          <div className="topbar-content-right">
            <ul className="topbar-icon-list">
              <li className="topbar-icon-item" title="Accesibilidad">
                <img src={accessibilityIcon} alt="Accesibilidad" className="topbar-social-icon" />
              </li>
              <li className="topbar-icon-item" title="Facebook">
                <a href="https://www.facebook.com/share/1EE7zbZEr1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="topbar-link-wrapper">
                  <img src={fbIcon} alt="Facebook" className="topbar-social-icon" />
                </a>
              </li>
              <li className="topbar-icon-item" title="Instagram">
                <a href="https://www.instagram.com/cubodelainnovacion?igsh=eDlrdjBxbzJuMzNy" target="_blank" rel="noopener noreferrer" className="topbar-link-wrapper">
                  <img src={igIcon} alt="Instagram" className="topbar-social-icon" />
                </a>
              </li>
              <li className="topbar-icon-item" title="YouTube">
                <a href="https://www.youtube.com/@Cubodelainnovacion" target="_blank" rel="noopener noreferrer" className="topbar-link-wrapper">
                  <img src={ytIcon} alt="YouTube" className="topbar-social-icon" />
                </a>
              </li>
              
              <li className="topbar-icon-item language-switch" title="Cambiar idioma">
                <span 
                  className={i18n.language === 'es' ? 'lang-active' : 'lang-inactive'}
                  onClick={() => changeLanguage('es')}
                  style={{ cursor: 'pointer' }}
                >
                  ES
                </span>
                <span className="lang-separator"> | </span>
                <span 
                  className={i18n.language === 'en' ? 'lang-active' : 'lang-inactive'}
                  onClick={() => changeLanguage('en')}
                  style={{ cursor: 'pointer' }}
                >
                  EN
                </span>
              </li>
            </ul>

            <div className="gov-co-logo-container">
              <a href="https://www.gov.co/" target="_blank" rel="noopener noreferrer">
                <img src={logoGovCo} alt="GOV.CO" className="logo-gov-co" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="main-navbar">
        <div className="logo-container">
          <Link to="/">
            <img src={logoCubo} alt="Logo Cubo de la Innovación" className="logo-img" />
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {menuLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <Link to={link.path} className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
                {getTranslatedTitle(link.title)} {link.hasDropdown && <span className="dropdown-icon">▼</span>}
              </Link>

              {link.hasDropdown && link.subItems && (
                <ul className="dropdown-menu">
                  {link.subItems.map((subItem, index) => (
                    <li key={index} className="dropdown-item">
                      <Link to={subItem.path} className="dropdown-link" onClick={() => setIsMobileMenuOpen(false)}>
                        {getTranslatedTitle(subItem.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}