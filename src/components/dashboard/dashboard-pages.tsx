"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bell,
  Bot,
  CalendarDays,
  Check,
  ChevronRight,
  CloudSun,
  Download,
  Heart,
  Hotel,
  MapPin,
  Plus,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Trash2,
  Utensils,
  Users,
  Wallet,
} from "lucide-react";
import { DashboardHeading } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trips } from "@/lib/dashboard-data";

const statusStyle: Record<string, string> = {
  Upcoming: "bg-[#e4f2e9] text-[#236044]",
  Draft: "bg-[#f8ecd5] text-[#9a6116]",
  Completed: "bg-[#e8edf3] text-[#53677d]",
  Cancelled: "bg-red-50 text-red-700",
  Published: "bg-[#e4f2e9] text-[#236044]",
  Pending: "bg-[#fff3d9] text-[#9a6116]",
  Rejected: "bg-red-50 text-red-700",
};

function TripCards({ filter }: { filter?: string }) {
  const list =
    filter && filter !== "All"
      ? trips.filter((t) => t.status === filter)
      : trips;
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {list.map((t) => (
        <article
          key={t.id}
          className="overflow-hidden rounded-3xl border border-[#ded9cc] bg-white shadow-sm"
        >
          <div
            className="relative h-44 bg-cover bg-center"
            style={{ backgroundImage: `url(${t.image})` }}
          >
            <span
              className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${statusStyle[t.status]}`}
            >
              {t.status}
            </span>
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold text-[#c77c19]">
              {t.destination}
            </p>
            <h2 className="mt-1 font-serif text-2xl">{t.title}</h2>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#6d7d77]">
              <span>
                <CalendarDays className="mr-1 inline size-4" />
                {t.date}
              </span>
              <span>
                <Users className="mr-1 inline size-4" />
                {t.travellers} travellers
              </span>
              <span>{t.days} days</span>
              <span>
                <Wallet className="mr-1 inline size-4" />৳
                {t.budget.toLocaleString()}
              </span>
            </div>
            <div className="mt-5 flex gap-2">
              <Button asChild className="flex-1 bg-[#123f36]">
                <Link href={`/dashboard/trips/${t.id}`}>View details</Link>
              </Button>
              <Button variant="outline">Edit</Button>
              {t.status === "Draft" && (
                <Button variant="outline" size="icon" aria-label="Delete draft">
                  <Trash2 />
                </Button>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function TripsPage() {
  return (
    <>
      <DashboardHeading
        eyebrow="Trip management"
        title="My trips"
        description="Keep every draft, upcoming journey and travel memory organized."
        action={
          <Button asChild className="rounded-full bg-[#123f36]">
            <Link href="/travel-intelligence">
              <Plus /> New trip
            </Link>
          </Button>
        }
      />
      <Tabs defaultValue="All" className="mt-7">
        <TabsList className="h-auto max-w-full justify-start overflow-x-auto rounded-xl bg-white p-1">
          {["All", "Draft", "Upcoming", "Completed", "Cancelled"].map((s) => (
            <TabsTrigger key={s} value={s} className="px-4 py-2">
              {s}
            </TabsTrigger>
          ))}
        </TabsList>
        {["All", "Draft", "Upcoming", "Completed", "Cancelled"].map((s) => (
          <TabsContent key={s} value={s} className="mt-5">
            <TripCards filter={s} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}

export function AiTripsPage() {
  const [removed, setRemoved] = useState<string[]>([]);
  const plans = [
    {
      id: "sreemangal",
      name: "Sreemangal slow escape",
      meta: "3 days · Couple · ৳18,000",
      confidence: 94,
      status: "Draft",
      date: "Today, 9:42 AM",
    },
    {
      id: "cox",
      name: "Cox's Bazar family plan",
      meta: "4 days · Family · ৳25,000",
      confidence: 91,
      status: "Saved",
      date: "26 Aug 2026",
    },
    {
      id: "sundarban",
      name: "Sundarbans nature journey",
      meta: "3 days · Friends · ৳28,000",
      confidence: 88,
      status: "Generated",
      date: "22 Aug 2026",
    },
  ];
  return (
    <>
      <DashboardHeading
        eyebrow="AI travel studio"
        title="AI-generated trips"
        description="Review, improve and confirm plans created around your budget and travel style."
        action={
          <Button asChild className="rounded-full bg-[#123f36]">
            <Link href="/travel-intelligence">
              <Sparkles /> Generate new plan
            </Link>
          </Button>
        }
      />
      <div className="mt-7 grid gap-5 lg:grid-cols-3">
        {plans
          .filter((p) => !removed.includes(p.id))
          .map((p) => (
            <article
              key={p.id}
              className="rounded-3xl border border-[#ded9cc] bg-white p-6"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-[#f8ecd5] text-[#c77c19]">
                  <Bot />
                </span>
                <span className="rounded-full bg-[#edf3ef] px-3 py-1 text-xs font-bold">
                  {p.status}
                </span>
              </div>
              <h2 className="mt-5 font-serif text-2xl">{p.name}</h2>
              <p className="mt-2 text-sm text-[#708079]">{p.meta}</p>
              <div className="mt-5 rounded-2xl bg-[#f6f3eb] p-4">
                <div className="flex justify-between text-sm">
                  <span>AI confidence</span>
                  <b>{p.confidence}%</b>
                </div>
                <Progress
                  value={p.confidence}
                  className="mt-2 [&>div]:bg-[#c77c19]"
                />
              </div>
              <p className="mt-4 text-xs text-[#89938f]">
                Last generated: {p.date}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <Button className="bg-[#123f36]">Confirm trip</Button>
                <Button variant="outline">
                  <RefreshCw /> Regenerate
                </Button>
                <Button asChild variant="outline">
                  <Link href="/itinerary">Preview</Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setRemoved([...removed, p.id])}
                >
                  <Trash2 /> Delete
                </Button>
              </div>
            </article>
          ))}
      </div>
    </>
  );
}

const savedSeed = [
  {
    id: "ratargul",
    type: "Places",
    name: "Ratargul Swamp Forest",
    meta: "Sylhet · Nature",
    icon: MapPin,
  },
  {
    id: "sea-pearl",
    type: "Hotels",
    name: "Sea Pearl Bay Retreat",
    meta: "Cox's Bazar · ৳6,330/night",
    icon: Hotel,
  },
  {
    id: "satkora",
    type: "Food",
    name: "Satkora beef trail",
    meta: "Sylhet · From ৳320",
    icon: Utensils,
  },
  {
    id: "sajek",
    type: "Places",
    name: "Sajek Valley",
    meta: "Rangamati · Mountain",
    icon: MapPin,
  },
  {
    id: "khulna-inn",
    type: "Hotels",
    name: "Khulna River View Inn",
    meta: "Khulna · ৳3,085/night",
    icon: Hotel,
  },
];
export function SavedPage() {
  const [items, setItems] = useState(savedSeed);
  return (
    <>
      <DashboardHeading
        eyebrow="Personal collection"
        title="Saved items"
        description="Your favourite places, stays and flavours—ready to become one complete trip."
        action={
          <Button asChild className="rounded-full bg-[#123f36]">
            <Link href="/travel-intelligence">
              <Sparkles /> Create trip from saved
            </Link>
          </Button>
        }
      />
      <Tabs defaultValue="All" className="mt-7">
        <TabsList className="h-auto bg-white p-1">
          {["All", "Places", "Hotels", "Food"].map((t) => (
            <TabsTrigger value={t} key={t} className="px-4 py-2">
              {t}
            </TabsTrigger>
          ))}
        </TabsList>
        {["All", "Places", "Hotels", "Food"].map((tab) => (
          <TabsContent value={tab} key={tab} className="mt-5">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {items
                .filter((i) => tab === "All" || i.type === tab)
                .map((i) => (
                  <article
                    key={i.id}
                    className="rounded-3xl border border-[#ded9cc] bg-white p-5"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-[#f8ecd5] text-[#c77c19]">
                        <i.icon />
                      </span>
                      <button
                        onClick={() =>
                          setItems(items.filter((x) => x.id !== i.id))
                        }
                        className="rounded-full p-2 text-[#a56661] hover:bg-red-50"
                        aria-label={`Remove ${i.name}`}
                      >
                        <Heart className="size-5 fill-current" />
                      </button>
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase text-[#c77c19]">
                      {i.type}
                    </p>
                    <h2 className="mt-1 font-serif text-xl">{i.name}</h2>
                    <p className="mt-2 text-sm text-[#75847e]">{i.meta}</p>
                    <div className="mt-5 flex gap-2">
                      <Button variant="outline" className="flex-1">
                        View details
                      </Button>
                      <Button className="flex-1 bg-[#123f36]">
                        Add to trip
                      </Button>
                    </div>
                  </article>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
}

const packSeed = [
  { id: "nid", cat: "Documents", name: "NID photocopy", done: true },
  { id: "tickets", cat: "Documents", name: "Bus tickets offline", done: true },
  {
    id: "charger",
    cat: "Essentials",
    name: "Phone charger & power bank",
    done: false,
  },
  { id: "cash", cat: "Essentials", name: "Cash for local CNG", done: false },
  { id: "rain", cat: "Weather", name: "Light rain jacket", done: false },
  { id: "medicine", cat: "Health", name: "Regular medicine", done: true },
];
export function PackingPage() {
  const [items, setItems] = useState(packSeed);
  const [name, setName] = useState("");
  const done = items.filter((i) => i.done).length;
  return (
    <>
      <DashboardHeading
        eyebrow="Trip-ready checklist"
        title="Packing for Cox's Bazar"
        description="A practical checklist adapted for your destination, season and family plan."
      />
      <section className="mt-7 grid gap-6 lg:grid-cols-[1fr_320px]">
        <article className="rounded-3xl border border-[#ded9cc] bg-white p-6">
          <div className="flex gap-2">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Add a custom item"
            />
            <Button
              onClick={() => {
                if (name.trim()) {
                  setItems([
                    ...items,
                    {
                      id: Date.now().toString(),
                      cat: "Custom",
                      name,
                      done: false,
                    },
                  ]);
                  setName("");
                }
              }}
              className="bg-[#123f36]"
            >
              <Plus /> Add
            </Button>
          </div>
          <div className="mt-6 space-y-3">
            {items.map((i) => (
              <label
                key={i.id}
                className="flex items-center gap-3 rounded-2xl border border-[#ece8de] p-4 hover:bg-[#faf8f2]"
              >
                <Checkbox
                  checked={i.done}
                  onCheckedChange={() =>
                    setItems(
                      items.map((x) =>
                        x.id === i.id ? { ...x, done: !x.done } : x,
                      ),
                    )
                  }
                />
                <span className="flex-1">
                  <b className={i.done ? "text-[#88928e] line-through" : ""}>
                    {i.name}
                  </b>
                  <small className="block text-[#86918c]">{i.cat}</small>
                </span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setItems(items.filter((x) => x.id !== i.id));
                  }}
                  aria-label={`Delete ${i.name}`}
                >
                  <Trash2 className="size-4 text-[#a56661]" />
                </button>
              </label>
            ))}
          </div>
        </article>
        <aside className="space-y-5">
          <div className="rounded-3xl bg-[#123f36] p-6 text-white">
            <p className="text-sm text-white/70">Packing progress</p>
            <p className="mt-2 font-serif text-4xl">
              {items.length ? Math.round((done / items.length) * 100) : 0}%
            </p>
            <Progress
              value={items.length ? (done / items.length) * 100 : 0}
              className="mt-4 bg-white/20 [&>div]:bg-[#e7a332]"
            />
            <p className="mt-3 text-xs text-white/65">
              {done} of {items.length} items packed
            </p>
          </div>
          <div className="rounded-3xl border border-[#ecd8ae] bg-[#fff6df] p-5">
            <CloudSun className="text-[#c77c19]" />
            <h3 className="mt-3 font-serif text-xl">AI weather suggestion</h3>
            <p className="mt-2 text-sm leading-6 text-[#78613c]">
              Coastal rain is possible. Keep a light rain jacket, waterproof
              phone pouch and extra sandals.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}

export function ReviewsPage() {
  const reviews = [
    {
      name: "Sea Pearl Bay Retreat",
      type: "Hotel",
      rating: 5,
      status: "Published",
      text: "Clean family room and the staff were helpful.",
    },
    {
      name: "Kacchi Bhai, Old Dhaka",
      type: "Food",
      rating: 4,
      status: "Pending",
      text: "The biryani portion matched the price and tasted authentic.",
    },
    {
      name: "Laboni Beach",
      type: "Place",
      rating: 3,
      status: "Rejected",
      text: "Beautiful sunset, but the beach was crowded.",
    },
  ];
  return (
    <>
      <DashboardHeading
        eyebrow="Your voice"
        title="My reviews"
        description="Track published reviews, moderation status and useful feedback."
      />
      <div className="mt-7 space-y-4">
        {reviews.map((r) => (
          <article
            key={r.name}
            className="rounded-3xl border border-[#ded9cc] bg-white p-6"
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row">
              <div>
                <p className="text-xs font-bold uppercase text-[#c77c19]">
                  {r.type}
                </p>
                <h2 className="mt-1 font-serif text-2xl">{r.name}</h2>
                <p className="mt-2 text-amber-500">
                  {"★".repeat(r.rating)}
                  <span className="text-[#d9d6ce]">
                    {"★".repeat(5 - r.rating)}
                  </span>
                </p>
              </div>
              <span
                className={`h-fit w-fit rounded-full px-3 py-1 text-xs font-bold ${statusStyle[r.status]}`}
              >
                {r.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#66776f]">“{r.text}”</p>
            {r.status === "Rejected" && (
              <p className="mt-4 rounded-xl bg-red-50 p-3 text-xs text-red-700">
                <b>Moderator feedback:</b> Add a visit date and more specific
                details before resubmitting.
              </p>
            )}
            <div className="mt-4 flex gap-2">
              <Button variant="outline">Edit</Button>
              <Button variant="outline" className="text-red-700">
                <Trash2 /> Delete
              </Button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function NotificationsPage() {
  const seed = [
    {
      id: 1,
      title: "Cox's Bazar trip starts in 14 days",
      meta: "Review tickets and packing list.",
      kind: "Trip reminder",
      read: false,
    },
    {
      id: 2,
      title: "Heavy rain possible on travel day",
      meta: "Allow extra travel time and carry rain protection.",
      kind: "Weather alert",
      read: false,
    },
    {
      id: 3,
      title: "Your food review is now published",
      meta: "Thank you for helping fellow travellers.",
      kind: "Review status",
      read: true,
    },
    {
      id: 4,
      title: "Saved hotel price changed",
      meta: "Sea Pearl Bay Retreat is now ৳450 lower.",
      kind: "Price update",
      read: true,
    },
  ];
  const [items, setItems] = useState(seed);
  return (
    <>
      <DashboardHeading
        eyebrow="Travel updates"
        title="Notifications"
        description="Important reminders, alerts and saved-trip changes in one place."
        action={
          <Button
            variant="outline"
            onClick={() => setItems(items.map((i) => ({ ...i, read: true })))}
          >
            <Check /> Mark all read
          </Button>
        }
      />
      <div className="mt-7 space-y-3">
        {items.map((n) => (
          <button
            key={n.id}
            onClick={() =>
              setItems(
                items.map((i) => (i.id === n.id ? { ...i, read: true } : i)),
              )
            }
            className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition hover:border-[#c77c19] ${n.read ? "border-[#ded9cc] bg-white" : "border-[#d9bf88] bg-[#fff9eb]"}`}
          >
            <span
              className={`grid size-11 shrink-0 place-items-center rounded-full ${n.read ? "bg-[#edf1ef] text-[#60736b]" : "bg-[#f5dfb4] text-[#b66d11]"}`}
            >
              <Bell className="size-5" />
            </span>
            <span className="flex-1">
              <span className="text-xs font-bold uppercase text-[#c77c19]">
                {n.kind}
              </span>
              <b className="mt-1 block">{n.title}</b>
              <span className="mt-1 block text-sm text-[#718079]">
                {n.meta}
              </span>
            </span>
            {!n.read && (
              <span className="mt-2 size-2 rounded-full bg-[#c77c19]" />
            )}
          </button>
        ))}
      </div>
    </>
  );
}

