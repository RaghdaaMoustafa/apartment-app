"use client";

import { useEffect, useState } from "react";
import SearchBar from "../atoms/SearchBar";
import ApartmentCard from "../atoms/ApartmentCard";
import { fetchApartments } from "@/lib/api";
import { TApartment } from "@/types";



export default function ApartmentList() {
  const [apartments, setApartments] = useState<TApartment[]>([]);
  const [filtered, setFiltered] = useState<TApartment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchApartments();
        setApartments(data);
        setFiltered(data);
      } catch (err) {
        console.error("Failed to fetch apartments", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSearch = (query: string) => {
    const q = query.toLowerCase();
    setFiltered(
      apartments.filter(
        (apt) =>
          apt.unitName.toLowerCase().includes(q) ||
          apt.unitNumber.toLowerCase().includes(q) ||
          apt.project.toLowerCase().includes(q)
      )
    );
  };

  if (loading) {
    return <div className="text-center py-6">Loading apartments...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Search bar */}
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} />
      </div>

      {/* Apartments grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((apt) => (
            <ApartmentCard
              key={apt._id}
              apartment={apt}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No apartments found.</p>
        )}
      </div>
    </div>
  );
}
