"use client";
import Link from "next/link";
import { MapPin, ArrowRight, Compass } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { divisions, places } from "@/lib/places";
export function PlaceExplorer() {
  return (
    <Tabs defaultValue="Dhaka" className="mt-9">
      <TabsList className="scrollbar-none h-auto w-full justify-start gap-2 overflow-x-auto bg-transparent p-0">
        {divisions.map((d) => (
          <TabsTrigger
            key={d}
            value={d}
            className="rounded-full border bg-white px-5 py-2.5 data-active:bg-[#123f36] data-active:text-white"
          >
            {d}
          </TabsTrigger>
        ))}
      </TabsList>
      {divisions.map((d) => (
        <TabsContent key={d} value={d} className="mt-7">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
                {d} Division
              </p>
              <h2 className="mt-1 font-serif text-3xl">
                Places worth the journey
              </h2>
            </div>
            <span className="hidden text-sm text-[#71827b] sm:block">
              {places.filter((p) => p.division === d).length} destinations
            </span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {places
              .filter((p) => p.division === d)
              .map((p) => (
                <Link
                  href={`/places/${p.slug}`}
                  key={p.slug}
                  className="tf-tilt-card group overflow-hidden rounded-2xl border bg-white"
                >
                  <div
                    className="h-52 bg-cover bg-center transition duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(180deg,transparent 55%,rgba(5,35,29,.75)),url(${p.image})`,
                    }}
                  />
                  <div className="p-5">
                    <p className="flex items-center gap-1 text-xs font-semibold text-[#b87316]">
                      <MapPin className="size-3" />
                      {p.district}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl">{p.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#667870]">
                      {p.tagline}
                    </p>
                    <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#123f36]">
                      Explore place{" "}
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
