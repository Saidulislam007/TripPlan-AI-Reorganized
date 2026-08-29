import Link from "next/link";
import { Luggage, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
export function BeforeYouGoSection() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border bg-white p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c77c19]">
              Before you go
            </p>
            <h2 className="mt-3 font-serif text-4xl">
              One last check.
              <br />A much easier trip.
            </h2>
            <p className="mt-4 leading-7 text-[#64766f]">
              Trip readiness tools গুরুত্বপূর্ণ documents, weather gear এবং
              booking details ভুলে যাওয়ার ঝুঁকি কমায়।
            </p>
            <Button asChild variant="outline" className="mt-6 rounded-full">
              <Link href="/dashboard/packing">
                <Luggage /> Open packing checklist
              </Link>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Identity & tickets", "NID copy, e-ticket, return booking"],
              ["Money backup", "Cash, bKash/Nagad and 10% buffer"],
              ["Weather ready", "Umbrella, sunscreen and water pouch"],
              ["Health & safety", "Medicine, ORS and emergency contact"],
            ].map(([t, x], i) => (
              <div
                key={t}
                className="tf-tilt-card flex gap-3 rounded-2xl bg-[#f7f4ed] p-5"
              >
                <CheckCircle2 className="size-5 shrink-0 text-[#c77c19]" />
                <div>
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#71817a]">{x}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
