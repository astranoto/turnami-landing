export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/turnami-landing";

export const site = {
  name: "turnami",
  claim: "I turni, finalmente, girano da soli.",
  appUrl:
    // process.env.NEXT_PUBLIC_APP_URL ||
    // "https://turnami-web-745994553366.europe-west1.run.app",
    process.env.NEXT_PUBLIC_APP_URL || "https://app.turnami.live",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@astranoto.com",
  astranotoUrl: "https://astranoto.com/",
};

export const navLinks = [
  { href: "/#funzionalita", label: "Funzionalità" },
  { href: "/#recensioni",   label: "Recensioni" },
  { href: "/risorse/",      label: "Risorse" },
  { href: "/pricing/",      label: "Prezzi" },
  { href: "/contact/",      label: "Demo" },
];

export const testimonials = [
  {
    quote:
      "Prima perdevo ore ogni settimana tra Excel, WhatsApp e messaggi vocali. Ora preparo tutto in un unico calendario e pubblico solo quando è pronto.",
    name: "Franco",
    role: "imprenditore food",
  },
  {
    quote:
      "Per la nostra agenzia di pulizie è stato fondamentale: sedi diverse, persone diverse, orari diversi. Finalmente tutto è ordinato.",
    name: "Carla",
    role: "titolare agenzia servizi",
  },
  {
    quote:
      "Il team vede i propri turni senza chiamarmi ogni due giorni. E io controllo subito le ore del mese.",
    name: "Marta",
    role: "responsabile locale",
  },
  {
    quote:
      "Con gli intermittenti avevamo sempre paura di perderci qualcosa tra turni, ore e comunicazioni. Ora è tutto più chiaro e controllabile.",
    name: "Luca",
    role: "gestore pizzeria",
  },
  {
    quote:
      "Prima ogni modifica diventava una catena di messaggi. Adesso aggiorno il turno, lo condivido e il team vede subito cosa cambia.",
    name: "Elena",
    role: "responsabile eventi",
  },
  {
    quote:
      "Ci serviva qualcosa di semplice, non un gestionale enorme e dai costi contenuti. Turni, persone e ore: finalmente abbiamo tutto dove serve.",
    name: "Davide",
    role: "titolare bar",
  },
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "29€",
    suffix: "/mese",
    description: "Per piccoli team che vogliono smettere di usare Excel.",
    features: [
      "1 sede",
      "Fino a 10 persone",
      "Calendario turni",
      "Vista mobile staff",
      "Riepilogo ore",
      "Pubblicazione calendario",
    ],
    cta: "Richiedi Starter",
    featured: false,
  },
  {
    name: "Team",
    price: "59€",
    suffix: "/mese",
    description:
      "Per locali, servizi e attività con più persone da coordinare.",
    features: [
      "Fino a 3 sedi",
      "Fino a 30 persone",
      "Ruoli admin, gestore e utente",
      "Dashboard KPI",
      "Heatmap copertura",
      "Export Excel",
      "Notifiche email",
    ],
    cta: "Scegli Team",
    featured: true,
  },
  {
    name: "Business",
    price: "Su richiesta",
    suffix: "",
    description:
      "Per realtà più strutturate, catene e configurazioni dedicate.",
    features: [
      "Sedi illimitate",
      "Persone illimitate",
      "Onboarding assistito",
      "PDF intermittenti",
      "Funzioni custom",
      "Supporto dedicato",
    ],
    cta: "Parliamone",
    featured: false,
  },
];
