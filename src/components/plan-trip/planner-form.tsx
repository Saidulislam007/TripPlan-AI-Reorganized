"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sparkles, ArrowRight, MapPin, Wallet } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

const bdPlaces = [
  "Dhaka, Dhaka",
  "Uttara, Dhaka",
  "Dhanmondi, Dhaka",
  "Mirpur, Dhaka",
  "Gulshan, Dhaka",
  "Cox's Bazar, Chattogram",
  "Inani Beach, Cox's Bazar",
  "Himchari, Cox's Bazar",
  "Saint Martin Island, Cox's Bazar",
  "Chattogram",
  "Patenga, Chattogram",
  "Sitakunda, Chattogram",
  "Banshkhali, Chattogram",
  "Sajek Valley, Rangamati",
  "Rangamati",
  "Kaptai, Rangamati",
  "Bandarban",
  "Nilgiri, Bandarban",
  "Thanchi, Bandarban",
  "Sylhet",
  "Sreemangal, Moulvibazar",
  "Jaflong, Sylhet",
  "Ratargul, Sylhet",
  "Bichanakandi, Sylhet",
  "Khulna",
  "Sundarbans, Khulna",
  "Bagerhat",
  "Jashore",
  "Satkhira",
  "Kuakata, Patuakhali",
  "Barishal",
  "Bhola",
  "Pirojpur",
  "Rajshahi",
  "Puthia, Rajshahi",
  "Natore",
  "Paharpur, Naogaon",
  "Bogura",
  "Rangpur",
  "Dinajpur",
  "Panchagarh",
  "Tetulia, Panchagarh",
  "Mymensingh",
  "Netrokona",
  "Birishiri, Netrokona",
  "Tangail",
  "Madhupur, Tangail",
  "Cumilla",
  "Brahmanbaria",
  "Noakhali",
  "Feni",
  "Chandpur",
  "Narayanganj",
  "Gazipur",
  "Narsingdi",
];

function PlaceCombobox({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <Combobox
      items={bdPlaces}
      value={value}
      onValueChange={(v) => onChange(v ?? "")}
    >
      <div className="relative mt-2">
        <MapPin className="pointer-events-none absolute left-3 top-3 z-10 size-5 text-[#c77c19]" />
        <ComboboxInput
          placeholder={placeholder}
          className="h-12 w-full rounded-xl pl-9"
          showClear
        />
      </div>
      <ComboboxContent className="rounded-xl border-[#ddd8ca]">
        <ComboboxEmpty>
          No saved place found — keep typing your place name.
        </ComboboxEmpty>
        <ComboboxList>
          {(place: string) => (
            <ComboboxItem key={place} value={place} className="py-3">
              <MapPin className="text-[#c77c19]" />
              <span>
                <b className="block font-medium">{place.split(",")[0]}</b>
                <small className="text-[#73837d]">
                  {place.includes(",")
                    ? place.split(",").slice(1).join(",")
                    : "Bangladesh"}
                </small>
              </span>
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}

const Pill = ({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`rounded-full border px-4 py-2 text-sm transition ${active ? "border-[#123f36] bg-[#123f36] text-white" : "border-[#d8d5ca] bg-white text-[#3b5d55] hover:border-[#123f36]"}`}
  >
    {children}
  </button>
);
export function PlannerForm() {
  const searchParams = useSearchParams();
  const [days, setDays] = useState([4]);
  const [destination, setDestination] = useState(
    searchParams.get("destination") || "Cox's Bazar, Chattogram",
  );
  const [start, setStart] = useState("Dhaka, Dhaka");
  const [budget, setBudget] = useState("25000");
  const [style, setStyle] = useState("Family");
  const [food, setFood] = useState("Local Bangla");
  const [pace, setPace] = useState("Balanced");
  const planHref = `/itinerary?destination=${encodeURIComponent(destination)}&start=${encodeURIComponent(start)}&budget=${encodeURIComponent(budget)}&days=${days[0]}&style=${style}&food=${encodeURIComponent(food)}&pace=${pace}`;
  return (
    <div className="tf-form-3d rounded-[2rem] border border-[#ddd8ca] bg-white/95 p-5 backdrop-blur-xl sm:p-8">
      <div className="mb-8 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-full bg-[#f4e6ca] text-[#a56817]">
          <Sparkles />
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
            AI trip maker
          </p>
          <h2 className="font-serif text-2xl">Tell us how you travel</h2>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Label>Where do you want to go?</Label>
          <PlaceCombobox
            value={destination}
            onChange={setDestination}
            placeholder="Search any place in Bangladesh"
          />
          <p className="mt-2 text-xs text-[#7a8983]">
            Try “Sajek”, “Ratargul”, “Kuakata” or type your own local place.
          </p>
        </div>
        <div>
          <Label>Starting from</Label>
          <PlaceCombobox
            value={start}
            onChange={setStart}
            placeholder="Your area or city"
          />
        </div>
        <div>
          <Label>Total budget</Label>
          <div className="relative mt-2">
            <Wallet className="absolute left-3 top-3 size-5 text-[#c77c19]" />
            <Input
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="h-12 rounded-xl pl-10"
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <div className="flex justify-between">
          <Label>How many days?</Label>
          <b>{days[0]} days</b>
        </div>
        <Slider
          value={days}
          onValueChange={setDays}
          min={1}
          max={14}
          step={1}
          className="mt-4"
        />
      </div>
      <div className="mt-6">
        <Label>Travel style</Label>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Family", "Couple", "Friends", "Solo", "Business"].map((x) => (
            <Pill key={x} active={style === x} onClick={() => setStyle(x)}>
              {x}
            </Pill>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Label>Food preference</Label>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Local Bangla",
            "Halal only",
            "Seafood",
            "Vegetarian",
            "Child-friendly",
          ].map((x) => (
            <Pill key={x} active={food === x} onClick={() => setFood(x)}>
              {x}
            </Pill>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <Label>Preferred pace</Label>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Relaxed", "Balanced", "Fast"].map((x) => (
            <Pill key={x} active={pace === x} onClick={() => setPace(x)}>
              {x}
            </Pill>
          ))}
        </div>
      </div>
      <label className="mt-6 flex items-start gap-3 rounded-xl bg-[#f5f1e7] p-4 text-sm text-[#3d5d55]">
        <Checkbox defaultChecked className="mt-0.5" />
        <span>
          Include prayer/rest stops, safe family areas and realistic Bangladesh
          traffic buffer.
        </span>
      </label>
      <Button
        asChild
        className="mt-6 h-13 w-full rounded-xl bg-[#e29a2e] text-[#173d35] hover:bg-[#d98b19]"
      >
        <Link href={planHref}>
          <Sparkles /> Generate my itinerary <ArrowRight />
        </Link>
      </Button>
      <p className="mt-3 text-center text-xs text-[#75877f]">
        Takes less than a minute • Edit anytime
      </p>
    </div>
  );
}
