import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { ProfilePage } from "@/components/dashboard/dashboard-pages";
export default function Page() {
  return (
    <DashboardShell>
      <ProfilePage />
    </DashboardShell>
  );
}
