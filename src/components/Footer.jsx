import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Evin Hussein
            </Link>
            <p className="footer-tagline">
              {t('home.heroSubtitle')}
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/evinhusien/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@evin-hussein.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>{t('header.about')}</h4>
            <Link to="/about">{t('footer.about')}</Link>
            <Link to="/booking">{t('header.booking')}</Link>
            <Link to="/contact">{t('footer.contact')}</Link>
          </div>

          <div className="footer-links">
            <h4>{t('contact.title')}</h4>
            <a href="tel:+46728763212">
              <Phone size={16} />
              +46 72 876 32 12
            </a>
            <a href="mailto:info@evin-hussein.com">
              <Mail size={16} />
              info@evin-hussein.com
            </a>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <Link to="/terms">{t('footer.terms')}</Link>
            <Link to="/privacy">{t('footer.privacy')}</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Evin Hussein. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
