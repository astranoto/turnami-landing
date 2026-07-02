import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Informativa Privacy — Turnami',
  description: 'Informativa sul trattamento dei dati personali ai sensi del GDPR per il servizio Turnami.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Privacy</p>
            <h1>Informativa Privacy</h1>
            <p className="lead">Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 ("GDPR") e della normativa italiana applicabile.</p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content-card prose">
              <p>La presente informativa descrive come vengono trattati i dati personali raccolti tramite il sito <strong>turnami.live</strong>, tramite l'utilizzo del servizio Turnami e tramite i canali di contatto collegati, incluso WhatsApp.</p>

              <h2>1. Titolare del trattamento</h2>
              <p>Il Titolare del trattamento è <strong>Astranoto S.r.l. SB</strong>. Per qualsiasi richiesta relativa alla privacy è possibile scrivere a <a href="mailto:privacy@astranoto.com">privacy@astranoto.com</a>.</p>

              <h2>2. Che cos'è Turnami</h2>
              <p>Turnami è un servizio pensato per semplificare la gestione operativa dei turni, delle comunicazioni e delle attività collegate al personale, con particolare riferimento ai lavoratori intermittenti.</p>
              <p>Attraverso Turnami il Cliente può organizzare informazioni, turni, disponibilità, comunicazioni operative e attività necessarie alla propria gestione interna.</p>

              <h2>3. Dati personali trattati</h2>
              <p>Nell'ambito dell'utilizzo di Turnami possono essere trattati, a seconda dei casi, i seguenti dati personali:</p>
              <ul>
                <li>dati identificativi e di contatto dei referenti del Cliente, come nome, cognome, ruolo, e-mail e numero di telefono;</li>
                <li>dati necessari alla creazione e gestione dell'account, come e-mail, credenziali, user ID, data di creazione dell'account e log di accesso;</li>
                <li>dati aziendali e amministrativi del Cliente, inclusi dati di fatturazione, ove applicabile;</li>
                <li>dati relativi all'utilizzo del servizio, come attività svolte nella piattaforma, impostazioni, preferenze operative e richieste di assistenza;</li>
                <li>dati relativi ai lavoratori o collaboratori inseriti dal Cliente all'interno di Turnami, come nome, cognome, recapiti, turni, disponibilità, comunicazioni operative e altre informazioni necessarie alla gestione organizzativa;</li>
                <li>dati forniti spontaneamente tramite e-mail, moduli di contatto, telefonate, messaggi o richieste di supporto;</li>
                <li>dati forniti attraverso WhatsApp, come numero di telefono, nome profilo, contenuto dei messaggi, eventuali allegati inviati, data e ora delle comunicazioni.</li>
              </ul>
              <p>Turnami non richiede l'inserimento di dati non necessari al funzionamento del servizio. Il Cliente è invitato a non inserire dati particolari, sensibili o non pertinenti, salvo che siano strettamente necessari e gestiti nel rispetto della normativa applicabile.</p>

              <h2>4. Finalità del trattamento</h2>
              <p>I dati personali sono trattati per le seguenti finalità:</p>
              <ul>
                <li>creare e gestire l'account del Cliente;</li>
                <li>consentire l'accesso e l'utilizzo del servizio Turnami;</li>
                <li>organizzare turni, disponibilità, comunicazioni e attività operative relative al personale;</li>
                <li>fornire assistenza tecnica, operativa e commerciale;</li>
                <li>gestire richieste ricevute tramite e-mail, telefono, moduli online o WhatsApp;</li>
                <li>inviare comunicazioni strettamente legate al servizio;</li>
                <li>gestire aspetti amministrativi, contabili e fiscali;</li>
                <li>migliorare il funzionamento, la sicurezza e l'affidabilità del servizio;</li>
                <li>adempiere a obblighi previsti dalla legge o da richieste delle autorità competenti.</li>
              </ul>

              <h2>5. Base giuridica del trattamento</h2>
              <p>Il trattamento dei dati si basa, a seconda dei casi, su:</p>
              <ul>
                <li>esecuzione di un contratto o di misure precontrattuali;</li>
                <li>adempimento di obblighi di legge, fiscali, contabili o amministrativi;</li>
                <li>legittimo interesse del Titolare, ad esempio per garantire sicurezza, continuità del servizio, assistenza, prevenzione di abusi o tutela dei propri diritti;</li>
                <li>consenso dell'interessato, solo quando richiesto dalla normativa applicabile.</li>
              </ul>

              <h2>6. Dati inseriti dal Cliente</h2>
              <p>Quando il Cliente inserisce in Turnami dati relativi ai propri lavoratori, collaboratori o referenti interni, il Cliente resta responsabile della correttezza, liceità, pertinenza e aggiornamento dei dati inseriti.</p>
              <p>Il Cliente deve assicurarsi di avere un'idonea base giuridica per l'inserimento e l'utilizzo di tali dati all'interno di Turnami e, quando necessario, deve fornire ai propri lavoratori, collaboratori o referenti le informazioni previste dalla normativa privacy.</p>
              <p>I ruoli privacy relativi ai dati inseriti dal Cliente nella piattaforma sono regolati, ove necessario, dal contratto o dalle condizioni di utilizzo del servizio.</p>

              <h2>7. Modalità di trattamento</h2>
              <p>Il trattamento dei dati avviene con strumenti informatici, telematici e, ove necessario, manuali.</p>
              <p>I dati sono trattati con logiche strettamente correlate alle finalità indicate nella presente informativa e con misure tecniche e organizzative volte a proteggerli da accessi non autorizzati, perdita, modifica, divulgazione o uso improprio.</p>

              <h2>8. Conservazione dei dati</h2>
              <p>I dati personali sono conservati per il tempo necessario a fornire il servizio e a perseguire le finalità indicate nella presente informativa. In particolare:</p>
              <ul>
                <li>i dati dell'account sono conservati per tutta la durata del rapporto con il Cliente;</li>
                <li>i dati amministrativi e fiscali sono conservati per il periodo previsto dalla normativa applicabile;</li>
                <li>i dati relativi a richieste di assistenza o comunicazioni sono conservati per il tempo necessario alla gestione della richiesta e alla tutela dei diritti del Titolare;</li>
                <li>i dati inseriti dal Cliente nella piattaforma sono conservati per il tempo necessario all'erogazione del servizio, salvo diverse richieste compatibili con gli obblighi di legge e con il corretto funzionamento del servizio.</li>
              </ul>
              <p>Al termine del periodo di conservazione, i dati saranno cancellati, anonimizzati o resi non più riconducibili agli interessati, salvo obblighi di conservazione previsti dalla legge.</p>

              <h2>9. Sicurezza</h2>
              <p>Astranoto S.r.l. SB adotta misure tecniche e organizzative adeguate per proteggere i dati personali trattati tramite Turnami. Le misure di sicurezza sono finalizzate a ridurre i rischi di perdita, accesso non autorizzato, modifica, divulgazione o uso improprio dei dati.</p>

              <h2>10. Comunicazione dei dati a terzi</h2>
              <p>I dati personali possono essere accessibili, nei limiti necessari alle finalità indicate, a:</p>
              <ul>
                <li>personale e collaboratori autorizzati da Astranoto S.r.l. SB;</li>
                <li>fornitori tecnici che supportano il funzionamento del servizio, come hosting provider, strumenti software, servizi di comunicazione, servizi di assistenza e strumenti amministrativi;</li>
                <li>consulenti fiscali, legali o amministrativi;</li>
                <li>autorità pubbliche o soggetti legittimati, quando previsto dalla legge.</li>
              </ul>
              <p>I dati non sono venduti a terzi e non sono diffusi per finalità estranee al servizio.</p>

              <h2>11. Utilizzo di WhatsApp</h2>
              <p>Turnami può utilizzare WhatsApp come canale di contatto, assistenza o comunicazione operativa con il Cliente o con i soggetti autorizzati dal Cliente.</p>
              <p>Attraverso WhatsApp possono essere trattati dati come numero di telefono, nome profilo, contenuto dei messaggi, allegati inviati e informazioni tecniche legate alla comunicazione.</p>
              <p>L'utilizzo di WhatsApp comporta anche il trattamento dei dati da parte di WhatsApp secondo le proprie condizioni e informative privacy. L'utente è invitato a consultare le informative e le condizioni ufficiali di WhatsApp e WhatsApp Business.</p>
              <p>Il Cliente è responsabile dell'uso corretto di WhatsApp quando decide di utilizzarlo per comunicazioni relative ai propri lavoratori, collaboratori o referenti.</p>
              <p>Per completezza, si rinvia alla <a href="https://www.whatsapp.com/legal/business-app-privacy-policy?lang=it" target="_blank" rel="noreferrer">informativa privacy di WhatsApp</a>.</p>

              <h2>12. Trasferimento dei dati fuori dall'Unione Europea</h2>
              <p>La gestione e conservazione dei dati avviene, per quanto possibile, all'interno dell'Unione Europea.</p>
              <p>Qualora alcuni fornitori tecnici utilizzati dal Titolare trattino dati anche al di fuori dell'Unione Europea, il trasferimento avverrà nel rispetto degli articoli 44 e seguenti del GDPR, tramite garanzie adeguate, come decisioni di adeguatezza, clausole contrattuali standard o altri strumenti previsti dalla normativa applicabile.</p>

              <h2>13. Conferimento dei dati</h2>
              <p>Il conferimento dei dati necessari all'attivazione e all'utilizzo del servizio è necessario per permettere a Turnami di funzionare correttamente.</p>
              <p>Il mancato conferimento di alcuni dati può comportare l'impossibilità di creare un account, utilizzare alcune funzionalità, ricevere assistenza o completare attività amministrative.</p>
              <p>Il conferimento di dati non strettamente necessari è facoltativo.</p>

              <h2>14. Diritti dell'interessato</h2>
              <p>Gli interessati possono esercitare, nei limiti previsti dal GDPR, i seguenti diritti:</p>
              <ul>
                <li>diritto di accesso ai dati personali;</li>
                <li>diritto di rettifica dei dati inesatti o incompleti;</li>
                <li>diritto alla cancellazione dei dati;</li>
                <li>diritto alla limitazione del trattamento;</li>
                <li>diritto alla portabilità dei dati;</li>
                <li>diritto di opposizione al trattamento;</li>
                <li>diritto di revocare il consenso, quando il trattamento si basa sul consenso;</li>
                <li>diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali.</li>
              </ul>

              <h2>15. Come esercitare i diritti</h2>
              <p>Per esercitare i propri diritti o richiedere informazioni sul trattamento dei dati personali è possibile scrivere a: <a href="mailto:privacy@astranoto.com">privacy@astranoto.com</a>.</p>
              <p>Le richieste saranno gestite nei tempi previsti dalla normativa applicabile.</p>

              <h2>16. Modifiche alla presente informativa</h2>
              <p>La presente informativa può essere aggiornata nel tempo, anche in relazione a modifiche del servizio Turnami, degli strumenti utilizzati o della normativa applicabile.</p>
              <p>La versione aggiornata sarà pubblicata su <strong>turnami.live</strong> o resa disponibile attraverso i canali ufficiali del servizio.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
