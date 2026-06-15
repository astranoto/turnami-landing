# Turnami — Landing statica esportabile

Pacchetto marketing separato dall'app operativa Turnami.

Questa repo contiene solo la landing statica:

- Home
- Pricing
- Chi siamo
- Contatti/demo
- Privacy provvisoria
- Termini provvisori

Non contiene:

- Dockerfile
- cloudbuild.yaml
- Firebase init
- Firebase Authentication
- route `/login`
- session cookie
- middleware auth
- logiche tenant/claim

Il pulsante **Accedi** è un semplice link esterno verso l'app vera, per esempio:

```txt
https://app.turnami.it
```

## Architettura consigliata

```txt
turnami.it        -> landing marketing statica
app.turnami.it    -> app Turnami dinamica su Cloud Run
```

L'app vera resta nella monorepo esistente e continua a gestire login, claim Firebase, tenant, middleware, Firestore lato server e sicurezza.

## Stack

- Next.js con `output: 'export'`
- React
- CSS custom responsive
- Nessun backend
- Nessun SDK Firebase

## Configurazione

Copiare il file `.env.example` in `.env.local` e modificare i valori:

```bash
cp .env.example .env.local
```

Variabili disponibili:

```txt
NEXT_PUBLIC_APP_URL=https://app.turnami.it
NEXT_PUBLIC_CONTACT_EMAIL=info@astranoto.com
```

## Sviluppo locale

```bash
pnpm install
pnpm dev
```

## Build statica

```bash
pnpm build
```

Next genera la cartella:

```txt
out/
```

Quella cartella può essere pubblicata su hosting statico.

## Opzioni di pubblicazione

### Firebase Hosting statico

Pubblicare il contenuto della cartella `out/`. Non usare Firebase Auth in questa landing.

### GitHub Pages

Pubblicare la cartella `out/`. Il file `.nojekyll` è incluso in `public/` per evitare problemi con la cartella `_next`.

### Netlify / Vercel / altro static hosting

Build command:

```txt
pnpm build
```

Publish directory:

```txt
out
```

## Note per il developer

Questa landing è volutamente separata dall'app Turnami. Non va fusa nella web app dinamica senza valutazione, perché ogni modifica della landing non deve obbligare al rebuild/deploy dell'app operativa e viceversa.

Il link di accesso può essere cambiato in `app/lib/site.js` o tramite `NEXT_PUBLIC_APP_URL`.

## File importanti

```txt
app/page.jsx                  Home
app/pricing/page.jsx           Pricing
app/about/page.jsx             Chi siamo
app/contact/page.jsx           Contatti/demo
app/privacy/page.jsx           Privacy provvisoria
app/terms/page.jsx             Termini provvisori
app/globals.css                Stile grafico principale
app/lib/site.js                Contenuti modificabili: URL app, email, pricing, testimonial
public/assets/                 Logo e immagini
next.config.mjs                Static export
```
