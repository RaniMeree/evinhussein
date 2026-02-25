import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const FORMSPREE_URL = 'https://formspree.io/f/xnjbwnpy';

function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Mail size={40} />
          <h1>{t('contact.title')}</h1>
        </motion.div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Get in Touch</h2>
              <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

              <div className="contact-details">
                <div className="contact-item">
                  <Phone size={24} />
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+46728763212">+46 72 876 32 12</a>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail size={24} />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info@evin-hussein.com">info@evin-hussein.com</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle size={48} />
                    <h3>{t('contact.success')}</h3>
                  </motion.div>
                ) : (
                  <motion.form
                    className="contact-form"
                    action={FORMSPREE_URL}
                    method="POST"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="form-group">
                      <label>{t('contact.name')}</label>
                      <input
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>{t('contact.email')}</label>
                      <input
                        type="email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>{t('contact.message')}</label>
                      <textarea
                        name="message"
                        rows={5}
                        required
                      />
                    </div>
                    <button type="submit" className="btn-primary">
                      <Send size={20} />
                      {t('contact.send')}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
