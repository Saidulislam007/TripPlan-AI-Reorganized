import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Bus,
  HeartHandshake,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
} from "lucide-react";
import { Shell } from "@/components/layout/tripflow";
import { Button } from "@/components/ui/button";

const problems = [
  {
    icon: MapPinned,
    title: "তথ্য আছে, কিন্তু এক জায়গায় নেই",
    text: "Route, hotel, খাবার আর দর্শনীয় জায়গার তথ্য খুঁজতে traveller-কে অনেকগুলো platform ঘুরতে হয়।",
  },
  {
    icon: WalletCards,
    title: "শেষ খরচটা আগে বোঝা যায় না",
    text: "ভাড়া, local transport, খাবার ও hidden cost যোগ হয়ে budget খুব সহজেই পরিকল্পনার বাইরে চলে যায়।",
  },
  {
    icon: Bus,
    title: "বাস্তব travel time মেলে না",
    text: "Traffic, transfer, rest stop ও seasonal delay বাদ পড়লে সুন্দর itinerary-ও বাস্তবে কাজে আসে না।",
  },
  {
    icon: ShieldCheck,
    title: "পরিবারের নিরাপত্তা নিয়ে দুশ্চিন্তা",
    text: "Family-friendly stay, খাবার, prayer break এবং জরুরি সহায়তার তথ্য সবসময় পরিষ্কার থাকে না।",
  },
];

const promises = [
  "আপনার budget ও pace অনুযায়ী practical day-by-day plan",
  "বাংলাদেশের road, train, launch ও local transport reality",
  "Division-specific hotel, authentic food এবং destination guide",
  "Family, child, senior ও food preference-aware suggestions",
];

