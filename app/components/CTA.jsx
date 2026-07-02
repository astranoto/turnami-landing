import Link from 'next/link';
import { site } from '../lib/site';

export default function CTA({ title = 'I turni, finalmente, girano da soli.', text = 'Turnami ti aiuta a gestire turni e contratti intermittenti in un’unica web app, senza perderti tra Excel, WhatsApp e conteggi a mano.' }) {
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
            <Link className="btn btn-light" href="/contact/">Richiedi demo</Link>
            <a className="btn btn-ghost-light" href={site.appUrl}>Accedi</a>
          </div>
        </div>
      </div>
    </section>
  );
}
