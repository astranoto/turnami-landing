import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy provvisoria della landing Turnami.'
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Privacy</p>
            <h1>Privacy Policy</h1>
            <p className="lead">Testo provvisorio da sostituire con versione validata prima della pubblicazione ufficiale.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content-card">
              <h2>Landing statica</h2>
              <p>Questa landing non gestisce login, non inizializza Firebase Authentication, non legge claim e non accede al database dell'app Turnami. Il pulsante Accedi rimanda all'app operativa separata.</p>
              <h2>Dati di contatto</h2>
              <p>La pagina contatti usa un link mailto. Eventuali dati inviati tramite email vengono trattati solo per rispondere alla richiesta commerciale o informativa.</p>
              <h2>Cookie e analytics</h2>
              <p>Al momento non sono configurati strumenti analytics o cookie di profilazione. Se verranno aggiunti strumenti di tracciamento, questa informativa dovrà essere aggiornata.</p>
              <h2>Titolare</h2>
              <p>Inserire qui i dati completi del titolare del trattamento, contatti, sede legale e riferimenti privacy.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
