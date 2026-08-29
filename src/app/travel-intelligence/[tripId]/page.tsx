import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  BedDouble,
  Bus,
  CheckCircle2,
  CloudRain,
  Download,
  Heart,
  Hospital,
  MapPin,
  Pencil,
  Phone,
  RefreshCw,
  Share2,
  ShieldCheck,
  Sparkles,
  Utensils,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default async function Page({
  searchParams,
}: {
  params: Promise<{ tripId: string }>;
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const q = await searchParams;
  const destination = q.destination || "Cox's Bazar";
  const start = q.start || "Dhaka";
  const budget = Number(q.budget) || 25000;
  const travellers = Number(q.travellers) || 4;
  const key = destination.toLowerCase();
  const profile = key.includes("khulna")
    ? {
        sights: ["Rupsha riverside", "Sixty Dome Mosque", "Sundarbans gateway"],
        stays: [
          ["Khulna River View Inn", "Rupsha · ৳3,085"],
          ["City Inn Khulna", "City centre · ৳3,800"],
        ],
        foods: [
          ["Chui jhal beef", "৳380 · Khulna signature"],
          ["Golda chingri", "৳520 · Halal seafood"],
          ["Sandesh", "৳180 · Local sweet"],
        ],
      }
    : key.includes("sylhet") || key.includes("sreemangal")
      ? {
          sights: ["Tea garden trail", "Ratargul", "Jaflong riverside"],
          stays: [
            ["Sylhet Tea Garden Resort", "Airport Road · ৳5,330"],
            ["Sreemangal Green Stay", "Tea estate · ৳4,200"],
          ],
          foods: [
            ["Satkora beef", "৳420 · Sylhet signature"],
            ["Akni", "৳280 · Halal local rice"],
            ["Seven-layer tea", "৳120 · Local drink"],
          ],
        }
      : {
          sights: ["Laboni Beach", "Himchari & Inani", "Ramu cultural area"],
          stays: [
            ["Laboni Grand Hotel", "4 min from beach · ৳4,315"],
            ["Sea Pearl Bay Retreat", "Inani · ৳6,330"],
          ],
          foods: [
            ["Rupchanda fry", "৳450 · Halal seafood"],
            ["Loitta shutki bhorta", "৳180 · Local Bangla"],
            ["Chingri bhuna", "৳380 · Medium spice"],
          ],
        };
  const days = [
    {
      title: "Arrival, check-in and a gentle first evening",
      area: `${start} → ${destination} · ${profile.sights[0]}`,
      items: [
        `06:30 — Leave ${start} with traffic buffer`,
        "16:30 — Hotel check-in and rest",
        `17:30 — Explore ${profile.sights[0]}`,
        "20:00 — Halal local dinner",
      ],
    },
    {
      title: "Major sights grouped into one route",
      area: `${profile.sights[1]} · nearby stops`,
      items: [
        "08:30 — Reserved local transport pickup",
        `10:00 — Explore ${profile.sights[1]}`,
        "13:30 — Regional lunch nearby",
        "16:30 — Photo and rest stop",
      ],
    },
    {
      title: "Local culture and easy discovery",
      area: `${profile.sights[2]} · local market`,
      items: [
        `09:00 — Visit ${profile.sights[2]}`,
        "13:00 — Local Bangla lunch",
        "15:00 — Local market and shopping",
        "18:00 — Free evening",
      ],
    },
    {
      title: "Slow morning and return journey",
      area: `${destination} → ${start}`,
      items: [
        "08:00 — Breakfast and packing",
        "10:00 — Souvenir stop",
        "12:30 — Check-out and lunch",
        `14:00 — Return journey to ${start}`,
      ],
    },
  ];
  const duration = Math.min(Number(q.days) || 4, days.length);
  return (
    <main className="bg-[#f7f4ed] px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/travel-intelligence"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#64766f] hover:text-[#c77c19]"
          >
            <ArrowLeft className="size-4" /> Create another report
          </Link>
          <section className="mt-5 overflow-hidden rounded-[2rem] bg-[#103f35] p-6 text-white sm:p-9">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#efb656]">
                  AI Travel Intelligence Report
                </p>
                <h1 className="mt-3 font-serif text-4xl sm:text-6xl">
                  {destination}, intelligently planned.
                </h1>
                <p className="mt-3 text-sm text-white/70">
                  {duration} days · {travellers} travellers ·{" "}
                  {q.style || "Family"} · {q.pace || "Balanced"} pace · Starting
                  from {start}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <Share2 /> Share
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <Download /> PDF
                </Button>
                <Button asChild className="bg-[#e7a332] text-[#103f35]">
                  <Link href="/dashboard/ai-trips">
                    <Heart /> Save plan
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                [
                  Wallet,
                  `৳${Math.round(budget * 0.92).toLocaleString()}`,
                  "Estimated total",
                ],
                [Bus, "11h 30m", "Route with buffer"],
                [CloudRain, "28°C · Rain", "Weather outlook"],
                [Sparkles, "94%", "AI confidence"],
              ].map(([Icon, value, label]) => (
                <div
                  key={String(label)}
                  className="rounded-2xl bg-white/10 p-4"
                >
                  <Icon className="size-5 text-[#efb656]" />
                  <b className="mt-3 block text-xl">{String(value)}</b>
                  <span className="text-xs text-white/55">{String(label)}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-7 grid gap-6 xl:grid-cols-[1fr_340px]">
            <div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#c77c19]">
                    Your realistic schedule
                  </p>
                  <h2 className="mt-2 font-serif text-3xl">
                    Day-by-day itinerary
                  </h2>
                </div>
                <Button variant="outline">
                  <Pencil /> Edit
                </Button>
              </div>
              <div className="mt-5 space-y-4">
                {days.slice(0, duration).map((d, i) => (
                  <article
                    key={d.title}
                    className="rounded-3xl border border-[#ded9cc] bg-white p-6"
                  >
                    <div className="flex gap-4">
                      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#123f36] text-sm font-bold text-white">
                        D{i + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-serif text-xl sm:text-2xl">
                          {d.title}
                        </h3>
                        <p className="mt-1 text-xs text-[#c77c19]">
                          <MapPin className="mr-1 inline size-3" />
                          {d.area}
                        </p>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                          {d.items.map((x) => (
                            <p
                              key={x}
                              className="rounded-xl bg-[#f7f4ed] p-3 text-sm text-[#60736b]"
                            >
                              {x}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <article className="rounded-3xl border border-[#ded9cc] bg-white p-6">
                  <BedDouble className="text-[#c77c19]" />
                  <h2 className="mt-3 font-serif text-2xl">
                    Recommended stays
                  </h2>
                  <div className="mt-4 space-y-3">
                    {profile.stays.map(([n, m]) => (
                      <div key={n} className="rounded-2xl bg-[#f7f4ed] p-4">
                        <b>{n}</b>
                        <p className="text-xs text-[#72817b]">{m}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="mt-4 w-full">
                    <Link href="/hotels">Compare hotels</Link>
                  </Button>
                </article>
                <article className="rounded-3xl border border-[#ded9cc] bg-white p-6">
                  <Utensils className="text-[#c77c19]" />
                  <h2 className="mt-3 font-serif text-2xl">
                    Division-specific food
                  </h2>
                  <div className="mt-4 space-y-3">
                    {profile.foods.map(([n, m]) => (
                      <div key={n} className="rounded-2xl bg-[#f7f4ed] p-4">
                        <b>{n}</b>
                        <p className="text-xs text-[#72817b]">{m}</p>
                      </div>
                    ))}
                  </div>
                  <Button asChild variant="outline" className="mt-4 w-full">
                    <Link href="/food">Open food guide</Link>
                  </Button>
                </article>
              </div>
              <article className="mt-7 rounded-3xl border border-[#ded9cc] bg-white p-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-[#c77c19]" />
                  <h2 className="font-serif text-2xl">
                    Why AI selected this plan
                  </h2>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {[
                    `Arrival day stays light after the long ${start} route.`,
                    `${destination} attractions are grouped to reduce repeat transport cost.`,
                    "Family rest and prayer windows are included.",
                    "Food and stay choices keep the total below budget.",
                  ].map((x) => (
                    <p
                      key={x}
                      className="flex gap-2 rounded-2xl bg-[#edf3ef] p-4 text-sm"
                    >
                      <CheckCircle2 className="size-5 shrink-0 text-[#3b8062]" />
                      {x}
                    </p>
                  ))}
                </div>
              </article>
            </div>
            <aside className="space-y-5">
              <article className="rounded-3xl border border-[#ded9cc] bg-white p-6">
                <h2 className="font-serif text-2xl">Budget reasoning</h2>
                {[
                  ["Transport", 6200],
                  ["Stay", 8200],
                  ["Food", 4800],
                  ["Local travel", 2300],
                  ["Emergency buffer", 1500],
                ].map(([l, v]) => (
                  <div
                    key={String(l)}
                    className="mt-4 flex justify-between border-b border-[#ece8de] pb-3 text-sm"
                  >
                    <span>{String(l)}</span>
                    <b>৳{Number(v).toLocaleString()}</b>
                  </div>
                ))}
                <div className="mt-4 flex justify-between">
                  <b>Plan total</b>
                  <b className="text-xl text-[#c77c19]">৳23,000</b>
                </div>
                <p className="mt-2 text-xs text-[#74837d]">
                  ৳{Math.max(budget - 23000, 0).toLocaleString()} remains from
                  your stated budget.
                </p>
              </article>
              <article className="rounded-3xl bg-[#fff3d8] p-6">
                <CloudRain className="text-[#b87316]" />
                <h2 className="mt-3 font-serif text-xl">Weather preparation</h2>
                <p className="mt-2 text-sm leading-6 text-[#76613e]">
                  Carry a light rain jacket, waterproof phone pouch, sandals and
                  ORS. Outdoor timing may shift during heavy rain.
                </p>
              </article>
              <article className="rounded-3xl border border-[#ded9cc] bg-white p-6">
                <ShieldCheck className="text-[#3a765d]" />
                <h2 className="mt-3 font-serif text-xl">Safety & emergency</h2>
                <div className="mt-4 space-y-3 text-sm">
                  <p>
                    <Phone className="mr-2 inline size-4 text-[#c77c19]" />
                    National emergency: <b>999</b>
                  </p>
                  <p>
                    <Hospital className="mr-2 inline size-4 text-[#c77c19]" />
                    {destination} nearest Sadar Hospital
                  </p>
                  <p>
                    <AlertTriangle className="mr-2 inline size-4 text-[#c77c19]" />
                    Follow local authority and weather warnings
                  </p>
                </div>
              </article>
              <article className="rounded-3xl border border-[#ded9cc] bg-white p-6">
                <h2 className="font-serif text-xl">Prayer & rest stops</h2>
                <p className="mt-3 text-sm leading-6 text-[#66776f]">
                  Highway rest, meal and prayer breaks plus hotel rest after
                  arrival are included.
                </p>
              </article>
              <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline">
                  <Link href="/travel-intelligence">
                    <RefreshCw /> Regenerate
                  </Link>
                </Button>
                <Button asChild className="bg-[#123f36]">
                  <Link href="/dashboard/ai-trips">My AI trips</Link>
                </Button>
              </div>
              <div className="rounded-2xl bg-[#edf3ef] p-4">
                <div className="flex justify-between text-sm">
                  <span>AI confidence</span>
                  <b>94%</b>
                </div>
                <Progress value={94} className="mt-2 [&>div]:bg-[#c77c19]" />
                <p className="mt-2 text-xs text-[#718079]">
                  Based on sample route, cost and destination intelligence.
                </p>
              </div>
            </aside>
          </section>
        </div>
      </main>
  );
}
