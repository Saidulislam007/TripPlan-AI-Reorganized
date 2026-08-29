import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { PackingPage } from "@/components/dashboard/dashboard-pages";
export default function Page() {
  return (
    <DashboardShell>
      <PackingPage />
    </DashboardShell>
  );
}
