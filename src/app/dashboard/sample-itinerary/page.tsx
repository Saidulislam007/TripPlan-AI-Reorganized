import TripDetailsPage from "@/app/dashboard/trips/[tripId]/page";

export default function SampleItineraryPage() {
  return (
    <TripDetailsPage
      params={Promise.resolve({ tripId: "cox-family-escape" })}
    />
  );
}
