"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchApartmentById } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { TApartment } from "@/types";
import ImageCarousel from "@/components/atoms/ImageCarousel";

export default function ApartmentDetails() {
  const params = useParams();
  const id = params?.id as string;

  const [apartment, setApartment] = useState<TApartment | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const data = await fetchApartmentById(id);
        setApartment(data);
      }
    }
    fetchData();
  }, [id]);

  if (!apartment) {
    return <div className="text-center py-6">Loading apartment details...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <ImageCarousel images={apartment.images} alt={apartment.unitName} />

      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h1 className="text-2xl font-bold">
          {apartment.unitName} ({apartment.unitNumber})
        </h1>
        <p className="text-gray-600 text-lg">{apartment.project}</p>

        <div className="flex flex-wrap gap-4 items-center">
          <p className="text-xl font-semibold text-green-600">
            ${apartment.price.toLocaleString()}
          </p>
          <p className="text-gray-700">📍 {apartment.location}</p>
          <p className="text-gray-700">🛏 {apartment.rooms} rooms</p>
          <Badge
            className={
              apartment.available
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }
          >
            {apartment.available ? "Available" : "Not Available"}
          </Badge>
        </div>

        {apartment.description && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">
              {apartment.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
