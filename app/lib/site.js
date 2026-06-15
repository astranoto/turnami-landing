export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/turnami-landing";

export const site = {
  name: "turnami",
  claim: "I turni, finalmente, girano da soli.",
  appUrl:
    process.env.NEXT_PUBLIC_APP_URL ||
    "https://turnami-web-745994553366.europe-west1.run.app",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@astranoto.com",
  astranotoUrl: "https://astranoto.com/",
};

export const navLinks = [
  { href: "/#funzionalita", label: "Funzionalità" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/about/", label: "Chi siamo" },
  { href: "/contact/", label: "Demo" },
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
