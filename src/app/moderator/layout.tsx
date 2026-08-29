import { ModeratorShell } from "@/components/moderator/moderator-shell";

export default function ModeratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ModeratorShell>{children}</ModeratorShell>;
}
