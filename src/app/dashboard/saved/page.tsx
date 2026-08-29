import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { SavedPage } from "@/components/dashboard/dashboard-pages";
export default function Page() {
  return (
    <DashboardShell>
      <SavedPage />
    </DashboardShell>
  );
}
