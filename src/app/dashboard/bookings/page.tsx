import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { BookingsDashboardPage } from "@/components/tour-packages/tour-package-pages";

export default function Page() {
  return (
    <DashboardShell>
      <BookingsDashboardPage />
    </DashboardShell>
  );
}
