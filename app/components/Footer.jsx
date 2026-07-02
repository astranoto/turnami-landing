import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { site } from '../lib/site';

function getLatestArticles(n = 4) {
  const contentDir = path.join(process.cwd(), 'app/risorse/content');
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));
  return files
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
      const { data } = matter(raw);
      return { slug, title: data.title, date: data.date };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, n);
}

export default function Footer() {
  const articles = getLatestArticles();

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
          <h4>Risorse</h4>
          {articles.map((a) => (
            <Link key={a.slug} href={`/risorse/${a.slug}/`}>{a.title}</Link>
          ))}
          <Link href="/risorse/" className="footer-all-articles">Tutti gli articoli →</Link>
        </div>
      </div>
      <div className="container footer-legal">
        <span />
        <div>
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Termini e condizioni</Link>
        </div>
      </div>
    </footer>
  );
}
