import Link from "next/link";
import { Plane } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0e332c] px-5 py-10 text-[#dfe9e5]">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <div className="flex items-center gap-2 font-serif text-2xl text-white">
            <Plane className="text-[#e9a63a]" />
            TripPlan AI
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#a9c0ba]">
            বাংলাদেশের ভ্রমণকারীদের জন্য সহজ, বাজেট-সচেতন ও বাস্তবসম্মত AI
            travel planning.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
          <Link href="/travel-intelligence">AI Travel Intelligence</Link>
          <Link href="/tour-packages">Tour Packages</Link>
          <Link href="/about">About TripPlan AI</Link>
          <Link href="/contact">Contact us</Link>
        </div>
      </div>
    </footer>
  );
}
