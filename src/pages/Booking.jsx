import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CalendarDays, ExternalLink, Clock, Mail, CheckCircle } from 'lucide-react';
import './Booking.css';

const CAL_USERNAME = 'evin-hussein-tndayp';

function Booking() {
  const { t } = useTranslation();

  return (
    <div className="booking-page">
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CalendarDays size={40} />
          <h1>{t('booking.title')}</h1>
        </motion.div>
      </section>

      <section className="booking-content">
        <div className="container">
          <motion.div
            className="booking-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="booking-header">
              <h2>{t('booking.cardTitle')}</h2>
              <p>{t('booking.cardSubtitle')}</p>
            </div>

            <a 
              href={`https://cal.com/${CAL_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="booking-button"
            >
              <CalendarDays size={24} />
              {t('booking.openCalendar')}
              <ExternalLink size={18} />
            </a>

            <div className="booking-features">
              <div className="feature">
                <Clock size={20} />
                <span>{t('booking.featureTime')}</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>{t('booking.featureConfirm')}</span>
              </div>
              <div className="feature">
                <Mail size={20} />
                <span>{t('booking.featureSync')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="booking-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>{t('booking.sessionTypes')}</h3>
            <ul>
              {t('booking.sessions', { returnObjects: true }).map((s, i) => (
                <li key={i}><strong>{s.name}</strong> - {s.duration}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Booking;
