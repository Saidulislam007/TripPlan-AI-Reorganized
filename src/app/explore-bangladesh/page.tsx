
import { PlaceExplorer } from "@/components/destinations/place-explorer";
import { Compass, Map, MapPin } from "lucide-react";
export default function ExploreBangladesh() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="tf-hero-panel relative overflow-hidden rounded-[2rem] bg-[#123f36] px-6 py-12 text-white sm:px-10">
            <div className="tf-orbit opacity-50" />
            <div className="relative max-w-3xl">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.2em] text-[#efb24d]">
                <Compass className="size-4" /> Explore Bangladesh
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
                Eight divisions.
                <br />
                Countless reasons to go.
              </h1>
              <p className="mt-5 max-w-2xl leading-7 text-[#c3d4cf]">
                বিভাগ বেছে নিন, দর্শনীয় জায়গা দেখুন এবং পছন্দের destination
                নিজের dashboard-এ save করে রাখুন।
              </p>
            </div>
          </section>
          <PlaceExplorer />
        </div>
      </main>
  );
}
