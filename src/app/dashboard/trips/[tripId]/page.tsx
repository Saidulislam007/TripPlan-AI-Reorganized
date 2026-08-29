import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  CloudSun,
  Download,
  Hotel,
  MapPin,
  Share2,
  ShieldCheck,
  Utensils,
  Users,
  Wallet,
} from "lucide-react";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { itinerary, trips } from "@/lib/dashboard-data";

export default async function Page({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;
  const trip = trips.find((t) => t.id === tripId);
  if (!trip) notFound();
  return (
    <DashboardShell>
      <Link
        href="/dashboard/trips"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#5d7169] hover:text-[#c77c19]"
      >
        <ArrowLeft className="size-4" /> Back to trips
      </Link>
      <section className="mt-5 overflow-hidden rounded-3xl bg-[#123f36] text-white">
        <div className="grid lg:grid-cols-[.75fr_1.25fr]">
          <div
            className="min-h-72 bg-cover bg-center"
            style={{ backgroundImage: `url(${trip.image})` }}
          />
          <div className="p-7 sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#efb656]">
              {trip.status} journey
            </p>
            <h1 className="mt-3 font-serif text-4xl">{trip.title}</h1>
            <p className="mt-2 text-white/65">
              <MapPin className="mr-1 inline size-4" />
              {trip.destination}
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                [CalendarDays, trip.date],
                [Users, `${trip.travellers} travellers`],
                [Wallet, `৳${trip.budget.toLocaleString()}`],
                [CloudSun, "28°C · Rain"],
              ].map(([Icon, value]) => (
                <div
                  key={String(value)}
                  className="rounded-2xl bg-white/10 p-3"
                >
                  <Icon className="size-4 text-[#efb656]" />
                  <p className="mt-2 text-xs">{String(value)}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button className="bg-[#e7a332] text-[#123f36]">
                <Share2 /> Share trip
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Download /> Save PDF
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                Edit itinerary
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-7 grid gap-6 xl:grid-cols-[1fr_330px]">
        <div>
          <h2 className="font-serif text-3xl">Day-by-day itinerary</h2>
          <div className="mt-5 space-y-4">
            {itinerary.slice(0, trip.days).map((d) => (
              <article
                key={d.day}
                className="rounded-3xl border border-[#ded9cc] bg-white p-6"
              >
                <div className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#123f36] text-sm font-bold text-white">
                    D{d.day}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl">{d.title}</h3>
                    <div className="mt-4 space-y-3">
                      {d.items.map((i) => (
                        <p
                          key={i}
                          className="border-l-2 border-[#e6bd72] pl-4 text-sm text-[#63756d]"
                        >
                          {i}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="space-y-5">
          <div className="rounded-3xl border border-[#ded9cc] bg-white p-6">
            <h2 className="font-serif text-xl">Budget breakdown</h2>
            {[
              ["Transport", 6500],
              ["Hotel", 9000],
              ["Food", 5000],
              ["Activities", 2500],
            ].map(([l, v]) => (
              <div
                key={String(l)}
                className="mt-4 flex justify-between border-b pb-3 text-sm"
              >
                <span>{String(l)}</span>
                <b>৳{Number(v).toLocaleString()}</b>
              </div>
            ))}
            <div className="mt-4 flex justify-between">
              <b>Estimated total</b>
              <b className="text-xl text-[#c77c19]">৳23,000</b>
            </div>
          </div>
          <div className="rounded-3xl border border-[#ded9cc] bg-white p-6">
            <h2 className="font-serif text-xl">Plan readiness</h2>
            <Progress
              value={trip.progress}
              className="mt-4 [&>div]:bg-[#c77c19]"
            />
            <p className="mt-2 text-xs text-[#73827c]">
              {trip.progress}% ready · 4 packing items left
            </p>
            <Button asChild variant="outline" className="mt-4 w-full">
              <Link href="/dashboard/packing">Open checklist</Link>
            </Button>
          </div>
          <div className="rounded-3xl bg-[#fff3d8] p-6">
            <ShieldCheck className="text-[#b87316]" />
            <h2 className="mt-3 font-serif text-xl">Before you leave</h2>
            <p className="mt-2 text-sm leading-6 text-[#78623c]">
              Keep NID copies offline, verify return tickets and carry emergency
              cash.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              [Hotel, "Stay"],
              [Utensils, "Food"],
              [MapPin, "Route"],
            ].map(([Icon, l]) => (
              <div
                key={String(l)}
                className="rounded-2xl border bg-white p-3 text-center"
              >
                <Icon className="mx-auto size-4 text-[#c77c19]" />
                <span className="mt-1 block text-xs">{String(l)}</span>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </DashboardShell>
  );
}
