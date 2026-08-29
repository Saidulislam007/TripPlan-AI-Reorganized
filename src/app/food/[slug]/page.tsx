import { Shell } from "@/components/layout/tripflow";
import { FoodDetail } from "@/components/food/food-detail";
export default function FoodPage() {
  return (
    <Shell>
      <main className="bg-[#f7f4ed]">
        <FoodDetail />
      </main>
    </Shell>
  );
}
