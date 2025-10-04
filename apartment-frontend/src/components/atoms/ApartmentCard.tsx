"use client";

import { TApartment } from "@/types";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function ApartmentCard({
  apartment,
}: {
  apartment: TApartment;
}) {
  return (
    <Link href={`/apartments/${apartment._id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg cursor-pointer transition">
        <img
          src={apartment.images?.[0]}
          alt={apartment.unitName}
          className="w-full h-40 object-cover rounded-md"
        />

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-lg font-semibold">{apartment.unitName}</h2>
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

        <p className="text-gray-600 mt-1">Price: ${apartment.price}</p>
        <p className="text-sm text-gray-500">📍 {apartment.location}</p>
        <p className="text-sm text-gray-500">🏢 Project: {apartment.project}</p>
      </div>
    </Link>
  );
}
