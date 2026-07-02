import './globals.css';
import { site } from './lib/site';

export const metadata = {
  title: {
    default: 'Turnami — Gestione turni semplice e veloce',
    template: '%s | Turnami'
  },
  description: 'Turnami ti aiuta a gestire turni e contratti intermittenti in un’unica web app, senza perderti tra Excel, WhatsApp e conteggi a mano.',
  metadataBase: new URL('https://turnami.live'),
  openGraph: {
    title: 'Turnami — I turni, finalmente, girano da soli.',
    description: 'Calendario, ruoli, sedi, ore, pubblicazione e riepiloghi in un unico posto.',
    url: 'https://turnami.live',
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
