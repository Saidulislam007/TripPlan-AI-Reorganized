import { Shell } from "@/components/layout/tripflow";
import { HotelCompare } from "@/components/hotels/hotel-detail";
import { Suspense } from "react";
export default function Compare() {
  return (
    <Shell>
      <main className="min-h-screen bg-[#f7f4ed]">
        <Suspense fallback={<div className="min-h-screen bg-[#f7f4ed]" />}>
          <HotelCompare />
        </Suspense>
      </main>
    </Shell>
  );
}
