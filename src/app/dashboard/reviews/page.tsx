import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ReviewsPage } from "@/components/dashboard/dashboard-pages";
export default function Page() {
  return (
    <DashboardShell>
      <ReviewsPage />
    </DashboardShell>
  );
}
