import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Target, Lightbulb } from 'lucide-react';
import './About.css';

function About() {
  const { t } = useTranslation();

  const qualifications = t('home.qualifications.items', { returnObjects: true });
  const services = t('home.services.items', { returnObjects: true });

  return (
    <div className="about-page">
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>{t('about.title')}</h1>
          <p className="hero-subtitle">{t('about.hero')}</p>
        </motion.div>
      </section>

      <section className="about-content">
        <div className="container">
          <motion.div
            className="about-section-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="section-icon" size={32} />
            <h2>{t('home.about.title')}</h2>
            <p>{t('home.about.description')}</p>
            <p className="mission-text">{t('home.about.mission')}</p>
          </motion.div>

          <motion.div
            className="about-section-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Sparkles className="section-icon" size={32} />
            <h2>{t('home.qualifications.title')}</h2>
            <ul className="about-list">
              {qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="about-section-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Target className="section-icon" size={32} />
            <h2>{t('home.services.title')}</h2>
            <ul className="about-list">
              {services.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="about-section-block vision-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Lightbulb className="section-icon" size={32} />
            <h2>{t('home.vision.title')}</h2>
            <p>{t('home.vision.description')}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
