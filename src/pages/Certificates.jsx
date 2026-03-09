import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
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
                whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(102,126,234,0.2)' }}
                onClick={() => handleOpen(cert)}
              >
                <div className="cert-thumbnail-wrap">
                  <img
                    src={`/certificates/${cert.filename}`}
                    alt={cert.title}
                    className="cert-thumbnail"
                  />
                  <div className="cert-thumbnail-overlay">
                    <span>{t('certificates.view')}</span>
                  </div>
                </div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  {cert.issuer && <p className="cert-issuer">{cert.issuer}</p>}
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
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-modal-close" onClick={handleClose} aria-label="Close">
                <X size={22} />
              </button>

              <div className="cert-modal-body">
                <img
                  src={`/certificates/${selected.filename}`}
                  alt={selected.title}
                  className="cert-modal-img"
                />
              </div>

              <div className="cert-modal-footer">
                <div className="cert-modal-info">
                  <h3>{selected.title}</h3>
                  {selected.issuer && <p>{selected.issuer}</p>}
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Certificates;