export function ProfilePage() {
  const [saved, setSaved] = useState(false);
  return (
    <>
      <DashboardHeading
        eyebrow="Account & preferences"
        title="Your travel profile"
        description="These preferences help TripPlan AI create more personal, realistic recommendations."
      />
      <section className="mt-7 grid gap-6 lg:grid-cols-[.65fr_1.35fr]">
        <aside className="h-fit rounded-3xl bg-[#123f36] p-7 text-center text-white">
          <span className="mx-auto grid size-24 place-items-center rounded-full bg-[#e7a332] font-serif text-3xl">
            SI
          </span>
          <h2 className="mt-4 font-serif text-2xl">Saidul Islam</h2>
          <p className="text-sm text-white/65">Khulna, Bangladesh</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-4">
              <b className="text-xl">3</b>
              <small className="block text-white/60">Trips</small>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <b className="text-xl">12</b>
              <small className="block text-white/60">Saved</small>
            </div>
          </div>
        </aside>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
          }}
          className="rounded-3xl border border-[#ded9cc] bg-white p-6 sm:p-8"
        >
          <h2 className="font-serif text-2xl">Personal details</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              ["Full name", "Saidul Islam"],
              ["Email", "said38383742@gmail.com"],
              ["Phone", "01911 625953"],
              ["Home district", "Khulna"],
              ["Preferred budget", "৳20,000–৳35,000"],
              ["Travel style", "Family & Friends"],
              ["Food preference", "Halal · Local Bangla"],
              ["Preferred pace", "Balanced"],
              ["Emergency contact", "01900 000000"],
            ].map(([label, value], i) => (
              <label key={label} className={i === 8 ? "sm:col-span-2" : ""}>
                <span className="text-sm font-semibold">{label}</span>
                <Input defaultValue={value} className="mt-2 h-11" />
              </label>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <Button type="submit" className="bg-[#123f36]">
              Save preferences
            </Button>
            {saved && (
              <span className="text-sm font-semibold text-[#39805f]">
                <Check className="mr-1 inline size-4" />
                Saved
              </span>
            )}
          </div>
          <div className="mt-8 border-t pt-6">
            <h3 className="font-serif text-xl">Security</h3>
            <p className="mt-1 text-sm text-[#75847e]">
              Update your password and account protection.
            </p>
            <Button type="button" variant="outline" className="mt-4">
              <ShieldCheck /> Security settings
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
