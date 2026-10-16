// Textes en français. Même structure que en.ts (TypeScript signale toute traduction manquante).
// À faire relire par un francophone avant la mise en ligne.
import type { Dictionary } from "@/i18n/types";

const fr: Dictionary = {
  meta: {
    siteTitle: "Circuits privés au Sri Lanka",
    description:
      "Circuits privés et guidés au Sri Lanka : cités antiques, pays du thé dans la brume, cascades et faune sauvage, avec votre propre chauffeur-guide et votre véhicule.",
    location: "Sri Lanka · Prise en charge dans toute l'île",
  },

  common: {
    skipToContent: "Aller au contenu",
    bookOnWhatsApp: "Réserver sur WhatsApp",
    chatOnWhatsApp: "Discuter sur WhatsApp",
    chatWithUs: "Écrivez-nous",
    chatWithUsAria: "Discuter avec nous sur WhatsApp",
    viewTour: "Voir le circuit",
    viewAllTours: "Voir tous les circuits",
    viewGallery: "Voir la galerie",
    readAllReviews: "Lire tous les avis",
    exploreTours: "Découvrir les circuits",
    browseTours: "Parcourir les circuits",
    ratingLabel: (rating) => `${rating} étoiles sur 5`,
  },

  nav: {
    tours: "Circuits",
    gallery: "Galerie",
    reviews: "Avis",
    about: "À propos",
    contact: "Contact",
  },

  header: {
    homeAria: (name) => `${name}, accueil`,
    mainMenu: "Menu principal",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
  },

  footer: {
    explore: "Explorer",
    contact: "Contact",
    whatsApp: "WhatsApp",
    findUsOnTripAdvisor: "Retrouvez-nous sur TripAdvisor",
    menu: "Pied de page",
    rights: (name) => `© ${name}. Tous droits réservés.`,
  },

  tour: {
    fromPrice: (price) => `À partir de ${price} USD par personne`,
    priceOnRequest: "Prix sur demande",
    privateTour: "Circuit privé",
    highlights: "Points forts",
    thePlan: "Le programme",
    included: "Inclus",
    photos: "Photos",
    bookThisTour: "Réserver ce circuit",
    finalPriceNote: "prix final confirmé sur WhatsApp",
    youMayAlsoLike: "Vous aimerez aussi",
    breadcrumb: "Fil d'Ariane",
    loading: "Chargement du circuit",
  },

  reviewCard: {
    meta: (month, source) => `${month} · via ${source}`,
  },

  cta: {
    eyebrow: "Préparez votre voyage",
    title: "Dites-nous vos dates. Nous nous occupons du reste.",
    text: "Écrivez-nous sur WhatsApp. Nous vous répondons personnellement et composons le circuit autour de vous.",
  },

  home: {
    heroEyebrow: "Circuits privés · Sri Lanka",
    heroTitle: "Découvrez le Sri Lanka, sans vous presser.",
    heroText:
      "Cités antiques, pays du thé dans la brume, cascades et faune sauvage, avec votre propre chauffeur-guide et un véhicule rien que pour vous.",
    heroPoints: ["Circuits privés uniquement", "Guides locaux experts", "Prise en charge dans toute l'île"],
    heroCaption: "Rocher du Lion de Sigiriya, Triangle culturel",
    whyEyebrow: "Pourquoi voyager avec nous",
    whyTitle: "Une petite entreprise locale, un accueil personnel",
    whyIntro:
      "Nous ne sommes pas une grande agence. Chaque circuit est préparé, conduit et guidé par notre petite équipe.",
    reasons: {
      private: {
        title: "Privé, rien que pour vous",
        text: "Votre propre véhicule et votre guide. Pas de car bondé, pas d'horaire imposé : nous voyageons à votre rythme.",
      },
      guides: {
        title: "Guides locaux, vraies histoires",
        text: "Nés et élevés au Sri Lanka, nos guides partagent l'histoire, la cuisine et les lieux cachés derrière chaque étape.",
      },
      vehicles: {
        title: "Véhicules confortables",
        text: (count) => `Une flotte de ${count} véhicules propres et bien entretenus, avec des chauffeurs prudents et expérimentés.`,
      },
      booking: {
        title: "Réservation simple",
        text: "Pas de compte, pas de paiement en ligne. Envoyez votre demande et organisez chaque détail avec nous sur WhatsApp.",
      },
    },
    featuredEyebrow: "Circuits signature",
    featuredTitle: "Nos voyages préférés",
    featuredIntro: "Chaque circuit est privé et peut être adapté à votre rythme et à vos envies.",
    howEyebrow: "Comment ça marche",
    howTitle: "Réserver prend moins d'une minute",
    steps: [
      { title: "Choisissez un circuit", text: "Choisissez le circuit qui vous plaît, ou dites-nous ce que vous aimeriez voir." },
      {
        title: "Envoyez votre demande",
        text: "Remplissez un court formulaire. WhatsApp s'ouvre avec vos informations prêtes à être envoyées.",
      },
      {
        title: "Organisons-le ensemble",
        text: "Nous vous répondons personnellement sur WhatsApp pour confirmer les dates, la prise en charge et le prix.",
      },
    ],
    momentsEyebrow: "Instants",
    momentsTitle: "Souvenirs de nos voyageurs",
    reviewsEyebrow: "Avis des voyageurs",
    reviewsTitle: "Dans les mots de nos voyageurs",
  },

  toursPage: {
    metaTitle: "Circuits",
    metaDescription:
      "Excursions privées d'une journée et courts voyages à travers le Sri Lanka : Sigiriya, Kandy, pays du thé, Ella, éléphants et côte sud.",
    eyebrow: "Nos circuits",
    title: "Voyages privés à travers l'île",
    intro:
      "Chaque circuit est privé, avec votre propre véhicule et votre guide. Les dates, le rythme et les étapes peuvent être adaptés. Il suffit de demander.",
  },

  galleryPage: {
    metaTitle: "Galerie",
    metaDescription: "Photos de nos circuits privés à travers le Sri Lanka, partagées par nos voyageurs.",
    eyebrow: "Galerie",
    title: "Instants de la route",
    intro: "De vraies photos de vrais circuits : nos voyageurs, nos guides et les lieux que nous aimons faire découvrir.",
  },

  reviewsPage: {
    metaTitle: "Avis",
    metaDescription: (name) => `Ce que nos voyageurs disent de leurs circuits privés avec ${name}.`,
    eyebrow: "Avis des voyageurs",
    title: "De gentils mots de nos voyageurs",
    intro: "Chaque avis vient d'un voyageur qui a fait route avec nous.",
    basedOn: (count) => `Basé sur ${count} avis`,
    seeMore: "Voir plus sur TripAdvisor",
  },

  about: {
    metaTitle: "À propos",
    metaDescription: (name) =>
      `${name} est une petite entreprise sri-lankaise de taxi et de circuits qui propose des circuits privés avec des guides locaux.`,
    eyebrow: "À propos",
    title: "Partager l'île que nous appelons chez nous",
    intro: (name) =>
      `${name} est né d'une idée simple : faire découvrir aux voyageurs le Sri Lanka de notre enfance, avec honnêteté et de façon personnelle.`,
    storyEyebrow: "Notre histoire",
    storyTitle: "Un guide local, une petite équipe, une grande île",
    storyP1: (vehicles) =>
      `Tout a commencé par un guide qui faisait visiter sa ville natale. Nous sommes aujourd'hui une petite équipe de guides et de chauffeurs avec une flotte de ${vehicles} véhicules. Nous restons petits volontairement : chaque voyageur reçoit toute notre attention.`,
    storyP2:
      "De la forteresse de Sigiriya aux plantations de thé des hautes terres, nous vous emmenons vers les sites célèbres comme vers les endroits tranquilles entre les deux, et nous vous racontons leurs histoires.",
    factVehicles: "Véhicules confortables",
    factPrivateValue: "100 %",
    factPrivate: "Circuits privés",
    factIslandWideValue: "Toute l'île",
    factIslandWide: "Prise en charge et dépose",
    travelEyebrow: "Notre façon de voyager",
    travelTitle: "Votre rythme, votre programme",
    travelP1:
      "Chaque circuit est privé. Envie de rester plus longtemps devant une cascade, de sauter une étape ou de goûter le meilleur riz-curry de la ville ? Dites-le à votre guide. La journée vous appartient.",
    travelP2:
      "Organiser le voyage est simple aussi. Envoyez-nous un message sur WhatsApp et nous vous aidons à composer votre voyage, avant votre arrivée et tout au long de votre séjour.",
  },

  contact: {
    metaTitle: "Contact",
    metaDescription: (name) =>
      `Contactez ${name} sur WhatsApp, par téléphone ou par e-mail pour organiser votre circuit privé au Sri Lanka.`,
    eyebrow: "Contact",
    title: "Préparons votre voyage",
    intro:
      "Le moyen le plus rapide de nous joindre est WhatsApp. Envoyez un message, ou remplissez le formulaire et nous poursuivrons la conversation là-bas.",
    whatsApp: "WhatsApp",
    phone: "Téléphone",
    email: "E-mail",
    whereWeAre: "Où nous trouver",
    formTitle: "Envoyer une demande",
    formIntro: "Vous hésitez sur le circuit ? Laissez le choix ouvert et nous vous en proposerons un.",
  },

  booking: {
    tour: "Circuit",
    notSure: "Pas encore décidé, proposez-moi un circuit",
    name: "Votre nom",
    whatsApp: "Numéro WhatsApp",
    whatsAppPlaceholder: "+33 6 12 34 56 78",
    date: "Date souhaitée",
    adults: "Adultes",
    children: "Enfants",
    pickup: "Lieu de prise en charge",
    pickupPlaceholder: "Nom de l'hôtel ou aéroport",
    message: "Message",
    optional: "(facultatif)",
    submit: "Envoyer la demande sur WhatsApp",
    note: "WhatsApp s'ouvre avec vos informations prêtes à être envoyées. Rien n'est réservé ni payé avant notre confirmation.",
  },

  notFound: {
    eyebrow: "Page introuvable",
    title: "Ce chemin ne mène nulle part",
    text: "La page que vous cherchez a été déplacée ou n'existe plus. Laissez-nous vous guider pour revenir.",
  },

  photos: {
    "sigiriya-lake": "Le Rocher du Lion de Sigiriya vu de l'autre côté d'un lac calme",
    "sigiriya-view": "Des voyageurs devant le rocher de Sigiriya",
    "sigiriya-guests": "Notre guide avec une voyageuse près de Sigiriya",
    "village-rice-pounding": "Une voyageuse pile du riz dans un village traditionnel",
    "village-weaving": "Cours de tressage de feuilles de palmier dans un village",
    "village-cooking": "Cuisine de village avec des marmites en terre sur un feu de bois",
    "village-lunch": "Déjeuner sri-lankais préparé à la maison",
    "kandy-temple": "Des voyageurs au Temple de la Dent à Kandy",
    "kandy-temple-gardens": "Les jardins du Temple de la Dent",
    "kandy-hindu-temple": "À l'intérieur d'un temple hindou coloré",
    "elephant-river-bath": "Un éléphant se baigne dans la rivière avec une voyageuse",
    "elephant-river": "Une voyageuse à côté d'un éléphant dans la rivière",
    "tea-plucking": "Des voyageurs cueillent du thé dans une plantation à flanc de colline",
    "labookellie-tea": "Des voyageurs dans la plantation de thé de Labookellie",
    "tea-plantation": "Une cueilleuse montre à une voyageuse comment cueillir les feuilles",
    "tea-picker": "Une voyageuse cueille du thé avec un panier",
    "ramboda-falls": "Les chutes de Ramboda dans les hautes terres",
    "tea-centre": "Thé et gâteau face aux plantations",
    "labookellie-guests": "Notre guide avec des voyageurs à Labookellie",
    "tea-country-guests": "Des voyageurs heureux dans le pays du thé",
    "nine-arch-bridge": "Des voyageurs au pont aux Neuf Arches à Ella",
    "ella-waterfall": "Notre guide avec une voyageuse devant une cascade près d'Ella",
    "ella-falls": "Notre guide à côté d'une cascade",
    "waterfall-swim": "Des voyageurs devant une cascade avec un bassin naturel",
    "waterfall-pool": "Des voyageurs dans un bassin rocheux au pied d'une cascade",
    "elephant-encounter": "Un voyageur près d'un éléphant",
    "elephant-guests": "Deux voyageuses posent avec un éléphant",
    "elephant-selfie": "Notre guide avec des voyageurs et un éléphant",
    "south-coast": "Des voyageurs sur la côte sud bordée de palmiers",
    "beach-guests": "Notre guide avec un groupe de voyageurs au bord de la mer",
  },

  tours: {
    "sigiriya-village-life": {
      title: "Rocher de Sigiriya et vie de village",
      location: "Sigiriya · Habarana",
      duration: "Journée complète · environ 10 heures",
      summary:
        "Gravissez la forteresse du Rocher du Lion, datant du Ve siècle, puis ralentissez dans un village traditionnel pour un déjeuner fait maison.",
      description: [
        "Sigiriya s'élève à 200 mètres au-dessus des plaines du Triangle culturel. Nous partons tôt pour monter avant la chaleur, devant les célèbres fresques et les pattes du lion, jusqu'aux ruines du palais au sommet.",
        "L'après-midi, nous laissons la foule derrière nous. Dans un village d'agriculteurs, vous verrez piler le riz à la main, essaierez de tresser des feuilles de cocotier et partagerez un déjeuner cuit au feu de bois.",
      ],
      highlights: [
        "Ascension du Rocher du Lion de Sigiriya, site du patrimoine mondial de l'UNESCO",
        "Visite d'un village traditionnel avec des activités à vivre soi-même",
        "Déjeuner sri-lankais fait maison dans une cuisine de village",
        "Vue sur le rocher depuis le lac, loin de la foule",
      ],
      itinerary: [
        { title: "Départ matinal", description: "Prise en charge à votre hôtel et route vers Sigiriya." },
        { title: "Rocher du Lion de Sigiriya", description: "Ascension guidée jusqu'au sommet, environ 2 à 3 heures." },
        {
          title: "Expérience au village",
          description: "Pilage du riz, tressage de feuilles de palmier et promenade dans les rizières.",
        },
        { title: "Déjeuner au village", description: "Un déjeuner de riz et de currys préparé par une famille locale." },
        { title: "Retour", description: "Trajet détendu jusqu'à votre hôtel." },
      ],
      included: [
        "Véhicule privé climatisé",
        "Chauffeur-guide anglophone",
        "Déjeuner au village",
        "Eau en bouteille",
      ],
    },
    "kandy-temple-of-the-tooth": {
      title: "Kandy et le Temple de la Dent",
      location: "Kandy · Pinnawala",
      duration: "Journée complète · environ 9 heures",
      summary:
        "La dernière capitale royale du Sri Lanka : le sacré Temple de la Dent, des temples hindous colorés et des éléphants qui se baignent dans la rivière.",
      description: [
        "Kandy est nichée dans des collines verdoyantes autour d'un lac paisible. Votre guide vous accompagne dans le Temple de la Dent sacrée, le sanctuaire bouddhiste le plus important de l'île, et vous explique les histoires derrière ses rituels.",
        "En chemin, nous nous arrêtons dans un temple hindou aux dieux sculptés et peints, puis à la rivière où les éléphants viennent se baigner.",
      ],
      highlights: [
        "Temple de la Dent sacrée, site du patrimoine mondial de l'UNESCO",
        "Visite d'un temple hindou coloré",
        "Éléphants se baignant dans la rivière",
        "Lac de Kandy et point de vue sur la ville",
      ],
      itinerary: [
        { title: "Prise en charge", description: "Prise en charge à votre hôtel à Kandy ou à proximité." },
        { title: "Éléphants à la rivière", description: "Regardez les éléphants se baigner et jouer dans la rivière." },
        { title: "Temple hindou", description: "Courte visite d'un kovil richement décoré." },
        { title: "Temple de la Dent", description: "Visite guidée du temple et de ses jardins." },
        { title: "Lac de Kandy", description: "Promenade au bord du lac et point de vue sur la ville." },
      ],
      included: ["Véhicule privé climatisé", "Chauffeur-guide anglophone", "Eau en bouteille"],
    },
    "tea-country-nuwara-eliya": {
      title: "Pays du thé et Nuwara Eliya",
      location: "Ramboda · Nuwara Eliya",
      duration: "Journée complète · environ 10 heures",
      summary:
        "Montez dans les collines embrumées, cueillez du thé avec les cueilleuses de la plantation et dégustez un thé de Ceylan tout frais face aux plantations.",
      description: [
        "La route des hautes terres monte devant des cascades et d'interminables terrasses de théiers. Aux chutes de Ramboda, nous nous arrêtons pour admirer la vue avant de rejoindre l'air frais des montagnes.",
        "Dans une plantation en activité, vous pouvez essayer de cueillir les feuilles de thé aux côtés des cueilleuses, puis vous asseoir devant une tasse fraîche et un gâteau au centre du thé de Labookellie, qui domine la vallée.",
      ],
      highlights: [
        "Cueillir des feuilles de thé avec les cueilleuses de la plantation",
        "Dégustation de thé à Labookellie avec vue sur la vallée",
        "Point de vue sur les chutes de Ramboda",
        "Nuwara Eliya, la « petite Angleterre » du Sri Lanka",
      ],
      itinerary: [
        { title: "Prise en charge", description: "Prise en charge à Kandy ou dans votre hôtel des hautes terres." },
        { title: "Chutes de Ramboda", description: "Arrêt aux chutes sur la route des collines." },
        { title: "Cueillette du thé", description: "Rejoignez les cueilleuses dans une plantation en activité." },
        { title: "Centre du thé de Labookellie", description: "Thé frais et gâteau face aux plantations." },
        { title: "Nuwara Eliya", description: "Le lac Gregory et le centre-ville colonial." },
      ],
      included: [
        "Véhicule privé climatisé",
        "Chauffeur-guide anglophone",
        "Dégustation de thé",
        "Eau en bouteille",
      ],
    },
    "ella-waterfalls": {
      title: "Ella, pont aux Neuf Arches et cascades",
      location: "Ella · Hautes terres",
      duration: "2 jours · 1 nuit",
      summary:
        "Deux jours tranquilles à Ella : le célèbre pont aux Neuf Arches, des cascades dans la jungle et des bassins naturels pour se baigner.",
      description: [
        "Ella est une petite ville de montagne entourée de forêts et de thé. Nous calons votre visite du pont aux Neuf Arches sur le passage du train, puis nous partons vers des cascades cachées dans les collines.",
        "Le deuxième jour, rafraîchissez-vous dans un bassin rocheux naturel au pied d'une cascade avant un retour tout en douceur. Votre guide choisit les endroits les plus calmes et les meilleurs moments pour les visiter.",
      ],
      highlights: [
        "Le pont aux Neuf Arches au passage du train",
        "Les chutes de Ravana et des cascades cachées plus tranquilles",
        "Baignade dans un bassin rocheux naturel",
        "Vue sur les montagnes depuis Ella Gap",
      ],
      itinerary: [
        { title: "Jour 1 · Vers Ella", description: "Route panoramique à travers les hautes terres jusqu'à Ella." },
        { title: "Jour 1 · Pont aux Neuf Arches", description: "Marche jusqu'au pont pour regarder passer le train." },
        { title: "Jour 2 · Cascades", description: "Visite des chutes de Ravana et d'une cascade plus tranquille dans la jungle." },
        { title: "Jour 2 · Bassin rocheux", description: "Le temps de se baigner et de se détendre avant le retour." },
      ],
      included: [
        "Véhicule privé climatisé",
        "Chauffeur-guide anglophone",
        "Hébergement du chauffeur",
        "Eau en bouteille",
      ],
    },
    "elephant-encounter": {
      title: "Rencontre avec les éléphants",
      location: "Centre du Sri Lanka",
      duration: "Demi-journée · environ 5 heures",
      summary:
        "Rencontrez de près les doux géants du Sri Lanka, avec un guide qui sait les observer dans le respect.",
      description: [
        "Peu de moments marquent autant que celui où l'on se tient près d'un éléphant. Cette sortie détendue d'une demi-journée vous rapproche des éléphants d'Asie dans un cadre naturel.",
        "Votre guide vous explique comment vivent les éléphants au Sri Lanka et comment les approcher en toute sécurité et avec respect. Facile à combiner avec Sigiriya ou Kandy.",
      ],
      highlights: [
        "Voir des éléphants d'Asie de près",
        "Découvrir la vie des éléphants au Sri Lanka",
        "Rythme tranquille, idéal en famille",
      ],
      itinerary: [
        { title: "Prise en charge", description: "Prise en charge à votre hôtel." },
        { title: "Rencontre avec les éléphants", description: "Du temps avec les éléphants, guidé et sans précipitation." },
        { title: "Retour", description: "Retour avec un arrêt pour une noix de coco fraîche." },
      ],
      included: ["Véhicule privé climatisé", "Chauffeur-guide anglophone", "Eau en bouteille"],
    },
    "south-coast-escape": {
      title: "Escapade sur la côte sud",
      location: "Galle · Mirissa",
      duration: "Journée complète · environ 10 heures",
      summary:
        "Des plages bordées de palmiers, l'ancien fort hollandais de Galle et un coucher de soleil tranquille sur l'océan Indien.",
      description: [
        "La côte sud, c'est le Sri Lanka dans sa version la plus détendue. Nous marchons sur les remparts du fort de Galle, une vieille ville classée à l'UNESCO aux rues coloniales et aux petits cafés.",
        "Place ensuite à la plage : sable doré, cocotiers et mer chaude, avant un coucher de soleil sur la côte.",
      ],
      highlights: [
        "Fort de Galle, site du patrimoine mondial de l'UNESCO",
        "Plages bordées de palmiers de la côte sud",
        "Coucher de soleil sur l'océan Indien",
      ],
      itinerary: [
        { title: "Prise en charge", description: "Prise en charge à votre hôtel sur la côte sud ou ouest." },
        { title: "Fort de Galle", description: "Promenade sur les remparts et dans les vieilles rues." },
        { title: "Temps à la plage", description: "Baignade et détente sur une plage tranquille bordée de palmiers." },
        { title: "Coucher de soleil", description: "Regardez le soleil se coucher avant le retour." },
      ],
      included: ["Véhicule privé climatisé", "Chauffeur-guide anglophone", "Eau en bouteille"],
    },
  },

  reviews: {
    r1: {
      country: "Royaume-Uni",
      text: "Notre guide a fait de Sigiriya une histoire plutôt qu'une simple ascension. Le déjeuner au village, ensuite, a été le meilleur repas de tout notre voyage. Réserver sur WhatsApp était très simple.",
    },
    r2: {
      country: "Allemagne",
      text: "Cueillir le thé avec les cueilleuses, puis le boire avec cette vue à Labookellie, c'était inoubliable. Voiture confortable, conduite prudente et toujours à l'heure.",
    },
    r3: {
      country: "France",
      text: "Nous nous sommes sentis bien accompagnés dès le premier message. Il savait exactement quand aller au pont aux Neuf Arches pour voir le train sans la foule.",
    },
    r4: {
      country: "Pays-Bas",
      text: "Un circuit privé qui donnait l'impression de voyager avec un ami. Kandy, le temple et les éléphants dans la rivière, tout avait le bon rythme.",
    },
    r5: {
      country: "Espagne",
      text: "Chaleureux, honnête et très compétent. Il a changé notre programme le jour où il a plu et nous a trouvé une magnifique cascade à la place.",
    },
    r6: {
      country: "Australie",
      text: "Excellent rapport qualité-prix pour un chauffeur-guide privé. La journée sur la côte sud était détendue et le fort de Galle a été un des temps forts. Nous réserverions de nouveau sans hésiter.",
    },
  },
};

export default fr;
