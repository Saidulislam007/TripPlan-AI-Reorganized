import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function FoodStorySection() {
  return (
    <section className="bg-[#431f17] px-5 py-20 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f0ae48]">
            Eat where you travel
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
            A different food story in every division.
          </h2>
          <p className="mt-4 leading-7 text-[#decac2]">
            User যে বিভাগে tour করছে, Food route শুধু সেই বিভাগের signature
            dishes, local spots এবং ready-made food trail দেখায়।
          </p>
          <Button
            asChild
            className="mt-7 rounded-full bg-[#e29a2e] text-[#431f17]"
          >
            <Link href="/food">
              Taste the region <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            [
              "Chattogram",
              "Mezbani beef",
              "Hot · ৳450",
              "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
            ],
            [
              "Sylhet",
              "Satkora beef",
              "Medium · ৳520",
              "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80",
            ],
            [
              "Khulna",
              "Chui jhal",
              "Hot · ৳380",
              "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80",
            ],
          ].map(([region, dish, meta, image]) => (
            <Link
              href="/food"
              key={region}
              className="tf-tilt-card overflow-hidden rounded-2xl bg-white/8"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="p-5">
                <p className="text-xs text-[#f0ae48]">{region}</p>
                <h3 className="mt-1 font-serif text-xl">{dish}</h3>
                <p className="mt-2 text-xs text-[#d9c6be]">{meta}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
