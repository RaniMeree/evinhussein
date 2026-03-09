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
    filename: 'rtt.pdf',
    en: { title: 'Rapid Transformational Therapy (RTT)', issuer: 'Marisa Peer — RTT School' },
    ar: { title: 'العلاج التحويلي السريع (RTT)', issuer: 'ماريسا بير — مدرسة RTT' },
    sv: { title: 'Rapid Transformational Therapy (RTT)', issuer: 'Marisa Peer — RTT School' },
  },
  {
    filename: 'integrative-medicine.pdf',
    en: { title: 'Integrative Medicine', issuer: 'Under the supervision of Dr. Nader' },
    ar: { title: 'الطب التكاملي الشامل', issuer: 'بإشراف الدكتور نادر' },
    sv: { title: 'Integrativ Medicin', issuer: 'Under handledning av Dr. Nader' },
  },
  {
    filename: 'macrobiotics.pdf',
    en: { title: 'Macrobiotics', issuer: 'Balanced Nutrition Science & Natural Lifestyle' },
    ar: { title: 'علم الماكروبيوتيك', issuer: 'علم التغذية المتوازنة ونمط الحياة الطبيعي' },
    sv: { title: 'Makrobiotik', issuer: 'Balanserad näringsvetenskap & naturlig livsstil' },
  },
];

export default certificatesData;
