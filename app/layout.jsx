import './globals.css';
import { site } from './lib/site';

export const metadata = {
  title: {
    default: 'Turnami — Gestione turni semplice e veloce',
    template: '%s | Turnami'
  },
  description: 'Turnami è la landing statica della web app per creare calendari, assegnare ruoli, pubblicare turni e controllare le ore del team.',
  metadataBase: new URL('https://turnami.it'),
  openGraph: {
    title: 'Turnami — I turni, finalmente, girano da soli.',
    description: 'Calendario, ruoli, sedi, ore, pubblicazione e riepiloghi in un unico posto.',
    url: 'https://turnami.it',
    siteName: 'Turnami',
    images: [{ url: '/assets/turnami-logo-stacked.png', width: 1200, height: 900 }],
    locale: 'it_IT',
    type: 'website'
  },
  icons: {
    icon: '/assets/turnami-mark.png',
    apple: '/assets/turnami-mark.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}
