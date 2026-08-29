"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BedDouble,
  Bus,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Download,
  Heart,
  MapPin,
  Minus,
  Phone,
  Plus,
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  TicketCheck,
  TrainFront,
  Users,
  Utensils,
  WalletCards,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TourPackage, tourPackages } from "@/lib/tour-packages";

const money = (value: number) => `৳${value.toLocaleString("en-BD")}`;

export function TourPackagesPage() {
  const [division, setDivision] = useState("All divisions");
  const [type, setType] = useState("All styles");
  const [query, setQuery] = useState("");
  const [budget, setBudget] = useState("Any budget");
  const shown = useMemo(
    () =>
      tourPackages.filter(
        (item) =>
          (division === "All divisions" || item.division === division) &&
          (type === "All styles" || item.type === type) &&
          (budget === "Any budget" ||
            (budget === "Under ৳8,000"
              ? item.price < 8000
              : item.price >= 8000)) &&
          `${item.title} ${item.destination}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [division, type, query, budget],
  );

  return (
    <main className="bg-[#f7f4ed] text-[#123f36]">
        <section className="relative isolate overflow-hidden bg-[#103c33] px-5 py-20 text-white lg:px-8 lg:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,43,36,.96),rgba(8,43,36,.66)),url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center" />
          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                <Sparkles className="size-4 text-[#efb24d]" /> Operated by
                TripPlan AI
              </div>
              <h1 className="mt-7 font-serif text-5xl leading-[1.03] sm:text-7xl">
                একটি package।
                <span className="block italic text-[#efb24d]">
                  পুরো journey নিশ্চিন্ত।
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d4e3df]">
                যাত্রার শুরু থেকে নিরাপদে বাড়ি ফেরা পর্যন্ত—transport, verified
                stay, meals, sightseeing এবং coordinator support-সহ স্বচ্ছ tour
                package।
              </p>
            </div>
            <div className="mt-10 grid gap-3 rounded-[1.75rem] border border-white/15 bg-[#fffdf8]/95 p-4 text-[#123f36] shadow-2xl backdrop-blur md:grid-cols-[1.2fr_1fr_1fr_1fr_auto]">
              <div className="relative">
                <Search className="absolute left-3 top-3.5 size-4 text-[#8a9792]" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="h-11 border-0 bg-white pl-9 shadow-none"
                  placeholder="Where do you want to go?"
                />
              </div>
              <Select value={division} onValueChange={setDivision}>
                <SelectTrigger className="h-11 w-full border-0 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["All divisions", "Chattogram", "Sylhet", "Khulna"].map(
                    (x) => (
                      <SelectItem value={x} key={x}>
                        {x}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="h-11 w-full border-0 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["All styles", "Family", "Friends", "Couple", "Group"].map(
                    (x) => (
                      <SelectItem value={x} key={x}>
                        {x}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger className="h-11 w-full border-0 bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {["Any budget", "Under ৳8,000", "৳8,000 and above"].map(
                    (x) => (
                      <SelectItem value={x} key={x}>
                        {x}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
              <Button className="h-11 bg-[#e7a332] text-[#123f36] hover:bg-[#f0b34b]">
                Explore
              </Button>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#bd7718]">
                  Explore every package
                </p>
                <h2 className="mt-2 font-serif text-4xl">
                  Ready when you are.
                </h2>
              </div>
              <p className="text-sm text-[#72817b]">
                {shown.length} verified packages found
              </p>
            </div>
            <div className="mt-9 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {shown.map((item) => (
                <PackageCard key={item.slug} item={item} />
              ))}
            </div>
            {!shown.length && (
              <div className="mt-9 rounded-3xl border bg-white p-12 text-center">
                <CircleHelp className="mx-auto text-[#bd7718]" />
                <h3 className="mt-4 font-serif text-2xl">
                  No exact package found
                </h3>
                <p className="mt-2 text-[#718079]">
                  Try a different division, style or budget.
                </p>
                <Button
                  className="mt-5 bg-[#123f36]"
                  onClick={() => {
                    setDivision("All divisions");
                    setType("All styles");
                    setBudget("Any budget");
                    setQuery("");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>

        <section className="border-y border-[#ded8cb] bg-[#efe7d8] px-5 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#bd7718]">
                  Departure calendar
                </p>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                  Upcoming Tour Packages
                </h2>
                <p className="mt-3 max-w-2xl leading-7 text-[#687972]">
                  সবচেয়ে কাছের departure আগে দেখানো হয়েছে। Seat শেষ হওয়ার আগে
                  package details দেখে booking request complete করুন।
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm">
                <CalendarDays className="size-4 text-[#bd7718]" />{" "}
                September–October 2026
              </div>
            </div>

            <div className="mt-9 space-y-4">
              {tourPackages.map((item, index) => {
                const [day, month] = item.date.split(" ");
                const deadlines = ["12 Sep", "19 Sep", "26 Sep", "10 Oct"];
                return (
                  <article
                    key={item.slug}
                    className="group grid gap-5 rounded-[1.5rem] border border-[#d9d1c2] bg-white p-5 shadow-[0_10px_25px_rgba(18,63,54,.04)] transition hover:border-[#e7a332] md:grid-cols-[90px_1fr_auto] md:items-center"
                  >
                    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-[#123f36] text-white">
                      <span className="font-serif text-3xl leading-none">
                        {day}
                      </span>
                      <span className="mt-1 text-xs uppercase tracking-wider text-[#efb24d]">
                        {month.slice(0, 3)}
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#e6f1ec] px-2.5 py-1 text-[11px] font-semibold text-[#17624f]">
                          Booking open
                        </span>
                        <span className="text-xs text-[#84918b]">
                          Deadline {deadlines[index]}
                        </span>
                      </div>
                      <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#65766f]">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-4 text-[#bd7718]" /> From{" "}
                          {item.start}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock3 className="size-4 text-[#bd7718]" />{" "}
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="size-4 text-[#bd7718]" />{" "}
                          {item.seats} seats left
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-t pt-4 md:block md:border-l md:border-t-0 md:pl-6 md:pt-0 md:text-right">
                      <div>
                        <p className="text-xs text-[#84918b]">Per person</p>
                        <b className="font-serif text-2xl">
                          {money(item.price)}
                        </b>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <Button asChild size="sm" variant="outline">
                          <Link href={`/tour-packages/${item.slug}`}>
                            Details
                          </Link>
                        </Button>
                        <Button asChild size="sm" className="bg-[#123f36]">
                          <Link href={`/tour-packages/${item.slug}/book`}>
                            Book <ArrowRight />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#123f36] px-5 py-16 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {(
              [
                [
                  ShieldCheck,
                  "Verified essentials",
                  "Hotel, transport and itinerary checked before departure.",
                ],
                [
                  WalletCards,
                  "Transparent pricing",
                  "Included, excluded and optional costs shown before booking.",
                ],
                [
                  Phone,
                  "Coordinator support",
                  "Reporting point থেকে tour completion পর্যন্ত human support.",
                ],
              ] as const
            ).map(([Icon, title, text]) => (
              <div
                key={String(title)}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-[#e7a332] text-[#123f36]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl">{String(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {String(text)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
  );
}

function PackageCard({ item }: { item: TourPackage }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#ded8cb] bg-white shadow-[0_16px_40px_rgba(18,63,54,.06)] transition hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/tour-packages/${item.slug}`}
        className="relative block h-64 overflow-hidden"
      >
        <img
          src={item.image}
          alt={`${item.destination} tour package`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
        <span className="absolute left-4 top-4 rounded-full bg-[#fffdf8]/95 px-3 py-1.5 text-xs font-semibold text-[#123f36]">
          {item.type}
        </span>
        <button
          aria-label="Save package"
          className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-[#123f36]"
        >
          <Heart className="size-4" />
        </button>
        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white">
          <div>
            <p className="text-xs text-white/70">Starting from {item.start}</p>
            <p className="mt-1 flex items-center gap-1 text-sm">
              <CalendarDays className="size-4 text-[#efb24d]" />
              {item.date}
            </p>
          </div>
          <span className="rounded-full bg-[#e7a332] px-3 py-1 text-xs font-bold text-[#123f36]">
            {item.seats} seats
          </span>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center justify-between text-xs text-[#75847d]">
          <span>{item.duration}</span>
          <span className="flex items-center gap-1 font-semibold text-[#bd7718]">
            <Star className="size-3.5 fill-current" />
            {item.rating}
          </span>
        </div>
        <h2 className="mt-2 font-serif text-2xl leading-tight">{item.title}</h2>
        <div className="mt-4 grid gap-2 text-sm text-[#65766f]">
          <span className="flex items-center gap-2">
            <Bus className="size-4 text-[#bd7718]" />
            {item.transport}
          </span>
          <span className="flex items-center gap-2">
            <BedDouble className="size-4 text-[#bd7718]" />
            {item.hotel}
          </span>
          <span className="flex items-center gap-2">
            <Utensils className="size-4 text-[#bd7718]" />
            {item.meals}
          </span>
        </div>
        <div className="mt-5 flex items-end justify-between border-t pt-4">
          <div>
            <p className="text-xs text-[#87938e]">Per person</p>
            <p>
              <b className="font-serif text-2xl">{money(item.price)}</b>{" "}
              <del className="text-xs text-[#9aa39f]">
                {money(item.oldPrice)}
              </del>
            </p>
          </div>
          <Button asChild size="sm" className="rounded-full bg-[#123f36]">
            <Link href={`/tour-packages/${item.slug}`}>
              View details <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

const itinerary = [
  {
    day: "Day 1",
    title: "Departure, arrival & easy first evening",
    items: [
      ["06:30", "Report at Dhaka pickup point"],
      ["07:00", "AC bus departure; breakfast stop included"],
      ["15:30", "Hotel check-in and rest"],
      ["17:30", "Sunset visit with coordinator"],
      ["20:30", "Group dinner and next-day briefing"],
    ],
  },
  {
    day: "Day 2",
    title: "Signature sights, local flavours & free time",
    items: [
      ["08:00", "Breakfast at hotel"],
      ["09:00", "Reserved local transport pickup"],
      ["10:00", "Main sightseeing route and entry support"],
      ["13:30", "Halal Bangla lunch"],
      ["16:00", "Second attraction and photo time"],
      ["20:00", "Dinner and overnight stay"],
    ],
  },
  {
    day: "Day 3",
    title: "Slow morning, checkout & journey home",
    items: [
      ["08:00", "Breakfast and optional morning walk"],
      ["10:30", "Hotel checkout"],
      ["11:00", "Local shopping / final attraction"],
      ["13:00", "Lunch and return departure"],
      ["22:00", "Estimated arrival in Dhaka"],
    ],
  },
];

export function TourPackageDetail({ item }: { item: TourPackage }) {
  const [travellers, setTravellers] = useState(2);
  const [saved, setSaved] = useState(false);
  const total = travellers * item.price;
  return (
    <main className="bg-[#f7f4ed] text-[#123f36]">
        <section className="relative min-h-[620px] overflow-hidden">
          <img
            src={item.image}
            alt={item.destination}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082e27]/95 via-[#082e27]/65 to-black/10" />
          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 py-16 text-white lg:px-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs backdrop-blur"
                  >
                    {x}
                  </span>
                ))}
              </div>
              <p className="mt-7 text-sm text-[#efb24d]">
                TripPlan AI managed tour · {item.date}
              </p>
              <h1 className="mt-3 font-serif text-5xl leading-tight sm:text-7xl">
                {item.title}
              </h1>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#d7e4df]">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-[#efb24d]" />
                  {item.start} → {item.destination}
                </span>
                <span className="flex items-center gap-2">
                  <Clock3 className="size-4 text-[#efb24d]" />
                  {item.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Star className="size-4 fill-[#efb24d] text-[#efb24d]" />
                  {item.rating} verified rating
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="px-5 py-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1fr_380px]">
            <div className="space-y-8">
              <section className="rounded-3xl border bg-white p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#bd7718]">
                  Complete journey plan
                </p>
                <h2 className="mt-3 font-serif text-3xl">
                  From reporting point to return home.
                </h2>
                <p className="mt-4 leading-7 text-[#687972]">
                  A realistic group itinerary with traffic buffer, prayer/rest
                  windows and coordinator support. Exact timing may adjust for
                  weather and road conditions.
                </p>
              </section>
              <section>
                {itinerary.slice(0, item.days).map((day, index) => (
                  <article
                    key={day.day}
                    className="mb-5 overflow-hidden rounded-3xl border bg-white"
                  >
                    <div className="flex items-center gap-4 border-b bg-[#faf7f0] p-5">
                      <span className="grid size-12 place-items-center rounded-full bg-[#123f36] text-xs font-bold text-white">
                        {day.day}
                      </span>
                      <div>
                        <p className="text-xs text-[#bd7718]">
                          {index === 0
                            ? "Arrival day"
                            : index === item.days - 1
                              ? "Return day"
                              : "Explore day"}
                        </p>
                        <h3 className="font-serif text-xl">{day.title}</h3>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      {day.items.map(([time, text]) => (
                        <div
                          key={time + text}
                          className="grid grid-cols-[56px_1fr] gap-3 border-l border-[#ded8cb] pb-5 pl-4 last:pb-0"
                        >
                          <span className="text-xs font-bold text-[#bd7718]">
                            {time}
                          </span>
                          <p className="text-sm font-medium">{text}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </section>
              <Tabs
                defaultValue="included"
                className="rounded-3xl border bg-white p-6"
              >
                <TabsList className="h-auto w-full justify-start overflow-x-auto bg-[#f4f1e9]">
                  <TabsTrigger value="included">
                    Included & excluded
                  </TabsTrigger>
                  <TabsTrigger value="stay">Stay & transport</TabsTrigger>
                  <TabsTrigger value="policy">Policies</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="included"
                  className="mt-6 grid gap-4 sm:grid-cols-2"
                >
                  <InfoList
                    title="Included"
                    good
                    items={[
                      item.transport,
                      item.hotel,
                      item.meals,
                      "Local sightseeing vehicle",
                      "Coordinator and basic entry support",
                      "Drinking water during transfers",
                    ]}
                  />
                  <InfoList
                    title="Not included"
                    items={[
                      "Personal shopping",
                      "Meals not mentioned",
                      "Optional activities",
                      "Emergency medical costs",
                      "Single-room upgrade",
                    ]}
                  />
                </TabsContent>
                <TabsContent
                  value="stay"
                  className="mt-6 grid gap-4 sm:grid-cols-2"
                >
                  <InfoCard
                    icon={BedDouble}
                    title="Verified stay"
                    text="Clean family room, generator backup, hot water, 24-hour security and breakfast."
                  />
                  <InfoCard
                    icon={Bus}
                    title="Door-to-destination route"
                    text={`${item.transport}. Reporting point shared 24 hours before departure.`}
                  />
                </TabsContent>
                <TabsContent
                  value="policy"
                  className="mt-6 space-y-3 text-sm leading-7 text-[#687972]"
                >
                  <p>
                    • 40% advance confirms the seat; balance is due 5 days
                    before departure.
                  </p>
                  <p>
                    • Free cancellation within 24 hours of booking. Later
                    cancellation charges depend on departure proximity.
                  </p>
                  <p>
                    • Tour may reschedule if minimum participants are not
                    reached or official safety advice changes.
                  </p>
                  <p>
                    • Full refund is processed within 7–10 working days if
                    TripPlan AI cancels the tour.
                  </p>
                </TabsContent>
              </Tabs>
              <section className="rounded-3xl bg-[#123f36] p-6 text-white sm:p-8">
                <div className="grid gap-6 sm:grid-cols-3">
                  {(
                    [
                      [
                        ShieldCheck,
                        "Safety first",
                        "Verified operators and emergency contact",
                      ],
                      [Users, "Human support", "Dedicated tour coordinator"],
                      [
                        WalletCards,
                        "No surprises",
                        "Clear included and excluded costs",
                      ],
                    ] as const
                  ).map(([Icon, title, text]) => (
                    <div key={String(title)}>
                      <Icon className="text-[#efb24d]" />
                      <h3 className="mt-3 font-semibold">{String(title)}</h3>
                      <p className="mt-1 text-sm text-white/60">
                        {String(text)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <aside className="h-fit space-y-5 xl:sticky xl:top-24">
              <section className="rounded-3xl border bg-white p-6 shadow-xl">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-[#7c8984]">Per person</p>
                    <p className="mt-1 font-serif text-4xl">
                      {money(item.price)}
                    </p>
                    <del className="text-sm text-[#9aa39f]">
                      {money(item.oldPrice)}
                    </del>
                  </div>
                  <span className="rounded-full bg-[#fff1d8] px-3 py-1.5 text-xs font-semibold text-[#9a6412]">
                    {item.seats} seats left
                  </span>
                </div>
                <div className="mt-6 rounded-2xl bg-[#f5f1e8] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Travellers</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          setTravellers(Math.max(1, travellers - 1))
                        }
                        className="grid size-8 place-items-center rounded-full border bg-white"
                      >
                        <Minus className="size-4" />
                      </button>
                      <b>{travellers}</b>
                      <button
                        onClick={() =>
                          setTravellers(Math.min(item.seats, travellers + 1))
                        }
                        className="grid size-8 place-items-center rounded-full border bg-white"
                      >
                        <Plus className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-5 space-y-3 border-b pb-5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#718079]">
                      Package × {travellers}
                    </span>
                    <b>{money(total)}</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#718079]">Booking service</span>
                    <b>Included</b>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#718079]">
                      Advance due now (40%)
                    </span>
                    <b>{money(total * 0.4)}</b>
                  </div>
                </div>
                <div className="mt-5 flex justify-between">
                  <span>Total package</span>
                  <b className="font-serif text-2xl">{money(total)}</b>
                </div>
                <Button
                  asChild
                  className="mt-5 h-12 w-full rounded-xl bg-[#e7a332] text-[#123f36] hover:bg-[#f0b34b]"
                >
                  <Link
                    href={`/tour-packages/${item.slug}/book?travellers=${travellers}`}
                  >
                    Book this package <ArrowRight />
                  </Link>
                </Button>
                <Button
                  onClick={() => setSaved(!saved)}
                  variant="outline"
                  className="mt-2 h-11 w-full"
                >
                  <Heart
                    className={saved ? "fill-[#bd4e3a] text-[#bd4e3a]" : ""}
                  />
                  {saved ? "Saved to wishlist" : "Save package"}
                </Button>
                <p className="mt-4 text-center text-xs text-[#85918c]">
                  No payment charged in this UI demo
                </p>
              </section>
              <section className="rounded-3xl border bg-white p-5">
                <p className="font-semibold">Need help before booking?</p>
                <p className="mt-2 text-sm text-[#718079]">
                  Ask about rooms, children, senior travellers or pickup points.
                </p>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <Link href="/contact">
                    <Phone />
                    Contact tour support
                  </Link>
                </Button>
              </section>
            </aside>
          </div>
        </section>
      </main>
  );
}

function InfoList({
  title,
  items,
  good = false,
}: {
  title: string;
  items: string[];
  good?: boolean;
}) {
  return (
    <div>
      <h3 className="font-serif text-xl">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((x) => (
          <p key={x} className="flex gap-2 text-sm text-[#61736b]">
            {good ? (
              <Check className="mt-0.5 size-4 shrink-0 text-[#17624f]" />
            ) : (
              <X className="mt-0.5 size-4 shrink-0 text-[#a33b2e]" />
            )}
            {x}
          </p>
        ))}
      </div>
    </div>
  );
}
function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof BedDouble;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-[#f5f1e8] p-5">
      <Icon className="text-[#bd7718]" />
      <h3 className="mt-3 font-serif text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#687972]">{text}</p>
    </div>
  );
}

export function BookingPage({
  item,
  initialTravellers = 2,
}: {
  item: TourPackage;
  initialTravellers?: number;
}) {
  const [travellers, setTravellers] = useState(Math.max(1, initialTravellers));
  const [submitted, setSubmitted] = useState(false);
  const total = item.price * travellers;
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <Shell>
      <main className="min-h-screen bg-[#f7f4ed] px-5 py-12 text-[#123f36] lg:px-8">
        <div className="mx-auto max-w-6xl">
          {submitted ? (
            <section className="mx-auto max-w-2xl rounded-[2rem] border bg-white p-8 text-center shadow-xl sm:p-12">
              <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#e4f2eb] text-[#17624f]">
                <CheckCircle2 className="size-8" />
              </span>
              <p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-[#bd7718]">
                Booking request received
              </p>
              <h1 className="mt-3 font-serif text-4xl">
                Your seats are temporarily reserved.
              </h1>
              <p className="mt-4 leading-7 text-[#687972]">
                Demo booking reference <b>TPA-260918</b>. A real backend will
                confirm payment and send pickup details.
              </p>
              <div className="mt-7 rounded-2xl bg-[#f5f1e8] p-5 text-left">
                <div className="flex justify-between text-sm">
                  <span>{item.title}</span>
                  <b>{travellers} travellers</b>
                </div>
                <div className="mt-3 flex justify-between text-sm">
                  <span>Advance due</span>
                  <b>{money(total * 0.4)}</b>
                </div>
              </div>
              <Button asChild className="mt-7 bg-[#123f36]">
                <Link href="/dashboard/bookings">
                  Open my bookings <ArrowRight />
                </Link>
              </Button>
            </section>
          ) : (
            <>
              <div className="mb-8">
                <Link
                  href={`/tour-packages/${item.slug}`}
                  className="text-sm text-[#bd7718]"
                >
                  ← Back to package
                </Link>
                <h1 className="mt-3 font-serif text-4xl">
                  Complete your booking.
                </h1>
                <p className="mt-2 text-[#6d7d76]">
                  Traveller details, room preference and emergency contact.
                </p>
              </div>
              <div className="grid gap-7 lg:grid-cols-[1fr_360px]">
                <form
                  onSubmit={submit}
                  className="rounded-3xl border bg-white p-6 sm:p-8"
                >
                  <h2 className="font-serif text-2xl">Lead traveller</h2>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label>Full name</Label>
                      <Input
                        required
                        placeholder="As shown on NID"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Mobile number</Label>
                      <Input
                        required
                        placeholder="01XXXXXXXXX"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>Email address</Label>
                      <Input
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label>NID / Passport</Label>
                      <Input
                        required
                        placeholder="Document number"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="mt-7 border-t pt-7">
                    <h2 className="font-serif text-2xl">Trip preferences</h2>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                      <div>
                        <Label>Travellers</Label>
                        <Select
                          value={String(travellers)}
                          onValueChange={(v) => setTravellers(Number(v))}
                        >
                          <SelectTrigger className="mt-2 w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from(
                              { length: Math.min(6, item.seats) },
                              (_, i) => i + 1,
                            ).map((x) => (
                              <SelectItem key={x} value={String(x)}>
                                {x} traveller{x > 1 ? "s" : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Room preference</Label>
                        <Select defaultValue="shared">
                          <SelectTrigger className="mt-2 w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="shared">
                              Standard shared room
                            </SelectItem>
                            <SelectItem value="family">Family room</SelectItem>
                            <SelectItem value="single">
                              Single room upgrade
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Food preference</Label>
                        <Select defaultValue="halal">
                          <SelectTrigger className="mt-2 w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="halal">
                              Halal standard
                            </SelectItem>
                            <SelectItem value="vegetarian">
                              Vegetarian
                            </SelectItem>
                            <SelectItem value="child">
                              Child-friendly meal
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Pickup point</Label>
                        <Select defaultValue="gabtoli">
                          <SelectTrigger className="mt-2 w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gabtoli">Gabtoli</SelectItem>
                            <SelectItem value="kalabagan">Kalabagan</SelectItem>
                            <SelectItem value="uttara">Uttara</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="mt-5">
                      <Label>Emergency contact & special request</Label>
                      <Textarea
                        required
                        placeholder="Emergency person, phone, medical or accessibility needs..."
                        className="mt-2 min-h-28"
                      />
                    </div>
                  </div>
                  <label className="mt-6 flex items-start gap-3 rounded-xl bg-[#f5f1e8] p-4 text-sm">
                    <input required type="checkbox" className="mt-1" />
                    <span>
                      I agree to the cancellation, refund and traveller safety
                      policy.
                    </span>
                  </label>
                  <Button className="mt-6 h-12 w-full bg-[#123f36]">
                    Continue with ৳{(total * 0.4).toLocaleString("en-BD")}{" "}
                    advance <ArrowRight />
                  </Button>
                </form>
                <aside className="h-fit rounded-3xl bg-[#123f36] p-6 text-white lg:sticky lg:top-24">
                  <p className="text-xs uppercase tracking-[.18em] text-[#efb24d]">
                    Booking summary
                  </p>
                  <h2 className="mt-3 font-serif text-2xl">{item.title}</h2>
                  <div className="mt-5 space-y-3 text-sm text-white/65">
                    <p className="flex gap-2">
                      <CalendarDays className="size-4 text-[#efb24d]" />
                      {item.date}
                    </p>
                    <p className="flex gap-2">
                      <Clock3 className="size-4 text-[#efb24d]" />
                      {item.duration}
                    </p>
                    <p className="flex gap-2">
                      <Users className="size-4 text-[#efb24d]" />
                      {travellers} travellers
                    </p>
                  </div>
                  <div className="mt-6 border-t border-white/15 pt-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Package total</span>
                      <b>{money(total)}</b>
                    </div>
                    <div className="mt-3 flex justify-between text-sm">
                      <span className="text-white/60">Advance now</span>
                      <b className="text-[#efb24d]">{money(total * 0.4)}</b>
                    </div>
                    <div className="mt-3 flex justify-between text-sm">
                      <span className="text-white/60">Balance later</span>
                      <b>{money(total * 0.6)}</b>
                    </div>
                  </div>
                  <p className="mt-6 text-xs leading-5 text-white/45">
                    UI demo only—no payment gateway or persistent booking is
                    connected yet.
                  </p>
                </aside>
              </div>
            </>
          )}
        </div>
      </main>
    </Shell>
  );
}

export function BookingsDashboardPage() {
  const [cancelled, setCancelled] = useState(false);
  const item = tourPackages[0];
  return (
    <>
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#bd7718]">
            Managed tours
          </p>
          <h1 className="mt-2 font-serif text-4xl">My tour bookings</h1>
          <p className="mt-2 text-sm text-[#6e7e77]">
            Payment, pickup, travellers and coordinator details in one place.
          </p>
        </div>
        <Button asChild className="rounded-full bg-[#123f36]">
          <Link href="/tour-packages">
            Explore packages <ArrowRight />
          </Link>
        </Button>
      </div>
      <Tabs defaultValue="upcoming" className="mt-7">
        <TabsList className="h-auto w-full justify-start overflow-x-auto bg-white p-2">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="pending">Pending payment</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <section className="mt-5 overflow-hidden rounded-3xl border bg-white">
            <div className="grid lg:grid-cols-[300px_1fr]">
              <img
                src={item.image}
                alt={item.destination}
                className="h-full min-h-64 w-full object-cover"
              />
              <div className="p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-[#e4f2eb] px-3 py-1 text-xs font-semibold text-[#17624f]">
                    {cancelled ? "Cancellation requested" : "Confirmed"}
                  </span>
                  <span className="text-xs text-[#788780]">
                    Booking TPA-260918
                  </span>
                </div>
                <h2 className="mt-4 font-serif text-3xl">{item.title}</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-[#7f8d87]">Departure</p>
                    <b className="mt-1 block text-sm">{item.date}</b>
                  </div>
                  <div>
                    <p className="text-xs text-[#7f8d87]">Travellers</p>
                    <b className="mt-1 block text-sm">3 family members</b>
                  </div>
                  <div>
                    <p className="text-xs text-[#7f8d87]">Payment</p>
                    <b className="mt-1 block text-sm">
                      ৳10,680 paid · ৳16,020 due
                    </b>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-[#f5f1e8] p-4">
                  <p className="text-xs font-bold uppercase text-[#bd7718]">
                    Next step
                  </p>
                  <p className="mt-2 text-sm">
                    Remaining payment due by 13 September. Pickup details will
                    unlock 24 hours before departure.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button asChild size="sm" className="bg-[#123f36]">
                    <Link href={`/tour-packages/${item.slug}`}>
                      View itinerary
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download />
                    Receipt
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone />
                    Coordinator
                  </Button>
                  <Button
                    onClick={() => setCancelled(true)}
                    size="sm"
                    variant="outline"
                    className="text-[#a33b2e]"
                  >
                    Request cancellation
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent value="pending">
          <div className="mt-5 rounded-3xl border bg-white p-10 text-center">
            <WalletCards className="mx-auto text-[#bd7718]" />
            <h2 className="mt-3 font-serif text-2xl">
              No pending payment requests
            </h2>
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="mt-5 rounded-3xl border bg-white p-10 text-center">
            <TicketCheck className="mx-auto text-[#17624f]" />
            <h2 className="mt-3 font-serif text-2xl">
              Your completed tours will appear here
            </h2>
          </div>
        </TabsContent>
        <TabsContent value="cancelled">
          <div className="mt-5 rounded-3xl border bg-white p-10 text-center">
            <X className="mx-auto text-[#a33b2e]" />
            <h2 className="mt-3 font-serif text-2xl">No cancelled tours</h2>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
