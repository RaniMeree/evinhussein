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
              <h2>Book a Session with Evin</h2>
              <p>Choose a time that works best for you</p>
            </div>

            <a 
              href={`https://cal.com/${CAL_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="booking-button"
            >
              <CalendarDays size={24} />
              Open Booking Calendar
              <ExternalLink size={18} />
            </a>

            <div className="booking-features">
              <div className="feature">
                <Clock size={20} />
                <span>Choose your preferred time</span>
              </div>
              <div className="feature">
                <CheckCircle size={20} />
                <span>Instant confirmation</span>
              </div>
              <div className="feature">
                <Mail size={20} />
                <span>Calendar sync automatically</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="booking-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Session Types</h3>
            <ul>
              <li><strong>Initial Consultation</strong> - 30 minutes free introduction call</li>
              <li><strong>Life Coaching</strong> - 60 minutes personal development session</li>
              <li><strong>Macrobiotics Consultation</strong> - 45 minutes nutritional guidance</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Booking;
