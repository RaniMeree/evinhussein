import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';
import certificatesData from './certificates-data';
import './Certificates.css';

function Certificates() {
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(null);

  const lang = i18n.language?.startsWith('ar') ? 'ar' : i18n.language?.startsWith('sv') ? 'sv' : 'en';

  const certList = certificatesData.map((cert) => ({
    filename: cert.filename,
    title: cert[lang]?.title || cert.en.title,
    issuer: cert[lang]?.issuer || cert.en.issuer,
  }));

  const handleOpen = (cert) => setSelected(cert);
  const handleClose = () => setSelected(null);

  const handlePrev = () => {
    const idx = certList.findIndex((c) => c.filename === selected.filename);
    setSelected(certList[(idx - 1 + certList.length) % certList.length]);
  };

  const handleNext = () => {
    const idx = certList.findIndex((c) => c.filename === selected.filename);
    setSelected(certList[(idx + 1) % certList.length]);
  };

  return (
    <div className="certificates-page">
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{t('certificates.title')}</h1>
          <p className="hero-subtitle">{t('certificates.subtitle')}</p>
        </motion.div>
      </section>

      <section className="certificates-content">
        <div className="container">
          <div className="certificates-grid">
            {certList.map((cert, index) => (
              <motion.div
                key={cert.filename}
                className="certificate-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(102,126,234,0.18)' }}
              >
                <div className="cert-icon-wrap">
                  <Award size={40} className="cert-icon" />
                </div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <div className="cert-actions">
                  <motion.button
                    className="cert-btn cert-btn-view"
                    onClick={() => handleOpen(cert)}
                    whileTap={{ scale: 0.97 }}
                  >
                    {t('certificates.view')}
                  </motion.button>
                  <a
                    href={`/certificates/${cert.filename}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn cert-btn-download"
                    download
                  >
                    <ExternalLink size={16} />
                    {t('certificates.download')}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="cert-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div>
                  <h3>{selected.title}</h3>
                  <p>{selected.issuer}</p>
                </div>
                <button className="cert-modal-close" onClick={handleClose} aria-label="Close">
                  <X size={22} />
                </button>
              </div>
              <div className="cert-modal-body">
                <iframe
                  src={`/certificates/${selected.filename}`}
                  title={selected.title}
                  className="cert-iframe"
                />
              </div>
              {certList.length > 1 && (
                <div className="cert-modal-nav">
                  <button className="cert-nav-btn" onClick={handlePrev} aria-label="Previous">
                    <ChevronLeft size={20} />
                  </button>
                  <span className="cert-nav-label">
                    {certList.findIndex((c) => c.filename === selected.filename) + 1} / {certList.length}
                  </span>
                  <button className="cert-nav-btn" onClick={handleNext} aria-label="Next">
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Certificates;
