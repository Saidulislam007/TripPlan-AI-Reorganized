"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plane, Mail, Lock, ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
export default function Login() {
  const r = useRouter();
  return (
    <main className="grid min-h-screen bg-[#f7f4ed] lg:grid-cols-2">
      <section className="relative hidden bg-[linear-gradient(rgba(9,43,36,.45),rgba(9,43,36,.82)),url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=85')] bg-cover bg-center p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <Link href="/" className="flex items-center gap-2 font-serif text-2xl">
          <Plane className="text-[#efb24d]" />
          TripPlan AI
        </Link>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#efb24d]">
            Your journeys, remembered
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight">
            One quiet place for every trip you dream up.
          </h1>
          <div className="mt-6 space-y-3 text-[#d7e4df]">
            <p>
              <Check className="mr-2 inline size-4 text-[#efb24d]" /> Save and
              edit itineraries
            </p>
            <p>
              <Check className="mr-2 inline size-4 text-[#efb24d]" /> Share
              plans with family
            </p>
            <p>
              <Check className="mr-2 inline size-4 text-[#efb24d]" /> Keep
              packing lists synced
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center p-5">
        <div className="w-full max-w-md rounded-[2rem] border border-[#ded8ca] bg-white/90 p-7 shadow-[0_24px_70px_-35px_rgba(18,63,54,.45)] backdrop-blur-xl sm:p-9">
          <Link
            href="/"
            className="mb-12 flex items-center gap-2 font-serif text-2xl lg:hidden"
          >
            <Plane className="text-[#c77c19]" />
            TripPlan AI
          </Link>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c77c19]">
            Welcome back
          </p>
          <h2 className="mt-2 font-serif text-4xl">Continue your journey.</h2>
          <p className="mt-3 text-[#6c7d76]">
            Sign in to find all your saved plans.
          </p>
          <Button
            type="button"
            variant="outline"
            onClick={() => r.push("/dashboard")}
            className="mt-7 h-12 w-full rounded-xl border-[#d8d4c8] bg-white text-[#173f37] hover:bg-[#f7f4ed]"
          >
            <span className="grid size-6 place-items-center rounded-full border border-[#ded8ca] font-bold text-[#4285f4]">
              G
            </span>
            Sign in with Google
          </Button>
          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[.16em] text-[#98a39f]">
            <span className="h-px flex-1 bg-[#ded8ca]" /> or continue with email
            <span className="h-px flex-1 bg-[#ded8ca]" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              r.push("/dashboard");
            }}
            className="space-y-5"
          >
            <div>
              <Label>Email address</Label>
              <div className="relative mt-2">
                <Mail className="absolute left-3 top-3 size-5 text-[#8b9893]" />
                <Input
                  type="email"
                  defaultValue="saidul@example.com"
                  className="h-12 rounded-xl pl-10"
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <Label>Password</Label>
                <button type="button" className="text-xs text-[#b87316]">
                  Forgot password?
                </button>
              </div>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-3 size-5 text-[#8b9893]" />
                <Input
                  type="password"
                  defaultValue="tripplanai"
                  className="h-12 rounded-xl pl-10"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="h-12 w-full rounded-xl bg-[#123f36]"
            >
              Log in <ArrowRight />
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-[#6c7d76]">
            New to TripPlan AI?{" "}
            <Link href="/register" className="font-semibold text-[#b87316]">
              Create an account
            </Link>
          </p>
          <p className="mt-8 text-center text-xs text-[#97a29e]">
            UI demo — no real account is required.
          </p>
        </div>
      </section>
    </main>
  );
}
