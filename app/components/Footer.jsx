import Link from 'next/link';
import { site, basePath } from '../lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand footer-brand" href="/">
            <img src={`assets/turnami-mark.png`} alt="" className="brand-mark" />
            <span>turnami</span>
          </Link>
          <p className="muted">Made with love by Astranoto</p>
        </div>
        <div>
          <h4>Prodotto</h4>
          <Link href="/#funzionalita">Funzionalità</Link>
          <Link href="/#recensioni">Recensioni</Link>
          <Link href="/risorse/">Risorse</Link>
          <Link href="/pricing/">Prezzi</Link>
          <Link href="/contact/">Richiedi demo</Link>
        </div>
        <div>
          <h4>Azienda</h4>
          <Link href="/about/">Chi siamo</Link>
          <a href={site.astranotoUrl} target="_blank" rel="noreferrer">Astranoto</a>
          <a href={`mailto:${site.contactEmail}`}>Contatti</a>
        </div>
        <div>
          <h4>Legale</h4>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Termini</Link>
        </div>
      </div>
    </footer>
  );
}
