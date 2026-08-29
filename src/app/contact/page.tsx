"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Headphones,
  Mail,
  MapPin,
  MessageCircleMore,
  Send,
  ShieldAlert,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const supportTypes = [
  {
    icon: Headphones,
    title: "Travel planning help",
    text: "AI plan, saved trip, route বা dashboard ব্যবহার নিয়ে সহায়তা নিন।",
  },
  {
    icon: ShieldAlert,
    title: "Report incorrect information",
    text: "পুরোনো fare, hotel, food spot বা destination information আমাদের জানান।",
  },
  {
    icon: Building2,
    title: "Business & partnership",
    text: "Verified hotel, restaurant, transport বা tourism partnership নিয়ে কথা বলুন।",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="bg-[#f7f4ed] text-[#123f36]">
        <section className="relative isolate overflow-hidden bg-[#123f36] px-5 py-20 text-white lg:px-8 lg:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(18,63,54,.97),rgba(18,63,54,.78)),url('https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=2000&q=85')] bg-cover bg-center" />
          <div className="absolute -right-24 -top-24 size-80 rounded-full border border-white/10" />
          <div className="absolute right-10 top-16 size-44 rounded-full border border-[#e9a63a]/30" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
                <Sparkles className="size-4 text-[#efb24d]" /> We are here for
                your journey
              </div>
              <h1 className="mt-7 font-serif text-5xl leading-[1.03] tracking-tight sm:text-7xl">
                প্রশ্ন থাকলে বলুন।
                <span className="block italic text-[#efb24d]">
                  পথটা সহজ করি।
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#d4e2de]">
                Trip plan নিয়ে সমস্যা, কোনো তথ্য ভুল, নাকি TripPlan AI-এর সাথে
                কাজ করতে চান? সঠিক team-এর কাছে আপনার message পৌঁছে দিতে আমরা
                প্রস্তুত।
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#ccddd8]">
                <span className="flex items-center gap-2">
                  <Clock3 className="size-4 text-[#efb24d]" /> সাধারণত ২৪ ঘণ্টার
                  মধ্যে reply
                </span>
                <span className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-[#efb24d]" /> Bangla &
                  English support
                </span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-[#fffdf8] p-6 text-[#123f36] shadow-2xl sm:p-8">
              {submitted ? (
                <div
                  role="status"
                  className="flex min-h-[520px] flex-col items-center justify-center text-center"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-[#e4f1eb] text-[#16705c]">
                    <CheckCircle2 className="size-8" />
                  </span>
                  <h2 className="mt-6 font-serif text-3xl">
                    Message received.
                  </h2>
                  <p className="mt-3 max-w-sm leading-7 text-[#687a73]">
                    ধন্যবাদ। আপনার message আমাদের support queue-তে যোগ হয়েছে।
                    প্রয়োজন অনুযায়ী team আপনার সঙ্গে যোগাযোগ করবে।
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-7 rounded-full"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[.2em] text-[#bd7718]">
                      Contact TripPlan AI
                    </p>
                    <h2 className="mt-2 font-serif text-3xl">
                      How can we help?
                    </h2>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Your name</Label>
                      <Input
                        id="contact-name"
                        name="name"
                        required
                        placeholder="Saidul Islam"
                        className="h-12 rounded-xl bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email address</Label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="h-12 rounded-xl bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-topic">What is this about?</Label>
                    <Select name="topic" required>
                      <SelectTrigger
                        id="contact-topic"
                        className="h-12 w-full rounded-xl bg-white"
                      >
                        <SelectValue placeholder="Select a support topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="planning">
                          Travel planning help
                        </SelectItem>
                        <SelectItem value="information">
                          Report incorrect information
                        </SelectItem>
                        <SelectItem value="account">
                          Account or dashboard support
                        </SelectItem>
                        <SelectItem value="partnership">
                          Business & partnership
                        </SelectItem>
                        <SelectItem value="feedback">
                          Product feedback
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Your message</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      minLength={10}
                      placeholder="আপনার সমস্যা বা প্রস্তাবটি বিস্তারিত লিখুন..."
                      className="min-h-36 resize-none rounded-xl bg-white"
                    />
                  </div>
                  <Button className="h-12 w-full rounded-xl bg-[#123f36] hover:bg-[#1b594c]">
                    Send message <Send className="size-4" />
                  </Button>
                  <p className="text-center text-xs leading-5 text-[#7a8983]">
                    এই UI demo-তে submission confirmation দেখানো হবে। Backend
                    যুক্ত হলে message support team-এর কাছে যাবে।
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#bd7718]">
                Choose the right support
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                দ্রুত সাহায্যের জন্য সঠিক বিষয়টি জানান।
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {supportTypes.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  className="rounded-[1.75rem] border border-[#ded8c9] bg-white p-7 shadow-[0_16px_40px_rgba(18,63,54,.05)] transition duration-300 hover:-translate-y-1 hover:border-[#e9a63a]"
                >
                  <span className="grid size-12 place-items-center rounded-2xl bg-[#f9edd7] text-[#bd7718]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#687a73]">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 lg:px-8 lg:pb-28">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#ded8c9] bg-[#efe6d6] lg:grid-cols-[1fr_1fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <MessageCircleMore className="size-7 text-[#bd7718]" />
              <h2 className="mt-5 font-serif text-3xl sm:text-4xl">
                আগে নিজেই plan তৈরি করে দেখতে চান?
              </h2>
              <p className="mt-4 leading-7 text-[#64766f]">
                Destination, budget ও travel preference দিলে TripPlan AI আপনার
                জন্য একটি complete AI travel plan তৈরি করবে।
              </p>
              <Link
                href="/travel-intelligence"
                className="mt-6 inline-flex items-center gap-2 font-semibold hover:text-[#bd7718]"
              >
                Open AI Travel Intelligence <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="grid gap-0 border-t border-[#d8cbb7] bg-white sm:grid-cols-2 lg:border-l lg:border-t-0">
              <div className="border-b border-[#ded8c9] p-7 sm:border-b-0 sm:border-r lg:p-10">
                <Mail className="size-6 text-[#bd7718]" />
                <p className="mt-4 text-xs uppercase tracking-[.18em] text-[#798981]">
                  Email support
                </p>
                <p className="mt-2 font-semibold">support@tripplanai.bd</p>
              </div>
              <div className="p-7 lg:p-10">
                <MapPin className="size-6 text-[#bd7718]" />
                <p className="mt-4 text-xs uppercase tracking-[.18em] text-[#798981]">
                  Built for
                </p>
                <p className="mt-2 font-semibold">
                  Travellers across Bangladesh
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
