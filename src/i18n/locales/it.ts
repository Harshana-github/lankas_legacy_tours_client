// Testi in italiano. Stessa struttura di en.ts (TypeScript segnala ogni traduzione mancante).
// Da far rileggere a un madrelingua italiano prima della pubblicazione.
import type { Dictionary } from "@/i18n/types";

const it: Dictionary = {
  meta: {
    siteTitle: "Tour privati in Sri Lanka",
    description:
      "Tour privati e guidati in Sri Lanka: antiche città, terre del tè avvolte nella nebbia, cascate e fauna selvatica, con il tuo autista-guida e il tuo veicolo.",
    location: "Sri Lanka · Ritiro in tutta l'isola",
  },

  common: {
    skipToContent: "Vai al contenuto",
    bookOnWhatsApp: "Prenota su WhatsApp",
    chatOnWhatsApp: "Scrivici su WhatsApp",
    chatWithUs: "Scrivici",
    chatWithUsAria: "Scrivici su WhatsApp",
    viewTour: "Vedi il tour",
    viewAllTours: "Vedi tutti i tour",
    viewGallery: "Vedi la galleria",
    readAllReviews: "Leggi tutte le recensioni",
    exploreTours: "Scopri i tour",
    browseTours: "Sfoglia i tour",
    ratingLabel: (rating) => `${rating} stelle su 5`,
  },

  nav: {
    tours: "Tour",
    gallery: "Galleria",
    reviews: "Recensioni",
    about: "Chi siamo",
    contact: "Contatti",
  },

  header: {
    homeAria: (name) => `${name}, home`,
    mainMenu: "Menu principale",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    language: "Lingua",
  },

  footer: {
    explore: "Esplora",
    contact: "Contatti",
    whatsApp: "WhatsApp",
    findUsOnTripAdvisor: "Trovaci su TripAdvisor",
    menu: "Piè di pagina",
    rights: (name) => `© ${name}. Tutti i diritti riservati.`,
  },

  tour: {
    fromPrice: (price) => `Da ${price} USD a persona`,
    priceOnRequest: "Prezzo su richiesta",
    privateTour: "Tour privato",
    highlights: "Punti salienti",
    thePlan: "Il programma",
    included: "Incluso",
    photos: "Foto",
    bookThisTour: "Prenota questo tour",
    finalPriceNote: "prezzo finale confermato su WhatsApp",
    youMayAlsoLike: "Potrebbe piacerti anche",
    breadcrumb: "Percorso di navigazione",
    loading: "Caricamento del tour",
  },

  reviewCard: {
    meta: (month, source) => `${month} · tramite ${source}`,
  },

  cta: {
    eyebrow: "Pianifica il tuo viaggio",
    title: "Dicci le tue date. Al resto pensiamo noi.",
    text: "Scrivici su WhatsApp. Rispondiamo di persona e costruiamo il tour intorno a te.",
  },

  home: {
    heroEyebrow: "Tour privati · Sri Lanka",
    heroTitle: "Scopri lo Sri Lanka, senza fretta.",
    heroText:
      "Antiche città, terre del tè avvolte nella nebbia, cascate e fauna selvatica, con il tuo autista-guida e un veicolo solo per te.",
    heroPoints: ["Solo tour privati", "Guide locali esperte", "Ritiro in tutta l'isola"],
    heroCaption: "Roccia del Leone di Sigiriya, Triangolo Culturale",
    whyEyebrow: "Perché viaggiare con noi",
    whyTitle: "Una piccola realtà locale, un'accoglienza personale",
    whyIntro:
      "Non siamo una grande agenzia. Ogni tour è pianificato, guidato e accompagnato dal nostro piccolo team.",
    reasons: {
      private: {
        title: "Privato, solo per te",
        text: "Il tuo veicolo e la tua guida. Niente pullman affollati, niente orari fissi: viaggiamo al tuo ritmo.",
      },
      guides: {
        title: "Guide locali, storie vere",
        text: "Nate e cresciute in Sri Lanka, le nostre guide condividono la storia, il cibo e i luoghi nascosti dietro ogni tappa.",
      },
      vehicles: {
        title: "Veicoli confortevoli",
        text: (count) => `Una flotta di ${count} veicoli puliti e ben tenuti, con autisti prudenti ed esperti.`,
      },
      booking: {
        title: "Prenotazione semplice",
        text: "Nessun account e nessun pagamento online. Invia una richiesta e organizza ogni dettaglio con noi su WhatsApp.",
      },
    },
    featuredEyebrow: "I nostri tour di punta",
    featuredTitle: "I viaggi che amiamo di più",
    featuredIntro: "Ogni tour è privato e può essere adattato al tuo ritmo e ai tuoi interessi.",
    howEyebrow: "Come funziona",
    howTitle: "Prenotare richiede meno di un minuto",
    steps: [
      { title: "Scegli un tour", text: "Scegli il tour che ti piace, oppure dicci cosa vorresti vedere." },
      {
        title: "Invia la richiesta",
        text: "Compila un breve modulo. WhatsApp si apre con i tuoi dati pronti da inviare.",
      },
      {
        title: "Pianifichiamo insieme",
        text: "Ti rispondiamo di persona su WhatsApp per confermare date, ritiro e prezzo.",
      },
    ],
    momentsEyebrow: "Momenti",
    momentsTitle: "I ricordi dei nostri ospiti",
    reviewsEyebrow: "Recensioni degli ospiti",
    reviewsTitle: "Nelle parole dei nostri ospiti",
  },

  toursPage: {
    metaTitle: "Tour",
    metaDescription:
      "Tour privati di un giorno e brevi viaggi in Sri Lanka: Sigiriya, Kandy, terre del tè, Ella, elefanti e costa meridionale.",
    eyebrow: "I nostri tour",
    title: "Viaggi privati in tutta l'isola",
    intro:
      "Ogni tour è privato, con il tuo veicolo e la tua guida. Date, ritmo e tappe si possono adattare. Basta chiedere.",
  },

  galleryPage: {
    metaTitle: "Galleria",
    metaDescription: "Foto dei nostri tour privati in Sri Lanka, condivise dai nostri ospiti.",
    eyebrow: "Galleria",
    title: "Momenti lungo la strada",
    intro: "Foto vere di tour veri: i nostri ospiti, le nostre guide e i luoghi che amiamo mostrare.",
  },

  reviewsPage: {
    metaTitle: "Recensioni",
    metaDescription: (name) => `Cosa dicono i nostri ospiti dei loro tour privati con ${name}.`,
    eyebrow: "Recensioni degli ospiti",
    title: "Parole gentili dei nostri ospiti",
    intro: "Ogni recensione viene da un ospite che ha viaggiato con noi.",
    basedOn: (count) => `Basato su ${count} recensioni`,
    seeMore: "Vedi altro su TripAdvisor",
  },

  about: {
    metaTitle: "Chi siamo",
    metaDescription: (name) =>
      `${name} è una piccola azienda srilankese di taxi e tour che offre tour privati con guide locali.`,
    eyebrow: "Chi siamo",
    title: "Condividere l'isola che chiamiamo casa",
    intro: (name) =>
      `${name} è nata da un'idea semplice: far conoscere ai viaggiatori lo Sri Lanka in cui siamo cresciuti, con onestà e in modo personale.`,
    storyEyebrow: "La nostra storia",
    storyTitle: "Una guida locale, un piccolo team, una grande isola",
    storyP1: (vehicles) =>
      `È cominciato con una guida che mostrava ai visitatori la sua città. Oggi siamo un piccolo team di guide e autisti con una flotta di ${vehicles} veicoli. Restiamo piccoli di proposito: così ogni ospite riceve tutta la nostra attenzione.`,
    storyP2:
      "Dalla fortezza di roccia di Sigiriya alle piantagioni di tè dell'altopiano, ti portiamo nei luoghi più famosi e in quelli tranquilli che stanno nel mezzo, raccontandoti le storie che ci sono dietro.",
    factVehicles: "Veicoli confortevoli",
    factPrivateValue: "100%",
    factPrivate: "Tour privati",
    factIslandWideValue: "Tutta l'isola",
    factIslandWide: "Ritiro e riaccompagnamento",
    travelEyebrow: "Come viaggiamo",
    travelTitle: "Il tuo ritmo, il tuo piano",
    travelP1:
      "Ogni tour è privato. Vuoi fermarti più a lungo a una cascata, saltare una tappa o trovare il miglior riso al curry della città? Basta dirlo alla tua guida. La giornata è tua.",
    travelP2:
      "Anche organizzare è semplice. Scrivici su WhatsApp e ti aiuteremo a costruire il viaggio, prima del tuo arrivo e per tutta la durata del viaggio.",
  },

  contact: {
    metaTitle: "Contatti",
    metaDescription: (name) =>
      `Contatta ${name} su WhatsApp, per telefono o via e-mail per organizzare il tuo tour privato in Sri Lanka.`,
    eyebrow: "Contatti",
    title: "Pianifichiamo il tuo viaggio",
    intro:
      "Il modo più rapido per raggiungerci è WhatsApp. Invia un messaggio, oppure compila il modulo e continueremo la conversazione lì.",
    whatsApp: "WhatsApp",
    phone: "Telefono",
    email: "E-mail",
    whereWeAre: "Dove siamo",
    formTitle: "Invia una richiesta",
    formIntro: "Non sai quale tour scegliere? Lascia aperto e te ne suggeriremo uno.",
  },

  booking: {
    tour: "Tour",
    notSure: "Non ancora deciso, suggeritemi un tour",
    name: "Il tuo nome",
    whatsApp: "Numero WhatsApp",
    whatsAppPlaceholder: "+39 312 345 6789",
    date: "Data preferita",
    adults: "Adulti",
    children: "Bambini",
    pickup: "Luogo di ritiro",
    pickupPlaceholder: "Nome dell'hotel o aeroporto",
    message: "Messaggio",
    optional: "(facoltativo)",
    submit: "Invia la richiesta su WhatsApp",
    note: "WhatsApp si apre con i tuoi dati pronti da inviare. Nulla viene prenotato o pagato finché non lo confermiamo con te.",
  },

  notFound: {
    eyebrow: "Pagina non trovata",
    title: "Questa strada non porta da nessuna parte",
    text: "La pagina che cerchi è stata spostata o non esiste più. Lascia che ti riaccompagniamo.",
  },

  photos: {
    "sigiriya-lake": "La Roccia del Leone di Sigiriya vista oltre un lago tranquillo",
    "sigiriya-view": "Ospiti davanti alla roccia di Sigiriya",
    "sigiriya-guests": "La nostra guida con un ospite vicino a Sigiriya",
    "village-rice-pounding": "Un'ospite pesta il riso in un villaggio tradizionale",
    "village-weaving": "Lezione di intreccio di foglie di palma in un villaggio",
    "village-cooking": "Cucina di villaggio con pentole di terracotta sul fuoco di legna",
    "village-lunch": "Pranzo srilankese cucinato in casa",
    "kandy-temple": "Ospiti al Tempio del Dente a Kandy",
    "kandy-temple-gardens": "I giardini del Tempio del Dente",
    "kandy-hindu-temple": "All'interno di un colorato tempio indù",
    "elephant-river-bath": "Un elefante fa il bagno nel fiume con un'ospite",
    "elephant-river": "Un'ospite accanto a un elefante nel fiume",
    "tea-plucking": "Ospiti raccolgono il tè in una piantagione sulla collina",
    "labookellie-tea": "Ospiti nella piantagione di tè di Labookellie",
    "tea-plantation": "Una raccoglitrice mostra a un'ospite come cogliere le foglie",
    "tea-picker": "Un'ospite raccoglie il tè con un cesto",
    "ramboda-falls": "Le cascate di Ramboda sull'altopiano",
    "tea-centre": "Tè e dolce con vista sulle piantagioni",
    "labookellie-guests": "La nostra guida con gli ospiti a Labookellie",
    "tea-country-guests": "Ospiti felici nella terra del tè",
    "nine-arch-bridge": "Ospiti al Nine Arch Bridge a Ella",
    "ella-waterfall": "La nostra guida con un'ospite a una cascata vicino a Ella",
    "ella-falls": "La nostra guida accanto a una cascata",
    "waterfall-swim": "Ospiti a una cascata con una piscina naturale",
    "waterfall-pool": "Ospiti nell'acqua di una pozza di roccia sotto una cascata",
    "elephant-encounter": "Un ospite vicino a un elefante",
    "elephant-guests": "Due ospiti in posa con un elefante",
    "elephant-selfie": "La nostra guida con gli ospiti e un elefante",
    "south-coast": "Ospiti sulla costa meridionale bordata di palme",
    "beach-guests": "La nostra guida con un gruppo di ospiti sul mare",
  },

  tours: {
    "sigiriya-village-life": {
      title: "Roccia di Sigiriya e vita di villaggio",
      location: "Sigiriya · Habarana",
      duration: "Giornata intera · circa 10 ore",
      summary:
        "Sali alla fortezza della Roccia del Leone del V secolo, poi rallenta in un villaggio tradizionale con un pranzo cucinato in casa.",
      description: [
        "Sigiriya si eleva di 200 metri sulle pianure del Triangolo Culturale. Partiamo presto per salire prima del caldo, oltre i famosi affreschi e le zampe del leone, fino alle rovine del palazzo in cima.",
        "Nel pomeriggio lasciamo la folla alle spalle. In un villaggio di agricoltori vedrai pestare il riso a mano, proverai a intrecciare le foglie di palma da cocco e condividerai un pranzo cotto sul fuoco di legna.",
      ],
      highlights: [
        "Salita alla Roccia del Leone di Sigiriya, Patrimonio dell'Umanità UNESCO",
        "Visita a un villaggio tradizionale con attività da provare di persona",
        "Pranzo srilankese fatto in casa in una cucina di villaggio",
        "Vista sulla roccia dal lago, lontano dalla folla",
      ],
      itinerary: [
        { title: "Ritiro mattutino", description: "Ritiro in hotel e viaggio verso Sigiriya." },
        { title: "Roccia del Leone di Sigiriya", description: "Salita guidata fino alla cima, circa 2–3 ore." },
        {
          title: "Esperienza di villaggio",
          description: "Pestare il riso, intrecciare foglie di palma e una passeggiata tra le risaie.",
        },
        { title: "Pranzo al villaggio", description: "Un pranzo di riso e curry preparato da una famiglia locale." },
        { title: "Ritorno", description: "Viaggio rilassato di ritorno in hotel." },
      ],
      included: [
        "Veicolo privato con aria condizionata",
        "Autista-guida che parla inglese",
        "Pranzo al villaggio",
        "Acqua in bottiglia",
      ],
    },
    "kandy-temple-of-the-tooth": {
      title: "Kandy e il Tempio del Dente",
      location: "Kandy · Pinnawala",
      duration: "Giornata intera · circa 9 ore",
      summary:
        "L'ultima capitale reale dello Sri Lanka: il sacro Tempio del Dente, colorati templi indù ed elefanti che fanno il bagno nel fiume.",
      description: [
        "Kandy sorge tra colline verdi intorno a un lago tranquillo. La tua guida ti accompagna nel Tempio della Sacra Reliquia del Dente, il santuario buddista più importante dell'isola, e ti spiega le storie dietro i suoi rituali.",
        "Lungo il percorso ci fermiamo in un tempio indù pieno di divinità scolpite e dipinte e al fiume dove gli elefanti scendono a fare il bagno.",
      ],
      highlights: [
        "Tempio della Sacra Reliquia del Dente, Patrimonio dell'Umanità UNESCO",
        "Visita a un colorato tempio indù",
        "Elefanti che fanno il bagno nel fiume",
        "Il lago di Kandy e il belvedere sulla città",
      ],
      itinerary: [
        { title: "Ritiro", description: "Ritiro al tuo hotel a Kandy o nelle vicinanze." },
        { title: "Elefanti al fiume", description: "Guarda gli elefanti fare il bagno e giocare nel fiume." },
        { title: "Tempio indù", description: "Breve visita a un kovil riccamente decorato." },
        { title: "Tempio del Dente", description: "Visita guidata al tempio e ai suoi giardini." },
        { title: "Lago di Kandy", description: "Passeggiata sul lago e belvedere sulla città." },
      ],
      included: ["Veicolo privato con aria condizionata", "Autista-guida che parla inglese", "Acqua in bottiglia"],
    },
    "tea-country-nuwara-eliya": {
      title: "Terre del tè e Nuwara Eliya",
      location: "Ramboda · Nuwara Eliya",
      duration: "Giornata intera · circa 10 ore",
      summary:
        "Sali tra le colline nebbiose, raccogli il tè con le raccoglitrici della piantagione e assaggia tè di Ceylon appena fatto con vista sulle piantagioni.",
      description: [
        "La strada verso l'altopiano sale tra cascate e terrazze di tè senza fine. Alle cascate di Ramboda ci fermiamo per il panorama prima di raggiungere l'aria fresca delle montagne.",
        "In una piantagione in attività puoi provare a raccogliere le foglie di tè insieme alle raccoglitrici, poi sederti a gustare una tazza fresca e una fetta di dolce al centro del tè di Labookellie, che domina la valle.",
      ],
      highlights: [
        "Raccogliere le foglie di tè con le raccoglitrici della piantagione",
        "Degustazione di tè a Labookellie con vista sulla valle",
        "Belvedere sulle cascate di Ramboda",
        "Nuwara Eliya, la «Piccola Inghilterra» dello Sri Lanka",
      ],
      itinerary: [
        { title: "Ritiro", description: "Ritiro a Kandy o nel tuo hotel sull'altopiano." },
        { title: "Cascate di Ramboda", description: "Sosta alle cascate lungo la salita verso le colline." },
        { title: "Raccolta del tè", description: "Unitevi alle raccoglitrici in una piantagione di tè in attività." },
        { title: "Centro del tè di Labookellie", description: "Tè fresco e dolce con vista sulle piantagioni." },
        { title: "Nuwara Eliya", description: "Il lago Gregory e il centro coloniale della città." },
      ],
      included: [
        "Veicolo privato con aria condizionata",
        "Autista-guida che parla inglese",
        "Degustazione di tè",
        "Acqua in bottiglia",
      ],
    },
    "ella-waterfalls": {
      title: "Ella, Nine Arch Bridge e cascate",
      location: "Ella · Altopiano",
      duration: "2 giorni · 1 notte",
      summary:
        "Due giorni rilassati a Ella: il famoso Nine Arch Bridge, cascate nella giungla e fresche pozze naturali dove fare il bagno.",
      description: [
        "Ella è una piccola cittadina di montagna circondata da foresta e tè. Facciamo coincidere la visita al Nine Arch Bridge con il passaggio del treno, poi ci dirigiamo verso cascate nascoste tra le colline.",
        "Il secondo giorno ti rinfreschi in una pozza naturale di roccia sotto una cascata prima del viaggio di ritorno, senza fretta. La tua guida sceglie i posti più tranquilli e i momenti migliori per visitarli.",
      ],
      highlights: [
        "Il Nine Arch Bridge mentre passa il treno",
        "Le cascate di Ravana e altre cascate nascoste più tranquille",
        "Bagno in una pozza naturale di roccia",
        "Vista sulle montagne dall'Ella Gap",
      ],
      itinerary: [
        { title: "Giorno 1 · Verso Ella", description: "Viaggio panoramico attraverso l'altopiano fino a Ella." },
        { title: "Giorno 1 · Nine Arch Bridge", description: "Camminata fino al ponte per vedere passare il treno." },
        { title: "Giorno 2 · Cascate", description: "Visita alle cascate di Ravana e a una cascata più tranquilla nella giungla." },
        { title: "Giorno 2 · Pozza di roccia", description: "Il tempo per nuotare e rilassarsi prima del ritorno." },
      ],
      included: [
        "Veicolo privato con aria condizionata",
        "Autista-guida che parla inglese",
        "Alloggio dell'autista",
        "Acqua in bottiglia",
      ],
    },
    "elephant-encounter": {
      title: "Incontro con gli elefanti",
      location: "Sri Lanka centrale",
      duration: "Mezza giornata · circa 5 ore",
      summary:
        "Incontra da vicino i gentili giganti dello Sri Lanka, con una guida che sa come osservarli con rispetto.",
      description: [
        "Pochi momenti restano impressi come quello in cui ci si trova vicino a un elefante. Questa escursione rilassata di mezza giornata ti porta vicino agli elefanti asiatici in un ambiente naturale.",
        "La tua guida ti racconta come vivono gli elefanti in Sri Lanka e come viverli in modo sicuro e rispettoso. Facile da abbinare a Sigiriya o Kandy.",
      ],
      highlights: [
        "Vedere da vicino gli elefanti asiatici",
        "Scoprire la vita degli elefanti in Sri Lanka",
        "Ritmo rilassato, ideale per le famiglie",
      ],
      itinerary: [
        { title: "Ritiro", description: "Ritiro al tuo hotel." },
        { title: "Incontro con gli elefanti", description: "Tempo con gli elefanti, accompagnati e senza fretta." },
        { title: "Ritorno", description: "Viaggio di ritorno, con una sosta per una noce di cocco fresca." },
      ],
      included: ["Veicolo privato con aria condizionata", "Autista-guida che parla inglese", "Acqua in bottiglia"],
    },
    "south-coast-escape": {
      title: "Fuga sulla costa meridionale",
      location: "Galle · Mirissa",
      duration: "Giornata intera · circa 10 ore",
      summary:
        "Spiagge bordate di palme, l'antico forte olandese di Galle e un tramonto lento sull'Oceano Indiano.",
      description: [
        "La costa meridionale è lo Sri Lanka nella sua versione più rilassata. Passeggiamo sulle mura del Forte di Galle, una città vecchia inserita nella lista UNESCO con vie coloniali e piccoli caffè.",
        "Poi è il momento della spiaggia: sabbia dorata, palme da cocco e mare caldo, per finire con il tramonto sulla costa.",
      ],
      highlights: [
        "Forte di Galle, Patrimonio dell'Umanità UNESCO",
        "Spiagge bordate di palme della costa meridionale",
        "Tramonto sull'Oceano Indiano",
      ],
      itinerary: [
        { title: "Ritiro", description: "Ritiro al tuo hotel sulla costa meridionale od occidentale." },
        { title: "Forte di Galle", description: "Passeggiata sulle mura e nelle vecchie strade." },
        { title: "Tempo in spiaggia", description: "Nuota e rilassati su una spiaggia tranquilla bordata di palme." },
        { title: "Tramonto", description: "Guarda il sole calare prima del viaggio di ritorno." },
      ],
      included: ["Veicolo privato con aria condizionata", "Autista-guida che parla inglese", "Acqua in bottiglia"],
    },
  },

  reviews: {
    r1: {
      country: "Regno Unito",
      text: "La nostra guida ha fatto vivere Sigiriya come una storia e non solo come una salita. Il pranzo al villaggio dopo è stato il pasto migliore di tutto il viaggio. Prenotare su WhatsApp è stato semplicissimo.",
    },
    r2: {
      country: "Germania",
      text: "Raccogliere il tè con le raccoglitrici e poi berlo con quella vista a Labookellie è stato indimenticabile. Auto comoda, guida prudente e sempre puntuale.",
    },
    r3: {
      country: "Francia",
      text: "Ci siamo sentiti ben seguiti fin dal primo messaggio. Sapeva esattamente quando andare al Nine Arch Bridge per vedere il treno senza la folla.",
    },
    r4: {
      country: "Paesi Bassi",
      text: "Un tour privato che sembrava viaggiare con un amico. Kandy, il tempio e gli elefanti nel fiume hanno avuto tutti il ritmo giusto.",
    },
    r5: {
      country: "Spagna",
      text: "Caloroso, onesto e molto preparato. Il giorno in cui ha piovuto ha cambiato il programma e ci ha trovato invece una bellissima cascata.",
    },
    r6: {
      country: "Australia",
      text: "Ottimo rapporto qualità-prezzo per un autista-guida privato. La giornata sulla costa meridionale è stata rilassata e il Forte di Galle è stato uno dei momenti migliori. Prenoteremmo di nuovo senza esitazione.",
    },
  },
};

export default it;
