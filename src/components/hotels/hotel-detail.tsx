"use client";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { hotelBySlug, totalPrice } from "@/lib/hotels";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BadgeCheck,
  BedDouble,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  Wallet,
} from "lucide-react";
export function HotelDetail() {
  const { slug } = useParams<{ slug: string }>();
  const h = hotelBySlug(slug);
  if (!h) return <div className="py-28 text-center">Hotel not found</div>;
  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 pt-7 lg:px-8">
        <Link href="/hotels" className="inline-flex items-center gap-2 text-sm">
          <ArrowLeft className="size-4" /> Back to hotel search
        </Link>
        <div className="mt-5 grid h-[430px] gap-2 overflow-hidden rounded-[2rem] sm:grid-cols-2">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${h.images[0]})` }}
          />
          <div className="hidden grid-rows-2 gap-2 sm:grid">
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${h.images[1]})` }}
            />
            <div
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${h.images[2]})` }}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1fr_340px] lg:px-8">
        <section>
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
            {h.badges.join(" · ")}
          </p>
          <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl">{h.name}</h1>
              <p className="mt-2 flex items-center gap-2 text-[#667870]">
                <MapPin className="size-4 text-[#c77c19]" />
                {h.location}, {h.destination} · {h.distance}
              </p>
            </div>
            <div className="h-fit rounded-xl bg-[#e6f0ea] p-3 text-center">
              <b className="text-xl">{h.rating}</b>
              <p className="text-xs">{h.reviews} reviews</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Object.entries(h.scores).map(([k, v]) => (
              <div
                key={k}
                className="tf-tilt-card rounded-xl border bg-white p-4"
              >
                <b className="text-lg">{v}/5</b>
                <p className="mt-1 capitalize text-xs text-[#71817a]">{k}</p>
              </div>
            ))}
          </div>
          <h2 className="mt-9 font-serif text-3xl">Amenities that matter</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {h.amenities.map((a) => (
              <div
                key={a}
                className="flex items-center gap-2 rounded-xl bg-white p-4"
              >
                <Check className="size-4 text-[#c77c19]" />
                {a}
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white p-5">
              <ShieldCheck className="text-[#c77c19]" />
              <h3 className="mt-3 font-serif text-xl">Safety & privacy</h3>
              <p className="mt-2 text-sm leading-6 text-[#687971]">
                24-hour desk, CCTV in common areas and guest ID verification.
                Confirm couple/family document rules before arrival.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-5">
              <CalendarDays className="text-[#c77c19]" />
              <h3 className="mt-3 font-serif text-xl">Cancellation</h3>
              <p className="mt-2 text-sm leading-6 text-[#687971]">
                {h.cancellation}
              </p>
            </div>
          </div>
          <h2 className="mt-9 font-serif text-3xl">Recent guest signals</h2>
          <div className="mt-4 space-y-3">
            {[
              [
                "Farhana, Dhaka",
                "Room and washroom matched the photos. Staff arranged an early breakfast.",
              ],
              [
                "Rafi, Khulna",
                "Location was convenient and the generator backup worked during the outage.",
              ],
            ].map(([n, t]) => (
              <div key={n} className="rounded-2xl border bg-white p-5">
                <div className="flex justify-between">
                  <b>{n}</b>
                  <span className="text-sm text-[#b87316]">
                    Verified-style sample
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-[#667870]">{t}</p>
              </div>
            ))}
          </div>
        </section>
        <aside className="h-fit rounded-2xl border bg-white p-6 shadow-xl lg:sticky lg:top-24">
          <p className="text-sm text-[#687971]">{h.room} · 1 night</p>
          <div className="mt-4 space-y-3 border-b pb-4 text-sm">
            <div className="flex justify-between">
              <span>Base price</span>
              <span>৳{h.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT & service charge</span>
              <span>৳{h.tax.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[#3f7c64]">
              <span>Discount</span>
              <span>− ৳{h.discount.toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <b>Total</b>
            <b className="text-2xl">৳{totalPrice(h).toLocaleString()}</b>
          </div>
          <p className="mt-1 text-right text-xs text-[#71817a]">
            No hidden charge in this sample
          </p>
          {h.payAtHotel && (
            <div className="mt-4 rounded-xl bg-[#e8eee9] p-3 text-sm">
              <BadgeCheck className="mr-2 inline size-4 text-[#3f7c64]" />
              Pay at hotel available
            </div>
          )}
          <Button className="mt-5 h-12 w-full bg-[#e29a2e] text-[#173d35]">
            Reserve this room
          </Button>
          <Button variant="outline" className="mt-2 w-full">
            <MessageCircle /> Special request
          </Button>
          <p className="mt-4 text-center text-xs text-[#8a9691]">
            UI demo — no real payment or reservation
          </p>
        </aside>
      </div>
    </div>
  );
}

export function HotelCompare() {
  const params = useSearchParams();
  const ids = (params.get("ids") || "").split(",");
  const list = ids.map(hotelBySlug).filter(Boolean).slice(0, 3);
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <Link href="/hotels" className="inline-flex items-center gap-2 text-sm">
        <ArrowLeft className="size-4" /> Back to hotels
      </Link>
      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
          Side-by-side decision
        </p>
        <h1 className="mt-2 font-serif text-4xl">Compare stays clearly.</h1>
      </div>
      {list.length ? (
        <div className="mt-8 overflow-x-auto">
          <div
            className="grid min-w-[800px] gap-4"
            style={{
              gridTemplateColumns: `180px repeat(${list.length},minmax(200px,1fr))`,
            }}
          >
            <div />
            <>
              {list.map((h) => (
                <div
                  key={h!.slug}
                  className="overflow-hidden rounded-2xl border bg-white"
                >
                  <div
                    className="h-32 bg-cover bg-center"
                    style={{ backgroundImage: `url(${h!.image})` }}
                  />
                  <div className="p-4">
                    <h2 className="font-serif text-xl">{h!.name}</h2>
                    <p className="text-xs text-[#71817a]">{h!.destination}</p>
                  </div>
                </div>
              ))}
            </>
            {[
              [
                "Total / night",
                ...list.map((h) => `৳${totalPrice(h!).toLocaleString()}`),
              ],
              ["Rating", ...list.map((h) => `${h!.rating}/5`)],
              ["Cleanliness", ...list.map((h) => `${h!.scores.cleanliness}/5`)],
              ["Washroom", ...list.map((h) => `${h!.scores.washroom}/5`)],
              ["Distance", ...list.map((h) => h!.distance)],
              ["Cancellation", ...list.map((h) => h!.cancellation)],
              [
                "Pay at hotel",
                ...list.map((h) => (h!.payAtHotel ? "Yes" : "No")),
              ],
            ].flatMap((row: any) => (
              <>
                {row.map((cell: string, i: number) => (
                  <div
                    key={`${row[0]}-${i}`}
                    className={`rounded-xl border p-4 text-sm ${i === 0 ? "bg-[#123f36] font-semibold text-white" : "bg-white"}`}
                  >
                    {cell}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border bg-white p-10 text-center">
          Select 2–3 hotels from the hotel search page to compare.
        </div>
      )}
    </div>
  );
}
