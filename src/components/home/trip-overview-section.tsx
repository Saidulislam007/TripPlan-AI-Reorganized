import { Bus, CloudSun, Utensils, Wallet } from "lucide-react";
export function TripOverviewSection() {
  return (
    <section className="bg-[#e8eee9] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c77c19]">
            One plan, every detail
          </p>
          <h2 className="mt-3 font-serif text-4xl">
            From Dhaka traffic to dinner.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {[
            [CloudSun, "Weather-ready", "Seasonal packing and rain backup"],
            [Bus, "Door-to-door route", "Counter, transfer and local ride"],
            [
              Utensils,
              "Food you prefer",
              "Halal, local, veg or child-friendly",
            ],
            [Wallet, "Cost breakdown", "Daily spend and emergency buffer"],
          ].map(([I, t, x]: any) => (
            <div
              key={t}
              className="tf-tilt-card rounded-2xl bg-[#123f36] p-6 text-white"
            >
              <I className="text-[#efb24d]" />
              <h3 className="mt-8 font-serif text-xl">{t}</h3>
              <p className="mt-2 text-sm text-[#bad0ca]">{x}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
