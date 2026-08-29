import { BookingPage } from "@/components/tour-packages/tour-package-pages";
import { getTourPackage } from "@/lib/tour-packages";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ packageSlug: string }>;
  searchParams: Promise<{ travellers?: string }>;
}) {
  const { packageSlug } = await params;
  const { travellers } = await searchParams;
  return (
    <BookingPage
      item={getTourPackage(packageSlug)}
      initialTravellers={Number(travellers) || 2}
    />
  );
}
