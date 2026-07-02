import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const contentDir = path.join(process.cwd(), 'app/risorse/content');

export async function generateStaticParams() {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.mdx'));
  return files.map((f) => ({ slug: f.replace('.mdx', '') }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf-8');
  const { data } = matter(raw);
  return {
    title: `${data.title} — Turnami`,
    description: data.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const raw = fs.readFileSync(path.join(contentDir, `${slug}.mdx`), 'utf-8');
  const { data, content } = matter(raw);
  const html = marked(content);

  return (
    <>
      <Header />
      <main>
        <article className="section">
          <div className="container prose">
            <Link href="/risorse/" className="back-link">
              ← Risorse
            </Link>
            {data.date && (
              <time dateTime={data.date}>
                {new Date(data.date).toLocaleDateString('it-IT', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            <h2>{data.title}</h2>
            <div
              className="mdx-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
