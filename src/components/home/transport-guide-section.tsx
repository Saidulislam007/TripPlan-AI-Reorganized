import Link from "next/link";
import { ArrowRight, Bus, Plane, TrainFront, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
export function TransportGuideSection() {
  return (
    <section className="bg-[#e8eee9] px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c77c19]">
            Smart transport guide
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            From your door
            <br />
            to the destination.
          </h2>
          <p className="mt-4 leading-7 text-[#64766f]">
            Bus, train, launch ও flight-এর আনুমানিক সময়, ভাড়া, boarding point
            এবং local transfer একসঙ্গে compare করুন।
          </p>
          <Button asChild className="mt-7 rounded-full bg-[#123f36]">
            <Link href="/transport">
              Compare transport <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="rounded-[2rem] border bg-white p-5 shadow-xl sm:p-7">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-[#71817a]">Sample journey</p>
              <h3 className="mt-1 font-serif text-2xl">Dhaka → Cox's Bazar</h3>
            </div>
            <Navigation className="text-[#c77c19]" />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              [Bus, "AC Bus", "11 hrs", "৳1,250", "Best budget"],
              [TrainFront, "Train", "9 hrs", "৳1,500", "Family comfort"],
              [Plane, "Flight", "3.5 hrs*", "৳7,750", "Fastest"],
            ].map(([I, m, t, p, b]: any) => (
              <div
                key={m}
                className="tf-tilt-card rounded-2xl border bg-[#faf8f2] p-4"
              >
                <I className="size-5 text-[#c77c19]" />
                <h4 className="mt-4 font-semibold">{m}</h4>
                <p className="mt-1 text-xs text-[#71817a]">
                  {t} · {p}
                </p>
                <span className="mt-3 inline-block rounded-full bg-[#e8eee9] px-2 py-1 text-[10px] font-bold text-[#315d50]">
                  {b}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#86928d]">
            *Includes airport reporting and transfer estimate. Verify live
            schedule before booking.
          </p>
        </div>
      </div>
    </section>
  );
}
