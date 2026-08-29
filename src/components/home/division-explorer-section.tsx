import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
export function DivisionExplorerSection() {
  return (
    <section className="border-y bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c77c19]">
              Explore by division
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Start with a place that feels like you.
            </h2>
            <p className="mt-3 max-w-2xl text-[#64766f]">
              বাংলাদেশের বিভাগ অনুযায়ী দর্শনীয় জায়গা দেখুন, details জানুন এবং
              পছন্দের জায়গা dashboard-এ save করুন।
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/explore-bangladesh">
              Explore all divisions <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {[
            [
              "Chattogram",
              "Sea · hills",
              "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
            ],
            [
              "Sylhet",
              "Tea · forest",
              "https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?auto=format&fit=crop&w=700&q=80",
            ],
            [
              "Khulna",
              "Mangrove · heritage",
              "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=700&q=80",
            ],
            [
              "Dhaka",
              "History · culture",
              "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=700&q=80",
            ],
            [
              "Rajshahi",
              "River · terracotta",
              "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",
            ],
            [
              "Barishal",
              "Canals · coast",
              "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
            ],
          ].map(([name, tag, image]) => (
            <Link
              href="/explore-bangladesh"
              key={name}
              className="tf-tilt-card group relative min-h-56 overflow-hidden rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(180deg,transparent 35%,rgba(7,39,33,.9)),url(${image})`,
              }}
            >
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <Compass className="mb-4 size-5 text-[#efb24d]" />
                <h3 className="font-serif text-xl">{name}</h3>
                <p className="mt-1 text-xs text-[#c9d9d4]">{tag}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
