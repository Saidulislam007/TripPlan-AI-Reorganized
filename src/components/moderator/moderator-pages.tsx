"use client";

import Link from "next/link";
import { useState } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BellRing,
  Bot,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleAlert,
  Clock3,
  Copy,
  Edit3,
  Eye,
  FileClock,
  FileText,
  Filter,
  Flag,
  ImageIcon,
  MapPin,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Star,
  Trash2,
  Upload,
  UserRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ModeratorHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#bd7718]">
          {eyebrow}
        </p>
        <h1 className="mt-2 font-serif text-3xl sm:text-4xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6d7d76]">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}

const badgeStyles: Record<string, string> = {
  High: "bg-[#fee9e5] text-[#a33b2e]",
  Medium: "bg-[#fff1d8] text-[#9a6412]",
  Low: "bg-[#e4f2eb] text-[#216b55]",
  Published: "bg-[#e4f2eb] text-[#216b55]",
  Verified: "bg-[#e4f2eb] text-[#216b55]",
  Draft: "bg-[#edf0ef] text-[#586862]",
  Outdated: "bg-[#fff1d8] text-[#9a6412]",
  Pending: "bg-[#fff1d8] text-[#9a6412]",
  Escalated: "bg-[#eee7fa] text-[#67449b]",
};

function Badge({ value }: { value: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${badgeStyles[value] || "bg-[#edf0ef] text-[#586862]"}`}
    >
      {value}
    </span>
  );
}

const statCards = [
  ["Pending reviews", "38", "+6 today", FileClock, "/moderator/reviews"],
  ["AI flagged", "14", "5 high risk", Bot, "/moderator/ai-review-queue"],
  ["User reports", "11", "2 safety issues", Flag, "/moderator/reports"],
  ["Outdated info", "23", "Fare & price", RefreshCw, "/moderator/content"],
  [
    "High-risk items",
    "5",
    "Review first",
    ShieldAlert,
    "/moderator/ai-review-queue",
  ],
  [
    "Completed today",
    "27",
    "91% agreement",
    CheckCircle2,
    "/moderator/history",
  ],
] as const;

export function ModeratorOverview() {
  const priorities = [
    [
      "Safety report: Teknaf marine route",
      "User reports",
      "High",
      "12 min ago",
      "/moderator/reports",
    ],
    [
      "Possible fake hotel rating cluster",
      "AI verification",
      "High",
      "24 min ago",
      "/moderator/ai-review-queue/ai-104",
    ],
    [
      "Dhaka–Khulna bus fare may be outdated",
      "Transport",
      "Medium",
      "41 min ago",
      "/moderator/transport",
    ],
    [
      "Review needs booking evidence",
      "Review queue",
      "Medium",
      "1 hour ago",
      "/moderator/reviews/rev-204",
    ],
  ];
  return (
    <>
      <ModeratorHeading
        eyebrow="Daily moderation brief"
        title="Good morning, Nishad."
        description="Safety-critical work comes first. AI has already sorted today’s queue by traveller impact and evidence strength."
        action={
          <Button asChild className="rounded-full bg-[#123f36]">
            <Link href="/moderator/ai-review-queue">
              Open priority queue <ArrowRight />
            </Link>
          </Button>
        }
      />
      <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {statCards.map(([label, value, meta, Icon, href]) => (
          <Link
            key={label}
            href={href}
            className="group rounded-2xl border border-[#ddd8cb] bg-white p-5 shadow-[0_12px_30px_rgba(18,63,54,.04)] transition hover:-translate-y-0.5 hover:border-[#e7a332]"
          >
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-xl bg-[#f7ead2] text-[#b87316]">
                <Icon className="size-5" />
              </span>
              <ArrowRight className="size-4 text-[#9aa49f] transition group-hover:translate-x-1" />
            </div>
            <p className="mt-5 text-sm text-[#708079]">{label}</p>
            <div className="mt-1 flex items-end justify-between">
              <b className="font-serif text-3xl">{value}</b>
              <span className="text-xs text-[#9a6412]">{meta}</span>
            </div>
          </Link>
        ))}
      </section>
      <section className="mt-7 grid gap-6 xl:grid-cols-[1.35fr_.65fr]">
        <div className="rounded-3xl border border-[#ddd8cb] bg-white">
          <div className="flex items-center justify-between border-b p-5 sm:p-6">
            <div>
              <h2 className="font-serif text-2xl">Priority queue</h2>
              <p className="mt-1 text-xs text-[#77867f]">
                Ordered by safety, risk and reach
              </p>
            </div>
            <Badge value="5 urgent" />
          </div>
          <div className="divide-y">
            {priorities.map(([title, type, risk, time, href], i) => (
              <Link
                href={href}
                key={title}
                className="flex gap-4 p-5 transition hover:bg-[#faf7f0] sm:p-6"
              >
                <span
                  className={`mt-1 grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold ${i < 2 ? "bg-[#fee9e5] text-[#a33b2e]" : "bg-[#fff1d8] text-[#9a6412]"}`}
                >
                  {i + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <b className="block truncate">{title}</b>
                  <span className="mt-1 block text-xs text-[#77867f]">
                    {type} · {time}
                  </span>
                </span>
                <Badge value={risk} />
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl bg-[#123f36] p-6 text-white">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#efb24d]">
              Today’s progress
            </p>
            <div className="mt-5 flex items-end justify-between">
              <b className="font-serif text-4xl">27</b>
              <span className="text-sm text-white/65">of 42 target</span>
            </div>
            <Progress value={64} className="mt-4 h-2 bg-white/15" />
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl bg-white/10 p-3">
                <b>19</b>
                <span className="block text-xs text-white/55">Approved</span>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <b>3</b>
                <span className="block text-xs text-white/55">Escalated</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-[#ddd8cb] bg-white p-6">
            <h2 className="font-serif text-xl">Recent activity</h2>
            {[
              "Approved Sylhet food review",
              "Updated Kuakata entry fee",
              "Escalated marine safety report",
            ].map((x, i) => (
              <div key={x} className="mt-4 flex gap-3">
                <span className="mt-1 size-2 rounded-full bg-[#e7a332]" />
                <div>
                  <p className="text-sm font-medium">{x}</p>
                  <p className="text-xs text-[#87938e]">{i * 18 + 8} min ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const siteSections = [
  [
    "Home hero",
    "Heading, description, background and CTA",
    "Published",
    "2 hours ago",
  ],
  [
    "Popular destinations",
    "6 destination cards and display order",
    "Published",
    "Yesterday",
  ],
  [
    "Travel essentials",
    "Hotels, food and transport promotion",
    "Published",
    "3 days ago",
  ],
  ["Traveller stories", "Testimonials and trust indicators", "Draft", "12 Aug"],
  [
    "About TripPlan AI",
    "Mission, promise and impact statistics",
    "Published",
    "Today",
  ],
  [
    "Contact support",
    "Support copy, categories and contact details",
    "Published",
    "Today",
  ],
];

export function SiteContentPage() {
  const [saved, setSaved] = useState(false);
  return (
    <>
      <ModeratorHeading
        eyebrow="Public website CMS"
        title="Site content"
        description="Update public page text, imagery, visibility and order without changing application code."
        action={
          <Button
            className="rounded-full bg-[#123f36]"
            onClick={() => setSaved(true)}
          >
            <Plus /> Create section
          </Button>
        }
      />
      {saved && (
        <div
          role="status"
          className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
        >
          <CheckCircle2 className="size-5" /> Draft section created. Add content
          before publishing.
        </div>
      )}
      <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_360px]">
        <section className="rounded-3xl border bg-white">
          <div className="flex flex-col gap-3 border-b p-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="font-serif text-2xl">Page sections</h2>
            <Select defaultValue="home">
              <SelectTrigger className="w-full sm:w-44">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="home">Homepage</SelectItem>
                <SelectItem value="about">About</SelectItem>
                <SelectItem value="contact">Contact</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="divide-y">
            {siteSections.map(([name, desc, status, updated], i) => (
              <div
                key={name}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#f6ead3] font-serif text-[#b87316]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <b>{name}</b>
                  <p className="mt-1 text-sm text-[#74837c]">{desc}</p>
                  <p className="mt-1 text-xs text-[#9aa39f]">
                    Updated {updated}
                  </p>
                </div>
                <Badge value={status} />
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye /> Preview
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit3 /> Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <aside className="space-y-5">
          <div className="rounded-3xl bg-[#123f36] p-6 text-white">
            <ImageIcon className="text-[#efb24d]" />
            <h2 className="mt-4 font-serif text-2xl">Safe publishing</h2>
            <p className="mt-3 text-sm leading-6 text-white/65">
              Text, image and ordering changes can publish directly. Campaign,
              policy and safety changes go to Admin approval.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-5 w-full border-white/25 bg-white/10 text-white"
            >
              <Link href="/moderator/history">View version history</Link>
            </Button>
          </div>
          <div className="rounded-3xl border bg-white p-6">
            <p className="text-sm font-semibold">Homepage visibility</p>
            {[
              "Hero section",
              "Destination grid",
              "Food trail",
              "Before you go",
            ].map((x, i) => (
              <label
                key={x}
                className="mt-4 flex items-center justify-between text-sm"
              >
                <span>{x}</span>
                <Switch defaultChecked={i !== 2} />
              </label>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}

const resourceData: Record<string, string[][]> = {
  Destinations: [
    ["Cox’s Bazar", "Chattogram · Place", "Published", "Today"],
    ["Sundarbans", "Khulna · Place", "Published", "Yesterday"],
    ["Ratargul Swamp Forest", "Sylhet · Place", "Outdated", "8 days ago"],
    ["Puthia Temple Complex", "Rajshahi · Place", "Draft", "14 Aug"],
  ],
  Hotels: [
    ["Sea Pearl Beach Resort", "Cox’s Bazar · Hotel", "Verified", "Today"],
    ["The Palace Luxury Resort", "Habiganj · Hotel", "Published", "Yesterday"],
    ["Hotel Castle Salam", "Khulna · Hotel", "Outdated", "11 days ago"],
    ["Sajek Resort", "Rangamati · Hotel", "Draft", "18 Aug"],
  ],
  "Food Spots": [
    ["Haji Biriyani", "Dhaka · Restaurant", "Verified", "Today"],
    ["Poushee Restaurant", "Cox’s Bazar · Food spot", "Published", "Yesterday"],
    ["Panshi Restaurant", "Sylhet · Restaurant", "Outdated", "9 days ago"],
    ["Chui Jhal House", "Khulna · Food spot", "Draft", "20 Aug"],
  ],
  Transport: [
    ["Dhaka → Cox’s Bazar", "Bus · ৳1,200–2,200", "Verified", "Today"],
    ["Dhaka → Khulna", "Train · ৳625–1,700", "Published", "Yesterday"],
    ["Dhaka → Barishal", "Launch · ৳500–2,500", "Outdated", "12 days ago"],
    ["Chattogram → Bandarban", "Bus · ৳250–450", "Draft", "21 Aug"],
  ],
};

export function ResourceManager({ type }: { type: keyof typeof resourceData }) {
  const [query, setQuery] = useState("");
  const base =
    type === "Destinations"
      ? "destinations"
      : type === "Hotels"
        ? "hotels"
        : type === "Food Spots"
          ? "food"
          : "transport";
  const rows = resourceData[type].filter((x) =>
    x[0].toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <ModeratorHeading
        eyebrow="Content management"
        title={type}
        description={`Create, verify, update, unpublish or safely archive ${type.toLowerCase()} shown across TripPlan AI.`}
        action={
          <Button asChild className="rounded-full bg-[#123f36]">
            <Link href={`/moderator/${base}/new`}>
              <Plus /> Add {type === "Transport" ? "route" : "listing"}
            </Link>
          </Button>
        }
      />
      <section className="mt-7 overflow-hidden rounded-3xl border bg-white">
        <div className="flex flex-col gap-3 border-b p-5 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 size-4 text-[#8b9893]" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${type.toLowerCase()}...`}
              className="pl-9"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="outdated">Outdated</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter /> Filters
          </Button>
        </div>
        <div className="divide-y">
          {rows.map(([name, meta, status, updated]) => (
            <article
              key={name}
              className="flex flex-col gap-4 p-5 md:flex-row md:items-center"
            >
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#f5ead7] text-[#b87316]">
                {type === "Hotels" ? (
                  <Building2 />
                ) : type === "Transport" ? (
                  <MapPin />
                ) : (
                  <FileText />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="font-semibold">{name}</h2>
                <p className="mt-1 text-sm text-[#718079]">{meta}</p>
                <p className="mt-1 text-xs text-[#9aa39f]">Updated {updated}</p>
              </div>
              <Badge value={status} />
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline">
                  <Eye /> Preview
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link
                    href={`/moderator/${base}/${name.toLowerCase().replaceAll(" ", "-").replaceAll("’", "")}/edit`}
                  >
                    <Edit3 /> Edit
                  </Link>
                </Button>
                <Button size="sm" variant="outline">
                  <MoreHorizontal />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="mt-5 rounded-2xl border border-[#ead6b3] bg-[#fff7e8] p-4 text-sm text-[#77551e]">
        <ShieldCheck className="mr-2 inline size-4" />
        Permanent delete is disabled for moderators. Use Unpublish, Archive or
        Request deletion from Admin.
      </div>
    </>
  );
}

export function ContentEditor({
  type,
  id,
  creating = false,
}: {
  type: string;
  id?: string;
  creating?: boolean;
}) {
  const [status, setStatus] = useState(creating ? "Draft" : "Published");
  const [message, setMessage] = useState("");
  const labels: Record<
    string,
    { title: string; location: string; description: string }
  > = {
    destinations: {
      title: "Cox’s Bazar",
      location: "Cox’s Bazar, Chattogram",
      description:
        "The world’s longest natural sea beach, shaped into a practical Bangladesh travel guide.",
    },
    hotels: {
      title: "Sea Pearl Beach Resort",
      location: "Inani, Cox’s Bazar",
      description:
        "A family-friendly beachfront stay with pool, generator backup and verified amenities.",
    },
    food: {
      title: "Poushee Restaurant",
      location: "Cox’s Bazar, Chattogram",
      description:
        "Known for Bangla seafood platters, bhorta and locally popular family dining.",
    },
    transport: {
      title: "Dhaka → Cox’s Bazar",
      location: "Dhaka to Cox’s Bazar",
      description:
        "AC bus route with realistic traffic buffer, rest stops and verified fare range.",
    },
  };
  const item = labels[type] || labels.destinations;
  return (
    <>
      <ModeratorHeading
        eyebrow={`${creating ? "Create" : "Edit"} · ${type}`}
        title={
          creating
            ? `Add new ${type === "transport" ? "route" : "listing"}`
            : item.title
        }
        description="Changes are versioned. Routine corrections may publish directly; sensitive changes require Admin approval."
        action={
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              onClick={() =>
                setMessage("Preview ready in desktop and mobile modes.")
              }
            >
              <Eye />
              Preview
            </Button>
            <Button
              className="bg-[#123f36]"
              onClick={() => {
                setStatus("Published");
                setMessage("Changes published to the public website.");
              }}
            >
              <Check />
              Publish
            </Button>
          </div>
        }
      />
      {message && (
        <div
          role="status"
          className="mt-5 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
        >
          <CheckCircle2 className="size-5" />
          {message}
        </div>
      )}
      <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_340px]">
        <section className="rounded-3xl border bg-white p-6">
          <Tabs defaultValue="content">
            <TabsList className="h-auto w-full justify-start overflow-x-auto bg-[#f4f1e9]">
              <TabsTrigger value="content">Basic content</TabsTrigger>
              <TabsTrigger value="details">Travel details</TabsTrigger>
              <TabsTrigger value="media">Images</TabsTrigger>
              <TabsTrigger value="seo">SEO & publish</TabsTrigger>
            </TabsList>
            <TabsContent value="content" className="mt-6 space-y-5">
              <div>
                <Label>Name / title</Label>
                <Input
                  defaultValue={creating ? "" : item.title}
                  placeholder="Enter public title"
                  className="mt-2"
                />
              </div>
              <div>
                <Label>Location or route</Label>
                <Input
                  defaultValue={creating ? "" : item.location}
                  placeholder="District, division or route"
                  className="mt-2"
                />
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  defaultValue={creating ? "" : item.description}
                  className="mt-2 min-h-36"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label>Opening / departure time</Label>
                  <Input
                    defaultValue={
                      type === "transport" ? "10:30 PM" : "08:00 AM – 10:00 PM"
                    }
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Price / fare</Label>
                  <Input
                    defaultValue={
                      type === "transport" ? "৳1,200 – ৳2,200" : "৳500 – ৳8,000"
                    }
                    className="mt-2"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="details" className="mt-6">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Best season / service days",
                  "Amenities / facilities",
                  "Contact information",
                  "Map coordinates",
                  "Safety notes",
                  "Source / evidence",
                ].map((x) => (
                  <div key={x}>
                    <Label>{x}</Label>
                    <Input
                      className="mt-2"
                      placeholder={`Add ${x.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <Label>Local tips and verification note</Label>
                <Textarea className="mt-2 min-h-28" />
              </div>
            </TabsContent>
            <TabsContent value="media" className="mt-6">
              <div className="grid min-h-52 place-items-center rounded-2xl border-2 border-dashed border-[#d8d1c3] bg-[#faf8f3] text-center">
                <div>
                  <Upload className="mx-auto text-[#b87316]" />
                  <b className="mt-3 block">
                    Upload or choose from Media Library
                  </b>
                  <p className="mt-1 text-sm text-[#788780]">
                    Cover image, gallery and accessible alt text
                  </p>
                  <Button asChild variant="outline" className="mt-4">
                    <Link href="/moderator/media">Open Media Library</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="seo" className="mt-6 space-y-5">
              <div>
                <Label>URL slug</Label>
                <Input defaultValue={creating ? "" : id} className="mt-2" />
              </div>
              <div>
                <Label>Search title</Label>
                <Input
                  defaultValue={
                    creating ? "" : `${item.title} Travel Guide | TripPlan AI`
                  }
                  className="mt-2"
                />
              </div>
              <div>
                <Label>Search description</Label>
                <Textarea
                  className="mt-2 min-h-24"
                  defaultValue={item.description}
                />
              </div>
              <label className="flex items-center justify-between rounded-xl border p-4">
                <span>
                  <b className="block text-sm">Visible on public website</b>
                  <small className="text-[#788780]">
                    Unpublish without deleting history
                  </small>
                </span>
                <Switch defaultChecked={!creating} />
              </label>
            </TabsContent>
          </Tabs>
        </section>
        <aside className="space-y-5">
          <section className="rounded-3xl bg-[#123f36] p-6 text-white">
            <p className="text-xs uppercase tracking-[.18em] text-[#efb24d]">
              Publishing status
            </p>
            <div className="mt-4 flex items-center justify-between">
              <b className="font-serif text-2xl">{status}</b>
              <Badge value={status} />
            </div>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Last verified by Nishad Yeasmin · Today
            </p>
            <div className="mt-5 grid gap-2">
              <Button
                onClick={() => {
                  setStatus("Draft");
                  setMessage("Draft saved without changing the public page.");
                }}
                variant="outline"
                className="border-white/20 bg-white/10 text-white"
              >
                Save as draft
              </Button>
              <Button
                onClick={() => {
                  setStatus("Archived");
                  setMessage(
                    "Listing archived and removed from public discovery.",
                  );
                }}
                variant="outline"
                className="border-white/20 bg-white/10 text-white"
              >
                Archive listing
              </Button>
            </div>
          </section>
          <section className="rounded-3xl border border-[#ead6b3] bg-[#fff7e8] p-6">
            <AlertTriangle className="text-[#9a6412]" />
            <h3 className="mt-3 font-semibold">Permanent deletion</h3>
            <p className="mt-2 text-sm leading-6 text-[#77551e]">
              Moderators cannot permanently delete records linked to trips or
              reviews.
            </p>
            <Button
              onClick={() =>
                setMessage(
                  "Deletion request sent to Admin with the current version history.",
                )
              }
              variant="outline"
              className="mt-4 w-full border-[#d7b97f] text-[#77551e]"
            >
              <Trash2 />
              Request Admin deletion
            </Button>
          </section>
        </aside>
      </div>
    </>
  );
}

export function ContentVerificationPage() {
  const groups = [
    [
      "Places",
      "9 pending",
      "Name, location, images and duplicate checks",
      "/moderator/destinations",
    ],
    [
      "Hotels",
      "7 pending",
      "Price, amenities, contact and closure status",
      "/moderator/hotels",
    ],
    [
      "Food spots",
      "5 pending",
      "Signature dishes, price, hygiene and hours",
      "/moderator/food",
    ],
    [
      "Transport",
      "12 pending",
      "Route, fare, schedule and disruption checks",
      "/moderator/transport",
    ],
  ];
  return (
    <>
      <ModeratorHeading
        eyebrow="Accuracy workspace"
        title="Content verification"
        description="Review changes to core travel information before they reach public destination and Travel Essentials pages."
      />
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        {groups.map(([name, count, text, href]) => (
          <Link
            key={name}
            href={href}
            className="group rounded-3xl border bg-white p-6 transition hover:-translate-y-0.5 hover:border-[#e7a332]"
          >
            <div className="flex justify-between">
              <span className="grid size-11 place-items-center rounded-xl bg-[#f5ead7] text-[#b87316]">
                <FileText />
              </span>
              <Badge value={count} />
            </div>
            <h2 className="mt-6 font-serif text-2xl">{name}</h2>
            <p className="mt-2 text-sm leading-6 text-[#6d7d76]">{text}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
              Open verification queue{" "}
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
      <section className="mt-6 rounded-3xl bg-[#123f36] p-6 text-white">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#efb24d]">
              Verification policy
            </p>
            <h2 className="mt-2 font-serif text-2xl">
              Publish routine corrections. Escalate sensitive changes.
            </h2>
            <p className="mt-2 text-sm text-white/65">
              Ownership changes, permanent deletion, verified badges and
              safety-critical edits require Admin approval.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white/25 bg-white/10 text-white"
          >
            <Link href="/moderator/history">Open audit history</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

const reviews = [
  [
    "rev-204",
    "Hotel room was not like the photos",
    "Hotel Sea Crown",
    "Rahim Ahmed",
    "2",
    "High",
    "AI flagged",
  ],
  [
    "rev-205",
    "Excellent family stay near the beach",
    "Long Beach Hotel",
    "Nusrat Jahan",
    "5",
    "Low",
    "Pending",
  ],
  [
    "rev-206",
    "Food price was higher than listed",
    "Panshi Restaurant",
    "Tanvir Hasan",
    "3",
    "Medium",
    "Reported",
  ],
  [
    "rev-207",
    "Safe transport and polite staff",
    "Green Line",
    "Farzana Akter",
    "4",
    "Low",
    "Pending",
  ],
];

export function ReviewsPage() {
  const [active, setActive] = useState("Pending");
  return (
    <>
      <ModeratorHeading
        eyebrow="Community trust"
        title="Review queue"
        description="Investigate user-submitted place, hotel, food and transport reviews using AI signals and human evidence."
      />
      <Tabs value={active} onValueChange={setActive} className="mt-7">
        <TabsList className="h-auto w-full justify-start overflow-x-auto rounded-2xl bg-white p-2">
          <TabsTrigger value="Pending">Pending</TabsTrigger>
          <TabsTrigger value="AI flagged">AI flagged</TabsTrigger>
          <TabsTrigger value="Reported">Reported</TabsTrigger>
          <TabsTrigger value="Approved">Approved</TabsTrigger>
          <TabsTrigger value="Rejected">Rejected</TabsTrigger>
        </TabsList>
        {["Pending", "AI flagged", "Reported", "Approved", "Rejected"].map(
          (tab) => (
            <TabsContent key={tab} value={tab}>
              <ReviewTable filter={tab} />
            </TabsContent>
          ),
        )}
      </Tabs>
    </>
  );
}

function ReviewTable({ filter }: { filter: string }) {
  const shown = ["Approved", "Rejected"].includes(filter)
    ? reviews.slice(1, 3)
    : reviews.filter((r) =>
        filter === "Pending"
          ? ["Pending", "AI flagged", "Reported"].includes(r[6])
          : r[6] === filter,
      );
  return (
    <section className="mt-5 overflow-hidden rounded-3xl border bg-white">
      <div className="grid gap-3 border-b p-5 md:grid-cols-[1fr_160px_160px_auto]">
        <div className="relative">
          <Search className="absolute left-3 top-3 size-4 text-[#8a9792]" />
          <Input placeholder="Search review or user..." className="pl-9" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All content</SelectItem>
            <SelectItem value="hotel">Hotel</SelectItem>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="place">Place</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All risk</SelectItem>
            <SelectItem value="high">High risk</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low risk</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <CalendarDays /> Date
        </Button>
      </div>
      <div className="divide-y">
        {shown.map(([id, title, subject, user, rating, risk, status]) => (
          <article key={id} className="p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge value={risk} />
                  <span className="text-xs text-[#87938e]">
                    {status} · {id}
                  </span>
                </div>
                <h2 className="mt-3 font-semibold">“{title}”</h2>
                <p className="mt-1 text-sm text-[#6f7f78]">
                  {subject} · by {user}
                </p>
                <p className="mt-2 text-sm text-[#b87316]">
                  {"★".repeat(Number(rating))}
                  {"☆".repeat(5 - Number(rating))}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline">
                  <Link href={`/moderator/reviews/${id}`}>
                    <Eye /> Investigate
                  </Link>
                </Button>
                <Button size="sm" className="bg-[#17624f]">
                  <Check /> Approve
                </Button>
                <Button size="sm" variant="outline" className="text-[#a33b2e]">
                  <X /> Reject
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ReviewDetailPage({ id = "rev-204" }: { id?: string }) {
  const [decision, setDecision] = useState("");
  return (
    <>
      <ModeratorHeading
        eyebrow={`Investigation · ${id}`}
        title="Review evidence"
        description="Compare the original review, AI findings, account history and submitted evidence before taking action."
        action={
          <Button asChild variant="outline">
            <Link href="/moderator/reviews">← Back to queue</Link>
          </Button>
        }
      />
      <div className="mt-7 grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-6">
          <section className="rounded-3xl border bg-white p-6">
            <div className="flex items-center justify-between">
              <Badge value="High" />
              <span className="text-sm text-[#b87316]">★★☆☆☆</span>
            </div>
            <blockquote className="mt-5 font-serif text-2xl leading-9">
              “The room was damp and the bathroom photo did not match what we
              received. Staff asked for an extra service charge.”
            </blockquote>
            <div className="mt-6 flex items-center gap-3 border-t pt-5">
              <span className="grid size-11 place-items-center rounded-full bg-[#e7a332] font-bold text-white">
                RA
              </span>
              <div>
                <b>Rahim Ahmed</b>
                <p className="text-xs text-[#7e8c86]">
                  12 previous reviews · joined 2024
                </p>
              </div>
            </div>
          </section>
          <section className="rounded-3xl border bg-white p-6">
            <h2 className="font-serif text-2xl">Submitted evidence</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["Room photo", "Bathroom photo", "Payment receipt"].map(
                (x, i) => (
                  <div
                    key={x}
                    className="grid aspect-[4/3] place-items-center rounded-2xl bg-[#eee8dc] text-center text-xs text-[#6f7f78]"
                  >
                    <ImageIcon className="mb-2 size-6 text-[#b87316]" />
                    {x}
                  </div>
                ),
              )}
            </div>
          </section>
          <section className="rounded-3xl border bg-white p-6">
            <h2 className="font-serif text-2xl">Similar review comparison</h2>
            <p className="mt-3 text-sm leading-7 text-[#687972]">
              Two reviews from the last 30 days mention damp rooms. Wording
              similarity is 18%, so direct duplication is unlikely.
            </p>
          </section>
        </div>
        <aside className="space-y-6">
          <section className="rounded-3xl bg-[#123f36] p-6 text-white">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl">AI risk analysis</h2>
              <Bot className="text-[#efb24d]" />
            </div>
            <div className="mt-5 flex items-end justify-between">
              <b className="font-serif text-4xl">78%</b>
              <Badge value="High" />
            </div>
            <Progress value={78} className="mt-4 h-2 bg-white/15" />
            {[
              ["Spam probability", "22%"],
              ["Offensive content", "4%"],
              ["Evidence mismatch", "68%"],
              ["Suspicious rating", "71%"],
            ].map(([x, y]) => (
              <div key={x} className="mt-4 flex justify-between text-sm">
                <span className="text-white/60">{x}</span>
                <b>{y}</b>
              </div>
            ))}
          </section>
          <section className="rounded-3xl border bg-white p-6">
            <Label htmlFor="mod-note">Moderator note</Label>
            <Textarea
              id="mod-note"
              placeholder="Record evidence and reasoning..."
              className="mt-2 min-h-28"
            />
            <div className="mt-4 grid gap-2">
              <Button
                onClick={() => setDecision("Approved")}
                className="bg-[#17624f]"
              >
                <Check /> Approve review
              </Button>
              <Button
                onClick={() => setDecision("Evidence requested")}
                variant="outline"
              >
                <FileText /> Request evidence
              </Button>
              <Button
                onClick={() => setDecision("Escalated")}
                variant="outline"
                className="text-[#7b4aa5]"
              >
                <Send /> Escalate to Admin
              </Button>
              <Button
                onClick={() => setDecision("Rejected")}
                variant="outline"
                className="text-[#a33b2e]"
              >
                <X /> Reject review
              </Button>
            </div>
            {decision && (
              <p
                role="status"
                className="mt-4 rounded-xl bg-[#f4f1e9] p-3 text-sm"
              >
                Demo action recorded: <b>{decision}</b>
              </p>
            )}
          </section>
        </aside>
      </div>
    </>
  );
}

const aiItems = [
  [
    "ai-104",
    "Fake hotel rating cluster",
    "Hotel reviews",
    "92",
    "Five accounts share device and wording patterns",
  ],
  [
    "ai-105",
    "Outdated launch cabin fare",
    "Transport",
    "81",
    "Price differs from two recent user reports",
  ],
  [
    "ai-106",
    "Possible duplicate food listing",
    "Food spot",
    "74",
    "Location and phone match an existing record",
  ],
  [
    "ai-107",
    "Incorrect map pin",
    "Destination",
    "69",
    "Coordinates are 14 km from described place",
  ],
];
export function AIQueuePage() {
  return (
    <>
      <ModeratorHeading
        eyebrow="Human-in-the-loop AI"
        title="AI verification queue"
        description="AI prioritises suspicious content; moderators review evidence and make every final decision."
      />
      <div className="mt-7 grid gap-4">
        {aiItems.map(([id, title, type, score, reason]) => (
          <Link
            href={`/moderator/ai-review-queue/${id}`}
            key={id}
            className="group rounded-2xl border bg-white p-5 transition hover:border-[#e7a332]"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <span className="grid size-12 place-items-center rounded-xl bg-[#eee7fa] text-[#67449b]">
                <Bot />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap gap-2">
                  <Badge value={Number(score) > 85 ? "High" : "Medium"} />
                  <span className="text-xs text-[#84908b]">
                    {type} · {id}
                  </span>
                </div>
                <h2 className="mt-2 font-semibold">{title}</h2>
                <p className="mt-1 text-sm text-[#6d7d76]">{reason}</p>
              </div>
              <div className="text-right">
                <b className="font-serif text-3xl">{score}%</b>
                <p className="text-xs text-[#84908b]">risk score</p>
              </div>
              <ArrowRight className="size-5 transition group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
export function AIDetailPage({ id = "ai-104" }: { id?: string }) {
  return (
    <>
      <ModeratorHeading
        eyebrow={`AI case · ${id}`}
        title="Verify AI findings"
        description="Review the original record, model findings, suggested correction and evidence before confirming or dismissing the flag."
        action={
          <Button asChild variant="outline">
            <Link href="/moderator/ai-review-queue">← Back to AI queue</Link>
          </Button>
        }
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border bg-white p-6">
          <h2 className="font-serif text-2xl">Original content</h2>
          <div className="mt-5 rounded-2xl bg-[#f4f1e9] p-5">
            <p className="text-xs font-bold uppercase text-[#b87316]">
              Hotel review cluster
            </p>
            <p className="mt-3 leading-7">
              “Perfect hotel, perfect service, best view in Cox’s Bazar.”
            </p>
            <p className="mt-3 text-xs text-[#77867f]">
              Repeated across 5 new accounts within 18 minutes.
            </p>
          </div>
          <h3 className="mt-6 font-semibold">Similar database records</h3>
          {[
            "93% text similarity · Account A",
            "89% text similarity · Account B",
            "Same device signal · 4 accounts",
          ].map((x) => (
            <div
              key={x}
              className="mt-3 flex items-center gap-2 rounded-xl border p-3 text-sm"
            >
              <Copy className="size-4 text-[#b87316]" />
              {x}
            </div>
          ))}
        </section>
        <section className="rounded-3xl bg-[#123f36] p-6 text-white">
          <div className="flex justify-between">
            <h2 className="font-serif text-2xl">AI findings</h2>
            <b className="font-serif text-3xl text-[#efb24d]">92%</b>
          </div>
          {[
            ["Fake/spam probability", "94%"],
            ["Duplicate match", "89%"],
            ["Suspicious rating", "91%"],
            ["Offensive content", "0%"],
          ].map(([x, y]) => (
            <div key={x} className="mt-5">
              <div className="flex justify-between text-sm">
                <span className="text-white/65">{x}</span>
                <b>{y}</b>
              </div>
              <Progress
                value={Number(y.replace("%", ""))}
                className="mt-2 h-1.5 bg-white/15"
              />
            </div>
          ))}
          <div className="mt-6 rounded-2xl bg-white/10 p-4">
            <p className="text-xs uppercase tracking-wider text-[#efb24d]">
              Suggested action
            </p>
            <p className="mt-2 text-sm leading-6">
              Hold reviews, request booking evidence and escalate the linked
              account cluster.
            </p>
          </div>
        </section>
        <section className="rounded-3xl border bg-white p-6 lg:col-span-2">
          <Label htmlFor="ai-note">Correction or decision note</Label>
          <Textarea
            id="ai-note"
            className="mt-2 min-h-24"
            placeholder="Explain your human verification decision..."
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <Button className="bg-[#17624f]">
              <Check /> Confirm AI flag
            </Button>
            <Button variant="outline">
              <X /> Dismiss flag
            </Button>
            <Button variant="outline">
              <Edit3 /> Apply correction
            </Button>
            <Button variant="outline" className="text-[#7b4aa5]">
              <Send /> Escalate to Admin
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}

export function ReportsPage() {
  const [done, setDone] = useState<string[]>([]);
  const items = [
    [
      "REP-88",
      "Safety issue",
      "Teknaf marine route",
      "High",
      "Boat departed during rough weather",
    ],
    [
      "REP-89",
      "Wrong price",
      "Hotel Castle Salam",
      "Medium",
      "Room price is ৳800 higher",
    ],
    [
      "REP-90",
      "Closed restaurant",
      "Panshi Restaurant branch",
      "Medium",
      "Location appears permanently closed",
    ],
    [
      "REP-91",
      "Misleading image",
      "Ratargul tour listing",
      "Low",
      "Photo belongs to another season",
    ],
  ];
  return (
    <>
      <ModeratorHeading
        eyebrow="Community reports"
        title="User reports"
        description="Investigate grouped reports, protect travellers quickly and keep content owners accountable."
      />
      <section className="mt-7 divide-y overflow-hidden rounded-3xl border bg-white">
        {items.map(([id, type, item, risk, note]) => (
          <article key={id} className="p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <span className="grid size-11 place-items-center rounded-xl bg-[#fee9e5] text-[#a33b2e]">
                <Flag />
              </span>
              <div className="flex-1">
                <div className="flex gap-2">
                  <Badge value={risk} />
                  <span className="text-xs text-[#84908b]">
                    {id} · {type}
                  </span>
                </div>
                <h2 className="mt-2 font-semibold">{item}</h2>
                <p className="mt-1 text-sm text-[#6f7f78]">{note}</p>
              </div>
              {done.includes(id) ? (
                <Badge value="Resolved" />
              ) : (
                <div className="flex flex-wrap gap-2">
                  <Button
                    size="sm"
                    onClick={() => setDone([...done, id])}
                    className="bg-[#17624f]"
                  >
                    <Check /> Resolve
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit3 /> Update content
                  </Button>
                  <Button size="sm" variant="outline">
                    <Send /> Escalate
                  </Button>
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export function AlertsPage() {
  const [published, setPublished] = useState<string[]>(["ALT-31"]);
  const alerts = [
    [
      "ALT-31",
      "Weather warning",
      "Cox’s Bazar",
      "High",
      "Heavy rainfall and rough sea until 30 August",
    ],
    [
      "ALT-32",
      "Road closure",
      "Bandarban",
      "High",
      "Thanchi road temporarily restricted",
    ],
    [
      "ALT-33",
      "Transport disruption",
      "Dhaka–Khulna",
      "Medium",
      "Train delay reported after signalling issue",
    ],
  ];
  return (
    <>
      <ModeratorHeading
        eyebrow="Traveller safety"
        title="Travel alerts"
        description="Verify source, affected location, severity and expiry before publishing safety information."
        action={
          <Button className="rounded-full bg-[#123f36]">
            <Plus /> Create alert
          </Button>
        }
      />
      <div className="mt-7 grid gap-5">
        {alerts.map(([id, type, place, risk, text]) => (
          <article key={id} className="rounded-3xl border bg-white p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">
              <span className="grid size-12 place-items-center rounded-2xl bg-[#fff1d8] text-[#9a6412]">
                <BellRing />
              </span>
              <div className="flex-1">
                <div className="flex gap-2">
                  <Badge value={risk} />
                  <span className="text-xs text-[#84908b]">
                    {id} · {type}
                  </span>
                </div>
                <h2 className="mt-2 font-semibold">{place}</h2>
                <p className="mt-1 text-sm text-[#6d7d76]">{text}</p>
                <p className="mt-2 text-xs text-[#9a6412]">
                  Expiry required · Source verification pending
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline">
                  <Edit3 /> Edit
                </Button>
                <Button
                  size="sm"
                  onClick={() =>
                    setPublished(
                      published.includes(id)
                        ? published.filter((x) => x !== id)
                        : [...published, id],
                    )
                  }
                  className={
                    published.includes(id) ? "bg-[#a33b2e]" : "bg-[#17624f]"
                  }
                >
                  {published.includes(id) ? "Unpublish" : "Verify & publish"}
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function MediaPage() {
  return (
    <>
      <ModeratorHeading
        eyebrow="Shared asset library"
        title="Media library"
        description="Upload, organise and reuse verified images across destinations, hotels, food spots and public pages."
        action={
          <Button className="rounded-full bg-[#123f36]">
            <Upload /> Upload image
          </Button>
        }
      />
      <section className="mt-7 rounded-3xl border bg-white p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_180px_auto]">
          <div className="relative">
            <Search className="absolute left-3 top-3 size-4 text-[#8b9893]" />
            <Input
              placeholder="Search filename or alt text..."
              className="pl-9"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              <SelectItem value="place">Destinations</SelectItem>
              <SelectItem value="hotel">Hotels</SelectItem>
              <SelectItem value="food">Food</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter />
            Filters
          </Button>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {[
            "Sundarbans river",
            "Cox’s Bazar beach",
            "Sajek sunrise",
            "Hilsa platter",
            "Hotel room",
            "Ratargul boat",
            "Kuakata sunset",
            "Train cabin",
          ].map((x, i) => (
            <article key={x} className="overflow-hidden rounded-2xl border">
              <div
                className={`grid aspect-[4/3] place-items-center ${i % 3 === 0 ? "bg-[#dce9e2]" : i % 3 === 1 ? "bg-[#eadfc9]" : "bg-[#dce5ec]"}`}
              >
                <ImageIcon className="size-8 text-[#59736a]" />
              </div>
              <div className="p-3">
                <b className="block truncate text-sm">{x}</b>
                <p className="mt-1 text-xs text-[#819089]">
                  Used in {(i % 3) + 1} places
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export function HistoryPage() {
  const actions = [
    ["Approved review rev-205", "Review", "Approved", "8 min ago"],
    ["Updated Kuakata entry fee", "Destination", "Correction", "26 min ago"],
    ["Escalated REP-88 to Admin", "Safety report", "Escalated", "41 min ago"],
    ["Published Cox’s Bazar alert", "Travel alert", "Published", "1 hour ago"],
    [
      "Archived duplicate food listing",
      "Food spot",
      "Correction",
      "2 hours ago",
    ],
  ];
  return (
    <>
      <ModeratorHeading
        eyebrow="Accountability & audit"
        title="Activity history"
        description="Every moderation decision, correction, publication and escalation is recorded and cannot be deleted."
      />
      <section className="mt-7 overflow-hidden rounded-3xl border bg-white">
        <div className="grid gap-3 border-b p-5 md:grid-cols-[1fr_180px_180px]">
          <div className="relative">
            <Search className="absolute left-3 top-3 size-4 text-[#8b9893]" />
            <Input placeholder="Search action..." className="pl-9" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All actions</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="correction">Corrections</SelectItem>
              <SelectItem value="escalated">Escalated</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <CalendarDays />
            Date range
          </Button>
        </div>
        <div className="divide-y">
          {actions.map(([action, type, status, time]) => (
            <div
              key={action}
              className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center"
            >
              <span className="grid size-10 place-items-center rounded-full bg-[#e7f1ec] text-[#17624f]">
                <CheckCircle2 className="size-5" />
              </span>
              <div className="flex-1">
                <b>{action}</b>
                <p className="text-xs text-[#7f8d87]">
                  {type} · {time}
                </p>
              </div>
              <Badge value={status} />
              <span className="text-xs text-[#88958f]">Not reversed</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function ModeratorProfilePage() {
  const [saved, setSaved] = useState(false);
  return (
    <>
      <ModeratorHeading
        eyebrow="Moderator account"
        title="Profile & assignments"
        description="Manage your personal details, assigned categories, security and moderation notifications."
      />
      <div className="mt-7 grid gap-6 lg:grid-cols-[360px_1fr]">
        <aside className="rounded-3xl bg-[#123f36] p-7 text-center text-white">
          <span className="mx-auto grid size-24 place-items-center rounded-full bg-[#e7a332] font-serif text-3xl">
            NI
          </span>
          <h2 className="mt-4 font-serif text-2xl">Nishad Yeasmin</h2>
          <p className="text-sm text-white/60">Content Moderator</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-4">
              <b className="text-xl">1,284</b>
              <span className="block text-xs text-white/55">Decisions</span>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <b className="text-xl">94%</b>
              <span className="block text-xs text-white/55">AI agreement</span>
            </div>
          </div>
          <div className="mt-5 rounded-2xl bg-white/10 p-4 text-left">
            <p className="text-xs uppercase tracking-wider text-[#efb24d]">
              Assigned categories
            </p>
            <p className="mt-2 text-sm">
              Destinations · Hotels · Food · Safety alerts
            </p>
          </div>
        </aside>
        <section className="rounded-3xl border bg-white p-6 sm:p-8">
          <h2 className="font-serif text-2xl">Account settings</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <Label>Full name</Label>
              <Input defaultValue="Nishad Yeasmin" className="mt-2" />
            </div>
            <div>
              <Label>Email</Label>
              <Input defaultValue="nishad@tripplanai.bd" className="mt-2" />
            </div>
            <div>
              <Label>Home division</Label>
              <Input defaultValue="Dhaka" className="mt-2" />
            </div>
            <div>
              <Label>Shift</Label>
              <Input defaultValue="09:00 AM – 05:00 PM" className="mt-2" />
            </div>
          </div>
          <div className="mt-7 border-t pt-6">
            <h3 className="font-semibold">Notification preferences</h3>
            {[
              ["High-risk safety reports", true],
              ["New AI flags", true],
              ["Admin feedback", true],
              ["Daily summary", false],
            ].map(([x, on]) => (
              <label
                key={String(x)}
                className="mt-4 flex items-center justify-between text-sm"
              >
                <span>{String(x)}</span>
                <Switch defaultChecked={Boolean(on)} />
              </label>
            ))}
          </div>
          <Button onClick={() => setSaved(true)} className="mt-7 bg-[#123f36]">
            Save changes
          </Button>
          {saved && (
            <span className="ml-3 text-sm text-[#17624f]">
              Saved successfully.
            </span>
          )}
        </section>
      </div>
    </>
  );
}
