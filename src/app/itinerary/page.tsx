"use client";
import { DayCards, Shell } from "@/components/layout/tripflow";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  Download,
  Share2,
  Sparkles,
  Wallet,
  Bus,
  Hotel,
  Utensils,
  AlertTriangle,
} from "lucide-react";
export default function Itinerary() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f7f4ed]" />}>
      <ItineraryContent />
    </Suspense>
  );
}

function ItineraryContent() {
  const params = useSearchParams();
  const destination = params.get("destination") || "Cox's Bazar, Chattogram";
  const start = params.get("start") || "Dhaka, Dhaka";
  const days = params.get("days") || "4";
  const style = params.get("style") || "Family";
  const pace = params.get("pace") || "Balanced";
  const food = params.get("food") || "Local Bangla";
  const budget = Math.max(Number(params.get("budget")) || 25000, 1000);
  const money = (n: number) => `৳${Math.round(n).toLocaleString("en-BD")}`;
  return (
    <Shell>
      <main className="min-h-screen bg-[#f7f4ed] px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="tf-hero-panel rounded-[2rem] bg-[#123f36] p-6 text-white sm:p-10">
            <div className="flex flex-col justify-between gap-7 md:flex-row">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.18em] text-[#efb24d]">
                  Your AI itinerary
                </p>
                <h1 className="mt-2 font-serif text-4xl sm:text-5xl">
                  {destination.split(",")[0]}, at your pace.
                </h1>
                <p className="mt-3 text-[#bfd0cb]">
                  {days} days · {style} · {pace} pace · {food} food · Starting
                  from {start.split(",")[0]}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Button
                  variant="outline"
                  className="border-white/25 bg-white/10 text-white"
                >
                  <Share2 /> Share
                </Button>
                <Button className="bg-[#e9a63a] text-[#173d35]">
                  <Download /> Save PDF
                </Button>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                [Wallet, money(budget * 0.94), "Estimated total"],
                [Bus, money(budget * 0.29), "Transport"],
                [Hotel, money(budget * 0.35), "Stay"],
                [Utensils, money(budget * 0.21), "Food"],
              ].map(([I, v, l]: any) => (
                <div key={l} className="rounded-xl bg-white/10 p-4">
                  <I className="size-4 text-[#efb24d]" />
                  <b className="mt-3 block text-lg">{v}</b>
                  <span className="text-xs text-[#bdd0ca]">{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid gap-7 lg:grid-cols-[1fr_320px]">
            <DayCards
              destination={destination}
              start={start}
              days={Number(days)}
            />
            <aside className="space-y-5">
              <div className="rounded-2xl border bg-white p-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-[#c77c19]" />
                  <h3 className="font-serif text-xl">Why this works</h3>
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-[#60736c]">
                  <li>✓ Arrival day stays intentionally light</li>
                  <li>✓ Nearby places are grouped into practical routes</li>
                  <li>
                    ✓ Daily spend follows your ৳{budget.toLocaleString("en-BD")}{" "}
                    budget
                  </li>
                  <li>
                    ✓ {pace} pace and {food} preference included
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#e4c98e] bg-[#fff5dd] p-5">
                <AlertTriangle className="text-[#b87316]" />
                <h3 className="mt-3 font-semibold">Before you leave</h3>
                <p className="mt-2 text-sm leading-6 text-[#725d39]">
                  Confirm current tickets, opening hours, weather and local
                  access before leaving. Carry cash for local rides and keep NID
                  copies offline.
                </p>
              </div>
              <Button className="w-full bg-[#123f36]">Edit this trip</Button>
            </aside>
          </div>
        </div>
      </main>
    </Shell>
  );
}
