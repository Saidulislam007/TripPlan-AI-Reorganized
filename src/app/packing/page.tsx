import { redirect } from "next/navigation";

export default function LegacyPackingRedirect() {
  redirect("/dashboard/packing");
}
