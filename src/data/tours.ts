// SAMPLE DATA for the demo. Tour names, prices and itineraries are placeholders
// to be confirmed with the owner. Later this comes from the Laravel API.
import type { Tour } from "@/types";

const photo = (file: string, alt: string) => ({ src: `/images/tours/${file}.jpg`, alt });

export const tours: Tour[] = [
  {
    slug: "sigiriya-village-life",
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
    priceFrom: 95,
    featured: true,
    photos: [
      photo("sigiriya-lake", "Sigiriya Lion Rock seen across a calm lake"),
      photo("sigiriya-view", "Guests in front of Sigiriya Rock"),
      photo("sigiriya-guests", "Our guide with a guest near Sigiriya"),
      photo("village-rice-pounding", "Guest pounding rice in a traditional village"),
      photo("village-weaving", "Palm-leaf weaving lesson in a village"),
      photo("village-cooking", "Village kitchen with clay pots over a wood fire"),
      photo("village-lunch", "Home-cooked Sri Lankan lunch"),
    ],
  },
  {
    slug: "kandy-temple-of-the-tooth",
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
    priceFrom: 85,
    featured: true,
    photos: [
      photo("elephant-river", "Guest beside an elephant in the river"),
      photo("kandy-temple", "Guests at the Temple of the Tooth in Kandy"),
      photo("kandy-temple-gardens", "Gardens of the Temple of the Tooth"),
      photo("kandy-hindu-temple", "Inside a colourful Hindu temple"),
      photo("elephant-river-bath", "Elephant bathing in the river with a guest"),
    ],
  },
  {
    slug: "tea-country-nuwara-eliya",
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
    priceFrom: 110,
    featured: true,
    photos: [
      photo("tea-plucking", "Guests plucking tea on a hillside estate"),
      photo("labookellie-tea", "Guests at the Labookellie tea plantation"),
      photo("tea-plantation", "Tea plucker showing a guest how to pick leaves"),
      photo("tea-picker", "Guest picking tea with a basket"),
      photo("ramboda-falls", "Ramboda Falls in the hill country"),
      photo("tea-centre", "Tea and cake overlooking the plantations"),
      photo("labookellie-guests", "Our guide with guests at Labookellie"),
      photo("tea-country-guests", "Happy guests in tea country"),
    ],
  },
  {
    slug: "ella-waterfalls",
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
    included: ["Private air-conditioned vehicle", "English-speaking driver-guide", "Driver's accommodation", "Bottled water"],
    priceFrom: 240,
    featured: false,
    photos: [
      photo("nine-arch-bridge", "Guests at the Nine Arch Bridge in Ella"),
      photo("ella-waterfall", "Our guide with a guest at a waterfall near Ella"),
      photo("ella-falls", "Our guide beside a cascading waterfall"),
      photo("waterfall-swim", "Guests at a waterfall with a natural pool"),
      photo("waterfall-pool", "Guests wading in a rock pool below a waterfall"),
    ],
  },
  {
    slug: "elephant-encounter",
    title: "Elephant Encounter",
    location: "Central Sri Lanka",
    duration: "Half day · about 5 hours",
    summary:
      "Meet Sri Lanka's gentle giants up close, with a guide who knows how to watch them respectfully.",
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
    priceFrom: 60,
    featured: false,
    photos: [
      photo("elephant-encounter", "Guest standing near an elephant"),
      photo("elephant-guests", "Two guests posing with an elephant"),
      photo("elephant-selfie", "Our guide with guests and an elephant"),
    ],
  },
  {
    slug: "south-coast-escape",
    title: "South Coast Escape",
    location: "Galle · Mirissa",
    duration: "Full day · about 10 hours",
    summary:
      "Palm-lined beaches, the old Dutch fort at Galle and a slow sunset by the Indian Ocean.",
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
    priceFrom: 120,
    featured: false,
    photos: [
      photo("south-coast", "Guests on the palm-lined south coast"),
      photo("beach-guests", "Our guide with a group of guests by the sea"),
    ],
  },
];
