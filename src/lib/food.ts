export type FoodSpot = {
  slug: string;
  name: string;
  area: string;
  region: string;
  type: "Restaurant" | "Street food" | "Local eatery";
  distance: string;
  rating: number;
  reviews: number;
  taste: number;
  hygiene: number;
  price: number;
  portion: string;
  spice: "Mild" | "Medium" | "Hot";
  halal: boolean;
  vegetarian: boolean;
  seafood: boolean;
  traditional: boolean;
  hidden: boolean;
  signature: string[];
  story: string;
  image: string;
  gallery: string[];
  open: string;
  lat: number;
  lng: number;
};
export const foodSpots: FoodSpot[] = [
  {
    slug: "puran-dhaka-biryani-house",
    name: "Puran Dhaka Biryani House",
    area: "Nazira Bazar",
    region: "Dhaka",
    type: "Local eatery",
    distance: "1.2 km",
    rating: 4.7,
    reviews: 864,
    taste: 4.8,
    hygiene: 4.2,
    price: 320,
    portion: "1 generous plate",
    spice: "Medium",
    halal: true,
    vegetarian: false,
    seafood: false,
    traditional: true,
    hidden: false,
    signature: ["Kacchi biryani", "Borhani", "Jali kebab"],
    story:
      "Old Dhaka biryani grew from Mughal-influenced celebration cooking—fragrant rice, meat, potato and slow dum cooking remain its signature.",
    image:
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
    ],
    open: "11:30 AM–11:00 PM",
    lat: 35,
    lng: 55,
  },
  {
    slug: "sylhet-satkora-kitchen",
    name: "Satkora Heritage Kitchen",
    area: "Zindabazar",
    region: "Sylhet",
    type: "Restaurant",
    distance: "800 m",
    rating: 4.6,
    reviews: 392,
    taste: 4.7,
    hygiene: 4.5,
    price: 520,
    portion: "Good for 2 with rice",
    spice: "Medium",
    halal: true,
    vegetarian: true,
    seafood: false,
    traditional: true,
    hidden: false,
    signature: ["Satkora beef", "Akni", "Seven-layer tea"],
    story:
      "Satkora, an aromatic citrus used across Sylhet, cuts through the richness of slow-cooked beef and gives the dish its unmistakable regional character.",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    ],
    open: "12:00 PM–10:30 PM",
    lat: 62,
    lng: 30,
  },
  {
    slug: "cox-rupchanda-grill",
    name: "Rupchanda Sea Grill",
    area: "Kolatoli",
    region: "Cox's Bazar",
    type: "Restaurant",
    distance: "450 m from beach",
    rating: 4.5,
    reviews: 517,
    taste: 4.7,
    hygiene: 4.3,
    price: 650,
    portion: "Whole fish, good for 2",
    spice: "Hot",
    halal: true,
    vegetarian: false,
    seafood: true,
    traditional: true,
    hidden: false,
    signature: ["Rupchanda fry", "Loitta shutki", "Crab masala"],
    story:
      "Fresh coastal fish, turmeric, chilli and quick high-heat frying make the Cox's Bazar seafood experience direct, bold and deeply local.",
    image:
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    ],
    open: "12:00 PM–11:00 PM",
    lat: 73,
    lng: 62,
  },
  {
    slug: "khulna-chui-jhal",
    name: "Khulna Chui Jhal Ghar",
    area: "Shib Bari",
    region: "Khulna",
    type: "Local eatery",
    distance: "600 m",
    rating: 4.6,
    reviews: 284,
    taste: 4.8,
    hygiene: 4.1,
    price: 380,
    portion: "Good for 1–2",
    spice: "Hot",
    halal: true,
    vegetarian: false,
    seafood: false,
    traditional: true,
    hidden: true,
    signature: ["Chui jhal beef", "Chui jhal mutton", "Dal & bhorta"],
    story:
      "Chui jhal uses the peppery stem of a climbing vine, giving meat curry a warm, woody heat unique to Khulna and the southwest.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    ],
    open: "12:00 PM–10:00 PM",
    lat: 48,
    lng: 72,
  },
  {
    slug: "chattogram-mezban",
    name: "Mezban Bari",
    area: "GEC Circle",
    region: "Chattogram",
    type: "Restaurant",
    distance: "1.8 km",
    rating: 4.7,
    reviews: 611,
    taste: 4.8,
    hygiene: 4.4,
    price: 450,
    portion: "Set meal for 1",
    spice: "Hot",
    halal: true,
    vegetarian: false,
    seafood: false,
    traditional: true,
    hidden: false,
    signature: ["Mezbani beef", "Nolar jhol", "Chonar dal"],
    story:
      "Mezban is Chattogram's communal feast tradition. Its intensely spiced beef and dal are tied to hospitality, remembrance and large shared gatherings.",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    ],
    open: "11:30 AM–10:30 PM",
    lat: 28,
    lng: 42,
  },
  {
    slug: "rajshahi-mango-dessert",
    name: "Mango & Mishti Corner",
    area: "Shaheb Bazar",
    region: "Rajshahi",
    type: "Street food",
    distance: "300 m",
    rating: 4.4,
    reviews: 176,
    taste: 4.6,
    hygiene: 4.0,
    price: 180,
    portion: "Snack for 1",
    spice: "Mild",
    halal: true,
    vegetarian: true,
    seafood: false,
    traditional: true,
    hidden: true,
    signature: ["Mango lassi", "Khirsha patishapta", "Kacha golla"],
    story:
      "Rajshahi's mango culture shapes seasonal drinks and sweets, while local dairy-based mishti completes a lighter northern food stop.",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
    ],
    open: "9:00 AM–9:30 PM",
    lat: 64,
    lng: 75,
  },
  {
    slug: "barishal-pitha-guava",
    name: "Barishal Pitha & Guava Ghar",
    area: "Sadar Road",
    region: "Barishal",
    type: "Local eatery",
    distance: "700 m",
    rating: 4.5,
    reviews: 138,
    taste: 4.6,
    hygiene: 4.3,
    price: 220,
    portion: "Tasting plate for 1",
    spice: "Mild",
    halal: true,
    vegetarian: true,
    seafood: false,
    traditional: true,
    hidden: true,
    signature: ["Bhapa pitha", "Guava chutney", "Coconut patishapta"],
    story:
      "Barishal's river culture, rice, coconut and seasonal guava meet in homestyle pitha and fresh local accompaniments.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    ],
    open: "7:00 AM–9:00 PM",
    lat: 42,
    lng: 63,
  },
];
export const foodBySlug = (slug: string) =>
  foodSpots.find((f) => f.slug === slug);
