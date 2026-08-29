"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { foodBySlug } from "@/lib/food";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  Clock,
  Flame,
  Heart,
  MapPin,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Star,
  Wallet,
  CheckCircle2,
} from "lucide-react";
export function FoodDetail() {
  const { slug } = useParams<{ slug: string }>();
  const f = foodBySlug(slug);
  const [saved, setSaved] = useState(
    () =>
      typeof window !== "undefined" &&
      JSON.parse(
        localStorage.getItem("tripflow-food-wishlist") || "[]",
      ).includes(slug),
  );
  const [sent, setSent] = useState(false);
  if (!f) return <div className="py-28 text-center">Food spot not found</div>;
  const toggle = () => {
    const key = "tripflow-food-wishlist";
    const a: string[] = JSON.parse(localStorage.getItem(key) || "[]");
    const n = a.includes(slug) ? a.filter((x) => x !== slug) : [...a, slug];
    localStorage.setItem(key, JSON.stringify(n));
    setSaved(!saved);
  };
  return (
    <div>
      <section
        className="relative min-h-[520px] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(50,19,12,.94),rgba(50,19,12,.3)),url(${f.image})`,
        }}
      >
        <div className="relative mx-auto flex min-h-[520px] max-w-7xl flex-col justify-between px-5 py-10 text-white lg:px-8">
          <Link
            href="/food"
            className="flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur"
          >
            <ArrowLeft className="size-4" /> All food spots
          </Link>
          <div className="max-w-3xl">
            <p className="text-sm text-[#f0ae48]">
              {f.type} · {f.region}
            </p>
            <h1 className="mt-3 font-serif text-5xl sm:text-7xl">{f.name}</h1>
            <p className="mt-4 flex items-center gap-2 text-[#ead7cf]">
              <MapPin className="size-4" />
              {f.area} · {f.distance}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                onClick={toggle}
                className={
                  saved
                    ? "rounded-full bg-white text-[#431f17]"
                    : "rounded-full bg-[#e29a2e] text-[#431f17]"
                }
              >
                <Heart
                  className={saved ? "fill-[#c77c19] text-[#c77c19]" : ""}
                />
                {saved ? "Saved to food list" : "Save to food list"}
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/30 bg-white/10 text-white"
              >
                <Navigation /> Get directions
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1fr_330px] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
            The cultural story
          </p>
          <h2 className="mt-2 font-serif text-4xl">Why this food matters</h2>
          <p className="mt-5 text-lg leading-8 text-[#5f736b]">{f.story}</p>
          <h3 className="mt-9 font-serif text-3xl">The must-try order</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {f.signature.map((s, i) => (
              <div
                key={s}
                className="tf-tilt-card rounded-2xl border bg-white p-5"
              >
                <span className="text-xs font-bold text-[#c77c19]">
                  0{i + 1}
                </span>
                <h4 className="mt-3 font-serif text-xl">{s}</h4>
                <p className="mt-2 text-sm text-[#71817a]">
                  Estimated within the spot's ৳{f.price} average order.
                </p>
              </div>
            ))}
          </div>
          <h3 className="mt-9 font-serif text-3xl">Foodie review signals</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5">
              <b className="text-2xl">{f.taste}/5</b>
              <p className="text-sm text-[#71817a]">Taste score · sample</p>
              <p className="mt-3 text-sm leading-6">
                “The signature dish had a distinct local flavour and the portion
                matched the price.”
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <b className="text-2xl">{f.hygiene}/5</b>
              <p className="text-sm text-[#71817a]">Hygiene score · sample</p>
              <p className="mt-3 text-sm leading-6">
                “Serving area looked clean; wash point and seating were
                acceptable during the visit.”
              </p>
            </div>
          </div>
        </div>
        <aside className="h-fit rounded-2xl border bg-white p-6 shadow-xl lg:sticky lg:top-24">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl">Quick guide</h3>
            <span className="rounded-lg bg-[#e8eee9] px-2 py-1 text-sm font-bold">
              {f.rating} <Star className="inline size-3 fill-current" />
            </span>
          </div>
          <div className="mt-6 space-y-5">
            {[
              [Wallet, "Estimated cost", `৳${f.price} · ${f.portion}`],
              [Flame, "Spice level", f.spice],
              [Clock, "Hours", f.open],
              [
                ShieldCheck,
                "Preference",
                `${f.halal ? "Halal · " : ""}${f.vegetarian ? "Veg options · " : ""}${f.seafood ? "Seafood" : "Traditional"}`,
              ],
            ].map(([I, l, v]: any) => (
              <div key={l} className="flex gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#fff0d5]">
                  <I className="size-5 text-[#b87316]" />
                </span>
                <div>
                  <small className="text-[#7a8983]">{l}</small>
                  <b className="block text-sm">{v}</b>
                </div>
              </div>
            ))}
          </div>
          <Dialog
            onOpenChange={(open) => {
              if (!open) setTimeout(() => setSent(false), 200);
            }}
          >
            <DialogTrigger asChild>
              <Button className="mt-7 w-full bg-[#431f17]">
                <MessageCircle /> Ask about ingredients
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg rounded-[1.5rem] p-6 sm:p-7">
              {sent ? (
                <div className="py-8 text-center">
                  <span className="mx-auto grid size-16 place-items-center rounded-full bg-[#e8eee9]">
                    <CheckCircle2 className="size-8 text-[#2f7259]" />
                  </span>
                  <DialogTitle className="mt-5 font-serif text-3xl">
                    Question saved
                  </DialogTitle>
                  <DialogDescription className="mx-auto mt-3 max-w-sm leading-6">
                    This UI demo recorded your ingredient question. In the full
                    version it will be sent to {f.name}.
                  </DialogDescription>
                  <DialogFooter className="mt-6" showCloseButton />
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl">
                      Ask {f.name}
                    </DialogTitle>
                    <DialogDescription>
                      Check ingredients, allergens or dietary requirements
                      before you visit.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-6 space-y-5">
                    <div>
                      <Label htmlFor="dish">Which dish?</Label>
                      <select
                        id="dish"
                        className="mt-2 h-11 w-full rounded-xl border bg-white px-3 text-sm"
                      >
                        {f.signature.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="question">Your question</Label>
                      <Textarea
                        id="question"
                        required
                        placeholder="Example: Does this contain nuts or dairy? Can you make it less spicy?"
                        className="mt-2 min-h-28 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact">Phone or email for reply</Label>
                      <Input
                        id="contact"
                        required
                        placeholder="01XXXXXXXXX or you@email.com"
                        className="mt-2 h-11 rounded-xl"
                      />
                    </div>
                    <label className="flex items-start gap-3 rounded-xl bg-[#f7f4ed] p-4 text-sm">
                      <Checkbox className="mt-0.5" />
                      <span>
                        I have a serious food allergy. Please confirm
                        cross-contamination risk.
                      </span>
                    </label>
                    <div className="rounded-xl border border-[#efd39e] bg-[#fff5df] p-3 text-xs leading-5 text-[#755e35]">
                      For severe allergies, never rely only on an app
                      response—confirm directly with the restaurant before
                      ordering.
                    </div>
                  </div>
                  <DialogFooter className="mt-6" showCloseButton>
                    <Button type="submit" className="bg-[#431f17]">
                      Send ingredient question
                    </Button>
                  </DialogFooter>
                </form>
              )}
            </DialogContent>
          </Dialog>
          <p className="mt-4 text-center text-xs text-[#8a9691]">
            UI demo · verify current hours and prices
          </p>
        </aside>
      </section>
    </div>
  );
}
