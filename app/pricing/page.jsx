import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { pricingPlans, site } from '../lib/site';

export const metadata = {
  title: 'Pricing',
  description: 'Piani Turnami per piccoli team, locali, agenzie e attività operative.'
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Pricing semplice</p>
            <h1>Scegli il piano giusto per il tuo team.</h1>
            <p className="lead">Parti leggero, cresci quando ti serve. Tutti i piani includono calendario, gestione persone e accesso da mobile.</p>
          </div>
        </section>
        <section className="section">
          <div className="container pricing-grid">
            {pricingPlans.map((plan) => (
              <article className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                {plan.featured ? <span className="plan-badge">Consigliato</span> : null}
                <h2>{plan.name}</h2>
                <p className="muted">{plan.description}</p>
                <div className="price"><strong>{plan.price}</strong><span>{plan.suffix}</span></div>
                <ul className="clean">
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <a className={plan.featured ? 'btn btn-primary' : 'btn btn-secondary'} href={`mailto:${site.contactEmail}?subject=Turnami%20-%20${encodeURIComponent(plan.name)}`}>{plan.cta}</a>
              </article>
            ))}
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content-card">
              <h2>Nota commerciale</h2>
              <p>I prezzi sono una base di partenza per la vendita. Prima della pubblicazione definitiva si possono confermare importi, limiti persone/sedi, periodo di prova, eventuale setup iniziale e condizioni per clienti con esigenze particolari.</p>
            </div>
          </div>
        </section>
        <CTA title="Vuoi capire quale piano usare?" text="Raccontaci quante sedi hai, quante persone devi gestire e come oggi organizzi i turni. Ti aiutiamo a scegliere la configurazione più semplice." />
      </main>
      <Footer />
    </>
  );
}
