"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { foodSpots } from "@/lib/food";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Heart,
  MapPin,
  Search,
  Star,
  Flame,
  Utensils,
  Navigation,
  Clock,
  ChevronRight,
} from "lucide-react";
const STORE = "tripflow-food-wishlist";
const regions = [
  "Chattogram",
  "Dhaka",
  "Rajshahi",
  "Khulna",
  "Barishal",
  "Sylhet",
];
const regionBn: Record<string, string> = {
  Chattogram: "চট্টগ্রাম",
  Dhaka: "ঢাকা",
  Rajshahi: "রাজশাহী",
  Khulna: "খুলনা",
  Barishal: "বরিশাল",
  Sylhet: "সিলেট",
};
const trails: Record<string, string[][]> = {
  Chattogram: [
    ["08:30", "Beef kala bhuna", "Chawkbazar"],
    ["13:00", "Mezbani beef set", "GEC area"],
    ["17:00", "Shutki & hill snacks", "Local market"],
    ["20:30", "Rupchanda or crab", "Cox's Bazar trail"],
  ],
  Dhaka: [
    ["08:30", "Bakarkhani & tea", "Chawkbazar"],
    ["13:00", "Kacchi biryani", "Nazira Bazar"],
    ["17:00", "Fuchka & lassi", "Sadarghat area"],
    ["20:30", "Kebab & borhani", "Old Dhaka"],
  ],
  Rajshahi: [
    ["08:30", "Kalai ruti", "City breakfast"],
    ["13:00", "Padma fish meal", "Riverside area"],
    ["17:00", "Mango lassi", "Shaheb Bazar"],
    ["20:00", "Kacha golla", "Local mishti shop"],
  ],
  Khulna: [
    ["08:30", "Paratha & local tea", "Shib Bari"],
    ["13:00", "Chui jhal beef", "City centre"],
    ["17:00", "Riverside snacks", "Rupsha"],
    ["20:00", "Chui jhal mutton", "Local eatery"],
  ],
  Barishal: [
    ["08:00", "Bhapa pitha", "Sadar Road"],
    ["12:30", "River fish meal", "City market"],
    ["16:30", "Guava tasting", "Seasonal stop"],
    ["20:00", "Coconut patishapta", "Local pitha ghar"],
  ],
  Sylhet: [
    ["08:30", "Akni breakfast", "Zindabazar"],
    ["13:00", "Satkora beef", "City restaurant"],
    ["17:00", "Seven-layer tea", "Tea cabin"],
    ["20:00", "Duck curry & rice", "Local kitchen"],
  ],
};
export function FoodExperience() {
  const [region, setRegion] = useState("Chattogram");
  const trail = trails[region];
  return (
    <>
      <section className="mt-8 rounded-[2rem] border bg-white p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
              Where are you touring now?
            </p>
            <h2 className="mt-2 font-serif text-3xl">
              {regionBn[region]} বিভাগের local food
            </h2>
            <p className="mt-2 text-sm text-[#71817a]">
              শুধু selected বিভাগের dishes, spots, trail ও map দেখানো হচ্ছে।
            </p>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm transition ${region === r ? "border-[#431f17] bg-[#431f17] text-white" : "bg-[#faf8f2]"}`}
              >
                {regionBn[r]}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <div className="flex justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
                Regional food trail
              </p>
              <h3 className="mt-1 font-serif text-2xl">
                One delicious day in {region}
              </h3>
            </div>
            <span className="hidden text-sm text-[#71817a] sm:block">
              Estimated: ৳1,200–1,800/person
            </span>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {trail.map(([t, d, a], i) => (
              <div
                key={t}
                className="tf-tilt-card rounded-2xl bg-[#431f17] p-5 text-white"
              >
                <span className="text-xs text-[#f0ae48]">
                  STOP 0{i + 1} · {t}
                </span>
                <h4 className="mt-6 font-serif text-xl">{d}</h4>
                <p className="mt-1 text-sm text-[#d9c8c1]">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FoodExplorer region={region} />
    </>
  );
}
export function FoodExplorer({ region = "Chattogram" }: { region?: string }) {
  const [q, setQ] = useState("");
  const [halal, setHalal] = useState(false);
  const [veg, setVeg] = useState(false);
  const [sea, setSea] = useState(false);
  const [local, setLocal] = useState(false);
  const [spice, setSpice] = useState("All");
  const [wish, setWish] = useState<string[]>(() =>
    typeof window === "undefined"
      ? []
      : JSON.parse(localStorage.getItem(STORE) || "[]"),
  );
  const list = useMemo(
    () =>
      foodSpots.filter(
        (f) =>
          f.region === region &&
          (f.name + f.region + f.signature.join(" "))
            .toLowerCase()
            .includes(q.toLowerCase()) &&
          (!halal || f.halal) &&
          (!veg || f.vegetarian) &&
          (!sea || f.seafood) &&
          (!local || f.traditional) &&
          (spice === "All" || f.spice === spice),
      ),
    [q, halal, veg, sea, local, spice, region],
  );
  const toggle = (s: string) => {
    const n = wish.includes(s) ? wish.filter((x) => x !== s) : [...wish, s];
    setWish(n);
    localStorage.setItem(STORE, JSON.stringify(n));
  };
  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-[270px_1fr]">
      <aside className="h-fit rounded-2xl border bg-white p-5 lg:sticky lg:top-24">
        <h2 className="font-serif text-xl">Find your flavour</h2>
        <div className="relative mt-5">
          <Search className="absolute left-3 top-3 size-4 text-[#83918b]" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Dish, area or spot..."
            className="h-10 pl-9"
          />
        </div>
        <div className="mt-6 space-y-3 text-sm">
          <label className="flex gap-3">
            <Checkbox checked={halal} onCheckedChange={(v) => setHalal(!!v)} />{" "}
            Halal
          </label>
          <label className="flex gap-3">
            <Checkbox checked={veg} onCheckedChange={(v) => setVeg(!!v)} />{" "}
            Vegetarian options
          </label>
          <label className="flex gap-3">
            <Checkbox checked={sea} onCheckedChange={(v) => setSea(!!v)} />{" "}
            Seafood
          </label>
          <label className="flex gap-3">
            <Checkbox checked={local} onCheckedChange={(v) => setLocal(!!v)} />{" "}
            Local traditional
          </label>
        </div>
        <div className="mt-6">
          <p className="text-sm font-semibold">Spice level</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {["All", "Mild", "Medium", "Hot"].map((x) => (
              <button
                key={x}
                onClick={() => setSpice(x)}
                className={`rounded-full border px-3 py-1 text-xs ${spice === x ? "bg-[#123f36] text-white" : ""}`}
              >
                {x}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-xl bg-[#fff1d7] p-4 text-xs leading-5 text-[#725b34]">
          <Flame className="mb-2 size-5 text-[#c77c19]" />
          Spice and hygiene scores are sample signals. Confirm current opening
          and ingredients directly.
        </div>
      </aside>
      <section>
        <div className="grid gap-5 xl:grid-cols-[1fr_310px]">
          <div>
            <div className="mb-4">
              <h2 className="font-serif text-3xl">
                {list.length} authentic food stops
              </h2>
              <p className="text-sm text-[#708079]">
                Prices are estimated per listed portion
              </p>
            </div>
            <div className="space-y-5">
              {list.map((f) => (
                <article
                  key={f.slug}
                  className="tf-tilt-card grid overflow-hidden rounded-2xl border bg-white sm:grid-cols-[220px_1fr]"
                >
                  <div
                    className="relative min-h-52 bg-cover bg-center"
                    style={{ backgroundImage: `url(${f.image})` }}
                  >
                    <button
                      onClick={() => toggle(f.slug)}
                      className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90"
                    >
                      <Heart
                        className={`size-5 ${wish.includes(f.slug) ? "fill-[#c77c19] text-[#c77c19]" : ""}`}
                      />
                    </button>
                    {f.hidden && (
                      <span className="absolute bottom-3 left-3 rounded-full bg-[#e29a2e] px-3 py-1 text-xs font-bold">
                        Hidden gem
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between gap-3">
                      <div>
                        <p className="text-xs text-[#b87316]">
                          {f.type} · {f.region}
                        </p>
                        <h3 className="mt-1 font-serif text-2xl">{f.name}</h3>
                      </div>
                      <span className="h-fit rounded-lg bg-[#e8eee9] px-2 py-1 text-sm font-bold">
                        {f.rating}{" "}
                        <Star className="inline size-3 fill-current" />
                      </span>
                    </div>
                    <p className="mt-2 flex items-center gap-1 text-xs text-[#71817a]">
                      <MapPin className="size-3" />
                      {f.area} · {f.distance}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {f.signature.map((s) => (
                        <span
                          key={s}
                          className="rounded-full bg-[#f5eee0] px-3 py-1 text-xs font-semibold text-[#7c5724]"
                        >
                          Must try: {s}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-end justify-between border-t pt-4">
                      <div>
                        <b>৳{f.price}</b>
                        <p className="text-xs text-[#71817a]">{f.portion}</p>
                      </div>
                      <div className="text-right text-xs">
                        <b>Taste {f.taste}</b>
                        <p className="text-[#71817a]">Hygiene {f.hygiene}</p>
                      </div>
                      <Button asChild size="sm" className="bg-[#123f36]">
                        <Link href={`/food/${f.slug}`}>
                          View story <ChevronRight />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <FoodMap spots={list} />
        </div>
      </section>
    </div>
  );
}
function FoodMap({ spots }: { spots: typeof foodSpots }) {
  return (
    <aside className="h-fit rounded-2xl border bg-[#dfe8df] p-4 xl:sticky xl:top-24">
      <div className="flex justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#b87316]">
            Nearby map
          </p>
          <h3 className="font-serif text-xl">Food around you</h3>
        </div>
        <Navigation className="text-[#123f36]" />
      </div>
      <div className="relative mt-4 h-[380px] overflow-hidden rounded-xl bg-[linear-gradient(35deg,#d7e3d9_25%,transparent_25%),linear-gradient(145deg,#edf0dd_25%,transparent_25%),linear-gradient(45deg,transparent_70%,#cbd9c9_70%)] bg-[length:90px_90px]">
        <div className="absolute inset-x-0 top-1/2 h-2 -rotate-6 bg-white/80" />
        <div className="absolute bottom-0 left-1/3 h-full w-2 rotate-12 bg-white/80" />
        {spots.map((f, i) => (
          <Link
            href={`/food/${f.slug}`}
            key={f.slug}
            style={{
              left: `${15 + ((i * 29) % 70)}%`,
              top: `${18 + ((i * 23) % 68)}%`,
            }}
            className="absolute grid size-9 place-items-center rounded-full border-2 border-white bg-[#123f36] text-white shadow-lg"
          >
            <Utensils className="size-4" />
          </Link>
        ))}
      </div>
      <p className="mt-3 text-xs leading-5 text-[#667870]">
        Illustrative map for the UI demo. Live distance requires browser
        location and a maps provider.
      </p>
    </aside>
  );
}