export default function AboutPage() {
  return (
    <Shell>
      <main className="overflow-hidden bg-[#f7f4ed] text-[#123f36]">
        <section className="relative isolate min-h-[680px] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,39,32,.96)_0%,rgba(7,39,32,.78)_52%,rgba(7,39,32,.28)_100%),url('https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center" />
          <div className="absolute -left-28 top-24 size-80 rounded-full border border-white/10" />
          <div className="absolute -left-12 top-40 size-52 rounded-full border border-[#e9a63a]/30" />
          <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 py-24 lg:px-8">
            <div className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                <Sparkles className="size-4 text-[#efb24d]" /> Our story, built
                around your journey
              </div>
              <h1 className="mt-7 font-serif text-5xl leading-[1.03] tracking-tight sm:text-7xl">
                ভ্রমণের আনন্দ থাকুক।
                <span className="block italic text-[#efb24d]">
                  অনিশ্চয়তা নয়।
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#d9e6e1] sm:text-xl">
                TripPlan AI তৈরি হয়েছে বাংলাদেশের traveller-দের জন্য—যাতে একটি
                destination-এর নাম থেকেই route, budget, stay, local food ও
                realistic itinerary মিলিয়ে একটি সহজ, বিশ্বাসযোগ্য plan পাওয়া
                যায়।
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-13 rounded-full bg-[#e9a63a] px-7 text-[#123f36] hover:bg-[#f2b653]"
                >
                  <Link href="/travel-intelligence">
                    Create my AI travel plan <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-13 rounded-full border-white/30 bg-white/10 px-7 text-white hover:bg-white hover:text-[#123f36]"
                >
                  <Link href="/explore-bangladesh">Explore Bangladesh</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.22em] text-[#bd7718]">
                  Why TripPlan AI exists
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  একটি ভালো trip শুরু হয় সঠিক সিদ্ধান্ত থেকে।
                </h2>
                <p className="mt-5 leading-8 text-[#65776f]">
                  বাংলাদেশের ভ্রমণ পরিকল্পনা শুধু জায়গার list বানানো নয়। সঠিক
                  গাড়ি কখন ছাড়ে, traffic-এ কত সময় লাগবে, hotel সত্যিই
                  family-friendly কি না এবং খরচ কোথায় বাড়তে পারে—এসবই একটি trip
                  সফল বা কঠিন করে তোলে।
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {problems.map(({ icon: Icon, title, text }, index) => (
                  <article
                    key={title}
                    className="rounded-[1.75rem] border border-[#ded8c9] bg-white p-6 shadow-[0_18px_45px_rgba(18,63,54,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#e9a63a]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-11 place-items-center rounded-2xl bg-[#f9edd7] text-[#bd7718]">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-serif text-2xl text-[#d7cbb8]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#6c7c76]">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#123f36] px-5 py-20 text-white lg:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative min-h-[480px] overflow-hidden rounded-[2.25rem] bg-[url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#082d27]/90 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#082d27]/75 p-5 backdrop-blur-md sm:inset-x-8 sm:bottom-8">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#efb24d]">
                  Our north star
                </p>
                <p className="mt-2 font-serif text-2xl">
                  “কম planning stress, বেশি meaningful journey.”
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#efb24d]">
                The TripPlan AI promise
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                AI-এর speed,
                <span className="block italic text-[#efb24d]">
                  local traveller-এর বোধ।
                </span>
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-[#c8d9d4]">
                আমরা generic suggestion দেখানোর জন্য TripPlan AI বানাইনি।
                প্রতিটি plan-এ traveller-এর starting point, budget, সময়, pace
                এবং companion-এর প্রয়োজনকে গুরুত্ব দেওয়া হয়।
              </p>
              <div className="mt-8 space-y-4">
                {promises.map((promise) => (
                  <div key={promise} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-[#efb24d]" />
                    <p className="leading-7 text-[#e0eae7]">{promise}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden rounded-[2.25rem] border border-[#ded8c9] bg-white lg:grid-cols-[1.15fr_.85fr]">
              <div className="p-7 sm:p-12 lg:p-16">
                <div className="flex items-center gap-3 text-[#bd7718]">
                  <HeartHandshake className="size-6" />
                  <span className="text-xs font-bold uppercase tracking-[.2em]">
                    Made for every Bangladesh traveller
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                  আপনার next journey-টা শুধু plan করবেন না—
                  <span className="italic text-[#bd7718]">
                    {" "}
                    confidently শুরু করুন।
                  </span>
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-[#65776f]">
                  Solo adventure হোক, family tour বা বন্ধুদের budget trip—একটি
                  smarter starting point আপনার সময়, টাকা এবং unnecessary
                  tension—তিনটিই বাঁচাতে পারে।
                </p>
                <Button
                  asChild
                  className="mt-8 h-13 rounded-full bg-[#123f36] px-7 hover:bg-[#1b594c]"
                >
                  <Link href="/travel-intelligence">
                    Start planning now <ArrowRight />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 border-t border-[#ded8c9] bg-[#f2eadc] lg:border-l lg:border-t-0">
                {[
                  ["8", "Divisions to explore"],
                  ["৳", "Budget-first planning"],
                  ["24/7", "Plan whenever you want"],
                  ["1", "Connected travel workspace"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={`flex min-h-40 flex-col justify-center p-6 sm:p-8 ${index % 2 === 0 ? "border-r border-[#d8cbb7]" : ""} ${index < 2 ? "border-b border-[#d8cbb7]" : ""}`}
                  >
                    <span className="font-serif text-4xl text-[#123f36] sm:text-5xl">
                      {value}
                    </span>
                    <span className="mt-2 text-sm text-[#65776f]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#efe6d6] px-6 py-5 text-center sm:flex-row sm:text-left">
              <p className="flex items-center gap-2 text-sm text-[#526a62]">
                <Users className="size-5 text-[#bd7718]" /> Built with empathy
                for local travellers, families and first-time explorers.
              </p>
              <Link
                href="/explore-bangladesh"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#123f36] hover:text-[#bd7718]"
              >
                Discover your next place <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
