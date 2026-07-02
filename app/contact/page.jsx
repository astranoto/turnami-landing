import Header from '../components/Header';
import Footer from '../components/Footer';
import { site } from '../lib/site';

export const metadata = {
  title: 'Richiedi demo',
  description: 'Contatta Turnami per una demo o per configurare una landing e un piano commerciale dedicato.'
};

export default function ContactPage() {
  const subject = encodeURIComponent('Richiesta demo Turnami');
  const body = encodeURIComponent('Ciao, vorrei ricevere informazioni su Turnami.\n\nNumero sedi:\nNumero persone:\nCome gestiamo oggi i turni:\n');
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
                <p className="eyebrow">Richiedi demo</p>
                <h1>Vediamo se Turnami può far girare meglio i tuoi turni.</h1>
                <p className="lead">Scrivici quante persone devi gestire, quante sedi hai e come organizzi oggi i turni. Ti rispondiamo con una proposta semplice.</p>
            </div>
        </section>
        <section className="section">
          <div className="container contact-grid">
            <aside className="contact-box">
              <h2>Scrivici via mail</h2>
              <p className="muted">Ti risponderemo con una proposta semplice e senza impegno.</p>
              <a className="btn btn-primary" href={`mailto:${site.contactEmail}?subject=${subject}&body=${body}`}>Via mail</a>
            </aside>
            <div className="contact-box">
              <h2>Scrivici su WhatsApp</h2>
              <p className="muted">Preferisci WhatsApp? Mandaci un messaggio diretto e ti rispondiamo in giornata.</p>
              <a className="btn btn-primary" href="https://wa.me/INSERISCI_NUMERO" target="_blank" rel="noopener noreferrer">Via WhatsApp</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
