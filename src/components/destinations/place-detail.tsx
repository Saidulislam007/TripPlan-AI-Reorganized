"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPlace } from "@/lib/places";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock,
  Heart,
  MapPin,
  Share2,
  Sparkles,
  Ticket,
} from "lucide-react";
const STORE = "tripflow-saved-places";
export function PlaceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const p = getPlace(slug);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (p) {
      const list = JSON.parse(localStorage.getItem(STORE) || "[]");
      setSaved(list.includes(p.slug));
    }
  }, [p]);
  if (!p)
    return (
      <div className="py-28 text-center">
        <h1 className="font-serif text-4xl">Place not found</h1>
        <Button asChild className="mt-6">
          <Link href="/explore-bangladesh">Back to Explore</Link>
        </Button>
      </div>
    );
  const toggle = () => {
    const list: string[] = JSON.parse(localStorage.getItem(STORE) || "[]");
    const next = list.includes(p.slug)
      ? list.filter((x) => x !== p.slug)
      : [...list, p.slug];
    localStorage.setItem(STORE, JSON.stringify(next));
    setSaved(!saved);
    window.dispatchEvent(new Event("tripflow-saved"));
  };
  return (
    <div>
      <section
        className="relative min-h-[520px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(6,35,29,.9),rgba(6,35,29,.28)),url(${p.image})`,
        }}
      >
        <div className="tf-orbit opacity-50" />
        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-between px-5 py-10 text-white lg:px-8">
          <Link
            href="/explore-bangladesh"
            className="flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur"
          >
            <ArrowLeft className="size-4" /> All destinations
          </Link>
          <div className="max-w-3xl">
            <p className="flex items-center gap-2 text-sm text-[#efb24d]">
              <MapPin className="size-4" />
              {p.district} · {p.division} Division
            </p>
            <h1 className="mt-3 font-serif text-5xl sm:text-7xl">{p.name}</h1>
            <p className="mt-4 text-lg text-[#d7e4df]">{p.tagline}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button
                onClick={toggle}
                className={
                  saved
                    ? "rounded-full bg-white text-[#123f36]"
                    : "rounded-full bg-[#e9a63a] text-[#123f36]"
                }
              >
                <Heart
                  className={saved ? "fill-[#c77c19] text-[#c77c19]" : ""}
                />
                {saved ? "Saved to dashboard" : "Save to dashboard"}
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 text-white"
              >
                <Share2 /> Share
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_330px] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
            Know before you go
          </p>
          <h2 className="mt-2 font-serif text-4xl">About {p.name}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#5f736b]">
            {p.description}
          </p>
          <h3 className="mt-9 font-serif text-2xl">Top experiences</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {p.highlights.map((x) => (
              <div
                key={x}
                className="tf-tilt-card rounded-2xl border bg-white p-5"
              >
                <Check className="size-5 text-[#c77c19]" />
                <b className="mt-4 block">{x}</b>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[#e8eee9] p-6">
            <Sparkles className="text-[#c77c19]" />
            <h3 className="mt-3 font-serif text-2xl">TripPlan AI tip</h3>
            <p className="mt-2 leading-7 text-[#5f736b]">{p.travelTip}</p>
          </div>
        </div>
        <aside className="h-fit rounded-2xl border bg-white p-6 shadow-xl">
          <h3 className="font-serif text-2xl">Quick details</h3>
          <div className="mt-5 space-y-5">
            {[
              [CalendarDays, "Best time", p.bestTime],
              [Clock, "Suggested stay", p.duration],
              [Ticket, "Entry", p.entry],
            ].map(([I, l, v]: any) => (
              <div className="flex gap-3" key={l}>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f4e6ca]">
                  <I className="size-5 text-[#b87316]" />
                </span>
                <div>
                  <small className="text-[#7c8984]">{l}</small>
                  <b className="block text-sm">{v}</b>
                </div>
              </div>
            ))}
          </div>
          <Button asChild className="mt-7 w-full bg-[#123f36]">
            <Link
              href={`/travel-intelligence?destination=${encodeURIComponent(p.name + ", " + p.district)}`}
            >
              Plan a trip here
            </Link>
          </Button>
        </aside>
      </section>
    </div>
  );
}

export function SavedPlaces() {
  const [slugs, setSlugs] = useState<string[]>([]);
  useEffect(() => {
    const load = () =>
      setSlugs(JSON.parse(localStorage.getItem(STORE) || "[]"));
    load();
    window.addEventListener("tripflow-saved", load);
    return () => window.removeEventListener("tripflow-saved", load);
  }, []);
  const saved = slugs.map(getPlace).filter(Boolean);
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
            Travel wishlist
          </p>
          <h2 className="mt-1 font-serif text-3xl">Saved places</h2>
        </div>
        <Link
          href="/explore-bangladesh"
          className="text-sm font-semibold text-[#123f36]"
        >
          Explore more →
        </Link>
      </div>
      {saved.length ? (
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map(
            (p) =>
              p && (
                <Link
                  href={`/places/${p.slug}`}
                  key={p.slug}
                  className="tf-tilt-card overflow-hidden rounded-2xl border bg-white"
                >
                  <div
                    className="h-36 bg-cover bg-center"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="p-4">
                    <p className="text-xs text-[#b87316]">
                      {p.division} Division
                    </p>
                    <h3 className="mt-1 font-serif text-xl">{p.name}</h3>
                  </div>
                </Link>
              ),
          )}
        </div>
      ) : (
        <div className="mt-5 rounded-2xl border border-dashed bg-white/60 p-8 text-center">
          <Heart className="mx-auto text-[#c77c19]" />
          <p className="mt-3 text-[#667870]">
            No places saved yet. Explore Bangladesh and tap “Save to dashboard”.
          </p>
        </div>
      )}
    </section>
  );
}
