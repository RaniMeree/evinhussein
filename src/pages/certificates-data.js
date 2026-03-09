/**
 * Certificate definitions.
 * Each entry maps a PDF filename (inside /public/certificates/) to its
 * translated display name and issuer for every supported locale.
 *
 * To add or rename a certificate:
 *  1. Drop the PDF file into  evin-site/public/certificates/
 *  2. Add / update the entry below with the exact filename.
 */
const certificatesData = [
  {
    filename: 'rapid.jpg',
    en: { title: 'Rapid Transformational Therapy (RTT)', issuer: 'Marisa Peer — RTT School' },
    ar: { title: 'العلاج التحويلي السريع (RTT)', issuer: 'ماريسا بير — مدرسة RTT' },
    sv: { title: 'Rapid Transformational Therapy (RTT)', issuer: 'Marisa Peer — RTT School' },
  },
  {
    filename: 'Unified.jpg',
    en: { title: 'Unified Integrative Medicine', issuer: 'Dr. Nader Butto — Unified Integrative Medicine College' },
    ar: { title: 'الطب التكاملي الموحد', issuer: 'د. نادر بوتو — كلية الطب التكاملي الموحد' },
    sv: { title: 'Unified Integrative Medicine', issuer: 'Dr. Nader Butto — Unified Integrative Medicine College' },
  },
];

// NOTE: Add entries above when a new image is placed in public/certificates/

export default certificatesData;
