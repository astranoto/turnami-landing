import { site } from '../lib/site';

export default function CTA({ title = 'Smetti di inseguire i turni.', text = 'Porta calendario, persone, ruoli e ore in un unico posto. Turnami è pensato per squadre piccole, operative e veloci.' }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Pronto per partire?</p>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-light" href="/contact/">Richiedi demo</a>
            <a className="btn btn-ghost-light" href={site.appUrl}>Accedi</a>
          </div>
        </div>
      </div>
    </section>
  );
}
