// English text for the whole site. This file defines the shape every other language must follow.
// The business name and tagline are brand names and stay the same in every language (src/config/site.ts).
// SAMPLE DATA: tour texts, reviews and the About story are placeholders to confirm with the owner.

const en = {
  meta: {
    siteTitle: "Private tours in Sri Lanka",
    description:
      "Private, guide-led tours of Sri Lanka: ancient cities, misty tea country, waterfalls and wildlife, with your own driver-guide and vehicle.",
    location: "Sri Lanka · Pickup island-wide",
  },

  common: {
    skipToContent: "Skip to content",
    bookOnWhatsApp: "Book on WhatsApp",
    chatOnWhatsApp: "Chat on WhatsApp",
    chatWithUs: "Chat with us",
    chatWithUsAria: "Chat with us on WhatsApp",
    viewTour: "View tour",
    viewAllTours: "View all tours",
    viewGallery: "View the gallery",
    readAllReviews: "Read all reviews",
    exploreTours: "Explore tours",
    browseTours: "Browse tours",
    ratingLabel: (rating: number) => `${rating} out of 5 stars`,
  },

  nav: {
    tours: "Tours",
    gallery: "Gallery",
    reviews: "Reviews",
    about: "About",
    contact: "Contact",
  },

  header: {
    homeAria: (name: string) => `${name} home`,
    mainMenu: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },

  footer: {
    explore: "Explore",
    contact: "Contact",
    whatsApp: "WhatsApp",
    findUsOnTripAdvisor: "Find us on TripAdvisor",
    menu: "Footer",
    rights: (name: string) => `© ${name}. All rights reserved.`,
  },

  tour: {
    fromPrice: (price: number) => `From USD ${price} per person`,
    priceOnRequest: "Price on request",
    privateTour: "Private tour",
    highlights: "Highlights",
    thePlan: "The plan",
    included: "Included",
    photos: "Photos",
    bookThisTour: "Book this tour",
    finalPriceNote: "final price confirmed on WhatsApp",
    youMayAlsoLike: "You may also like",
    breadcrumb: "Breadcrumb",
    loading: "Loading tour",
  },

  reviewCard: {
    meta: (month: string, source: string) => `${month} · via ${source}`,
  },

  cta: {
    eyebrow: "Plan your journey",
    title: "Tell us your dates. We will take care of the rest.",
    text: "Send us a message on WhatsApp. We reply personally and shape the tour around you.",
  },

  home: {
    heroEyebrow: "Private tours · Sri Lanka",
    heroTitle: "Discover Sri Lanka, beautifully unhurried.",
    heroText:
      "Ancient cities, misty tea country, waterfalls and wildlife, with your own driver-guide and a vehicle just for you.",
    heroPoints: ["Private tours only", "Local expert guides", "Pickup island-wide"],
    heroCaption: "Sigiriya Lion Rock, Cultural Triangle",
    whyEyebrow: "Why travel with us",
    whyTitle: "A small local business, a personal welcome",
    whyIntro: "We are not a big agency. Every tour is planned, driven and guided by our own small team.",
    reasons: {
      private: {
        title: "Private, just for you",
        text: "Your own vehicle and guide. No crowded buses, no fixed timetable: we travel at your pace.",
      },
      guides: {
        title: "Local guides, real stories",
        text: "Born and raised in Sri Lanka, our guides share the history, food and hidden places behind every stop.",
      },
      vehicles: {
        title: "Comfortable vehicles",
        text: (count: number) => `A fleet of ${count} clean, well-kept vehicles with careful, experienced drivers.`,
      },
      booking: {
        title: "Simple booking",
        text: "No accounts and no payment online. Send a request and plan every detail with us on WhatsApp.",
      },
    },
    featuredEyebrow: "Signature tours",
    featuredTitle: "Our most loved journeys",
    featuredIntro: "Every tour is private and can be adjusted to your pace and interests.",
    howEyebrow: "How it works",
    howTitle: "Booking takes less than a minute",
    steps: [
      { title: "Choose a tour", text: "Pick a tour you love, or tell us what you would like to see." },
      { title: "Send your request", text: "Fill in a short form. WhatsApp opens with your details ready to send." },
      { title: "Plan it together", text: "We reply personally on WhatsApp to confirm dates, pickup and price." },
    ],
    momentsEyebrow: "Moments",
    momentsTitle: "Memories from our guests",
    reviewsEyebrow: "Guest reviews",
    reviewsTitle: "In our guests' words",
  },

  toursPage: {
    metaTitle: "Tours",
    metaDescription:
      "Private day tours and short journeys across Sri Lanka: Sigiriya, Kandy, tea country, Ella, elephants and the south coast.",
    eyebrow: "Our tours",
    title: "Private journeys across the island",
    intro:
      "Every tour is private, with your own vehicle and guide. Dates, pace and stops can all be adjusted. Just ask.",
  },

  galleryPage: {
    metaTitle: "Gallery",
    metaDescription: "Photos from our private tours around Sri Lanka, shared by our guests.",
    eyebrow: "Gallery",
    title: "Moments from the road",
    intro: "Real photos from real tours: our guests, our guides and the places we love to share.",
  },

  reviewsPage: {
    metaTitle: "Reviews",
    metaDescription: (name: string) => `What our guests say about their private tours with ${name}.`,
    eyebrow: "Guest reviews",
    title: "Kind words from our guests",
    intro: "Every review comes from a guest who travelled with us.",
    basedOn: (count: number) => `Based on ${count} reviews`,
    seeMore: "See more on TripAdvisor",
  },

  about: {
    metaTitle: "About us",
    metaDescription: (name: string) =>
      `${name} is a small Sri Lankan taxi and tour business offering private tours with local guides.`,
    eyebrow: "About us",
    title: "Sharing the island we call home",
    intro: (name: string) =>
      `${name} began with one simple idea: show travellers the Sri Lanka we grew up with, honestly and personally.`,
    storyEyebrow: "Our story",
    storyTitle: "A local guide, a small team, a big island",
    storyP1: (vehicles: number) =>
      `What started as a guide showing visitors around his home town has grown into a small team of guides and drivers with a fleet of ${vehicles} vehicles. We are still small on purpose: it means every guest gets our full attention.`,
    storyP2:
      "From the rock fortress of Sigiriya to the tea estates of the hill country, we take you to the famous sights and the quiet places in between, and we tell you the stories behind them.",
    factVehicles: "Comfortable vehicles",
    factPrivateValue: "100%",
    factPrivate: "Private tours",
    factIslandWideValue: "Island-wide",
    factIslandWide: "Pickup and drop-off",
    travelEyebrow: "How we travel",
    travelTitle: "Your pace, your plan",
    travelP1:
      "Every tour is private. Want to stay longer at a waterfall, skip a stop, or find the best rice and curry in town? Just tell your guide. The day belongs to you.",
    travelP2:
      "Planning is simple too. Send us a message on WhatsApp and we will help you shape the trip, before you arrive and throughout your journey.",
  },

  contact: {
    metaTitle: "Contact",
    metaDescription: (name: string) =>
      `Contact ${name} on WhatsApp, phone or email to plan your private tour in Sri Lanka.`,
    eyebrow: "Contact",
    title: "Let's plan your journey",
    intro:
      "The quickest way to reach us is WhatsApp. Send a message, or fill in the form and we will continue the conversation there.",
    whatsApp: "WhatsApp",
    phone: "Phone",
    email: "Email",
    whereWeAre: "Where we are",
    formTitle: "Send a request",
    formIntro: "Not sure which tour? Leave it open and we will suggest one.",
  },

  booking: {
    tour: "Tour",
    notSure: "Not sure yet, please suggest a tour",
    name: "Your name",
    whatsApp: "WhatsApp number",
    whatsAppPlaceholder: "+44 7700 900123",
    date: "Preferred date",
    adults: "Adults",
    children: "Children",
    pickup: "Pickup location",
    pickupPlaceholder: "Hotel name or airport",
    message: "Message",
    optional: "(optional)",
    submit: "Send request on WhatsApp",
    note: "WhatsApp opens with your details ready to send. Nothing is booked or paid until we confirm with you.",
  },

  notFound: {
    eyebrow: "Page not found",
    title: "This path leads nowhere",
    text: "The page you are looking for has moved or no longer exists. Let us guide you back.",
  },

  // Short descriptions of each photo, read aloud by screen readers.
  photos: {
    "sigiriya-lake": "Sigiriya Lion Rock seen across a calm lake",
    "sigiriya-view": "Guests in front of Sigiriya Rock",
    "sigiriya-guests": "Our guide with a guest near Sigiriya",
    "village-rice-pounding": "Guest pounding rice in a traditional village",
    "village-weaving": "Palm-leaf weaving lesson in a village",
    "village-cooking": "Village kitchen with clay pots over a wood fire",
    "village-lunch": "Home-cooked Sri Lankan lunch",
    "kandy-temple": "Guests at the Temple of the Tooth in Kandy",
    "kandy-temple-gardens": "Gardens of the Temple of the Tooth",
    "kandy-hindu-temple": "Inside a colourful Hindu temple",
    "elephant-river-bath": "Elephant bathing in the river with a guest",
    "elephant-river": "Guest beside an elephant in the river",
    "tea-plucking": "Guests plucking tea on a hillside estate",
    "labookellie-tea": "Guests at the Labookellie tea plantation",
    "tea-plantation": "Tea plucker showing a guest how to pick leaves",
    "tea-picker": "Guest picking tea with a basket",
    "ramboda-falls": "Ramboda Falls in the hill country",
    "tea-centre": "Tea and cake overlooking the plantations",
    "labookellie-guests": "Our guide with guests at Labookellie",
    "tea-country-guests": "Happy guests in tea country",
    "nine-arch-bridge": "Guests at the Nine Arch Bridge in Ella",
    "ella-waterfall": "Our guide with a guest at a waterfall near Ella",
    "ella-falls": "Our guide beside a cascading waterfall",
    "waterfall-swim": "Guests at a waterfall with a natural pool",
    "waterfall-pool": "Guests wading in a rock pool below a waterfall",
    "elephant-encounter": "Guest standing near an elephant",
    "elephant-guests": "Two guests posing with an elephant",
    "elephant-selfie": "Our guide with guests and an elephant",
    "south-coast": "Guests on the palm-lined south coast",
    "beach-guests": "Our guide with a group of guests by the sea",
  },

  tours: {
    "sigiriya-village-life": {
      title: "Sigiriya Rock & Village Life",
      location: "Sigiriya · Habarana",
      duration: "Full day · about 10 hours",
      summary:
        "Climb the 5th-century Lion Rock fortress, then slow down in a traditional village for a home-cooked lunch.",
      description: [
        "Sigiriya rises 200 metres above the plains of the Cultural Triangle. We start early to climb before the heat, past the famous frescoes and the lion's paws to the palace ruins at the summit.",
        "In the afternoon we leave the crowds behind. In a farming village you will see rice being pounded by hand, try weaving with coconut palm leaves, and share a lunch cooked over a wood fire.",
      ],
      highlights: [
        "Climb Sigiriya Lion Rock, a UNESCO World Heritage Site",
        "Traditional village visit with hands-on activities",
        "Home-cooked Sri Lankan lunch in a village kitchen",
        "Lakeside views of the rock away from the crowds",
      ],
      itinerary: [
        { title: "Early pickup", description: "Pickup from your hotel and drive to Sigiriya." },
        { title: "Sigiriya Lion Rock", description: "Guided climb to the summit, about 2–3 hours." },
        { title: "Village experience", description: "Rice pounding, palm-leaf weaving and a walk through the paddy fields." },
        { title: "Village lunch", description: "A rice-and-curry lunch prepared by a local family." },
        { title: "Return", description: "Relaxed drive back to your hotel." },
      ],
      included: ["Private air-conditioned vehicle", "English-speaking driver-guide", "Village lunch", "Bottled water"],
    },
    "kandy-temple-of-the-tooth": {
      title: "Kandy & the Temple of the Tooth",
      location: "Kandy · Pinnawala",
      duration: "Full day · about 9 hours",
      summary:
        "Sri Lanka's last royal capital: the sacred Temple of the Tooth, colourful Hindu shrines and elephants bathing in the river.",
      description: [
        "Kandy sits among green hills around a peaceful lake. Your guide takes you through the Temple of the Sacred Tooth Relic, the most important Buddhist shrine on the island, and explains the stories behind its rituals.",
        "Along the way we stop at a Hindu temple full of carved, painted gods, and at the river where elephants come down to bathe.",
      ],
      highlights: [
        "Temple of the Sacred Tooth Relic, a UNESCO World Heritage Site",
        "Colourful Hindu temple visit",
        "Elephants bathing in the river",
        "Kandy Lake and the city viewpoint",
      ],
      itinerary: [
        { title: "Pickup", description: "Pickup from your hotel in Kandy or nearby." },
        { title: "Elephants at the river", description: "Watch elephants bathe and play in the river." },
        { title: "Hindu temple", description: "Short visit to a richly decorated kovil." },
        { title: "Temple of the Tooth", description: "Guided visit to the temple and its gardens." },
        { title: "Kandy Lake", description: "Lakeside walk and the viewpoint over the city." },
      ],
      included: ["Private air-conditioned vehicle", "English-speaking driver-guide", "Bottled water"],
    },
    "tea-country-nuwara-eliya": {
      title: "Tea Country & Nuwara Eliya",
      location: "Ramboda · Nuwara Eliya",
      duration: "Full day · about 10 hours",
      summary:
        "Wind up into the misty hills, pick tea with the estate pluckers, and taste fresh Ceylon tea with views over the plantations.",
      description: [
        "The road into the hill country climbs past waterfalls and endless tea terraces. At Ramboda Falls we stop for the view before reaching the cool air of the highlands.",
        "On a working estate you can try plucking tea leaves alongside the pluckers, then sit down to a fresh cup and cake at the Labookellie tea centre overlooking the valley.",
      ],
      highlights: [
        "Pick tea leaves with the estate pluckers",
        "Tea tasting at Labookellie with valley views",
        "Ramboda Falls viewpoint",
        "Nuwara Eliya, Sri Lanka's 'Little England'",
      ],
      itinerary: [
        { title: "Pickup", description: "Pickup from Kandy or your hill-country hotel." },
        { title: "Ramboda Falls", description: "Stop at the falls on the way up into the hills." },
        { title: "Tea plucking", description: "Join the pluckers on a working tea estate." },
        { title: "Labookellie tea centre", description: "Fresh tea and cake overlooking the plantations." },
        { title: "Nuwara Eliya", description: "Gregory Lake and the colonial town centre." },
      ],
      included: ["Private air-conditioned vehicle", "English-speaking driver-guide", "Tea tasting", "Bottled water"],
    },
    "ella-waterfalls": {
      title: "Ella, Nine Arch Bridge & Waterfalls",
      location: "Ella · Hill country",
      duration: "2 days · 1 night",
      summary:
        "Two easy days in Ella: the famous Nine Arch Bridge, jungle waterfalls and cool natural pools to swim in.",
      description: [
        "Ella is a small mountain town surrounded by forest and tea. We time your visit to the Nine Arch Bridge for when the train crosses, then head out to waterfalls hidden in the hills.",
        "On the second day, cool off in a natural rock pool below a waterfall before the relaxed drive back. Your guide chooses the quietest spots and the best times to visit.",
      ],
      highlights: [
        "Nine Arch Bridge as the train crosses",
        "Ravana Falls and quieter hidden waterfalls",
        "Swim in a natural rock pool",
        "Mountain views over Ella Gap",
      ],
      itinerary: [
        { title: "Day 1 · To Ella", description: "Scenic drive through the hill country to Ella." },
        { title: "Day 1 · Nine Arch Bridge", description: "Walk to the bridge to watch the train cross." },
        { title: "Day 2 · Waterfalls", description: "Visit Ravana Falls and a quieter jungle waterfall." },
        { title: "Day 2 · Rock pool", description: "Time to swim and relax before the drive back." },
      ],
      included: [
        "Private air-conditioned vehicle",
        "English-speaking driver-guide",
        "Driver's accommodation",
        "Bottled water",
      ],
    },
    "elephant-encounter": {
      title: "Elephant Encounter",
      location: "Central Sri Lanka",
      duration: "Half day · about 5 hours",
      summary: "Meet Sri Lanka's gentle giants up close, with a guide who knows how to watch them respectfully.",
      description: [
        "Few moments stay with you like standing near an elephant. This relaxed half-day trip brings you close to Asian elephants in a natural setting.",
        "Your guide shares how elephants live in Sri Lanka and how to enjoy them safely and respectfully. Easy to combine with Sigiriya or Kandy.",
      ],
      highlights: [
        "See Asian elephants up close",
        "Learn about elephant life in Sri Lanka",
        "Relaxed pace, ideal for families",
      ],
      itinerary: [
        { title: "Pickup", description: "Pickup from your hotel." },
        { title: "Elephant encounter", description: "Time with the elephants, guided and unhurried." },
        { title: "Return", description: "Drive back, with a stop for fresh king coconut." },
      ],
      included: ["Private air-conditioned vehicle", "English-speaking driver-guide", "Bottled water"],
    },
    "south-coast-escape": {
      title: "South Coast Escape",
      location: "Galle · Mirissa",
      duration: "Full day · about 10 hours",
      summary: "Palm-lined beaches, the old Dutch fort at Galle and a slow sunset by the Indian Ocean.",
      description: [
        "The south coast is Sri Lanka at its most relaxed. We walk the ramparts of Galle Fort, a UNESCO-listed old town of colonial streets and small cafés.",
        "Then it's time for the beach: golden sand, coconut palms and warm sea, ending with sunset on the coast.",
      ],
      highlights: [
        "Galle Fort, a UNESCO World Heritage Site",
        "Palm-lined beaches of the south coast",
        "Sunset by the Indian Ocean",
      ],
      itinerary: [
        { title: "Pickup", description: "Pickup from your hotel on the south or west coast." },
        { title: "Galle Fort", description: "Walk the ramparts and old streets." },
        { title: "Beach time", description: "Swim and relax on a quiet palm-lined beach." },
        { title: "Sunset", description: "Watch the sun go down before the drive back." },
      ],
      included: ["Private air-conditioned vehicle", "English-speaking driver-guide", "Bottled water"],
    },
  },

  // Guest reviews. Names and ratings are in src/data/reviews.ts.
  reviews: {
    r1: {
      country: "United Kingdom",
      text: "Our guide made Sigiriya feel like a story rather than a climb. The village lunch afterwards was the best meal of our whole trip. Booking on WhatsApp was so easy.",
    },
    r2: {
      country: "Germany",
      text: "Picking tea with the pluckers and then drinking it with that view at Labookellie was unforgettable. Comfortable car, careful driving and always on time.",
    },
    r3: {
      country: "France",
      text: "We felt looked after from the first message. He knew exactly when to go to the Nine Arch Bridge to see the train without the crowds.",
    },
    r4: {
      country: "Netherlands",
      text: "A private tour that felt like travelling with a friend. Kandy, the temple and the elephants in the river were all perfectly paced.",
    },
    r5: {
      country: "Spain",
      text: "Warm, honest and so knowledgeable. He changed our plan on the day when it rained and found us a beautiful waterfall instead.",
    },
    r6: {
      country: "Australia",
      text: "Great value for a private driver-guide. The south coast day was relaxed and Galle Fort was a highlight. Would book again without hesitation.",
    },
  },
};

export default en;
