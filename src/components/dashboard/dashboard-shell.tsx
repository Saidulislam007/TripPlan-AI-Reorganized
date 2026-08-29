"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Bot,
  ChevronRight,
  CircleUserRound,
  Heart,
  LayoutDashboard,
  LogOut,
  Menu,
  Plane,
  Star,
  Luggage,
  TicketCheck,
  ScrollText,
  X,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const links = [
  ["/dashboard", "Overview", LayoutDashboard],
  ["/dashboard/trips", "My trips", Plane],
  ["/dashboard/bookings", "Tour bookings", TicketCheck],
  ["/dashboard/ai-trips", "AI trips", Bot],
  ["/dashboard/sample-itinerary", "Sample itinerary", ScrollText],
  ["/dashboard/saved", "Saved items", Heart],
  ["/dashboard/packing", "Packing", Luggage],
  ["/dashboard/reviews", "My reviews", Star],
  ["/dashboard/notifications", "Notifications", Bell],
  ["/dashboard/profile", "Profile", CircleUserRound],
] as const;

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f6f3eb] text-[#153e35]">
      <header className="sticky top-0 z-50 border-b border-[#dcd7ca] bg-[#f6f3eb]/95 backdrop-blur-xl lg:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-xl font-semibold"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[#e7a332] text-white">
              <Plane className="size-4 -rotate-12" />
            </span>
            TripPlan AI
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle dashboard menu"
            className="rounded-xl border bg-white p-2"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t bg-white p-3">
            {links.map(([href, label, Icon]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${path === href ? "bg-[#123f36] text-white" : "hover:bg-[#f1eee6]"}`}
              >
                <Icon className="size-4" />
                {label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-[#dcd7ca] bg-[#103c33] p-5 text-white lg:flex">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-2xl font-semibold"
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#e7a332]">
            <Plane className="size-5 -rotate-12" />
          </span>
          TripPlan AI
        </Link>
        <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/10 p-3">
          <Avatar className="size-11">
            <AvatarFallback className="bg-[#e7a332] font-bold text-white">
              SI
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate font-semibold">Saidul Islam</p>
            <p className="text-xs text-white/60">Smart traveller</p>
          </div>
        </div>
        <nav className="mt-7 flex-1 space-y-1">
          {links.map(([href, label, Icon]) => {
            const active =
              href === "/dashboard" ? path === href : path.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${active ? "bg-[#e7a332] text-[#103c33]" : "text-white/75 hover:bg-white/10 hover:text-white"}`}
              >
                <Icon className="size-4" />
                {label}
                {active && <ChevronRight className="ml-auto size-4" />}
              </Link>
            );
          })}
        </nav>
        <Button
          asChild
          variant="ghost"
          className="justify-start text-white/70 hover:bg-white/10 hover:text-white"
        >
          <Link href="/">
            <LogOut /> Back to website
          </Link>
        </Button>
      </aside>
      <main className="min-h-screen lg:ml-64">
        <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}

export function DashboardHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c77c19]">
          {eyebrow}
        </p>
        <h1 className="mt-2 font-serif text-3xl sm:text-4xl">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6f7f79]">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
