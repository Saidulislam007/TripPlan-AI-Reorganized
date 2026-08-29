"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Bus,
  CalendarDays,
  MapPin,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const fields = {
  style: ["Family", "Couple", "Friends", "Solo", "Business"],
  food: [
    "Local Bangla",
    "Halal only",
    "Seafood",
    "Vegetarian",
    "Child-friendly",
  ],
  pace: ["Relaxed", "Balanced", "Fast"],
  transport: [
    "Best overall",
    "Bus",
    "Train",
    "Flight",
    "Launch",
    "Private car",
  ],
};

export function TravelIntelligenceForm() {
  const searchParams = useSearchParams();
  const [start, setStart] = useState("Dhaka");
  const [destination, setDestination] = useState(
    searchParams.get("destination") || "Cox's Bazar",
  );
  const [date, setDate] = useState("2026-09-12");
  const [days, setDays] = useState([4]);
  const [travellers, setTravellers] = useState("4");
  const [budget, setBudget] = useState("25000");
  const [style, setStyle] = useState("Family");
  const [food, setFood] = useState("Local Bangla");
  const [pace, setPace] = useState("Balanced");
  const [transport, setTransport] = useState("Best overall");
  const [child, setChild] = useState(true);
  const [senior, setSenior] = useState(false);
  const href = useMemo(
    () =>
      `/travel-intelligence/bd-smart-plan?start=${encodeURIComponent(start)}&destination=${encodeURIComponent(destination)}&date=${date}&days=${days[0]}&travellers=${travellers}&budget=${budget}&style=${style}&food=${encodeURIComponent(food)}&pace=${pace}&transport=${encodeURIComponent(transport)}&child=${child}&senior=${senior}`,
    [
      start,
      destination,
      date,
      days,
      travellers,
      budget,
      style,
      food,
      pace,
      transport,
      child,
      senior,
    ],
  );
  const pick = (
    label: string,
    value: string,
    setter: (v: string) => void,
    items: string[],
  ) => (
    <div>
      <Label>{label}</Label>
      <Select value={value} onValueChange={setter}>
        <SelectTrigger className="mt-2 h-12 w-full rounded-xl bg-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {items.map((x) => (
            <SelectItem value={x} key={x}>
              {x}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
  return (
    <div className="rounded-[2rem] border border-[#ddd6c7] bg-white p-5 shadow-xl sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label>Starting location</Label>
          <div className="relative mt-2">
            <MapPin className="absolute left-3 top-3.5 size-5 text-[#c77c19]" />
            <Input
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="h-12 rounded-xl pl-10"
            />
          </div>
        </div>
        <div>
          <Label>Destination</Label>
          <div className="relative mt-2">
            <MapPin className="absolute left-3 top-3.5 size-5 text-[#c77c19]" />
            <Input
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="h-12 rounded-xl pl-10"
            />
          </div>
        </div>
        <div>
          <Label>Travel date</Label>
          <div className="relative mt-2">
            <CalendarDays className="absolute left-3 top-3.5 size-5 text-[#c77c19]" />
            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="h-12 rounded-xl pl-10"
            />
          </div>
        </div>
        <div>
          <Label>Total travellers</Label>
          <div className="relative mt-2">
            <Users className="absolute left-3 top-3.5 size-5 text-[#c77c19]" />
            <Input
              type="number"
              min="1"
              max="20"
              value={travellers}
              onChange={(e) => setTravellers(e.target.value)}
              className="h-12 rounded-xl pl-10"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <Label>Number of days</Label>
            <b>{days[0]} days</b>
          </div>
          <Slider
            value={days}
            onValueChange={setDays}
            min={1}
            max={10}
            step={1}
            className="mt-4"
          />
        </div>
        <div>
          <Label>Total budget</Label>
          <div className="relative mt-2">
            <Wallet className="absolute left-3 top-3.5 size-5 text-[#c77c19]" />
            <Input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="h-12 rounded-xl pl-10"
            />
          </div>
        </div>
        {pick("Travel style", style, setStyle, fields.style)}
        {pick("Food preference", food, setFood, fields.food)}
        {pick("Preferred pace", pace, setPace, fields.pace)}
        <div className="sm:col-span-2">
          {pick(
            "Transport preference",
            transport,
            setTransport,
            fields.transport,
          )}
        </div>
        <div className="sm:col-span-2 rounded-2xl bg-[#f6f3eb] p-4">
          <p className="text-sm font-semibold">Who needs extra care?</p>
          <div className="mt-3 flex flex-wrap gap-6 text-sm">
            <label className="flex items-center gap-2">
              <Checkbox
                checked={child}
                onCheckedChange={(v) => setChild(!!v)}
              />
              Travelling with child
            </label>
            <label className="flex items-center gap-2">
              <Checkbox
                checked={senior}
                onCheckedChange={(v) => setSenior(!!v)}
              />
              Travelling with senior citizen
            </label>
          </div>
        </div>
      </div>
      <Button
        asChild
        className="mt-6 h-13 w-full rounded-xl bg-[#e7a332] text-[#123f36] hover:bg-[#efb653]"
      >
        <Link href={href}>
          <Sparkles /> Generate intelligence report <ArrowRight />
        </Link>
      </Button>
      <p className="mt-3 text-center text-xs text-[#7d8984]">
        Includes Bangladesh traffic buffer, rest stops and realistic cost
        reasoning.
      </p>
    </div>
  );
}
