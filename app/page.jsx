import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import CTA from './components/CTA';
import CalendarMockup from './components/CalendarMockup';
import { site, testimonials, basePath } from './lib/site';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Web app mobile-first per gestire i turni</p>
              <h1>{site.claim}</h1>
              <p className="lead">Turnami aiuta ristoranti, locali, agenzie di servizi e piccole squadre operative a creare calendari, assegnare ruoli, pubblicare turni e controllare le ore senza perdere tempo tra Excel e chat.</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/contact/">Richiedi demo</Link>
                <a className="btn btn-secondary" href="#funzionalita">Guarda come funziona</a>
              </div>
              <p className="trust-line">Niente file infiniti. Niente screenshot da ricostruire. Niente turni persi nei messaggi.</p>
              <div className="hero-badges" aria-label="Punti principali">
                <span className="soft-badge">Calendario</span>
                <span className="soft-badge">Ruoli</span>
                <span className="soft-badge">Ore</span>
                <span className="soft-badge">Sedi</span>
                <span className="soft-badge">Export</span>
              </div>
            </div>
            <div className="mockup-wrap">
              <CalendarMockup />
            </div>
          </div>
        </section>

        <section className="section" id="funzionalita">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Meno caos, più squadra</p>
              <h2>Tutto quello che serve per organizzare chi lavora, quando lavora e dove serve.</h2>
              <p>Turnami mette nello stesso posto calendario, persone, sedi, ruoli, ore e pubblicazione. L'admin ha il controllo, il team vede solo ciò che gli serve.</p>
            </div>
            <div className="card-grid">
              <article className="card">
                <div className="card-icon">📅</div>
                <h3>Calendario chiaro</h3>
                <p>Mese, settimana e giorno con turni, sedi, ruoli, orari e stato di pubblicazione.</p>
              </article>
              <article className="card">
                <div className="card-icon">⏱️</div>
                <h3>Ore sotto controllo</h3>
                <p>Totali mensili, settimanali e per persona, senza dover rifare i conti a mano.</p>
              </article>
              <article className="card">
                <div className="card-icon">👥</div>
                <h3>Ruoli e sedi</h3>
                <p>Gestisci più sedi operative, coperture minime e responsabilità diverse nel team.</p>
              </article>
              <article className="card">
                <div className="card-icon">📲</div>
                <h3>Vista staff</h3>
                <p>Ogni persona accede da mobile e consulta i propri turni, senza modificare il calendario.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split">
            <div>
              <p className="eyebrow">Dashboard operativa</p>
              <h2>Capisci subito se sei coperto.</h2>
              <p className="lead">Turnami mostra ore lavorate, persone attive, turni in bozza, pubblicazioni e copertura. Così l'organizzazione non dipende più dalla memoria di una sola persona.</p>
              <div className="feature-list">
                <div className="feature-row"><span>1</span><div><h3>Bozza prima, pubblicazione dopo</h3><p>Prepara il calendario con calma e rendilo visibile allo staff solo quando è pronto.</p></div></div>
                <div className="feature-row"><span>2</span><div><h3>Copertura visibile</h3><p>Individua subito fasce scoperte, giornate critiche e sedi da rinforzare.</p></div></div>
                <div className="feature-row"><span>3</span><div><h3>Export quando serve</h3><p>Scarica riepiloghi utili per controllo interno, paghe o confronto con il team.</p></div></div>
              </div>
            </div>
            <div className="product-panel">
              <img src={`assets/turnami-mark.png`} alt="Icona Turnami" />
              <div className="panel-card one"><strong>128 ore pianificate</strong><span>Riepilogo mensile aggiornato automaticamente.</span></div>
              <div className="panel-card two"><strong>3 turni in bozza</strong><span>Pronti da controllare prima della pubblicazione.</span></div>
              <div className="panel-card three"><strong>2 sedi filtrate</strong><span>Vista pulita per responsabili e gestori.</span></div>
            </div>
          </div>
        </section>

        <section className="section" id="recensioni">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Esperienze</p>
              <h2>Pensato per chi i turni li deve fare davvero.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="quote-card" key={item.name}>
                  <blockquote>“{item.quote}”</blockquote>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Accessi chiari</p>
              <h2>Ognuno vede quello che deve vedere.</h2>
              <p>Admin, gestore e utente hanno viste diverse. La landing resta separata dall'app: il bottone Accedi porta all'app operativa, dove vivono login, claim, tenant e sicurezza.</p>
            </div>
            <div className="role-grid">
              <article className="role-card"><h3>Admin</h3><p>Gestisce azienda, staff, sedi, costi, turni, export e impostazioni.</p></article>
              <article className="role-card"><h3>Gestore</h3><p>Lavora sul calendario operativo senza accedere ai dati economici sensibili.</p></article>
              <article className="role-card"><h3>Utente</h3><p>Consulta da smartphone i propri turni e il riepilogo delle proprie ore.</p></article>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
