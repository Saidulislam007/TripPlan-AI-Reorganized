import { Shell } from "@/components/layout/tripflow";
import { HotelDetail } from "@/components/hotels/hotel-detail";
export default function HotelPage() {
  return (
    <Shell>
      <main className="bg-[#f7f4ed]">
        <HotelDetail />
      </main>
    </Shell>
  );
}
