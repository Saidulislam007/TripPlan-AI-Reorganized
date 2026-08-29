"use client";
import { Heart, MapPin } from "lucide-react";

const coxDays = [
  {
    day: "Day 1",
    title: "Sea breeze & a slow arrival",
    sub: "Sugandha · Laboni Beach",
    items: [
      [
        "08:00",
        "AC bus from Dhaka",
        "Green Line counter, Kalabagan · traffic buffer included",
      ],
      ["17:00", "Sunset at Laboni Beach", "Easy walk, family-friendly zone"],
      ["20:00", "Dinner at Poushee", "Bangla seafood platter · ৳1,200 for 3"],
    ],
  },
  {
    day: "Day 2",
    title: "Marine Drive to Inani",
    sub: "Himchari · Inani Beach",
    items: [
      [
        "08:30",
        "Reserved CNG pickup",
        "Hotel lobby · negotiated day rate ৳1,800",
      ],
      ["10:00", "Himchari viewpoint", "Allow 60 min · carry water"],
      ["13:30", "Lunch near Inani", "Fresh fish, rice & bhorta · halal"],
      ["16:30", "Inani coral beach", "Best light for photos"],
    ],
  },
  {
    day: "Day 3",
    title: "Local flavours & quiet corners",
    sub: "Ramu · Burmese Market",
    items: [
      ["09:00", "Ramu cultural visit", "Modest dress recommended"],
      ["14:30", "Burmese Market", "Local snacks and shopping"],
      ["18:00", "Free evening", "Rest or beach walk"],
    ],
  },
  {
    day: "Day 4",
    title: "Easy checkout & return",
    sub: "Hotel · Cox's Bazar Bus Terminal",
    items: [
      [
        "09:00",
        "Breakfast and checkout",
        "Keep luggage at reception after checkout",
      ],
      [
        "11:00",
        "Last-minute local shopping",
        "Dry fish market or Burmese Market",
      ],
      [
        "20:00",
        "Overnight coach to Dhaka",
        "Reach the counter at least 30 minutes early",
      ],
    ],
  },
];

const khulnaDays = [
  {
    day: "Day 1",
    title: "Arrive in Khulna & meet the Rupsha",
    sub: "Dhaka → Khulna · Rupsha River",
    items: [
      [
        "07:00",
        "Depart from Dhaka",
        "Intercity train or AC coach · allow 7–9 hours with traffic buffer",
      ],
      [
        "16:30",
        "Hotel check-in & rest",
        "Choose a central stay around KDA Avenue or Shib Bari",
      ],
      [
        "18:00",
        "Rupsha riverside sunset",
        "Short local ride · easy first-evening walk",
      ],
      [
        "20:00",
        "Khulna-style dinner",
        "Chui jhal, rice and bhorta · match your selected food preference",
      ],
    ],
  },
  {
    day: "Day 2",
    title: "The historic mosques of Bagerhat",
    sub: "Khulna → Bagerhat → Khulna · about 60 km loop",
    items: [
      [
        "08:00",
        "Reserved car or microbus pickup",
        "Start early to avoid city traffic · roughly 1–1.5 hours each way",
      ],
      [
        "10:00",
        "Sixty Dome Mosque",
        "Allow 60–90 minutes · modest dress recommended",
      ],
      [
        "12:00",
        "Khan Jahan Ali shrine area",
        "Visit the historic complex and nearby water tank",
      ],
      [
        "13:30",
        "Lunch in Bagerhat",
        "Local Bangla meal before returning to Khulna",
      ],
      ["17:00", "Return and rest", "Buffer included for road conditions"],
    ],
  },
  {
    day: "Day 3",
    title: "Sundarbans gateway day",
    sub: "Khulna → Mongla → Karamjal",
    items: [
      [
        "06:30",
        "Leave for Mongla",
        "Pre-book a licensed boat/operator; carry NID copies",
      ],
      [
        "09:30",
        "Boat toward Karamjal",
        "Permit and weather conditions must be confirmed by operator",
      ],
      [
        "11:00",
        "Karamjal nature trail",
        "Mangrove walk, wildlife interpretation and watch point",
      ],
      [
        "13:30",
        "Lunch with the tour",
        "Confirm clean water and dietary preference in advance",
      ],
      [
        "17:30",
        "Return toward Khulna",
        "Keep evening flexible for river and road delays",
      ],
    ],
  },
  {
    day: "Day 4",
    title: "Khulna city, food & local rhythm",
    sub: "Shib Bari · New Market · Rupsha",
    items: [
      [
        "09:30",
        "Slow city morning",
        "Breakfast, rest and an unhurried local walk",
      ],
      [
        "11:30",
        "Khulna Divisional Museum",
        "Confirm opening hours locally before leaving",
      ],
      ["14:00", "Local lunch", "Try chui jhal or a lighter family meal"],
      [
        "16:30",
        "New Market & local shopping",
        "Jute goods, snacks and essentials",
      ],
      [
        "18:30",
        "Rupsha bridge viewpoint",
        "Finish with golden-hour river views",
      ],
    ],
  },
  {
    day: "Day 5",
    title: "Easy checkout & journey home",
    sub: "Khulna → Dhaka",
    items: [
      ["08:30", "Breakfast and packing", "Recheck tickets, NID and power bank"],
      ["10:30", "Free time near hotel", "Keep luggage with reception"],
      [
        "13:00",
        "Lunch before departure",
        "Avoid a heavy meal before the long ride",
      ],
      [
        "14:30",
        "Depart for Dhaka",
        "Reach station or counter 30–45 minutes early",
      ],
    ],
  },
];

