import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="footer-container">
        <div className="footer-grid">
          <motion.div className="footer-brand" variants={itemVariants}>
            <Link to="/" className="footer-logo">
              Evin Hussein
            </Link>
            <p className="footer-tagline">
              {t('home.heroSubtitle')}
            </p>
            <motion.div 
              className="footer-social"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <a href="https://www.instagram.com/evinhusien/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@evin-hussein.com" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h4>{t('header.about')}</h4>
            <Link to="/about">{t('footer.about')}</Link>
            <Link to="/booking">{t('header.booking')}</Link>
            <Link to="/contact">{t('footer.contact')}</Link>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h4>{t('contact.title')}</h4>
            <a href="tel:+46728763212">
              <Phone size={16} />
              +46 72 876 32 12
            </a>
            <a href="mailto:info@evin-hussein.com">
              <Mail size={16} />
              info@evin-hussein.com
            </a>
          </motion.div>

          <motion.div className="footer-links" variants={itemVariants}>
            <h4>Legal</h4>
            <Link to="/terms">{t('footer.terms')}</Link>
            <Link to="/privacy">{t('footer.privacy')}</Link>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
        >
          <p>&copy; {currentYear} Evin Hussein. {t('footer.rights')}</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
