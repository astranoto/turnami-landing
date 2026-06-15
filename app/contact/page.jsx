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
              <h2>Contatto diretto</h2>
              <p className="muted">Questa pagina è statica: non salva dati e non invia moduli lato server. Il bottone apre una email precompilata.</p>
              <a className="btn btn-primary" href={`mailto:${site.contactEmail}?subject=${subject}&body=${body}`}>Scrivi per una demo</a>
            </aside>
            <div className="contact-box">
              <h2>Informazioni utili</h2>
              <div className="fake-form" aria-label="Campi suggeriti da inserire nella mail">
                <div className="fake-input">Nome attività</div>
                <div className="fake-input">Numero sedi</div>
                <div className="fake-input">Numero persone da gestire</div>
                <div className="fake-area">Problema principale: Excel, WhatsApp, cambi turno, ore, più sedi...</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