function buildGenericDays(destination: string, start: string, count: number) {
  const place = destination.split(",")[0];
  const templates = [
    [
      "Arrival & an easy first look",
      `${start.split(",")[0]} → ${place}`,
      [
        [
          "08:00",
          `Travel toward ${place}`,
          "Choose train, coach or launch based on availability; keep a realistic delay buffer",
        ],
        [
          "16:00",
          "Check in and rest",
          "Confirm hotel location and return transport before heading out",
        ],
        [
          "17:30",
          `Easy walk around ${place}`,
          "Stay near your accommodation on arrival day",
        ],
        [
          "20:00",
          "Local dinner",
          "Choose a busy, well-reviewed family restaurant",
        ],
      ],
    ],
    [
      `Explore the best of ${place}`,
      `${place} local route`,
      [
        [
          "08:30",
          "Start after breakfast",
          "Group nearby sights in one route to reduce local transport cost",
        ],
        [
          "10:00",
          "Main local landmark",
          "Allow enough time instead of rushing through stops",
        ],
        [
          "13:00",
          "Lunch and prayer/rest break",
          "Keep a 60–90 minute midday buffer",
        ],
        [
          "15:30",
          "Second nearby experience",
          "Confirm local opening and access conditions",
        ],
        [
          "18:00",
          "Return before late evening",
          "Keep the final stop close to your hotel",
        ],
      ],
    ],
    [
      "Nature, culture & local flavours",
      `${place} day experience`,
      [
        [
          "08:00",
          "Pre-book local transport",
          "Agree on total fare and waiting time before starting",
        ],
        [
          "10:00",
          "Nature or cultural experience",
          "Carry water, cash and offline copies of your plan",
        ],
        [
          "13:30",
          "Regional lunch",
          "Try a suitable local dish within your food preference",
        ],
        [
          "16:30",
          "Market or sunset stop",
          "Leave enough time to return safely",
        ],
      ],
    ],
    [
      "A flexible local day",
      `${place} · relaxed route`,
      [
        [
          "09:30",
          "Slow breakfast",
          "Use this day for weather backup or a missed attraction",
        ],
        [
          "11:00",
          "Local neighbourhood discovery",
          "Ask your hotel for the safest current route",
        ],
        [
          "14:00",
          "Food and shopping",
          "Keep 10% of the budget unspent for emergencies",
        ],
        ["18:00", "Free evening", "Rest and prepare for the return journey"],
      ],
    ],
    [
      "Checkout & return",
      `${place} → ${start.split(",")[0]}`,
      [
        [
          "08:30",
          "Breakfast and packing",
          "Check tickets, NID, chargers and medicines",
        ],
        ["10:30", "Short final stop", "Keep luggage at the hotel if possible"],
        [
          "13:00",
          "Lunch before departure",
          "Reach the station or counter 30–45 minutes early",
        ],
        [
          "14:30",
          `Return toward ${start.split(",")[0]}`,
          "Keep family informed and share live location when possible",
        ],
      ],
    ],
  ];
  return Array.from({ length: count }, (_, i) => {
    const t = templates[Math.min(i, templates.length - 1)] as any;
    return {
      day: `Day ${i + 1}`,
      title: i >= 5 ? `Extra day in ${place}` : t[0],
      sub: i >= 5 ? `${place} · flexible plan` : t[1],
      items:
        i >= 5
          ? [
              [
                "09:00",
                "Choose a nearby experience",
                "Use this flexible day for a locally confirmed attraction",
              ],
              [
                "13:00",
                "Lunch and rest",
                "Stay within your remaining daily budget",
              ],
              ["17:00", "Sunset or market walk", "Return before late evening"],
            ]
          : t[2],
    };
  });
}

export function DayCards({
  destination = "Cox's Bazar, Chattogram",
  start = "Dhaka, Dhaka",
  days = 4,
}: {
  destination?: string;
  start?: string;
  days?: number;
}) {
  const key = destination.toLowerCase();
  const specific = key.includes("khulna")
    ? khulnaDays
    : key.includes("cox")
      ? coxDays
      : [];
  const source = specific.length
    ? [
        ...specific,
        ...buildGenericDays(destination, start, days).slice(specific.length),
      ]
    : buildGenericDays(destination, start, days);
  const itineraryDays = source.slice(0, days);
  return (
    <div className="space-y-5">
      {itineraryDays.map((d) => (
        <article
          key={d.day}
          className="tf-day-card overflow-hidden rounded-2xl border bg-white"
        >
          <div className="flex items-start justify-between border-b bg-[#faf8f2] p-5">
            <div className="flex gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#123f36] text-xs font-bold text-white">
                {d.day}
              </span>
              <div>
                <h3 className="font-serif text-xl">{d.title}</h3>
                <p className="mt-1 text-sm text-[#71817a]">
                  <MapPin className="mr-1 inline size-3" />
                  {d.sub}
                </p>
              </div>
            </div>
            <Heart className="size-5 text-[#98a8a2]" />
          </div>
          <div className="p-5">
            {d.items.map(([time, title, desc]: [string, string, string]) => (
              <div
                key={title}
                className="grid grid-cols-[60px_1fr] gap-3 border-l border-[#d9c9a8] pb-5"
              >
                <div className="-ml-px text-xs font-bold text-[#b87519]">
                  {time}
                </div>
                <div>
                  <h4 className="font-semibold">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-[#657770]">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
