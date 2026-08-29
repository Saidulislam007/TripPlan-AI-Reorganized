"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Image as ImageIcon,
  Lock,
  Mail,
  Plane,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <main className="grid min-h-screen bg-[#f7f4ed] lg:grid-cols-2">
      <section className="relative hidden bg-[linear-gradient(rgba(9,43,36,.45),rgba(9,43,36,.84)),url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85')] bg-cover bg-center p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <Link href="/" className="flex items-center gap-2 font-serif text-2xl">
          <Plane className="text-[#efb24d]" />
          TripPlan AI
        </Link>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#efb24d]">
            Your next story starts here
          </p>
          <h1 className="mt-4 max-w-xl font-serif text-5xl leading-tight">
            Create one account. Keep every journey together.
          </h1>
          <div className="mt-6 space-y-3 text-[#d7e4df]">
            <p>
              <Check className="mr-2 inline size-4 text-[#efb24d]" /> Build
              personalized AI trips
            </p>
            <p>
              <Check className="mr-2 inline size-4 text-[#efb24d]" /> Save
              places, hotels and food spots
            </p>
            <p>
              <Check className="mr-2 inline size-4 text-[#efb24d]" /> Manage
              bookings and packing lists
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center p-5 py-10">
        <div className="w-full max-w-md rounded-[2rem] border border-[#ded8ca] bg-white/90 p-7 shadow-[0_24px_70px_-35px_rgba(18,63,54,.45)] backdrop-blur-xl sm:p-9">
          <Link
            href="/"
            className="mb-10 flex items-center gap-2 font-serif text-2xl lg:hidden"
          >
            <Plane className="text-[#c77c19]" />
            TripPlan AI
          </Link>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#c77c19]">
            Join TripPlan AI
          </p>
          <h2 className="mt-2 font-serif text-4xl">Create your account.</h2>
          <p className="mt-3 text-[#6c7d76]">
            Start planning smarter journeys across Bangladesh.
          </p>

          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/dashboard")}
            className="mt-7 h-12 w-full rounded-xl border-[#d8d4c8] bg-white text-[#173f37] hover:bg-[#f7f4ed]"
          >
            <span className="grid size-6 place-items-center rounded-full border border-[#ded8ca] font-bold text-[#4285f4]">
              G
            </span>
            Sign up with Google
          </Button>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[.16em] text-[#98a39f]">
            <span className="h-px flex-1 bg-[#ded8ca]" /> or use email
            <span className="h-px flex-1 bg-[#ded8ca]" />
          </div>

          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              if (data.get("password") !== data.get("confirmPassword")) {
                setError("Passwords do not match. Please try again.");
                return;
              }
              setError("");
              router.push("/dashboard");
            }}
          >
            <Field
              icon={<User className="size-5" />}
              label="Full name"
              name="name"
              type="text"
              placeholder="Saidul Islam"
            />
            <Field
              icon={<Mail className="size-5" />}
              label="Email address"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
            <Field
              icon={<Lock className="size-5" />}
              label="Password"
              name="password"
              type="password"
              placeholder="Minimum 8 characters"
              minLength={8}
            />
            <Field
              icon={<Lock className="size-5" />}
              label="Confirm password"
              name="confirmPassword"
              type="password"
              placeholder="Enter password again"
              minLength={8}
            />
            <div>
              <Label htmlFor="image">Profile image</Label>
              <div className="relative mt-2">
                <ImageIcon className="absolute left-3 top-3 size-5 text-[#8b9893]" />
                <Input
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  required
                  className="h-12 cursor-pointer rounded-xl pl-10 pt-2.5 file:mr-3 file:border-0 file:bg-transparent file:text-sm file:font-medium"
                />
              </div>
            </div>
            {error && (
              <p
                role="alert"
                className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}
            <Button
              type="submit"
              className="h-12 w-full rounded-xl bg-[#123f36]"
            >
              Create account <ArrowRight />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[#6c7d76]">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-[#b87316]">
              Log in
            </Link>
          </p>
          <p className="mt-7 text-center text-xs text-[#97a29e]">
            UI demo — no real account is required.
          </p>
        </div>
      </section>
    </main>
  );
}

function Field({
  icon,
  label,
  ...props
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  type: string;
  placeholder: string;
  minLength?: number;
}) {
  return (
    <div>
      <Label htmlFor={props.name}>{label}</Label>
      <div className="relative mt-2">
        <span className="absolute left-3 top-3 text-[#8b9893]">{icon}</span>
        <Input
          id={props.name}
          required
          className="h-12 rounded-xl pl-10"
          {...props}
        />
      </div>
    </div>
  );
}
