"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Activity,
  BellRing,
  Bot,
  Building2,
  ChevronRight,
  CircleUserRound,
  ClipboardCheck,
  FileText,
  Flag,
  ImageIcon,
  LayoutDashboard,
  LogOut,
  Menu,
  Plane,
  Route,
  ShieldCheck,
  Soup,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const links = [
  ["/moderator", "Overview", LayoutDashboard],
  ["/moderator/site-content", "Site Content", FileText],
  ["/moderator/content", "Content Verification", ShieldCheck],
  ["/moderator/destinations", "Destinations", Route],
  ["/moderator/hotels", "Hotels", Building2],
  ["/moderator/food", "Food Spots", Soup],
  ["/moderator/transport", "Transport", Plane],
  ["/moderator/reviews", "Review Queue", ClipboardCheck],
  ["/moderator/ai-review-queue", "AI Verification", Bot],
  ["/moderator/reports", "User Reports", Flag],
  ["/moderator/alerts", "Travel Alerts", BellRing],
  ["/moderator/media", "Media Library", ImageIcon],
  ["/moderator/history", "Activity History", Activity],
  ["/moderator/profile", "Profile", CircleUserRound],
] as const;

function ModeratorNav({ close }: { close?: () => void }) {
  const path = usePathname();
  return (
    <nav className="space-y-1">
      {links.map(([href, label, Icon]) => {
        const active =
          href === "/moderator" ? path === href : path.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={close}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active ? "bg-[#e7a332] text-[#103c33]" : "text-white/70 hover:bg-white/10 hover:text-white"}`}
          >
            <Icon className="size-4 shrink-0" />
            <span>{label}</span>
            {active && <ChevronRight className="ml-auto size-4" />}
          </Link>
        );
      })}
    </nav>
  );
}

export function ModeratorShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f4f1e9] text-[#153e35]">
      <header className="sticky top-0 z-50 border-b border-[#dcd7ca] bg-[#f4f1e9]/95 backdrop-blur-xl lg:hidden">
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-xl font-semibold"
          >
            <span className="grid size-9 place-items-center rounded-full bg-[#e7a332] text-white">
              <ShieldCheck className="size-4" />
            </span>
            TripPlan AI <span className="text-xs text-[#bd7718]">MOD</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle moderator menu"
            className="rounded-xl border bg-white p-2"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#103c33] p-3">
            <ModeratorNav close={() => setOpen(false)} />
          </div>
        )}
      </header>

      <aside className="fixed inset-y-0 left-0 hidden w-72 flex-col bg-[#103c33] p-5 text-white lg:flex">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-2xl font-semibold"
        >
          <span className="grid size-10 place-items-center rounded-full bg-[#e7a332]">
            <ShieldCheck className="size-5" />
          </span>
          <span>TripPlan AI</span>
          <span className="rounded-full bg-white/10 px-2 py-1 font-sans text-[10px] tracking-wider text-[#f3bd66]">
            MOD
          </span>
        </Link>
        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/10 p-3">
          <Avatar className="size-11">
            <AvatarFallback className="bg-[#e7a332] font-bold text-white">
              NI
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate font-semibold">Nishad Yeasmin</p>
            <p className="text-xs text-white/55">Content Moderator</p>
          </div>
          <span className="ml-auto size-2 rounded-full bg-emerald-400" />
        </div>
        <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1">
          <ModeratorNav />
        </div>
        <div className="mt-4 space-y-2 border-t border-white/10 pt-4">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start text-white/70 hover:bg-white/10 hover:text-white"
          >
            <Link href="/">← Back to TripPlan AI</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start text-white/60 hover:bg-white/10 hover:text-white"
          >
            <Link href="/login">
              <LogOut className="size-4" /> Sign out
            </Link>
          </Button>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="hidden h-20 items-center justify-between border-b border-[#dcd7ca] bg-white/70 px-8 backdrop-blur lg:flex">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#bd7718]">
              Content Quality Control Center
            </p>
            <p className="mt-1 text-sm text-[#6f7f78]">
              Friday, 28 August · Dhaka, Bangladesh
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              aria-label="Notifications"
              className="relative rounded-xl border bg-white p-2.5"
            >
              <BellRing className="size-5" />
              <span className="absolute -right-1 -top-1 grid size-5 place-items-center rounded-full bg-[#bd4e3a] text-[10px] text-white">
                5
              </span>
            </button>
            <span className="rounded-full border bg-white px-4 py-2 text-xs font-semibold">
              Moderator access
            </span>
          </div>
        </header>
        <main className="px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
