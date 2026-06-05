import { nanoid } from "nanoid";

export type LodgingType = {
  id: string;
  name: string;
  kind:
    | "Hostel"
    | "Family-owned Hotel"
    | "B&B"
    | "Private Condo"
    | "Beach House"
    | "Four-star Resort";
  priceRange: string;
  highlights: string[];
  photo: "hero" | "lagoon" | "rainforest";
};

export type Restaurant = {
  id: string;
  name: string;
  cuisine: "Local fish & rice" | "American-style" | "Pan-Asian";
  hours: string;
  location: string;
  signature: string;
};

export type Activity = {
  id: string;
  name: string;
  category: "Nature" | "Culture" | "Adventure" | "Nightlife" | "Family";
  duration: string;
  bestFor: string;
  details: string;
  hero: "rainforest" | "volcano" | "lagoon" | "hero";
};

export const lodging: LodgingType[] = [
  {
    id: "hostel-taniti",
    name: "Taniti City Hostel",
    kind: "Hostel",
    priceRange: "$25–$55 / night",
    highlights: ["Inexpensive", "Heart of Taniti City", "Walkable to bus"],
    photo: "lagoon",
  },
  {
    id: "hotel-harbor",
    name: "Yellow Leaf Harbor Hotel",
    kind: "Family-owned Hotel",
    priceRange: "$105–$165 / night",
    highlights: ["Harbor views", "Family-owned", "Safe & strictly regulated"],
    photo: "hero",
  },
  {
    id: "bnb-merriton",
    name: "Merriton Landing B&B",
    kind: "B&B",
    priceRange: "$90–$140 / night",
    highlights: ["Quiet neighborhood", "Merriton Landing area", "Homemade breakfast"],
    photo: "rainforest",
  },
  {
    id: "condos-yellow-leaf",
    name: "Yellow Leaf Condos",
    kind: "Private Condo",
    priceRange: "$150–$250 / night",
    highlights: ["Kitchenette", "Great for families", "Close to beaches"],
    photo: "lagoon",
  },
  {
    id: "beachhouse-taniti",
    name: "Taniti Beach House",
    kind: "Beach House",
    priceRange: "$200–$400 / night",
    highlights: ["Private beach access", "Full home", "Island style"],
    photo: "hero",
  },
  {
    id: "resort-taniti-grand",
    name: "Taniti Grand Resort",
    kind: "Four-star Resort",
    priceRange: "$350–$600 / night",
    highlights: ["Large 4-star facility", "Oceanfront", "Luxury excursions"],
    photo: "hero",
  },
];

export const restaurants: Restaurant[] = [
  {
    id: nanoid(),
    name: "Taniti Reef Grill",
    cuisine: "Local fish & rice",
    hours: "11:00 AM – 9:00 PM",
    location: "Taniti City Harbor",
    signature: "Snapper with spiced rice",
  },
  {
    id: nanoid(),
    name: "Island Catch",
    cuisine: "Local fish & rice",
    hours: "12:00 PM – 10:00 PM",
    location: "Market District",
    signature: "Coconut-lime mahi-mahi",
  },
  {
    id: nanoid(),
    name: "Yellow Leaf Kitchen",
    cuisine: "Local fish & rice",
    hours: "7:00 AM – 2:00 PM",
    location: "Merriton Landing",
    signature: "Morning fish congee",
  },
  {
    id: nanoid(),
    name: "Shoreline Bowls",
    cuisine: "Local fish & rice",
    hours: "4:00 PM – 11:00 PM",
    location: "Taniti City",
    signature: "Reef tuna poke bowls",
  },
  {
    id: nanoid(),
    name: "Village Smoker",
    cuisine: "Local fish & rice",
    hours: "5:00 PM – 10:00 PM",
    location: "North Shore",
    signature: "Smoked wahoo and rice",
  },
  {
    id: nanoid(),
    name: "Pacific Burger",
    cuisine: "American-style",
    hours: "11:00 AM – 11:00 PM",
    location: "Airport Road",
    signature: "Wagyu burger + classic fries",
  },
  {
    id: nanoid(),
    name: "Taniti City Diner",
    cuisine: "American-style",
    hours: "6:00 AM – 8:00 PM",
    location: "Town Center",
    signature: "All-day American breakfast",
  },
  {
    id: nanoid(),
    name: "Sunset Grill",
    cuisine: "American-style",
    hours: "12:00 PM – 9:00 PM",
    location: "Yellow Leaf Bay",
    signature: "BBQ Ribs with slaw",
  },
  {
    id: nanoid(),
    name: "Dragon Harbor",
    cuisine: "Pan-Asian",
    hours: "12:00 PM – 10:00 PM",
    location: "Merriton Landing",
    signature: "Island herb Pad Thai",
  },
  {
    id: nanoid(),
    name: "Silk Road Noodle",
    cuisine: "Pan-Asian",
    hours: "5:00 PM – 11:00 PM",
    location: "Taniti City",
    signature: "Spicy island ramen",
  },
];

