"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Plane,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  BedDouble,
  Utensils,
  Bus,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [open, setOpen] = useState(false);
  const [essentialsOpen, setEssentialsOpen] = useState(false);
  const path = usePathname();
  const primaryLinks = [
    ["/travel-intelligence", "AI Intelligence"],
    ["/explore-bangladesh", "Explore Bangladesh"],
    ["/tour-packages", "Tour Packages"],
  ];
  const finalLinks = [
    ["/about", "About"],
    ["/contact", "Contact"],
  ];
  const essentialLinks = [
    ["/hotels", "Hotels", BedDouble, "Find the right stay"],
    ["/food", "Food", Utensils, "Taste regional favourites"],
    ["/transport", "Transport", Bus, "Compare routes and fares"],
  ] as const;
  return (
    <header className="sticky top-0 z-50 border-b border-[#173d3520] bg-[#f7f4ed]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-[#123f36]">
          <span className="grid size-9 place-items-center rounded-full bg-[#e9a63a] text-white">
            <Plane className="size-4 -rotate-12" />
          </span>
          <span className="font-serif text-2xl font-semibold tracking-tight">
            TripPlan AI
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {primaryLinks.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition hover:text-[#c77c19] ${path === href ? "text-[#c77c19]" : "text-[#315c52]"}`}
            >
              {label}
            </Link>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-1 text-sm font-medium transition hover:text-[#c77c19] ${["/hotels", "/food", "/transport"].some((route) => path.startsWith(route)) ? "text-[#c77c19]" : "text-[#315c52]"}`}
              >
                Travel Essentials <ChevronDown className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-64 rounded-2xl border-[#ddd8ca] bg-[#fffdf8] p-2 shadow-xl"
            >
              <DropdownMenuLabel className="px-3 py-2 font-serif text-lg text-[#123f36]">
                Explore your journey
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {essentialLinks.map(([href, label, Icon, description]) => (
                <DropdownMenuItem asChild key={href} className="rounded-xl p-0">
                  <Link
                    href={href}
                    className="flex w-full items-center gap-3 p-3"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[#f5e5c7] text-[#b87316]">
                      <Icon className="size-4" />
                    </span>
                    <span>
                      <b className="block text-sm text-[#123f36]">{label}</b>
                      <small className="text-[#788780]">{description}</small>
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {finalLinks.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition hover:text-[#c77c19] ${path === href ? "text-[#c77c19]" : "text-[#315c52]"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <Link href="/login">Log in</Link>
          </Button>
          <Button
            asChild
            className="rounded-full bg-[#123f36] px-5 hover:bg-[#1b594c]"
          >
            <Link href="/travel-intelligence">
              Plan my trip <ArrowRight />
            </Link>
          </Button>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t bg-[#f7f4ed] p-5 md:hidden">
          {primaryLinks.map(([h, l]) => (
            <Link
              onClick={() => setOpen(false)}
              className="block border-b py-3"
              href={h}
              key={h}
            >
              {l}
            </Link>
          ))}
          <button
            onClick={() => setEssentialsOpen(!essentialsOpen)}
            className="flex w-full items-center justify-between border-b py-3 text-left"
          >
            Travel Essentials
            <ChevronDown
              className={`size-4 transition-transform ${essentialsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {essentialsOpen && (
            <div className="rounded-b-xl bg-white/70 px-2 py-2">
              {essentialLinks.map(([href, label, Icon, description]) => (
                <Link
                  href={href}
                  key={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-white"
                >
                  <Icon className="size-4 text-[#c77c19]" />
                  <span>
                    <b className="block text-sm">{label}</b>
                    <small className="text-[#788780]">{description}</small>
                  </span>
                </Link>
              ))}
            </div>
          )}
          {finalLinks.map(([h, l]) => (
            <Link
              onClick={() => setOpen(false)}
              className="block border-b py-3"
              href={h}
              key={h}
            >
              {l}
            </Link>
          ))}
          <Link href="/login" className="mt-4 block text-[#c77c19]">
            Log in →
          </Link>
        </div>
      )}
    </header>
  );
}
