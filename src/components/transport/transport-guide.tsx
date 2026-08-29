"use client";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bus,
  Clock,
  MapPin,
  Plane,
  ShieldCheck,
  Ship,
  TrainFront,
  Navigation,
} from "lucide-react";
const cities = [
  "Dhaka",
  "Chattogram",
  "Cox's Bazar",
  "Khulna",
  "Sylhet",
  "Rajshahi",
  "Barishal",
  "Sajek",
];
const info: Record<
  string,
  {
    distance: number;
    bus: number;
    train: number;
    flight: number;
    launch: boolean;
  }
> = {
  "Dhaka-Cox's Bazar": {
    distance: 395,
    bus: 11,
    train: 9,
    flight: 1.2,
    launch: false,
  },
  "Dhaka-Chattogram": {
    distance: 265,
    bus: 7,
    train: 6.5,
    flight: 1,
    launch: false,
  },
  "Dhaka-Khulna": { distance: 270, bus: 8, train: 8, flight: 1, launch: false },
  "Dhaka-Sylhet": { distance: 240, bus: 7, train: 7, flight: 1, launch: false },
  "Dhaka-Rajshahi": {
    distance: 245,
    bus: 7,
    train: 6,
    flight: 1,
    launch: false,
  },
  "Dhaka-Barishal": {
    distance: 180,
    bus: 5,
    train: 0,
    flight: 1,
    launch: true,
  },
  "Dhaka-Sajek": { distance: 330, bus: 10, train: 0, flight: 0, launch: false },
};
const modes = [
  {
    mode: "Bus",
    icon: Bus,
    color: "#e29a2e",
    base: 2.6,
    note: "Direct coach · widest schedule",
  },
  {
    mode: "Train",
    icon: TrainFront,
    color: "#24765e",
    base: 3.1,
    note: "Comfortable · advance ticket needed",
  },
  {
    mode: "Flight",
    icon: Plane,
    color: "#397ba6",
    base: 14,
    note: "Fastest · airport transfer extra",
  },
  {
    mode: "Launch",
    icon: Ship,
    color: "#6d63a6",
    base: 2.2,
    note: "Overnight cabin · river route only",
  },
];
export function TransportGuide() {
  const [from, setFrom] = useState("Dhaka"),
    [to, setTo] = useState("Cox's Bazar"),
    [type, setType] = useState("Family");
  const route = info[`${from}-${to}`] ||
    info[`${to}-${from}`] || {
      distance: 220,
      bus: 7,
      train: 6,
      flight: 1,
      launch: false,
    };
  const options = useMemo(
    () =>
      modes
        .filter(
          (m) =>
            (m.mode !== "Train" || route.train > 0) &&
            (m.mode !== "Flight" || route.flight > 0) &&
            (m.mode !== "Launch" || route.launch),
        )
        .map((m) => {
          const time =
            m.mode === "Bus"
              ? route.bus
              : m.mode === "Train"
                ? route.train
                : m.mode === "Flight"
                  ? route.flight + 2.5
                  : 10;
          const fare =
            Math.round(
              (route.distance * m.base + (m.mode === "Flight" ? 2200 : 0)) / 50,
            ) * 50;
          return { ...m, time, fare };
        }),
    [route],
  );
  const recommended =
    type === "Budget"
      ? options.reduce((a, b) => (a.fare < b.fare ? a : b))
      : type === "Fastest"
        ? options.reduce((a, b) => (a.time < b.time ? a : b))
        : options.find((x) => x.mode === "Train") || options[0];
  const steps = [
    ["01", `${from} home → terminal`, "CNG / rideshare · ৳150–350"],
    [
      "02",
      `${recommended.mode} journey`,
      `${recommended.time} hrs · ৳${recommended.fare}`,
    ],
    ["03", `${to} terminal → hotel`, "Local ride · ৳100–400"],
  ];
  return (
    <div>
      <section className="tf-hero-panel relative overflow-hidden rounded-[2rem] bg-[#123f36] p-6 text-white sm:p-10">
        <div className="tf-orbit opacity-40" />
        <div className="relative grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#efb24d]">
              Smart route guide
            </p>
            <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
              Know how to go,
              <br />
              before you leave.
            </h1>
            <p className="mt-4 leading-7 text-[#c4d5d0]">
              Transport mode, fare, journey time, boarding point ও transfer
              একসঙ্গে compare করুন।
            </p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto_1fr]">
              <PlaceSelect
                label="Starting from"
                value={from}
                onChange={setFrom}
                exclude={to}
              />
              <span className="hidden self-end pb-3 sm:block">→</span>
              <PlaceSelect
                label="Going to"
                value={to}
                onChange={setTo}
                exclude={from}
              />
            </div>
            <div className="mt-4 flex gap-2">
              {["Family", "Budget", "Fastest"].map((x) => (
                <button
                  key={x}
                  onClick={() => setType(x)}
                  className={`rounded-full border border-white/20 px-4 py-2 text-xs ${type === x ? "bg-[#e29a2e] font-bold text-[#173d35]" : "bg-white/5"}`}
                >
                  {x}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mt-7 grid gap-6 lg:grid-cols-[1fr_310px]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
            {route.distance} km estimated route
          </p>
          <h2 className="mt-1 font-serif text-3xl">Compare your options</h2>
          <div className="mt-5 space-y-4">
            {options.map((o) => {
              const I = o.icon,
                best = o.mode === recommended.mode;
              return (
                <article
                  key={o.mode}
                  className={`tf-tilt-card grid gap-5 rounded-2xl border bg-white p-5 sm:grid-cols-[auto_1fr_auto] ${best ? "border-[#d89a39] ring-2 ring-[#e29a2e]/20" : ""}`}
                >
                  <span
                    className="grid size-12 place-items-center rounded-xl text-white"
                    style={{ backgroundColor: o.color }}
                  >
                    <I />
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-2xl">{o.mode}</h3>
                      {best && (
                        <span className="rounded-full bg-[#fff0d2] px-2 py-1 text-[10px] font-bold">
                          BEST FOR {type.toUpperCase()}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-[#6b7c75]">{o.note}</p>
                    <p className="mt-3 text-xs">
                      <Clock className="mr-1 inline size-3 text-[#c77c19]" />
                      {o.time} hrs ·{" "}
                      <MapPin className="ml-2 mr-1 inline size-3 text-[#c77c19]" />
                      {from} → {to}
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <small>one-way from</small>
                    <b className="block text-xl">৳{o.fare.toLocaleString()}</b>
                    <Button size="sm" variant="outline" className="mt-2">
                      Check schedule
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <aside className="h-fit space-y-4 lg:sticky lg:top-24">
          <div className="rounded-2xl border bg-white p-5">
            <h3 className="font-serif text-xl">Door-to-door route</h3>
            <div className="mt-5">
              {steps.map(([n, t, x]) => (
                <div key={n} className="flex gap-3 pb-5">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#123f36] text-xs text-white">
                    {n}
                  </span>
                  <div>
                    <b className="text-sm">{t}</b>
                    <p className="mt-1 text-xs text-[#71817a]">{x}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-[#fff1d7] p-5">
            <ShieldCheck className="text-[#b87316]" />
            <h3 className="mt-3 font-semibold">Travel safety note</h3>
            <p className="mt-2 text-xs leading-5">
              Use known counters, verify vehicle details and share journey
              information with family.
            </p>
          </div>
          <a
            href={`https://www.google.com/maps/dir/${encodeURIComponent(from)}/${encodeURIComponent(to)}`}
            target="_blank"
            rel="noreferrer"
          >
            <Button className="w-full bg-[#123f36]">
              <Navigation /> Open directions
            </Button>
          </a>
        </aside>
      </section>
    </div>
  );
}
function PlaceSelect({
  label,
  value,
  onChange,
  exclude,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  exclude: string;
}) {
  return (
    <div>
      <label className="text-xs text-[#c4d5d0]">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="mt-2 h-12 w-full bg-white text-[#173d35]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {cities
            .filter((c) => c !== exclude)
            .map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
