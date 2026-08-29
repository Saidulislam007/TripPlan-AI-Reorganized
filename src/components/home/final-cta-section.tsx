import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
export function FinalCtaSection() {
  return (
    <section className="px-5 py-20 text-center">
      <h2 className="font-serif text-4xl">
        Your next journey can feel this easy.
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-[#64766f]">
        Plan smarter, spend confidently, and keep everyone in the trip on the
        same page.
      </p>
      <Button
        asChild
        className="mt-7 h-12 rounded-full bg-[#e29a2e] px-7 text-[#173d35]"
      >
        <Link href="/travel-intelligence">
          Start planning <ArrowRight />
        </Link>
      </Button>
    </section>
  );
}
