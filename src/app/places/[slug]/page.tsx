import { Shell } from "@/components/layout/tripflow";
import { PlaceDetail } from "@/components/destinations/place-detail";
export default function PlacePage() {
  return (
    <Shell>
      <main className="bg-[#f7f4ed]">
        <PlaceDetail />
      </main>
    </Shell>
  );
}
