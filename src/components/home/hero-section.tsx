import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, Plane, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
export function HeroSection() {
  return (
    <section className="tf-scene relative isolate min-h-[750px] overflow-hidden">
      <div className="tf-hero-bg absolute inset-0 bg-[linear-gradient(90deg,rgba(8,38,32,.94)_0%,rgba(8,38,32,.72)_48%,rgba(8,38,32,.16)_100%),url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center" />
      <div className="tf-orbit" />
      <Plane className="tf-route-plane size-10" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-32">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Sparkles className="size-4 text-[#f0b553]" /> Built for Bangladesh
            travelers
          </div>
          <h1 className="mt-7 font-serif text-5xl leading-[1.02] tracking-tight sm:text-7xl">
            Your trip, thoughtfully{" "}
            <span className="italic text-[#efb24d]">flowing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d7e4df]">
            Tell us your destination, budget and travel style. TripPlan AI turns
            it into a practical day-by-day plan—with routes, local food, costs
            and the breathing room real travel needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="h-13 rounded-full bg-[#e9a63a] px-7 text-[#173d35]"
            >
              <Link href="/travel-intelligence">
                Create AI Travel Plan <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-[#c9d9d4]">
            <span>
              <BadgeCheck className="mr-1 inline size-4 text-[#efb24d]" /> No
              sign-up needed
            </span>
            <span>
              <BadgeCheck className="mr-1 inline size-4 text-[#efb24d]" /> Edit
              anytime
            </span>
            <span>
              <BadgeCheck className="mr-1 inline size-4 text-[#efb24d]" /> Share
              with family
            </span>
          </div>
        </div>
        <div className="tf-float-card self-end rounded-[2rem] border border-white/20 bg-[#fffdf7]/95 p-6 shadow-2xl">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#bd7718]">
            Your quick plan
          </p>
          <h2 className="mt-2 font-serif text-2xl">
            Where are you dreaming of?
          </h2>
          <div className="mt-5 rounded-xl border bg-white p-4">
            <p className="text-xs text-[#778880]">Destination</p>
            <p className="mt-1 flex items-center gap-2 font-semibold">
              <MapPin className="size-4 text-[#c77c19]" /> Cox's Bazar
            </p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl border bg-white p-4">
              <p className="text-xs text-[#778880]">Duration</p>
              <p className="mt-1 font-semibold">4 days</p>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <p className="text-xs text-[#778880]">Budget</p>
              <p className="mt-1 font-semibold">৳25,000</p>
            </div>
          </div>
          <Button asChild className="mt-4 h-12 w-full rounded-xl bg-[#123f36]">
            <Link href="/travel-intelligence">
              <Sparkles /> Build AI intelligence report
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
