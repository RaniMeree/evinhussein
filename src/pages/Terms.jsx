import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import './Legal.css';

function Terms() {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <FileText size={40} />
          <h1>{t('terms.title')}</h1>
        </motion.div>
      </section>

      <section className="legal-content">
        <div className="container">
          <motion.div
            className="legal-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>{t('terms.content')}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
