import { AIDetailPage } from "@/components/moderator/moderator-pages";
export default async function Page({
  params,
}: {
  params: Promise<{ contentId: string }>;
}) {
  const { contentId } = await params;
  return <AIDetailPage id={contentId} />;
}
