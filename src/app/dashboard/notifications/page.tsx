import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { NotificationsPage } from "@/components/dashboard/dashboard-pages";
export default function Page() {
  return (
    <DashboardShell>
      <NotificationsPage />
    </DashboardShell>
  );
}
