import {
  BrainCircuit,
  Bus,
  CloudSun,
  Map,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Shell } from "@/components/layout/tripflow";
import { TravelIntelligenceForm } from "@/components/plan-trip/travel-intelligence-form";
import { Suspense } from "react";

export default function Page() {
  return (
    <Shell>
      <main className="bg-[#f7f4ed] px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="grid items-start gap-10 lg:grid-cols-[.78fr_1.22fr]">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e6eee9] px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#245749]">
                <Sparkles className="size-4 text-[#c77c19]" /> TripPlan AI
                signature AI
              </span>
              <h1 className="mt-6 font-serif text-5xl leading-[1.04] sm:text-6xl">
                One input.
                <br />
                <span className="italic text-[#c77c19]">
                  A smarter journey.
                </span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#66776f]">
                আপনার বাজেট, সময় ও travel style বুঝে Bangladesh-এর জন্য
                বাস্তবসম্মত route, stay, food, weather ও safety report তৈরি
                করুন।
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  [Map, "Real route logic"],
                  [Bus, "Traffic buffers"],
                  [CloudSun, "Weather prep"],
                  [Wallet, "Budget reasoning"],
                  [ShieldCheck, "Safety guidance"],
                  [BrainCircuit, "AI confidence"],
                ].map(([Icon, label]) => (
                  <div
                    key={String(label)}
                    className="rounded-2xl border border-[#ddd8ca] bg-white p-4"
                  >
                    <Icon className="size-5 text-[#c77c19]" />
                    <p className="mt-3 text-sm font-semibold">
                      {String(label)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Suspense
              fallback={<div className="min-h-[600px] rounded-[2rem] bg-white" />}
            >
              <TravelIntelligenceForm />
            </Suspense>
          </section>
        </div>
      </main>
    </Shell>
  );
}
