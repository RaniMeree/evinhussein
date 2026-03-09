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
    filename: 'certification-RTT-Practitioner-Certificate-and-Logos-EvinHussein.pdf',
    en: { title: 'Rapid Transformational Therapy (RTT)', issuer: 'Marisa Peer — RTT School' },
    ar: { title: 'العلاج التحويلي السريع (RTT)', issuer: 'ماريسا بير — مدرسة RTT' },
    sv: { title: 'Rapid Transformational Therapy (RTT)', issuer: 'Marisa Peer — RTT School' },
  },
  {
    filename: 'Evin Hussein...pdf',
    en: { title: 'Evin Hussein — Certificate', issuer: '' },
    ar: { title: 'إيفين حسين — شهادة', issuer: '' },
    sv: { title: 'Evin Hussein — Certifikat', issuer: '' },
  },
];

export default certificatesData;
