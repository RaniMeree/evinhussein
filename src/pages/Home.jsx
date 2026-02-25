import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, Target, Lightbulb } from 'lucide-react';
import './Home.css';

function Home() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            {t('home.heroTitle')}
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle">
            {t('home.heroSubtitle')}
          </motion.p>
          <motion.div variants={itemVariants} className="hero-cta">
            <Link to="/booking" className="btn-primary">
              {t('home.cta')}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>{t('home.about.title')}</h2>
              <p>{t('home.about.description')}</p>
              <motion.div
                className="mission-box"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Heart className="mission-icon" size={32} />
                <p>{t('home.about.mission')}</p>
              </motion.div>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img src="/images/breathing-techniques-calm-overactive-nervous-system.webp" alt="Breathing techniques" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="section qualifications-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('home.qualifications.title')}</h2>
          </motion.div>

          <div className="qualifications-grid">
            {t('home.qualifications.items', { returnObjects: true }).map((item, index) => (
              <motion.div
                key={index}
                className="qualification-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Sparkles className="card-icon" size={24} />
                <p>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('home.services.title')}</h2>
          </motion.div>

          <div className="services-grid">
            {t('home.services.items', { returnObjects: true }).map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Target className="service-icon" size={28} />
                <p>{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="image-break">
        <img src="/images/anxiety+cognitive+behavioral+therapy-3x2.webp" alt="Therapy session" />
      </section>

      {/* Vision Section */}
      <section className="section vision-section">
        <div className="container">
          <motion.div
            className="vision-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="vision-icon" size={40} />
            <h2>{t('home.vision.title')}</h2>
            <p>{t('home.vision.description')}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t('home.cta')}</h2>
            <p>{t('home.heroSubtitle')}</p>
            <Link to="/booking" className="btn-primary">
              {t('home.cta')}
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
