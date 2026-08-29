import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "TripPlan AI — AI Travel Planner Bangladesh",
  description:
    "Plan practical, personalized Bangladesh trips with AI—routes, budget, food, itinerary and packing in one place.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}