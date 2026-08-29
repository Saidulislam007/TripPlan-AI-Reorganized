export type Place = {
  slug: string;
  name: string;
  division: string;
  district: string;
  tagline: string;
  description: string;
  bestTime: string;
  duration: string;
  entry: string;
  travelTip: string;
  highlights: string[];
  image: string;
};
export const divisions = [
  "Dhaka",
  "Chattogram",
  "Sylhet",
  "Khulna",
  "Rajshahi",
  "Rangpur",
  "Barishal",
  "Mymensingh",
];
export const places: Place[] = [
  {
    slug: "lalbagh-fort",
    name: "Lalbagh Fort",
    division: "Dhaka",
    district: "Dhaka",
    tagline: "Mughal history in the heart of Old Dhaka",
    description:
      "A seventeenth-century Mughal fort complex with gardens, gateways, a mosque and the tomb of Pari Bibi.",
    bestTime: "November–February",
    duration: "2–3 hours",
    entry: "Ticket required",
    travelTip:
      "Visit early, then combine it with Ahsan Manzil and Old Dhaka food.",
    highlights: ["Pari Bibi's tomb", "Mughal architecture", "Historic gardens"],
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sonargaon-panam",
    name: "Panam City",
    division: "Dhaka",
    district: "Narayanganj",
    tagline: "A silent street of merchant mansions",
    description:
      "Panam Nagar preserves a compact street of historic merchant houses close to Sonargaon Folk Art Museum.",
    bestTime: "October–March",
    duration: "Half day",
    entry: "Ticket required",
    travelTip:
      "Leave Dhaka early to avoid highway traffic and check the weekly closing day.",
    highlights: ["Historic mansions", "Sonargaon museum", "Photography"],
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "baliati-palace",
    name: "Baliati Palace",
    division: "Dhaka",
    district: "Manikganj",
    tagline: "A grand zamindar estate near Dhaka",
    description:
      "A large nineteenth-century palace complex known for its long classical facade, courtyards and local history.",
    bestTime: "November–February",
    duration: "Half day",
    entry: "Ticket required",
    travelTip:
      "Combine with a Manikganj day trip and carry cash for local transport.",
    highlights: ["Zamindar architecture", "Courtyards", "Quiet day trip"],
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "cox-bazar-beach",
    name: "Cox's Bazar Beach",
    division: "Chattogram",
    district: "Cox's Bazar",
    tagline: "Bangladesh's iconic sea escape",
    description:
      "A long sandy coastline with busy town beaches, quieter southern stretches and easy access to Marine Drive.",
    bestTime: "November–March",
    duration: "2–4 days",
    entry: "Free",
    travelTip:
      "Stay inside marked safe zones, follow sea warnings and avoid swimming after dark.",
    highlights: ["Sunset", "Beach walks", "Marine Drive"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sajek-valley",
    name: "Sajek Valley",
    division: "Chattogram",
    district: "Rangamati",
    tagline: "Clouds, hills and slow mornings",
    description:
      "A popular hill destination reached through Khagrachhari, known for ridge views, compact resorts and sunrise scenery.",
    bestTime: "September–March",
    duration: "2–3 days",
    entry: "Local transport rules apply",
    travelTip:
      "Confirm current road access and transport timing before departure.",
    highlights: ["Sunrise", "Konglak ridge", "Cloud views"],
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "nilgiri-bandarban",
    name: "Nilgiri",
    division: "Chattogram",
    district: "Bandarban",
    tagline: "A high hill viewpoint above the clouds",
    description:
      "A scenic hilltop destination south of Bandarban town with broad mountain views and seasonal cloud cover.",
    bestTime: "October–February",
    duration: "Full day",
    entry: "Permit and ticket may apply",
    travelTip:
      "Use an approved local vehicle and confirm current access restrictions.",
    highlights: ["Hill panorama", "Cloud layer", "Scenic drive"],
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ratargul-swamp-forest",
    name: "Ratargul Swamp Forest",
    division: "Sylhet",
    district: "Sylhet",
    tagline: "A quiet boat ride through flooded forest",
    description:
      "A freshwater swamp forest near Sylhet where small boats move through submerged trees during the wet season.",
    bestTime: "July–October",
    duration: "Half day",
    entry: "Boat cost varies",
    travelTip:
      "Wear a life jacket and agree on the complete boat fare before boarding.",
    highlights: ["Boat ride", "Flooded forest", "Birdlife"],
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "jaflong",
    name: "Jaflong",
    division: "Sylhet",
    district: "Sylhet",
    tagline: "River stones beneath Meghalaya hills",
    description:
      "A borderland landscape of river, stone beds and distant green hills, popular as a day trip from Sylhet.",
    bestTime: "November–March",
    duration: "Full day",
    entry: "Mostly free",
    travelTip:
      "Start early and combine nearby sights only if road conditions allow.",
    highlights: ["Piyain River", "Hill views", "Local market"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sreemangal-tea-gardens",
    name: "Sreemangal Tea Gardens",
    division: "Sylhet",
    district: "Moulvibazar",
    tagline: "Tea trails and a gentler pace",
    description:
      "Rolling tea estates, forest trails and quiet roads make Sreemangal one of Bangladesh's best slow-travel destinations.",
    bestTime: "October–March",
    duration: "2–3 days",
    entry: "Varies by estate",
    travelTip:
      "Ask permission before entering private tea estates and use a local guide for forest trails.",
    highlights: ["Tea estates", "Lawachara", "Seven-layer tea"],
    image:
      "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sundarbans",
    name: "Sundarbans",
    division: "Khulna",
    district: "Khulna",
    tagline: "Into the world's great mangrove wilderness",
    description:
      "A vast tidal mangrove landscape explored by licensed boat tours through rivers, creeks and wildlife stations.",
    bestTime: "November–February",
    duration: "2–4 days",
    entry: "Permit and operator package",
    travelTip:
      "Book a licensed operator, carry NID copies and verify weather and permits.",
    highlights: ["Mangrove cruise", "Karamjal", "Wildlife watching"],
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sixty-dome-mosque",
    name: "Sixty Dome Mosque",
    division: "Khulna",
    district: "Bagerhat",
    tagline: "A monumental mosque city of Bengal",
    description:
      "The celebrated historic mosque of Bagerhat, recognized for its many domes, thick brick walls and powerful interior rhythm.",
    bestTime: "November–February",
    duration: "Half day",
    entry: "Ticket may apply",
    travelTip:
      "Dress modestly and combine it with the Khan Jahan Ali shrine area.",
    highlights: ["Historic mosque", "Bagerhat heritage", "Brick architecture"],
    image:
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "rupsha-river",
    name: "Rupsha River",
    division: "Khulna",
    district: "Khulna",
    tagline: "Khulna's wide river horizon",
    description:
      "The Rupsha defines Khulna's riverside character, with bridge views, working boats and golden evening light.",
    bestTime: "October–March",
    duration: "2–3 hours",
    entry: "Free",
    travelTip:
      "Visit near sunset, use a known transport service and avoid isolated river edges after dark.",
    highlights: ["Sunset", "Rupsha Bridge", "River life"],
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "paharpur",
    name: "Paharpur Buddhist Vihara",
    division: "Rajshahi",
    district: "Naogaon",
    tagline: "Ancient learning etched in terracotta",
    description:
      "The ruins of Somapura Mahavihara form one of South Asia's most important early Buddhist monastic complexes.",
    bestTime: "November–February",
    duration: "Full day",
    entry: "Ticket required",
    travelTip:
      "Carry sun protection and combine with an overnight stay if travelling from Rajshahi.",
    highlights: ["Ancient monastery", "Terracotta plaques", "Museum"],
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "puthia-temple-city",
    name: "Puthia Temple Complex",
    division: "Rajshahi",
    district: "Rajshahi",
    tagline: "Terracotta temples beside palace ponds",
    description:
      "A compact heritage area of ornate Hindu temples, a royal palace and large ponds east of Rajshahi city.",
    bestTime: "October–March",
    duration: "Half day",
    entry: "Some sites ticketed",
    travelTip:
      "Visit in soft morning or afternoon light and dress respectfully.",
    highlights: ["Govinda Temple", "Shiva Temple", "Rajbari"],
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "padma-river-rajshahi",
    name: "Padma Riverside",
    division: "Rajshahi",
    district: "Rajshahi",
    tagline: "A broad river evening in the silk city",
    description:
      "Rajshahi's riverside spaces offer open views, seasonal sandbars and relaxed sunset walks.",
    bestTime: "October–March",
    duration: "2–3 hours",
    entry: "Free",
    travelTip:
      "Choose busy public areas and pair the visit with Rajshahi's mango or silk experiences.",
    highlights: ["Sunset", "River walk", "City food"],
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "tajhat-palace",
    name: "Tajhat Palace",
    division: "Rangpur",
    district: "Rangpur",
    tagline: "A graceful palace of northern Bengal",
    description:
      "A restored zamindar palace with a striking staircase, formal facade and museum galleries.",
    bestTime: "October–March",
    duration: "2–3 hours",
    entry: "Ticket required",
    travelTip: "Check museum opening hours before travelling.",
    highlights: ["Palace facade", "Museum", "Gardens"],
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kantajew-temple",
    name: "Kantajew Temple",
    division: "Rangpur",
    district: "Dinajpur",
    tagline: "Bengal's terracotta storytelling masterpiece",
    description:
      "An ornate eighteenth-century temple covered in detailed terracotta panels depicting myth, society and daily life.",
    bestTime: "November–February",
    duration: "Half day",
    entry: "Local ticket may apply",
    travelTip: "Combine with Dinajpur Rajbari if time permits.",
    highlights: ["Terracotta art", "Historic temple", "Photography"],
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "tetulia",
    name: "Tetulia",
    division: "Rangpur",
    district: "Panchagarh",
    tagline: "Tea country at Bangladesh's northern edge",
    description:
      "A quiet northern landscape of tea gardens, open roads and rare clear-season views toward the Himalayas.",
    bestTime: "October–November",
    duration: "2 days",
    entry: "Mostly free",
    travelTip:
      "Mountain visibility is never guaranteed; carry warm layers in winter.",
    highlights: ["Tea gardens", "Northern landscape", "Sunrise"],
    image:
      "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kuakata",
    name: "Kuakata Sea Beach",
    division: "Barishal",
    district: "Patuakhali",
    tagline: "Sunrise and sunset over one sea horizon",
    description:
      "A broad coastal beach known for both sunrise and sunset views, with nearby fishing communities and Buddhist heritage.",
    bestTime: "November–February",
    duration: "2–3 days",
    entry: "Free",
    travelTip:
      "Check road and weather conditions and stay within safe beach areas.",
    highlights: ["Sunrise", "Sunset", "Coastal culture"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "floating-guava-market",
    name: "Floating Guava Market",
    division: "Barishal",
    district: "Jhalokathi",
    tagline: "Fruit boats on a maze of canals",
    description:
      "A seasonal river market where growers trade guavas from wooden boats around the canals of Bhimruli.",
    bestTime: "July–September",
    duration: "Half day",
    entry: "Boat hire required",
    travelTip:
      "Go early in the morning during guava season and wear a life jacket.",
    highlights: ["Boat market", "Canal journey", "Seasonal fruit"],
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "durga-sagar",
    name: "Durga Sagar",
    division: "Barishal",
    district: "Barishal",
    tagline: "A calm historic lake outside the city",
    description:
      "A large historic pond surrounded by trees, suited to a short, quiet stop near Barishal.",
    bestTime: "October–March",
    duration: "1–2 hours",
    entry: "Local fee may apply",
    travelTip: "Best combined with another nearby Barishal attraction.",
    highlights: ["Lake views", "Birds", "Quiet picnic"],
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "birishiri",
    name: "Birishiri",
    division: "Mymensingh",
    district: "Netrokona",
    tagline: "Blue-green water and Garo hill country",
    description:
      "A rural landscape known for ceramic hills, the Someshwari River and nearby Indigenous cultural experiences.",
    bestTime: "November–March",
    duration: "2 days",
    entry: "Local access varies",
    travelTip:
      "Roads can be rough; use a local guide and seek permission before photographing communities.",
    highlights: ["Someshwari River", "Ceramic hills", "Cultural museum"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "muktagacha-rajbari",
    name: "Muktagacha Rajbari",
    division: "Mymensingh",
    district: "Mymensingh",
    tagline: "A fading palace with enduring character",
    description:
      "A historic zamindar residence known for carved details, courtyards and the cultural memory of Muktagacha.",
    bestTime: "October–March",
    duration: "Half day",
    entry: "Local ticket may apply",
    travelTip:
      "Pair the trip with local monda sweets and check site access first.",
    highlights: ["Rajbari", "Old architecture", "Muktagacha monda"],
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "shoshi-lodge",
    name: "Shoshi Lodge",
    division: "Mymensingh",
    district: "Mymensingh",
    tagline: "A pink riverside palace in Mymensingh",
    description:
      "An elegant historic mansion with a distinctive facade and traces of the city's zamindar-era architecture.",
    bestTime: "November–February",
    duration: "1–2 hours",
    entry: "Access may be restricted",
    travelTip:
      "Confirm public access before visiting and combine with the Brahmaputra riverside.",
    highlights: ["Palace facade", "City heritage", "Photography"],
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  },
];
export const getPlace = (slug: string) => places.find((p) => p.slug === slug);
