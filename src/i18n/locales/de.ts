// Deutsche Texte. Gleiche Struktur wie en.ts (TypeScript meldet jede fehlende Übersetzung).
// Vor der Veröffentlichung bitte von einer Person mit Deutsch als Muttersprache prüfen lassen.
import type { Dictionary } from "@/i18n/types";

const de: Dictionary = {
  meta: {
    siteTitle: "Private Touren in Sri Lanka",
    description:
      "Private, geführte Touren durch Sri Lanka: antike Städte, nebelverhangenes Teeland, Wasserfälle und Wildtiere, mit eigenem Fahrer und Reiseleiter im eigenen Fahrzeug.",
    location: "Sri Lanka · Abholung auf der ganzen Insel",
  },

  common: {
    skipToContent: "Zum Inhalt springen",
    bookOnWhatsApp: "Über WhatsApp buchen",
    chatOnWhatsApp: "Per WhatsApp chatten",
    chatWithUs: "Schreiben Sie uns",
    chatWithUsAria: "Per WhatsApp mit uns chatten",
    viewTour: "Tour ansehen",
    viewAllTours: "Alle Touren ansehen",
    viewGallery: "Zur Galerie",
    readAllReviews: "Alle Bewertungen lesen",
    exploreTours: "Touren entdecken",
    browseTours: "Touren ansehen",
    ratingLabel: (rating) => `${rating} von 5 Sternen`,
  },

  nav: {
    tours: "Touren",
    gallery: "Galerie",
    reviews: "Bewertungen",
    about: "Über uns",
    contact: "Kontakt",
  },

  header: {
    homeAria: (name) => `${name}, Startseite`,
    mainMenu: "Hauptmenü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
  },

  footer: {
    explore: "Entdecken",
    contact: "Kontakt",
    whatsApp: "WhatsApp",
    findUsOnTripAdvisor: "Sie finden uns auf TripAdvisor",
    menu: "Fußzeile",
    rights: (name) => `© ${name}. Alle Rechte vorbehalten.`,
  },

  tour: {
    fromPrice: (price) => `Ab ${price} USD pro Person`,
    priceOnRequest: "Preis auf Anfrage",
    privateTour: "Private Tour",
    highlights: "Highlights",
    thePlan: "Der Ablauf",
    included: "Inklusive",
    photos: "Fotos",
    bookThisTour: "Diese Tour buchen",
    finalPriceNote: "Endpreis wird über WhatsApp bestätigt",
    youMayAlsoLike: "Das könnte Ihnen auch gefallen",
    breadcrumb: "Brotkrumennavigation",
    loading: "Tour wird geladen",
  },

  reviewCard: {
    meta: (month, source) => `${month} · über ${source}`,
  },

  cta: {
    eyebrow: "Planen Sie Ihre Reise",
    title: "Nennen Sie uns Ihre Reisedaten. Um den Rest kümmern wir uns.",
    text: "Schreiben Sie uns per WhatsApp. Wir antworten persönlich und gestalten die Tour ganz nach Ihnen.",
  },

  home: {
    heroEyebrow: "Private Touren · Sri Lanka",
    heroTitle: "Entdecken Sie Sri Lanka, ganz ohne Eile.",
    heroText:
      "Antike Städte, nebelverhangenes Teeland, Wasserfälle und Wildtiere, mit eigenem Fahrer und Reiseleiter und einem Fahrzeug nur für Sie.",
    heroPoints: ["Ausschließlich private Touren", "Erfahrene einheimische Guides", "Abholung auf der ganzen Insel"],
    heroCaption: "Löwenfelsen von Sigiriya, Kulturelles Dreieck",
    whyEyebrow: "Warum mit uns reisen",
    whyTitle: "Ein kleines lokales Unternehmen, ein persönlicher Empfang",
    whyIntro:
      "Wir sind keine große Agentur. Jede Tour wird von unserem kleinen Team selbst geplant, gefahren und geführt.",
    reasons: {
      private: {
        title: "Privat, nur für Sie",
        text: "Ihr eigenes Fahrzeug und Ihr eigener Guide. Keine überfüllten Busse, kein fester Zeitplan: Wir reisen in Ihrem Tempo.",
      },
      guides: {
        title: "Einheimische Guides, echte Geschichten",
        text: "Unsere Guides sind in Sri Lanka geboren und aufgewachsen und erzählen Ihnen von Geschichte, Essen und verborgenen Orten hinter jedem Stopp.",
      },
      vehicles: {
        title: "Komfortable Fahrzeuge",
        text: (count) => `Eine Flotte von ${count} sauberen, gepflegten Fahrzeugen mit umsichtigen, erfahrenen Fahrern.`,
      },
      booking: {
        title: "Einfach buchen",
        text: "Kein Konto und keine Online-Zahlung. Senden Sie eine Anfrage und planen Sie jedes Detail mit uns per WhatsApp.",
      },
    },
    featuredEyebrow: "Unsere Signature-Touren",
    featuredTitle: "Unsere beliebtesten Reisen",
    featuredIntro: "Jede Tour ist privat und lässt sich an Ihr Tempo und Ihre Interessen anpassen.",
    howEyebrow: "So funktioniert es",
    howTitle: "Buchen dauert weniger als eine Minute",
    steps: [
      {
        title: "Tour auswählen",
        text: "Wählen Sie eine Tour, die Ihnen gefällt, oder sagen Sie uns, was Sie sehen möchten.",
      },
      {
        title: "Anfrage senden",
        text: "Füllen Sie ein kurzes Formular aus. WhatsApp öffnet sich mit Ihren Angaben, bereit zum Senden.",
      },
      {
        title: "Gemeinsam planen",
        text: "Wir antworten persönlich per WhatsApp und bestätigen Termine, Abholung und Preis.",
      },
    ],
    momentsEyebrow: "Momente",
    momentsTitle: "Erinnerungen unserer Gäste",
    reviewsEyebrow: "Gästebewertungen",
    reviewsTitle: "Unsere Gäste in ihren eigenen Worten",
  },

  toursPage: {
    metaTitle: "Touren",
    metaDescription:
      "Private Tagestouren und kurze Reisen durch Sri Lanka: Sigiriya, Kandy, Teeland, Ella, Elefanten und die Südküste.",
    eyebrow: "Unsere Touren",
    title: "Private Reisen quer durch die Insel",
    intro:
      "Jede Tour ist privat, mit eigenem Fahrzeug und Guide. Termine, Tempo und Stopps lassen sich anpassen. Fragen Sie uns einfach.",
  },

  galleryPage: {
    metaTitle: "Galerie",
    metaDescription: "Fotos von unseren privaten Touren durch Sri Lanka, geteilt von unseren Gästen.",
    eyebrow: "Galerie",
    title: "Momente unterwegs",
    intro: "Echte Fotos von echten Touren: unsere Gäste, unsere Guides und die Orte, die wir gern zeigen.",
  },

  reviewsPage: {
    metaTitle: "Bewertungen",
    metaDescription: (name) => `Was unsere Gäste über ihre privaten Touren mit ${name} sagen.`,
    eyebrow: "Gästebewertungen",
    title: "Freundliche Worte unserer Gäste",
    intro: "Jede Bewertung stammt von einem Gast, der mit uns gereist ist.",
    basedOn: (count) => `Basierend auf ${count} Bewertungen`,
    seeMore: "Mehr auf TripAdvisor ansehen",
  },

  about: {
    metaTitle: "Über uns",
    metaDescription: (name) =>
      `${name} ist ein kleines sri-lankisches Taxi- und Tourenunternehmen mit privaten Touren und einheimischen Guides.`,
    eyebrow: "Über uns",
    title: "Die Insel zeigen, die wir Heimat nennen",
    intro: (name) =>
      `${name} begann mit einer einfachen Idee: Reisenden das Sri Lanka zeigen, mit dem wir aufgewachsen sind, ehrlich und persönlich.`,
    storyEyebrow: "Unsere Geschichte",
    storyTitle: "Ein einheimischer Guide, ein kleines Team, eine große Insel",
    storyP1: (vehicles) =>
      `Es begann damit, dass ein Guide Besuchern seine Heimatstadt zeigte. Heute sind wir ein kleines Team aus Guides und Fahrern mit ${vehicles} Fahrzeugen. Wir sind mit Absicht klein geblieben: So bekommt jeder Gast unsere volle Aufmerksamkeit.`,
    storyP2:
      "Von der Felsenfestung Sigiriya bis zu den Teeplantagen im Hochland bringen wir Sie zu den berühmten Sehenswürdigkeiten und zu den ruhigen Orten dazwischen, und wir erzählen Ihnen die Geschichten dahinter.",
    factVehicles: "Komfortable Fahrzeuge",
    factPrivateValue: "100 %",
    factPrivate: "Private Touren",
    factIslandWideValue: "Ganze Insel",
    factIslandWide: "Abholung und Rückfahrt",
    travelEyebrow: "Wie wir reisen",
    travelTitle: "Ihr Tempo, Ihr Plan",
    travelP1:
      "Jede Tour ist privat. Sie möchten länger an einem Wasserfall bleiben, einen Stopp auslassen oder das beste Reis-mit-Curry der Stadt finden? Sagen Sie es Ihrem Guide. Der Tag gehört Ihnen.",
    travelP2:
      "Auch die Planung ist einfach. Schreiben Sie uns per WhatsApp, und wir helfen Ihnen, die Reise zu gestalten, vor Ihrer Ankunft und während der gesamten Reise.",
  },

  contact: {
    metaTitle: "Kontakt",
    metaDescription: (name) =>
      `Kontaktieren Sie ${name} per WhatsApp, Telefon oder E-Mail, um Ihre private Tour in Sri Lanka zu planen.`,
    eyebrow: "Kontakt",
    title: "Planen wir Ihre Reise",
    intro:
      "Am schnellsten erreichen Sie uns über WhatsApp. Senden Sie eine Nachricht oder füllen Sie das Formular aus, dann führen wir das Gespräch dort weiter.",
    whatsApp: "WhatsApp",
    phone: "Telefon",
    email: "E-Mail",
    whereWeAre: "Wo Sie uns finden",
    formTitle: "Anfrage senden",
    formIntro: "Sie wissen noch nicht, welche Tour? Lassen Sie es offen, wir machen Ihnen einen Vorschlag.",
  },

  booking: {
    tour: "Tour",
    notSure: "Noch unsicher, bitte schlagen Sie mir eine Tour vor",
    name: "Ihr Name",
    whatsApp: "WhatsApp-Nummer",
    whatsAppPlaceholder: "+49 151 23456789",
    date: "Wunschtermin",
    adults: "Erwachsene",
    children: "Kinder",
    pickup: "Abholort",
    pickupPlaceholder: "Name des Hotels oder Flughafen",
    message: "Nachricht",
    optional: "(optional)",
    submit: "Anfrage über WhatsApp senden",
    note: "WhatsApp öffnet sich mit Ihren Angaben, bereit zum Senden. Gebucht oder bezahlt wird erst, wenn wir es mit Ihnen bestätigt haben.",
  },

  notFound: {
    eyebrow: "Seite nicht gefunden",
    title: "Dieser Weg führt ins Nichts",
    text: "Die gesuchte Seite wurde verschoben oder existiert nicht mehr. Wir führen Sie gern zurück.",
  },

  photos: {
    "sigiriya-lake": "Der Löwenfelsen von Sigiriya hinter einem ruhigen See",
    "sigiriya-view": "Gäste vor dem Felsen von Sigiriya",
    "sigiriya-guests": "Unser Guide mit einem Gast bei Sigiriya",
    "village-rice-pounding": "Gast stampft Reis in einem traditionellen Dorf",
    "village-weaving": "Flechtkurs mit Palmblättern in einem Dorf",
    "village-cooking": "Dorfküche mit Tontöpfen über dem Holzfeuer",
    "village-lunch": "Hausgemachtes sri-lankisches Mittagessen",
    "kandy-temple": "Gäste am Zahntempel in Kandy",
    "kandy-temple-gardens": "Die Gärten des Zahntempels",
    "kandy-hindu-temple": "Im Inneren eines farbenfrohen Hindu-Tempels",
    "elephant-river-bath": "Elefant badet mit einem Gast im Fluss",
    "elephant-river": "Gast neben einem Elefanten im Fluss",
    "tea-plucking": "Gäste pflücken Tee auf einer Plantage am Hang",
    "labookellie-tea": "Gäste auf der Teeplantage Labookellie",
    "tea-plantation": "Eine Teepflückerin zeigt einem Gast, wie man die Blätter pflückt",
    "tea-picker": "Gast pflückt Tee mit einem Korb",
    "ramboda-falls": "Die Ramboda-Wasserfälle im Hochland",
    "tea-centre": "Tee und Kuchen mit Blick auf die Plantagen",
    "labookellie-guests": "Unser Guide mit Gästen in Labookellie",
    "tea-country-guests": "Glückliche Gäste im Teeland",
    "nine-arch-bridge": "Gäste an der Nine Arch Bridge in Ella",
    "ella-waterfall": "Unser Guide mit einem Gast an einem Wasserfall bei Ella",
    "ella-falls": "Unser Guide neben einem Wasserfall",
    "waterfall-swim": "Gäste an einem Wasserfall mit natürlichem Becken",
    "waterfall-pool": "Gäste waten in einem Felsenbecken unter einem Wasserfall",
    "elephant-encounter": "Gast in der Nähe eines Elefanten",
    "elephant-guests": "Zwei Gäste posieren mit einem Elefanten",
    "elephant-selfie": "Unser Guide mit Gästen und einem Elefanten",
    "south-coast": "Gäste an der palmengesäumten Südküste",
    "beach-guests": "Unser Guide mit einer Gruppe Gästen am Meer",
  },

  tours: {
    "sigiriya-village-life": {
      title: "Sigiriya-Felsen & Dorfleben",
      location: "Sigiriya · Habarana",
      duration: "Ganzer Tag · etwa 10 Stunden",
      summary:
        "Besteigen Sie die Löwenfelsen-Festung aus dem 5. Jahrhundert und kommen Sie danach in einem traditionellen Dorf bei einem hausgemachten Mittagessen zur Ruhe.",
      description: [
        "Sigiriya ragt 200 Meter über die Ebenen des Kulturellen Dreiecks. Wir starten früh, um vor der Hitze aufzusteigen, vorbei an den berühmten Fresken und den Löwenpranken bis zu den Palastruinen auf dem Gipfel.",
        "Am Nachmittag lassen wir die Menschenmengen hinter uns. In einem Bauerndorf sehen Sie, wie Reis von Hand gestampft wird, probieren das Flechten mit Kokospalmblättern aus und teilen ein Mittagessen, das über dem Holzfeuer gekocht wurde.",
      ],
      highlights: [
        "Aufstieg auf den Löwenfelsen von Sigiriya, UNESCO-Welterbe",
        "Besuch eines traditionellen Dorfes mit Mitmach-Aktivitäten",
        "Hausgemachtes sri-lankisches Mittagessen in einer Dorfküche",
        "Blick auf den Felsen vom See aus, abseits der Menschenmassen",
      ],
      itinerary: [
        { title: "Frühe Abholung", description: "Abholung am Hotel und Fahrt nach Sigiriya." },
        { title: "Löwenfelsen von Sigiriya", description: "Geführter Aufstieg zum Gipfel, etwa 2–3 Stunden." },
        {
          title: "Dorferlebnis",
          description: "Reis stampfen, Palmblätter flechten und ein Spaziergang durch die Reisfelder.",
        },
        { title: "Mittagessen im Dorf", description: "Ein Reis-und-Curry-Mittagessen, zubereitet von einer einheimischen Familie." },
        { title: "Rückfahrt", description: "Entspannte Fahrt zurück zu Ihrem Hotel." },
      ],
      included: [
        "Privates klimatisiertes Fahrzeug",
        "Englischsprachiger Fahrer und Guide",
        "Mittagessen im Dorf",
        "Wasser in Flaschen",
      ],
    },
    "kandy-temple-of-the-tooth": {
      title: "Kandy & der Zahntempel",
      location: "Kandy · Pinnawala",
      duration: "Ganzer Tag · etwa 9 Stunden",
      summary:
        "Sri Lankas letzte Königsstadt: der heilige Zahntempel, farbenfrohe Hindu-Tempel und Elefanten, die im Fluss baden.",
      description: [
        "Kandy liegt zwischen grünen Hügeln rund um einen ruhigen See. Ihr Guide führt Sie durch den Tempel der Heiligen Zahnreliquie, das wichtigste buddhistische Heiligtum der Insel, und erklärt die Geschichten hinter den Ritualen.",
        "Unterwegs halten wir an einem Hindu-Tempel voller geschnitzter, bemalter Götterfiguren und am Fluss, wo die Elefanten zum Baden kommen.",
      ],
      highlights: [
        "Tempel der Heiligen Zahnreliquie, UNESCO-Welterbe",
        "Besuch eines farbenfrohen Hindu-Tempels",
        "Elefanten beim Baden im Fluss",
        "Kandy-See und Aussichtspunkt über die Stadt",
      ],
      itinerary: [
        { title: "Abholung", description: "Abholung an Ihrem Hotel in Kandy oder in der Nähe." },
        { title: "Elefanten am Fluss", description: "Elefanten beim Baden und Spielen im Fluss beobachten." },
        { title: "Hindu-Tempel", description: "Kurzer Besuch eines reich verzierten Kovil." },
        { title: "Zahntempel", description: "Geführter Besuch des Tempels und seiner Gärten." },
        { title: "Kandy-See", description: "Spaziergang am See und Aussichtspunkt über die Stadt." },
      ],
      included: ["Privates klimatisiertes Fahrzeug", "Englischsprachiger Fahrer und Guide", "Wasser in Flaschen"],
    },
    "tea-country-nuwara-eliya": {
      title: "Teeland & Nuwara Eliya",
      location: "Ramboda · Nuwara Eliya",
      duration: "Ganzer Tag · etwa 10 Stunden",
      summary:
        "Hinauf in die nebligen Hügel, Tee pflücken mit den Pflückerinnen der Plantage und frischen Ceylon-Tee mit Blick über die Plantagen probieren.",
      description: [
        "Die Straße ins Hochland führt vorbei an Wasserfällen und endlosen Teeterrassen. An den Ramboda-Wasserfällen halten wir für die Aussicht, bevor wir die kühle Luft der Berge erreichen.",
        "Auf einer Plantage im Betrieb können Sie an der Seite der Pflückerinnen selbst Teeblätter pflücken und danach im Labookellie-Teezentrum mit Blick ins Tal eine frische Tasse und ein Stück Kuchen genießen.",
      ],
      highlights: [
        "Teeblätter pflücken mit den Pflückerinnen der Plantage",
        "Teeverkostung in Labookellie mit Blick ins Tal",
        "Aussichtspunkt an den Ramboda-Wasserfällen",
        "Nuwara Eliya, Sri Lankas „Little England“",
      ],
      itinerary: [
        { title: "Abholung", description: "Abholung in Kandy oder in Ihrem Hotel im Hochland." },
        { title: "Ramboda-Wasserfälle", description: "Halt an den Wasserfällen auf dem Weg in die Berge." },
        { title: "Teepflücken", description: "Pflücken Sie mit den Pflückerinnen auf einer Teeplantage im Betrieb." },
        { title: "Labookellie-Teezentrum", description: "Frischer Tee und Kuchen mit Blick auf die Plantagen." },
        { title: "Nuwara Eliya", description: "Der Gregory-See und das koloniale Stadtzentrum." },
      ],
      included: [
        "Privates klimatisiertes Fahrzeug",
        "Englischsprachiger Fahrer und Guide",
        "Teeverkostung",
        "Wasser in Flaschen",
      ],
    },
    "ella-waterfalls": {
      title: "Ella, Nine Arch Bridge & Wasserfälle",
      location: "Ella · Hochland",
      duration: "2 Tage · 1 Nacht",
      summary:
        "Zwei entspannte Tage in Ella: die berühmte Nine Arch Bridge, Wasserfälle im Dschungel und kühle natürliche Becken zum Baden.",
      description: [
        "Ella ist ein kleiner Bergort, umgeben von Wald und Tee. Wir legen Ihren Besuch an der Nine Arch Bridge auf den Moment, in dem der Zug darüberfährt, und fahren dann zu Wasserfällen, die in den Hügeln versteckt liegen.",
        "Am zweiten Tag erfrischen Sie sich in einem natürlichen Felsenbecken unter einem Wasserfall, bevor es entspannt zurückgeht. Ihr Guide wählt die ruhigsten Plätze und die besten Besuchszeiten.",
      ],
      highlights: [
        "Nine Arch Bridge, während der Zug darüberfährt",
        "Ravana-Wasserfälle und ruhigere, versteckte Wasserfälle",
        "Baden in einem natürlichen Felsenbecken",
        "Bergblick über den Ella Gap",
      ],
      itinerary: [
        { title: "Tag 1 · Nach Ella", description: "Landschaftlich schöne Fahrt durch das Hochland nach Ella." },
        { title: "Tag 1 · Nine Arch Bridge", description: "Spaziergang zur Brücke, um den Zug vorbeifahren zu sehen." },
        { title: "Tag 2 · Wasserfälle", description: "Besuch der Ravana-Wasserfälle und eines ruhigeren Dschungel-Wasserfalls." },
        { title: "Tag 2 · Felsenbecken", description: "Zeit zum Baden und Entspannen vor der Rückfahrt." },
      ],
      included: [
        "Privates klimatisiertes Fahrzeug",
        "Englischsprachiger Fahrer und Guide",
        "Unterkunft des Fahrers",
        "Wasser in Flaschen",
      ],
    },
    "elephant-encounter": {
      title: "Begegnung mit Elefanten",
      location: "Zentral-Sri-Lanka",
      duration: "Halber Tag · etwa 5 Stunden",
      summary:
        "Begegnen Sie den sanften Riesen Sri Lankas aus nächster Nähe, mit einem Guide, der weiß, wie man sie respektvoll beobachtet.",
      description: [
        "Nur wenige Momente bleiben so in Erinnerung wie das Stehen neben einem Elefanten. Dieser entspannte Halbtagesausflug bringt Sie in natürlicher Umgebung nah an asiatische Elefanten heran.",
        "Ihr Guide erzählt, wie Elefanten in Sri Lanka leben und wie man sie sicher und respektvoll erleben kann. Lässt sich leicht mit Sigiriya oder Kandy kombinieren.",
      ],
      highlights: [
        "Asiatische Elefanten aus nächster Nähe erleben",
        "Mehr über das Leben der Elefanten in Sri Lanka erfahren",
        "Entspanntes Tempo, ideal für Familien",
      ],
      itinerary: [
        { title: "Abholung", description: "Abholung an Ihrem Hotel." },
        { title: "Begegnung mit den Elefanten", description: "Zeit mit den Elefanten, begleitet und ohne Hektik." },
        { title: "Rückfahrt", description: "Rückfahrt mit einem Halt für frische Königskokosnuss." },
      ],
      included: ["Privates klimatisiertes Fahrzeug", "Englischsprachiger Fahrer und Guide", "Wasser in Flaschen"],
    },
    "south-coast-escape": {
      title: "Auszeit an der Südküste",
      location: "Galle · Mirissa",
      duration: "Ganzer Tag · etwa 10 Stunden",
      summary:
        "Palmengesäumte Strände, das alte holländische Fort in Galle und ein ruhiger Sonnenuntergang am Indischen Ozean.",
      description: [
        "An der Südküste ist Sri Lanka am entspanntesten. Wir gehen über die Wälle des Forts von Galle, einer UNESCO-geschützten Altstadt mit Kolonialgassen und kleinen Cafés.",
        "Danach ist Strandzeit: goldener Sand, Kokospalmen und warmes Meer, zum Abschluss ein Sonnenuntergang an der Küste.",
      ],
      highlights: [
        "Fort von Galle, UNESCO-Welterbe",
        "Palmengesäumte Strände der Südküste",
        "Sonnenuntergang am Indischen Ozean",
      ],
      itinerary: [
        { title: "Abholung", description: "Abholung an Ihrem Hotel an der Süd- oder Westküste." },
        { title: "Fort von Galle", description: "Spaziergang über die Wälle und durch die alten Gassen." },
        { title: "Strandzeit", description: "Baden und Entspannen an einem ruhigen, palmengesäumten Strand." },
        { title: "Sonnenuntergang", description: "Den Sonnenuntergang genießen, bevor es zurückgeht." },
      ],
      included: ["Privates klimatisiertes Fahrzeug", "Englischsprachiger Fahrer und Guide", "Wasser in Flaschen"],
    },
  },

  reviews: {
    r1: {
      country: "Vereinigtes Königreich",
      text: "Unser Guide hat Sigiriya wie eine Geschichte erlebbar gemacht statt nur wie einen Aufstieg. Das Mittagessen im Dorf danach war die beste Mahlzeit unserer ganzen Reise. Die Buchung über WhatsApp war so einfach.",
    },
    r2: {
      country: "Deutschland",
      text: "Mit den Pflückerinnen Tee zu pflücken und ihn danach mit dieser Aussicht in Labookellie zu trinken, war unvergesslich. Bequemes Auto, vorsichtige Fahrweise und immer pünktlich.",
    },
    r3: {
      country: "Frankreich",
      text: "Wir fühlten uns ab der ersten Nachricht gut betreut. Er wusste genau, wann man zur Nine Arch Bridge fahren muss, um den Zug ohne Menschenmassen zu sehen.",
    },
    r4: {
      country: "Niederlande",
      text: "Eine private Tour, die sich anfühlte, als wäre man mit einem Freund unterwegs. Kandy, der Tempel und die Elefanten im Fluss waren perfekt getaktet.",
    },
    r5: {
      country: "Spanien",
      text: "Herzlich, ehrlich und sehr kenntnisreich. Als es regnete, hat er unseren Plan am selben Tag geändert und uns stattdessen einen wunderschönen Wasserfall gezeigt.",
    },
    r6: {
      country: "Australien",
      text: "Sehr gutes Preis-Leistungs-Verhältnis für einen privaten Fahrer und Guide. Der Tag an der Südküste war entspannt, und das Fort von Galle war ein Highlight. Wir würden ohne zu zögern wieder buchen.",
    },
  },
};

export default de;
