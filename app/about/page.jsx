import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { site, basePath } from '../lib/site';

export const metadata = {
  title: 'Chi siamo',
  description: 'Turnami nasce da Astranoto, società benefit bolognese che progetta strumenti digitali per organizzazioni e team operativi.'
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Chi siamo</p>
            <h1>Turnami nasce da chi i processi li costruisce sul campo.</h1>
            <p className="lead">Abbiamo visto troppe attività gestire i turni con file sparsi, chat infinite, screenshot e ore calcolate a mano. Turnami nasce per rendere questa parte più semplice, leggibile e solida.</p>
          </div>
        </section>
        <section className="section">
          <div className="container split">
            <div className="content-card">
              <h2>Un prodotto Astranoto</h2>
              <p>Turnami è un prodotto sviluppato da Astranoto, società benefit bolognese che progetta soluzioni software, interfacce e strumenti digitali per migliorare le dinamiche produttive e gestionali delle organizzazioni.</p>
              <p>Astranoto lavora con startup, PMI, PA e organizzazioni non-profit, unendo creatività, metodo e ingegneria.</p>
              <a className="btn btn-primary" href={site.astranotoUrl} target="_blank" rel="noreferrer">Scopri Astranoto</a>
            </div>
            <div className="product-panel">
              <img src={`${basePath}/assets/turnami-mark.png`} alt="Icona Turnami" />
              <div className="panel-card one"><strong>Software concreto</strong><span>Strumenti semplici, pensati per risolvere problemi reali.</span></div>
              <div className="panel-card two"><strong>Design operativo</strong><span>Interfacce chiare per persone che devono lavorare velocemente.</span></div>
              <div className="panel-card three"><strong>Processi leggibili</strong><span>Meno confusione, più controllo, più autonomia.</span></div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
