import { notFound } from "next/navigation";
import { APARTMENTS, findApartment } from "@/lib/apartments";
import { ApartmentDetailClient } from "./ApartmentDetailClient";

export function generateStaticParams() {
  return APARTMENTS.map((a) => ({ code: a.code }));
}

export default async function ApartmentDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const apartment = findApartment(code);
  if (!apartment) notFound();
  return <ApartmentDetailClient apartment={apartment} />;
}
