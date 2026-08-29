import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { TripsPage } from "@/components/dashboard/dashboard-pages";
export default function Page() {
  return (
    <DashboardShell>
      <TripsPage />
    </DashboardShell>
  );
}
