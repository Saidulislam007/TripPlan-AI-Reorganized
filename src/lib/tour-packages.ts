export type TourPackage = {
  slug: string;
  title: string;
  destination: string;
  division: string;
  start: string;
  duration: string;
  days: number;
  date: string;
  price: number;
  oldPrice: number;
  seats: number;
  type: string;
  transport: string;
  hotel: string;
  meals: string;
  rating: number;
  image: string;
  tags: string[];
};

export const tourPackages: TourPackage[] = [
  {
    slug: "coxs-bazar-family-escape",
    title: "Cox’s Bazar Family Escape",
    destination: "Cox’s Bazar",
    division: "Chattogram",
    start: "Dhaka",
    duration: "3 days · 2 nights",
    days: 3,
    date: "18 September 2026",
    price: 8900,
    oldPrice: 9800,
    seats: 8,
    type: "Family",
    transport: "AC business-class bus",
    hotel: "Family hotel · 2 nights",
    meals: "6 meals included",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    tags: ["Beach", "Child-friendly", "Group departure"],
  },
  {
    slug: "sajek-weekend-clouds",
    title: "Sajek Weekend Above the Clouds",
    destination: "Sajek Valley",
    division: "Chattogram",
    start: "Dhaka",
    duration: "2 days · 1 night",
    days: 2,
    date: "25 September 2026",
    price: 6200,
    oldPrice: 6900,
    seats: 5,
    type: "Friends",
    transport: "AC bus + reserved Chander Gari",
    hotel: "Hill-view resort · 1 night",
    meals: "4 meals included",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=85",
    tags: ["Weekend", "Adventure", "Almost full"],
  },
  {
    slug: "sreemangal-tea-trail",
    title: "Sreemangal Tea & Rainforest Trail",
    destination: "Sreemangal",
    division: "Sylhet",
    start: "Dhaka",
    duration: "3 days · 2 nights",
    days: 3,
    date: "2 October 2026",
    price: 7900,
    oldPrice: 8500,
    seats: 12,
    type: "Couple",
    transport: "AC train + local microbus",
    hotel: "Eco resort · 2 nights",
    meals: "5 meals included",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
    tags: ["Nature", "Relaxed", "Couple-friendly"],
  },
  {
    slug: "sundarbans-river-expedition",
    title: "Sundarbans River Expedition",
    destination: "Sundarbans",
    division: "Khulna",
    start: "Khulna",
    duration: "3 days · 2 nights",
    days: 3,
    date: "16 October 2026",
    price: 12500,
    oldPrice: 13900,
    seats: 14,
    type: "Group",
    transport: "Tour vessel + pickup transfer",
    hotel: "Private cabin · 2 nights",
    meals: "All meals included",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85",
    tags: ["Wildlife", "All-inclusive", "Guide included"],
  },
];

export function getTourPackage(slug: string) {
  return tourPackages.find((item) => item.slug === slug) || tourPackages[0];
}
