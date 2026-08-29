"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { hotelDivision, hotels, totalPrice } from "@/lib/hotels";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Heart,
  MapPin,
  Search,
  SlidersHorizontal,
  Star,
  Wifi,
  Zap,
  Flame,
  Scale,
  CheckCircle2,
} from "lucide-react";
const STORE = "tripflow-hotel-wishlist";
const divisions = [
  "Chattogram",
  "Dhaka",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
];
const divisionBn: Record<string, string> = {
  Chattogram: "চট্টগ্রাম",
  Dhaka: "ঢাকা",
  Rajshahi: "রাজশাহী",
  Khulna: "খুলনা",
  Barishal: "বরিশাল",
  Sylhet: "সিলেট",
};
export function HotelExplorer() {
  const [division, setDivision] = useState("Chattogram");
  const [query, setQuery] = useState("");
  const [max, setMax] = useState([8000]);
  const [breakfast, setBreakfast] = useState(false);
  const [freeCancel, setFreeCancel] = useState(false);
  const [wish, setWish] = useState<string[]>(() =>
    typeof window === "undefined"
      ? []
      : JSON.parse(localStorage.getItem(STORE) || "[]"),
  );
  const [compare, setCompare] = useState<string[]>([]);
  const list = useMemo(
    () =>
      hotels.filter(
        (h) =>
          hotelDivision(h) === division &&
          (h.destination + " " + h.name)
            .toLowerCase()
            .includes(query.toLowerCase()) &&
          totalPrice(h) <= max[0] &&
          (!breakfast || h.amenities.includes("Breakfast")) &&
          (!freeCancel || h.cancellation.startsWith("Free")),
      ),
    [query, max, breakfast, freeCancel, division],
  );
  const toggleWish = (s: string) => {
    const n = wish.includes(s) ? wish.filter((x) => x !== s) : [...wish, s];
    setWish(n);
    localStorage.setItem(STORE, JSON.stringify(n));
  };
  const toggleCompare = (s: string) =>
    setCompare((c) =>
      c.includes(s) ? c.filter((x) => x !== s) : c.length < 3 ? [...c, s] : c,
    );
  const changeDivision = (value: string) => {
    setDivision(value);
    setQuery("");
    setCompare([]);
  };
  return (
    <>
      <section className="mt-8 rounded-3xl border bg-white p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
              Where are you staying?
            </p>
            <h2 className="mt-2 font-serif text-3xl">
              {divisionBn[division]} বিভাগের best stays
            </h2>
            <p className="mt-2 text-sm text-[#71817a]">
              শুধু selected বিভাগের city, tourist area ও nearby destination-এর
              hotels দেখানো হচ্ছে।
            </p>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
            {divisions.map((d) => (
              <button
                key={d}
                onClick={() => changeDivision(d)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${division === d ? "border-[#123f36] bg-[#123f36] text-white" : "bg-[#faf8f2] hover:border-[#123f36]"}`}
              >
                {divisionBn[d]}
              </button>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-8 grid gap-6 lg:grid-cols-[270px_1fr]">
        <aside className="h-fit rounded-2xl border bg-white p-5 lg:sticky lg:top-24">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="size-5 text-[#c77c19]" />
            <h2 className="font-serif text-xl">Smart filters</h2>
          </div>
          <div className="mt-6">
            <label className="text-sm font-semibold">
              Destination or hotel
            </label>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-3 size-4 text-[#8a9691]" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cox's Bazar..."
                className="h-10 pl-9"
              />
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between text-sm">
              <b>Total price</b>
              <span>up to ৳{max[0].toLocaleString()}</span>
            </div>
            <Slider
              value={max}
              onValueChange={setMax}
              min={2500}
              max={8000}
              step={250}
              className="mt-4"
            />
          </div>
          <div className="mt-6 space-y-3 text-sm">
            <label className="flex items-center gap-3">
              <Checkbox
                checked={breakfast}
                onCheckedChange={(v) => setBreakfast(!!v)}
              />{" "}
              Breakfast included
            </label>
            <label className="flex items-center gap-3">
              <Checkbox
                checked={freeCancel}
                onCheckedChange={(v) => setFreeCancel(!!v)}
              />{" "}
              Free cancellation
            </label>
          </div>
          <div className="mt-6 rounded-xl bg-[#f6f0e2] p-4 text-xs leading-5 text-[#6f5b39]">
            <CheckCircle2 className="mb-2 size-5 text-[#b87316]" />
            All prices below include sample VAT/service charge and discount—no
            surprise total.
          </div>
        </aside>
        <section>
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-3xl">
                {list.length} {division} stays match
              </h2>
              <p className="text-sm text-[#6d7d77]">
                Sample availability · transparent total price
              </p>
            </div>
            {compare.length > 0 && (
              <Button asChild className="rounded-full bg-[#123f36]">
                <Link href={`/hotels/compare?ids=${compare.join(",")}`}>
                  <Scale /> Compare {compare.length} hotels
                </Link>
              </Button>
            )}
          </div>
          {list.length === 0 ? (
            <div className="rounded-2xl border border-dashed bg-white p-10 text-center">
              <h3 className="font-serif text-2xl">
                No stay matches these filters
              </h3>
              <p className="mt-2 text-sm text-[#71817a]">
                Increase the price range or remove a filter for {division}{" "}
                Division.
              </p>
            </div>
          ) : (
            <div className="grid gap-5 xl:grid-cols-2">
              {list.map((h) => (
                <article
                  key={h.slug}
                  className="tf-tilt-card overflow-hidden rounded-2xl border bg-white"
                >
                  <div
                    className="relative h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url(${h.image})` }}
                  >
                    <button
                      onClick={() => toggleWish(h.slug)}
                      className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90"
                    >
                      <Heart
                        className={`size-5 ${wish.includes(h.slug) ? "fill-[#c77c19] text-[#c77c19]" : ""}`}
                      />
                    </button>
                    <span className="absolute bottom-3 left-3 rounded-full bg-[#123f36]/90 px-3 py-1 text-xs text-white">
                      {h.badges[0]}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="flex items-center gap-1 text-xs text-[#b87316]">
                          <MapPin className="size-3" />
                          {h.destination} · {h.distance}
                        </p>
                        <h3 className="mt-1 font-serif text-2xl">{h.name}</h3>
                      </div>
                      <div className="rounded-lg bg-[#e7f1eb] px-2 py-1 text-sm font-bold text-[#123f36]">
                        {h.rating}{" "}
                        <Star className="inline size-3 fill-current" />
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-[#75857f]">
                      {h.reviews} verified-style sample reviews · Cleanliness{" "}
                      {h.scores.cleanliness}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {h.amenities.slice(0, 5).map((a) => (
                        <span
                          key={a}
                          className="rounded-full bg-[#f4f1ea] px-3 py-1 text-xs"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-end justify-between border-t pt-4">
                      <div>
                        <small className="text-[#7b8984]">Total / night</small>
                        <b className="block text-xl">
                          ৳{totalPrice(h).toLocaleString()}
                        </b>
                        <small className="text-[#4d7b69]">
                          includes ৳{h.tax} tax
                        </small>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => toggleCompare(h.slug)}
                          className={
                            compare.includes(h.slug)
                              ? "border-[#123f36] bg-[#e8eee9]"
                              : ""
                          }
                        >
                          <Scale />{" "}
                          {compare.includes(h.slug) ? "Added" : "Compare"}
                        </Button>
                        <Button asChild size="sm" className="bg-[#123f36]">
                          <Link href={`/hotels/${h.slug}`}>View rooms</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
