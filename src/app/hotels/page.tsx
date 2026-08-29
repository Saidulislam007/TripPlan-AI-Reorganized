
import { HotelExplorer } from "@/components/hotels/hotel-explorer";
import { BedDouble, MapPin, ShieldCheck, Sparkles } from "lucide-react";
export default function Hotels() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="tf-hero-panel relative overflow-hidden rounded-[2rem] bg-[#123f36] px-6 py-10 text-white sm:px-10">
            <div className="tf-orbit opacity-40" />
            <div className="relative max-w-3xl">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[#efb24d]">
                <Sparkles className="size-4" /> Smarter hotel decisions
              </p>
              <h1 className="mt-3 font-serif text-4xl sm:text-6xl">
                Know the real stay,
                <br />
                before you pay.
              </h1>
              <p className="mt-4 max-w-2xl leading-7 text-[#c3d4cf]">
                লোকেশন, পরিচ্ছন্নতা, amenities, cancellation এবং সব charge-সহ
                total price দেখে নিজের জন্য সঠিক hotel বেছে নিন।
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#dce8e4]">
                <span>
                  <ShieldCheck className="mr-1 inline size-4 text-[#efb24d]" />{" "}
                  Safety signals
                </span>
                <span>
                  <MapPin className="mr-1 inline size-4 text-[#efb24d]" />{" "}
                  Location context
                </span>
                <span>
                  <BedDouble className="mr-1 inline size-4 text-[#efb24d]" />{" "}
                  Room-level details
                </span>
              </div>
            </div>
          </section>
          <HotelExplorer />
        </div>
      </main>
  );
}
