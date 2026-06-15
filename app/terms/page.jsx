import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Termini e condizioni',
  description: 'Termini e condizioni provvisori della landing Turnami.'
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Termini</p>
            <h1>Termini e condizioni</h1>
            <p className="lead">Testo provvisorio da sostituire con versione legale definitiva prima della vendita.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content-card">
              <h2>Uso della landing</h2>
              <p>La presente landing ha finalità informative e commerciali. Le funzionalità operative di Turnami sono erogate dall'app separata, raggiungibile dal pulsante Accedi.</p>
              <h2>Prezzi e disponibilità</h2>
              <p>I prezzi riportati nella pagina pricing sono indicativi e possono essere modificati prima della sottoscrizione di un accordo commerciale.</p>
              <h2>Servizio operativo</h2>
              <p>Le condizioni specifiche di utilizzo dell'app, trattamento dati, ruoli, sicurezza e responsabilità dovranno essere regolate in un contratto separato o in termini dedicati dell'app.</p>
              <h2>Contatti</h2>
              <p>Per informazioni commerciali o richieste demo è possibile utilizzare la pagina contatti.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
