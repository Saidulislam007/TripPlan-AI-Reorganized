import Link from "next/link";
import { ArrowRight, Wallet, BedDouble, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
export function HotelAssistantSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div
          className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent 40%,rgba(7,39,33,.92)),url(https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80)",
          }}
        >
          <div className="absolute inset-x-0 bottom-0 p-7 text-white">
            <span className="rounded-full bg-[#e29a2e] px-3 py-1 text-xs font-bold text-[#173d35]">
              Transparent total price
            </span>
            <h3 className="mt-4 font-serif text-3xl">
              Stay close to what matters.
            </h3>
            <p className="mt-2 text-sm text-[#d5e1dd]">
              Location, cleanliness, washroom, safety ও hidden charge দেখে
              সিদ্ধান্ত নিন।
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c77c19]">
            Hotel decision assistant
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            Not the cheapest room.
            <br />
            The right room.
          </h2>
          <div className="mt-7 grid grid-cols-2 gap-3">
            {[
              [BedDouble, "Room-level details", "AC, hot water, generator"],
              [Star, "Guest signals", "Cleanliness & staff scores"],
              [Wallet, "True total", "VAT and discount included"],
              [Clock, "Flexible policy", "Cancellation made visible"],
            ].map(([I, t, x]: any) => (
              <div
                key={t}
                className="tf-tilt-card rounded-2xl border bg-white p-5"
              >
                <I className="size-5 text-[#c77c19]" />
                <h3 className="mt-4 font-semibold">{t}</h3>
                <p className="mt-1 text-xs leading-5 text-[#71817a]">{x}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-6 w-fit rounded-full bg-[#123f36]">
            <Link href="/hotels">
              Find a smarter stay <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
