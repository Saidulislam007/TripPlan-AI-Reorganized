export type Hotel = {
  slug: string;
  name: string;
  location: string;
  destination: string;
  distance: string;
  rating: number;
  reviews: number;
  price: number;
  tax: number;
  discount: number;
  room: string;
  image: string;
  images: string[];
  amenities: string[];
  badges: string[];
  scores: {
    cleanliness: number;
    washroom: number;
    staff: number;
    location: number;
  };
  cancellation: string;
  payAtHotel: boolean;
  lat: number;
  lng: number;
};
export const hotels: Hotel[] = [
  {
    slug: "sea-pearl-bay",
    name: "Sea Pearl Bay Retreat",
    location: "Inani Beach Road",
    destination: "Cox's Bazar",
    distance: "350 m from beach",
    rating: 4.7,
    reviews: 428,
    price: 6200,
    tax: 930,
    discount: 800,
    room: "Deluxe Sea View",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Wi-Fi",
      "AC",
      "Hot water",
      "Breakfast",
      "Generator",
      "CCTV",
      "Pool",
    ],
    badges: ["Family friendly", "Verified photos"],
    scores: { cleanliness: 4.8, washroom: 4.6, staff: 4.8, location: 4.7 },
    cancellation: "Free cancellation until 48 hours before check-in",
    payAtHotel: true,
    lat: 65,
    lng: 35,
  },
  {
    slug: "laboni-grand",
    name: "Laboni Grand Hotel",
    location: "Laboni Point",
    destination: "Cox's Bazar",
    distance: "4 min walk to beach",
    rating: 4.4,
    reviews: 316,
    price: 4100,
    tax: 615,
    discount: 400,
    room: "Superior Double",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: ["Wi-Fi", "AC", "Hot water", "Breakfast", "Generator", "CCTV"],
    badges: ["Couple friendly", "Pay at hotel"],
    scores: { cleanliness: 4.5, washroom: 4.3, staff: 4.6, location: 4.8 },
    cancellation: "Free cancellation until 24 hours before check-in",
    payAtHotel: true,
    lat: 40,
    lng: 58,
  },
  {
    slug: "sajek-cloud-house",
    name: "Sajek Cloud House",
    location: "Ruilui Para",
    destination: "Sajek",
    distance: "8 min walk to helipad",
    rating: 4.6,
    reviews: 187,
    price: 3600,
    tax: 540,
    discount: 300,
    room: "Valley View Cottage",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: ["Hot water", "Breakfast", "Generator", "CCTV", "Balcony"],
    badges: ["Mountain view", "Family friendly"],
    scores: { cleanliness: 4.7, washroom: 4.4, staff: 4.8, location: 4.6 },
    cancellation: "50% refund until 72 hours before check-in",
    payAtHotel: false,
    lat: 28,
    lng: 30,
  },
  {
    slug: "sylhet-tea-resort",
    name: "Sylhet Tea Garden Resort",
    location: "Airport Road",
    destination: "Sylhet",
    distance: "15 min from airport",
    rating: 4.5,
    reviews: 251,
    price: 5200,
    tax: 780,
    discount: 650,
    room: "Garden View King",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Wi-Fi",
      "AC",
      "Hot water",
      "Breakfast",
      "Generator",
      "CCTV",
      "Pool",
    ],
    badges: ["Airport pickup", "Free cancellation"],
    scores: { cleanliness: 4.6, washroom: 4.5, staff: 4.7, location: 4.4 },
    cancellation: "Free cancellation until 48 hours before check-in",
    payAtHotel: true,
    lat: 70,
    lng: 67,
  },
  {
    slug: "khulna-river-view",
    name: "Khulna River View Inn",
    location: "Rupsha Bridge Road",
    destination: "Khulna",
    distance: "12 min from city centre",
    rating: 4.3,
    reviews: 143,
    price: 2900,
    tax: 435,
    discount: 250,
    room: "Executive Double",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Wi-Fi",
      "AC",
      "Hot water",
      "Breakfast",
      "Generator",
      "CCTV",
      "Parking",
    ],
    badges: ["Business friendly", "Pay at hotel"],
    scores: { cleanliness: 4.4, washroom: 4.2, staff: 4.5, location: 4.2 },
    cancellation: "Free cancellation until 24 hours before check-in",
    payAtHotel: true,
    lat: 55,
    lng: 75,
  },
  {
    slug: "kuakata-sunset-lodge",
    name: "Kuakata Sunset Lodge",
    location: "Zero Point Road",
    destination: "Kuakata",
    distance: "500 m from beach",
    rating: 4.2,
    reviews: 119,
    price: 2700,
    tax: 405,
    discount: 200,
    room: "Family Triple",
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: ["Wi-Fi", "AC", "Hot water", "Generator", "CCTV", "Parking"],
    badges: ["Budget pick", "Family friendly"],
    scores: { cleanliness: 4.3, washroom: 4.0, staff: 4.4, location: 4.5 },
    cancellation: "One date change allowed",
    payAtHotel: true,
    lat: 24,
    lng: 70,
  },
  {
    slug: "dhaka-lakeview-suites",
    name: "Dhaka Lakeview Suites",
    location: "Dhanmondi 27",
    destination: "Dhaka",
    distance: "12 min from National Museum",
    rating: 4.5,
    reviews: 238,
    price: 4800,
    tax: 720,
    discount: 500,
    room: "Premium King",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: [
      "Wi-Fi",
      "AC",
      "Hot water",
      "Breakfast",
      "Generator",
      "CCTV",
      "Parking",
    ],
    badges: ["City stay", "Free cancellation"],
    scores: { cleanliness: 4.6, washroom: 4.5, staff: 4.6, location: 4.7 },
    cancellation: "Free cancellation until 24 hours before check-in",
    payAtHotel: true,
    lat: 45,
    lng: 52,
  },
  {
    slug: "rajshahi-padma-heritage",
    name: "Padma Heritage Hotel",
    location: "Padma Garden Road",
    destination: "Rajshahi",
    distance: "8 min from riverside",
    rating: 4.4,
    reviews: 167,
    price: 3400,
    tax: 510,
    discount: 300,
    room: "River View Double",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    ],
    amenities: ["Wi-Fi", "AC", "Hot water", "Breakfast", "Generator", "CCTV"],
    badges: ["Heritage route", "Pay at hotel"],
    scores: { cleanliness: 4.5, washroom: 4.3, staff: 4.6, location: 4.7 },
    cancellation: "Free cancellation until 48 hours before check-in",
    payAtHotel: true,
    lat: 61,
    lng: 44,
  },
];
export const hotelBySlug = (slug: string) =>
  hotels.find((h) => h.slug === slug);
export const totalPrice = (h: Hotel) => h.price + h.tax - h.discount;
export const hotelDivision = (h: Hotel) => {
  if (
    ["Chattogram", "Cox's Bazar", "Sajek", "Bandarban", "Rangamati"].includes(
      h.destination,
    )
  )
    return "Chattogram";
  if (h.destination === "Sylhet") return "Sylhet";
  if (h.destination === "Khulna") return "Khulna";
  if (h.destination === "Kuakata") return "Barishal";
  if (h.destination === "Rajshahi") return "Rajshahi";
  return "Dhaka";
};
