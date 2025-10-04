// import Image from "next/image";

// interface ApartmentCardProps {
//   id?: string; // so we can link to details
//   name: string;
//   price: number;
//   location: string;
//   imageUrl: string;
// }

// export default function ApartmentCard({
//   id,
//   name,
//   price,
//   location,
//   imageUrl,
// }: ApartmentCardProps) {
//   return (
//     <div className="rounded-2xl shadow-lg overflow-hidden bg-white hover:scale-[1.02] transition-transform">
//       <div className="relative w-full h-48">
//         <Image
//           src={imageUrl || "/placeholder.jpg"} // fallback
//           alt={name}
//           fill
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, 33vw"
//         />
//       </div>
//       <div className="p-4">
//         <h2 className="text-lg font-bold">{name}</h2>
//         <p className="text-gray-500">{location}</p>
//         <p className="text-blue-600 font-semibold mt-2">
//           ${price.toLocaleString()}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client";

import { TApartment } from "@/types";
import Link from "next/link";

export default function ApartmentCard({ apartment }: { apartment: TApartment }) {
  return (
    <Link href={`/apartments/${apartment._id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg cursor-pointer transition">
        <img
          src={apartment.images?.[0] || "/placeholder.jpg"}
          alt={apartment.unitName}
          className="w-full h-40 object-cover rounded-md"
        />

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-lg font-semibold">{apartment.unitName}</h2>
          <span
            className={`px-2 py-1 text-xs font-medium rounded ${
              apartment.
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {apartment.available ? "Available" : "Not Available"}
          </span>
        </div>

        <p className="text-gray-600 mt-1">Price: ${apartment.price}</p>
        <p className="text-sm text-gray-500">📍 {apartment.location}</p>
        <p className="text-sm text-gray-500">🏢 Project: {apartment.project}</p>
      </div>
    </Link>
  );
}


