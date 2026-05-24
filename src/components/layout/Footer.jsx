import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import logoCubo from '../../assets/images/logo-cubo.png';
import logoAlcaldia from '../../assets/images/logo_alcadia_blanco.png';
import logoGov from '../../assets/images/logo-gov-co.png';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <div className="footer-logos-wrapper">
            <Link to="/" className="footer-logo-link">
              <img src={logoCubo} alt="Cubo de la Innovación" className="footer-logo-main" />
            </Link>
            <a
              href="https://www.rionegro.gov.co"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-logo-link"
            >
              <img src={logoAlcaldia} alt="Alcaldía de Rionegro" className="footer-logo-alcaldia" />
            </a>
          </div>

          <p className="footer-desc">{t('footer.desc')}</p>

          <div className="social-links">
            <a
              href="https://www.facebook.com/share/1EE7zbZEr1/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/cubodelainnovacion?igsh=eDlrdjBxbzJuMzNy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Cubodelainnovacion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t('footer.quick_links')}</h4>
          <ul className="footer-list">
            <li>
              <Link to="/conocenos">{t('footer.about')}</Link>
            </li>
            <li>
              <Link to="/ofertas">{t('footer.offers')}</Link>
            </li>
            <li>
              <Link to="/espacios">{t('footer.spaces')}</Link>
            </li>
            <li>
              <Link to="/servicios">{t('footer.services')}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t('footer.citizen_service')}</h4>
          <ul className="footer-list">
            <li>
              <Link to="/contacto">{t('footer.contact')}</Link>
            </li>
            <li>
              <Link to="/faqs">{t('footer.faq')}</Link>
            </li>
            <li>
              <Link to="/transparencia">{t('footer.transparency')}</Link>
            </li>
            <li>
              <Link to="/politica-publica">{t('footer.public_policy')}</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col newsletter-col">
          <h4 className="footer-heading">{t('footer.subscribe')}</h4>
          <p className="newsletter-desc">{t('footer.subscribe_desc')}</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder={t('footer.email_placeholder')} required />
            <button type="submit">{t('footer.subscribe_btn')}</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom-bg">
        <div className="footer-bottom">
          <p>{t('footer.rights')}</p>
          <a
            href="https://www.gov.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="gov-link-bottom"
          >
            <img src={logoGov} alt="GOV.CO" className="gov-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
}
