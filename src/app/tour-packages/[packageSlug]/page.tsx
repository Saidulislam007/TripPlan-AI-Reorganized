import { TourPackageDetail } from "@/components/tour-packages/tour-package-pages";
import { getTourPackage } from "@/lib/tour-packages";

export default async function Page({
  params,
}: {
  params: Promise<{ packageSlug: string }>;
}) {
  const { packageSlug } = await params;
  return <TourPackageDetail item={getTourPackage(packageSlug)} />;
}
