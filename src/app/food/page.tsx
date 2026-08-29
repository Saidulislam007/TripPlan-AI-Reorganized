
import { FoodExperience } from "@/components/food/food-explorer";
import { Flame, MapPin, Sparkles, Utensils } from "lucide-react";
export default function Food() {
  return (
    <main className="min-h-screen bg-[#f7f4ed] px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <section className="tf-hero-panel relative overflow-hidden rounded-[2rem] bg-[#431f17] px-6 py-10 text-white sm:px-10">
            <div className="tf-orbit opacity-30" />
            <div className="relative max-w-3xl">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] text-[#f0ae48]">
                <Sparkles className="size-4" /> Taste Bangladesh
              </p>
              <h1 className="mt-3 font-serif text-4xl sm:text-6xl">
                Every region has
                <br />a story on its plate.
              </h1>
              <p className="mt-4 max-w-2xl leading-7 text-[#ead7cf]">
                Signature dishes, local favourites, honest price guidance এবং
                ready-made food trails দিয়ে tour-এর প্রতিটি meal স্মরণীয় করুন।
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#ead7cf]">
                <span>
                  <Utensils className="mr-1 inline size-4 text-[#f0ae48]" />{" "}
                  Must-eat dishes
                </span>
                <span>
                  <Flame className="mr-1 inline size-4 text-[#f0ae48]" /> Spice
                  filters
                </span>
                <span>
                  <MapPin className="mr-1 inline size-4 text-[#f0ae48]" />{" "}
                  Hidden local gems
                </span>
              </div>
            </div>
          </section>
          <FoodExperience />
        </div>
      </main>
  );
}
