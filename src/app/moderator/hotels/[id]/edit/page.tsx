import { ContentEditor } from "@/components/moderator/moderator-pages";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ContentEditor type="hotels" id={id} />;
}
