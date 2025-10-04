"use client";

import { useEffect, useState } from "react";
import SearchBar from "../atoms/SearchBar";
import ApartmentCard from "../atoms/ApartmentCard";
import { fetchApartments } from "@/lib/api";
import { TApartment } from "@/types";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import AddApartmentModal from "./AddApartmentModal";

export default function ApartmentList() {
  const [apartments, setApartments] = useState<TApartment[]>([]);
  const [filtered, setFiltered] = useState<TApartment[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

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

  const handleApartmentAdded = (newApartment: TApartment) => {
    setApartments((prev) => [...prev, newApartment]);
    setFiltered((prev) => [...prev, newApartment]);
  };
  if (loading) {
    return <div className="text-center py-6">Loading apartments...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6 flex flex-col gap-4">
        <div className="flex justify-end">
          <Button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-medium px-4 py-2 rounded-full"
          >
            <Plus size={18} />
            Add Apartment
          </Button>
        </div>

        <div className="flex justify-start">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((apt) => <ApartmentCard key={apt._id} apartment={apt} />)
        ) : (
          <p className="text-center col-span-full">No apartments found.</p>
        )}
      </div>
      <AddApartmentModal
        open={open}
        onClose={() => setOpen(false)}
        onApartmentAdded={handleApartmentAdded} 
      />
    </div>
  );
}
