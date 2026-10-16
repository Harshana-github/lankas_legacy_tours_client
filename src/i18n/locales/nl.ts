// Nederlandse teksten. Zelfde structuur als en.ts (TypeScript meldt elke ontbrekende vertaling).
// Laat dit voor de livegang nakijken door een Nederlandstalige.
import type { Dictionary } from "@/i18n/types";

const nl: Dictionary = {
  meta: {
    siteTitle: "Privétours in Sri Lanka",
    description:
      "Privé, begeleide tours door Sri Lanka: oude steden, nevelig theeland, watervallen en wilde dieren, met uw eigen chauffeur-gids en voertuig.",
    location: "Sri Lanka · Ophalen op het hele eiland",
  },

  common: {
    skipToContent: "Naar de inhoud",
    bookOnWhatsApp: "Boek via WhatsApp",
    chatOnWhatsApp: "Chat via WhatsApp",
    chatWithUs: "Chat met ons",
    chatWithUsAria: "Chat met ons via WhatsApp",
    viewTour: "Bekijk tour",
    viewAllTours: "Bekijk alle tours",
    viewGallery: "Bekijk de galerij",
    readAllReviews: "Lees alle reviews",
    exploreTours: "Ontdek de tours",
    browseTours: "Bekijk de tours",
    ratingLabel: (rating) => `${rating} van de 5 sterren`,
  },

  nav: {
    tours: "Tours",
    gallery: "Galerij",
    reviews: "Reviews",
    about: "Over ons",
    contact: "Contact",
  },

  header: {
    homeAria: (name) => `${name}, startpagina`,
    mainMenu: "Hoofdmenu",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
    language: "Taal",
  },

  footer: {
    explore: "Ontdekken",
    contact: "Contact",
    whatsApp: "WhatsApp",
    findUsOnTripAdvisor: "Vind ons op TripAdvisor",
    menu: "Voettekst",
    rights: (name) => `© ${name}. Alle rechten voorbehouden.`,
  },

  tour: {
    fromPrice: (price) => `Vanaf ${price} USD per persoon`,
    priceOnRequest: "Prijs op aanvraag",
    privateTour: "Privétour",
    highlights: "Hoogtepunten",
    thePlan: "Het programma",
    included: "Inbegrepen",
    photos: "Foto's",
    bookThisTour: "Boek deze tour",
    finalPriceNote: "definitieve prijs bevestigd via WhatsApp",
    youMayAlsoLike: "Misschien vindt u dit ook mooi",
    breadcrumb: "Kruimelpad",
    loading: "Tour wordt geladen",
  },

  reviewCard: {
    meta: (month, source) => `${month} · via ${source}`,
  },

  cta: {
    eyebrow: "Plan uw reis",
    title: "Laat ons uw reisdata weten. Wij regelen de rest.",
    text: "Stuur ons een bericht via WhatsApp. Wij antwoorden persoonlijk en stellen de tour samen rond u.",
  },

  home: {
    heroEyebrow: "Privétours · Sri Lanka",
    heroTitle: "Ontdek Sri Lanka, heerlijk op uw gemak.",
    heroText:
      "Oude steden, nevelig theeland, watervallen en wilde dieren, met uw eigen chauffeur-gids en een voertuig helemaal voor u.",
    heroPoints: ["Alleen privétours", "Ervaren lokale gidsen", "Ophalen op het hele eiland"],
    heroCaption: "Leeuwenrots van Sigiriya, Culturele Driehoek",
    whyEyebrow: "Waarom met ons reizen",
    whyTitle: "Een klein lokaal bedrijf, een persoonlijk welkom",
    whyIntro:
      "Wij zijn geen groot bureau. Elke tour wordt gepland, gereden en begeleid door ons eigen kleine team.",
    reasons: {
      private: {
        title: "Privé, helemaal voor u",
        text: "Uw eigen voertuig en gids. Geen overvolle bussen, geen vaste dienstregeling: wij reizen in uw tempo.",
      },
      guides: {
        title: "Lokale gidsen, echte verhalen",
        text: "Onze gidsen zijn geboren en getogen in Sri Lanka en vertellen over de geschiedenis, het eten en de verborgen plekjes achter elke stop.",
      },
      vehicles: {
        title: "Comfortabele voertuigen",
        text: (count) => `Een wagenpark van ${count} schone, goed onderhouden voertuigen met zorgvuldige, ervaren chauffeurs.`,
      },
      booking: {
        title: "Eenvoudig boeken",
        text: "Geen account en geen online betaling. Stuur een aanvraag en regel elk detail met ons via WhatsApp.",
      },
    },
    featuredEyebrow: "Onze topreizen",
    featuredTitle: "Onze meest geliefde reizen",
    featuredIntro: "Elke tour is privé en kan worden aangepast aan uw tempo en interesses.",
    howEyebrow: "Zo werkt het",
    howTitle: "Boeken kost minder dan een minuut",
    steps: [
      { title: "Kies een tour", text: "Kies een tour die u aanspreekt, of vertel ons wat u graag wilt zien." },
      {
        title: "Stuur uw aanvraag",
        text: "Vul een kort formulier in. WhatsApp opent met uw gegevens klaar om te versturen.",
      },
      {
        title: "Plan het samen",
        text: "Wij antwoorden persoonlijk via WhatsApp om data, ophaalplaats en prijs te bevestigen.",
      },
    ],
    momentsEyebrow: "Momenten",
    momentsTitle: "Herinneringen van onze gasten",
    reviewsEyebrow: "Reviews van gasten",
    reviewsTitle: "In de woorden van onze gasten",
  },

  toursPage: {
    metaTitle: "Tours",
    metaDescription:
      "Privé dagtours en korte reizen door Sri Lanka: Sigiriya, Kandy, theeland, Ella, olifanten en de zuidkust.",
    eyebrow: "Onze tours",
    title: "Privéreizen over het hele eiland",
    intro:
      "Elke tour is privé, met uw eigen voertuig en gids. Data, tempo en stops kunnen allemaal worden aangepast. Vraag het gerust.",
  },

  galleryPage: {
    metaTitle: "Galerij",
    metaDescription: "Foto's van onze privétours door Sri Lanka, gedeeld door onze gasten.",
    eyebrow: "Galerij",
    title: "Momenten onderweg",
    intro: "Echte foto's van echte tours: onze gasten, onze gidsen en de plekken die wij graag laten zien.",
  },

  reviewsPage: {
    metaTitle: "Reviews",
    metaDescription: (name) => `Wat onze gasten zeggen over hun privétours met ${name}.`,
    eyebrow: "Reviews van gasten",
    title: "Vriendelijke woorden van onze gasten",
    intro: "Elke review komt van een gast die met ons is meegereisd.",
    basedOn: (count) => `Gebaseerd op ${count} reviews`,
    seeMore: "Meer op TripAdvisor",
  },

  about: {
    metaTitle: "Over ons",
    metaDescription: (name) =>
      `${name} is een klein Sri Lankaans taxi- en tourbedrijf dat privétours aanbiedt met lokale gidsen.`,
    eyebrow: "Over ons",
    title: "Het eiland delen dat wij thuis noemen",
    intro: (name) =>
      `${name} begon met een eenvoudig idee: reizigers het Sri Lanka laten zien waarmee wij zijn opgegroeid, eerlijk en persoonlijk.`,
    storyEyebrow: "Ons verhaal",
    storyTitle: "Een lokale gids, een klein team, een groot eiland",
    storyP1: (vehicles) =>
      `Het begon met een gids die bezoekers zijn geboortestad liet zien. Inmiddels zijn we een klein team van gidsen en chauffeurs met een wagenpark van ${vehicles} voertuigen. We blijven bewust klein: zo krijgt elke gast onze volle aandacht.`,
    storyP2:
      "Van de rotsvesting Sigiriya tot de theeplantages in het hoogland brengen we u naar de beroemde bezienswaardigheden en naar de rustige plekken ertussen, en we vertellen u de verhalen erachter.",
    factVehicles: "Comfortabele voertuigen",
    factPrivateValue: "100%",
    factPrivate: "Privétours",
    factIslandWideValue: "Heel het eiland",
    factIslandWide: "Ophalen en terugbrengen",
    travelEyebrow: "Hoe wij reizen",
    travelTitle: "Uw tempo, uw plan",
    travelP1:
      "Elke tour is privé. Wilt u langer bij een waterval blijven, een stop overslaan of de beste rijst met curry van de stad proeven? Zeg het uw gids. De dag is van u.",
    travelP2:
      "Plannen is ook eenvoudig. Stuur ons een bericht via WhatsApp en we helpen u de reis samen te stellen, vóór uw aankomst en tijdens de hele reis.",
  },

  contact: {
    metaTitle: "Contact",
    metaDescription: (name) =>
      `Neem contact op met ${name} via WhatsApp, telefoon of e-mail om uw privétour in Sri Lanka te plannen.`,
    eyebrow: "Contact",
    title: "Laten we uw reis plannen",
    intro:
      "Het snelst bereikt u ons via WhatsApp. Stuur een bericht, of vul het formulier in, dan zetten we het gesprek daar voort.",
    whatsApp: "WhatsApp",
    phone: "Telefoon",
    email: "E-mail",
    whereWeAre: "Waar u ons vindt",
    formTitle: "Stuur een aanvraag",
    formIntro: "Weet u nog niet welke tour? Laat het open, dan doen wij een voorstel.",
  },

  booking: {
    tour: "Tour",
    notSure: "Nog niet zeker, stel mij een tour voor",
    name: "Uw naam",
    whatsApp: "WhatsApp-nummer",
    whatsAppPlaceholder: "+31 6 12345678",
    date: "Gewenste datum",
    adults: "Volwassenen",
    children: "Kinderen",
    pickup: "Ophaalplaats",
    pickupPlaceholder: "Naam van hotel of luchthaven",
    message: "Bericht",
    optional: "(optioneel)",
    submit: "Stuur aanvraag via WhatsApp",
    note: "WhatsApp opent met uw gegevens klaar om te versturen. Er wordt niets geboekt of betaald voordat wij het met u bevestigen.",
  },

  notFound: {
    eyebrow: "Pagina niet gevonden",
    title: "Dit pad leidt nergens heen",
    text: "De pagina die u zoekt is verplaatst of bestaat niet meer. Laat ons u de weg terug wijzen.",
  },

  photos: {
    "sigiriya-lake": "De Leeuwenrots van Sigiriya, gezien over een rustig meer",
    "sigiriya-view": "Gasten voor de rots van Sigiriya",
    "sigiriya-guests": "Onze gids met een gast bij Sigiriya",
    "village-rice-pounding": "Gast stampt rijst in een traditioneel dorp",
    "village-weaving": "Les in het vlechten van palmbladeren in een dorp",
    "village-cooking": "Dorpskeuken met aardewerken potten boven een houtvuur",
    "village-lunch": "Zelfgemaakte Sri Lankaanse lunch",
    "kandy-temple": "Gasten bij de Tandtempel in Kandy",
    "kandy-temple-gardens": "De tuinen van de Tandtempel",
    "kandy-hindu-temple": "Binnen in een kleurrijke hindoetempel",
    "elephant-river-bath": "Olifant baadt met een gast in de rivier",
    "elephant-river": "Gast naast een olifant in de rivier",
    "tea-plucking": "Gasten plukken thee op een plantage op een heuvel",
    "labookellie-tea": "Gasten op de theeplantage van Labookellie",
    "tea-plantation": "Een theeplukster laat een gast zien hoe je de blaadjes plukt",
    "tea-picker": "Gast plukt thee met een mand",
    "ramboda-falls": "De Ramboda-watervallen in het hoogland",
    "tea-centre": "Thee en cake met uitzicht op de plantages",
    "labookellie-guests": "Onze gids met gasten bij Labookellie",
    "tea-country-guests": "Blije gasten in het theeland",
    "nine-arch-bridge": "Gasten bij de Nine Arch Bridge in Ella",
    "ella-waterfall": "Onze gids met een gast bij een waterval bij Ella",
    "ella-falls": "Onze gids naast een waterval",
    "waterfall-swim": "Gasten bij een waterval met een natuurlijk zwembad",
    "waterfall-pool": "Gasten waden in een rotsbekken onder een waterval",
    "elephant-encounter": "Gast naast een olifant",
    "elephant-guests": "Twee gasten poseren met een olifant",
    "elephant-selfie": "Onze gids met gasten en een olifant",
    "south-coast": "Gasten aan de met palmen omzoomde zuidkust",
    "beach-guests": "Onze gids met een groep gasten aan zee",
  },

  tours: {
    "sigiriya-village-life": {
      title: "Sigiriya-rots en dorpsleven",
      location: "Sigiriya · Habarana",
      duration: "Hele dag · ongeveer 10 uur",
      summary:
        "Beklim de Leeuwenrots-vesting uit de 5e eeuw en kom daarna tot rust in een traditioneel dorp met een zelfgemaakte lunch.",
      description: [
        "Sigiriya rijst 200 meter boven de vlakten van de Culturele Driehoek uit. We vertrekken vroeg om voor de hitte te klimmen, langs de beroemde fresco's en de leeuwenpoten naar de paleisruïnes op de top.",
        "In de middag laten we de drukte achter ons. In een boerendorp ziet u hoe rijst met de hand wordt gestampt, probeert u te vlechten met kokospalmbladeren en deelt u een lunch die op houtvuur is bereid.",
      ],
      highlights: [
        "Beklim de Leeuwenrots van Sigiriya, UNESCO-werelderfgoed",
        "Bezoek aan een traditioneel dorp met activiteiten om zelf te doen",
        "Zelfgemaakte Sri Lankaanse lunch in een dorpskeuken",
        "Uitzicht op de rots vanaf het meer, weg van de drukte",
      ],
      itinerary: [
        { title: "Vroeg ophalen", description: "Ophalen bij uw hotel en rit naar Sigiriya." },
        { title: "Leeuwenrots van Sigiriya", description: "Begeleide klim naar de top, ongeveer 2 tot 3 uur." },
        {
          title: "Dorpservaring",
          description: "Rijst stampen, palmbladeren vlechten en een wandeling door de rijstvelden.",
        },
        { title: "Lunch in het dorp", description: "Een lunch met rijst en curry, bereid door een lokaal gezin." },
        { title: "Terugreis", description: "Ontspannen rit terug naar uw hotel." },
      ],
      included: [
        "Privévoertuig met airconditioning",
        "Engelssprekende chauffeur-gids",
        "Lunch in het dorp",
        "Flesje water",
      ],
    },
    "kandy-temple-of-the-tooth": {
      title: "Kandy en de Tandtempel",
      location: "Kandy · Pinnawala",
      duration: "Hele dag · ongeveer 9 uur",
      summary:
        "De laatste koninklijke hoofdstad van Sri Lanka: de heilige Tandtempel, kleurrijke hindoetempels en olifanten die in de rivier baden.",
      description: [
        "Kandy ligt tussen groene heuvels rond een rustig meer. Uw gids neemt u mee door de Tempel van de Heilige Tandrelikwie, het belangrijkste boeddhistische heiligdom van het eiland, en vertelt de verhalen achter de rituelen.",
        "Onderweg stoppen we bij een hindoetempel vol gebeeldhouwde, beschilderde goden en bij de rivier waar de olifanten komen baden.",
      ],
      highlights: [
        "Tempel van de Heilige Tandrelikwie, UNESCO-werelderfgoed",
        "Bezoek aan een kleurrijke hindoetempel",
        "Olifanten die in de rivier baden",
        "Het meer van Kandy en het uitkijkpunt over de stad",
      ],
      itinerary: [
        { title: "Ophalen", description: "Ophalen bij uw hotel in Kandy of in de buurt." },
        { title: "Olifanten bij de rivier", description: "Kijk hoe olifanten baden en spelen in de rivier." },
        { title: "Hindoetempel", description: "Kort bezoek aan een rijk versierde kovil." },
        { title: "Tandtempel", description: "Rondleiding door de tempel en de tuinen." },
        { title: "Meer van Kandy", description: "Wandeling langs het meer en uitkijkpunt over de stad." },
      ],
      included: ["Privévoertuig met airconditioning", "Engelssprekende chauffeur-gids", "Flesje water"],
    },
    "tea-country-nuwara-eliya": {
      title: "Theeland en Nuwara Eliya",
      location: "Ramboda · Nuwara Eliya",
      duration: "Hele dag · ongeveer 10 uur",
      summary:
        "Slingerend omhoog de nevelige heuvels in, thee plukken met de plukkers van de plantage en verse Ceylon-thee proeven met uitzicht over de plantages.",
      description: [
        "De weg het hoogland in loopt langs watervallen en eindeloze theeterrassen. Bij de Ramboda-watervallen stoppen we voor het uitzicht voordat we de koele berglucht bereiken.",
        "Op een werkende plantage kunt u samen met de plukkers theebladeren plukken en daarna genieten van een verse kop thee met cake in het theecentrum van Labookellie, met uitzicht over de vallei.",
      ],
      highlights: [
        "Theebladeren plukken met de plukkers van de plantage",
        "Theeproeverij in Labookellie met uitzicht over de vallei",
        "Uitkijkpunt bij de Ramboda-watervallen",
        "Nuwara Eliya, het 'Little England' van Sri Lanka",
      ],
      itinerary: [
        { title: "Ophalen", description: "Ophalen in Kandy of bij uw hotel in het hoogland." },
        { title: "Ramboda-watervallen", description: "Stop bij de watervallen op weg naar de heuvels." },
        { title: "Thee plukken", description: "Pluk mee met de plukkers op een werkende theeplantage." },
        { title: "Theecentrum Labookellie", description: "Verse thee en cake met uitzicht op de plantages." },
        { title: "Nuwara Eliya", description: "Het Gregory-meer en het koloniale stadscentrum." },
      ],
      included: [
        "Privévoertuig met airconditioning",
        "Engelssprekende chauffeur-gids",
        "Theeproeverij",
        "Flesje water",
      ],
    },
    "ella-waterfalls": {
      title: "Ella, Nine Arch Bridge en watervallen",
      location: "Ella · Hoogland",
      duration: "2 dagen · 1 nacht",
      summary:
        "Twee rustige dagen in Ella: de beroemde Nine Arch Bridge, watervallen in de jungle en koele natuurlijke poelen om in te zwemmen.",
      description: [
        "Ella is een klein bergstadje, omringd door bos en thee. We plannen uw bezoek aan de Nine Arch Bridge op het moment dat de trein eroverheen rijdt en gaan daarna naar watervallen die verscholen liggen in de heuvels.",
        "Op de tweede dag verkoelt u zich in een natuurlijke rotspoel onder een waterval, voordat we ontspannen teruggaan. Uw gids kiest de rustigste plekken en de beste tijden om ze te bezoeken.",
      ],
      highlights: [
        "De Nine Arch Bridge terwijl de trein erover rijdt",
        "De Ravana-watervallen en rustigere, verborgen watervallen",
        "Zwemmen in een natuurlijke rotspoel",
        "Bergzicht over de Ella Gap",
      ],
      itinerary: [
        { title: "Dag 1 · Naar Ella", description: "Mooie rit door het hoogland naar Ella." },
        { title: "Dag 1 · Nine Arch Bridge", description: "Wandeling naar de brug om de trein te zien passeren." },
        { title: "Dag 2 · Watervallen", description: "Bezoek aan de Ravana-watervallen en een rustigere waterval in de jungle." },
        { title: "Dag 2 · Rotspoel", description: "Tijd om te zwemmen en te ontspannen voor de terugrit." },
      ],
      included: [
        "Privévoertuig met airconditioning",
        "Engelssprekende chauffeur-gids",
        "Verblijf van de chauffeur",
        "Flesje water",
      ],
    },
    "elephant-encounter": {
      title: "Ontmoeting met olifanten",
      location: "Centraal Sri Lanka",
      duration: "Halve dag · ongeveer 5 uur",
      summary:
        "Ontmoet de vriendelijke reuzen van Sri Lanka van dichtbij, met een gids die weet hoe je ze met respect bekijkt.",
      description: [
        "Weinig momenten blijven u zo bij als dicht bij een olifant staan. Deze ontspannen uitstap van een halve dag brengt u dicht bij Aziatische olifanten in een natuurlijke omgeving.",
        "Uw gids vertelt hoe olifanten in Sri Lanka leven en hoe u ze veilig en met respect kunt ervaren. Eenvoudig te combineren met Sigiriya of Kandy.",
      ],
      highlights: [
        "Aziatische olifanten van dichtbij zien",
        "Leer over het leven van olifanten in Sri Lanka",
        "Rustig tempo, ideaal voor gezinnen",
      ],
      itinerary: [
        { title: "Ophalen", description: "Ophalen bij uw hotel." },
        { title: "Ontmoeting met de olifanten", description: "Tijd met de olifanten, begeleid en zonder haast." },
        { title: "Terugreis", description: "Rit terug, met een stop voor verse koningskokosnoot." },
      ],
      included: ["Privévoertuig met airconditioning", "Engelssprekende chauffeur-gids", "Flesje water"],
    },
    "south-coast-escape": {
      title: "Ontsnapping aan de zuidkust",
      location: "Galle · Mirissa",
      duration: "Hele dag · ongeveer 10 uur",
      summary:
        "Met palmen omzoomde stranden, het oude Nederlandse fort van Galle en een rustige zonsondergang aan de Indische Oceaan.",
      description: [
        "De zuidkust is Sri Lanka op zijn meest ontspannen. We wandelen over de wallen van het fort van Galle, een oude stad op de UNESCO-lijst met koloniale straatjes en kleine cafés.",
        "Daarna is het strandtijd: gouden zand, kokospalmen en warme zee, met een zonsondergang aan de kust als afsluiting.",
      ],
      highlights: [
        "Fort van Galle, UNESCO-werelderfgoed",
        "Met palmen omzoomde stranden aan de zuidkust",
        "Zonsondergang aan de Indische Oceaan",
      ],
      itinerary: [
        { title: "Ophalen", description: "Ophalen bij uw hotel aan de zuid- of westkust." },
        { title: "Fort van Galle", description: "Wandeling over de wallen en door de oude straatjes." },
        { title: "Strandtijd", description: "Zwemmen en ontspannen op een rustig strand met palmen." },
        { title: "Zonsondergang", description: "Kijk hoe de zon ondergaat voor de terugrit." },
      ],
      included: ["Privévoertuig met airconditioning", "Engelssprekende chauffeur-gids", "Flesje water"],
    },
  },

  reviews: {
    r1: {
      country: "Verenigd Koninkrijk",
      text: "Onze gids maakte van Sigiriya een verhaal in plaats van alleen een klim. De lunch in het dorp daarna was de beste maaltijd van onze hele reis. Boeken via WhatsApp was zo makkelijk.",
    },
    r2: {
      country: "Duitsland",
      text: "Thee plukken met de plukkers en die daarna drinken met dat uitzicht bij Labookellie was onvergetelijk. Comfortabele auto, zorgvuldig rijden en altijd op tijd.",
    },
    r3: {
      country: "Frankrijk",
      text: "We voelden ons vanaf het eerste bericht goed verzorgd. Hij wist precies wanneer we naar de Nine Arch Bridge moesten om de trein te zien zonder de drukte.",
    },
    r4: {
      country: "Nederland",
      text: "Een privétour die voelde als reizen met een vriend. Kandy, de tempel en de olifanten in de rivier: alles had precies het goede tempo.",
    },
    r5: {
      country: "Spanje",
      text: "Warm, eerlijk en zo deskundig. Toen het regende, paste hij ons plan op de dag zelf aan en vond hij in plaats daarvan een prachtige waterval voor ons.",
    },
    r6: {
      country: "Australië",
      text: "Geweldige prijs-kwaliteit voor een privéchauffeur-gids. De dag aan de zuidkust was ontspannen en het fort van Galle was een hoogtepunt. We zouden zonder aarzelen weer boeken.",
    },
  },
};

export default nl;
