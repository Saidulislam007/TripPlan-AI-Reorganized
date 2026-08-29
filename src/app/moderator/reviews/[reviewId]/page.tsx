import { ReviewDetailPage } from "@/components/moderator/moderator-pages";
export default async function Page({
  params,
}: {
  params: Promise<{ reviewId: string }>;
}) {
  const { reviewId } = await params;
  return <ReviewDetailPage id={reviewId} />;
}
