import { Shell } from "@/components/layout/tripflow";
import { TransportGuide } from "@/components/transport/transport-guide";
export default function Transport() {
  return (
    <Shell>
      <main className="min-h-screen bg-[#f7f4ed] px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <TransportGuide />
        </div>
      </main>
    </Shell>
  );
}