export const activities: Activity[] = [
  {
    id: "beaches",
    name: "Beaches: Sandy & Rocky",
    category: "Nature",
    duration: "Flexible",
    bestFor: "Relaxation, swimming",
    details:
      "Taniti features white sandy beaches encircling Yellow Leaf Bay and dramatic rocky shores in the north. Perfect for sunrise walks or boat tours.",
    hero: "lagoon",
  },
  {
    id: "rainforest-hikes",
    name: "Rainforest Hikes",
    category: "Nature",
    duration: "2–5 hours",
    bestFor: "Nature lovers, birdwatchers",
    details:
      "Explore lush tropical rainforests with marked trails. Many trails are located near Merriton Landing and offer diverse flora and fauna.",
    hero: "rainforest",
  },
  {
    id: "volcano-tour",
    name: "Active Volcano Tours",
    category: "Adventure",
    duration: "Half day",
    bestFor: "Thrill seekers, photographers",
    details:
      "Visit Taniti's small but active volcano in the mountainous interior. Guided bus or hiking tours are available daily from Taniti City.",
    hero: "volcano",
  },
  {
    id: "museum",
    name: "Taniti History Museum",
    category: "Culture",
    duration: "1–2 hours",
    bestFor: "History buffs, families",
    details:
      "Learn about the island's indigenous population of 20,000 and its heritage in fishing and agriculture.",
    hero: "hero",
  },
  {
    id: "fishing-tours",
    name: "Chartered Fishing Tours",
    category: "Adventure",
    duration: "4 hours",
    bestFor: "Fishing enthusiasts",
    details:
      "Experience the island's economic roots with a professional fishing charter leaving from the harbor.",
    hero: "lagoon",
  },
  {
    id: "snorkeling",
    name: "Snorkeling",
    category: "Nature",
    duration: "2–3 hours",
    bestFor: "Families, beginners",
    details:
      "Crystal clear turquoise waters in Yellow Leaf Bay offer amazing visibility for snorkeling on the reefs.",
    hero: "lagoon",
  },
  {
    id: "ziplining",
    name: "Rainforest Zip-lining",
    category: "Adventure",
    duration: "2 hours",
    bestFor: "Adrenaline seekers",
    details:
      "Glide through the canopy of Taniti's lush tropical rainforest for a bird's-eye view of the island.",
    hero: "rainforest",
  },
  {
    id: "nightlife",
    name: "Nightlife: Pubs & Clubs",
    category: "Nightlife",
    duration: "Evening",
    bestFor: "Adults, social travelers",
    details:
      "Visit our microbrewery, local pubs, or the new dance club. Note: Alcohol service stops at midnight.",
    hero: "hero",
  },
  {
    id: "helicopter",
    name: "Helicopter Rides",
    category: "Adventure",
    duration: "1 hour",
    bestFor: "Bucket lists",
    details:
      "See the mountainous interior, active volcano, and coastline reefs from above on a luxury helicopter tour.",
    hero: "volcano",
  },
  {
    id: "golf",
    name: "9-Hole Golf Course",
    category: "Culture",
    duration: "Half day",
    bestFor: "Sports enthusiasts",
    details:
      "Our upcoming 9-hole golf course will be operational by next year! Stay tuned for opening dates.",
    hero: "hero",
  },
];
