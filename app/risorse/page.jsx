import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

function getArticles() {
  const contentDir = path.join(process.cwd(), 'app/risorse/content');
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));
  return files
    .map((file) => {
      const slug = file.replace('.mdx', '');
      const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8');
      const { data } = matter(raw);
      return { slug, title: data.title, date: data.date, excerpt: data.excerpt };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const metadata = {
  title: 'Risorse — Turnami',
  description: 'Guide e articoli pratici per chi gestisce turni e team operativi.',
};

export default function RisorsePage() {
  const articles = getArticles();

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Guide e consigli</p>
              <h1>Risorse</h1>
              <p>Articoli pratici per chi gestisce turni, team e piccole realtà operative.</p>
            </div>
            {articles.length === 0 ? (
              <p>Nessun articolo disponibile.</p>
            ) : (
              <div className="article-list">
                {articles.map((a) => (
                  <article key={a.slug} className="article-card">
                    {a.date && (
                      <time dateTime={a.date}>
                        {new Date(a.date).toLocaleDateString('it-IT', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                    <h2>
                      <Link href={`/risorse/${a.slug}/`}>{a.title}</Link>
                    </h2>
                    {a.excerpt && <p>{a.excerpt}</p>}
                    <Link href={`/risorse/${a.slug}/`} className="read-more">
                      Leggi →
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
